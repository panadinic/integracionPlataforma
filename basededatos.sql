CREATE DATABASE ferremas;
USE ferremas;

CREATE TABLE productos (
    codigo_del_producto VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    codigo VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (codigo)
);

CREATE TABLE precios (
    id_precio INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    codigo_producto VARCHAR(255) NOT NULL,
    FOREIGN KEY (codigo_producto) REFERENCES productos(codigo)
);

-- Insertar un producto
INSERT INTO productos (codigo_del_producto, marca, codigo, nombre)
VALUES ('FER-12345', 'Bosch', 'BOS-67890', 'Taladro Percutor Bosch');

-- Insertar un precio asociado al producto
INSERT INTO precios (fecha, valor, codigo_producto)
VALUES ('2023-05-10 03:00:00', 89090.99, 'BOS-67890');

-- Agregar otro producto y su precio
INSERT INTO productos (codigo_del_producto, marca, codigo, nombre)
VALUES ('GUIT-12345', 'GIBSON', 'LESPAUL-100', 'Guitarra Les Paul');

INSERT INTO precios (fecha, valor, codigo_producto)
VALUES ('2023-05-10 03:00:00', 600000.99, 'LESPAUL-100');



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pablo';
FLUSH PRIVILEGES;

//hacer partir la abse en terminal
sudo mysql -u root -p
