const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabInfo = document.querySelectorAll('.js-tabinfo section')

if(tabMenu.length && tabInfo.length) {
    tabInfo[0].classList.add('ativo')

    function ativarTab(index) {
        tabInfo.forEach((section) => {
            section.classList.remove('ativo')
        })
        tabInfo[index].classList.add('ativo')
    }

    tabMenu.forEach ((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            ativarTab(index)
        })
    })
}