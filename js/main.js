function youCanSeeOrNot (name,age) { 
    name = document.getElementById("userName").value;
    age = document.getElementById("userAge").value;
    correctAge = "why Our casino? You can play with us wherever and whenever you fancy, and no matter the time of day, we’ll be there for you with our 24/7 Customer Support.";
    inCorrectAge = "kids are not allowed in the casino as the place is only for 18+.";
      
    const ages = 2021 - age; 
    const comeBack = ages - 2003;

    if ( ages <= 2003){ 
          document.getElementById('allowed').innerHTML = `Congratulations ${name}, you are  ${age} years old and you can see this content.`;
          document.getElementById('text').innerHTML = correctAge;
          document.getElementById('center').style.backgroundColor = "rgb(122 216 126 / 96%)";
          document.getElementById('center').style.color = "white";
          document.getElementById('Second-box').style.backgroundColor = "rgb(76 175 80 / 85%)";
          document.getElementById('Second-box').style.color = "white";
          document.getElementById('mainTitle').innerHTML = `${name} Welcome to Max's casino`;
          document.getElementById("login-hidden").style.visibility = "hidden";
          document.getElementById("login-hidden").style.height = "0px";
          document.getElementById("goBack").style.display = "block";         
          
    } 
    else{ 
          document.getElementById('allowed').innerHTML = `${name} you are  not 18 years old (you are ${age}) and you cant see this content! you can come back ${comeBack} years after.`;
          document.getElementById('text').innerHTML = inCorrectAge;
          document.getElementById('center').style.backgroundColor = "#f28282";
          document.getElementById('center').style.color = "white";
          document.getElementById('Second-box').style.backgroundColor = "rgb(210 65 82 / 85%)";
          document.getElementById('Second-box').style.color = "white";
          document.getElementById('mainTitle').innerHTML = `Administrator: Goodbye ${name}!`;
          document.getElementById("login-hidden").style.visibility = "hidden";
          document.getElementById("login-hidden").style.height = "0px";
          document.getElementById("goBack").style.display = "block";      
        }
    
}
    


    

