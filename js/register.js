let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click" , (e) =>{  //? جزء بتاع لو ضغط علي الانبوت والفورم قاضي يطلعلي رساله
    e.preventDefault()  // تمنع السلوك الافتراضي يعمل ريفرش للصفحه 
    if(username.value == "" || email.value == "" || password.value == ""){
        // alert("ادخل البيانات اولا")
        Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "please fill data!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return ;
    }else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(() =>{
            Swal.fire({
            position: "top-center",
            icon: "success",
            // title: "Your Data has been saved",
            title: "Your account has been created successfully 🎉",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true

}).then((result) =>{
    if(result.dismiss === Swal.DismissReason.timer){
            window.location = "login.html"

    }
});

            // window.location = "login.html"
        })
    }
})

// ? /////////////............جزء شيل التشفير......//////
let show = document.getElementById("show")
// show.onclick = () =>{
//     if(show.checked){
//         password.type = "text"
//     }else {
//         password.type = "password"
//     }
// }

// if مختسره 
show.addEventListener("click" , () =>{
    password.type = show.checked ? "text" : "password"
})
//////////////////////////////////////////////////////////////
