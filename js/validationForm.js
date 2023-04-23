(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  const user=document.getElementById('validation1');
  const password=document.getElementById('validation2');

  const valido=document.getElementById('validationServerUsernameFeedback');
  const invalido=document.getElementById('invalidationServerUsernameFeedback');
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event =>{
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();       
      }
      form.classList.add('was-validated');
    }, false)

    form.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(user.value)) {
        event.preventDefault();
        valido.style.display="none";
        invalido.style.display="block";
      }
      else{
        valido.style.display="block";
        invalido.style.display="none";         
      }    
      
          
    }, false)

    form.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(password.value)) {
        event.preventDefault();
        valido.style.display="none";
        invalido.style.display="block";
      }
      else{
        valido.style.display="block";
        invalido.style.display="none";         
      }                  
    }, false)
  
  })
})()


user.addEventListener('keyup', event =>{
  if (!/^[a-zA-Z]{4,12}$/.test(user.value)) {
    event.preventDefault();
    valido.style.display="none";
    invalido.style.display="block";
    alert('mal mrd')
  }
  else{
    valido.style.display="block";
    invalido.style.display="none";         
  }
})

function register(){
    swal({
      title: "Registro Exitoso",
      icon: "success",
      timer: 2000
    });  
    
}
function sesion(){
  window.open('../administrator/adminProducts.html', '_blank');
}