<template>
    <div class="greeting">
        <div class="greeting__content">
            <div class="greeting__title">Eldar Tahtarov</div>
            <em class="greeting__description">Frontend developer</em>
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
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        color: #ffffff;
    }
    &__title {
        font-size: 7rem;
    }
    &__description {
        font-size: 2rem;
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