function search(){
     var from=document.getElementById("departureCity");
     var resultFrom=from.options[from.selectedIndex].text;
     
     var to=document.getElementById("arrivalCity");
     var resultTo=to.options[to.selectedIndex].text;
     
    //var departureDate = document.getElementById("departureDate").value;
     var adult=document.getElementById("adult");
     var adult=adult.options[adult.selectedIndex].text;
     
     var children=document.getElementById("children");
     var children=children.options[children.selectedIndex].text;

     var infant=document.getElementById("infants");
     var infant=infants.options[infants.selectedIndex].text;
     
     var coachType=document.getElementById("coach");
     var coachResult=coachType.options[coach.selectedIndex].text;



    
    
     document.getElementById("result").innerHTML="From :" + resultFrom +"<br>"+ "To : " +resultTo + "<br>"+"Coach :"+ coachResult +"<br>"+"Price: $1200" + "<br>"+ "<br>" + "<br>"+
         "From :" + resultFrom +"<br>"+ "To : " +resultTo + "<br>"+"Coach :"+ coachResult +"<br>"+"Price: $1290" + 
         
         
         
         "<br>"+ "<br>"+ "<br>"+
             
             "From :" + resultFrom +"<br>"+ "To : " +resultTo + "<br>"+"Coach :"+ coachResult +"<br>"+"Price: $1345"; 
 }

function refresh(){
    document.getElementById("result").innerHTML="";
    return;
}

function confirm(){
    
alert("Congratulation! your ticket costs $2000.  Your ticket reference number is 001")}
