<template>
    <div class="title">
        <p>{{ title }}</p>
        <span></span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.title {
    white-space: nowrap;
    color: #4a4a4a;
    font-size: calc(5px + 3vw);
    font-weight: 700;
    display: flex;
    align-items: center;

    span {
        height: 1px;
        background: #4a4a4a;
        margin-left: 1rem;
        max-width: 22rem;
        width: 100%;
        transition: 0.4s;
    }
}

@media (max-width: 1070px) {
    .title {
        span {
            width: 200px;
        }
    }
}

@media (max-width: 600px) {
    .title {
        font-size: 1.5rem;

        span {
            width: 100%;
        }
    }
}
</style>