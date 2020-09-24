const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.box-photos')

for(let card of cards){
  card.addEventListener("click", function(){
    const photoId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/Photos/${photoId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("img").src = ""
})


