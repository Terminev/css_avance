const people1 = document.getElementById("team1");
const people2 = document.getElementById("team2");
const people3 = document.getElementById("team3");
const people1show = document.getElementById('people1show')
const people2show = document.getElementById('people2show')
const people3show = document.getElementById('people3show')
people1.addEventListener('click', DisplayFistUser);
people2.addEventListener('click', DisplaySecondUser);
people3.addEventListener('click', DisplayThirdUser);

function DisplayFistUser(){
    if(people1show.style.display != "block" ){
        people1show.style.display = "block"
        people2show.style.display = "none"
        people3show.style.display = "none"
    }
}

function DisplaySecondUser(){
    if(people2show.style.display != "block" ){
        people1show.style.display = "none"
        people2show.style.display = "block"
        people3show.style.display = "none"
    }
}

function DisplayThirdUser(){
    if(people3show.style.display != "block" ){
        people1show.style.display = "none"
        people2show.style.display = "none"
        people3show.style.display = "block"
    }
}