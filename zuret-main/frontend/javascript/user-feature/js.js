
document.addEventListener("DOMContentLoaded",function(){
    const hamburger = document.querySelector('.hamburger-menu');  
    const navMenu = document.querySelector('.nav-menu');  
    if (hamburger !== null && navMenu!==null) {  
    hamburger.addEventListener('click', function(){  
      navMenu.classList.toggle('hide');  
    })};})
    
    
    
    function revealMessage(){
      document.getElementById("button__message").style.display='flex';
      // alert("Your message is succesfully sent to Maedot. You will contacted within 5 business days.");
    }
    
    function redirectToEmail(event) {
      event.preventDefault(); 
    
    var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var message = document.getElementById("message").value;
    
     
      var subject = encodeURIComponent("I want to Contact Maedot");
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email +"\nPhone:" + phone + "\nMessage: " + message);
      var mailtoURL = "mailto:asratmaedot@gmail.com?subject=" + subject + "&body=" + body;
    
     
      window.location.href = mailtoURL;
    }
    
    
    // hotels
    
    function changeFavoriteIcon() {
      var favoriteIcon = document.getElementById("favorite-icon");
      if (favoriteIcon.src.includes("heart-regular")) {
          favoriteIcon.src = "images/thumbs-up-solid.svg";
      } else {
          favoriteIcon.src = "images/heart-regular (1).svg";
      }
    }
    
    // Add the 'slide-in' class to the elements to initiate the animation
    document.addEventListener("DOMContentLoaded", function () {
      const heading = document.querySelector(".about-heading");
      const paragraph = document.querySelector(".about-paragraph");
      const image = document.querySelector(".about-img");
    
      heading.classList.add("slide-in");
      paragraph.classList.add("slide-in");
      image.classList.add("slide-in");
    });
    
    
    // Discover
    function toggleView() {
      var elem1Images = document.querySelectorAll('.elem-1 img');
      var elem2Images = document.querySelectorAll('.elem-2');
    
      elem2Images.forEach(function (img) {
          img.style.display = 'flex';
      });
    
      var viewButton = document.querySelector('button[onclick="toggleView()"]');
      var hideButton = document.querySelector('button[onclick="hideImages()"]');
    
      viewButton.style.display = 'none';
      hideButton.style.display = 'inline';
    }
    
    function hideImages() {
      var elem2Images = document.querySelectorAll('.elem-2');
    
      elem2Images.forEach(function (img) {
          img.style.display = 'none';
      });
    
      var viewButton = document.querySelector('button[onclick="toggleView()"]');
      var hideButton = document.querySelector('button[onclick="hideImages()"]');
    
      viewButton.style.display = 'inline';
      hideButton.style.display = 'none';
    }



    function viewList() {
        alert("Available Cars List");
    }
    
    function showReviews() {
        alert("Reviews List");
    }
    
      document.addEventListener("DOMContentLoaded", function () {
        const searchBar = document.querySelector(".search-bar input");
        const cards = document.querySelectorAll(".card");
    
        searchBar.addEventListener("input", function () {
          const searchTerm = searchBar.value.toLowerCase();
    
          cards.forEach((card) => {
            const cardTitle = card.querySelector("h2").innerText.toLowerCase();
    
            if (cardTitle.includes(searchTerm)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    
    