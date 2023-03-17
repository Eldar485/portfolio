<template>
    <figure class="work__item" :class="{odd: odd}">
        <img src="../../assets/link_1.png" alt=""/>
        <div class="work__content">
            <div class="content__title">{{ title }}</div>
            <em class="content__subtitle">{{ subtitle }}</em>
            <v-button class="content__btn" style-type="btn-default">Case study</v-button>
        </div>
        <div class="work__number">{{ number }}</div>
    </figure>
</template>

<script>
import VButton from "@/components/UI/v-Button";

export default {
    components: {VButton},
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        odd: {
            type: Boolean
        }
    }
}
</script>

<style scoped lang="scss">
.work {
    &__number {
        opacity: 0;
        position: absolute;
        font-size: 14rem;
        font-weight: 700;
        z-index: 2;
        right: 0;
        top: -1.5rem;
        transition: 0.4s;
        color: #98989d;
    }
    .odd &__number {
        right: inherit;
        left: 0;
    }
    &__item {
        cursor: pointer;
        box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.45);
        max-width: 950px;
        width: 100%;
        height: 480px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        transition: 0.4s;

        img {
            width: 100%;
            height: 480px;
            object-fit: contain;
        }

        &:hover {
            .work {
                &__number {
                    opacity: 1;
                    transform: translateY(-1rem);
                }
                &__content {
                    transform: scale(1.1);
                }
            }
        }

        &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #000;
            opacity: 0.5;
        }

        &:after {
            content: '';
            position: absolute;
            width: 0;
            left: 0;
            height: 100%;
            background-color: #253450;
            opacity: 0.8;
            transition: 0.4s;
        }

        &:hover:after {
            width: 100%;
            transition: 0.4s;
        }
    }

    &__content {
        z-index: 2;
        position: absolute;
        bottom: 6rem;
        left: 6rem;
        transition: 0.4s 0.2s;
    }
    .odd &__content {
        display: flex;
        flex-direction: column;
        left: inherit;
        align-items: flex-end;
        right: 6rem;
    }

    .content {
        &__title {
            font-size: 4rem;
            font-weight: 600;
            color: #ffffff;
        }
        &__subtitle {
            font-size: 1.48rem;
            color: #ffffff;
        }
        &__btn {
            margin-top: 1rem;
            display: block;
            font-size: 1rem;
            height: 2.5rem;
            letter-spacing: 3px;
            padding: 0.7rem;
        }
    }
}

@media (max-width: 740px) {
    .work {
        &__number {
            font-size: 12rem;
        }
        .content {
            &__title {
                font-size: 2rem;
            }
            &__subtitle {
                font-size: 1.2rem;
            }
            &__btn {
                font-size: 1rem;
                height: 2rem;
                letter-spacing: 2px;
                padding: 0.6rem;
            }
        }
    }
}

@media (max-width: 500px) {
    .work {
        &__number {
            font-size: 12rem;
        }
        &__item {
            height: 240px;

            img {
                height: 240px;
            }
        }
        &__content {
            bottom: 1rem;
            left: 1rem;
        }
        .odd &__content {
            right: 1rem;
        }
    }
}

@media (max-width: 500px) {
    .work {
        &__number {
            font-size: 8rem;
        }
    }
}
</style>