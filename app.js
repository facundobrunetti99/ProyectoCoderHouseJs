let productList = [
  {
    id: 1,
    name: "Harina",
    price: 300,
    stock: 15500,
  },

  {
    id: 2,
    name: "Leche",
    price: 450,
    stock: 12500,
  },

  {
    id: 3,
    name: "Azucar",
    price: 300,
    stock: 4500,
  },
  {
    id: 4,
    name: "Manteca",
    price: 350,
    stock: 3700,
  },
  { id: 5, name: "Arroz", price: 650, stock: 12320 },
];

function productsShow() {
  for (product of productList) {
    console.log(product);
  }
}

function producSum() {
  let totalDeSuma = productList.reduce((acumm, product) => {
    return acumm + product.price;
  }, 0);
  console.log(`Total de los productos : ${totalDeSuma}`);
}

function selectionProduct(input) {
  const nameProduct = input;
  const resultado = productList.filter(
    (producto) => producto.name === nameProduct
  );
  for (product of resultado) {
    alert(` 
        Nombre: ${product.name}
        Precio: ${product.price}
        Stock: ${product.stock}`);
  }
}

function addProduct() {
  let name;
  let priceString;
  let id;
  let stockString;
  let idString;
  let price;
  let stock;

  name = prompt("Ingrese el nombre del producto ");
  priceString = prompt("Ingrese el precio del producto");
  price = Number(priceString);
  idString = prompt("Ingrese el ID del producto");
  id = Number(idString);

  for (let i = 0; i < productList.length; i++) {
    while (productList[i].id === id) {
      alert("Por favor ingrese otro ID este ya existe" + productList[i].id);
      idString = prompt("Ingrese el ID del producto");
      id = Number(idString);
    }
  }

  stockString = prompt("Ingrese el stock del nuevo producto");
  stock = Number(stockString);
  productList.push({ id, name, price, stock });
}

function deleteProduct() {
  let index;

  let productName = prompt("Ingrese Nombre del producto");
  for (let i = 0; i < productList.length; i++) {
    if (productName == productList[i].name) {
      index = i;
      productList.splice(index, 1);
    }
  }
  console.log("PRODUCTO ELIMINADO CON EXITO");
  productsShow();
}

function modifyProduct(nameProduct1) {
  let index;
  const nameProduct = nameProduct1;
  const option = prompt("Que desea modificar?");
  let newName;
  let newPrice;
  let newStock;
  switch (option) {
    case "nombre":
      for (let i = 0; i < productList.length; i++) {
        if (nameProduct === productList[i].name) {
          index = i;
          newName = prompt("Ingrese el nuevo nombre del producto");
          productList[i].name = newName;
        }
      }
      break;

    case "precio":
      for (let i = 0; i < productList.length; i++) {
        if (nameProduct === productList[i].name) {
          index = i;
          newPrice = prompt("Ingrese el nuevo precio del producto");
          productList[i].price = Number(newPrice);
        }
      }
      break;

    case "stock":
      for (let i = 0; i < productList.length; i++) {
        if (nameProduct === productList[i].name) {
          index = i;
          newStock = prompt("Ingrese el nuevo stock del producto");
          productList[i].stock = Number(newStock);
        }
      }
      break;
  }
}

let optionWhile = false;
let input;
while (optionWhile != true) {
  let option1 = prompt(`
    Seleccione la option que corresponda a cada accion 
    1)Agregar producto
    2)Mostrar producto
    3)Cambiar producto
    4)Eleminar producto
    5)Mostrar los precios sumados del stock
    6)Buscar Productos
    7)Salir`);
  option1 = Number(option1);

  switch (option1) {
    case 1:
      addProduct();
      break;
    case 2:
      productsShow();
      break;

    case 3:
      const nameProduct1 = prompt(
        "Ingrese el nombre del producto que desea modificar"
      );
      modifyProduct(nameProduct1);
      break;
    case 4:
      deleteProduct();
      break;

    case 5:
      producSum();
      break;
    case 6:
      const input = prompt("Ingrese el producto a buscar");
      selectionProduct(input);
      break;

    case 7:
      optionWhile = true;
      break;
  }
}
