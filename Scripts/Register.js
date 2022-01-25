
 function btnSubmit() 
 {  
   var password = document.getElementById("password");
   
   if(password < 8)
   {
    console.log("Your password must be at least 8 characters long"); 
   }
   else
   {
    console.log("Strong Password!");
   }
 }

 