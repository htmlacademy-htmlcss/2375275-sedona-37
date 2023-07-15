const buttonOpen = document.querySelector('.button-nav');
const buttonClose = document.querySelector('.btn-close');
const dialog = document.querySelector('.modal-search');

buttonOpen.addEventListener('click', () => {
  dialog.showModal();
});

buttonClose.addEventListener('click', () => {
  dialog.close();
});
