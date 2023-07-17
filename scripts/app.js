const btnOpen = document.querySelector('.btn-nav');
const btnClose = document.querySelector('.btn-close');
const dialog = document.querySelector('.modal-search');

btnOpen.addEventListener('click', () => {
  dialog.showModal();
});

btnClose.addEventListener('click', () => {
  dialog.close();
});
