<template>
    <div class="profile_links">
        <div @click="showMobileProfile()" :class="['profile_link', { 'active': isActive('/profile') }]">
            <div class="profile_link_text">
                <div class="">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.00033 7.49967C7.84127 7.49967 9.33366 6.00729 9.33366 4.16634C9.33366 2.32539 7.84127 0.833008 6.00033 0.833008C4.15938 0.833008 2.66699 2.32539 2.66699 4.16634C2.66699 6.00729 4.15938 7.49967 6.00033 7.49967Z"
                            :fill="determineFill('/profile')" />
                        <path
                            d="M6.00033 14.1663C8.94584 14.1663 11.3337 12.8232 11.3337 11.1663C11.3337 9.50949 8.94584 8.16634 6.00033 8.16634C3.05481 8.16634 0.666992 9.50949 0.666992 11.1663C0.666992 12.8232 3.05481 14.1663 6.00033 14.1663Z"
                            :fill="determineFill('/profile')" />
                    </svg>

                </div>
                <a class="default-link-text">Профиль</a>
            </div>
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.833984L3.33268 3.50065L0.666016 6.16732" stroke="var(--primary-text)"
                    stroke-linecap="round" />
            </svg>

        </div>
        <div @click="showMobileCart()" :class="['profile_link', { 'active': isActive('/cart') }]">
            <div class="profile_link_text">
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 2.66699C1.72386 2.66699 1.5 2.89085 1.5 3.16699C1.5 3.44313 1.72386 3.66699 2 3.66699C2.5447 3.66699 3.01632 4.04531 3.13448 4.57704L3.42111 5.86685C3.42319 5.89817 3.42824 5.92948 3.43633 5.96038L3.47293 6.10007L3.51191 6.27546C3.51957 6.30993 3.53062 6.34278 3.54463 6.37373L4.66141 10.6362C5.02632 12.029 6.28488 13.0003 7.72468 13.0003H11.1671C12.916 13.0003 14.3337 11.5826 14.3337 9.83366V8.02744C14.3337 7.65153 14.2795 7.19797 14.0245 6.7978C13.4505 5.89739 12.4493 5.33366 11.3542 5.33366H4.32701L4.11067 4.36011C3.89083 3.37084 3.0134 2.66699 2 2.66699Z"
                            :fill="determineFill('/cart')" />
                        <path
                            d="M12 14.5003C12 14.8685 11.7015 15.167 11.3333 15.167C10.9651 15.167 10.6667 14.8685 10.6667 14.5003C10.6667 14.1321 10.9651 13.8337 11.3333 13.8337C11.7015 13.8337 12 14.1321 12 14.5003Z"
                            :fill="determineFill('/cart')" />
                        <path
                            d="M6 15.167C6.36819 15.167 6.66667 14.8685 6.66667 14.5003C6.66667 14.1321 6.36819 13.8337 6 13.8337C5.63181 13.8337 5.33333 14.1321 5.33333 14.5003C5.33333 14.8685 5.63181 15.167 6 15.167Z"
                            :fill="determineFill('/cart')" />
                    </svg>
                </div>
                <a class="default-link-text">Корзина</a>
            </div>
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.833984L3.33268 3.50065L0.666016 6.16732" stroke="var(--primary-text)"
                    stroke-linecap="round" />
            </svg>
        </div>
        <div @click="showMobilOrders()" :class="['profile_link', { 'active': isActive('/orders') }]"
            class="profile_link">
            <div class="profile_link_text">
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.90515 3.66371L6.70495 3.21937C7.51035 2.77193 8.48966 2.77193 9.29505 3.21937L12.6284 5.07122C12.75 5.13879 12.865 5.21508 12.9728 5.29905L10.6831 6.65375L5.90515 3.66371Z"
                            :fill="determineFill('/orders')" />
                        <path
                            d="M5.02404 4.15321L3.37162 5.07122C3.20458 5.16402 3.05007 5.27324 2.90963 5.39624C2.91035 5.39665 2.91108 5.39705 2.9118 5.39746L6.89452 7.6378C7.57298 8.01945 8.40404 8.0078 9.07154 7.60729L9.07418 7.60571L9.71417 7.22705L5.23476 4.42385C5.1307 4.35873 5.05887 4.26159 5.02404 4.15321Z"
                            :fill="determineFill('/orders')" />
                        <path
                            d="M2.30003 6.17341C2.10618 6.54668 2 6.9668 2 7.40231V10.2642C2 11.2326 2.52505 12.1249 3.37162 12.5952L6.70495 14.4471C6.958 14.5877 7.22822 14.6841 7.50482 14.7363C7.50164 14.7136 7.5 14.6903 7.5 14.6667V8.88299C7.12074 8.82776 6.74901 8.70331 6.40425 8.50937L2.42153 6.26903C2.37509 6.24291 2.33444 6.21048 2.30003 6.17341Z"
                            :fill="determineFill('/orders')" />
                        <path
                            d="M8.5 8.86917V14.6667C8.5 14.6903 8.49836 14.7136 8.49518 14.7363C8.77178 14.6841 9.042 14.5877 9.29505 14.4471L12.6284 12.5952C13.475 12.1249 14 11.2326 14 10.2642V7.40231C14 6.92308 13.8714 6.46249 13.639 6.06245C13.6229 6.07484 13.6059 6.08639 13.5879 6.09699L9.58605 8.46478L9.58466 8.46561C9.24549 8.66888 8.87747 8.80349 8.5 8.86917Z"
                            :fill="determineFill('/orders')" />
                    </svg>
                </div>
                <a class="default-link-text">Заказы</a>
            </div>
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.833984L3.33268 3.50065L0.666016 6.16732" stroke="var(--primary-text)"
                    stroke-linecap="round" />
            </svg>
        </div>
        <div @click="showMobileBalance()" :class="['profile_link', { 'active': isActive('/balance') }]"
            class="profile_link">
            <div class="profile_link_text">
                <div>
                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 1.87366C0 1.8432 0.0156404 1.73462 0.222892 1.55962C0.427414 1.38693 0.75827 1.20488 1.21863 1.04047C2.13423 0.713467 3.43783 0.5 4.90591 0.5C6.374 0.5 7.6776 0.713467 8.59319 1.04047C9.05356 1.20488 9.38441 1.38693 9.58893 1.55962C9.79619 1.73462 9.81183 1.8432 9.81183 1.87366C9.81183 1.90411 9.79619 2.01269 9.58893 2.18769C9.38441 2.36039 9.05356 2.54243 8.59319 2.70685C7.6776 3.03384 6.374 3.24731 4.90591 3.24731C3.43783 3.24731 2.13423 3.03384 1.21863 2.70685C0.75827 2.54243 0.427414 2.36039 0.222892 2.18769C0.0156404 2.01269 0 1.90411 0 1.87366Z"
                            :fill="determineFill('/balance')" />
                        <path
                            d="M8.9892 3.81567C9.1503 3.75814 9.30592 3.69604 9.45436 3.62922C9.61796 3.55558 9.81183 3.67113 9.81183 3.85053V5.01344C9.81183 5.04389 9.79619 5.15248 9.58893 5.32748C9.38441 5.50017 9.05356 5.68222 8.59319 5.84663C7.6776 6.17363 6.374 6.3871 4.90591 6.3871C3.43783 6.3871 2.13423 6.17363 1.21863 5.84663C0.75827 5.68222 0.427414 5.50017 0.222892 5.32748C0.0156404 5.15248 0 5.04389 0 5.01344V3.85053C0 3.67113 0.193869 3.55558 0.357467 3.62922C0.505907 3.69604 0.661528 3.75814 0.822624 3.81567C1.89569 4.19891 3.3394 4.42473 4.90591 4.42473C6.47242 4.42473 7.91614 4.19891 8.9892 3.81567Z"
                            :fill="determineFill('/balance')" />
                        <path
                            d="M8.9892 6.95546C9.1503 6.89792 9.30592 6.83583 9.45436 6.76901C9.61796 6.69537 9.81183 6.81091 9.81183 6.99032V8.15323C9.81183 8.18368 9.79619 8.29226 9.58893 8.46726C9.38441 8.63996 9.05356 8.822 8.59319 8.98642C7.6776 9.31342 6.374 9.52688 4.90591 9.52688C3.43783 9.52688 2.13423 9.31342 1.21863 8.98642C0.75827 8.822 0.427414 8.63996 0.222892 8.46726C0.0156404 8.29226 0 8.18368 0 8.15323V6.99032C0 6.81091 0.193869 6.69537 0.357467 6.76901C0.505907 6.83583 0.661528 6.89792 0.822624 6.95546C1.89569 7.33869 3.3394 7.56452 4.90591 7.56452C6.47242 7.56452 7.91614 7.33869 8.9892 6.95546Z"
                            :fill="determineFill('/balance')" />
                        <path
                            d="M8.9892 10.0952C9.1503 10.0377 9.30592 9.97561 9.45436 9.90879C9.61796 9.83515 9.81183 9.9507 9.81183 10.1301V11.293C9.81183 11.3235 9.79619 11.432 9.58893 11.607C9.38441 11.7797 9.05356 11.9618 8.59319 12.1262C7.6776 12.4532 6.374 12.6667 4.90591 12.6667C3.43783 12.6667 2.13423 12.4532 1.21863 12.1262C0.75827 11.9618 0.427414 11.7797 0.222892 11.607C0.0156404 11.432 0 11.3235 0 11.293V10.1301C0 9.9507 0.193869 9.83515 0.357467 9.90879C0.505907 9.97561 0.661528 10.0377 0.822624 10.0952C1.89569 10.4785 3.3394 10.7043 4.90591 10.7043C6.47242 10.7043 7.91614 10.4785 8.9892 10.0952Z"
                            :fill="determineFill('/balance')" />
                    </svg>
                </div>
                <a class="default-link-text">Баланс</a>

            </div>
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.833984L3.33268 3.50065L0.666016 6.16732" stroke="var(--primary-text)"
                    stroke-linecap="round" />
            </svg>
        </div>
        <div @click="showMobileLocations()" :class="['profile_link', { 'active': isActive('/locations') }]"
            class="profile_link">
            <div class="profile_link_text">
                <div>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.66667 7.83301C9.66667 8.75348 8.92048 9.49967 8 9.49967C7.07953 9.49967 6.33333 8.75348 6.33333 7.83301C6.33333 6.91253 7.07953 6.16634 8 6.16634C8.92048 6.16634 9.66667 6.91253 9.66667 7.83301Z"
                            :fill="determineFill('/locations')" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.96542 14.701C11.553 13.2936 13.703 10.7859 14 7.83301C14 4.5193 11.3137 1.83301 8 1.83301C4.68629 1.83301 2 4.5193 2 7.83301C2.2994 10.8094 4.22812 13.3333 7.0189 14.7342C7.63384 15.0429 8.36097 15.0297 8.96542 14.701ZM10.6667 7.83301C10.6667 9.30577 9.47276 10.4997 8 10.4997C6.52724 10.4997 5.33333 9.30577 5.33333 7.83301C5.33333 6.36025 6.52724 5.16634 8 5.16634C9.47276 5.16634 10.6667 6.36025 10.6667 7.83301Z"
                            :fill="determineFill('/locations')" />
                    </svg>
                </div>
                <a class="default-link-text">Адреса</a>
            </div>
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.833984L3.33268 3.50065L0.666016 6.16732" stroke="var(--primary-text)"
                    stroke-linecap="round" />
            </svg>

        </div>
        <div class="logout">
            <a href="" class="default-link-text default-violet">Выйти</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileLinks',
    methods: {
        isActive(route) {
            if (window.innerWidth <= 1050) {
                return false;
            }
            return this.$route.path === route && window.innerWidth > 1050;
        },
        determineFill(route) {
            return this.isActive(route) ? 'var(--primary-red)' : 'var(--primary-text)';
        },
        showMobileProfile() {
            if (window.innerWidth <= 1050) {
                if (document.getElementById('profile')) {
                    document.getElementById('profile').classList.toggle('active');
                } else {
                    localStorage.setItem('toggleProfileClass', 'true');
                    window.location.href = '/profile';
                }


            } else {
                window.location.href = '/profile';
            }
        },
        showMobileCart() {
            if (window.innerWidth <= 1050) {
                if (document.getElementById('cart')) {
                    document.getElementById('cart').classList.toggle('active');
                } else {
                    localStorage.setItem('toggleCartClass', 'true');
                    window.location.href = '/cart';
                }


            } else {
                window.location.href = '/cart';
            }
        },
        showMobilOrders() {
            if (window.innerWidth <= 1050) {
                if (document.getElementById('orders')) {
                    document.getElementById('orders').classList.toggle('active');
                } else {
                    localStorage.setItem('toggleOrdersClass', 'true');
                    window.location.href = '/orders';
                }


            } else {
                window.location.href = '/orders';
            }
        },
        showMobileBalance() {
            if (window.innerWidth <= 1050) {
                if (document.getElementById('balance')) {
                    document.getElementById('balance').classList.toggle('active');
                } else {
                    localStorage.setItem('toggleBalanceClass', 'true');
                    window.location.href = '/balance';
                }


            } else {
                window.location.href = '/balance';
            }
        },
        showMobileLocations() {
            if (window.innerWidth <= 1050) {
                if (document.getElementById('locations')) {
                    document.getElementById('locations').classList.toggle('active');
                } else {
                    localStorage.setItem('toggleLocationsClass', 'true');
                    window.location.href = '/locations';
                }


            } else {
                window.location.href = '/locations';
            }
        }

    }

}
</script>

<style lang="css" scoped>
.profile_link.active a {
    color: var(--primary-red);
    stroke: var(--primary-red);
}

.profile_link.active svg,
.profile_link.active svg path {
    stroke: var(--primary-red) !important;
}

.profile_links {
    padding: 20px;
    background: var(--primary-gray);
}

.profile_link,
.logout {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid var(--lighter-gray);
}

.logout {
    border: none;
}

.profile_link_text {
    display: flex;
    align-items: center;
    gap: 10px;


}



.profile_link_text div {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>