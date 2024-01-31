const apiUrl = 'http://localhost:3000/hotels';

const addHotel = () => {
    const name = document.getElementById('name');
    const location = document.getElementById('location')
    const imagePath = document.getElementById('imagePath')
    const starStat= document.getElementById('starStat')
    console.log(name.value , location.value , imagePath.value, starStat.value)

    
    const postData = {
        name : name.value,
        location : location.value,
        imagePath : imagePath.value,
        starStat: starStat.value
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


const getRooms = () => {
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
  
  <div class="hotel-card">
                <div class="hotel-image-container">
                    <img src="${org.imagePath}" alt="">
                </div>
                <div class="hotel-info">
                    <div class="hotel-name">
                        <h2>${org.name}</h2>
                        <div class="rate">
                        
                        <span>${org.starStat} Stars</span>
                      
                        </div>
                        <div class="location">
                            <img src="images/location-dot-solid.svg"><p>${org.location}</p>
                        </div>
                            <button class="more-link more" data-id="${org.id}" onclick="saveHotelId(event)">
                            <a href="room.html">More... ></a>
                          </button>                        
                        
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


function loadHotel() {
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
    <a href="addRoom.html">Add Room</a>
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


function addRoomToThis(companyId){
    const apiUrlCar = 'http://localhost:3000/rooms'
    const roomType = document.getElementById('roomType');
    const imagePath = document.getElementById('imagePath')
    const price = document.getElementById('price')
    console.log(roomType.value , imagePath.value , price.value)

    
    const postData = {
        roomType : roomType.value,
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

const saveHotelId = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompId' , id)
  console.log("Clicked button with id:", id);
}

const saveHotelIdForRent = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompIdForRent' , id)
  console.log("Clicked button with id:", id);
}


function LoadHotelRoom() {
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


    fetch('http://localhost:3000/rooms', requestOptions)
    .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
        return response.json(); 
    })
    .then(data => {
  data.forEach(room => {
    console.log(room._id)
    if (room.companyId == localId){
      var eachCard = `
      <div class="card"> 
      <div class="add">
          <h1> Add to favorite</h1>
         <svg id="heart" width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path> </g></svg>
      </div>
      <p>${localStorage.getItem('currentCompId')}</p>
      <h1>room Type: ${room.roomType}</h1>
  <div class="location">
      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#394240" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#394240" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#394240" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> <g> <path fill="#F76D57" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> <path fill="#F76D57" d="M32,2c-12.15,0-22,9.85-22,22c0,5.799,3.469,11.469,5.913,15h0.01L32,61l16.077-22h0.01 C50.281,35.781,54,29.799,54,24C54,11.85,44.15,2,32,2z M32,38c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14 S39.732,38,32,38z"></path> </g> <path opacity="0.2" fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z">
      </path> </g> </g></svg>
      <h1>  Addis Ababa </h1>
  </div>
  <div class="room_pic"> 
      <img src="${room.imagePath}" width="400px" alt="Hotel Room"> 
  </div>
  <h2> Room Features </h2>
      <div class="features"> 
          <div class="sound"> <svg fill="#000000" width="50px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M542.86 294.4L362.3 430a10.72 10.72 0 0 0-2.71 3.25H255.53v153.2h104.06a10.58 10.58 0 0 0 2.71 3.25l180.56 135.52a10.83 10.83 0 0 0 17.34-8.66v-413.5a10.83 10.83 0 0 0-17.34-8.66zM742.6 599.41L765 577l-67.2-67.2 67.2-67.2-22.4-22.4-67.2 67.2-67.2-67.2-22.4 22.4 67.2 67.2-67.2 67.2 22.4 22.4 67.2-67.2 67.2 67.2z">
            </path></g></svg>
          <h3> Soundproof Room </h3>
          </div>
          <div class="sound" >
              <svg width="40px" height="64px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><line class="cls-1" x1="23.45" y1="22.5" x2="0.55" y2="22.5"></line><line class="cls-1" x1="12" y1="14.86" x2="12" y2="22.5"></line><line class="cls-1" x1="16.77" y1="14.86" x2="16.77" y2="22.5"></line><line class="cls-1" x1="2.45" y1="12.95" x2="2.45" y2="22.5"></line><line class="cls-1" x1="7.23" y1="14.86" x2="7.23" y2="22.5"></line><line class="cls-1" x1="21.55" y1="12.95" x2="21.55" y2="22.5"></line><line class="cls-1" x1="0.55" y1="14.86" x2="23.45" y2="14.86"></line><circle class="cls-1" cx="2.45" cy="12" r="0.95"></circle><circle class="cls-1" cx="21.55" cy="12" r="0.95"></circle><path class="cls-1" d="M12,1.5h0a5.73,5.73,0,0,1,5.73,5.73v7.64a0,0,0,0,1,0,0H6.27a0,0,0,0,1,0,0V7.23A5.73,5.73,0,0,1,12,1.5Z"></path><line class="cls-1" x1="12" y1="1.5" x2="12" y2="14.86"></line><line class="cls-1" x1="6.27" y1="9.14" x2="17.73" y2="9.14">
              </line></g></svg>
              <h3> Private Balcony  </h3>
          </div>
          <div class="sound">
              <svg width="40px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM2.66691 9.5646C5.14444 7.34716 8.41371 6 12 6V4C7.90275 4 4.16312 5.54138 1.33309 8.07433L2.66691 9.5646ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138 16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM12 11C14.3319 11 16.4546 11.8855 18.0539 13.3403L19.3997 11.8608C17.4466 10.0842 14.8487 9 12 9V11ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM5.94611 13.3403C7.54544 11.8855 9.66815 11 12 11V9C9.15127 9 6.55344 10.0842 4.60034 11.8608L5.94611 13.3403Z" fill="#000000">
              </path> </g></svg>
              <h3> Wifi </h3>
          </div>
          <div class="sound">
              <svg width="40px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M133.2 25l-53.69 94H432.5l-53.7-94H133.2zM25 137v46h462v-46H25zm32 64v46h46v-46H57zm352 0v46h46v-46h-46zm-171.4.6s-22 8.8-24 18.8c-4.6 22.8 33.9 60.8 33.9 60.8s-13.3-34.6-14.3-52.8c-.5-9.1 4.4-26.8 4.4-26.8zm54.4 14.8c-6.1 40.2-11.2 83.7-45.9 100.2-30.3 14.4-36.4-78.5-94.1-91.5 44.9 101.1-68.9 139.9 42.2 185.2h19.5c-24-25.9-34.4-90.8-34.4-90.8s30.2 72 62.5 74.2c15 1 33.5-30.2 33.5-30.2s5.9 29.8-.1 46.8H319c27.3-14.8 44.6-35.7 51.2-57.3 6.5-20.9 3-42.5-10.9-59.9-8.6 51.8-21.4 62.8-55.1 74.1 36.6-44.7 20.2-119.2-12.2-150.8zM57 265v46h46v-46H57zm352 0v46h46v-46h-46zM57 329v78h46v-78H57zm352 0v78h46v-78h-46zM25 425v62h462v-62H25z">
              </path></g></svg>
              <h3> Fireplace </h3>
          </div>
          <div class="sound">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="50px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="252.175" y="173.196" style="fill:#1D1D1B;" width="15.529" height="23.642"></rect> <rect x="252.175" y="204.719" style="fill:#1D1D1B;" width="15.529" height="78.803"></rect> <rect x="252.175" y="291.4" style="fill:#1D1D1B;" width="15.529" height="23.641"></rect> <path style="fill:#1D1D1B;" d="M228.535,62.986v23.642H0v314.988h228.535v23.642h23.641v23.757h15.529v-23.758h197.245v23.757 h15.529v-23.757H512V62.986H228.535z M496.471,409.728H244.064v-8.113h23.641v-78.69h-15.529v63.161H15.529v-283.93h236.647v63.16 h15.529V86.628h-23.641v-8.113h252.408V409.728z"></path> <path style="fill:#1D1D1B;" d="M323.101,118.033v62.928h133.853v-15.529h-15.878v-8.113h7.997V141.79h-94.566v15.529h7.996v8.113 H338.63v-47.4H323.101z M409.553,157.319h15.993v8.113h-15.993V157.319z M378.031,157.319h15.993v8.113h-15.993V157.319z"></path> <path style="fill:#1D1D1B;" d="M456.953,267.879h-94.682v-63.044h-31.522H315.22h-31.522v63.044h-7.997v15.529h181.252V267.879z M315.22,267.879h-15.993v-47.516h15.993V267.879z M346.742,267.879h-15.993v-47.516h15.993V267.879z"></path> <rect x="307.343" y="291.4" style="fill:#1D1D1B;" width="15.529" height="15.762"></rect> <rect x="362.501" y="291.4" style="fill:#1D1D1B;" width="15.529" height="15.762"></rect> <rect x="417.669" y="291.4" style="fill:#1D1D1B;" width="15.529" height="15.762"></rect> <path style="fill:#1D1D1B;" d="M480.478,94.507H275.701v15.529h189.249v268.17h-15.992v-55.164h-15.762v-7.997h-15.529v7.997 h-15.762v55.164h-8.113v-55.164H378.03v-7.997h-15.529v7.997h-15.761v55.164h-8.113v-55.164h-15.762v-7.997h-15.529v7.997h-15.762 v55.164h-15.878v15.529h204.777V94.507H480.478z M323.101,378.206h-15.993V338.57h15.993V378.206z M378.264,378.206h-15.992V338.57 h15.992V378.206z M433.428,378.206h-15.993V338.57h15.993V378.206z"></path> <path style="fill:#1D1D1B;" d="M23.642,377.973h220.422V110.268H23.642V377.973z M39.17,125.797h189.365v236.648H39.17V125.797z">
              </path> </g> </g></svg>
              <h3> Minibar </h3>
          </div>
          <div class="sound">
              <svg width="50px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4ZM10,18a6,6,0,1,1,6-6A6,6,0,0,1,10,18ZM19,8a1,1,0,1,1,1-1A1,1,0,0,1,19,8Zm-4,4.25c0,2.25-1.79,2.3-2.38,1.11a1.61,1.61,0,0,0-.53-.54,1.65,1.65,0,0,0-.71-.26,1.82,1.82,0,0,1-.46.61c1,1.85.6,3.83-1.19,3.83-2.23,0-2.28-1.79-1.1-2.38a1.68,1.68,0,0,0,.54-.52,1.76,1.76,0,0,0,.27-.7,1.61,1.61,0,0,1-.63-.46C7,13.93,5,13.53,5,11.75,5,9.5,6.77,9.44,7.36,10.63a1.52,1.52,0,0,0,.53.54,1.81,1.81,0,0,0,.71.27,1.51,1.51,0,0,1,.46-.62C8.06,9,8.46,7,10.24,7h0c2.25,0,2.3,1.78,1.11,2.38a1.58,1.58,0,0,0-.54.52,1.65,1.65,0,0,0-.26.71,1.7,1.7,0,0,1,.61.45C13,10.06,15,10.46,15,12.25Z"></path><rect width="24" height="24" fill="none">
              </rect></g></svg>
              <h3> Air Conditioning </h3>
          </div>
      </div>
    <div class="price_box">
      <h2 class="price"> Price: </h2>
      <h2> ${room.price} ETB </h2>
  </div>
  <div class="book_box"> 
     <button class="more-link" data-id="${room._id}"> Book Room </button>
  </div>
 </div>`
      template += eachCard    
    }
   
    });
    container.innerHTML = template;
    })
    .catch(error => {
    console.error('Fetch error:', error);
    });

}







