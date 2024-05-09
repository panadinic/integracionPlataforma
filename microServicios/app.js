const express = require('express');//importa el modulo express y lo añade a la constante express
const app = express();//se crea un instancia en app utilizando el modulo express
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());



app.use(express.json());// Middleware para analizar solicitudes JSON
app.use(express.static('frontend'));




// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pablo',
    database: 'ferremas'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});



//metodos importantes


app.get('/productos', (req, res) => {
    const sql = `
        SELECT 
            p.codigo_del_producto, 
            p.marca, 
            p.codigo, 
            p.nombre, 
            pr.valor, 
            pr.fecha
        FROM productos p
        JOIN precios pr ON p.codigo = pr.codigo_producto;
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error al recuperar los productos" });
            return;
        }
        res.json(results);
    });
});






app.put('/productos/:codigo', (req, res) => {
    let sql = 'UPDATE productos SET ? WHERE codigo = ?';
    db.query(sql, [req.body, req.params.codigo], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.json({ ...req.body });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    });
});




app.post('/productos', (req, res) => {
    let sql = 'INSERT INTO productos SET ?';
    db.query(sql, req.body, (err, result) => {
        if (err) throw err;
        res.status(201).json({ id: result.insertId, ...req.body });
    });
});




app.delete('/productos/:codigo', (req, res) => {
    let sql = 'DELETE FROM productos WHERE codigo = ?';
    db.query(sql, [req.params.codigo], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.json({ message: `Producto con código ${req.params.codigo} eliminado exitosamente` });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    });
});


// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

