<template>
    <button :class="styleType">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        styleType: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.btn-default {
    position: relative;
    color: #ffffff;
    border: 1px solid #ffffff;
    background: none;
    cursor: pointer;
    transition: 0.4s;

    &:before {
        content: '';
        z-index: -1;
        top: 0;
        right: 0;
        position: absolute;
        width: 0;
        height: 100%;
        background-color: #62f9d6;
        transition: 0.4s;
    }

    &:hover:before {
        width: 100%;
        transition: 0.4s;
        left: 0;
    }

    &:after {
        content: '';
        z-index: -2;
        top: 0;
        right: 0;
        position: absolute;
        width: 0;
        height: 100%;
        background-color: #c74b4c;
        transition: 0.4s 0.3s;
    }

    &:hover:after {
        width: 100%;
        transition: 0.4s;
        left: 0;
    }
}

.tabs__item {
    background: #ffffff;
    border: none;
    text-align: left;
    transition: 0.5s;
    padding: 0.8rem 20px 0.6rem;
    border-left: 2px solid #233554;
    cursor: pointer;

    &:hover {
        background-color: #0a192f;
        color: #ffffff;
    }
}

@media (max-width: 600px) {
    .tabs__item {
        border-left: none;
        border-bottom: 2px solid #233554;
    }
}

</style>