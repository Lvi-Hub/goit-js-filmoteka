//May change, if the name in HTML will be different

// import { hideModalOnEscape, hideModalOnCLick } from "./modalClose.js";
// window.addEventListener("keydown", hideModalOnEscape);
// window.addEventListener("click", hideModalOnCLick);
// closeBtnEl.addEventListener("click", hideModal);

const backdropEl = document.querySelector(".backdrop");
const closeBtnEl = document.querySelector(".close-button");
const modalEl = document.querySelector(".modal");

//Hides modal if Escape button is pressed
export function hideModalOnEscape(e) {
    e.code === "Escape" &&  hideModal();
}

//Hides modal if clicked outside of the modal
export function hideModalOnCLick(e) {
    e.target !== modalEl && hideModal();
    e.stopPropagation();
}

//HidesModal
function hideModal() {
    hideBackdrop();
    removeEventListeners();
  }

//Hides backdrop
function hideBackdrop() {
    backdropEl.classList.add("hidden");
}

//Removes all event listeners
function removeEventListeners() {
    window.removeEventListener("mousedown", hideModalOnEscape);
    window.removeEventListener("click", hideModalOnCLick);
    closeBtnEl.removeEventListener("click", hideModalOnCLick);
}