<template>
    <div :class="['balance', { 'balance_mobile': !isLargeScreen }]" id="balance">
        <div class="container">
            <div class="balance_content">
                <div class="balance_left">
                    <ProfileLinks />
                </div>
                <div class="balance_right">
                    <div @click="goBack()" class="profile_mobile_go_back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33252 10.6672L6.66585 8.00057L9.33252 5.3339" stroke="var(--primary-text)"
                                stroke-linecap="round" />
                        </svg>
                        <span>Назад</span>
                    </div>
                    <h2 class="default-h2">История операций</h2>
                    <div class="balance_right_buttons">
                        <div :class="{ active: activeTab === 'data', inactive: activeTab !== 'data' }"
                            @click="switchTab('data')" class="balance_button">
                            Сортировать по дате
                        </div>
                        <div :class="{ active: activeTab === 'zakaz', inactive: activeTab !== 'zakaz' }"
                            @click="switchTab('zakaz')" class="balance_button">
                            Группировать по заказам
                        </div>
                    </div>
                    <div class="balance_operation">
                        <div class="balance_operation_top">
                            <span>09.08.2023</span>
                            <div class="balance_operation_top_last">
                                <p class="default-p">Остаток </p>
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="balance_operation">
                        <div class="balance_operation_top">
                            <span>09.08.2023</span>
                            <div class="balance_operation_top_last">
                                <p class="default-p">Остаток </p>
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="balance_operation">
                        <div class="balance_operation_top">
                            <span>09.08.2023</span>
                            <div class="balance_operation_top_last">
                                <p class="default-p">Остаток </p>
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                        <div class="balance_operation_info">
                            <div class="balance_op_info_left">
                                <span>1365</span>
                                <div class="balance_operation_info_center">
                                    <span>18:29</span>
                                    <p class="default-p">Вывод средств в размере 0.00 руб.</p>
                                </div>
                            </div>
                            <div class="balance_operation_info_end">
                                <span>¥ 6.00</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileLinks from '@/components/ProfileLinks.vue';
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('toggleBalanceClass') === 'true') {
        var balanceElement = document.getElementById('balance');
        if (balanceElement) {
            balanceElement.classList.toggle('active');
        }
        localStorage.removeItem('toggleBalanceClass');
    }
});
export default {

    name: 'BalancePage',
    components: {
        ProfileLinks

    },
    data() {
        return {
            isLargeScreen: window.innerWidth > 1050,
            activeTab: 'data'
        }
    },
    methods: {
        switchTab(tab) {
            this.activeTab = tab
        },
        goBack() {
            document.getElementById('balance') ? document.getElementById('balance').classList.toggle('active') : document.getElementById('balance').classList.toggle('active')
        },
    }
}
</script>

<style src="./balance.css" lang="css" scoped></style>