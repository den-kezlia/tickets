function updatePrice() {
    this.classList.toggle('active');

    let priceElement = document.getElementById('price');
    priceElement.innerText = parseFloat(priceElement.innerText) + 20;
}

let cycles = document.getElementsByClassName('st1');
Array.from(cycles).forEach(item => {
    item.addEventListener('click', updatePrice, false);
});