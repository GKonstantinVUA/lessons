const icon = document.querySelector('.group-btn__burger');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

const showMore = document.querySelector('.top__see-all');
const productsLength = document.querySelectorAll('.top__card').length;
let items = 1;
if (window.matchMedia("(min-width: 1250em)").matches) { 
    items = 3;
} 
else if ((window.matchMedia("(min-width: 890em) and (max-width: 1249,98em)").matches)) {
 items = 2;
}
 
else if ((window.matchMedia("(max-width: 889.98em)").matches)) {
    items = 1;
 }
 
showMore.addEventListener('click', () => {
	const array = Array.from(document.querySelector('.top__body').children);
       
    array.forEach(el => el.classList.add('is-visible'));
 
    if (visItems.length === productsLength) {
        showMore.style.display = 'block';
    }
});





