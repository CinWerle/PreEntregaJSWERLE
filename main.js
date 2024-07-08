let productos = [
    { nombre: "cheesseburger", precio: 1300 },
    { nombre: "american", precio: 1500 },
    { nombre: "crispy", precio: 1600 },
    { nombre: "bacon", precio: 1800 },
    { nombre: "triple queso", precio: 1850 },
  ];
  
  let productosCarrito = []
  let total = 0;
  let respuesta;
  

  function mostrarMenu() {
    let option = prompt(`agregar productos al carrito:
              1- Cheesseburger: $1300
              2- American: $1500
              3- Crispy: $1600
              4- Bacon: $1800
              5- Triple queso: $1850
              6- Salir
              `);
  
          
        switch (option) {
          case "1":
            alert(`Se agrego ${productos[0].nombre} al carrito`);
            total = total + productos[0].precio;
            productosCarrito.push(productos[0].nombre)
            respuesta = prompt("Desea agregar algo mas? Si o No");
              break;
            
          case "2":
            alert(`Se agrego ${productos[1].nombre} al carrito`);
            total = total + productos[1].precio;
            productosCarrito.push(productos[1].nombre)
            respuesta = prompt("Desea agregar algo mas? Si o No");
              break;
      
          case "3":
            alert(`Se agrego ${productos[2].nombre} al carrito`);
            total = total + productos[2].precio;
            productosCarrito.push(productos[2].nombre)
            respuesta = prompt("Desea agregar algo mas? Si o No");
              break;
      
          case "4":
            alert(`Se agrego ${productos[3].nombre} al carrito`);
            total = total + productos[3].precio;
            productosCarrito.push(productos[3].nombre)
            respuesta = prompt("Desea agregar algo mas? Si o No");
              break;
      
          case "5":
            alert(`Se agrego ${productos[4].nombre} al carrito`);
            total = total + productos[4].precio;
            productosCarrito.push(productos[4].nombre)
            respuesta = prompt("Desea agregar algo mas? Si o No");
              break;
      
          case "6":
            alert("Gracias, vuelva pronto");
            break;

          default:
            alert("Ingrese una opcion valida");
            break;
        }

  }
  
  

  mostrarMenu();
  while (respuesta == "si") {
    mostrarMenu()
  }


  alert(`El total de su compra es de ${total}`)
  alert(`Lista de Productos: ${productosCarrito}`)