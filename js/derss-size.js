// dress-size

const sizes = document.querySelectorAll('.size ul li');

let choosenSize = null;

sizes.forEach((size, idx) => {
  size.setAttribute('value', idx);

  size.addEventListener('click', (e) => {
    if (size.getAttribute('value') == idx) {
      sizes[idx].classList.add('active');
      choosenSize = idx;
    }
    for (let i = 0; i < sizes.length; i++) {
      if (i !== idx) {
        sizes[i].classList.remove('active');
      }
    }
  });
});
