export default function addCart() {
    const cards = document.querySelectorAll('.goods .card');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmty = document.getElementById('cart-empty');
    const countGoods = document.querySelector('.counter');
    
    cards.forEach(card => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();
            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });
    
    function showData() {
        const countCards = cartWrapper.querySelectorAll('.card');
        const cardsPrice = cartWrapper.querySelectorAll('.card-price');
        const cartTotal = document.querySelector('.cart-total span');
        let sum = 0;
    
        countGoods.textContent = countCards.length;
    
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
            //console.log(sum);
        });
    
        cartTotal.textContent = sum;
    
        if (countCards.length !== 0 ) {
            cartEmty.remove();
        } else {
            cartWrapper.appendChild(cartEmty);
        }
    }
}
