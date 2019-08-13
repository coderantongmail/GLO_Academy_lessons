'use strict';

// чекбокс
const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(element => {
    element.addEventListener('change', function() {
        if (this.checked)
        {
            this.nextElementSibling.classList.add('checked');
        }
        else
        {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

//end чекбокс



//корзина

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

//end корзина



//работа с товароами в корзине

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');

cards.forEach(card => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        //sconsole.log(card);
        cartEmty.remove();
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        showData();
    });
});

function showData() {
    const countCards = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = countCards.length;
}

//end работа с товароами в корзине
