//click banner button to go to ph paribahan section
const bannerBtn = document.getElementById('banner-btn');
bannerBtn.addEventListener('click', function () {
    const phParibahan = document.getElementById('ph-paribahan');
    phParibahan.scrollIntoView();
})

const seatLayoutContainer = document.getElementById('seat-layout-container');
const selectedSeatCounter = document.getElementById('selected-seat-counter')
const seatLeftId = document.getElementById('seat-left');
const seatID = seatLayoutContainer.querySelectorAll('h2');

let selectedSeatCounterUpdater = 0;
let seatLeft = 40;
let totalPrice = 0;
let grandTotal = 0;
let discountPrice = 0;
let maxSelectedSeatCount = 1;

for (let i = 0; i < seatID.length; i++) {
    const seats = seatID[i];
    let flag = false;

    // on single click
    seats.addEventListener('click', function () {
        if (maxSelectedSeatCount <= 4) {
            //change color
            seats.style.backgroundColor = '#1DD100';

            //do not update counter if already clicked
            if (flag === true) {
                selectedSeatCounterUpdater = selectedSeatCounterUpdater;
                seatLeft = seatLeft;
            }
            else {
                //update counter on clicked
                selectedSeatCounterUpdater++;
                selectedSeatCounter.innerText = selectedSeatCounterUpdater;
                seatLeft--;
                seatLeftId.innerText = seatLeft;

                //append seats in the side menu
                const selectedSeatList = document.getElementById('selected-seat-list');
                // add seat name to the list
                const div = document.createElement('div');
                selectedSeatList.appendChild(div);
                const p = document.createElement('p');
                p.innerText = seats.innerText;
                div.appendChild(p);

                // add seat class
                const div2 = document.createElement('div');
                selectedSeatList.appendChild(div2);
                const span1 = document.createElement('span');
                span1.innerText = 'Economy';
                div2.appendChild(span1);


                // add seat fare
                const div3 = document.createElement('div');
                selectedSeatList.appendChild(div3);
                const span2 = document.createElement('span');
                span2.innerText = '550';
                div3.appendChild(span2);

                // add 3 div into another div and add class display flex
                const listDivContainer = document.createElement('div');
                selectedSeatList.appendChild(listDivContainer);
                listDivContainer.appendChild(div);
                listDivContainer.appendChild(div2);
                listDivContainer.appendChild(div3);
                listDivContainer.classList.add('flex');
                listDivContainer.classList.add('justify-between');

                // calculate total price
                const totalPriceField = document.getElementById('total-price');
                totalPrice = selectedSeatCounterUpdater * 550;
                totalPriceField.innerText = totalPrice;

                //calculate grand total
                const grandTotalField = document.getElementById('grand-total');
                grandTotal = totalPrice - discountPrice;
                grandTotalField.innerText = grandTotal;

                flag = true;
            }
            maxSelectedSeatCount++;
        }
        else {
            alert('You cannot select more than 4 seats!');
        }
    });
}


//coupon apply part
const btn = document.getElementById('apply-btn');
//on single click
btn.addEventListener('click', function () {
    //get input value
    const couponCode = document.getElementById('input-field').value;

    if (totalPrice >= 2200) {
        if (couponCode === 'NEW15') {
            //hide coupon area after using 1 code
            document.getElementById('coupon-area').classList.add('hidden');

            //calculate discount
            const discountElement = document.getElementById('discount-price');
            const discountPrice = totalPrice * 0.15;
            discountElement.innerText = discountPrice;
            //show discount
            const discountDiv = document.getElementById('discount-div');
            discountDiv.classList.add('block');
            discountDiv.classList.remove('hidden');

            //update grand total after discount
            const grandTotalField = document.getElementById('grand-total');
            grandTotal = totalPrice - discountPrice;
            grandTotalField.innerText = grandTotal;
            document.getElementById('input-field').value = '';

            seats.style.backgroundColor = '#1DD100';
        }
        else if (couponCode === 'Couple 20') {
            //hide coupon area after using 1 code
            document.getElementById('coupon-area').classList.add('hidden');

            //calculate discount
            const discountElement = document.getElementById('discount-price');
            const discountPrice = totalPrice * 0.20;
            discountElement.innerText = discountPrice;
            //show discount
            const discountDiv = document.getElementById('discount-div');
            discountDiv.classList.add('block');
            discountDiv.classList.remove('hidden');

            //update grand total after discount
            const grandTotalField = document.getElementById('grand-total');
            grandTotal = totalPrice - discountPrice;
            grandTotalField.innerText = grandTotal;
            document.getElementById('input-field').value = '';
        }
        else {
            alert('Invalid Coupon Code!');
            document.getElementById('input-field').value = '';
        }
    }
    else if(totalPrice < 2200) {
        alert('select at least 4 seats!');
        document.getElementById('input-field').value = '';
    }
})


