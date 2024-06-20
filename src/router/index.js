import HomePage from '@/pages/Home/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import CartPage from '@/pages/Cart/CartPage.vue'
import CartWithItems from '@/pages/Cart/CartWithItems.vue'
import OrdersPage from '@/pages/Orders/OrdersPage.vue'
import ConfirmOrderPage from '@/pages/ConfirmOrder/ConfirmOrderPage.vue'
import BalancePage from '@/pages/Balance/BalancePage.vue';
import LocationsPage from '@/pages/Locations/LocationsPage.vue';
import CargoPage from '@/pages/Cargo/CargoPage.vue';
import ReviewsPage from '@/pages/reviews/ReviewsPage.vue';
import AboutPage from '@/pages/about/AboutPage.vue';
import NewsPage from '@/pages/news/NewsPage.vue';
import PaymentPage from '@/pages/payment/PaymentPage.vue';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/',
		},
		{
			path:"/profile",
			name:"profile",
			component:ProfilePage
		},
		{
			path:"/cart-with-items",
			name:"cart-with-items",
			component:CartWithItems
		},
		{
			path:"/cart",
			name:"cart",
			component:CartPage
		},
		{
			path:"/orders",
			name:"orders",
			component:OrdersPage
		},
		{
			path:"/balance",
			name:"balance",
			component:BalancePage
		},
		{
			path:"/confirm-order",
			name:"confirm-order",
			component:ConfirmOrderPage
		},
		{
			path:"/locations",
			name:"locations",
			component:LocationsPage
		},
		{
			path:"/cargo",
			name:"cargo",
			component:CargoPage
		},
		{
			path:"/about",
			name:"about",
			component:AboutPage
		},
		{
			path:"/reviews",
			name:"reviews",
			component:ReviewsPage
		},
		{
			path:"/news",
			name:"news",
			component:NewsPage
		},
		{
			path:"/payment",
			name:"payment",
			component:PaymentPage
		},
	],
})

export default router
