import HomePage from '@/pages/Home/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import CartPage from '@/pages/Cart/CartPage.vue'
import CartWithItems from '@/pages/Cart/CartWithItems.vue'
import OrdersPage from '@/pages/Orders/OrdersPage.vue'
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
		}
	],
})

export default router
