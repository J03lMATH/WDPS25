async function fetchData(route ='', data ={}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
        method: methodType, // *POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
      } else {
        throw await response.json();
      }
}

console.log(users);


users.forEach(function(users) {
    console.log(users.username + " : " + users.email + " : " + users.fName + " " + users.lName);
})


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
              window.location.href = "food.html"
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
    
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const fName = document.getElementById("regFName").value;
    const lName = document.getElementById("regLName").value;
    const password = document.getElementById("regPassword").value;

    const userId = Math.floor(Math.random() * 1000); // random ID for now

    const newUser = new User(userId, username, email, fName, lName, password);
    users.push(newUser);

    console.log("New user registered:");
    console.log(newUser);
    console.log("All users:", users);

    document.getElementById("registerMessage").innerText = `User ${newUser.getFullName()} registered successfully!`;

    // Clear form
    registerForm.reset();
}

// Function to check if a string is empty
function validString(word) {
    return word.length > 0;
}


//local Storage Functions

function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
  
  function removeCurrentUser() {
    localStorage.removeItem('user')
  }



 

