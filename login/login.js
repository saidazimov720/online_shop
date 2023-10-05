
 var users = [];


 function handleSubmit() {
     
     var username = document.getElementById("user").value;
     var password = document.getElementById("password").value;
     var email = document.getElementById("email").value;

     
     var user = {
         username: username,
         password: password,
         email: email
     };

     
     users.push(user);

     document.getElementById("username").value = "";
     document.getElementById("password").value = "";
     document.getElementById("email").value = "";

     // Saqlansa chiqar shuni   
     alert("User registered successfully!");
 }