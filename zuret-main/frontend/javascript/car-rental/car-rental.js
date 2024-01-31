const apiUrl = 'http://localhost:3000/car-org';

const addCarOrg = () => {
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


const getCars = () => {
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
   
    <div class="card">
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
  </div>`

  template += eachCard    
    });
    console.log(template);
    cardContainer.innerHTML = template;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  
}


function fetchCar(id) {
  const nameContainer = document.querySelector('#carname');
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
   fetch('http://localhost:3000/cars/' + id, requestOptions)
   .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    nameContainer.innerHTML = data.brand;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}



function loadCarOrg() {
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
    <a href="AddCar.html">Add Car</a>
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


function addCarToThis(companyId){
    const apiUrlCar = 'http://localhost:3000/cars'
    const brand = document.getElementById('brand');
    const imagePath = document.getElementById('imagePath')
    const price = document.getElementById('price')
    console.log(brand.value , imagePath.value , price.value)

    
    const postData = {
        brand : brand.value,
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

const saveCarCompId = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompId' , id)
  console.log("Clicked button with id:", id);
}


const saveCarIdForRent = (event) => {
  alert('in');
  const id = event.currentTarget.getAttribute("data-id");
  localStorage.setItem('currentCompIdForRent' , id)
  console.log("Clicked button with id:", id);
  window.location.href = 'car-rent-form.html';
}

function printForm(){
  const carData = fetchCar(localStorage.getItem('currentCompIdForRent'));
  console.log(carData);
  console.log(carData.brand);


}

function LoadCompCar() {
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


    fetch('http://localhost:3000/cars', requestOptions)
    .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
        return response.json(); 
    })
    .then(data => {
  data.forEach(car => {
    if (car.companyId == localId){
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
        <div class="title"><h2>${car.brand}</h2>
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
          <button class="more-link" data-id="${car._id}" onclick="saveCarIdForRent(event)">Rent</button>
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

function rentCar(){
  const url = 'http://localhost:3000/cars/65b8f42001ebddc6ac405b91';

fetch(url, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('PATCH request succeeded with JSON response', data);
    })
    .catch(error => {
        console.error('Error during PATCH request:', error);
    });

}

function rent(id){
  console.log(id)
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
   fetch('http://localhost:3000/cars/' + id, requestOptions)
   .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
        postCarForRent(data.price , localStorage.getItem('currentEmail') , data._id , 'cars');
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}



function postCarForRent(price , email , id , reason){
  console.log('in post function');
  console.log(email)
  console.log(id)
  console.log(reason)


  
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
    var eachCard = `
 
  <div class="card">
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
</div>`

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
