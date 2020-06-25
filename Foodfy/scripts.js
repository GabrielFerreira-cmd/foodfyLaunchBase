const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')


for(let card of cards){
    const wrapper1 = card.querySelector('.wrapper1').textContent
    const wrapper2 = card.querySelector('.wrapper2').textContent

    card.addEventListener("click" , function(){
        const ReceiptId = card.getAttribute("id")
        modal.classList.add('active')
        modal.querySelector('img').src = `/layouts/assets/${ReceiptId}.png`
        modal.querySelector('.wrapper1').innerHTML = `${wrapper1}`
        modal.querySelector('.wrapper2').innerHTML = `${wrapper2}`

    })
}
