// Allows you to retrieve the different HTML elements of the team members, in order to use them in the
const people1show = document.getElementById('people1show')
const people2show = document.getElementById('people2show')
const people3show = document.getElementById('people3show')

// Allows you to retrieve the different HTML elements of testimonials, in order to use them in the functions
const testimonial1 = document.getElementById('testimonial1')
const testimonial2 = document.getElementById('testimonial2')
const testimonial3 = document.getElementById('testimonial3')

const burgerMenu = document.getElementById('menuburger')

// Function to display the burger menu when clicking on the icon
function Burger() {
    burgerMenu.style.display = "grid"
};

// Function to close the burger menu when clicking on the cross icon
function closeBurger() {
    burgerMenu.style.display = "none"
};

// Function allowing to display the first person of the team and to make the others disappear
function DisplayFistUser() {
    if (people1show.style.display != "block") {
        people1show.style.display = "block";
        people2show.style.display = "none";
        people3show.style.display = "none";
    };
};
// Function allowing to display the second person of the team and to make the others disappear
function DisplaySecondUser() {
    if (people2show.style.display != "block") {
        people1show.style.display = "none";
        people2show.style.display = "block";
        people3show.style.display = "none";
    };
};
// Function allowing to display the third person of the team and to make the others disappear
function DisplayThirdUser() {
    if (people3show.style.display != "block") {
        people1show.style.display = "none";
        people2show.style.display = "none";
        people3show.style.display = "block";
    };
};

// Function to automatically change the commentary, in an interval of 8 seconds
function Testimonial() {
    // Allows to make a rotation, if the testimonial1 is displayed then it will disappear and will be the testimonial2 which will appear on the screen
    if (testimonial1.style.display == "block") {
        testimonial1.style.display = 'none';
        testimonial2.style.display = "block";
    }
    // Allows to make a rotation, if the testimonial2 is displayed then it will disappear and will be the testimonial3 which will appear on the screen
    else if (testimonial2.style.display == "block") {
        testimonial2.style.display = 'none';
        testimonial3.style.display = "block";
    }
    // Allows to make a rotation, if the testimonial3 is displayed then it will disappear and will be the testimonial1 which will appear on the screen
    else {
        testimonial3.style.display = 'none';
        testimonial1.style.display = "block";
    }

    // To increase or decrease the time interval, simply change the value, 8 seconds = 8000, 5 seconds = 5000
    setTimeout(Testimonial, 8000);
}

// Allows you to execute the testimonial function in loop
Testimonial();