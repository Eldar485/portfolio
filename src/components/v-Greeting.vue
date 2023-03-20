<template>
    <div class="greeting">
        <div class="greeting__content">
            <div class="greeting__title scroll-anim">Eldar Tahtarov</div>
            <p class="greeting__description scroll-anim">Frontend developer</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.greeting {
    background-color: #0a192f;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        color: #ffffff;
    }
    &__title {
        font-size: 7rem;
        transform: translateY(60%);
        opacity: 0;
        transition: 0.8s;

        &.anim-active {
            transform: translateY(0);
            opacity: 1;
        }
    }
    &__description {
        font-size: 2rem;
        transform: translateY(100%);
        opacity: 0;
        transition: 0.8s 0.8s;
        margin: 0;

        &.anim-active {
            transform: translateY(0);
            opacity: 1;
        }
    }
}

@media (max-width: 750px) {
    .greeting {
        &__title {
            font-size: 4rem;
        }
    }
}

@media (max-width: 750px) {
    .greeting {
        &__title {
            font-size: 3rem;
        }
        &__description {
            font-size: 1.5rem;
        }
    }
}
</style>