<template>
    <div class="reviews">
        <div class="container">
            <div class="reviews_content">
                <div class="reviews_top">
                    <h2 class="default-h2">Отзывы наших клиентов</h2>
                    <MainButton @click="openPopup" text="Оставить отзыв" />
                </div>
                <div class="reviews">
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество." />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />
                    <ReviewComponent image="../../public/images/reviewimage.png" name="Никоноров Андрей Вячеславович"
                        date="2024-06-20" location="New York, USA"
                        text="При возникновение вопросов- помогают, отвечают четко и быстро . Товар приходил в срок, надежно упакован . Будем продолжать сотрудничество."
                        :images="['../../public/images/review1.png', '../../public/images/review1.png']" />

                </div>

            </div>
        </div>
    </div>
    <div v-if="addCommentPopup" class="popup-overlay">
        <div class="popup_content">
            <div class="popup_close" @click="closePopup">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <div class="popup_reviews_content">
                <h2 class="default-h2">Оставьте свой отзыв</h2>
                <p class="default-p">Каждый отзыв важен для нас. Ваше мнение помогает нам становиться лучше и
                    совершенствоваться в своей работе.</p>

                <textarea class="last_textarea_parameter " placeholder="Примечание к товару" name="" id=""></textarea>

                <div class="reviews_last_btns">
                    <div @click="triggerFileInput" class="profile_photo_popup_button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.33287 5.41168L5.37217 9.37238C4.8415 9.90305 4.8415 10.7635 5.37217 11.2941C5.90285 11.8248 6.76327 11.8248 7.29394 11.2941L12.2049 6.38314C13.1961 5.39192 13.196 3.7848 12.2045 2.79376C11.2134 1.80299 9.60681 1.80314 8.61581 2.7941L3.70484 7.70505C2.25333 9.15658 2.25333 11.5099 3.70484 12.9615C5.15635 14.413 7.50974 14.413 8.96127 12.9615L12.5894 9.33325"
                                stroke="#EF0000" stroke-width="1.25" stroke-linecap="round" />
                        </svg>
                        <span>Прикрепить фото</span>

                    </div>
                    <input type="file" ref="fileInput" @change="handleFileChange" multiple style="display: none" />
                </div>
                <div class="reviews_images" v-if="imageUrls.length">
                    <div v-for="(url, index) in imageUrls" :key="index">
                        <img :src="url" alt="Selected Image" />
                    </div>
                </div>
                <MainButton @click="thanksPopupFunc" text="Оставить отзыв" />
            </div>

        </div>

    </div>
    <div v-if="thanksPopup" class="popup-overlay">
        <div class="popup_content" style="width: max-content;">
            <div class="popup_close" @click="thanksPopupFunc">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <div class="thanks_popup_cont">
                <svg width="66" height="58" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.787 11.0432L44.208 17.5107C43.4775 19.3424 44.8267 21.333 46.7987 21.333H58.8944C63.3034 21.333 66.4981 25.5363 65.3177 29.7844L60.1909 48.2358C58.5875 54.0063 53.3333 57.9996 47.3442 57.9996H31.8247C29.3912 57.9996 27.0041 57.3336 24.9221 56.0738L20.7634 53.5575C18.1478 51.9748 16.1989 49.5716 15.166 46.7902V51.3333C15.166 53.1743 13.945 54.6667 12.4387 54.6667H2.89329C1.38706 54.6667 0.166016 53.1743 0.166016 51.3333V18C0.166016 16.159 1.38706 14.6667 2.89329 14.6667H12.4387C13.945 14.6667 15.166 16.1591 15.166 18V23.231C16.0217 20.9261 17.5092 18.8727 19.5016 17.3296L22.9402 14.6663L35.571 2.43965C36.3184 1.7162 37.2527 1.21546 38.2689 0.993684C44.1098 -0.280983 49.0015 5.49016 46.787 11.0432Z"
                        fill="#EF0000" />
                </svg>

                <h2 class="default-h2">Спасибо за отзыв!</h2>
                <span>Ваш отзыв отправлен на модерацию</span>
            </div>
        </div>

    </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue';
import ReviewComponent from '@/components/Review.vue';

export default {
    name: "ReviewsPage",
    components: {
        MainButton,
        ReviewComponent
    },
    data() {
        return {
            addCommentPopup: false,
            imageUrls: [],
            thanksPopup: false
        }
    },
    methods: {
        openPopup() {
            this.addCommentPopup = true;
        },
        closePopup() {
            this.addCommentPopup = false;
        },
        thanksPopupFunc() {
            this.addCommentPopup = false;
            this.thanksPopup = !this.thanksPopup;
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const files = event.target.files;
            if (files && files.length > 0) {
                const urls = [];
                for (let i = 0; i < files.length; i++) {
                    urls.push(URL.createObjectURL(files[i]));
                }
                this.imageUrls = urls;
            }
        }
    }
}
</script>

<style src="./reviews.css" lang="css"></style>