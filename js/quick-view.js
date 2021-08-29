// quick-view-pop

const quickViewPop = document.querySelector('.quick-view-pop');
const popBg = quickViewPop.querySelector('.pop-bg');
const popData = quickViewPop.querySelector('.details');
const popClose = quickViewPop.querySelector('.quick-view-close');
const quickViews = document.querySelectorAll('.quick-view');

quickViews.forEach((quickView) => {
  quickView.addEventListener('click', () => {
    quickViewPop.classList.add('show-quick-view');
  });
});

popBg.addEventListener('click', () => {
  quickViewPop.classList.remove('show-quick-view');
});
popClose.addEventListener('click', () => {
  quickViewPop.classList.remove('show-quick-view');
});
