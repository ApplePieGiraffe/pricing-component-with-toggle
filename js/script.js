const toggleBtn = document.querySelector('.toggle-switch__btn');
const toggleCircle = document.querySelector('.toggle-switch__circle');
const cardPrices = document.querySelectorAll('.pricing-card__price__number');

let monthlyPrices = [19.99, 24.99, 39.99];
let annualPrices = [119.99, 249.99, 399.99];

function activateToggle() {
    toggleCircle.classList.toggle('toggle-switch__circle--annual');
    if (toggleCircle.classList.contains('toggle-switch__circle--annual')) {
        cardPrices.forEach((price, index) => {
            price.textContent = annualPrices[index];
        });
    } else {
        cardPrices.forEach((price, index) => {
            price.textContent = monthlyPrices[index];
        });
    }
}

toggleBtn.addEventListener('click', activateToggle);


// const priceBasic = document.querySelector('#price-basic');
// const priceProf = document.querySelector('#price-prof');
// const priceMaster = document.querySelector('#price-master');