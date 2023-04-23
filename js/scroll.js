window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
  })

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("cabeza").style.top = "0"; /* Muestra el header */
  } else {
    document.getElementById("cabeza").style.top = "-100px"; /* Oculta el header */
  }
  prevScrollpos = currentScrollPos;
}

  //EFECTO APARICION GRADUAL
  ScrollReveal().reveal('.content', {
    duration: 2000,
    origin: 'left',
    distance: '400px'
});

//BOTON PARA VER MAS PRODUCTOS
  function ViewMore(){
    window.location.href="#content";
  }
//Tooltips (titulos ensima de otros)  
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//Login
function login(){
  const pagLogin='../login/login.html';
  window.open(pagLogin, '_blank');
}


