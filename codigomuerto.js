// Ruta para actualizar un producto existente
/*app.put('/productos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const productoIndex = productos.findIndex(producto => producto.codigo === codigo);
    if (productoIndex !== -1) {
        productos[productoIndex] = req.body;
        res.json(productos[productoIndex]);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});*/

// Ruta para eliminar un producto
/*app.delete('/productos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const productoIndex = productos.findIndex(producto => producto.codigo === codigo);
    if (productoIndex !== -1) {
        const productoEliminado = productos.splice(productoIndex, 1);
        res.json({ message: `Producto con código ${codigo} eliminado exitosamente` });
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});*/

// Ruta para agregar un nuevo producto
/*app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.json(nuevoProducto);
});*/

// Ruta para obtener un producto por su código
/*app.get('/productos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const producto = productos.find(producto => producto.codigo === codigo);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});*/

// Ruta para obtener todos los productos
/*app.get('/productos', (req, res) => {
    res.json(productos);
});*/

// const {Producto,Precio } = require('./producto')
// const { productos } = require('./producto');

const { Producto, Precio, productos } = require('./producto');