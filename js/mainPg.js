const categoryChecker = document.querySelector("#categoryItemsHolder")

categoryChecker.addEventListener("click", event =>{
  event = event.target
  if (event.classList.contains('categoryItems')) {
    event.classList.toggle('categoryItemsActive')
  }
}) 
    