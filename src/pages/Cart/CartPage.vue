<template>
    <div :class="['cart', { 'cart_mobile': !isLargeScreen }]" id="cart">
        <div class="container">
            <div class="cart_content">
                <div class="cart_left">
                    <ProfileLinks />
                </div>
                <div class="cart_right">
                    <div @click="goBack()" class="profile_mobile_go_back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33252 10.6672L6.66585 8.00057L9.33252 5.3339" stroke="var(--primary-text)"
                                stroke-linecap="round" />
                        </svg>
                        <span>Назад</span>
                    </div>
                    <div class="cart_info">
                        <div class="cart_image">
                            <img src="../../../public/images/cart.png" alt="">
                        </div>
                        <div class="cart_texts">
                            <h2>Корзина пуста</h2>
                            <p class="default-p">Делайте покупки ещё более удобнее! Установите расширение для браузера,
                                чтоб автоматически добавлять товары на сайт в одно нажатие! <span>Установить WAIX
                                    Extension</span></p>
                            <MainButton text="Активировать" />
                        </div>
                    </div>

                    <div class="cart_video">
                        <h3 class="default-h3">Посмотрите видео инструкцию по установке и настройке расширения WAIX
                            Extension</h3>
                        <p class="default-p">
                            Это позволит добавлять интересующие Вас товары в одно нажатие на китайских
                            площадках tmall.com, taobao.com и  1688.com — после чего товар автоматически будет добавлен в
                            корзину на сайте! Это очень быстро, удобно и без ошибок. Больше не нужно копировать ссылки с
                            сайтов.
                        </p>
                        <div class="review_video"
                            style=" background-image: url('../../../public/images/videoImage.png')"
                            @click="showVideo()">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="56" height="56" rx="28" fill="white" />
                                <path
                                    d="M21 22.6958V33.3042C21 37.0484 25.3337 39.2817 28.5691 37.2048L36.8321 31.9005C39.7227 30.045 39.7227 25.955 36.8321 24.0995L28.5691 18.7952C25.3337 16.7183 21 18.9516 21 22.6958Z"
                                    fill="#EF0000" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showPopupVideo" class="popup-overlay">
        <div class="popup_content">
            <div class="popup_close" @click="showVideo()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <div class="popup_video">
                <iframe src='https://www.youtube.com/embed/UZ9uyQI3pF0' frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('toggleCartClass') === 'true') {
        var cartElement = document.getElementById('cart');
        if (cartElement) {
            cartElement.classList.toggle('active');
        }
        localStorage.removeItem('toggleCartClass');
    }
});

import ProfileLinks from '@/components/ProfileLinks.vue';
import MainButton from '@/components/MainButton.vue';
export default {
    name: "CartPage",
    components: {
        ProfileLinks,
        MainButton
    },
    data() {
        return {
            isLargeScreen: window.innerWidth > 1050,
            showPopupVideo: false,
        }
    },
    methods: {
        showVideo() {
            this.showPopupVideo = !this.showPopupVideo;
        },
        goBack() {
            document.getElementById('cart') ? document.getElementById('cart').classList.toggle('active') : document.getElementById('cart').classList.toggle('active')
        },
    }
}
</script>

<style src="./cart.css" lang="css" scoped></style>