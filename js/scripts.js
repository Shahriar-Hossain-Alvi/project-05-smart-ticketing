//f-1: click banner button to go to ph paribahan section
const bannerBtn = document.getElementById('banner-btn');
bannerBtn.addEventListener('click', function(){
    const phParibahan = document.getElementById('ph-paribahan');
    phParibahan.scrollIntoView();
})

//f-2: click seat to change color, update seat counter

const seatLayoutContainer = document.getElementById('seat-layout-container');
const selectedSeatCounter = document.getElementById('selected-seat-counter')
const seatLeftId = document.getElementById('seat-left');

const seatID = seatLayoutContainer.querySelectorAll('h2');
let selectedSeatCounterUpdater = 0;
let seatLeft = 40;

for(let i=0; i<seatID.length; i++){
    const seats = seatID[i];
    let flag = false;

    // on single click
    seats.addEventListener('click', function(){
        //change color
        seats.style.backgroundColor = '#1DD100';

        //do not update counter if already clicked
        if(flag === true){
            selectedSeatCounterUpdater = selectedSeatCounterUpdater;
            seatLeft = seatLeft;
        }
        else{
            //update counter on clicked
            selectedSeatCounterUpdater++;
            selectedSeatCounter.innerText = selectedSeatCounterUpdater;
            seatLeft--;
            seatLeftId.innerText = seatLeft;

            //append seats in the side menu
            const selectedSeatList = document.getElementById('selected-seat-list');
            const p = document.createElement('p');
            const div = document.createElement('div');
            const div2 = document.createElement('div');
            p.innerText = seats.innerText;
            selectedSeatList.appendChild(p);
            flag = true;
        }
    });

}







//on double click
// seats.addEventListener('dblclick', function(){
//     seats.style.backgroundColor = '#0307121A';
//     if(flag === false){
//         selectedSeatCounterUpdater = selectedSeatCounterUpdater;
//         seatLeft = seatLeft;
//     }
//     else{
//         selectedSeatCounterUpdater--;
//         selectedSeatCounter.innerText = selectedSeatCounterUpdater;
//         seatLeft++;
//         seatLeftId.innerText = seatLeft;
//         flag = false;
//     }
// });

