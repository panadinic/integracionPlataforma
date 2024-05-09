class Producto{
    constructor(codigoproducto, marca,codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.codigoproducto = codigoproducto;
        this.precio = precio;
    }
}

class Precio {
    constructor(valor,fecha){
        this.valor = valor;
        this.fecha = fecha

    }
}


const productos = [
    new Producto("FER-54321", "Bosch", "BOS-67890", "Taladro Percutor Bosch", new Precio(89090.99, new Date("2023-05-10T03:00:00.000Z"))),
  
    // Otros productos aquí...
];

module.exports = {Producto,Precio, productos};