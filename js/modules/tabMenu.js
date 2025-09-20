export default function listaAves() {
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