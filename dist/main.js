!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function c(){const e=document.querySelector(".search-wrapper_input"),t=new RegExp(e.value.trim(),"i"),n=document.querySelectorAll(".goods .card"),c=document.getElementById("discount-checkbox"),o=document.getElementById("min"),r=document.getElementById("max"),l=document.querySelector(".catalog-list li.active");n.forEach(e=>{const n=e.querySelector(".card-title"),d=e.querySelector(".card-price"),a=e.querySelector(".card-sale"),s=parseFloat(d.textContent);e.parentNode.style.display="",!t.test(n.textContent)||o.value&&s<o.value||r.value&&s>r.value?e.parentNode.style.display="none":c.checked&&!a?e.parentNode.style.display="none":l&&e.dataset.category!==l.textContent&&(e.parentNode.style.display="none")})}n.r(t),async function(){!function(e){const t=document.querySelector(".goods");e.goods.forEach(e=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`\n                        <div class="card" data-category="${e.category}">\n                            ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n                            <div class="card-img-wrapper">\n                                <span class="card-img-top"\n                                    style="background-image: url('${e.img}')">\n                                </span>\n                            </div>\n                            <div class="card-body justify-content-between">\n                                <div class="card-price" ${e.sale?'style="color:red"':""}>${e.price} ₽</div>\n                                <h5 class="card-title">${e.title}</h5>\n                                <button class="btn btn-primary">В корзину</button>\n                            </div>\n                        </div>`,t.appendChild(n)})}(await function(){const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error("Данные не были получены, ошибка: "+e.status)}).then(e=>e).catch(t=>{console.error(t),e.innerHTML='<div style = "color:red; font-size:30px">Упс, что-то пошло не так...</div>'})}()),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".catalog-list"),n=document.querySelector(".catalog-button"),o=document.querySelector(".catalog"),r=new Set;e.forEach(e=>{r.add(e.dataset.category)}),r.forEach(e=>{const n=document.createElement("li");n.textContent=e,t.appendChild(n)});const l=t.querySelectorAll("li");n.addEventListener("click",e=>{o.style.display?o.style.display="":o.style.display="block","LI"===e.target.tagName&&(l.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}),c())})}(),document.querySelectorAll(".filter-check_checkbox").forEach(e=>{e.addEventListener("change",function(){this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")})}),function(){const e=document.getElementById("cart"),t=document.querySelector(".cart"),n=document.querySelector(".cart-close");e.addEventListener("click",()=>{t.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{t.style.display="none",document.body.style.overflow=""})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty"),c=document.querySelector(".counter");function o(){const e=t.querySelectorAll(".card"),o=t.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");let l=0;c.textContent=e.length,o.forEach(e=>{let t=parseFloat(e.textContent);l+=t}),r.textContent=l,0!==e.length?n.remove():t.appendChild(n)}e.forEach(e=>{e.querySelector("button").addEventListener("click",()=>{const n=e.cloneNode(!0);t.appendChild(n),o();const c=n.querySelector(".btn");c.textContent="Удалить из корзины",c.addEventListener("click",()=>{n.remove(),o()})})})}(),function(){document.querySelectorAll(".goods .card");const e=document.getElementById("discount-checkbox"),t=document.getElementById("min"),n=document.getElementById("max"),o=(document.querySelector(".search-wrapper_input"),document.querySelector(".search-btn"));e.addEventListener("click",c),t.addEventListener("change",c),n.addEventListener("change",c),o.addEventListener("click",c)}()}()}]);