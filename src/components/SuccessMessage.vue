<template>
    <transition name="slide-fade">
        <div class="toast">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M29.3337 16.0001C29.3337 11.0155 29.3337 8.52315 28.2619 6.66675C27.5597 5.45059 26.5498 4.44069 25.3337 3.73854C23.4773 2.66675 20.9849 2.66675 16.0003 2.66675C11.0157 2.66675 8.5234 2.66675 6.66699 3.73854C5.45084 4.44069 4.44094 5.45059 3.73879 6.66675C2.66699 8.52315 2.66699 11.0155 2.66699 16.0001C2.66699 20.9847 2.66699 23.477 3.73879 25.3334C4.44094 26.5496 5.45084 27.5595 6.66699 28.2616C8.5234 29.3334 11.0157 29.3334 16.0003 29.3334C20.9849 29.3334 23.4773 29.3334 25.3337 28.2616C26.5498 27.5595 27.5597 26.5496 28.2619 25.3334C29.3337 23.477 29.3337 20.9847 29.3337 16.0001ZM22.7074 12.7072C23.098 12.3167 23.098 11.6835 22.7074 11.293C22.3169 10.9025 21.6837 10.9025 21.2932 11.293L13.3337 19.2525L10.0408 15.9596C9.65024 15.5691 9.01708 15.5691 8.62655 15.9596C8.23603 16.3502 8.23603 16.9833 8.62655 17.3739L12.6266 21.3739C13.0171 21.7644 13.6502 21.7644 14.0408 21.3739L22.7074 12.7072Z"
                    fill="#1CD344" />
            </svg>

            {{ text }}
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SuccessMessage',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            show: false
        };
    },
    watch: {
        text(newText) {
            if (newText) {
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                }, 5000);
            }
        }
    }
};
</script>
<style scoped>
.toast {
    position: fixed;
    width: max-content;
    top: 20px;
    /* right: 300px; */
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.78px;
    text-align: left;
    padding: 20px 30px;
    background-color: rgba(227, 255, 233, 1);
    color: rgba(28, 211, 68, 1);
    border-radius: 5px;
    opacity: 1;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    /* transform: translateX(100%); */
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-fade-enter {
    transform: translateX(0);
}

.slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>