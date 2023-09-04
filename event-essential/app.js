// // Image URIs
const blackCarImage = "url(https://i.postimg.cc/NGRJX8hr/black-benz.jpg)";
const redCarImage = "url(https://i.postimg.cc/cH2pJdny/red-benz.webp)";
const grayCarImage = "url(https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg)";

// // 1 - Funcion que al clickear de un mensaje window.alert
// // `🥳 Woohoo, You're about to own a benz 🎊`

//  // Obtenemos una referencia al botón
//  const buyCarButton = document.getElementById("button");

// // Agregamos un event listener al botón
//  buyCarButton.addEventListener("click", function () {
//   // Mostramos el mensaje de alerta
//    window.alert("🥳 Woohoo, You're about to own a benz 🎊");
//  });

//  // 2 - Funcion de redirigir a paypal una vez que da
//  // click en "Buy now". https://www.paypal.com/us/signin

//  // Obtenemos una referencia al botón
//  const buyNowButton = document.getElementById("button");

// // // Definimos la función para redirigir a PayPal
// function redirectToPayPal() {
//  // Redireccionamos al usuario a la página de inicio de sesión de PayPal
//   window.location.href = "https://www.paypal.com/us/signin";
// // }

//  // Agregamos un event listener al botón
//  buyNowButton.addEventListener("click", redirectToPayPal);

// // 3 - Funciones para cambiar el color/img
// // del auto al hacer click en el color

//PARA CAMBIAR A SOLAMENTE EL COLOR ROJO

//  const red = document.getElementsByClassName("red")[0];
//  const productImage = document.getElementsByClassName("product-image")[0];

//  red.addEventListener("click", changeColorRed);

//  function changeColorRed() {
//    productImage.setAttribute("style", `background-image: ${redCarImage}`);
//    console.log("hola");
//  }

// 4 - DRY optimizar funciones que cambian color del auto
// en una sola

// EN VEZ DE HACERLO ASÍ

// ELEMENT HTML
// const red = document.getElementsByClassName(`red`)[0];
// const black = document.getElementsByClassName(`black`)[0];
// const gray = document.getElementsByClassName(`gray`)[0];
// const productImage = document.getElementsByClassName(`product-image`)[0];

// //EVENT LISTENER
// red.addEventListener("click", changeColorRed);
// black.addEventListener("click", changeColorBlack);
// gray.addEventListener("click", changeColorGray);

//FUNCTIONS
// function changeColorRed() {
//   productImage.setAttribute(`style`, `background-image: ${redCarImage}`);
// }
// function changeColorBlack() {
//   productImage.setAttribute(`style`, `background-image: ${blackCarImage}`);
// }

// function changeColorGray() {
//   productImage.setAttribute(`style`, `background-image: ${grayCarImage}`);
// }

//HACERLO ASÍ

const colors = { black: blackCarImage, red: redCarImage, gray: grayCarImage };

const productImage = document.getElementsByClassName("product-image")[0];

const red = document.getElementsByClassName("red")[0];
const black = document.getElementsByClassName("black")[0];
const gray = document.getElementsByClassName("gray")[0];

// red.addEventListener("click", changeColor);
// black.addEventListener("click", changeColor);
// gray.addEventListener("click", changeColor);

// const colors = { black: blackCarImage, red: redCarImage, gray: grayCarImage };

function changeColor(event) {
  const color = event.target.className;
  productImage.setAttribute("style", `background-image: ${colors[color]}`);
}
