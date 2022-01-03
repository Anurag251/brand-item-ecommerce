const addItemBtn = document.querySelectorAll("#addItem");
const itemEditBtn = document.querySelectorAll(".edit-btn");
const itemDeleteBtn = document.querySelectorAll(".delete-btn");

const popupFormAddItem = document.querySelectorAll(".popup-form-add-item");
const popupFormEditItem = document.querySelectorAll(".popup-form-edit-item");
const popupDeleteConfirm = document.querySelectorAll(".delete-confirm");

const addItemCloseBtn = document.querySelectorAll(".add-item-close-btn");
const editItemCloseBtn = document.querySelectorAll(".edit-item-close-btn");
const deleteCloseCross = document.querySelectorAll("#delete-confirm-close");

const popupBackground = document.querySelector(".side-nav-bg");

addItemBtn.forEach((addItem, idx) => {
  addItem.addEventListener("click", () => {
    popupFormAddItem[idx].classList.add("active");
    popupBackground.classList.add("active");
    check([idx]);
  });
});

itemEditBtn.forEach((editBtn, idx) => {
  editBtn.addEventListener("click", () => {
    popupFormEditItem[idx].classList.add("active");
    popupBackground.classList.add("active");
    check([idx]);
  });
});

itemDeleteBtn.forEach((deleteBtn, idx) => {
  deleteBtn.addEventListener("click", () => {
    popupDeleteConfirm[idx].classList.add("active");
    popupBackground.classList.add("active");
    check([idx]);
  });
});

addItemCloseBtn.forEach((closeBtn, idx) => {
  closeBtn.addEventListener("click", () => {
    popupFormAddItem[idx].classList.remove("active");
    popupBackground.classList.remove("active");
    check([idx]);
  });
});

editItemCloseBtn.forEach((closeBtn, idx) => {
  closeBtn.addEventListener("click", () => {
    popupFormEditItem[idx].classList.remove("active");
    popupBackground.classList.remove("active");
    check([idx - 1]);
  });
});

deleteCloseCross.forEach((deleteClose, idx) => {
  deleteClose.addEventListener("click", () => {
    popupDeleteConfirm[idx].classList.remove("active");
    popupBackground.classList.remove("active");
    check([idx]);
  });
});

const check = (addItemBtn) => {
  popupBackground.addEventListener("click", () => {
    popupDeleteConfirm[addItemBtn].classList.remove("active");

    if (addItemBtn) {
      popupFormEditItem[addItemBtn].classList.remove("active");
    }

    if (addItemBtn) {
      popupFormAddItem[addItemBtn].classList.remove("active");
    }
  });
};
