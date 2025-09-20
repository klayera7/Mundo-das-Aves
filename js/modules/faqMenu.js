export default function faqAnimation() {
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