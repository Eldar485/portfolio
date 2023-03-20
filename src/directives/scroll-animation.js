export default {
    mounted: (el) => {
        const animItems = document.querySelectorAll('.scroll-anim')

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem);
                const animStart = 2;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - animItemHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('anim-active')
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop
        }

        el.scrollAnimation = () => {
            window.addEventListener('scroll', animOnScroll)
        };

        window.addEventListener('scroll', el.scrollAnimation);
        animOnScroll();
    },
    unmounted: (el) => {
        window.removeEventListener('scroll', el.scrollAnimation)
    },
    name: 'scroll-animation',
}