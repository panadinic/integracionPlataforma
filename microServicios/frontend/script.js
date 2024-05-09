document.addEventListener('DOMContentLoaded', function () {
    
    const tablaProductos = document.getElementById('tbodyProductos');

    // Función para cargar los productos desde el backend
    function cargarProductos() {
        fetch('http://localhost:8080/productos')
            .then(response => response.json())
            .then(productos => {
                const tablaProductos = document.getElementById('tbodyProductos');
                tablaProductos.innerHTML = '';
                productos.forEach(producto => {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${producto.codigo}</td>
                        <td>${producto.marca}</td>
                        <td>${producto.codigo_del_producto}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.valor}</td>
                        <td>${producto.fecha}</td>
                    `;
                    tablaProductos.appendChild(fila);
                });
            }).catch(error => {
                console.error('Error fetching products:', error);
            });
    }
    

 

    // Cargar los productos al cargar la página
    cargarProductos();
});