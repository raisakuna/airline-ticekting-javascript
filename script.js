        const myForm = document.getElementById('myForm');
        const firstName = document.getElementById('firstname');
        const lastName = document.getElementById('lastname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('conpassword');
        const number = document.getElementById('phoneNumber');
        const selectCountry=document.getElementById('country');


// ***== Form Validation =======
//myForm.addEventListener('submit', printEvent);

//=== firstName Validation
        
    firstName.addEventListener('blur', firstNameValidation);
    function firstNameValidation(e) {
    
    if(firstName.value.length==0){
    document.getElementById('firstNameError').innerHTML="** Please Enter your First Name"; 
    return true;
    }
    
     {  
      var fname = /^[A-Za-z]+$/;
      if(firstName.value.match(fname))
      {    
    document.getElementById('firstNameError').innerHTML=" "; 

      return true;
      }
      else
      {
    document.getElementById('firstNameError').innerHTML="** Please Enter characters only"; 
      return false;
      }
    }
        
        e.preventDefault();
         }
        
// === last Name Validation ==== 
        
    lastName.addEventListener('blur', lastNameValidation);
    function lastNameValidation(e) {
    
    if(lastName.value.length==0){
    document.getElementById('lastNameError').innerHTML="** Please Enter your Last Name"; 
    return true;
    }
    
     {  
      var lname = /^[A-Za-z]+$/;
      if(lastName.value.match(lname))
      {    
    document.getElementById('lastNameError').innerHTML=" "; 

      return true;
      }
      else
      {
    document.getElementById('lastNameError').innerHTML="** Please Enter characters only"; 
      return false;
      }
    }
        
    e.preventDefault();
     } 
        
// === email Validation ==== 
        
    email.addEventListener('blur', emailValidation);
    function emailValidation(e) {
    
    if(email.value.length==0){
    document.getElementById('emailError').innerHTML="** Please Enter your email address"; 
    return true;
    }
    
     {  
      var checkEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email.value.match(checkEmail))
      {    
    document.getElementById('emailError').innerHTML=" "; 

      return true;
      }
      else
      {
    document.getElementById('emailError').innerHTML="** Invalid email address:  email@email.com"; 
      return false;
      }
    }
        
    e.preventDefault();
     } 
        
// === password Validation ==== 
        
    password.addEventListener('blur', passwordValidation);
    function passwordValidation(e) {
    
    if(password.value.length==0){
    document.getElementById('passwordError').innerHTML="** Please Enter your passowrd"; 
    return true;
    }
    
     {  
      var checkPassword = /^[A-Za-z]\w{7,14}$/;
      if(password.value.match(checkPassword))
      {    
    document.getElementById('passwordError').innerHTML=" "; 

      return true;
      }
      else
      {
    document.getElementById('passwordError').innerHTML="** Your password must contain 7-14 characters"; 
      return false;
      }
    }
        
    e.preventDefault();
     }       
        
        
// === Confirm password Validation ==== 
        
    confirmPassword.addEventListener('blur', confirmPasswordValidation);
    function confirmPasswordValidation(e) {
    
    if(confirmPassword.value.length==0){
    document.getElementById('confirmPasswordError').innerHTML="** Please Confirm your passowrd"; 
    return true;
    }
    
     {  
      
      if(confirmPassword.value.match(password.value))
      {    
    document.getElementById('confirmPasswordError').innerHTML=" "; 

      return true;
      }
      else
      {
    document.getElementById('confirmPasswordError').innerHTML="** Your password do not match"; 
      return false;
      }
    }
        
    e.preventDefault();
     } 
        
// === Number Validation ==== 
        
    number.addEventListener('blur', contactNumberValidation);
    function contactNumberValidation(e) {
    
    if(number.value.length==0){
    document.getElementById('numberError').innerHTML="** Please Enter your Phone number"; 
    return true;
    }
    
     {  
      var phoneNumber =/^\d{3}-\d{3}-\d{4}$/;
      if(number.value.match(phoneNumber.value))
      {  
        document.getElementById('numberError').innerHTML=""; 


      return true;
      }
      else
      {
    document.getElementById('numberError').innerHTML=" "; 
      return false;
      }
    }
        
    e.preventDefault();
     }                

// === Country Validation ==== 
        
    selectCountry.addEventListener('blur', countryValidation);
    function countryValidation(e) {
    
    if(selectCountry.value.length==0){
    document.getElementById('countryError').innerHTML="** Please Enter your Phone number"; 
    return true;
    }
    e.preventDefault();
     }                
        
        
// ===== Storing in Local Storage =====  
        
   var newDatabase = JSON.parse(localStorage.getItem("infoArray"));
        
function registerUser(){
            
    var registerName = document.forms[0].firstname;
    var registerUname = document.forms[0].lastname;
    var registeredEmail = document.forms[0].email;
    var registeredPassword = document.forms[0].password;
    var registeredConpassword = document.forms[0].conpassword;
    var registeredNumber = document.forms[0].phoneNumber;
    var country = document.forms[0].country;
            
            
    var myStorage = [ registerName.value, registerUname.value , registeredEmail.value, registeredPassword.value, registeredConpassword.value, registeredNumber.value, country.value];
    
    newDatabase.push(myStorage);
    localStorage.setItem("infoArray",JSON.stringify(newDatabase));
    alert("Congratulation! ");
}

submitButton.addEventListener('click', registerUser);

