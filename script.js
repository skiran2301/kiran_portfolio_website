// Function to scroll to a specific section when a button is clicked
// let button = document.querySelector('.button');
// let buttonText = document.querySelector('.tick');

// const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

// buttonText.innerHTML = "<b>Submit</b>";

// button.addEventListener('click', function() {

//   if (buttonText.innerHTML !== "Submit") {
//     buttonText.innerHTML = "Submit";
//   } else if (buttonText.innerHTML === "Submit") {
//     buttonText.innerHTML = tickMark;
//   }
//   this.classList.toggle('button__circle');
// });
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to handle form submission
  function handleSubmit() {
//     event.preventDefault();
  
    // Perform form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    // Check if required fields are empty
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Submit the form

    
  }
  
  // Event listeners for button clicks
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('a')
    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
      });
    });
  
    // Event listener for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
      handleSubmit(event);
    });
  });



  
  