function cargarArreglo() {
    // Obtener valores de los campos de entrada
    let codigo = document.getElementById("nombre").value;
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("edad").value;
    let cantidad = document.getElementById("cantidad").value;
    let fecha = document.getElementById("fecha").value;
    
    // Validar que los campos no estén vacíos
    if (codigo === "" || producto === "" || precio === "" || cantidad === "" || fecha === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Obtener la tabla
    let tabla = document.getElementById("estudiantes");

    // Crear una nueva fila
    let fila = tabla.insertRow();

    // Insertar celdas en la fila
    let celdaCodigo = fila.insertCell(0);
    let celdaProducto = fila.insertCell(1);
    let celdaPrecio = fila.insertCell(2);
    let celdaCantidad = fila.insertCell(3);
    let celdaFecha = fila.insertCell(4);

    // Asignar valores a las celdas
    celdaCodigo.innerText = codigo;
    celdaProducto.innerText = producto;
    celdaPrecio.innerText = precio;
    celdaCantidad.innerText = cantidad;
    celdaFecha.innerText = fecha;

    // Limpiar los campos después de agregar la fila
    document.getElementById("nombre").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("fecha").value = "";
}

   


function cargarDesdeLocalStorage(){
    let datosGuardados = localStorage.getItem("producto");
    if (datosGuardados){
       estudiantes = JSON.parse(datosGuardados);
       mostrarProcducto();
    }
}
