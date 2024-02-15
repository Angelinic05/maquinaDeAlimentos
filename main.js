//Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.


const preciosProductos = {
    A: 270,
    B: 340,
    C: 390
  };
  
  let mensajeProductos = "Productos disponibles:\n";
  for (let producto in preciosProductos) {
    mensajeProductos += `${producto}: $${preciosProductos[producto]}\n`;
  }
  confirm(mensajeProductos);
  const valoresMonedas = [100, 50, 10];
  const producto = prompt("Elija un producto:").toUpperCase();
  
  if (!preciosProductos[producto]) {
    confirm("No existe el producto");
  } else {
    const precioProducto = preciosProductos[producto];
    let montoIngresado = 0;
  
    while (montoIngresado < precioProducto) {
      const moneda = parseInt(prompt("Ingrese una moneda:"));
  
      if (![10, 50, 100].includes(moneda)) {
        confirm("Moneda no válida.");
        continue;
      }
  
      montoIngresado += moneda;
    }
  
    let vuelto = montoIngresado - precioProducto;
    confirm("Su vuelto:");
  
    for (let valor of valoresMonedas) {
      while (vuelto >= valor) {
        confirm(valor);
        vuelto -= valor;
      }
    }
  }
  

  