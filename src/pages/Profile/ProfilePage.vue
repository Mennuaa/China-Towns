<template>
    <div id="profile" :class="['profile', { 'profile_mobile': !isLargeScreen }]">

        <div class="container">
            <div class="profile_content">

                <div class="profile_left">
                    <ProfileLinksVue />
                    <div class="faq">
                        <div class="faq_button default-violet-bg">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666ZM7.31256 9.26779C7.31256 9.31342 7.34955 9.35041 7.39518 9.35041H8.26331C8.30893 9.35041 8.34592 9.31342 8.34592 9.26779C8.34799 9.04324 8.37385 8.8547 8.4235 8.70217C8.47522 8.54753 8.55384 8.41301 8.65934 8.29862C8.76692 8.18422 8.9045 8.07406 9.07207 7.96814C9.2624 7.85163 9.42686 7.71923 9.56547 7.57094C9.70408 7.42265 9.81063 7.25318 9.8851 7.06252C9.96165 6.87186 9.99992 6.65578 9.99992 6.41428C9.99992 6.05627 9.9151 5.74698 9.74546 5.48641C9.57789 5.22373 9.34308 5.02142 9.04104 4.87949C8.74106 4.73755 8.39351 4.66659 7.99837 4.66659C7.63633 4.66659 7.30532 4.73437 7.00535 4.86995C6.70744 5.00553 6.46746 5.2089 6.28541 5.48006C6.19752 5.61247 6.12986 5.76054 6.08242 5.92427C5.9949 6.22633 6.25923 6.49054 6.57371 6.49054H6.5858C6.87661 6.49054 7.08782 6.24113 7.2474 5.99801C7.33429 5.86667 7.4429 5.76922 7.57323 5.70567C7.70563 5.64 7.84528 5.60716 7.99216 5.60716C8.15146 5.60716 8.29524 5.64106 8.4235 5.70885C8.55384 5.77664 8.65728 5.87197 8.73382 5.99483C8.81037 6.1177 8.84864 6.26281 8.84864 6.43017C8.84864 6.57846 8.81968 6.71298 8.76175 6.83373C8.70382 6.95236 8.62418 7.0604 8.5228 7.15785C8.4235 7.25318 8.31075 7.34109 8.18456 7.42159C8.00044 7.5381 7.84424 7.66627 7.71598 7.80608C7.58771 7.94378 7.48841 8.12596 7.41807 8.35264C7.3498 8.57931 7.31463 8.88436 7.31256 9.26779ZM7.37152 11.1299C7.506 11.2655 7.66633 11.3333 7.85252 11.3333C7.97665 11.3333 8.08939 11.3025 8.19076 11.2411C8.2942 11.1775 8.37696 11.0928 8.43902 10.9869C8.50315 10.881 8.53522 10.7634 8.53522 10.6342C8.53522 10.4435 8.46695 10.2804 8.33041 10.1448C8.19594 10.0092 8.03664 9.94145 7.85252 9.94145C7.66633 9.94145 7.506 10.0092 7.37152 10.1448C7.23705 10.2804 7.16982 10.4435 7.16982 10.6342C7.16982 10.8291 7.23705 10.9943 7.37152 11.1299Z"
                                    fill="white" />
                            </svg>
                            <span>Помощь</span>
                        </div>
                    </div>
                </div>
                <div class="profile_right">
                    <div @click="goBack()" class="profile_mobile_go_back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33252 10.6672L6.66585 8.00057L9.33252 5.3339" stroke="var(--primary-text)"
                                stroke-linecap="round" />
                        </svg>
                        <span>Назад</span>
                    </div>
                    <div class="profile_info">
                        <div class="profile_info_top">
                            <div class="profile_info_top_icon">
                                <div @click="showPhotoPopup()" class="profile-icon">
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.667 13.8333C22.0815 13.8333 23.438 14.3952 24.4382 15.3954C25.4384 16.3956 26.0003 17.7522 26.0003 19.1667C26.0003 20.5812 25.4384 21.9377 24.4382 22.9379C23.438 23.9381 22.0815 24.5 20.667 24.5C17.811 24.5 15.3337 22.1133 15.3337 19.1667H12.667C12.6665 20.4606 12.1956 21.7102 11.3421 22.6827C10.4885 23.6552 9.31059 24.2842 8.02766 24.4526C6.74474 24.621 5.44436 24.3172 4.36879 23.5979C3.29323 22.8786 2.51584 21.7928 2.18148 20.5428C1.84711 19.2928 1.97856 17.9639 2.55134 16.8037C3.12413 15.6434 4.09918 14.731 5.29482 14.2363C6.49047 13.7417 7.82516 13.6986 9.05023 14.1151C10.2753 14.5315 11.3072 15.3791 11.9537 16.5H16.047C16.515 15.6889 17.1884 15.0153 17.9994 14.5472C18.8105 14.0791 19.7305 13.8329 20.667 13.8333ZM0.666992 12.5V9.83333H3.33366V5.83333C3.33366 4.41885 3.89556 3.06229 4.89576 2.0621C5.89595 1.0619 7.2525 0.5 8.66699 0.5H19.3337C20.7481 0.5 22.1047 1.0619 23.1049 2.0621C24.1051 3.06229 24.667 4.41885 24.667 5.83333V9.83333H27.3337V12.5H0.666992Z"
                                            fill="#B5B5B5" />
                                    </svg>

                                    <div class="plus_profile">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00033 8.5L14 8.5" stroke="white" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M8 2.50033L8 14.5" stroke="white" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                    </div>

                                </div>
                            </div>
                            <div class="profile_info_top_name">
                                <div class="profile_info_top_name_nameid">
                                    <h4>Виноградова Анастасия Михайловна</h4>
                                    <p class="default-p">
                                        Ваш ID
                                        <span>#35122</span>
                                    </p>
                                </div>
                                <div class="profile_info_top_name_pas">
                                    <p class="default-p"> Код расширения <span> hCssPj1mZw</span>  для активации <a
                                            href="">waix extension</a> в браузере</p>
                                </div>
                            </div>

                        </div>
                        <div class="profile_info_top_name_pas profile_info_top_name_pas_mobile">
                            <p class="default-p"> Код расширения <span> hCssPj1mZw</span>  для активации <a href="">waix
                                    extension</a> в браузере</p>
                        </div>
                        <div class="profile_info_inputs">
                            <input type="text" placeholder="ФИО" name="" id="">
                            <input type="text" placeholder="Отображаемое имя / Никнейм" name="" id="">
                            <input type="text" placeholder="Город" name="" id="">
                            <input type="text" placeholder="Адрес (улица, дом, квартира, индекс)" name="" id="">
                            <input type="email" placeholder="E-mail" name="" id="">
                            <input type="text" placeholder="Телефон" name="" id="">
                        </div>
                        <div class="profile_info_bottom">
                            <div class="telegram_profile">
                                <div class="telegram_profile_button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.38172 10.914C8.74289 8.6371 12.3266 7.16545 14.1327 6.4435C19.2359 4.38874 20.2966 4.02777 20.9847 4C21.128 4 21.4721 4.02777 21.7014 4.19437C21.8734 4.33321 21.9308 4.52757 21.9595 4.66641C21.9881 4.80525 22.0168 5.11068 21.9881 5.36059C21.7014 8.16506 20.526 15.0235 19.8953 18.1612C19.6372 19.494 19.1212 19.9383 18.6338 19.9938C17.573 20.0771 16.7416 19.2997 15.7095 18.661C14.1041 17.6336 13.1866 16.995 11.6098 15.9954C9.80365 14.8292 10.9791 14.1905 12.0112 13.1631C12.2692 12.8855 16.9997 8.74817 17.0857 8.35943C17.0857 8.3039 17.1143 8.1373 16.9997 8.05399C16.885 7.97069 16.7416 7.99846 16.627 8.02623C16.4549 8.05399 13.8747 9.72002 8.85756 12.9965C8.11216 13.4963 7.45277 13.7185 6.85071 13.7185C6.19132 13.7185 4.92986 13.3575 3.98378 13.0521C2.837 12.6911 1.91958 12.4967 2.00559 11.8859C2.06293 11.5804 2.52164 11.2472 3.38172 10.914Z"
                                            fill="white" />
                                    </svg>
                                    <span>Привязать Telegram Бота</span>
                                </div>
                                <span class="default-p telegram_profile_text telegram_profile_text_mobile">Привяжите
                                    Telegram Бота для получения <br>
                                    уведомлений</span>
                                <a @click="changePassPopup()" class="default-link-text default-violet">Сменить
                                    пароль</a>
                            </div>
                            <span class="default-p telegram_profile_text">Привяжите Telegram Бота для получения <br>
                                уведомлений</span>

                        </div>
                    </div>

                    <div class="profile_soxraneno">
                        <h3 class="default-h3">Сохраненные данные</h3>

                        <div class="dannie">
                            <div class="danni">
                                <div class="danni_top">
                                    <div class="redaktiorvat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.19526 10.4714L9 3.66668C9.92047 2.7462 11.4129 2.7462 12.3333 3.66667C13.2538 4.58715 13.2538 6.07953 12.3333 7.00001L5.5286 13.8047C5.40357 13.9298 5.234 14 5.05719 14H2.66667C2.29848 14 2 13.7015 2 13.3333V10.9428C2 10.766 2.07024 10.5964 2.19526 10.4714Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a @click="PopupChange()" class="default-violet">Редактировать</a>
                                    </div>
                                    <div class="trash">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.26499 12.0869L4.02671 6.60642C4.01177 6.2627 4.26067 5.96457 4.60225 5.92351C5.42096 5.8251 6.90855 5.66667 8.00034 5.66667C9.0805 5.66667 10.5481 5.82174 11.372 5.92035C11.7247 5.96255 11.9762 6.27772 11.9454 6.63154L11.4635 12.1733C11.3737 13.2068 10.5085 14 9.47106 14H6.2631C5.19232 14 4.3115 13.1566 4.26499 12.0869ZM5.50034 12C5.50034 11.7239 5.7242 11.5 6.00034 11.5H10.0003C10.2765 11.5 10.5003 11.7239 10.5003 12C10.5003 12.2761 10.2765 12.5 10.0003 12.5H6.00034C5.7242 12.5 5.50034 12.2761 5.50034 12Z"
                                                fill="#7589F4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.47637 3.67098C4.5156 3.65483 4.55754 3.64345 4.60159 3.63763L4.62028 3.63517C5.05439 3.57786 5.42412 3.29149 5.58816 2.8855C5.92647 2.04817 6.73918 1.5 7.64227 1.5H8.5404C9.45562 1.5 10.2792 2.05553 10.6221 2.9041L10.6824 3.05333C10.8076 3.36327 11.0853 3.58558 11.4151 3.64C11.4534 3.64632 11.4899 3.65682 11.5243 3.67097C12.0486 3.71193 12.5087 3.75266 12.84 3.78339C13.0095 3.7991 13.1453 3.81221 13.239 3.8214L13.3467 3.8321L13.3848 3.83595C13.6595 3.86415 13.8593 4.1097 13.8311 4.3844C13.8029 4.6591 13.5569 4.85888 13.2822 4.83067L13.2467 4.82708L13.1413 4.81662C13.0492 4.80758 12.9152 4.79465 12.7476 4.77911C12.4126 4.74804 11.9441 4.7066 11.4109 4.66516C10.3408 4.58202 9.02344 4.5 8.00036 4.5C6.97727 4.5 5.65994 4.58202 4.58985 4.66516C4.05663 4.7066 3.58815 4.74804 3.25306 4.77911C3.08556 4.79465 2.95149 4.80758 2.85944 4.81662L2.754 4.82708L2.71809 4.83072C2.44339 4.85892 2.19784 4.6591 2.16964 4.3844C2.14143 4.1097 2.34198 3.86408 2.61667 3.83587L2.65398 3.8321L2.76175 3.8214C2.8554 3.81221 2.99126 3.7991 3.16072 3.78339C3.492 3.75266 3.95205 3.71194 4.47637 3.67098ZM7.64227 2.5C7.14681 2.5 6.70094 2.80074 6.51534 3.26012C6.47504 3.35984 6.42794 3.45561 6.37466 3.54693C6.94085 3.51858 7.50194 3.5 8.00036 3.5C8.55349 3.5 9.18382 3.52289 9.81264 3.5566C9.79205 3.51461 9.77288 3.4717 9.7552 3.42794L9.69491 3.27872C9.50476 2.8081 9.04798 2.5 8.5404 2.5H7.64227Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a class="default-violet">Удалить</a>

                                    </div>
                                </div>
                                <div class="danni_info">
                                    <div>
                                        <span>ФИО</span>
                                        <p>Репнинская Наталья Владимировна</p>
                                    </div>
                                    <div>
                                        <span>Телефон</span>
                                        <p>+7 (911) 765-89-89</p>
                                    </div>
                                    <div>
                                        <span>Город</span>
                                        <p>Санкт-Петербург</p>
                                    </div>
                                    <div>
                                        <span>Адрес</span>
                                        <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                                    </div>
                                </div>
                            </div>
                            <div class="danni">
                                <div class="danni_top">
                                    <div class="redaktiorvat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.19526 10.4714L9 3.66668C9.92047 2.7462 11.4129 2.7462 12.3333 3.66667C13.2538 4.58715 13.2538 6.07953 12.3333 7.00001L5.5286 13.8047C5.40357 13.9298 5.234 14 5.05719 14H2.66667C2.29848 14 2 13.7015 2 13.3333V10.9428C2 10.766 2.07024 10.5964 2.19526 10.4714Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a @click="PopupChange()" class="default-violet">Редактировать</a>
                                    </div>
                                    <div class="trash">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.26499 12.0869L4.02671 6.60642C4.01177 6.2627 4.26067 5.96457 4.60225 5.92351C5.42096 5.8251 6.90855 5.66667 8.00034 5.66667C9.0805 5.66667 10.5481 5.82174 11.372 5.92035C11.7247 5.96255 11.9762 6.27772 11.9454 6.63154L11.4635 12.1733C11.3737 13.2068 10.5085 14 9.47106 14H6.2631C5.19232 14 4.3115 13.1566 4.26499 12.0869ZM5.50034 12C5.50034 11.7239 5.7242 11.5 6.00034 11.5H10.0003C10.2765 11.5 10.5003 11.7239 10.5003 12C10.5003 12.2761 10.2765 12.5 10.0003 12.5H6.00034C5.7242 12.5 5.50034 12.2761 5.50034 12Z"
                                                fill="#7589F4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.47637 3.67098C4.5156 3.65483 4.55754 3.64345 4.60159 3.63763L4.62028 3.63517C5.05439 3.57786 5.42412 3.29149 5.58816 2.8855C5.92647 2.04817 6.73918 1.5 7.64227 1.5H8.5404C9.45562 1.5 10.2792 2.05553 10.6221 2.9041L10.6824 3.05333C10.8076 3.36327 11.0853 3.58558 11.4151 3.64C11.4534 3.64632 11.4899 3.65682 11.5243 3.67097C12.0486 3.71193 12.5087 3.75266 12.84 3.78339C13.0095 3.7991 13.1453 3.81221 13.239 3.8214L13.3467 3.8321L13.3848 3.83595C13.6595 3.86415 13.8593 4.1097 13.8311 4.3844C13.8029 4.6591 13.5569 4.85888 13.2822 4.83067L13.2467 4.82708L13.1413 4.81662C13.0492 4.80758 12.9152 4.79465 12.7476 4.77911C12.4126 4.74804 11.9441 4.7066 11.4109 4.66516C10.3408 4.58202 9.02344 4.5 8.00036 4.5C6.97727 4.5 5.65994 4.58202 4.58985 4.66516C4.05663 4.7066 3.58815 4.74804 3.25306 4.77911C3.08556 4.79465 2.95149 4.80758 2.85944 4.81662L2.754 4.82708L2.71809 4.83072C2.44339 4.85892 2.19784 4.6591 2.16964 4.3844C2.14143 4.1097 2.34198 3.86408 2.61667 3.83587L2.65398 3.8321L2.76175 3.8214C2.8554 3.81221 2.99126 3.7991 3.16072 3.78339C3.492 3.75266 3.95205 3.71194 4.47637 3.67098ZM7.64227 2.5C7.14681 2.5 6.70094 2.80074 6.51534 3.26012C6.47504 3.35984 6.42794 3.45561 6.37466 3.54693C6.94085 3.51858 7.50194 3.5 8.00036 3.5C8.55349 3.5 9.18382 3.52289 9.81264 3.5566C9.79205 3.51461 9.77288 3.4717 9.7552 3.42794L9.69491 3.27872C9.50476 2.8081 9.04798 2.5 8.5404 2.5H7.64227Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a class="default-violet">Удалить</a>

                                    </div>
                                </div>
                                <div class="danni_info">
                                    <div>
                                        <span>ФИО</span>
                                        <p>Репнинская Наталья Владимировна</p>
                                    </div>
                                    <div>
                                        <span>Телефон</span>
                                        <p>+7 (911) 765-89-89</p>
                                    </div>
                                    <div>
                                        <span>Город</span>
                                        <p>Санкт-Петербург</p>
                                    </div>
                                    <div>
                                        <span>Адрес</span>
                                        <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                                    </div>
                                </div>
                            </div>
                            <div class="danni">
                                <div class="danni_top">
                                    <div class="redaktiorvat">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.19526 10.4714L9 3.66668C9.92047 2.7462 11.4129 2.7462 12.3333 3.66667C13.2538 4.58715 13.2538 6.07953 12.3333 7.00001L5.5286 13.8047C5.40357 13.9298 5.234 14 5.05719 14H2.66667C2.29848 14 2 13.7015 2 13.3333V10.9428C2 10.766 2.07024 10.5964 2.19526 10.4714Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a @click="PopupChange()" class="default-violet">Редактировать</a>
                                    </div>
                                    <div class="trash">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.26499 12.0869L4.02671 6.60642C4.01177 6.2627 4.26067 5.96457 4.60225 5.92351C5.42096 5.8251 6.90855 5.66667 8.00034 5.66667C9.0805 5.66667 10.5481 5.82174 11.372 5.92035C11.7247 5.96255 11.9762 6.27772 11.9454 6.63154L11.4635 12.1733C11.3737 13.2068 10.5085 14 9.47106 14H6.2631C5.19232 14 4.3115 13.1566 4.26499 12.0869ZM5.50034 12C5.50034 11.7239 5.7242 11.5 6.00034 11.5H10.0003C10.2765 11.5 10.5003 11.7239 10.5003 12C10.5003 12.2761 10.2765 12.5 10.0003 12.5H6.00034C5.7242 12.5 5.50034 12.2761 5.50034 12Z"
                                                fill="#7589F4" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4.47637 3.67098C4.5156 3.65483 4.55754 3.64345 4.60159 3.63763L4.62028 3.63517C5.05439 3.57786 5.42412 3.29149 5.58816 2.8855C5.92647 2.04817 6.73918 1.5 7.64227 1.5H8.5404C9.45562 1.5 10.2792 2.05553 10.6221 2.9041L10.6824 3.05333C10.8076 3.36327 11.0853 3.58558 11.4151 3.64C11.4534 3.64632 11.4899 3.65682 11.5243 3.67097C12.0486 3.71193 12.5087 3.75266 12.84 3.78339C13.0095 3.7991 13.1453 3.81221 13.239 3.8214L13.3467 3.8321L13.3848 3.83595C13.6595 3.86415 13.8593 4.1097 13.8311 4.3844C13.8029 4.6591 13.5569 4.85888 13.2822 4.83067L13.2467 4.82708L13.1413 4.81662C13.0492 4.80758 12.9152 4.79465 12.7476 4.77911C12.4126 4.74804 11.9441 4.7066 11.4109 4.66516C10.3408 4.58202 9.02344 4.5 8.00036 4.5C6.97727 4.5 5.65994 4.58202 4.58985 4.66516C4.05663 4.7066 3.58815 4.74804 3.25306 4.77911C3.08556 4.79465 2.95149 4.80758 2.85944 4.81662L2.754 4.82708L2.71809 4.83072C2.44339 4.85892 2.19784 4.6591 2.16964 4.3844C2.14143 4.1097 2.34198 3.86408 2.61667 3.83587L2.65398 3.8321L2.76175 3.8214C2.8554 3.81221 2.99126 3.7991 3.16072 3.78339C3.492 3.75266 3.95205 3.71194 4.47637 3.67098ZM7.64227 2.5C7.14681 2.5 6.70094 2.80074 6.51534 3.26012C6.47504 3.35984 6.42794 3.45561 6.37466 3.54693C6.94085 3.51858 7.50194 3.5 8.00036 3.5C8.55349 3.5 9.18382 3.52289 9.81264 3.5566C9.79205 3.51461 9.77288 3.4717 9.7552 3.42794L9.69491 3.27872C9.50476 2.8081 9.04798 2.5 8.5404 2.5H7.64227Z"
                                                fill="#7589F4" />
                                        </svg>
                                        <a class="default-violet">Удалить</a>

                                    </div>
                                </div>
                                <div class="danni_info">
                                    <div>
                                        <span>ФИО</span>
                                        <p>Репнинская Наталья Владимировна</p>
                                    </div>
                                    <div>
                                        <span>Телефон</span>
                                        <p>+7 (911) 765-89-89</p>
                                    </div>
                                    <div>
                                        <span>Город</span>
                                        <p>Санкт-Петербург</p>
                                    </div>
                                    <div>
                                        <span>Адрес</span>
                                        <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div @click="PopupAdd()" class="add_info">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00033 8L14 8" stroke="#EF0000" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M8 2.00033L8 14" stroke="#EF0000" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p class="default-p">Добавить новые данные</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showPopupChange" class="popup-overlay popup-change-pass">
        <div class="popup_content">
            <div class="popup_close" @click="PopupChange()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <h1 class="default-h1">Редактировать данные</h1>
            <div class="profile_info_inputs">
                <input type="text" placeholder="ФИО" name="" id="">
                <input type="text" placeholder="Отображаемое имя / Никнейм" name="" id="">
                <input type="text" placeholder="Город" name="" id="">
                <input type="text" placeholder="Адрес (улица, дом, квартира, индекс)" name="" id="">
                <MainButton style="margin-top: 20px; width: 100%;" @click="PopupChange()" text="Сохранить изменения">
                </MainButton>

            </div>
        </div>
    </div>
    <div v-if="showPopupAdd" class="popup-overlay popup-change-pass">
        <div class="popup_content">
            <div class="popup_close" @click="PopupAdd()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <h1 class="default-h1">Добавить данные</h1>
            <div class="profile_info_inputs">
                <input type="text" placeholder="ФИО" name="" id="">
                <input type="text" placeholder="Отображаемое имя / Никнейм" name="" id="">
                <input type="text" placeholder="Город" name="" id="">
                <input type="text" placeholder="Адрес (улица, дом, квартира, индекс)" name="" id="">

                <MainButton style="margin-top: 20px; width: 100%;" @click="PopupAdd()" text="Сохранить изменения">
                </MainButton>
            </div>
        </div>
    </div>

    <div v-if="changePass" class="popup-overlay popup-change-pass">
        <div class="popup_content">
            <div class="popup_close" @click="changePassPopup()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <h1 class="default-h1">Смена пароля</h1>
            <div class="profile_change_pass_popup">
                <div class="profile_info_inputs">
                    <input type="text" placeholder="Введите новый пароль" name="" id="">
                    <input type="text" placeholder="Повторите пароль" name="" id="">

                    <MainButton @click="changePassPopup()" text="Изменить пароль"></MainButton>
                </div>
            </div>
        </div>
    </div>

    <div v-if="photoPopup" class="popup-overlay profile_photo_popup">
        <div class="popup_content">
            <div class="popup_close" @click="showPhotoPopup()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
                        stroke-linecap="round" />
                </svg>

            </div>
            <h1 class="default-h1">Фото профиля</h1>
            <img src="../../../public/images/profile.png" alt="">
            <div class="profile_photo_popup_buttons">
                <div @click="triggerFileInput" class="profile_photo_popup_button">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.33287 5.41168L5.37217 9.37238C4.8415 9.90305 4.8415 10.7635 5.37217 11.2941C5.90285 11.8248 6.76327 11.8248 7.29394 11.2941L12.2049 6.38314C13.1961 5.39192 13.196 3.7848 12.2045 2.79376C11.2134 1.80299 9.60681 1.80314 8.61581 2.7941L3.70484 7.70505C2.25333 9.15658 2.25333 11.5099 3.70484 12.9615C5.15635 14.413 7.50974 14.413 8.96127 12.9615L12.5894 9.33325"
                            stroke="#EF0000" stroke-width="1.25" stroke-linecap="round" />
                    </svg>
                    <span>Загрузить фото</span>

                </div>
                <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
                <a class="default-violet">Удалить</a>
            </div>

        </div>
    </div>
    <SuccessMessage v-if="message"  :text="message" />

</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('toggleProfileClass') === 'true') {
        var profileElement = document.getElementById('profile');
        if (profileElement) {
            profileElement.classList.toggle('active');
        }
        localStorage.removeItem('toggleProfileClass');
    }
});
import ProfileLinksVue from '@/components/ProfileLinks.vue'
import MainButton from '../../components/MainButton.vue';

import SuccessMessage from '@/components/SuccessMessage.vue';

export default {

    name: 'ProfilePage',
    components: {
        ProfileLinksVue,
        MainButton,
        SuccessMessage
    },
    data() {
        return {
            isLightMode: localStorage.getItem('isLightMode') ? localStorage.getItem('isLightMode') === 'true' : true,
            isLargeScreen: window.innerWidth > 1050,
            showProfileInfo: false,
            showPopupChange: false,
            showPopupAdd: false,
            changePass: false,
            photoPopup: false,
            message: ''

        }
    },
    methods: {
        goBack() {
            document.getElementById('profile') ? document.getElementById('profile').classList.toggle('active') : document.getElementById('profile').classList.toggle('active')
        },
        PopupChange() {
            this.showPopupChange = !this.showPopupChange
            if (window.innerWidth <= 1050) {
                document.getElementById('profile') ? document.getElementById('profile').classList.add('active') : document.getElementById('profile').classList.add('active')
            }
        },
        PopupAdd() {
            this.showPopupAdd = !this.showPopupAdd
            if (window.innerWidth <= 1050) {
                document.getElementById('profile') ? document.getElementById('profile').classList.add('active') : document.getElementById('profile').classList.add('active')
            }
        },
        changePassPopup() {
            this.changePass = !this.changePass
            if (window.innerWidth <= 1050) {
                document.getElementById('profile') ? document.getElementById('profile').classList.add('active') : document.getElementById('profile').classList.add('active')
            }
            if(this.changePass === false) {
                this.message = 'Пароль успешно изменен';
            setTimeout(() => {
                this.message = '';
            }, 5000);
            }
            
        
        // if (this.successMessage) {
        // this.successMessage.showToast('This is a toast message!');


    },
    showPhotoPopup() {
        this.photoPopup = !this.photoPopup
        if (window.innerWidth <= 1050) {
            document.getElementById('profile') ? document.getElementById('profile').classList.add('active') : document.getElementById('profile').classList.add('active')
        }
    },
    triggerFileInput() {
        this.$refs.fileInput.click();
    },
    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file);
        }

    }
}
}
</script>

<style src="./profile.css" lang="css" scoped></style>