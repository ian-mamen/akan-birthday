
$()function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthDate);
    var dayOfTheWeek = dateOfBirth.getDay();


    if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
    alert("No blank values allowed");
}



var dayOfTheWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
    console.log(dayOfTheWeek);

    if(myGender==="male") {
      if(dayOfTheWeek===0){
        alert("You were born on: " + day[0]);
        alert("Your Akan name is: " + maleAkanNames[0]);
      } else if(dayOfTheWeek===1){
        alert("You were born on: " + day[1]);
        alert("Your Akan name is: " + maleAkanNames[1]);
      } else if(dayOfTheWeek===2){
        alert("You were born on: " + day[2]);
        alert("Your Akan name is: " + maleAkanNames[2]);
      } else if(dayOfTheWeek===3){
        alert("You were born on: " + day[3]);
        alert("Your Akan name is: " + maleAkanNames[3]);
      } else if(dayOfTheWeek===4){
        alert("You were born on: " + day[4]);
        alert("Your Akan name is: " + maleAkanNames[4]);
      } else if(dayOfTheWeek===5){
        alert("You were born on: " + day[5]);
        alert("Your Akan name is: " + maleAkanNames[5]);
      } else if(dayOfTheWeek===6){
        alert("You were born on: " + day[6]);
        alert("Your Akan name is: " + maleAkanNames[6]);
      }

    } else {
       if(dayOfTheWeek===0){
        alert("You were born on: " + day[0]);
        alert("Your Akan name is: " + femaleAkanNames[0]);
      } else if(dayOfTheWeek===1){
        alert("You were born on: " + day[1]);
        alert("Your Akan name is: " + femaleAkanNames[1]);
      } else if(dayOfTheWeek===2){
        alert("You were born on: " + day[2]);
        alert("Your Akan name is: " + femaleAkanNames[2]);
      } else if(dayOfTheWeek===3){
        alert("You were born on: " + day[3]);
        alert("Your Akan name is: " + femaleAkanNames[3]);
      } else if(dayOfTheWeek===4){
        alert("You were born on: " + day[4]);
        alert("Your Akan name is: " + femaleAkanNames[4]);
      } else if(dayOfTheWeek===5){
        alert("You were born on: " + day[5]);
        alert("Your Akan name is: " + femaleAkanNames[5]);
      } else if(dayOfTheWeek===6){
        alert("You were born on: " + day[6]);
        alert("Your Akan name is: " + femaleAkanNames[6]);
      }
    }
});
