const decrementBtn = document.querySelectorAll('.sub-button');
const increamentBtn = document.querySelectorAll('.add-button');
let quantityNumber = document.querySelectorAll('.quantity-number');
let totalPrice = document.querySelectorAll('#total-price');

decrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    quantityNumber[idx].stepUp(-1);
  });
});

increamentBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    quantityNumber[idx].stepUp(1);
  });
});

// let number = 1;
// let currentPrice = parseInt(totalPrice.innerHTML);

// let total = parseInt(totalPrice.innerHTML);

// increamentBtn.forEach((btns, idxs) => {
//   btns.addEventListener('click', () => {
//     number += 1;
//     quantityNumber[idxs].innerHTML = number;
//     total = parseInt(total) + parseInt(currentPrice);
//     totalPrice[idxs].innerHTML = total;
//   });
// });

// decrementBtn.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     number -= 1;
//     quantityNumber[idx].innerHTML = number;
//     total = parseInt(total) - parseInt(currentPrice);
//     totalPrice[idx].innerHTML = total;
//   });
// });
