const { stringify } = require("querystring");

function getTotalExpense(userId) {
    const plan = document.getElementById('expenseContainer');
    const tPrice = document.getElementById('totalPrice');
    var template = '';
    var total = 0;
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
            const fetchPromises = data.map(d => {
                if (userId == d.userId) {
                    const item = d.prodId;
                    return fetch(`http://localhost:3000/${d.reason}/${item}`, requestOptions)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(prod => {
                            if (d.reason == 'cars') {
                                var eachCard = `
                                    <div class="container">
                                        <div>
                                            <p>item: For car</p>
                                        </div>
                                        <div>
                                            <p>Rent Price: ${prod.price}</p>
                                        </div>
                                    </div>
                                `;
                            } else if (d.reason == 'seats') {
                                var eachCard = `
                                    <div class="container">
                                        <div>
                                            <p>item: For Restaurant </p>
                                        </div>
                                        <div>
                                            <p>Reservation Price: ${prod.price}</p>
                                        </div>
                                    </div>
                                `;
                            } else if (d.reason == 'rooms') {
                                var eachCard = `
                                    <div class="container">
                                        <div>
                                            <p>item: For Hotel Room</p>
                                        </div>
                                        <div>
                                            <p>Booking Price: ${prod.price}</p>
                                        </div>
                                    </div>
                                `;
                            }

                            template += eachCard;
                            plan.innerHTML = template;
                            total += prod.price;
                        })
                        .catch(error => {
                            console.error('Fetch error:', error);
                        });
                }
            });
            Promise.all(fetchPromises).then(() => {
                tPrice.innerHTML = `<p class="price">Total Expected Expense : ${total} ETB</p>`;
                console.log(total);
                plan.innerHTML = template;
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
