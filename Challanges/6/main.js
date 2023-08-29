const adSoyadInput = document.querySelector('#AdSoyad');
const SendButton = document.querySelector('#Send');
const mailInput = document.querySelector('#mail');
const phoneInput = document.querySelector('#phone');
const subjectInput = document.querySelector('#subject');
const maleRadio = document.querySelector('input[value="erkek"]');
const femaleRadio = document.querySelector('input[value="kadin"]');
const jobInput= document.getElementById('meslek');
const jobInputValue = jobInput.value;
const messageTextarea= document.getElementById('mesaj');




const showError = (inputElement, message) => {
    inputElement.style.border = '2px solid red';
    inputElement.style.opacity = '1';
    console.log(message);
  };
  
  const showSuccess = (inputElement, value) => {
    inputElement.style.border = '';
    inputElement.style.opacity = '';
    console.log(value);
  };
  

    const validateForm = () => {
    if (adSoyadInput.value === '') {
        showError(adSoyadInput, 'Ad Soyad alanını boş bıraktınız !');
      } else {
        showSuccess(adSoyadInput, `Ad Soyad: ${adSoyadInput.value}`);
      }
   
      if (mailInput.value === '') {
        showError(mailInput, 'Mail Alanını boş bıraktınız !');
      } else if (mailInput.value.indexOf('@') === -1) {
        showError(mailInput, 'Geçerli bir email adresi giriniz.');
      } else {
        showSuccess(mailInput, `Mail Adresi: ${mailInput.value}`);
      }


      if (phoneInput.value === '') {
        showError(phoneInput, 'Telefon alanını Boş Bıraktınız !');
      } else if (phoneInput.value.length !== 10) {
        showError(phoneInput, 'Telefon numarası 10 karakter olmalıdır.');
      } else {
        showSuccess(phoneInput, `Telefon Numarası: ${phoneInput.value}`);
      }
    

      if (subjectInput.value === '') {
        showError(subjectInput, 'Konu alanını boş bıraktınız !');
      } else {
        showSuccess(subjectInput,  `Konu: ${subjectInput.value}`);
      };
      
      if (maleRadio.checked) {
        showSuccess(maleRadio, 'Cinsiyet: Erkek');
        femaleRadio.style.border = '';
        femaleRadio.style.opacity = '';
      } else if (femaleRadio.checked) {
        showSuccess(femaleRadio, 'Cinsiyet: Kadın');
        maleRadio.style.border = '';
        maleRadio.style.opacity = '';
      } else {
        showError(maleRadio, 'Cinsiyet seçimi yapınız.');
        femaleRadio.style.border = '2px solid red';
        femaleRadio.style.opacity = "1";
      }


if (jobInput.value === 'BOS') {
    showError(jobInput, 'Meslek seçimi yapınız !');
  } else {
    showSuccess(jobInput, `Meslek: ${jobInput.value}`);
  }

  if (messageTextarea.value === '') {
    showError(messageTextarea, 'Mesaj alanını boş bıraktınız !');
  } else {
    showSuccess(messageTextarea, `Mesaj: ${messageTextarea.value}`);
  }

};


SendButton.addEventListener('click', validateForm);