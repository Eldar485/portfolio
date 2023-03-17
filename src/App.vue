<template>
    <div class="app">
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
    data() {
        return {
            visible: false
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

.app {
    font-family: 'League Spartan', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .wrapper {
        flex: 1 0;
        max-width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
    }
}
</style>