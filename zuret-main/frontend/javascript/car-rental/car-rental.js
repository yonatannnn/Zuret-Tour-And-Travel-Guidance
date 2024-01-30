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
    <button class="more-link" id = "${org.id}" >
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


const loadCarOrg = () => {
    const container = document.querySelector('#orgContainer')
    console.log(container)
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







