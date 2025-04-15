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
];

const user1 = new User(123, "JM15", "joel04mathew@gmail.com", "Joel", "Mathew", "12345678");
const user2 = new User(132, "LOlol", "joeDane@gmail,com", "Joe", "Dane", "12345831");

console.log(user1.userId);
console.log(user1); 
console.log(user1.getFullName());

console.log(users);

users.push(user1);
users.push(user2);

console.log(users);


users.forEach(function(users) {
    console.log(users.getFullName());
})

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login)

function login(event) {
    event.preventDefault();
    
    //to prevent the form from submitting and refreshing the page
    let errorSection= document.getElementById("error!!");

    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(validString(username)){

        //to show error message if username is empty
        errorSection.innerHTML = "Username is required";
    }
    else{
        
        //login the user if username and password are not empty

        errorSection.innerText =""
        console.log(username);

        const user = {
            username: username,
            password: password
        }

        let section = document.getElementById("section");
        section.innerHTML = 'Welcome to the site, ${username}!';

        console.log(user)
    }

    // Clear the input fields after submission
    document.getElementById("username").value ="";
    document.getElementById("password").value ="";

}


// Function to check if a string is empty
function validString(word) {
    return word == ""
}