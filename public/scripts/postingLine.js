import { fetchData } from "./main.js";
import { getCurrentUser } from "./user.js";

const user = getCurrentUser()

if(!user){
    window.location.href = "login.html"   
}

const postline= document.getElementById("userPosts")

if(postline){
    fetchData(`/posts/getUserPosts?userId=${user.userId}`, null , 'GET')
    .then(data => {
        if(!data.message) {
            postline.innerHTML = `
            `

            data.forEach(post =>{
                //creates a contaier for the post data
                const postDiv= document.createElement("div")
                postDiv.classList.add("post")
        
                //creates a title for the post
                const titlePost= document.createElement("h2")
                titlePost.innerText= post.title
        
                //creates a content for the post
                const contentPost= document.createElement("p")
                contentPost.innerText= post.content
        
                //Create a edit button
                const editButton= document.createElement("button")
                editButton.innerText= "Edit"
                editButton.classList.add("editPost")
                editButton.dataset.postId= post.postId
        
                //create a delete button
                const deleteButton= document.createElement("button")
                deleteButton.innerText= "Delete"
                deleteButton.classList.add("deletePost")
                deleteButton.dataset.postId= post.postId
        
        
                //append the title, content and buttons to the postDiv
                postDiv.appendChild(titlePost)
                postDiv.appendChild(contentPost)
                postDiv.appendChild(editButton)
                postDiv.appendChild(deleteButton)
        
                //append the postDiv to the postline div
                postline.appendChild(postDiv)
            })
        
            //nake the event listener for the edit button and the delete button
            document.querySelectorAll(".editPost").forEach(button => {
                button.addEventListener("click", handleEditPost);
            })
        
            document.querySelectorAll(".deletePost").forEach(button => {
                button.addEventListener("click", handleDeletePost);
            })
        }
    })

    .catch(err => {
        console.error(err)
    })
}

//edit a Post
function handleEditPost(e){
    const postId = e.target.dataset.postId
    fetchData(`/posts/getUserPosts?postId=${postId}`, {}, 'GET')
    .then(post => {
        if(!post.message){
            document.getElementById("title").value= post.title
            document.getElementById("content").value= post.content

            const editForm= document.getElementById("editForm")
            if(editForm){
                editForm.onsubmit= function(e){
                    e.preventDefault()
                    const updatePost = {
                        title: document.getElementById("title").value,
                        content: document.getElementById("content").value,
                        postId: postId
                    }

                    fetchData('/posts/updatePost', updatePost, 'PUT')
                    .then(data => {
                        if(!data.message) {
                            window.location.href= "post.html"
                        }
                    })
                    .catch(err => {
                        console.error(err)
                    })
                }
                    
            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}

//delete a Post
function handleDeletePost(e) {
    e.preventDefault()
    const postId = e.target.dataset.postId
    if(confirm("Are you sure you want to delete this post?")){
        fetchData(`/posts/deletePost?postId=${postId}`, {} , 'DELETE')
        .then(data => {
            if(!data.message) {
                window.location.href = "post.html"
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
}

