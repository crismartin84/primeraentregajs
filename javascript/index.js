alert("ingrese el producto que desea llevar, para salir presione 0")
let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jean $5000 4-zapatillas $6000 "));
let seleccionarCantidad;
let total = 0

const cantidad = (cantidad, precio) => {
    return cantidad * precio


while(seleccionarProductos !=0){
    switch(seleccionarProductos){
        case 1:
            seleccionarCantidad = Number(prompt("elegiste el buzo, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 3000)
            break;
            case 2:
                seleccionarCantidad = Number(prompt("elegiste la remera, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 1500)
                break;
                case 3:
                    seleccionarCantidad = Number(prompt("elegiste el jean, indique la cantidad"))
                    total += cantidad(seleccionarCantidad, 5000)
                    break;
                    case 4:
                        seleccionarCantidad = Number(prompt("elegiste las zapatillas, indique la cantidad"))
                        total += cantidad(seleccionarCantidad, 6000)
                        break;

                        default:

                        break;
    }
    let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jean $5000 4-zapatillas $6000 "));
}


}

alert("el total de la compra es de: " + total)