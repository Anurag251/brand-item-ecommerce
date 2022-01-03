// dress-size

const sizes = document.querySelectorAll(".size ul li");
const sizesInput = document.querySelector("#sizeInput");

let choosenSize = null;
let ad = null;

const xyz = (e) => {
  sizesInput.setAttribute("value", e);
};

sizes.forEach((size, idx) => {
  size.setAttribute("value", size.innerHTML);

  size.addEventListener("click", (e) => {
    if (size.getAttribute("value") == size.innerHTML) {
      sizes[idx].classList.add("active");
      choosenSize = idx;
    }

    xyz(size.innerHTML);

    for (let i = 0; i < sizes.length; i++) {
      if (i !== idx) {
        sizes[i].classList.remove("active");
      }
    }
  });
});
