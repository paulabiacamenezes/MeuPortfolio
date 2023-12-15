window.revelar = ScrollReveal({reset:true}) //window chama todo o documento do site, com o uso do reset é  usado para resetar o documento do site

//TOPO DO SITE
revelar.reveal('.efeito-txt-topo',{
    //duração do efeito
    duration: 3000,
    distance: '90px'
})

revelar.reveal('.efeito-img-topo',{
    //duração do efeito
    duration: 3000,
    distance: '90px',
    delay: 200
})

//TITULOS DAS SESSÕES
revelar.reveal('.titulo',{
    //duração do efeito
    duration: 1500,
    distance: '90px'
})

//ESPECIALIDADES
revelar.reveal('.efeito-especialidades1',{
    //duração do efeito
    duration: 1000,
    distance: '90px',
    delay: 400
})

revelar.reveal('.efeito-especialidades2',{
    //duração do efeito
    duration: 1000,
    distance: '90px',
    delay: 600
})
revelar.reveal('.efeito-especialidades3',{
    //duração do efeito
    duration: 1000,
    distance: '90px',
    delay: 800
})

//SESCTION SOBRE
revelar.reveal('.efeito-img-sobre',{
    //duração do efeito
    duration: 2000,
    distance: '90px',
    delay: 400,
    origin: 'left'
})
revelar.reveal('.efeito-txt-sobre',{
    //duração do efeito
    duration: 2000,
    distance: '90px',
    delay: 400,
    origin: 'rigth'
})

//PORTFOLIO
revelar.reveal('.efeito-projeto1',{
    //duração do efeito
    duration: 1000,
    distance: '50px',
    delay: 400
})

revelar.reveal('.efeito-projeto2',{
    //duração do efeito
    duration: 1000,
    distance: '50px',
    delay: 600
})
revelar.reveal('.efeito-projeto3',{
    //duração do efeito
    duration: 1000,
    distance: '50px',
    delay: 800
})
