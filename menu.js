let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')
let trilho = document.getElementById('trilho')
        let body = document.querySelector('body')

        trilho.addEventListener('click', ()=>{
            trilho.classList.toggle('dark')
    		body.classList.toggle('dark')
        })

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})
