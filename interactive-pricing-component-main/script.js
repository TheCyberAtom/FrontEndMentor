const priceSlider = document.getElementById('slide-input');
const price = document.getElementById('price');
const monthyear = document.getElementById('monthyear');

let sliderVal = 3;
let isYearly = false;
const monthlyPrice = [8, 12, 16, 24, 36];
const discount = 25;

function toggleTime(e){
    isYearly = e.target.checked;
    priceHandling();
}

function updatePrice(e){
    sliderVal = e.target.value;
    priceHandling();
    const pageView = document.getElementById('page-count');
    switch(sliderVal){
        case '1' : 
            pageView.innerText = `10K`;
            break;
        case '2' : 
            pageView.innerText = `50K`;
            break;
        case '3' : 
            pageView.innerText = `100K`;
            break;
        case '4' : 
            pageView.innerText = `500K`;
            break;
        case '5' : 
            pageView.innerText = `1M`;
            break;
    }
}

function priceHandling(){
    if(isYearly){
        price.innerHTML = `$${(monthlyPrice[sliderVal - 1] * 12)* (1 - discount/100)}.00`;
        monthyear.innerText = "year";
    }
    else{
        price.innerHTML = `$${monthlyPrice[sliderVal - 1]}.00`;
        monthyear.innerText = "month";
    }
}

const slider = document.querySelector('.slider input');
const gradient = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${slider.value * 15}%, hsl(224, 65%, 95%) ${slider.value * 18}%, hsl(224, 65%, 95%) 100%)`;
slider.style.background = gradient;

slider.addEventListener('input', () => {
  const gradient = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${slider.value * 15}%, hsl(224, 65%, 95%) ${slider.value * 18}%, hsl(224, 65%, 95%) 100%)`;
  slider.style.background = gradient;
});