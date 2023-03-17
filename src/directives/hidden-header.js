export default {
    mounted: (el) => {
        let currentScroll = 0
        let prevScroll = 0;
        el.hiddenHeader = () => {
            currentScroll= window.pageYOffset;

            const headerHidden = () => el.classList.contains('header_hidden');

            if (currentScroll > prevScroll && !headerHidden()) {
                el.classList.add('header_hidden');
            }
            if (currentScroll < prevScroll && headerHidden()) {
                el.classList.remove('header_hidden');
            }

            prevScroll = currentScroll;
        };
        window.addEventListener('scroll', el.hiddenHeader);
    },
    unmounted: (el) => {
        window.removeEventListener('scroll', el.hiddenHeader)
    },
    name: 'hidden-header',
}