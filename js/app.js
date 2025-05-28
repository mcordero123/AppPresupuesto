let agregarDato = (event) =>{
    event.preventDefault();
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;
    console.log(tipo);

    if (descripcion!== "" && valor != "") {
        console.log("Descripción " + descripcion);
        console.log("Valor " + valor);

    }else {
        alert("Completa todos los campos.");
    }
}
