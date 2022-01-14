const checkoutPage = document.querySelector(".checkout-page .table");
const quickViewPopComp = document.querySelectorAll("#product-details");
const imageBtn = document.querySelectorAll("#product-details #imageBtn");
const imageItems = document.querySelectorAll("#product-details .images");
let imageData = document.querySelector("#imageData");

if (checkoutPage) {
  const checkOutPageItem = document.querySelectorAll(".checkout-page .item");
  const increaseBtns = document.querySelectorAll(".add-button");
  const decreaseBtns = document.querySelectorAll(".sub-button");
  let quantityNumber = document.querySelectorAll(".quantity-number");
  const productPrice = document.querySelectorAll("#price");
  const discountPrice = document.querySelectorAll("#discountPrice");
  let productTotalPrice = document.querySelectorAll("#product-price");
  const shippingPrice = document.querySelector("#shipping-price");
  let totalPrice = document.querySelector("#total-price");
  let grandTotal = document.querySelectorAll("#grand-total");
  const forcedClicked = document.querySelectorAll("#forcedClicked");
  const totalPriceSubmit = document.querySelectorAll("#total-price-submit");

  const check = (event, index) => {
    if (parseInt(event.value) <= 0) {
      decreaseBtns[index].setAttribute("disabled", "disabled");
    } else {
      decreaseBtns[index].removeAttribute("disabled");
    }

    let arr = [];

    productTotalPrice.forEach((singlePrice, idx) => {
      arr[idx] = parseInt(singlePrice.value);
    });

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    totalPrice.value = sum;

    grandTotal.forEach((gt) => {
      gt.value = sum + parseInt(shippingPrice.value);
    });
  };

  checkOutPageItem.forEach((checkOutItem, idx) => {
    let currentPrice = productPrice[idx].value;
    let currentDiscountPrice = discountPrice[idx].value;

    let discountedPrice = currentPrice - currentDiscountPrice;

    increaseBtns[idx].addEventListener("click", (event) => {
      // event.preventDefault();

      quantityNumber[idx].stepUp(1);

      productTotalPrice[idx].stepUp(discountedPrice);

      check(quantityNumber[idx], (index = idx));
    });

    decreaseBtns[idx].addEventListener("click", (event) => {
      // event.preventDefault();

      quantityNumber[idx].stepUp(-1);

      productTotalPrice[idx].stepUp(-discountedPrice);

      check(quantityNumber[idx], (index = idx));
    });

    totalPriceSubmit[idx].addEventListener("click", () => {
      forcedClicked[idx].click();
    });
  });

  const confirm = () => {
    quantityNumber.forEach((qn, index) => {
      if (parseInt(qn.value) <= 0) {
        decreaseBtns[index].setAttribute("disabled", "disabled");
      } else {
        decreaseBtns[index].removeAttribute("disabled");
      }
    });

    productPrice.forEach((prices, idx) => {
      productTotalPrice[idx].value =
        (parseInt(prices.value) - parseInt(discountPrice[idx].value)) *
        parseInt(quantityNumber[idx].value);
    });

    let allSums = 0;

    productTotalPrice.forEach((ptp, idx) => {
      allSums += parseInt(ptp.value);
    });

    totalPrice.value = allSums;

    grandTotal.forEach((gt) => {
      gt.value = allSums + parseInt(shippingPrice.value);
    });
  };

  confirm();
}

if (quickViewPopComp) {
  const increaseBtns = document.querySelectorAll(".add-button");
  const decreaseBtns = document.querySelectorAll(".sub-button");
  let quantityNumber = document.querySelectorAll(".quantity-number");
  let productPrice = document.querySelectorAll("#product-price");

  quickViewPopComp.forEach((quickView, idx) => {
    let currentPrice = productPrice[idx].value;

    const check = () => {
      if (quantityNumber[idx].value <= "1") {
        decreaseBtns[idx].setAttribute("disabled", "disabled");
      } else {
        decreaseBtns[idx].removeAttribute("disabled");
      }
    };

    increaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(1);

      productPrice[idx].stepUp(currentPrice);

      check();
    });

    decreaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(-1);

      productPrice[idx].stepUp(-currentPrice);

      check();
    });

    check();
  });
}

if (imageBtn) {
  $(document).ready(() => {
    imageBtn.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        imageData.value = imageBtn[idx].getAttribute("data-id");

        $(imageItems[idx]).addClass("active").siblings().removeClass("active");
        $(btn).addClass("active").siblings().removeClass("active");
      });
    });
  });
}
