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
      throw new Error(HTTP `HTTP error! Status: ${response.status}`);
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
      throw new Error(HTTP `HTTP error! Status: ${response.status}`);
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
                      </div>
                  </div>
                  <button class="more-link" data-id="${org.id}" onclick="saveSeatCompId(event)">
                  <a href="seats.html">More... ></a>
                </button>
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
      throw new Error(HTTP `HTTP error! Status: ${response.status}`);
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
  console.log(tableType.value , imagePath.value , price.value)

  
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
    throw new Error(HTTP `HTTP error! Status: ${response.status}`);
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

const saveSeatIdForReserve = (event) => {
alert('in');
const id = event.currentTarget.getAttribute("data-id");
localStorage.setItem('currentCompIdForRent' , id)
console.log("Clicked button with id:", id);
window.location.href = 'seatReservationForm.html'
}


function LoadRestaurantSeat() {
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
    throw new Error(HTTP `HTTP error! Status: ${response.status}`);
  }
      return response.json(); 
  })
  .then(data => {
data.forEach(seat => {
  console.log(seat._id)
  if (seat.companyId == localId){
    var eachCard = ` <div class="cards">
    <div class="card6 cards-common">

      <div class="card-txt">
        <div class="check">
          <div class="title"><h2>${seat.tableType}</h2></div>
          <div><i class="fa fa-check-circle" aria-hidden="true"></i></div>
        </div>
        <div class="details">
          <div class="more-link">
            <button class="more-link" data-id="${seat._id}" onclick="saveSeatIdForReserve(event)">Reserve</button>
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

function reserveSeat(){
const url = 'http://localhost:3000/seats/65b8f42001ebddc6ac405b91';

fetch(url, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json',
  },
})
  .then(response => {
      if (!response.ok) {
          throw new Error(HTTP `HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      console.log('PATCH request succeeded with JSON response', data);
  })
  .catch(error => {
      console.error('Error during PATCH request:', error);
  });

}function reserve(id){
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
   fetch('http://localhost:3000/seats/' + id, requestOptions)
   .then(response => {
    if (!response.ok) {
      throw new Error(HTTP `HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
        postSeatForReserve(data.price , localStorage.getItem('currentEmail') , data._id , 'seats');
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}



function postSeatForReserve(price , email , id , reason){
  
  const postData = {
      prodId : id,
      price : price,
      userId : email,
      reason : reason
  };
  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
body: JSON.stringify(postData)
};

  fetch('http://localhost:3000/expenses', requestOptions)
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


const search = () => {
  const cardContainer = document.querySelector('.card-container');
  const searchInput = document.querySelector('#searchInput');
  let errors = [];

  
  
  
  if (!searchInput.value) {
    errors.push('⚠️Enter the place name');
  }
  else if(searchInput.value.length<=2 || searchInput.value.length>=50 || searchInput.value==87){
    errors.push('⚠️The place does not exist');
}
  if (errors.length > 0) {
    error.innerText = errors.join('\n');
    error.style.display = 'block';
  } 
  else {
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
  const filteredData = data.filter(org => {
    const orgName = org.name.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();
    return orgName.includes(searchTerm);
  });

  filteredData.forEach(org => {
    var eachCard  =  `
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
                    </div>
                </div>
                <button class="more-link" data-id="${org.id}" onclick="saveSeatCompId(event)">
                <a href="seats.html">More... ></a>
              </button>
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
}