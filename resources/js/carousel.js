/*
** Picture Carousel Animation
** Credits: [W3 Schools] (https://www.w3schools.com/w3css/w3css_slideshow.asp) 
*/

const pics = document.getElementsByClassName("pictures");
const cap = document.getElementsByClassName("caption");

var picIdx = 0;
carouselAni();
var timeout = setInterval(carouselAni, 3000);

function carouselAni() {
    if (picIdx > pics.length - 1){
        picIdx = 0;
    } else if (picIdx < 0) {
        picIdx = pics.length - 1;
    }

    for (let i = 0; i < pics.length; i++){
        pics[i].style.display = "none";
        cap[i].style.display = "none";
    }
   
    pics[picIdx].style.display = "block";
    cap[picIdx].style.display = "block";

    picIdx++;

    if (picIdx > pics.length - 1) {
        picIdx = 0;
    }
}

function nextIdx(){
    carouselAni();
    clearInterval(timeout);
    timeout = setInterval(carouselAni, 3500);
}

function preIdx(){
    picIdx++;
    carouselAni();
    clearInterval(timeout);
    timeout = setInterval(carouselAni, 3500);
}

function curIdx(num){
    picIdx = num;
    carouselAni();
    clearInterval(timeout);
    timeout = setInterval(carouselAni, 3500);
}