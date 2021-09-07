// DOM Elements


const header = document.querySelector('header'); 

const slider = document.querySelectorAll('.partnerSlides');

const CRslide = document.querySelector('.CRcard');
const CRsliders = document.querySelector('.CRsliders');
const uparrow = document.getElementById('uparrow');
const downarrow = document.getElementById('downarrow');

let moreText = document.querySelector('.conct');
let submenu = document.querySelector('.sub-menu');
const coct = document.getElementById('coct');
const sub = document.getElementById('sub');

let hamburger = document.querySelector('.hamburger');
let navlinks = document.querySelector('.nav-links');
let navbar = document.getElementById('navbar');
let hamburgericon = document.getElementById('hamburgericon');
let hamburgericon1 = document.getElementById('hamburgericon1');
let hamburgericon2 = document.getElementById('hamburgericon2');
let hamburgericon3 = document.getElementById('hamburgericon3');

const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');


// For making NavBar sticky 
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky" , window.scrollY > 0);
})



//IMAGE SLIDER ANIMATION
let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide , 2500);
function autoslide(){
    counter += 1;
    slidefun(counter);
}

function plusslide(n)
{
    counter +=n;
    slidefun(counter);
    reserTimer();

}
function reserTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide , 2500);
}
function slidefun(n)
{
    for(let i=0;i < slider.length; i++){
        slider[i].style.display = "none";
    }
    if(n > slider.length){
        counter = 1;
    }
    if(n < 1)
    {
        counter = slider.length;
    }
    slider[counter - 1].style.display = "block";
}


// Customer review section 
let x = 0;
uparrow.addEventListener("click" , ()=> {
    if(x > "-900") {
        x = x - 300;
        CRsliders.style.top = x + "px";
    }
})
downarrow.addEventListener("click" , ()=> {
    if(x < 0) {
        x = x + 300;
        CRsliders.style.top = x + "px";
    }
})

// Submenu 
document.onclick = function(e) {
    if(e.target.id !== 'sub')
    {
        submenu.classList.remove('submenuActive');
    }
}

moreText.addEventListener("click" , ()=> {
    submenu.classList.toggle('submenuActive');
    navlinks.classList.toggle('navlinksHeight');
})



// Responsiveness 
document.onclick = function(e) {
    if(e.target.id !== 'navbar' && e.target.id !== 'hamburgericon1' && e.target.id !== 'hamburgericon2' && e.target.id !== 'hamburgericon3')
    {
        navlinks.classList.remove('navlinksActive');
        hamburger.children[0].classList.remove('toggle1');
        hamburger.children[1].classList.remove('toggle2');
        hamburger.children[2].classList.remove('toggle3');
    }
}
hamburger.addEventListener("click" , ()=> {
    navlinks.classList.toggle('navlinksActive');
    hamburger.children[0].classList.toggle('toggle1');
    hamburger.children[1].classList.toggle('toggle2');
    hamburger.children[2].classList.toggle('toggle3');

})

function register() {
    signup.classList.add('signup-deactive');
    signin.classList.add('signin-active');
    signup.classList.remove('signup-active');
    signin.classList.remove('signin-deactive');
}
function login() {
    signup.classList.add('signup-active');
    signin.classList.add('signin-deactive');
    signup.classList.remove('signup-deactive');
    signin.classList.remove('signin-active');
}