const apiUrl = 'http://localhost:3000/touristSites';

const addTouristSite = () => {
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


function loadTouristSite() {
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
    Delete
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



function search() {
    const container = document.querySelector('#orgContainer');
    const searchInput = document.querySelector('#searchInput');
    var template = '';
  
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
          var eachCard = `<div class="orgContainer">
            <div class="orgCard">
              <h2>${org.name}</h2>
              <button onclick="buttonOnList(event)" data-id="${org.id}">
                Delete
              </button>
            </div>
          </div>`;
  
          template += eachCard;
        });
  
        container.innerHTML = template;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
