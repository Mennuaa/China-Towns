<template>
    <div class="review_page_review">
        <div class="review_page_review_left">
            <img v-if="image" :src="image" alt="Review Image" class="review-image" />
        </div>
        <div class="review_page_review_right">
            <div class="review_page_review_right_top">
            <img v-if="image" :src="image" alt="Review Image" class="review-image review-image_mobile" />

                <div class="review_page_review_right_top_name_location">
                    <p class="default-p">{{ name }}</p>
                    <div class="review_location">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.66667 7.33301C9.66667 8.25348 8.92048 8.99967 8 8.99967C7.07953 8.99967 6.33333 8.25348 6.33333 7.33301C6.33333 6.41253 7.07953 5.66634 8 5.66634C8.92048 5.66634 9.66667 6.41253 9.66667 7.33301Z"
                                fill="#EF0000" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.96542 14.201C11.553 12.7936 13.703 10.2859 14 7.33301C14 4.0193 11.3137 1.33301 8 1.33301C4.68629 1.33301 2 4.0193 2 7.33301C2.2994 10.3094 4.22812 12.8333 7.0189 14.2342C7.63384 14.5429 8.36097 14.5297 8.96542 14.201ZM10.6667 7.33301C10.6667 8.80577 9.47276 9.99967 8 9.99967C6.52724 9.99967 5.33333 8.80577 5.33333 7.33301C5.33333 5.86025 6.52724 4.66634 8 4.66634C9.47276 4.66634 10.6667 5.86025 10.6667 7.33301Z"
                                fill="#EF0000" />
                        </svg>
                        <p class="default-p">{{ location }}</p>
                    </div>
                </div>
                <span>06.04.24</span>
            </div>
            <p class="default-p">{{ text }}</p>

            <div v-if="images && images.length" class="review_images">
                <div v-for="(img, index) in images.slice(0, 9)">
                    <img :key="index" :src="img" alt="Review Image" class="additional-image"
                        @click="openPopupImage(index)" />
                </div>
                <div v-if="images.length > 9" class="more-images" @click="openPopupImage(9)">
                    <span>+</span><span>{{ images.length - 9 }}</span>
                </div>
            </div>

        </div>

        <div v-if="showPopupImages" class="popup-overlay">
            <div class="popup_content">
                <div class="popup_close" @click="closePopupImage">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                            stroke-linecap="round" />
                    </svg>
                </div>
                <div class="popup_images">
                    <img :src="images[currentImageIndex]" alt="Review Image">
                </div>
                <div class="reviews_buttons buttons_popup">
                    <div class="reviews_button"
                        :class="{ inactive: currentImageIndex === 0, active: currentImageIndex > 0 }"
                        @click="showPreviousImage" :disabled="currentImageIndex === 0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L19 23" stroke="" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="reviews_button"
                        :class="{ inactive: currentImageIndex === images.length - 1, active: currentImageIndex < images.length - 1 }"
                        @click="showNextImage" :disabled="currentImageIndex === images.length - 1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9L19 16L12 23" stroke="" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReviewComponent',
    props: {
        image: {
            type: String,
            default: null
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showPopupImages: false,
            currentImageIndex: 0
        };
    },
    methods: {
        openPopupImage(index) {
            this.currentImageIndex = index;
            this.showPopupImages = true;
        },
        closePopupImage() {
            this.showPopupImages = false;
        },
        showPreviousImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            }
        },
        showNextImage() {
            if (this.currentImageIndex < this.images.length - 1) {
                this.currentImageIndex++;
            }
        }
    }
};
</script>

<style scoped>
.review-image_mobile{
    display: none;
}
.more-images {
    cursor: pointer;
    padding: 10px;
    background: var(--primary-violet);
    color: var(--text-light);
    display: flex;
    gap: 5px;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    text-align: left;

    align-items: center;
    justify-content: center;
}

.review_page_review {
    margin-top: 20px;
    width: 80%;
    display: flex;
    gap: 30px;
    padding: 30px;
    background: var(--primary-gray);
}

@media screen and (max-width: 1050px) {
    .review_page_review {
        width: 100%;
    }

}

.review_images {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 15px;
}

.review_images img {
    cursor: pointer;
}

.review_page_review_right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.review_page_review_right_top_name_location {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.review_page_review_right_top_name_location p {
    color: var(--primary-text);
    font-size: 16px;
    font-weight: 600;
    line-height: 20.8px;
    text-align: left;
}

.review_location {
    display: flex;
    align-items: center;
    gap: 10px;
}

.review_page_review_right_top {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.review_page_review_right_top span {
    color: var(--secondary-gray);
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
}

.review_location p {
    color: var(--secondary-gray);
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
}


.popup_images img {
    max-width: 100%;
    max-height: 80vh;
}
@media screen and (max-width: 764px) {
    .review_page_review_right_top_name_location{
        flex-direction: column;
        gap: 10px;
    }
    .review_page_review_right_top{
        display: flex;
        flex-direction: row;
        align-items: end;
    }
    .review-image{
        display: none;
    }
    .review-image_mobile{
        display: block;
        align-self: flex-start;
    }
    .review_page_review{
        display: block;
    }
}
</style>