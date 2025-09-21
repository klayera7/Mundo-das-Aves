export default function animeScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    if(sections.length) {
        const windowMedida = window.innerHeight * 0.6
        function scroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const sectionVisible = (sectionTop - windowMedida) < 0
                if(sectionVisible) {
                    section.classList.add('ativo')
                } 
                else if(section.classList.contains('ativo')) {
                    section.classList.remove('ativo')
                }
            })
        }
        scroll()
        window.addEventListener('scroll', scroll)
    }
}