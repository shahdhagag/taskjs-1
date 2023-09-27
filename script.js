
var allProducts = document.querySelectorAll("#h2-content")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var div2= document.querySelector("#money1")
var totalPrice = 0



allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + " +  "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
        
        }
    }
})

btn.onclick = function(){
    div2.innerHTML="$"+totalPrice
}



