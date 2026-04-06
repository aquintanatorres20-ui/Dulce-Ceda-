let carrito = [];
let total = 0;

function Agregar(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    const totalHTML = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        lista.appendChild(li);
    });

    totalHTML.textContent = total;
}
