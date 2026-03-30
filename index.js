let precio = 400000;
let quantity = 0;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");


// FUNCION para actualizar el total
function actualizarTotal() {
    let total = precio * quantity;
    totalSpan.innerHTML = total;
};

// Buttons
let buttonPlus = document.querySelector("#button-plus");
buttonPlus.addEventListener("click", () => {
    quantity = quantity + 1;
    cantidad.innerHTML = quantity;
    actualizarTotal();
});

let buttonMinus = document.querySelector("#button-minus");
buttonMinus.addEventListener("click", () => {
    quantity = quantity - 1;
    if (quantity < 0) {
        quantity = 0;
    };
    cantidad.innerHTML = quantity;
    actualizarTotal();
});