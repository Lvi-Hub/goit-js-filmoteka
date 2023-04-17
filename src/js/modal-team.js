const modalOpenEl = document.querySelector('.btnTeam');
const backdropFooterEl = document.querySelector('.backdrop-footer');
const bodyEl = document.querySelector('body');
const closeBtnEl = document.querySelector('.modal__button');

modalOpenEl.addEventListener('click', openFooterModal);
document.addEventListener('keydown', footerModalEsc);
backdropFooterEl.addEventListener('click', footerModalEsc);
backdropFooterEl.addEventListener('click', modalFooterCloseOnClick);

function openFooterModal() {
  backdropFooterEl.classList.remove('is-hidden');
  document.querySelector('body').classList.add('noScroll');
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
