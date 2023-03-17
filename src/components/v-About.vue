<template>
    <div class="about">
        <v-title title="About Me"></v-title>
        <div class="about__description">
            <div class="about__text">
                <p>
                    Hello! My name is Eldar and I'm novice frontend developer.
                    I started getting carried away with the frontend in 2020 when I studied at the university as a programmer
                </p>
                <p>
                    To date, I have managed to work in both a small and a large company. Worked with Vue 3 and Angular 2, there are also projects on React.
                    I was engaged in the development and support of banking systems and websites of construction companies
                </p>
            </div>
            <figure>
                <img src="../assets/im.jpg" alt="My photo" />
                <div class="frame"></div>
            </figure>
            </div>
    </div>
</template>

<script>
import VTitle from "@/components/UI/v-Title";
export default {
    components: {VTitle}
}
</script>

<style scoped lang="scss">
.about {
    max-width: 85%;
    margin: 10rem auto 0;

    &__description {
        display: flex;
        font-size: 1.3rem;
        justify-content: space-between;

        figure {
            position: relative;
            width: 100%;
            height: 100%;

            &:hover:before {
                width: 0;
            }
            &:before {
                z-index: 2;
                transition: 0.4s;
                content: '';
                border-radius: 5px;
                position: absolute;
                width: 100%;
                height: 98%;
                background-color: #000;
                opacity: 0.4;
            }
            &:hover:after {
                transform: translate(-0.5rem, -0.5rem);
            }
            &:after {
                transition: 0.4s;
                content: '';
                position: absolute;
                z-index: -2;
                width: 100%;
                height: 95%;
                top: 1.5rem;
                left: 1rem;
                border: 2px solid black;
            }
            img {
                max-width: 20rem;
                width: 100%;
                object-fit: cover;
                border-radius: 5px;
                box-shadow: 2px 2px 15px #000;
            }
        }
    }
}

@media (max-width: 950px) {
    .about {
        max-width: 100%;
        margin: 10rem 2rem 0;

        &__description {
            display: flex;
            flex-direction: column;
            font-size: 1.3rem;

            figure {
                width: inherit;
                align-self: center;

                &:before {
                    width: 100%;
                }
                &:after {
                    width: 100%;
                    height: 95%;
                }
            }
        }
    }
}

@media (max-width: 450px) {
    .about {
        margin: 10rem 0 0;

        &__description {
            figure {
                &:before {
                    width: 100%;
                }
            }
        }
    }
}
</style>