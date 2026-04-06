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
function enviarPedido() {
    let nombre = document.querySelector('input[placeholder="Tu nombre"]').value;

    if (!nombre) {
        alert("Por favor escribe tu nombre");
        return;
    }

    let mensaje = "Hola, soy " + nombre + "%0A%0AQuiero hacer este pedido:%0A";

    carrito.forEach(item => {
        mensaje += "- " + item.nombre + " ($" + item.precio + ")%0A";
    });

    mensaje += "%0ATotal: $" + total;

    let numero = "573185954290";
    let url = "https://wa.me/" + numero + "?text=" + mensaje;

    window.open(url, "_blank");
}
const wa = document.querySelector(".whatsapp-float");

let isDragging = false;
let offsetX, offsetY;

wa.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - wa.getBoundingClientRect().left;
    offsetY = e.clientY - wa.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        wa.style.left = (e.clientX - offsetX) + "px";
        wa.style.top = (e.clientY - offsetY) + "px";
        wa.style.right = "auto";
        wa.style.bottom = "auto";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


