export default {
    mounted: (el) => {
        el.scrollBlock = () => {
            let visible = el.classList.contains('close')
            let a = document.querySelector("body")
            if (visible) {
                a.setAttribute("style", "overflow-y:hidden;");
            } else {
                a.setAttribute("style", "overflow-y:auto;");
            }
        };
        window.addEventListener('click', el.scrollBlock);
    },
    unmounted: (el) => {
        window.removeEventListener('click', el.scrollBlock)
    },
    name: 'scroll-block',
}