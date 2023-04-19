const modalOpenEl = document.querySelector('.btnTeam');
const backdropFooterEl = document.querySelector('.backdrop-footer');
const bodyEl = document.querySelector('body');
const closeBtnEl = document.querySelector('.modal__button');

modalOpenEl.addEventListener('click', openFooterModal);


function openFooterModal() {
  backdropFooterEl.classList.remove('is-hidden');
  document.querySelector('body').classList.add('noScroll');
  document.addEventListener('keydown', footerModalEsc);
  backdropFooterEl.addEventListener('click', footerModalEsc);
  closeBtnEl.addEventListener('click', modalFooterCloseOnClick);
  return;
}

function modalFooterCloseOnClick() {
  backdropFooterEl.classList.add('is-hidden');
  removeListener();
}

function footerModalEsc(event) {
  if (event.key === 'Escape' || event.target === backdropFooterEl) {
    backdropFooterEl.classList.add('is-hidden');
    removeListener();
  }
}

function removeListener() {
  document.removeEventListener('keydown', footerModalEsc);
  backdropFooterEl.removeEventListener('click', footerModalEsc);
  closeBtnEl.removeEventListener('click', modalFooterCloseOnClick);
  bodyEl.classList.remove('noScroll');
}
