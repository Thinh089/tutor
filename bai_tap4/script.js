const close = document.getElementById("close")
const open = document.getElementById("open")
const cart = document.getElementById("cart")

open.onclick=()=>{
  if(cart.style.display = "none"){
    cart.style.display = "block"
  } 
}

close.onclick=()=>{
    cart.style.display = "none"
}