function getPlans(userId){
    const plan = document.getElementById('PlanContainer');
    console.log(plan)
    var template = '';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      };
        fetch('http://localhost:3000/expenses', requestOptions)
        .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
            return response.json(); 
        })
        .then(data => {
      data.forEach(d => {
        console.log(d)
        console.log(" ")
        if (userId == d.userId){
            const item = d.prodId
            console.log(item)
            const requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              };
               fetch(`http://localhost:3000/${d.reason}/${item}`, requestOptions)
               .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then(prod => {
                    console.log(prod)
                    if(d.reason == 'cars'){
                        var eachCard = `${d.reason}    ${prod.brand}    ${prod.price}`
                    }

                    template += eachCard
                    console.log(template)
                    plan.innerHTML = template

                    
              })
              
              .catch(error => {
                console.error('Fetch error:', error);
              });
        }
       
        });
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
        console.log("plan :" ,  plan)
        plan.innerHTML = template;
    
        
}