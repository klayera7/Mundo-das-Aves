export default function initDropDownMenu() {
    const dropdownItems = document.querySelectorAll('[data-dropdown]');

    if (dropdownItems.length) {
        dropdownItems.forEach((menu) => {
            ['touchstart', 'click'].forEach((userEvent) => {
                menu.addEventListener(userEvent, handleClick);
            });
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const element = this;
        element.classList.toggle('active');
        outsideClick(element, ['touchstart', 'click'], () => {
            element.classList.remove('active');
        });
    }

    function outsideClick(element, events, callback) {
        const html = document.documentElement;
        const outside = 'data-outside';

        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside);
                events.forEach((userEvent) => {
                    html.removeEventListener(userEvent, handleOutsideClick);
                });
                callback();
            }
        }
        
        if (!element.hasAttribute(outside)) {
            events.forEach((userEvent) => {
                html.addEventListener(userEvent, handleOutsideClick);
            });
            element.setAttribute(outside, '');
        }
    }
}