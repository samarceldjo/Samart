const imgs = document.querySelectorAll(".slider img");
const productDetails = document.querySelectorAll(".slider span");
const imgLength = imgs.length;
const previous = document.getElementById("btn-1");
const next = document.getElementById("btn-2");
let count = 0;

console.log(productDetails);
function nextImage() {
    imgs[count].classList.remove('active');
    productDetails[count].classList.remove('active');

    if (count < imgLength - 1) {
        count++;
    } else {
        count = 0;
    }

    imgs[count].classList.add('active');
    productDetails[count].classList.add('active');
}

function previousImage() {
    imgs[count].classList.remove('active');
    productDetails[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = imgLength - 1;
    }

    imgs[count].classList.add('active');
    productDetails[count].classList.add('active');
}

next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);


setInterval(() => {
    imgs[count].classList.remove('active');
    productDetails[count].classList.remove('active');

    if (count < imgLength - 1) {
        count++;
    } else {
        count = 0;
    }

    imgs[count].classList.add('active');
    productDetails[count].classList.add('active');
}, 5000);
