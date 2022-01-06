const decrementBtn = document.querySelectorAll(".sub-button");
const increamentBtn = document.querySelectorAll(".add-button");
let quantityNumber = document.querySelectorAll(".quantity-number");
let productPrice = document.querySelectorAll("#product-price");
let totalPrice = document.querySelector("#total-price");
let productPriceText = document.querySelector("#product-price-text");
const totalPriceSubmit = document.querySelector("#total-price-submit");
const forcedClicked = document.querySelectorAll("#forcedClicked");

totalPriceSubmit.addEventListener("click", () => {
  forcedClicked.forEach((force, idx) => {
    force.click();
  });
});

function setValueToText(e) {
  productPriceText.innerHTML = e.value;
}

const valueCheck = (e, index) => {
  if (e <= "1") {
    decrementBtn[index].setAttribute("disabled", "disabled");
  } else {
    decrementBtn[index].removeAttribute("disabled");
  }
};

let singlePrice;
let priceArr = [];

const run = () => {
  var arr = priceArr;
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (totalPrice) {
    totalPrice.value = sum;
  }
};

productPrice.forEach((price, idx) => {
  singlePrice = parseInt(price.value);
  priceArr[idx] = parseInt(price.value);
});

decrementBtn.forEach((btn, idx) => {
  let currentPrice = parseInt(productPrice[idx].value);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    quantityNumber[idx].stepUp(-1);

    productPrice[idx].stepUp(-currentPrice);

    valueCheck(quantityNumber[idx].value, (index = idx));

    productPrice.forEach((price, idx) => {
      singlePrice = parseInt(price.value);
      priceArr[idx] = parseInt(price.value);
    });

    run();
  });
});

increamentBtn.forEach((btn, idx) => {
  let currentPrice = parseInt(productPrice[idx].value);

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    quantityNumber[idx].stepUp(1);

    decrementBtn[idx].removeAttribute("disabled");

    productPrice[idx].stepUp(currentPrice);

    productPrice.forEach((price, idx) => {
      singlePrice = parseInt(price.value);
      priceArr[idx] = parseInt(price.value);
    });

    run();
  });
});

// function addsum(arr) {
//   var sum = 0;
//   for (var z = 0; z < arr.length; z++) {
//     sum += arr[z];
//   }
//   return sum;
// }

// let sum = 0;
// for (i = 0; i < productPrice.length; i++) {
//   sum += productPrice[i];
//   // console(i.value);
// }
// console.log(sum);

// let ab = 0;

// const sums = (e) => {
//   totalPrice.setAttribute("value", e + ab);
// };

// console.log(ab);

// productPrice.forEach((price) => {
//   sums(price.value);
// });

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

// let currentPrice;

// totalPrice.setAttribute("value", currentPrice);

// const increasePrice = (e) => {
//   currentPrice += e;
// };

// console.log(totalPrice);
