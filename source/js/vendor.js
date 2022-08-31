import iMask from 'imask';

const phoneInput = document.getElementById('form-phone');
const phoneModalInput = document.getElementById('modal-form-phone');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

iMask(phoneInput, maskOptions);
iMask(phoneModalInput, maskOptions);
