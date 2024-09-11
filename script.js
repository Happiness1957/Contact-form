document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const successMessage = document.querySelector(".success-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();  // Prevent the form from submitting
  
      // Show the success message
      successMessage.style.display = "block";
    });
  });
  
  