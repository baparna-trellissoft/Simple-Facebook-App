 const form = document.getElementById("form");
var database = [
    {
        email:"john.p@gmail.com",
        password:"johnp@123"
    },
    {
        email:"apss.b@gmail.com",
        password:"ab@123"
    },
    {
        email:"liya.a@gmail.com",
        password:"liya@123"
    },
    {
        email:"harry.p@gmail.com",
        password:"harry@123"
    }
]

var newsFeed = [
    {
        username:"John P",
        timeline:"Hi there! Good morning. Enjoying my Coffee:))"
    },
    {
        username:"Apss B",
        timeline:"Hurray....Finally it's a weekend!"
    },
    {
        username:"Liya A",
        timeline:"Too tired to go on a date :("
    },
    {
        username:"Harry P",
        timeline:"Too tired to go on a date :("
    }
]

function validateUserCredentials(){
    const email = document.getElementById("email").value;
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error');
    if(email == "" && pass == ""){
        error.style.display = "block";
        error.innerHTML = "Email and password can not be blank";
    }
    else if(!email_regex.test(email)){
        error.style.display = "block";
        error.innerHTML = "Please enter valid email id";
    }
    else{
        function ifUserExist(email,pass){
                for(i=0; i < database.length; i++){
                   if(database[i].email === email && database[i].password === pass){
                       return true;
                   }
                }
                return false;
               }

               function matchCredentials(username, password){
                       if(ifUserExist(username,password)){
                         console.log("Welcome " + username);
                         alert("Welcome " + username);
                         document.location.href="facebook-home.html";
                         console.log(newsFeed);
                       }
                       else{
                        error.style.display = "block";
                        error.innerHTML = "Wrong username or password";
                       }
                   }
                   matchCredentials(email, pass);
    }
 
}

if (form) {
    form.addEventListener("submit",function(e){
        e.preventDefault();
        validateUserCredentials();
    });
  }

