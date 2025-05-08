import { getCurrentUser, removeCurrentUser , setCurrentUser } from "./user.js";
import { fetchData, validString} from "./main.js";

const user = getCurrentUser()

if(!user){
    window.location.href = "login.html"
}

const  profile= document.getElementById("profile")

profile.innerHTML= `
    <h1>Welcome ${user.username}</h1>
    <button id="deleteAccount">Delete Account</button>
`

const deleteUser=
    document.getElementById("deleteAccount")

deleteUser.addEventListener('click', deleteAccount)

function deleteAccount(e) {
    if(confirm("Are you sure you want to delete your account?")){
        fetchData(`/users/deleteAccount?userId=${user.userId}`, {} , 'DELETE')
        .then(data => {
            if(!data.message) {
                console.log(data)
                removeCurrentUser()
                window.location.href = "login.html"
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
}

const editForm = document.getElementById("editForm")
if(editForm){
    editForm.addEventListener("submit", editUsername)
}

function editUsername(e){
    e.preventDefault()

    const newUsername = document.getElementById("newUsername").value
    const errorSection= document.getElementById("errorMessage")

    if(!validString(newUsername)){
        errorSection.innerText = "Username is required"
    }else{
        const updateUser = {
            username: newUsername,
            userId: user.userId
        }
        fetchData('/users/editUsername', updateUser, 'PUT')
        .then(data => {
            if(!data.message) {
                setCurrentUser(data)
                window.location.href= "profile.html"
            }
        })
        .catch(err => {
            errorSection.innerText = `${err.message}`
        })
    }
}