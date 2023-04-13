//May change, if the name in HTML will be different
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

//Hides modal if Escape button is pressed
export function hideModalOnEscape(e) {
  if (e.code === "Escape") {
    //e.code === 'Escape' && isOpen === true
    hideBackdrop();
    removeEventListeners();
  }
}

//Hides modal if clicked outside of the modal
export function hideModalOnCLick(e) {
  if (e.target !== modal) {
    hideBackdrop();
    removeEventListeners();
  }
  e.stopPropagation();
}

//Hides backdrop
function hideBackdrop() {
  backdrop.classList.add("hidden");
}

//Removes all event listeners
function removeEventListeners() {
  backdrop.removeEventListener("mousedown", hideModalOnEscape);
  backdrop.removeEventListener("click", hideModalOnCLick);
}
