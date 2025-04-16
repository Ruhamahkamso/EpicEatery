const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});


// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });




// login page




    // Check if there are existing users in localStorage, otherwise initialize with an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [
      { username: 'john_doe', email: 'john@example.com', password: '12345' },
      { username: 'jane_smith', email: 'jane@example.com', password: 'password123' }
    ];
  
    // Function to save users to localStorage
    function saveUsers() {
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    // Switch between Login and Register forms
    document.getElementById('switch-to-register').addEventListener('click', function() {
      document.getElementById('login-form-container').style.display = 'none';
      document.getElementById('register-form-container').style.display = 'block';
    });
  
    document.getElementById('switch-to-login').addEventListener('click', function() {
      document.getElementById('register-form-container').style.display = 'none';
      document.getElementById('login-form-container').style.display = 'block';
    });
  
    // Handle Login form submission (basic validation)
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
  
      // Check if the username and password match any user in the database
      const user = users.find(user => user.username === username && user.password === password);
  
      if (user) {
        alert("Logged in successfully!");
        window.location.href = "index.html"; // Go to homepage after login
      } else {
        alert("Invalid username or password.");
      }
    });






  
    // Handle Register form submission (basic validation)
    document.getElementById("register-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("register-username").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      // Check if the username or email already exists
      const existingUser = users.find(user => user.username === username || user.email === email);
  
      if (existingUser) {
        alert("Username or Email already exists.");
      } else {
        // Add new user to the array and save to localStorage
        users.push({ username, email, password });
        saveUsers();
        alert("Account created successfully!");
        window.location.href = "index.html"; // Go to homepage after registration
      }
    });


    



     
  // Handle Contact form submission (basic validation)
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("response-message");

    // Validate the form
    if (name && email && message) {
      // Simulate sending the message
      responseMessage.innerHTML = "Thank you for reaching out, " + name + ". We will get back to you soon!";
      responseMessage.style.color = "green";  // Success message color

      // Optionally, reset the form after submission
      document.getElementById("contact-form").reset();
    } else {
      responseMessage.innerHTML = "Please fill out all fields before submitting.";
      responseMessage.style.color = "red";  // Error message color
    }
  });