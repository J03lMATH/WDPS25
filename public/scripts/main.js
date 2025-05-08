import { getCurrentUser, removeCurrentUser } from "./user.js";

const nav = document.querySelector("nav")

if(getCurrentUser()){
    nav.innerHTML =`
    <ul>
         <li><a href="post.html">Post</a></li>
        <li><a href="profile.html">Profile</a></li>
         <li><a id="logout">Logout</a></li>
     </ul>
    `
}else{
    nav.innerHTML =`
    <ul>
         <li><a href="post.html">Register</a></li>
         <li><a href="login.html">Login</a></li>
     </ul>
    `
}

const logout = document.getElementById("logout")
if(logout){
   logout.addEventListener("click", () => {
    removeCurrentUser()
    window.location.href = "login.html"
   })
}


//Fetvh method implemetion
export async function fetchData(route ='', data ={}, methodType) {
  const options = {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if (methodType !== 'GET' && methodType !== 'DELETE') {
    options.body = JSON.stringify(data);
}
  
  
  const response = await fetch(`http://localhost:3000${route}`, options)
      if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
      } else {
        throw await response.json();
      }
}

export function validString(str) {
  return typeof str === "string" && str.trim().length > 0;
}
