<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
	<div class="count">
		<svg
			@click="count--"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.66602 8L13.3327 8"
				stroke="#191617"
				stroke-width="1.25"
				stroke-linecap="round"
			/>
		</svg>
		<div>{{ count }}</div>
		<svg
			@click="count++"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.66602 7.99996H13.3327M7.99935 2.66663V13.3333"
				stroke="#191617"
				stroke-width="1.25"
				stroke-linecap="round"
			/>
		</svg>
	</div>
</template>
<script>
export default {
    name: 'Counter'
}
</script>
<style>
.count {
	background-color: #fff;
	display: flex;
	gap: 12px;
	padding: 12px 8px;
	width: max-content;
	border-radius: 10px;
	margin-top: 12px;
}

</style>
