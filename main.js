const DESCUENTO_MINIMO = 10000; 
const PORCENTAJE_DESCUENTO = 0.1; 

let total = 0;
let cantidadProductos = 0;
let entrada = "";

do {
  entrada = prompt('Precio del producto (o escribí "fin" para cerrar el pedido):');

  if (entrada === null || entrada.toLowerCase() === "fin") {
    entrada = "fin";
  } else {
    const precio = parseFloat(entrada);

    if (isNaN(precio) || precio <= 0) {
      console.log("Precio inválido, no se agregó al pedido.");
    } else {
      total += precio;
      cantidadProductos++;
      console.log(`Producto agregado: $${precio}. Total parcial: $${total}`);
    }
  }
} while (entrada !== "fin");

let totalFinal = total;
let mensaje = "";

if (cantidadProductos === 0) {
  mensaje = "No se cargó ningún producto.";
} else if (total >= DESCUENTO_MINIMO) {
  const descuento = total * PORCENTAJE_DESCUENTO;
  totalFinal = total - descuento;
  mensaje = `Pedido de ${cantidadProductos} producto(s). Total: $${total}. ` +
    `Superaste el mínimo, descuento aplicado: -$${descuento}. Total a pagar: $${totalFinal}`;
} else {
  mensaje = `Pedido de ${cantidadProductos} producto(s). Total a pagar: $${totalFinal}`;
}

console.log(mensaje);
alert(mensaje);
