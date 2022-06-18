    function verCatalogo() {
    console.clear()
    console.table(productos)
    tituloVariable.innerText = "Productos"
}





function AgregarCarrito() {
    console.clear()
    console.table(productos)
    tituloVariable.innerText = "Carrito"
    let agregarProduct = prompt("Ingresa el Id del producto que deseas agregar")
    agregarProduct = parseFloat(agregarProduct)   
    let resultado = productos.some(producto => producto.id == agregarProduct)
    while (resultado === false) {
        agregarProduct = prompt("Producto no existe, porfavor revisa en la tabla de console e ingresa un id correcto")
        agregarProduct = parseFloat(agregarProduct)
        resultado = productos.some(producto => producto.id == agregarProduct)
    }
    const nombrecarrito = productos.find(producto => producto.id === agregarProduct).nombre 
    const precioCarrito = productos.find(producto => producto.id === agregarProduct).precio
    Carrito.push(new itemCarrito(agregarProduct, nombrecarrito, precioCarrito))
}




function eliminarProducto() {
console.clear()
console.table(Carrito)
tituloVariable.innerText = "Carrito"
    let todook = 1
    let eliminado = prompt("Ingrese el id del producto que desea sacar del carrito")
    eliminado = parseFloat(eliminado)
    verificacionEliminado = Carrito.some(itemCarrito => itemCarrito.id == eliminado)
    if (verificacionEliminado === true){
        todook= 2
    }

    while (todook != 2) {
        console.clear()
        console.table(Carrito)
        eliminado = prompt("el id que deseas eliminar no se encuentra en el carrito, por favor verifica en console el id del producto i escribelo aquí:")
        eliminado = parseFloat(eliminado)
        verificacionEliminado = Carrito.some(itemCarrito => itemCarrito.id == eliminado)
        if (verificacionEliminado === true){
            todook= 2
        }
}
    eliminado = Carrito.findIndex(itemCarrito => itemCarrito.id === eliminado)
    eliminado = parseFloat(eliminado)
    Carrito.splice(eliminado, 1)
    console.clear()
    console.warn("Eliminamos el producto de tu carrito :(")
    console.table(Carrito)
}



function vaciarCarito() {
    console.clear()
    console.table(Carrito)
    tituloVariable.innerText = "Carrito"
let respuesta = confirm("Estas Seguro que deseas vaciar el carrito")
if(respuesta === true){
    let vaciarcarrito = Carrito.length
    Carrito.splice(0, vaciarcarrito)
    console.clear()
    console.warn("Hemos Vaciado tu Carrito :(")
}
else{
    console.clear()
    alert("Genial! tu carrto esta intacto :)")
    console.table(Carrito)
}
}



function checkout() {
    console.clear()
    console.table(Carrito)
    tituloVariable.innerText = "Carrito"
    let totalcarrito = Carrito.reduce((total, itemCarrito) => total + itemCarrito.precio, 0)
    totalcarrito = totalcarrito.toFixed(2)
    alert("Total sin iva: " + totalcarrito + "$")
    let totalIva= totalcarrito * iva
    totalIva = totalIva.toFixed(2)
    alert("el total a pagar con iva es " + totalIva + "$")
    prompt("ingresa tu nombre")
    prompt("Ingresa el Nro de Tarjeta")
    alert("Gracias por tu compra :)")
    let vaciarcarrito = Carrito.length
    Carrito.splice(0, vaciarcarrito)
    console.clear()
}

