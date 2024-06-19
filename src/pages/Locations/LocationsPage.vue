<template>
    <div :class="['locations', { 'locations_mobile': !isLargeScreen }]" id="locations">
        <div class="container">
            <div class="locations_content">
                <div class="locations_left">
                    <ProfileLinks />
                </div>
                <div class="locations_right">
                    <div @click="goBack()" class="profile_mobile_go_back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33252 10.6672L6.66585 8.00057L9.33252 5.3339" stroke="var(--primary-text)"
                                stroke-linecap="round" />
                        </svg>
                        <span>Назад</span>
                    </div>
                    <div class="locations_info">
                        <h3 class="default-h3">Адрес склада в ИУ</h3>
                        <div class="address">
                            <span>Адрес</span>
                            <p class="default-p">浙江省金华市义乌市后宅柳青路坤弘电商创业园1577号闵城仓库。</p>
                        </div>
                        <div class="receiver">
                            <span>Получатель</span>
                            <p class="default-p">18069943030</p>
                        </div>

                        <h3 class="default-h3">Адрес склада в Гуаньчжоу</h3>
                        <div>
                            <span>Город</span>
                            <p class="default-p">广东省</p>
                        </div>
                        <div>
                            <span>Получатель</span>
                            <p class="default-p">赵显峰</p>
                        </div>
                        <div>
                            <span>Телефон</span>
                            <p class="default-p">13847022309</p>
                        </div>
                        <div class="last_ps">
                            <p class="default-p">Данные адреса предназначены только для карго заказов.</p>
                            <p class="default-p">Принимаем только цельные посылки (Коробки) от 10 кг.
                                Запрещено отправлять
                                мелкие посылки (даже если в совокупности выйдет 10кг)</p>
                            <p class="default-p">Инструкция как делать и оформлять карго заказы  <a href="">тут</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileLinks from '@/components/ProfileLinks.vue';
export default {

    name: 'LocationsPage',
    components: {
        ProfileLinks
    },
    data() {
        return {
            isLargeScreen: window.innerWidth > 1050
        }
    },
    methods: {
        goBack() {
            document.getElementById('locations') ? document.getElementById('locations').classList.toggle('active') : document.getElementById('locations').classList.toggle('active')
        },
    }
}
</script>

<style src="./locations.css" lang="css"></style>