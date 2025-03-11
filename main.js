window.revelar = ScrollReveal({reset:true})

//principal
revelar.reveal('.texto-principal', {
    duration: 2000,
    distance: '90px',
    origin: 'left'

})

revelar.reveal('.link-sobre-mim', {
    duration: 2000,
    distance: '90px',
    origin: 'bottom'

})

revelar.reveal('.imagem-eu', {
    duration: 2000,
    distance: '90px',
    origin: 'right'

})

// Sobre

revelar.reveal('.efeito-txt-dev', {
    duration: 2000,
    distance: '90px',
    origin: 'left'

})

revelar.reveal('.efeito-txt-sobre', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.efeito-txt-skills', {
    duration: 2000,
    distance: '90px',
    origin: 'top'
})

revelar.reveal('.efeito-txt-skills-1', {
    duration: 2000,
    distance: '90px',
    delay: 200
})

revelar.reveal('.efeito-txt-skills-2', {
    duration: 2000,
    distance: '90px',
    delay: 300
})

revelar.reveal('.efeito-txt-skills-3', {
    duration: 2000,
    distance: '90px',
    delay: 400
})

revelar.reveal('.efeito-txt-skills-4', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.efeito-txt-skills-5', {
    duration: 2000,
    distance: '90px',
    delay: 600
})

revelar.reveal('.efeito-txt-skills-6', {
    duration: 2000,
    distance: '90px',
    delay: 700
})

revelar.reveal('.efeito-txt-projetos', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-txt-projetos-1', {
    duration: 2000,
    distance: '120px',
    delay: 200,
})

revelar.reveal('.efeito-txt-projetos-2', {
    duration: 2000,
    distance: '90px',
    delay: 400,
})

revelar.reveal('.efeito-txt-projetos-3', {
    duration: 2000,
    distance: '90px',
    delay: 600,
})

document.addEventListener("wheel", (event) => {
    if (window.innerWidth <= 768 ) return;

    event.preventDefault();

    let sections = document.querySelectorAll("section, .footer");
    let currentScroll = window.scrollY;
    let viewportHeight = window.innerHeight;

    let closestSection = sections[0];
    let minDistance = Math.abs(closestSection.offsetTop - currentScroll);

    sections.forEach((section) => {
        let distance = Math.abs(section.offsetTop - currentScroll);
        if (distance < minDistance) {
            closestSection = section;
            minDistance = distance;
        }
    });

    let nextSection;
    if (event.deltaY > 0) {
        nextSection = [...sections].find(sec => sec.offsetTop > currentScroll + 10);
    } else {
        nextSection = [...sections].reverse().find(sec => sec.offsetTop < currentScroll - 10);
    }

    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
}, { passive: false });
