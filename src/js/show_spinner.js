export function showSpinner() {
   const backdropSpinnerEl = document.createElement('div');
   const spinnerDiv = document.createElement('div');
   const mainSectionEl = document.querySelector('.section');
   mainSectionEl.prepend(backdropSpinnerEl);
   backdropSpinnerEl.prepend(spinnerDiv);
   spinnerDiv.innerHTML = `
      <div></div>
      <div></div>
    `;
   console.log(mainSectionEl);
   backdropSpinnerEl.classList.add('backdrop-spinner');
   spinnerDiv.classList.add('lds-ripple');
   setTimeout(() => {
     backdropSpinnerEl.remove();
   }, 1000);
}