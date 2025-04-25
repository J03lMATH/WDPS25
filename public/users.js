let getUserBTN = document.getElementById("getUsers");
getUserBTN.addEventListener("click", getAllUsers);

function getAllUsers() {

    fetch("http://localhost:3000/users/getAllUsers")
    .then(resoponse => response.json())
    .then(data => console.log(data))
}