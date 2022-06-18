const productos = []
const Carrito = []
var iva = 1.12

class producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

class itemCarrito {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}


function cargaproducto() {
    productos.push(new producto(1,"Bandas Adhesivas Kids 20uds Zuviss", 9.17))
    productos.push(new producto(2,"Bacitracina  500 Ui/g 15g SGG", 18.19))
    productos.push(new producto(3,"Azul de Metileno Fsi 30Cc.", 5.56))
    productos.push(new producto(4,"Azitromicina Kern Comp. 500 Mg X 3", 5.56))
    productos.push(new producto(5,"Azitromicina Buka Tab 500 Mg X 5", 3.89))
    productos.push(new producto(6,"Asma II Gotas 20ml", 4.44))
    productos.push(new producto(7,"Arnica D6 Globulis 8g", 2.77))
    productos.push(new producto(8,"Arnica D30 Globulis 8g", 4.16))
    productos.push(new producto(9,"Arnica 7Ch Globulis 8g", 4.44))
    productos.push(new producto(10,"Aranda  2,5/50 X30Capsulas", 3.10))
    
}

cargaproducto()
