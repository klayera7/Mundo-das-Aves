export default function initAnimacaoNumeros() {
    function animacaoNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);

            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                } else {
                    numero.innerText = start;
                }
            }, 25);
        });
    }

    // Corrigido para receber um array de mutações
    function handleMutation(mutations) { 
        if (mutations[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animacaoNumeros();
        }
    }

    const observeTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);

    if (observeTarget) {
        observer.observe(observeTarget, { attributes: true });
    }
}