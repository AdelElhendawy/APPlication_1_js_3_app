var home = document.getElementById("out")

let allProducts = document.querySelector(".products")
let item = []
let getCart = localStorage.getItem("productInCart")
if(getCart){
    let item = JSON.parse(getCart)
    drowProduct(item)
}

function drowProduct(products){
    let y = products.map((item) =>{
        return`
        
            <div class="product-item">
                        <img src="${item.imageUrl}" alt="">

                        
                        <div class="product-desc">
                            <h2>${item.title}</h2>
                            <p>${item.dis}</p>
                            <span>${item.color}</span>
                        </div><!-- /product-desc -->
                        

                        <div class="product-action">
                            <button class="add_to_cart remove"  onclick= "remove(${item.id})">Remove From Cart</button>
                        </div>

                    </div>
        `
    })

    allProducts.innerHTML = y.join(" ")
}



// function remove(id){
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let updatedCart = cart.filter(item => item.id != id)
//     localStorage.setItem("cart" , JSON.stringify(updatedCart))
//     drowProduct(updatedCart)
// }




// dell

function remove(id){
    // let index = products.map((item) =>{
    //     return item.id
    // }).indexOf(id)
    // if(index != -1){
    //     products.splice(index , 1)
    // }
    // drowProduct()
    // console.log(item)


    let index = item.map(product =>product.id).indexOf(id)
    if(index !== -1){
        item.splice(index , 1)
    }
    localStorage.setItem("productInCart" , JSON.stringify(item))
    drowProduct(item)
}
console.log(item)



// home 
window.addEventListener("scroll" , () =>{
    if(window.scrollY > 500){
        home.style.display = "block"
    }else{
        home.style.display = "none"
    }
})