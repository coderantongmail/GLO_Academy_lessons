import filter from './filter';

export default function filterPage() {

    const cards = document.querySelectorAll('.goods .card'),
        discountCheckBox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min'),
        max = document.getElementById('max');
    const search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    discountCheckBox.addEventListener('click', filter);
    min.addEventListener('change', filter); 
    max.addEventListener('change', filter);
    searchBtn.addEventListener('click', filter);
    //filter();
}