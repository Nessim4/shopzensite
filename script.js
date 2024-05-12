var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
document.addEventListener('click', function(event) {
    var window = document.getElementById("window");
    var windowContent = document.querySelector(".window-content");
    var closeButton = document.querySelector(".close");
    
    if (event.target !== window && event.target !== windowContent && event.target !== closeButton) {
      window.style.display = "none";
    }
  });
  
  function toggleWindow() {
    var window = document.getElementById("window");
    if (window.style.display === "block") {
      window.style.display = "none";
    } else {
      window.style.display = "block";
    }
  }
  // Get the button and overlay element
// Get the button and overlay element
const subscribeBtn = document.getElementById('subscribe-btn');
const overlay = document.getElementById('overlay');
const emailInput = document.getElementById('email-input');

// Function to open the modal window
function openModal() {
  overlay.style.display = 'block';
}

// Function to close the modal window
function closeModal() {
  overlay.style.display = 'none';
}

// Function to handle subscription
function subscribe() {
  // Get the email address entered by the user
  const userEmail = emailInput.value.trim(); // Trim to remove leading and trailing spaces

  // Check if email is empty
  if (!userEmail) {
    alert("Please enter your email.");
    return; // Exit the function if email is empty
  }

  // Update the email placeholder in the modal content
  document.getElementById('emailPlaceholder').textContent = userEmail;
  // Open the modal window
  openModal();
  // You can also add any additional logic here, such as sending a confirmation email.
}

// Attach event listener to the subscribe button
subscribeBtn.addEventListener('click', subscribe);

const openShopping=document.querySelector(".openShopping");
const closeShopping=document.querySelector(".closeShopping");
const list= document.querySelector(".listcard");
const total=document.querySelector(".total");
const body=document.querySelector("body");
const quantity=document.querySelector(".quantity");

document.addEventListener('DOMContentLoaded', function() {
  // Get the button and overlay element
  const messageBtn = document.getElementById('message-btn');
  const overlay1 = document.getElementById('overlay1');

  // Attach event listener to the button
  messageBtn.addEventListener('click', function() {
      toggleWindow();
  });

  // Close modal when clicking outside of it
  document.addEventListener('click', function(event) {
      if (event.target !== overlay1 && event.target.closest(".modal1") === null) {
          overlay1.style.display = "none";
      }
  });

  function toggleWindow() {
      if (overlay1.style.display === "block") {
          overlay1.style.display = "none";
      } else {
          overlay1.style.display = "block";
      }
  }
});

