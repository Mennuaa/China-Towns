<template>
    <div class="reviews">
        <div class="container">
            <div class="reviews_content">
                <div class="reviews_top">
                    <h2 class="default-h2">Отзывы наших клиентов</h2>
                    <MainButton text="Оставить отзыв" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue';
    export default {
        name: "ReviewsPage",
        components: {
            MainButton
        }
    }
</script>

<style lang="scss" scoped>

</style>