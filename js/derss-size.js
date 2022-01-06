const sizes = document.querySelectorAll(".size");
const sizesInput = document.querySelectorAll("#sizeInput");

sizes.forEach((size, index) => {
  const sizeLists = size.querySelectorAll("li");

  const xyz = (e) => {
    sizesInput[index].setAttribute("value", e);
  };

  sizeLists.forEach((sizeList, idx) => {
    sizeList.setAttribute("value", sizeList.innerHTML);

    sizeList.addEventListener("click", () => {
      if (sizeList.getAttribute("value") == sizeList.innerHTML) {
        sizeLists[idx].classList.add("active");
        choosenSize = idx;
      }

      xyz(sizeList.innerHTML);

      for (let i = 0; i < sizeLists.length; i++) {
        if (i !== idx) {
          sizeLists[i].classList.remove("active");
        }
      }
    });
  });
});
