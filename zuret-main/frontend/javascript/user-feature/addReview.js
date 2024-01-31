function addReview(id , newRev){
    const rev = document.getElementById("update").value;
    const requestOptions = {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json'
        }
        };
    
    
    
    
        fetch('http://localhost:3000/hotels/65bab1ae8621ce3d7e582622', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        review = data.review;
        review.push(newRev);
        updateReview(id , review);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}


function updateReview(id , rev){
const apiUrl = 'http://localhost:3000/hotels/65bab1ae8621ce3d7e582622';
const patchData = {
  review: rev
};
const requestOptions = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(patchData)
};
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('PATCH request successful:', data);
  })
  .catch(error => {
    console.error('Error making PATCH request:', error);
  });

}