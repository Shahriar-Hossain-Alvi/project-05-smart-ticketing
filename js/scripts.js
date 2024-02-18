//f-1: click banner button to go to ph paribahan section
const bannerBtn = document.getElementById('banner-btn');
bannerBtn.addEventListener('click', function(){
    const phParibahan = document.getElementById('ph-paribahan');
    phParibahan.scrollIntoView();
})

//f-2: click seat to change color, update seat counter
const seatLayoutContainer = document.getElementById('seat-layout-container');
const selectedSeatCounter = document.getElementById('selected-seat-counter')
let selectedSeatCounterUpdater = 0;
const seatID = seatLayoutContainer.querySelectorAll('h2');
for(let i=0; i<seatID.length; i++){
    const seats = seatID[i];
    let flag = false;
    seats.addEventListener('click', function(){
        seats.style.backgroundColor = '#1DD100';
        if(flag === true){
            selectedSeatCounterUpdater = selectedSeatCounterUpdater;
        }
        else{
            selectedSeatCounterUpdater++;
            selectedSeatCounter.innerText = selectedSeatCounterUpdater;
            flag = true;
        }
    });

}

