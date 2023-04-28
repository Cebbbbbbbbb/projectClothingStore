(() => {
  'use strict'

  // SELECCION DE LOS DOS FORMULARIOS RESPECTIVAMENTE
  const forms1 = document.querySelectorAll('.needs-validation1');
  const forms2 = document.querySelectorAll('.needs-validation2');

  //SELECCION DE LOS ELEMENTOS TANTO USUARIO Y CONSTRASEÑA DEL INICIO DE SESION
  const user=document.getElementById('validation1');
  const password=document.getElementById('validation2');
  //SELECCION DE LOS ELEMENTOS DE VALIDACION DEL INICIO DE SESION
  const valido=document.getElementById('validationServerUsernameFeedback');
  const invalido=document.getElementById('invalidationServerUsernameFeedback');

  const validPasword=document.getElementById('validationServerPasswordFeedback');
  const invalidPasword=document.getElementById('invalidationServerPasswordFeedback');
  
  //SELECCION DE LOS ELEMENTOS NAME, APELLIDO, USUARIO, EMAIL, CONTRASEÑA Y REPETIR CONTRASEÑA DEL REGISTRO

  const name=document.getElementById('validationName');
  const lastName=document.getElementById('validationLastname');
  const username=document.getElementById('validationUsername');
  const email=document.getElementById('validationEmail');
  const password2=document.getElementById('validationPassword');
  const Rpassword=document.getElementById('validationRepetpassword');

  //SELECCION DE LOS ELEMENTOS DE VALIDACION DEL REGISTRO
  const validName=document.getElementById('validationServerNameFeedback');
  const invalidName=document.getElementById('invalidationServerNameFeedback');
  
  const validLastname=document.getElementById('validationServerLastnameFeedback');
  const invalidLastname=document.getElementById('invalidationServerLastnameFeedback');

  const validUser=document.getElementById('validationServerUsername2Feedback');
  const invalidUser=document.getElementById('invalidationServerUsername2Feedback');

  const validEmail=document.getElementById('validationServerEmailFeedback');
  const invalidEmail=document.getElementById('invalidationServerEmailFeedback');

  const validPassword2=document.getElementById('validationServerPassword2Feedback');
  const invalidPassword2=document.getElementById('invalidationServerPassword2Feedback');

  const validRpassword=document.getElementById('validationServerRepetpasswordFeedback');
  const invalidRpassword=document.getElementById('invalidationServerRepetpasswordFeedback');

  //FORMULARIO DE INICIO DE SESION
  Array.from(forms1).forEach(form1 => {
    form1.addEventListener('submit', event =>{
      if (!form1.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();        
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(user.value)) {
        event.preventDefault();
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(password.value)) {
        event.preventDefault();
      }
   
    }, false)

  })

  Array.from(forms1).forEach(formUser => {
    formUser.addEventListener('keyup', event =>{

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
  
  })  
  Array.from(forms1).forEach(formPass => {
    formPass.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(password.value)) {
        event.preventDefault();
        validPasword.style.display="none";
        invalidPasword.style.display="block";
      }
      else{
        validPasword.style.display="block";
        invalidPasword.style.display="none";         
      }                   
   }, false)
  
  })

  //FORMULARIO DE REGISTRO

  
  Array.from(forms2).forEach(form2 => {
    form2.addEventListener('submit', event =>{
      if (!form2.checkValidity() ) {
        event.preventDefault();
        event.stopPropagation();        
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(name.value)) {
        event.preventDefault();
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(lastName.value)) {
        event.preventDefault();
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(username.value)) {
        event.preventDefault();
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(email.value)) {
        event.preventDefault();
      }
      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(password2.value)) {
        event.preventDefault();
      }
      if (password2.value.toString().localeCompare(Rpassword.value.toString()) !==0 ) {
        event.preventDefault();
      }
    }, false)

  })

  //CASILLA NAME
  Array.from(forms2).forEach(formName => {
    formName.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(name.value)) {
        event.preventDefault();
        validName.style.display="none";
        invalidName.style.display="block";
      }
      else{
        validName.style.display="block";
        invalidName.style.display="none";         
      }                   
   }, false)
  })
  //CASILLA LASTNAME
   Array.from(forms2).forEach(formLastName => {
    formLastName.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(lastName.value)) {
        event.preventDefault();
        validLastname.style.display="none";
        invalidLastname.style.display="block";
      }
      else{
        validLastname.style.display="block";
        invalidLastname.style.display="none";         
      }                   
   }, false)
  })

  //CASILLA USUARIO
   Array.from(forms2).forEach(formUsern => {
    formUsern.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(username.value)) {
        event.preventDefault();
        validUser.style.display="none";
        invalidUser.style.display="block";
      }
      else{
        validUser.style.display="block";
        invalidUser.style.display="none";         
      }                   
   }, false)
  })
  //CASILLA EMAIL
   Array.from(forms2).forEach(formEmail => {
    formEmail.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(email.value)) {
        event.preventDefault();
        validEmail.style.display="none";
        invalidEmail.style.display="block";
      }
      else{
        validEmail.style.display="block";
        invalidEmail.style.display="none";         
      }                   
   }, false)
  })
  //CASILLA PASSWORD
   Array.from(forms2).forEach(formPass2 => {
    formPass2.addEventListener('keyup', event =>{

      if (!/^[a-zA-z][a-zA-Z1-9]{3,12}$/.test(password2.value)) {
        event.preventDefault();
        validPassword2.style.display="none";
        invalidPassword2.style.display="block";
      }
      else{
        validPassword2.style.display="block";
        invalidPassword2.style.display="none";         
      }                   
   }, false)
  })
  //CASILLA REPEAT PASSWORD
   Array.from(forms2).forEach(formRpass => {
    formRpass.addEventListener('keyup', event =>{

      if (password2.value.toString().localeCompare(Rpassword.value.toString()) !==0 ) {
        event.preventDefault();   
        validRpassword.style.display="none";
        invalidRpassword.style.display="block";  
      }
      else{
        
        validRpassword.style.display="block";
        invalidRpassword.style.display="none";     
      }                   
   }, false)
  })
  
})()
   

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