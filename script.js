const btnAbrirModal = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('#modal')

btnAbrirModal.forEach((btn) => {
    btn.addEventListener('click', () =>{
        modal.classList.toggle('disabled')
    })
})

