<template>
    <div class="work">
        <v-title class="scroll-anim" title="Works"></v-title>
        <v-work-post class="work__item scroll-anim" title="Womazing" subtitle="Women's clothing store" number="01"></v-work-post>
<!--        <v-work-post class="work__item scroll-anim" :odd="true" title="Cerasa Redesign" subtitle="Leader in bathroom furniture since 1983." number="02"></v-work-post>-->
    </div>
</template>

<script>
import VTitle from "@/components/UI/v-Title";
import VWorkPost from "@/components/UI/v-Work-Post";
export default {
    components: {VWorkPost, VTitle}
}
</script>

<style scoped lang="scss">
.work {
    display: flex;
    flex-direction: column;
    margin: 10rem 2rem 0;

    .title {
        opacity: 0;
        transform: translateY(20%);
        transition: 0.8s;

        &.anim-active {
            transform: translateY(0);
            opacity: 1;
        }
    }

    &__item {
        margin-bottom: 10rem;
        opacity: 0;
        transform: translateY(20%);
        transition: 0.8s;

        &.anim-active {
            transform: translateY(0);
            opacity: 1;
        }

        &:nth-child(even) {
            align-self: flex-end;

            &__number {
                left: 0 !important;
                top: 20rem !important;
            }
        }
    }
}

@media (max-width: 1130px) {
    .work {
        margin: 15rem 2rem 0;

        &__item {
            align-self: center;
            &:nth-child(even) {
                align-self: center;

                &__number {
                    left: 0 !important;
                    top: 20rem !important;
                }
            }
        }
    }
}

@media (max-width: 740px) {
    .work {
        &__item {
            margin-bottom: 3rem;
        }
    }
}
</style>