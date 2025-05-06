import { fetchData } from "./main.js"



//loginForm
let loginForm = document.getElementById("loginForm");
if(loginForm){
loginForm.addEventListener("submit", login)
}

function login(e) {
    e.preventDefault();
   
    //to prevent the form from submitting and refreshing the page
    let errorSection= document.getElementById("errorMessage");

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(!validString(username)){

        //to show error message if username is empty
        errorSection.innerText = "Username is required";
    }
    
       
        //login the user if username and password are not empty

        const user = {
            username: username,
            password: password
        }

        fetchData('/users/login', user, 'POST')
        .then(data => {
            if(!data.message) {
              setCurrentUser(data)
              window.location.href = "post.html"
            }
          })
          .catch(err => {
            errorSection.innerText = `${err.message}`
          })



        console.log("User Info: ", user)


    // Clear the input fields after submission
    document.getElementById("username").value ="";
    document.getElementById("password").value ="";

}



//Register Form
let registerForm = document.getElementById("registerForm");
if(registerForm){
    registerForm.addEventListener("submit", register)
}

function register(e) {
    e.preventDefault();
    
    let errorSection = document.getElementById("error")

    const user ={
    username: document.getElementById("regUsername").value,
    email: document.getElementById("regEmail").value,
    fName: document.getElementById("regFName").value,
    lName: document.getElementById("regLName").value,
    password: document.getElementById("regPassword").value
    }

    fetchData('/users/register', user, 'POST')
    .then(data => {
        if(!data.message) {
          setCurrentUser(data)
          window.location.href = "post.html"
        }
      })
      .catch(err => {
        errorSection.innerText = `${err.message}`
      })
}

// Function to check if a string is empty
function validString(word) {
    return word.length > 0;
}


//local Storage Functions

function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
  
export function removeCurrentUser() {
    localStorage.removeItem('user')
    window.location.href = "index.html"
  }



 

