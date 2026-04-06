let carrito = [];
let total = 0;

function agregar(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    const totalHTML = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;
        lista.appendChild(li);
    });

    totalHTML.textContent = total;
}
