//May change, if the name in HTML will be different

// import { hideModalOnEscape, hideModalOnCLick } from "./modalClose.js";
// window.addEventListener("keydown", hideModalOnEscape);
// window.addEventListener("click", hideModalOnCLick);
// closeBtnEl.addEventListener("click", hideModal);

const card = document.querySelector(".backdrop");
const closeBtnEl = document.querySelector(".movie-card__close-btn");
const modalEl = document.querySelector(".movie-card");
const body = document.querySelector('body');


//Hides modal if Escape button is pressed
export function hideModalOnEscape(e) {
    e.code === "Escape" &&  hideModal();
}

//Hides modal if clicked outside of the modal
export function hideModalOnCLick(e) {
    e.target === card && hideModal();
    console.log(e.target)
    e.stopPropagation();
  }

//HidesModal
export function hideModal() {
    hideBackdrop();
    removeEventListeners();
    body.classList.remove('hide-scroll');
  }

//Hides backdrop
function hideBackdrop() {
    card.classList.add("hidden");
}

//Removes all event listeners
 function removeEventListeners() {
    window.removeEventListener("mousedown", hideModalOnEscape);
    window.removeEventListener("click", hideModalOnCLick);
    closeBtnEl.removeEventListener("click", hideModalOnCLick);
}
