
// async function display(){
//     let html=``
//      await fetch("http://localhost:3000/restaurants")
//       .then(res=>res.json())
//       .then(data=>{
//           data.forEach(element => {
//               html+=`
//         <div class="restaurant-card">
//           <div class="favourite-icon" onclick="changeFavoriteIcon()">
//               <img src="images/heart-regular (1).svg" alt="" class="heart-icon" id="favorite-icon">
//           </div>
//           <div class="restaurant-image-container">
//               <img src="${element.imagePath}" alt="meskot restaurant">
//           </div>
//           <div class="resaurant-info">
//               <div class="restaurant-name">
//                   <h2>${element.name}</</h2>
//                   <div class="restaurant-location">
//                       <p><img src="images/location-dot-solid.svg" alt="">${element.location}</p>
//                       <button class="reserve-botton openForm" id="openForm">
//                           Reserve Seat
//                       </button>                        
//                   </div>
//               </div>
//           </div>
//       </div>


//           `  
//           });
          
//       })
//       let body=document.getElementById('body')
//       if (body){
//         body.innerHTML=html
//       }
      
      
//       let del = body.querySelectorAll('.delete-btn')
//       let update = body.querySelectorAll('.update-btn')
      
      
//     if (del){
//       del.forEach(btn=>{
//       btn.addEventListener('click',deleteRow)
       
//       } )
//     }
//     if (update){
//       update.forEach(btn=>{
//       btn.addEventListener('click',updateRow)
       
//       } )
//     }
// }
// display()
// function updateRow(){

//     let tableData=this.parentElement.parentElement.querySelectorAll('.input')
//     const id =this.parentElement.parentElement.childNodes[1].id
//     tableData.forEach(element=>{
//         element.disabled=false
//     })
//     this.parentElement.innerHTML=`<button style = "background-color: aqua; padding: 5px; color:white; font-size:25px;  border-radius:8px" type='submit' form="form${id}" class="save-btn">save</button>`
   
//     let save = body.querySelectorAll('.save-btn')
//     if (save){
//         save.forEach(btn=>{

//         btn.addEventListener('click',saveRow)
        
//         } )
// }

// }
// function doThis(){

// }
// async function saveRow(e){
//     e.preventDefault()
//     const form=this.parentElement.parentElement.querySelector('form')

//     const id =this.parentElement.parentElement.childNodes[1].id

//     const formData= new FormData(form)

//     let data={}
//     for (let [key,val] of formData){

//         data[key]=val
//     }
   
    


//     await fetch(`http://localhost:3000/restaurants/${id}`,{
//         method:'PATCH',
//         body:JSON.stringify(data),
//         headers: {
//         'Content-Type': 'application/json'
//         }

//     })
//     .then(res=>res.json())
//     .then(data=>{

//         let tableData=this.parentElement.parentElement.querySelectorAll('.input')
//         let dataValue=[]
//         for (let key in data){
//             dataValue.push(data[key])
//         }
//         let i=1
//         for (; i< dataValue.length-2;i++){
//             tableData[i-1].value=dataValue[i]

//         }
//         this.parentElement.parentElement.querySelector('a').href=dataValue[i]
//         tableData.forEach(element=>{
//             element.disabled=true
//         })
    
//     })
//     .catch(err=>console.log(err))

//     this.parentElement.innerHTML=`<button style = "background-color: #2E8BC0; padding: 5px; color:white; font-size:25px;  border-radius:8px" class="update-btn" class="update-btn">update</button>`

//     let update = body.querySelectorAll('.update-btn')
//     if (update){
//         update.forEach(btn=>{
//         btn.addEventListener('click',updateRow)
        
//         } )
//     }

// }
// async function deleteRow(){
// const id =this.parentElement.id
// await fetch(`http://localhost:3000/restaurants/${id}`,{method:'DELETE'})
// .then(res=>res.json())
// display()

// }
// const Salon= document.getElementById('form')
// Salon.addEventListener('submit',addSalon)
 



// async function addSalon(e){
//     e.preventDefault()
//     const formData=new FormData(Salon)
//     let responseFetch;
//    try{
//         responseFetch=await fetch("http://localhost:3000/restaurants",{
//            method:'POST',
//            body: formData
      
//        })
   
//    }catch(e){
//        document.querySelector('error').innerHTML=error.message
//    }
//    if (responseFetch?.ok){
//        responseFetch
//        .then(res=> res.json())
//        .then(data=>console.log("success",data))
   
//    }else{
//        if (responseFetch?.status==400){
//            document.querySelector('.error').textContent=`allowed files are png, jpeg jpg or gif`
//        }
//    }
   
//    }
   
// function redirect(){
//     window.location.href = 'plans.html';
//   }

//   function openForm() {
//     var overlay = document.querySelector('.overlay');
//     overlay.style.display = 'block';
//   }
//   document.addEventListener("DOMContentLoaded", function () {
//     const searchBar = document.querySelector(".search-bar input");
//     const cards = document.querySelectorAll(".restaurant-name");
//     const mainCard=document.querySelectorAll(".restaurant-card")

//     searchBar.addEventListener("input", function () {
//       const searchTerm = searchBar.value.toLowerCase();

//       cards.forEach((card) => {
//         const cardTitle = card.querySelector("h2").innerText.toLowerCase();

//         if (cardTitle.includes(searchTerm)) {
//           card.classList.remove("hide");
//           card.classList.add("full-width", "expanded");
//         } else {
//           card.classList.add("hide");
//           card.classList.remove("full-width", "expanded");
//         }
//       });
//     });
  

//     var openFormButtons = document.querySelectorAll('.openForm');
//     var closeFormButtons = document.querySelectorAll('.closeForm');
//     var overlay = document.querySelector('.overlay');
  
//     openFormButtons.forEach((button) => {
//       button.addEventListener('click', openForm);
//     });
  
//     closeFormButtons.forEach((button) => {
//       button.addEventListener('click', function () {
//         overlay.style.display = 'none';
//       });
//     });
//   })

  
  
 
    
  
const apiUrl = 'http://localhost:3000/restaurants';

const addRestaurant = () => {
    const name = document.getElementById('name');
    const location = document.getElementById('location')
    const imagePath = document.getElementById('imagePath')
    console.log(name.value , location.value , imagePath.value)

    
    const postData = {
        name : name.value,
        location : location.value,
        imagePath : imagePath.value,
    };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
  body: JSON.stringify(postData)
};

    fetch(apiUrl, requestOptions)
    .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}


const getSeats = () => {
    const cardContainer = document.querySelector('.card-container');
    var template = ''
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };


    fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(org => {
    var eachCard = `
          <div class="restaurant-card">
              <div class="favourite-icon" onclick="changeFavoriteIcon()">
                  <img src="images/heart-regular (1).svg" alt="" class="heart-icon" id="favorite-icon">
              </div>
              <div class="restaurant-image-container">
                  <img src="${org.imagePath}" alt="meskot restaurant">
              </div>
              <div class="resaurant-info">
                  <div class="restaurant-name">
                      <h2>${org.name}</</h2>
                      <div class="restaurant-location">
                          <p><img src="images/location-dot-solid.svg" alt="">${org.location}</p>
                          <button class="reserve-botton openForm">Reserve Seat</button>                        
                      </div>
                  </div>
              </div>
          </div>
    
    `

  template += eachCard    
    });
    console.log(template);
    cardContainer.innerHTML = template;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  
}


function loadRestaurant() {
    const container = document.querySelector('#orgContainer')
    var template = ''
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };


    fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(org => {
    var eachCard = `<div class="orgContainer">
    <div class="orgCard">
        <h2>${org.name}</h2>
        <button onclick="buttonOnList(event)" data-id="${org.id}">
    <a href="AddSeat.html">Add Seat</a>
</button>
    </div>
    </div>`

  template += eachCard    
    });
    container.innerHTML = template;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

}



function buttonOnList(event) {
    const id = event.currentTarget.getAttribute("data-id");
    localStorage.setItem('currentId' , id)
    console.log("Clicked button with id:", id);

}


function addSeatToThis(companyId){
    const apiUrlCar = 'http://localhost:3000/seats'
    const tableType = document.getElementById('tableType');
    const imagePath = document.getElementById('imagePath')
    const price = document.getElementById('price')
    console.log(brand.value , imagePath.value , price.value)

    
    const postData = {
        tableType : tableType.value,
        imagePath : imagePath.value,
        price : price.value,
        companyId : companyId
    };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
  body: JSON.stringify(postData)
};

    fetch(apiUrlCar, requestOptions)
    .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  console.log(companyId)
}

const saveSeatCompId = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompId' , id)
  console.log("Clicked button with id:", id);
}

const saveSeatIdForRent = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompIdForRent' , id)
  console.log("Clicked button with id:", id);
}


function loadRestaurant() {
  console.log('in');
  const localId = localStorage.getItem('currentCompId');
  console.log(localId);
  const container = document.getElementById('carsss');
  console.log(container)
  var template = '';
  const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  };
  

    fetch('http://localhost:3000/seats', requestOptions)
    .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
        return response.json(); 
    })
    .then(data => {
  data.forEach(seat => {
    console.log(seat._id)
    if (seat.companyId == localId){
      var eachCard = ` <div class="cards">
      <div class="card6 cards-common">
      <div class="details">
        <div class="favorite"><i class="fa fa-gratipay" aria-hidden="true"></i></div>
        
        <div class="lock">
          <div><i class="fa fa-unlock" aria-hidden="true"></i></div>
          <div>Open New</div>
        </div>
      </div>
    </div>
  
    <div class="card-txt">
      <div class="check">
        <div class="title"><h2>${seat.tableType}</h2>
          </div>
          <div><i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
      <span><i class="fa fa-code-fork" aria-hidden="true"></i>Sedan</span>
    <hr>
        <div class="tospace">
          <p>Transition type: Automatic</p>
          <p>No of cylinder: 4</p>
          <p>Riding capacity: 5</p>
      </div>

        <hr>
        <div class="details">
          <i class="fa fa-car pinkish" aria-hidden="true"> Car</i>
        
        <div class="more-link">
          <button class="more-link" data-id="${seat._id}" onclick="saveCarIdForRent(event)">rent car</button>
        </div>
      </div>
      </div>
      
     </div> `
      template += eachCard    
    }
   
    });
    container.innerHTML = template;
    })
    .catch(error => {
    console.error('Fetch error:', error);
    });

}








  
/* <div class="card">
<img src="${org.imagePath}" alt="Car">
<h2>${org.name}</h2>
<div class="location">
  <i class="fa fa-map-marker"></i>
  <span>${org.location}</span>
</div>
<div class="details">
    <span>Average price:</span>${org.average_price} ETB
  </div>
<div class="details">
  <span>Available Cars:</span>
  <a href="rider-view-list.html id = ${org.id}">View List</a>
</div>
<h3>Reviews</h3>
<div class="reviews">
  <div class="review">
    <i class="fa fa-user"></i>
    <p>"Great service!"</p>
  </div>
  <!-- ... -->
</div>
<button class="more-link" data-id="${org.id}" onclick="saveCarCompId(event)">
  <a href="cars.html">More... ></a>
</button>
</div> */