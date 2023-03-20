<template>
    <div class="preloader" v-if="a">
        <div class="preloader__content">E</div>
    </div>
    <div class="app" v-scroll-animation v-if="!a">
        <v-header :visible="visible" @visibleSet="setVisible"></v-header>
        <v-aside :visible="visible" @visibleSet="setVisibleHide"></v-aside>
        <v-greeting></v-greeting>
        <div class="wrapper">
            <v-about ref="about" />
            <v-experience ref="experience" />
            <v-work ref="work" />
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import VHeader from "@/components/v-Header";
import VGreeting from "@/components/v-Greeting";
import VAbout from "@/components/v-About";
import VExperience from "@/components/v-Experience";
import VWork from "@/components/v-Work";
import VFooter from "@/components/v-Footer";
import VAside from "@/components/v-Aside";
export default {
    components: {VAside, VHeader, VGreeting, VExperience, VFooter, VWork, VAbout},
    mounted() {
        setTimeout(() => {
            this.a = false;
        }, 5000)
    },
    data() {
        return {
            visible: false,
            a: true
        }
    },
    methods: {
        setVisible() {
            this.visible = !this.visible;

        },
        setVisibleHide() {
            this.visible = false;
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Raleway:wght@400;500&display=swap');
@import './normilize.css';

.preloader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #020c1b;
    width: 100%;
    height: 100%;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 3px;
        border: 3px solid #62f9d6;
        font-size: 50px;
        width: 5rem;
        height: 5rem;
        color: #62f9d6;
        transition: 0.3s;
        opacity: 0;
        animation: logo-anim 5s forwards;
    }
}

.app {
    font-family: 'League Spartan', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.8s;

    .wrapper {
        flex: 1 0;
        margin-top: 100vh;
        max-width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
    }
}

@keyframes logo-anim {
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(2);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
</style>