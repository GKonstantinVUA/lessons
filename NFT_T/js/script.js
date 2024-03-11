const icon = document.querySelector('.group-btn__burger');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});


//?Circle 
// const text = document.querySelector(".management__circle-body");
// text.innerHTML = text.innerText.split("").map((letter, i) =>
// `<span style="transform:rotate(${i * 16.8}deg")>${letter}</span>`
// )
// .join("");

//TODO Swaper

// var swiper = new Swiper(".mySwiper", {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		"320": {
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 		},
// 		"768": {
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},
// 		"992": {
// 			slidesPerView: 3,
// 			spaceBetween: 40,
// 		},
// 		"1650": {
// 			slidesPerView: 4,
// 			spaceBetween: 50,
// 		},
// 	},
// });


//TODO SHOW MORE
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





