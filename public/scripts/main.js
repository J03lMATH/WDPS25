class User{
    constructor(userId, username, email, fName, lName, password) {
        this.userId = userId;
        this.userName = username;
        this.email = email;
        this.fName = fName;
        this.lName = lName;
        this.password = password;
    }

    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.userName = username;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getFName() {
        return this.fName;
    }
    setFName(fName) {
        this.fName = fName;
    }
    getLName() {
        return this.lName;
    }
    setLName(lName) {
        this.lName = lName;
    }
    getPassword() {
       return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getFullName() {
        return this.fName + " " + this.lName;
    }
}

const users = [
    {
        userId: 123,
        username: "JM15",
        email: "joel04mathew@gmail.com",
        fName: "Joel",
        lName: "Mathew",
        password: "coolPass",
    },
    {
        userId: 132,
        username: "Joey",
        email: "joeDane@gmail.com",
        fName: "Joe",
        lName: "Dane",
        password: "12345831",
    }
];

//const user1 = new User(123, "JM15", "joel04mathew@gmail.com", "Joel", "Mathew", "12345678");
//const user2 = new User(132, "Joey", "joeDane@gmail,com", "Joe", "Dane", "12345831");

//praticing User values
//console.log(user1.userId);
//console.log(user1); 
//console.log(user1.getFullName());

//console.log(users);

//users.push(user1);
//users.push(user2);

console.log(users);


users.forEach(function(users) {
    console.log(users.username + " : " + users.email + " : " + users.fName + " " + users.lName);
})


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

        console.log(username);

        const user = {
            username: username,
            password: password
        }

        console.log("User Info: ", user)


    // Clear the input fields after submission
    document.getElementById("username").value ="";
    document.getElementById("password").value ="";

}


// Function to check if a string is empty
function validString(word) {
    return word.length > 0;
}



 class FeedBack{
     constructor(username, feedback){
         this.username = username;
         this.feedback = feedback;
     }

     getUsername(){
         return this.username;
     }
     setUsername(username){
         this.username = username;
     }

     getFeedback(){
         return this.feedback;
     }
     setFeedback(feedback){
         this.feedback = feedback;
     }

     printFeedback(){
         console.log(this.username + " : " + this.feedback);
     }
 }

 const feedbacks = [
     {
         username: "Joey",
         feedback: "Great service!"
     },
     {
         username: "JM15",
         feedback: "Very helpful!"
     }
 ];

 console.log(feedbacks);

 feedbacks.forEach((feedback) => {
     console.log(feedback.username + " : " + feedback.feedback);
 })

 let feedbackForm = document.getElementById("feedbackForm");
 if(feedbackForm){
 feedbackForm.addEventListener("submit", submitFeedback)
    }

 function submitFeedback(e) {
     e.preventDefault();

     const username = document.getElementById("username").value;
     const feedback = document.getElementById("feedback").value;

     feedbacks.push(new FeedBack(username, feedback));
     console.log(feedbacks);
 }


 

