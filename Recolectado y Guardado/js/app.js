function agregarDatos(){
    //recolectar Informacion
    let nombre =prompt("Intoduce tu Nombre");
    let edad =prompt("Ingrese tu edad");

    //apuntar a la tabla creada a traves de un ID
    let tabla = document.getElementById("tablaPersonas");
    //crear una nueva fila (tr)
    let fila=""
    // asignar texto a las tablas
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></tr>`;
    tabla.innerHTML+=fila;

}