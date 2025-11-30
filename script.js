
let cart = [];

function addToCart(name, price, priceKg) {
    let qty = prompt("Masukkan jumlah (pcs atau gram):");
    if (!qty) return;
    qty = parseFloat(qty);
    let subtotal = qty > 10 ? (qty / 1000) * priceKg : qty * price;

    cart.push({name, qty, subtotal});
    updateCart();
}

function updateCart() {
    let box = document.getElementById("cart-items");
    box.innerHTML = "";
    let total = 0;

    cart.forEach(i => {
        box.innerHTML += `<p>${i.name} (${i.qty}) - Rp ${i.subtotal.toLocaleString()}</p>`;
        total += i.subtotal;
    });

    document.getElementById("total").innerText = total.toLocaleString();
}

function checkoutWA() {
    if (cart.length === 0) return alert("Keranjang kosong!");

    let text = "Halo, saya ingin memesan:%0A";
    cart.forEach(i => text += `- ${i.name} (${i.qty}) : Rp ${i.subtotal.toLocaleString()}%0A`);
    text += `%0ATotal: Rp ${document.getElementById("total").innerText}`;

    window.open("https://wa.me/6280000000000?text=" + text, "_blank");
}
