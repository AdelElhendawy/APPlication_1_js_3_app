// localStorage.setItem("username" , "adel")
// localStorage.setItem("password" , "123456")

 //? بخزن وبعرض
// console.log(localStorage.getItem("username") , localStorage.getItem("password"))

 // localStorage.removeItem("username")  //? بيمسح عنصر واحد

// localStorage.clear() //? بيمسح كل حاجه 



//* /////////////////////////////////..................Start............//////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////
var home = document.getElementById("out")

let allProducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title : "iPhone : 16 Pro Max",
        dis : "iPhone 16 Pro Max بشاشة 6.9 بوصة، أداء فائق بمعالج A18 Pro، كاميرا ثلاثية ذكية، وتصميم تيتانيوم أنيق بلون رمادي عصري." ,
        color : "Color : Gray",
        imageUrl : "images/iphone-16_max.jpg"
    },
    {
        id: 2,
        title : "LG UltraGear.",
        dis : "شاشة ألعاب 32″ OLED بدقة 4K وتحديث حتى 240Hz، مع دعم G‑SYNC وFreeSync لأداء سريع وتجربة لعب بدون تقطيع.",
        color : "Color : Black",
        imageUrl : "images/lg.jpg"
    },
    {
        id: 3,
        title : "Freezer Melling Frostx 400",
        dis : "فريزر عمودي بسعة 400 لتر بتقنية التجميد السريع وتوزيع هواء متوازن، لحفظ الطعام بكفاءة مع استهلاك منخفض للطاقة وتصميم أنيق." ,
        color : "Color :White",
        imageUrl : "images/fraser.jpg"
    },
    {
        id: 4,
        title : "Melange CoolMax 500",
        dis : "تلاجة Melange بسعة 500 لتر، تصميم أنيق موفّر للطاقة، تبريد موزّع بالتساوي، وحفظ مثالي للطعام بأحدث تقنيات التبريد الذكي." ,
        color : "Color :Silver",
        imageUrl : "images/fridge.jpg"
    },
    {
        id: 5,
        title : "SMEG Opera 90",
        dis : "بوتاجاز Smeg إيطالي فاخر بعرض 90 سم، خمس شعلات غاز، فرن متعدد الوظائف، وتصميم ستانلس ستيل أنيق بلمسة عصرية." ,
        color : "Color :Black",
        imageUrl : "images/smeg.jpg"
    },
    {
        id: 6,
        title : "LG TurboWash 10.5kg",
        dis : "غسالة LG أوتوماتيك بسعة 10.5 كجم، تقنية TurboWash، بخار مضاد للبكتيريا، وتصميم أنيق موفّر للطاقة بلون فضي جذاب." ,
        color : "Color :Sky Blue",
        imageUrl : "images/washing.jpg"
    },
    {
        id: 7,
        title : "Carrier Optimax 2.25HP",
        dis : "Carrier بقدرة 2.25 حصان، تبريد فائق بتكنولوجيا الانفرتر، توزيع هواء ذكي، وتصميم أنيق موفّر للطاقة بلون أبيض عصري." ,
        color : "Color :White",
        imageUrl : "images/AC.jpg"
    },
    {
        id: 8,
        title : "PowerVac Panasonic",
        dis : "Panasonic بقدرة شفط عالية، تنظيف فعال بتكنولوجيا متقدمة، تصميم مدمج ذكي، موفّرة للطاقة، بلون كافيه  يناسب كل المنازل." ,
        color : "Color :Coffee Brown",
        imageUrl : "images/panasonic.jpg"
    },
    {
        id: 9,
        title : "Kitchen Blender",
        dis : "Blender قوي بسعة كبيرة، شفرات ستانلس ستيل حادة، أداء سريع لتحضير العصائر، تصميم أنيق موفّر للطاقة، بلون  عصري." ,
        color : "Color :Dark Metallic Grey",
        imageUrl : "images/blender.jpg"
    },
    {
        id: 10,
        title : "Filter Globe Well",
        dis : "فلتر Globe Well لتنقية المياه، نظام ترشيح متطور بخمس مراحل، تصميم مدمج أنيق، موفّر للطاقة،  عملي يناسب كل المطابخ." ,
        color : "Color :Sky Blue",
        imageUrl : "images/felter.jpg"
    },
]

function drowProduct(){
    let y = products.map((item) =>{
        return`
        
            <div class="product-item">
                        <img src="${item.imageUrl}" alt="">

                        
                        <div class="product-desc">
                            <h2>${item.title}</h2>
                            <p>dis : ${item.dis}</p>
                            <span>${item.color}</span>
                        </div><!-- /product-desc -->
                        

                        <div class="product-action">
                            <i class="fa-solid fa-heart"></i>
                            <button class="add_to_cart" onclick= "addToCart(${item.id})">Add To Cart</button>
                        </div>

                    </div>
        `
    })

    allProducts.innerHTML = y.join(" ")
}
drowProduct()

//* ////////////////////////////////////////////////////////////////////////////////////////////////

// function check(){
//     if(localStorage.getItem("username")){
//         window.location = "cartProducts.html"
//     }else {
//         window.location = "login.html"
//     }
// }

let viewProductsDiv = document.querySelector(".veiwProduct div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("productInCart") ?JSON.parse(localStorage.getItem("productInCart")) : [];
if(addedItem){
    addedItem.map(item =>{
    viewProductsDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}


function addToCart(id) {
    let chooseItem = products.find((item) => item.id === id)
    viewProductsDiv.innerHTML += `<p>${chooseItem.title}</p>`

    addedItem = [...addedItem , chooseItem] //الاسبريد ابوليتور
    localStorage.setItem("productInCart" , JSON.stringify(addedItem))


    let viewProductsDivP = document.querySelectorAll(".veiwProduct div p") // count العداد
    badge.innerHTML = viewProductsDivP.length
            badge.style.display = "block"

    


            veiwProduct.style.display = "block"
}


let cart = document.querySelector(".cart")
let veiwProduct = document.querySelector(".veiwProduct")
cart.addEventListener("click" , () =>{
    if(veiwProduct.innerHTML !=""){
        if(veiwProduct.style.display == "block"){
            veiwProduct.style.display = "none"
        }else {
            veiwProduct.style.display = "block"
        }
    }
})



// home 
window.addEventListener("scroll" , () =>{
    if(window.scrollY > 500){
        home.style.display = "block"
    }else{
        home.style.display = "none"
    }
})