const email = document.getElementById('email')
const password = document.getElementById('password')
const login_submit = document.getElementById('submit')
const error = document.getElementById('error')


login_submit.addEventListener('click', function(e){
    console.log(email.value)
    console.log(password.value) 
    let value = []

    e.preventDefault()

    if (!email.value){
        value.push('Please correct formatted email')
    } 

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        value.push('⚠️Please correct formatted email')
    }

    if (!password.value){
        value.push('⚠️Please enter the password')
    } 

    if (password.value){
    
        if (password.value.length < 8){
            value.push('⚠️incorrect password')

        }
    }
    
    
        if (value.length == 3){
            error.innerText = `⚠️Please fill all fields`
            error.style.display = 'block'
        }
        else if (value.length > 0) {
            error.innerText = value.join('\n');
            error.style.display = 'block';
          }
    

     else{
        localStorage.setItem(`currentEmail`, email.value);
        fetch( "http://localhost:3000/users/login", {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            "email": email.value,
            "password": password.value,
        } )
    } ).then( res => res.json() )
        .then( res => {
            
            let inMemoryToken = res.access_token;
            if (inMemoryToken){
                if (email.value == "admin@email.com"){
                    window.location.href = "Admin.html";
                }
                else{
                    window.location.href = "discover.html";
                }
            localStorage.setItem(`user`, JSON.stringify(res));
            }
            else{
            throw new Error('The user Already Exists')}
            localStorage.setItem(`currentEmail`, email.value);
            
        } ).catch((erro) => {
            
            error.innerText=`⚠️wrong credentials`;
            error.style.display = "block";
          });
        
     }




})