let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , (e) =>{
    e.preventDefault()
    if(username.value == "" || password.value == ""){
        // alert("please fill data")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please fill data!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return ;
    }else{
        if(getUserName.trim() === username.value.trim() && getPassword === password.value){
            Swal.fire({
            icon: "success",
            // title: "Data entered Successfully...",
            title: "Welcome back! You have logged in successfully 👋",
            // draggable: true,
            showConfirmButton: false,
            timer: 1500
        }).then();
            setTimeout(() =>{
            window.location = "index.html"
        } , 1000)
        }else {
            // alert("UserName or Password is worng!")
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "UserName or Password is worng!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return ;
        }
    }
})


// ? ///////////////..........جزء شيل التشفير0..........///////
// if مختسره 
show.addEventListener("click" , () =>{
    password.type = show.checked ? "text" : "password"
})