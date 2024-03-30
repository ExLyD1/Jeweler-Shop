const categoryChecker = document.querySelector("#categoryItemsHolder")

categoryChecker.addEventListener("click", event =>{
  event = event.target
  if (event.classList.contains('categoryItems')) {
    event.classList.toggle('categoryItemsActive')
  }
}) 
    


//---------------------

const group = document.querySelector(".headerItemsFourth")
const menu = document.querySelector(".adaptiveMenu")
const back = document.querySelector("#startBackImg")
const cancel = document.querySelector(".cancel")

group.addEventListener("click", event => {
  menu.classList.toggle("adaptiveMenuClick")
  back.classList.add("startBackImgClick")
})
cancel.addEventListener("click", event => {
  menu.classList.toggle("adaptiveMenuClick")
  back.classList.remove("startBackImgClick")
})