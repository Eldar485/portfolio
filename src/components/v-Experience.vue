<template>
    <div class="experience">
        <v-title title="Where I’ve Worked"></v-title>
        <div class="tabs">
            <nav class="tabs__items">
                <v-button style-type="tabs__item" :class="{active: selectedItem === item}" v-for="item in experience" v-bind:key="item.id" @click="selectedItem = item">{{ item.company }}</v-button>
            </nav>
            <div class="tabs__body">
                <div class="tabs__block">
                    <span class="block__post">{{ selectedItem.post }}</span> <span class="block__company">@ {{ selectedItem.company }}</span>
                    <p class="block__time">{{ selectedItem.time }}</p>
                    <ul>
                        <li class="block__charge" v-for="charge in selectedItem.charge" v-bind:key="charge">{{ charge }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VTitle from "@/components/UI/v-Title";
import VButton from "@/components/UI/v-Button";
export default {
    components: {VButton, VTitle},
    data() {
        return {
            selectedItem: {},
            experience: [
                {
                    id: 1,
                    company: 'Axiomatika',
                    post: 'Software Engineer',
                    time: 'February - December 2022',
                    charge: [
                        'Work with JavaScript, TypeScript, Angular 2',
                        'Support of the client side of existing projects of banking systems and credit institutions, as well as the development of new ones'
                    ]
                },
                {
                    id: 2,
                    company: 'CompasPro',
                    post: 'Intern',
                    time: 'January - February 2022',
                    charge: [
                        'Work with JavaScript, Vue 3',
                        'Development of interactive interaction through SVG images',
                        'Website development of a construction company',
                    ]
                }
            ]
        }
    },
    mounted() {
        this.selectedItem = this.experience[0]
    }
}
</script>

<style scoped lang="scss">
.experience {
    max-width: 70%;
    margin: 15rem auto 0;

    ul {
        list-style-type: none;
    }
    .tabs {
        display: flex;
        font-size: 1rem;
        font-weight: 500;

        &__items {
            display: flex;
            flex-direction: column;
        }

        &__body {
            margin-left: 2rem;
        }
    }

    .block {
        &__post {
            color: #4a4a4a;
            font-size: 2rem;
        }
        &__company {
            font-size: 2rem;
        }
        &__time {
            margin: 0.5rem 0 2rem 0;
        }
        &__charge {
            font-size: 1.2rem;
            position: relative;
            margin: 1rem 0;

            &:before {
                content: '+';
                position: absolute;
                left: -25px;
            }
        }
    }
}

.active {
    background-color: #0a192f !important;
    color: #ffffff;
    transition: 0.25s ease-out;
}

@media (max-width: 800px) {
    .experience {
        max-width: 95%;

        .block {
            &__post {
                font-size: 1.5rem;
            }
            &__company {
                font-size: 1.5rem;
            }
        }
    }
}

@media (max-width: 600px) {
    .experience {
        .tabs {
            display: block;
            margin-top: 2rem;

            &__items {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            &__body {
                margin: 2rem 0 0 0;
            }
        }
        .block {
            &__charge {
                margin: 1rem 0 1rem 0;

                &:before {
                    content: '+';
                    position: absolute;
                    left: -20px;
                }
            }
        }
    }
}
</style>