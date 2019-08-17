'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatslog from './modules/renderCatslog';
import toggleCheckBox from './modules/toggleCheckBox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import filterPage from './modules/filterPage';

(async function(){
    const data = await getData();
    renderCards(data);
    renderCatslog();
    toggleCheckBox();
    toggleCart();
    addCart();
    filterPage();
}())




