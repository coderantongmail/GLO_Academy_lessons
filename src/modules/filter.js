
export default function filter() {
    const search = document.querySelector('.search-wrapper_input');
    const searchText = new RegExp(search.value.trim(), 'i');
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckBox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min'),
        max = document.getElementById('max');
    const activeLi = document.querySelector('.catalog-list li.active');

    cards.forEach((card) => {
        const title = card.querySelector('.card-title');
        const cardPrice = card.querySelector('.card-price');
        const discount = card.querySelector('.card-sale');
        const price = parseFloat(cardPrice.textContent);       

        card.parentNode.style.display = '';

        if (!searchText.test(title.textContent) || (min.value && price < min.value) 
            || (max.value && price > max.value)) {
            card.parentNode.style.display = 'none';
        } else if (discountCheckBox.checked && !discount){
            card.parentNode.style.display = 'none';
        } else if (activeLi){
            if (card.dataset.category !== activeLi.textContent) {
                card.parentNode.style.display = 'none';
            }
        }
    });
}