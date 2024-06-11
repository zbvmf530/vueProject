const axios = require('axios');

const url = 'http://localhost:3000/';
// fetch post
let data= {id: "4", title : "fetch-Posts", author: "typicode"};

// fetch post
async function postPostsFetch(){
    await fetch(url+'posts',{
        method : "POST",
        headers:{"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => console.log(result));

    getPostsAxios();
}

// fetch put
async function putPostsFetch(){
    data.title = "Modified by Fetch";
    await fetch(url+'posts/4',{
        method : "put",
        headers:{"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => console.log(result));

    getPostsAxios();
}

// fetch delete
async function deletePostsFetch(){
    await fetch(url+'posts/4',{
        method : "delete",
        headers:{"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => console.log(result));

    getPostsAxios();
}

// fetch get
function getPostsFetch(){
    fetch(url+'posts')
    .then(res=>res.json())
    .then(data => console.log(data));
}

// axios post
async function axiosPost(){
    let inputData={id: "5", title : "axios-Posts", author: "typicode"}
    await axios.post(url+'posts',inputData)
    .then(json=>console.log(json));
    
    getPostsAxios();
}

// axios put
async function axiosPut(){
    let inputData={id: "5", title : "axios-Posts", author: "typicode"};
    inputData.title="modified by Axios";
    await axios.put(url+'posts/5',inputData)
    .then(json=>console.log(json.data));
    
    getPostsAxios();
}

// axios put
async function axiosDelete(){
    await axios.delete(url+'posts/5')
    .then(json=>console.log(json.data));
    
    getPostsAxios();
}

function getPostsAxios(){
    // axios get
    axios.get(url+'posts')
    .then(json=>console.log(json.data));
    }
    
    //postPostsFetch();
    // putPostsFetch();


    //axiosPost();
    // axiosPut();
    //axiosDelete();

    deletePostsFetch();