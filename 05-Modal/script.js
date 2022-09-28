'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('terKlik');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let btns of btnsShowModal) {
  btns.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);