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
            
}

submitButton.addEventListener('click', registerUser);

