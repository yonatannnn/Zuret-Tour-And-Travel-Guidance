
async function display(){
    let html=``
     await fetch("http://localhost:3000/restaurants")
      .then(res=>res.json())
      .then(data=>{
          data.forEach(element => {
              html+=`
        <div class="restaurant-card">
          <div class="favourite-icon" onclick="changeFavoriteIcon()">
              <img src="images/heart-regular (1).svg" alt="" class="heart-icon" id="favorite-icon">
          </div>
          <div class="restaurant-image-container">
              <img src="${element.picturePath}" alt="meskot restaurant">
          </div>
          <div class="resaurant-info">
              <div class="restaurant-name">
                  <h2>${element.name}</</h2>
                  <div class="restaurant-location">
                      <p><img src="images/location-dot-solid.svg" alt="">${element.location}</p>
                      <button class="reserve-botton" id="openForm">
                          Reserve Seat
                      </button>                        
                  </div>
              </div>
          </div>
      </div>


          `  
          });
          
      })
      let body=document.getElementById('body')
      if (body){
        body.innerHTML=html
      }
      
      
      let del = body.querySelectorAll('.delete-btn')
      let update = body.querySelectorAll('.update-btn')
      
      
    if (del){
      del.forEach(btn=>{
      btn.addEventListener('click',deleteRow)
       
      } )
    }
    if (update){
      update.forEach(btn=>{
      btn.addEventListener('click',updateRow)
       
      } )
    }
}
display()
function updateRow(){

    let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    const id =this.parentElement.parentElement.childNodes[1].id
    tableData.forEach(element=>{
        element.disabled=false
    })
    this.parentElement.innerHTML=`<button style = "background-color: aqua; padding: 5px; color:white; font-size:25px;  border-radius:8px" type='submit' form="form${id}" class="save-btn">save</button>`
   
    let save = body.querySelectorAll('.save-btn')
    if (save){
        save.forEach(btn=>{

        btn.addEventListener('click',saveRow)
        
        } )
}

}
function doThis(){

}
async function saveRow(e){
    e.preventDefault()
    const form=this.parentElement.parentElement.querySelector('form')

    const id =this.parentElement.parentElement.childNodes[1].id

    const formData= new FormData(form)

    let data={}
    for (let [key,val] of formData){

        data[key]=val
    }
   
    


    await fetch(`http://localhost:3000/restaurants/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(res=>res.json())
    .then(data=>{

        let tableData=this.parentElement.parentElement.querySelectorAll('.input')
        let dataValue=[]
        for (let key in data){
            dataValue.push(data[key])
        }
        let i=1
        for (; i< dataValue.length-2;i++){
            tableData[i-1].value=dataValue[i]

        }
        this.parentElement.parentElement.querySelector('a').href=dataValue[i]
        tableData.forEach(element=>{
            element.disabled=true
        })
    
    })
    .catch(err=>console.log(err))

    this.parentElement.innerHTML=`<button style = "background-color: #2E8BC0; padding: 5px; color:white; font-size:25px;  border-radius:8px" class="update-btn" class="update-btn">update</button>`

    let update = body.querySelectorAll('.update-btn')
    if (update){
        update.forEach(btn=>{
        btn.addEventListener('click',updateRow)
        
        } )
    }

}
async function deleteRow(){
const id =this.parentElement.id
await fetch(`http://localhost:3000/restaurants/${id}`,{method:'DELETE'})
.then(res=>res.json())
display()

}
const Salon= document.getElementById('form')
Salon.addEventListener('submit',addSalon)
 



async function addSalon(e){
    e.preventDefault()
    const formData=new FormData(Salon)
    let responseFetch;
   try{
        responseFetch=await fetch("http://localhost:3000/restaurants",{
           method:'POST',
           body: formData
      
       })
   
   }catch(e){
       document.querySelector('error').innerHTML=error.message
   }
   if (responseFetch?.ok){
       responseFetch
       .then(res=> res.json())
       .then(data=>console.log("success",data))
   
   }else{
       if (responseFetch?.status==400){
           document.querySelector('.error').textContent=`allowed files are png, jpeg jpg or gif`
       }
   }
   
   }
   
function redirect(){
    window.location.href = 'book.html';
  }
  // function openForm(){
  //   var openFormButton = document.querySelectorAll('.reserve-botton');
  //   var closeFormButton = document.getElementById('closeForm');
  //   var overlay = document.querySelector('.overlay');

  //   openFormButton.addEventListener('click', function() {
  //   overlay.style.display = 'block';
  //   });

  //   closeFormButton.addEventListener('click', function() {
  //   overlay.style.display = 'none';
  //   });
  // }
  document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar input");
    const cards = document.querySelectorAll(".restaurant-name");
    const mainCard=document.querySelectorAll(".restaurant-card")

    searchBar.addEventListener("input", function () {
      const searchTerm = searchBar.value.toLowerCase();

      cards.forEach((card) => {
        const cardTitle = card.querySelector("h2").innerText.toLowerCase();

        if (cardTitle.includes(searchTerm)) {
          mainCard.classList.remove("hide");
          mainCard.classList.add("full-width", "expanded");
        } else {
          mainCard.classList.add("hide");
          mainCard.classList.remove("full-width", "expanded");
        }
      });
    });
  })