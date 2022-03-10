const singleDataToCheck = document.querySelector("#colorImageSet");

if (singleDataToCheck) {
  const colorImageSet = document.querySelectorAll("#colorImageSet");
  const otherColorImages = document.querySelectorAll("#otherColorImages");
  otherColorImages.forEach((colorImg, idx) => {
    let colorImgs = colorImg.querySelectorAll("img");

    colorImgs.forEach((img) => {
      $(img).hover((e) => {
        imgUrl = e.target.getAttribute("src");
        colorImageSet[idx].setAttribute("src", imgUrl);
      });
    });
  });
}
