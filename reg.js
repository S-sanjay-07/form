// const form = document.querySelector ('#form');
// const username = document.querySelector ('#username');
// const email = document.querySelector ('#email');
// const password = document.querySelector ('#password');
// const cpassword = document.querySelector ('#cpassword');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     validateInputs();
// })
// function validateInputs(){
// const usernameval = username.Value.trim();
// const emailval = email.Value.trim();
// const passwordval = password.Value.trim();
// const cpasswoedval = cpassword.Value.trim();
// if(usernameval===''){
//     seterror(username,'username is required')
// }else{
//     setsucess(username)
// }
// if(emailval===''){
//     seterror(email,'email is required')
// }else if(!validateEmail(emailval)){
//     seterror(email,'pleace enter valid email')}
//     else{
//         setsucess(email)
//     }

// if(passwordval===''){
//     seterror(password,'password is required')
// }else if(passwordval.length<8){
//     seterror(password,'password must be atlest 8 character')
// }
// else{
//     setsucess(password)
// }
// if (cpasswoedval==='') {
//     seterror(cpassword,'confirm password is required')
// }
// else if(cpasswoedval!==passwordval){
//     seterror(cpassword,'password does not match')
// }else{
//     setsucess(cpassword)
// }
// }



// function seterror(element,message) {
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector('.error')
    
//        errorElement.innerText = message;
//        inputgroup.classList.add('error')
//        inputgroup.classList.remove('sucess')
// }
// function setsucess(element) {
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector('.error')
    
//        errorElement.innerText = '';
//        inputgroup.classList.add('success')
//        inputgroup.classList.remove('error')
// }
// const validateEmail =(email)=>{
//     return String(email)
//     .toLowerCase()
//         .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
// }
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const button = document.querySelector('#button');
const errorElements = document.querySelectorAll('.error');

form.addEventListener('submit', (e) => {
  let isValid = true;
  errorElements.forEach((error) => {
    error.innerText = '';
  });

  if (username.value === '') {
    setError(username, 'Username is required');
    isValid = false;
  }

  if (email.value === '') {
    setError(email, 'Email is required');
    isValid = false;
  }

  if (password.value === '') {
    setError(password, 'Password is required');
    isValid = false;
  }

  if (cpassword.value === '') {
    setError(cpassword, 'Confirm Password is required');
    isValid = false;
  }

  if (password.value !== cpassword.value) {
    setError(cpassword, 'Passwords do not match');
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
  if (isValid) {
    e.preventDefault();
    window.location.href = "succes.html";
  }
});

function setError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}
