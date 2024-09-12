/* --------------- Menu--------------- */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show menu
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Hide menu
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove mobile menu on link click
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change header background on scroll
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/* Scroll section active link*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* ----------SHOW SCROLL UP------ */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, adding the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* ----------CALCULATE JS------ */
const calculateForm = document.getElementById("calculate-form"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  // check if fields have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    //add & remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // show messaage
    calculateMessage.textContent = "Please Enter Your weight and height✌️";

    //remove messeage after three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    // health status wrt bmi
    if (bmi < 18.5) {
      //display message
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are underweight`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are at a healthy weight`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    }
    // clear the input field
    calculateCm.value = "";
    calculateKg.value = "";

    //remove message after 4 s
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/* ----------EMAIL JS------ */
emailjs.init("1gAHL6uRb6B9zK11J");
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    //Show Message
    contactMessage.textContent = "You must enter your email";

    // Remove message after 4 s
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 4000);
  } else {
    // serviceId - templateId - #form - publickKey
    emailjs
      .sendForm(
        "service_3t4ci04",
        "template_8yl0509",
        "#contact-form",
        "1gAHL6uRb6B9zK11J"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Registration Successful!";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 4000);
        },
        (error) => {
          // error message
          alert("Oops! Something has failed....", error);
        }
      );
    // To clear the input field
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

// Scroll reveal animation
const scrolll = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

scrolll.reveal(".home_data, .footer_container, .footer_group");
scrolll.reveal(".home_img", { delay: 700, origin: "bottom" });
scrolll.reveal(".program_card, .pricing_card", { interval: 100 });
scrolll.reveal(".choose_img, .calculate_content", { origin: "left" });
scrolll.reveal(".choose_content, .calculate_img", { origin: "right" });