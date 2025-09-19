// Animação do scroll em relação ao conteudo ao lado
function listaAves() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabInfo = document.querySelectorAll('[data-tab="content"] section')

    if(tabMenu.length && tabInfo.length) {
        tabInfo[0].classList.add('ativo', tabInfo[0].dataset.anime)

        function ativarTab(index) {
            tabInfo.forEach((section) => {
                section.classList.remove('ativo')
                console.log()
            })
            tabInfo[index].classList.add('ativo', tabInfo[index].dataset.anime)
        }

        tabMenu.forEach ((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                ativarTab(index)
            })
        })
    }
} 
listaAves()

// Animação de curiosidades ao click
function faqAnimation() {
    const accordionList = document.querySelectorAll('[data-menu="accordion"] dt')
    if(accordionList.length) {
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        function ativarAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', ativarAccordion)
        })
    }
}
faqAnimation()

// Animação do scroll
function animeScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    if(sections.length) {
        const windowMedida = window.innerHeight * 0.6
        function scroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const sectionVisible = (sectionTop - windowMedida) < 0
                if(sectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }
        scroll()
        window.addEventListener('scroll', scroll)
    }
}
animeScroll()