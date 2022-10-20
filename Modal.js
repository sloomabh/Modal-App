const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnOpenModel);

const openModal = function (e) {
  e.preventDefault();
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Nodelist is not am Array but it still have some methodes of array like Foreach
btnOpenModel.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//we close the window when we press on "Escape' key"
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
