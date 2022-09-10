const share = document.querySelector('.icon-share')
const hidden = document.querySelector('.hidden')

share.addEventListener('click', () => {
    hidden.classList.toggle('show-hidden')
})