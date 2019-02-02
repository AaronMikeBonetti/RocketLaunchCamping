//::::::::: Variables:::::::


let jumbo = document.getElementsByClassName('jumbotron')[0];
let navToggler = document.getElementById('nav-toggler');
let nav = document.getElementsByClassName('main-nav')[0];
let launchesBtn = document.getElementById('launches-btn');
let mapBtn= document.getElementById('map-btn');
let campsitesBtn= document.getElementById('campsites-btn');
let header = document.getElementsByClassName('header')[0];
let mainIcon = document.getElementsByClassName('main-icon')[0];

let loadBackground = document.getElementsByClassName('load-background')[0];
let loader = document.getElementsByClassName('loader')[0];

navToggler.addEventListener("click", function () {
  nav.classList.toggle("nav-display");
  launchesBtn.classList.toggle("li-display");
  campsitesBtn.classList.toggle("li-display");
  mapBtn.classList.toggle("li-display");
});


mainIcon.addEventListener('click', function(){
 window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });;
});

launchesBtn.addEventListener('click', function(){
 window.scrollTo({
    top: 900,
    left: 0,
    behavior: 'smooth'
  });;
});
mapBtn.addEventListener('click', function(){
 window.scrollTo({
    top: 1900,
    left: 0,
    behavior: 'smooth'
  });;
});

campsitesBtn.addEventListener('click', function(){
 window.scrollTo({
    top: 2800,
    left: 0,
    behavior: 'smooth'
  });;
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onload = function (){
  (function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
})()

  setTimeout(function(){
   
  
  (function enableScrolling(){
      window.onscroll=function(){};
  })()
    loadBackground.classList.add("animate-load-screen")
    loader.classList.add("animate-loader")
    setTimeout(function(){
      loadBackground.classList.add("hide")},2500)

  },4000)
  
  
 
}







// #785d59

