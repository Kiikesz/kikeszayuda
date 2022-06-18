const tituloVariable = document.getElementById("tituloVariable")
const listadoVariable = document.getElementById("listadoVariable")
const listaDefinida = document.getElementById("listaDefinida")

tituloVariable.innerText = "Hola Bienvenido :)"

function listadoProduct() {
    productos.forEach((producto)=> {
        const row = `<tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            </tr>`
        // document.querySelector("tbody").innerText += row
        console.log(row)
    });
    }