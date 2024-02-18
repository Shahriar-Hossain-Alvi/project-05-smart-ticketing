//f-1: click banner button to go to ph paribahan section
const bannerBtn = document.getElementById('banner-btn');
bannerBtn.addEventListener('click', function(){
    const phParibahan = document.getElementById('ph-paribahan');
    phParibahan.scrollIntoView();
})

//f-2: click seat to change color
const seatLayoutContainer = document.getElementById('seat-layout-container');
let 
const seatID = seatLayoutContainer.querySelectorAll('h2');
for(let i=0; i<seatID.length; i++){
    const seats = seatID[i];
    seats.addEventListener('click', function(){
        seats.style.backgroundColor = 'goldenrod';
    })
}

