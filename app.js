(function () {
    // This entire script is wrapped in an immediately-invoked function expression (IIFE).
    // It's a way to encapsulate the code and prevent variables from polluting the global scope.
  
    // Select all elements with the class "control" and convert the NodeList to an array using the spread operator.
    [...document.querySelectorAll(".control")].forEach(button => {
      // For each button, add a click event listener.
      button.addEventListener("click", function() {
        // Remove the "active-btn" class from the element with the class "active-btn".
        document.querySelector(".active-btn").classList.remove("active-btn");
  
        // Add the "active-btn" class to the clicked button.
        this.classList.add("active-btn");
  
        // Remove the "active" class from the element with the class "active".
        document.querySelector(".active").classList.remove("active");
  
        // Add the "active" class to the element with the ID specified in the clicked button's data-id attribute.
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  
    // Add a click event listener to the element with the class "theme-btn".
    document.querySelector(".theme-btn").addEventListener("click", () => {
      // Toggle the "light-mode" class on the body element.
      document.body.classList.toggle("light-mode");
    });
  })();