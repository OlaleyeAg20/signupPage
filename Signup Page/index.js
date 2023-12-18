const swappingBtn = document.getElementById('swapBtn')
const firstContainer = document.getElementById('firstContainer')
const secondContainer = document.getElementById('secondContainer')
const subTransition2 = document.getElementById('subTransition2')
const subTransition1 = document.getElementById('subTransition1')


swappingBtn.addEventListener('click', ()=>{
    firstContainer.classList.toggle("transition2")
    secondContainer.classList.toggle("transition1")
})
