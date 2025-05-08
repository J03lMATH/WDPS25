import { fetchData, validString } from "./main.js";
import { getCurrentUser} from "./user.js";

//postForm
let postForm = document.getElementById("postForm");
if(postForm){
    postForm.addEventListener("submit", createPost)
}

function createPost(e) {
    e.preventDefault();
    let errorSection= document.getElementById("errorMessage");
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let userId = getCurrentUser().userId
    if(!validString(title)){
        errorSection.innerText = "Title is required";
    }else if(!validString(content)){
        errorSection.innerText = "Content is required";
    }else{
        const post = {
            title: title,
            content: content,
            userId: userId
        }
        fetchData('/posts/createPost', post, 'POST')
        .then(data => {
            if(!data.message) {
                window.location.href = "post.html"
            }
          })
          .catch(err => {
            errorSection.innerText = `${err.message}`
          })
    }
}


