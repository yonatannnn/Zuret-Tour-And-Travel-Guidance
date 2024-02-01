document.addEventListener("DOMContentLoaded", function () {
const error = document.getElementById('error');
const submit_button = document.getElementById('submit');
const full_name = document.getElementById('fullname');
const country = document.getElementById('country');
const date=document.getElementById('birthdate');
const email = document.getElementById('email');
const password = document.getElementById('password');
const bio = document.getElementById('bio');

submit_button.addEventListener('click', function(e) {
  let errors = [];

  e.preventDefault();
if(full_name.value.length<=2 || full_name.value.length>=15){
    errors.push('⚠️Please enter characters between 2 and 15 in length');
}
  if (!full_name.value) {
    errors.push('⚠️Please enter your full name');
  }

  if (!country.value) {
    errors.push('⚠️Please enter your country');
  }

  if (!email.value) {
    errors.push('⚠️Please enter your email');
  }
  if (!bio.value) {
    errors.push('⚠️Please enter your bio');
  }
  if (!date.value) {
    errors.push('⚠️Please enter your date of birth');
  }
  if (!email.value.includes('@')) {
    errors.push('⚠️ The email is incorrect');
  }

  if (!password.value) {
    errors.push('⚠️Please enter your password');
  } else if (password.value.length < 8) {
    errors.push('⚠️The password should have at least 8 characters');
  }
  if (errors.length==8){
    error.innerText = `⚠️Please fill all the required fields`
    error.style.display = 'block'
  }
  else if (errors.length > 0) {
    error.innerText = errors.join('\n');
    error.style.display = 'block';
  } else {}
})
})