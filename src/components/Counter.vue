<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
	<div class="count">
		<svg :class="count === 1 ? 'disabled' : ''" @click="count >=2 ? count-- : ''" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.66602 8L13.3327 8" stroke=" var(--primary-text)" stroke-width="1.25" stroke-linecap="round" />
		</svg>
		<span>{{ count }}</span>
		<svg @click="count++" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.66602 7.99996H13.3327M7.99935 2.66663V13.3333" stroke=" var(--primary-text)" stroke-width="1.25"
				stroke-linecap="round" />
		</svg>
	</div>
</template>
<script>
export default {
	name: 'Counter'
}
</script>
<style>
.disabled path{
	cursor: not-allowed;
	stroke: var(--lighter-gray) !important;
}
.count span {
	color: var(--primary-text);
	font-size: 16px;
	font-weight: 400;
	line-height: 20.8px;
	text-align: left;
	margin: 0px 5px;

}

.count {
	background-color: var(--main-bg);
	display: flex;
	gap: 12px;
	align-items: center;
	padding: 5px;
	width: max-content;
	margin-top: 12px;
	border: 1px solid var(--lighter-gray);
}

.count svg {
	cursor: pointer;
}
</style>
