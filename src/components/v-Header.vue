<template>
    <header class="header" v-hidden-header>
        <div class="logo"><a href="http://localhost:8080/">E</a></div>
        <div class="nav">
            <v-nav-item name="About" @click="scrollToElement('about')"></v-nav-item>
            <v-nav-item name="Experience" @click="scrollToElement('experience')"></v-nav-item>
            <v-nav-item name="Projects" @click="scrollToElement('work')"></v-nav-item>
            <v-button style-type="btn-default">Resume</v-button>
        </div>
        <div class="burger" :class="{close: visible}" @click.stop="$emit('visibleSet')">
            <div class="menu-button"></div>
        </div>
    </header>
</template>

<script>
import VButton from "@/components/UI/v-Button";
import VNavItem from "@/components/UI/v-Nav-item";

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
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    z-index: 6;
    position: sticky;
    height: 70px;
    top: 0;
    transition: 1s;
    background-color: #0a192f;
    color: #afb1c2;
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .logo {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 3px;
        border: 3px solid #62f9d6;
        font-size: 24px;
        width: 2rem;
        height: 2rem;
        margin-left: 5rem;
        color: #62f9d6;
        transition: 0.3s;

        a {
            text-decoration: none;
            color: #62f9d6;
        }

        &:hover {
            background-color: #133040;
        }
    }

    .nav {
        font-size: 20px;
        width: 30%;
        display: flex;
        justify-content: space-between;
        margin-right: 5rem;
    }

    .burger {
        display: none;
    }

    &_hidden {
        transform: translateY(-100%);
    }
}

@media (max-width: 1070px) {
    .header {
        .nav {
            display: none;
        }
        .logo {
            margin-left: 2.5rem;
        }
        .burger {
            cursor: pointer;
            display: block;
            z-index: 5;
            margin-right: 1rem;
            height: 30px;
            width: 30px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            .menu-button {
                top: 1rem;
            }
            .menu-button,
            .menu-button::before,
            .menu-button::after {
                display: block;
                background-color: #62f9d6;
                position: absolute;
                height: 2px;
                width: 30px;
                transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
                border-radius: 2px;
            }
            .menu-button::before {
                content: '';
                margin-top: -8px;
            }

            .menu-button::after {
                content: '';
                margin-top: 8px;
            }
            &.close {
                .menu-button {
                    background-color: #0a192f;
                    transition: 0.6s;
                }
                .menu-button::before {
                    margin-top: 0;
                    transition: 0.6s;
                    transform: rotate(405deg);
                }
                .menu-button::after {
                    margin-top: 0;
                    transition: 0.6s;
                    transform: rotate(-405deg);
                }
            }
        }
    }
}
</style>