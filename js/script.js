const people1 = document.getElementById("team1");
const people2 = document.getElementById("team2");
const people3 = document.getElementById("team3");

const people1show = document.getElementById('people1show')
const people2show = document.getElementById('people2show')
const people3show = document.getElementById('people3show')

const testimonial1 = document.getElementById('testimonial1')
const testimonial2 = document.getElementById('testimonial2')
const testimonial3 = document.getElementById('testimonial3')

const burgerIcon = document.getElementById('burgerIcon')
const burgerMenu = document.getElementById('menuburger')

people1.addEventListener('click', DisplayFistUser);
people2.addEventListener('click', DisplaySecondUser);
people3.addEventListener('click', DisplayThirdUser);

burgerIcon.addEventListener('click', Burger);

function Burger(){
    if(burgerMenu.style.display == "grid"){
        burgerMenu.style.display = "none"
    }else{
        burgerMenu.style.display = "grid"
    };
};

function closeBurger(){
    burgerMenu.style.display = "none"
};

function DisplayFistUser(){
    if(people1show.style.display != "block" ){
        people1show.style.display = "block";
        people2show.style.display = "none";
        people3show.style.display = "none";
    };
};

function DisplaySecondUser(){
    if(people2show.style.display != "block" ){
        people1show.style.display = "none";
        people2show.style.display = "block";
        people3show.style.display = "none";
    };
};

function DisplayThirdUser(){
    if(people3show.style.display != "block" ){
        people1show.style.display = "none";
        people2show.style.display = "none";
        people3show.style.display = "block";
    };
};


function yourFunction(){
    if(testimonial1.style.display == "block"){
        testimonial1.style.display = 'none';
        testimonial2.style.display = "block";
    }else if(testimonial2.style.display == "block"){
        testimonial2.style.display = 'none';
        testimonial3.style.display = "block";
    }else{
        testimonial3.style.display = 'none';
        testimonial1.style.display = "block";
    }

    setTimeout(yourFunction, 8000);
}

yourFunction();