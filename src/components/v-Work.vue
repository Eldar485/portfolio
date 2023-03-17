<template>
    <div class="work">
        <v-title title="Works"></v-title>
        <v-work-post class="work__item" title="Womazing" subtitle="Women's clothing store" number="01"></v-work-post>
<!--        <v-work-post class="work__item" :odd="true" title="Cerasa Redesign" subtitle="Leader in bathroom furniture since 1983." number="02"></v-work-post>-->
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

    &__item {
        margin-bottom: 10rem;
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
        margin: 0;

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