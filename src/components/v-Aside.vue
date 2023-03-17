<template>
    <aside class="aside" :class="{visible: visible}">
        <div class="aside__content" v-click-outside="() => {$emit('visibleSet')}">
            <v-nav-item name="About" @click="scrollToElement('about'); $emit('visibleSet')"></v-nav-item>
            <v-nav-item name="Experience" @click="scrollToElement('experience'); $emit('visibleSet')"></v-nav-item>
            <v-nav-item name="Projects" @click="scrollToElement('work'); $emit('visibleSet')"></v-nav-item>
            <v-button style-type="btn-default">Resume</v-button>
        </div>
    </aside>
</template>

<script>
import VNavItem from "@/components/UI/v-Nav-item";
import VButton from "@/components/UI/v-Button";

export default {
    components: {VNavItem, VButton},
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        scrollToElement(el) {
            this.$parent.$refs[`${el}`].$el.scrollIntoView({behavior: "smooth"})
        },
    }
}
</script>

<style scoped lang="scss">
.aside__content {
    display: none;
}
@media (max-width: 1070px) {
    .aside {
        backdrop-filter: blur(5px);
        visibility: hidden;
        position: fixed;
        z-index: 3;
        width: 100vw;
        height: 100vh;

        &__content {
            visibility: hidden;
            display: flex;
            width: calc(min(75vw, 400px));
            z-index: 5;
            background-color: #112240;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            font-size: 1.5rem;
            top: 0;
            right: -25rem;
            bottom: 0;
            transition: 0.4s ease-in-out;

            & > * {
                margin-bottom: 2rem;
            }
        }
    }
    .aside.visible {
        visibility: inherit;
    }
    .visible .aside__content {
        visibility: inherit;
        transform: translateX(-25rem);
    }
}
</style>