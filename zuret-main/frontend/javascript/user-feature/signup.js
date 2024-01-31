// const error = document.getElementById('error')
// const submit_button = document.getElementById('submit')
// const full_name = document.getElementById('fullname')
// const country = document.getElementById('country')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const bio = document.getElementById('bio')



// submit_button.addEventListener('click', function(e){
//     let value = []

//     e.preventDefault()

//     if (!full_name.value){
//         value.push('Please enter your first name')
//     } 

//     if (!country.value){
//         value.push('Please enter your last name')
//     } 

//     if (!email.value){
//         value.push('Please enter your email')
//     } 
//     if (!bio.value){
//         value.push('Please enter your bio')
//     } 

//     if (!password.value){
//         value.push('Please enter your password')
//     } 
//     if (password.value){
    
//         if (password.value.length < 8){
//             value.push('length of password should be more than 8 characters')

//         }
//     }
    

//     if (value.length > 0){

//         if (value.length == 5){

      

           
//             error.innerText = `Please fill all the required fields`
//             error.style.display = 'block'
//         }
//         else{
          
          
//             error.innerText = value[0]

//             error.style.display = 'block'
//         }
//      }

//      else{
//         if (localStorage.getItem(`infoSet`) == null){
//             var infoSet = {}
//             localStorage.setItem(`infoSet`, JSON.stringify(infoSet));
//         }

//         const name = document.getElementById('fullname')
//         const country = document.getElementById('country')
//         const email = document.getElementById('email')
//         const bio = document.getElementById('bio')
//         const birthdate = document.getElementById('birthdate') 
//         const infos = JSON.parse(localStorage.getItem(`infoSet`))
//         infos[email.value] = {
//             bio: bio.value,
//             name: name.value,
//             country: country.value,
//             email: email.value,
//             birthdate: birthdate.value }
//         localStorage.setItem(`infoSet`, JSON.stringify(infos));
       
//            const result = fetch( "http://localhost:3000/users/signup", {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( {

//             "email": email.value,
//             "password": password.value,
//             "fullname":full_name.value,
//             "country":country.value,
//         } )
//     } )
//     .then( res => res.json() )
//         .then( res => {

            
//             if(res.msg === 'User successfully registered'){
            
//             location.href = "login_page.html"
//             }
//             else{
//             throw new Error('The user Already Exists')}
            
//         } )
//            .catch((erro) => {
//             // TypeError: Failed to fetch
//             error.innerText=`This Email has already been used`;
//             error.style.display = "block";
//           });
//      }



// })
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
  } else {
    if (localStorage.getItem('infoSet') == null) {
      var infoSet = {};
      localStorage.setItem('infoSet', JSON.stringify(infoSet));
    }

    const name = document.getElementById('fullname');
    const country = document.getElementById('country');
    const email = document.getElementById('email');
    const bio = document.getElementById('bio');
    const birthdate = document.getElementById('birthdate');
    const infos = JSON.parse(localStorage.getItem('infoSet'));
    infos[email.value] = {
      bio: bio.value,
      name: name.value,
      country: country.value,
      email: email.value,
      birthdate: birthdate.value
    };
    localStorage.setItem('infoSet', JSON.stringify(infos));

    const result = fetch('http://localhost:3000/users/signup', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        fullname: full_name.value,
        country: country.value
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.msg === 'User successfully registered') {
          location.href = 'login_page.html';
        } else {
          throw new Error('The user already exists');
        }
      })
      .catch(error => {
        error.innerText = 'An error occurred during the registration process';
        error.style.display = 'block';
      });
  }
});