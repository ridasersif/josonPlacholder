function getPosts(){
    let request=new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts")
    request.responseType="json"
    request.send();
    request.onload=function(){
        if(request.status>=200 && request.status<300){
            let posts=request.response;
            console.log(posts.body)
            document.getElementById('posts').innerHTML=""
            for(post of posts){
                let content=`
                <div id="post">
                    <h3>${post.title}</h3>
                    <hr>
                    <h4>
                    ${post.body}
                    </h4>
                </div>
            
                `
                document.getElementById('posts').innerHTML+=content
            }
        }else{
            alert('error')
        }
    }
}
function getUsers(){
    let request=new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType="json"
    request.send();
    request.onload=function(){
        if(request.status>=200 && request.status<300){
            let users=request.response;
            console.log(posts.body)
            
            for(user of users){
                let content=`
                
            <div id="user" class="selected" >
                <h3>${user.name}</h3>
                <h3>${user.email}</h3>
            </div>
           
            
                `
                document.getElementById('user').innerHTML+=content
            }
        }else{
            alert('error')
        }
    }
}
getUsers()
getPosts()
