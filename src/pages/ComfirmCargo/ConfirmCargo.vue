<template>
	<div class="confirm-cargo container">
		<h1>Оформление груза</h1>
		<div class="confirm-nav">
			<div :class="{ 'active': count === 1 || count === 0, 'wasActive': count > 1 }" class="confirm-nav_item">
				<div class="confirm-nav_item-logo">
					<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.85772 1.74605L7.05743 1.07954C8.26552 0.408381 9.73448 0.408382 10.9426 1.07954L15.9426 3.85732C16.125 3.95868 16.2975 4.0731 16.4591 4.19906L13.0247 6.23112L5.85772 1.74605Z"
							fill="white" />
						<path
							d="M4.53606 2.4803L2.05743 3.85732C1.80688 3.99652 1.5751 4.16036 1.36444 4.34485C1.36553 4.34546 1.36662 4.34607 1.3677 4.34668L7.34178 7.70719C8.35948 8.27967 9.60606 8.26219 10.6073 7.66142L10.6113 7.65905L11.5713 7.09107L4.85214 2.88626C4.69605 2.78858 4.5883 2.64288 4.53606 2.4803Z"
							fill="white" />
						<path
							d="M0.45005 5.51061C0.159271 6.07051 0 6.70068 0 7.35395V11.6467C0 13.0994 0.787568 14.4379 2.05743 15.1434L7.05743 17.9211C7.437 18.132 7.84233 18.2766 8.25722 18.355C8.25246 18.3208 8.25 18.2859 8.25 18.2505V9.57498C7.6811 9.49213 7.12352 9.30545 6.60637 9.01455L0.632296 5.65403C0.562639 5.61485 0.501655 5.5662 0.45005 5.51061Z"
							fill="white" />
						<path
							d="M9.75 9.55424V18.2505C9.75 18.2859 9.74754 18.3208 9.74278 18.355C10.1577 18.2766 10.563 18.132 10.9426 17.9211L15.9426 15.1434C17.2124 14.4379 18 13.0994 18 11.6467V7.35395C18 6.6351 17.8071 5.94422 17.4584 5.34416C17.4343 5.36274 17.4088 5.38007 17.3819 5.39597L11.3791 8.94765L11.377 8.9489C10.8682 9.25381 10.3162 9.45573 9.75 9.55424Z"
							fill="white" />
					</svg>
				</div>
				<p class="confirm-nav_item-text_active">Состав заказа</p>
			</div>
			<div :class="{ 'active': count === 2, 'wasActive': count > 2 }"
				class="confirm-nav_item confirm-nav_item-border">
				<div class="confirm-nav_item-logo">
					<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9Z"
							fill="#EF0000" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M10.4481 19.3019C14.3295 17.1909 17.5544 13.4294 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0.449096 13.4645 3.34219 17.2505 7.52835 19.3518C8.45077 19.8149 9.54146 19.7951 10.4481 19.3019ZM13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9Z"
							fill="#EF0000" />
					</svg>
				</div>
				<p class="confirm-nav_item-text">Состав заказа</p>
			</div>
			<div :class="{ 'active': count === 3 }" class="confirm-nav_item">
				<div class="confirm-nav_item-logo">
					<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.9858 3.91224L13.2121 5.85248C12.993 6.40198 13.3977 6.99915 13.9893 6.99915H17.618C18.9407 6.99915 19.8991 8.26016 19.545 9.53458L18.007 15.07C17.526 16.8011 15.9497 17.9992 14.153 17.9992H9.49711C8.76706 17.9992 8.05093 17.7994 7.42633 17.4214L6.17873 16.6665C5.39404 16.1917 4.80938 15.4708 4.49951 14.6363V15.9993C4.49951 16.5516 4.1332 16.9993 3.68133 16.9993H0.817694C0.365824 16.9993 -0.000488281 16.5516 -0.000488281 15.9993V5.99927C-0.000488281 5.44698 0.365824 4.99927 0.817694 4.99927H3.68133C4.1332 4.99927 4.49951 5.44698 4.49951 5.99927V7.56856C4.75622 6.8771 5.20247 6.26107 5.80018 5.79813L6.83177 4.99915L10.621 1.33116C10.8452 1.11413 11.1255 0.963906 11.4304 0.897373C13.1826 0.514973 14.6501 2.24632 13.9858 3.91224Z"
							fill="#B5B5B5" />
					</svg>
				</div>
				<p class="confirm-nav_item-text">Состав заказа</p>
			</div>
		</div>
		<div v-show="count == 0" class="first_empty">
			<div class="container">
				<div class="first_empty_content">
					<div class="first_empty_info">
						<img src="../../../public/images/empty.png" alt="">
						<p class="default-h3">Добавьте груз для оформления доставки</p>
						<div class="first_empty_last">
							<MainButton text="Добавить груз" @click="openPopup()" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-show="count == 1">
			<div class="place-content">
				<div v-show="arr.length > 0" class="">
					<div>

						<div class="place-info">
							<div class="place-info__header">
								<p class="text__typography-sm">Товар</p>
								<p class="text__typography-sm">Кол-во</p>
								<p class="text__typography-sm">Мест</p>
								<p class="text__typography-sm">Вес</p>
								<p class="text__typography-sm">Кубы</p>
							</div>

							<div class="place-info__product">
								<div class="place-info__product-content">
									<img src="/public/images/Product-img.png" alt="ProductImg" />
									<a href class="">
										<p class="default-violet-sm">
											花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
										</p>
									</a>
								</div>
								<div class="place-info__product-rigth">
									<div class="place-info__product-rigth__amount">
										<p class="text__typography-sm">Кол-во</p>
										<div class="place-info__product-text__grid">
											<div class="counter">
												<button @click="() => amount <= 0 ? amount = 0 : amount--">-</button>
												{{ amount }}
												<button @click="() => amount++">+</button>
											</div>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Мест</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Вес</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>
									<div class="">
										<p class="text__typography-sm">Кубы</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

								</div>
								<div class="place-info__product-btns">
									<ul>
										<li class="default-p_sm ">
											<svg width="12" height="12" viewBox="0 0 12 12" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M0.195262 8.47166L7 1.66692C7.92047 0.746444 9.41286 0.746443 10.3333 1.66692C11.2538 2.58739 11.2538 4.07978 10.3333 5.00025L3.5286 11.805C3.40357 11.93 3.234 12.0003 3.05719 12.0003H0.666667C0.298477 12.0003 0 11.7018 0 11.3336V8.94306C0 8.76625 0.070238 8.59668 0.195262 8.47166Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupChange = true">Редактировать </p>
										</li>
										<li class="default-p_sm ">
											<svg width="13" height="10" viewBox="0 0 13 10" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M6.66667 7.33333C6.66667 6.78105 6.21895 6.33333 5.66667 6.33333H5.33333C4.23973 6.33292 3.16682 6.63143 2.23058 7.1966C1.44904 7.6684 0.787552 8.31102 0.29417 9.07354C0.208968 9.20521 -7.95356e-05 9.15684 8.88408e-07 9C8.88408e-07 5.65667 2.46087 2.88829 5.67015 2.40731C6.21633 2.32545 6.66667 1.88562 6.66667 1.33333V1.08062C6.66667 0.242118 7.6366 -0.224055 8.29136 0.299756L12.3572 3.55246C12.8577 3.95279 12.8577 4.71388 12.3572 5.1142L8.29136 8.36691C7.6366 8.89072 6.66667 8.42455 6.66667 7.58604V7.33333Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDarg = true">Перенести </p>
										</li>
										<li class="default-p_sm "><svg width="12" height="13" viewBox="0 0 12 13"
												fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.26499 11.0869L2.02671 5.60642C2.01177 5.2627 2.26067 4.96457 2.60225 4.92351C3.42096 4.8251 4.90855 4.66667 6.00034 4.66667C7.0805 4.66667 8.54806 4.82174 9.37203 4.92035C9.72467 4.96255 9.97619 5.27772 9.94543 5.63154L9.46354 11.1733C9.37367 12.2068 8.50847 13 7.47106 13H4.2631C3.19232 13 2.3115 12.1566 2.26499 11.0869ZM3.50034 11C3.50034 10.7239 3.7242 10.5 4.00034 10.5H8.00034C8.27649 10.5 8.50034 10.7239 8.50034 11C8.50034 11.2761 8.27649 11.5 8.00034 11.5H4.00034C3.7242 11.5 3.50034 11.2761 3.50034 11Z"
													fill="#323232" />
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.47637 2.67098C2.5156 2.65483 2.55754 2.64345 2.60159 2.63763L2.62028 2.63517C3.05439 2.57786 3.42412 2.29149 3.58816 1.8855C3.92647 1.04817 4.73918 0.5 5.64227 0.5H6.5404C7.45562 0.5 8.27923 1.05553 8.62209 1.9041L8.68238 2.05333C8.80761 2.36327 9.08526 2.58558 9.41509 2.64C9.45336 2.64632 9.48989 2.65682 9.5243 2.67097C10.0486 2.71193 10.5087 2.75266 10.84 2.78339C11.0095 2.7991 11.1453 2.81221 11.239 2.8214L11.3467 2.8321L11.3848 2.83595C11.6595 2.86415 11.8593 3.1097 11.8311 3.3844C11.8029 3.6591 11.5569 3.85888 11.2822 3.83067L11.2467 3.82708L11.1413 3.81662C11.0492 3.80758 10.9152 3.79465 10.7476 3.77911C10.4126 3.74804 9.94408 3.7066 9.41086 3.66516C8.34077 3.58202 7.02344 3.5 6.00036 3.5C4.97727 3.5 3.65994 3.58202 2.58985 3.66516C2.05663 3.7066 1.58815 3.74804 1.25306 3.77911C1.08556 3.79465 0.951489 3.80758 0.859445 3.81662L0.754001 3.82708L0.718092 3.83072C0.443394 3.85892 0.197843 3.6591 0.169638 3.3844C0.141433 3.1097 0.341975 2.86408 0.616673 2.83587L0.653983 2.8321L0.761746 2.8214C0.855396 2.81221 0.99126 2.7991 1.16072 2.78339C1.492 2.75266 1.95205 2.71194 2.47637 2.67098ZM5.64227 1.5C5.14681 1.5 4.70094 1.80074 4.51534 2.26012C4.47504 2.35984 4.42794 2.45561 4.37466 2.54693C4.94085 2.51858 5.50194 2.5 6.00036 2.5C6.55349 2.5 7.18382 2.52289 7.81264 2.5566C7.79205 2.51461 7.77288 2.4717 7.7552 2.42794L7.69491 2.27872C7.50476 1.8081 7.04798 1.5 6.5404 1.5H5.64227Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDelete = true">Удалить </p>
										</li>
									</ul>
								</div>
							</div>
							<div class="place-info__product-hr"></div>
							<div class="place-info__product">
								<div class="place-info__product-content">
									<img src="/public/images/Product-img.png" alt="ProductImg" />
									<a href class="">
										<p class="default-violet-sm">
											花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
										</p>
									</a>
								</div>
								<div class="place-info__product-rigth">
									<div class="place-info__product-rigth__amount">
										<p class="text__typography-sm">Кол-во</p>
										<div class="place-info__product-text__grid">
											<div class="counter">
												<button @click="() => amount <= 0 ? amount = 0 : amount--">-</button>
												{{ amount }}
												<button @click="() => amount++">+</button>
											</div>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Мест</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Вес</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>
									<div class="">
										<p class="text__typography-sm">Кубы</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

								</div>
								<div class="place-info__product-btns">
									<ul>
										<li class="default-p_sm ">
											<svg width="12" height="12" viewBox="0 0 12 12" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M0.195262 8.47166L7 1.66692C7.92047 0.746444 9.41286 0.746443 10.3333 1.66692C11.2538 2.58739 11.2538 4.07978 10.3333 5.00025L3.5286 11.805C3.40357 11.93 3.234 12.0003 3.05719 12.0003H0.666667C0.298477 12.0003 0 11.7018 0 11.3336V8.94306C0 8.76625 0.070238 8.59668 0.195262 8.47166Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupChange = true">Редактировать </p>
										</li>
										<li class="default-p_sm ">
											<svg width="13" height="10" viewBox="0 0 13 10" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M6.66667 7.33333C6.66667 6.78105 6.21895 6.33333 5.66667 6.33333H5.33333C4.23973 6.33292 3.16682 6.63143 2.23058 7.1966C1.44904 7.6684 0.787552 8.31102 0.29417 9.07354C0.208968 9.20521 -7.95356e-05 9.15684 8.88408e-07 9C8.88408e-07 5.65667 2.46087 2.88829 5.67015 2.40731C6.21633 2.32545 6.66667 1.88562 6.66667 1.33333V1.08062C6.66667 0.242118 7.6366 -0.224055 8.29136 0.299756L12.3572 3.55246C12.8577 3.95279 12.8577 4.71388 12.3572 5.1142L8.29136 8.36691C7.6366 8.89072 6.66667 8.42455 6.66667 7.58604V7.33333Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDarg = true">Перенести </p>
										</li>
										<li class="default-p_sm "><svg width="12" height="13" viewBox="0 0 12 13"
												fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.26499 11.0869L2.02671 5.60642C2.01177 5.2627 2.26067 4.96457 2.60225 4.92351C3.42096 4.8251 4.90855 4.66667 6.00034 4.66667C7.0805 4.66667 8.54806 4.82174 9.37203 4.92035C9.72467 4.96255 9.97619 5.27772 9.94543 5.63154L9.46354 11.1733C9.37367 12.2068 8.50847 13 7.47106 13H4.2631C3.19232 13 2.3115 12.1566 2.26499 11.0869ZM3.50034 11C3.50034 10.7239 3.7242 10.5 4.00034 10.5H8.00034C8.27649 10.5 8.50034 10.7239 8.50034 11C8.50034 11.2761 8.27649 11.5 8.00034 11.5H4.00034C3.7242 11.5 3.50034 11.2761 3.50034 11Z"
													fill="#323232" />
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.47637 2.67098C2.5156 2.65483 2.55754 2.64345 2.60159 2.63763L2.62028 2.63517C3.05439 2.57786 3.42412 2.29149 3.58816 1.8855C3.92647 1.04817 4.73918 0.5 5.64227 0.5H6.5404C7.45562 0.5 8.27923 1.05553 8.62209 1.9041L8.68238 2.05333C8.80761 2.36327 9.08526 2.58558 9.41509 2.64C9.45336 2.64632 9.48989 2.65682 9.5243 2.67097C10.0486 2.71193 10.5087 2.75266 10.84 2.78339C11.0095 2.7991 11.1453 2.81221 11.239 2.8214L11.3467 2.8321L11.3848 2.83595C11.6595 2.86415 11.8593 3.1097 11.8311 3.3844C11.8029 3.6591 11.5569 3.85888 11.2822 3.83067L11.2467 3.82708L11.1413 3.81662C11.0492 3.80758 10.9152 3.79465 10.7476 3.77911C10.4126 3.74804 9.94408 3.7066 9.41086 3.66516C8.34077 3.58202 7.02344 3.5 6.00036 3.5C4.97727 3.5 3.65994 3.58202 2.58985 3.66516C2.05663 3.7066 1.58815 3.74804 1.25306 3.77911C1.08556 3.79465 0.951489 3.80758 0.859445 3.81662L0.754001 3.82708L0.718092 3.83072C0.443394 3.85892 0.197843 3.6591 0.169638 3.3844C0.141433 3.1097 0.341975 2.86408 0.616673 2.83587L0.653983 2.8321L0.761746 2.8214C0.855396 2.81221 0.99126 2.7991 1.16072 2.78339C1.492 2.75266 1.95205 2.71194 2.47637 2.67098ZM5.64227 1.5C5.14681 1.5 4.70094 1.80074 4.51534 2.26012C4.47504 2.35984 4.42794 2.45561 4.37466 2.54693C4.94085 2.51858 5.50194 2.5 6.00036 2.5C6.55349 2.5 7.18382 2.52289 7.81264 2.5566C7.79205 2.51461 7.77288 2.4717 7.7552 2.42794L7.69491 2.27872C7.50476 1.8081 7.04798 1.5 6.5404 1.5H5.64227Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDelete = true">Удалить </p>
										</li>
									</ul>
								</div>
							</div>
							<div class="place-info__product-hr"></div>
							<div class="place-info__product">
								<div class="place-info__product-content">
									<img src="/public/images/Product-img.png" alt="ProductImg" />
									<a href class="">
										<p class="default-violet-sm">
											花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
										</p>
									</a>
								</div>
								<div class="place-info__product-rigth">
									<div class="place-info__product-rigth__amount">
										<p class="text__typography-sm">Кол-во</p>
										<div class="place-info__product-text__grid">
											<div class="counter">
												<button @click="() => amount <= 0 ? amount = 0 : amount--">-</button>
												{{ amount }}
												<button @click="() => amount++">+</button>
											</div>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Мест</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

									<div class="">
										<p class="text__typography-sm">Вес</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>
									<div class="">
										<p class="text__typography-sm">Кубы</p>
										<div class="place-info__product-text__grid">
											<p class="default-p">0</p>
										</div>
									</div>

								</div>
								<div class="place-info__product-btns">
									<ul>
										<li class="default-p_sm ">
											<svg width="12" height="12" viewBox="0 0 12 12" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M0.195262 8.47166L7 1.66692C7.92047 0.746444 9.41286 0.746443 10.3333 1.66692C11.2538 2.58739 11.2538 4.07978 10.3333 5.00025L3.5286 11.805C3.40357 11.93 3.234 12.0003 3.05719 12.0003H0.666667C0.298477 12.0003 0 11.7018 0 11.3336V8.94306C0 8.76625 0.070238 8.59668 0.195262 8.47166Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupChange = true">Редактировать </p>
										</li>
										<li class="default-p_sm ">
											<svg width="13" height="10" viewBox="0 0 13 10" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M6.66667 7.33333C6.66667 6.78105 6.21895 6.33333 5.66667 6.33333H5.33333C4.23973 6.33292 3.16682 6.63143 2.23058 7.1966C1.44904 7.6684 0.787552 8.31102 0.29417 9.07354C0.208968 9.20521 -7.95356e-05 9.15684 8.88408e-07 9C8.88408e-07 5.65667 2.46087 2.88829 5.67015 2.40731C6.21633 2.32545 6.66667 1.88562 6.66667 1.33333V1.08062C6.66667 0.242118 7.6366 -0.224055 8.29136 0.299756L12.3572 3.55246C12.8577 3.95279 12.8577 4.71388 12.3572 5.1142L8.29136 8.36691C7.6366 8.89072 6.66667 8.42455 6.66667 7.58604V7.33333Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDarg = true">Перенести </p>
										</li>
										<li class="default-p_sm "><svg width="12" height="13" viewBox="0 0 12 13"
												fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.26499 11.0869L2.02671 5.60642C2.01177 5.2627 2.26067 4.96457 2.60225 4.92351C3.42096 4.8251 4.90855 4.66667 6.00034 4.66667C7.0805 4.66667 8.54806 4.82174 9.37203 4.92035C9.72467 4.96255 9.97619 5.27772 9.94543 5.63154L9.46354 11.1733C9.37367 12.2068 8.50847 13 7.47106 13H4.2631C3.19232 13 2.3115 12.1566 2.26499 11.0869ZM3.50034 11C3.50034 10.7239 3.7242 10.5 4.00034 10.5H8.00034C8.27649 10.5 8.50034 10.7239 8.50034 11C8.50034 11.2761 8.27649 11.5 8.00034 11.5H4.00034C3.7242 11.5 3.50034 11.2761 3.50034 11Z"
													fill="#323232" />
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M2.47637 2.67098C2.5156 2.65483 2.55754 2.64345 2.60159 2.63763L2.62028 2.63517C3.05439 2.57786 3.42412 2.29149 3.58816 1.8855C3.92647 1.04817 4.73918 0.5 5.64227 0.5H6.5404C7.45562 0.5 8.27923 1.05553 8.62209 1.9041L8.68238 2.05333C8.80761 2.36327 9.08526 2.58558 9.41509 2.64C9.45336 2.64632 9.48989 2.65682 9.5243 2.67097C10.0486 2.71193 10.5087 2.75266 10.84 2.78339C11.0095 2.7991 11.1453 2.81221 11.239 2.8214L11.3467 2.8321L11.3848 2.83595C11.6595 2.86415 11.8593 3.1097 11.8311 3.3844C11.8029 3.6591 11.5569 3.85888 11.2822 3.83067L11.2467 3.82708L11.1413 3.81662C11.0492 3.80758 10.9152 3.79465 10.7476 3.77911C10.4126 3.74804 9.94408 3.7066 9.41086 3.66516C8.34077 3.58202 7.02344 3.5 6.00036 3.5C4.97727 3.5 3.65994 3.58202 2.58985 3.66516C2.05663 3.7066 1.58815 3.74804 1.25306 3.77911C1.08556 3.79465 0.951489 3.80758 0.859445 3.81662L0.754001 3.82708L0.718092 3.83072C0.443394 3.85892 0.197843 3.6591 0.169638 3.3844C0.141433 3.1097 0.341975 2.86408 0.616673 2.83587L0.653983 2.8321L0.761746 2.8214C0.855396 2.81221 0.99126 2.7991 1.16072 2.78339C1.492 2.75266 1.95205 2.71194 2.47637 2.67098ZM5.64227 1.5C5.14681 1.5 4.70094 1.80074 4.51534 2.26012C4.47504 2.35984 4.42794 2.45561 4.37466 2.54693C4.94085 2.51858 5.50194 2.5 6.00036 2.5C6.55349 2.5 7.18382 2.52289 7.81264 2.5566C7.79205 2.51461 7.77288 2.4717 7.7552 2.42794L7.69491 2.27872C7.50476 1.8081 7.04798 1.5 6.5404 1.5H5.64227Z"
													fill="#323232" />
											</svg>
											<p @click="() => popupDelete = true">Удалить </p>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div class="confirm-cargo_block ">
				<div class="confirm-cargo_block-item mb-6 mt-3">
					<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.96335 0.678759L0.76035 9.91189C0.25949 10.8007 0.901725 11.8998 1.92195 11.8998H12.0784C13.0864 11.8998 13.7299 10.8244 13.2533 9.93614L8.29987 0.703001C7.80291 -0.22333 6.47942 -0.237061 5.96335 0.678759ZM7.57529 4.25309C7.5822 3.93127 7.32321 3.66667 7.00132 3.66667C6.67958 3.66667 6.42066 3.93104 6.42735 4.25271L6.50196 7.83574C6.50761 8.10684 6.729 8.32367 7.00016 8.32367C7.2712 8.32367 7.49253 8.10704 7.49835 7.83606L7.57529 4.25309ZM6.52727 10.1272C6.65859 10.2646 6.81616 10.3333 7 10.3333C7.12121 10.3333 7.23131 10.3022 7.3303 10.2399C7.43131 10.1755 7.51212 10.0896 7.57273 9.98229C7.63535 9.87493 7.66667 9.75577 7.66667 9.6248C7.66667 9.43156 7.6 9.26624 7.46667 9.12882C7.33535 8.99141 7.1798 8.9227 7 8.9227C6.81616 8.9227 6.65859 8.99141 6.52727 9.12882C6.39798 9.26624 6.33333 9.43156 6.33333 9.6248C6.33333 9.82233 6.39798 9.9898 6.52727 10.1272Z"
							fill="#EF0000" />
					</svg>
					<p>Внимание: Перед отправкой груза на наш склад уточните у нашего менеджера не является ли товар
						запрещённым, и сможет ли наша компания отправить его через таможенный пункт (по телефону 8 (800)
						707-75-68, или напишите сообщение к этому заказу после добавления)
					</p>
				</div>

			</div>
			<div class="confirm-cargo_btns">
				<button @click="openPopup()" class="confirm-cargo_btn-border"><svg width="13" height="14" viewBox="0 0 13 14" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M0.500326 7L12.5 7" stroke="#EF0000" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M6.5 1.00033L6.5 13" stroke="#EF0000" stroke-linecap="round" stroke-linejoin="round" />
					</svg><span>Добавить еще товар</span></button>
				
				<MainButton text="Следующий шаг" @click="count++" />
			</div>
		</div>
		<div v-show="count == 2">
			<div class="confirm-cargo_content">
				<div class="confirm-cargo_grid">
					<div class="confirm-cargo_back">
						<div class="confirm-cargo_back-up">
							<h4>Адрес и контакты</h4>
							<a href="#" @click="deniee = true">Использовать сохраненные данные</a>
						</div>
						<form class="confirm-cargo_back_form">
							<input type="text" required placeholder="ФИО*" class="confirm-cargo_back_input-wrong" />
							<input type="tel:" required placeholder="Телефон*" class="confirm-cargo_back_input" />
							<input type="text" required placeholder="Страна*" class="confirm-cargo_back_input" />
							<input type="text" required placeholder="Город*" class="confirm-cargo_back_input" />
							<input type="text" required placeholder="Адрес (улица, дом, квартира, индекс)*"
								class="confirm-cargo_back_input" />
							<div class="">
								<input type="text" required placeholder="Доп. данные (серия и номер паспорта)*"
									class="confirm-cargo_back_input" />
								<p class="confirm-cargo_back_text">
									Для отправки в транспортных компаниях России
								</p>
							</div>

							<input type="text" placeholder="Промокод (при наличии)" class="confirm-cargo_back_input" />
						</form>
					</div>
					<div class="confirm-cargo_row">
						<div class="confirm-cargo_back">
							<h4>Выберите способ доставки</h4>
							<ul class="confirm-cargo_list">
								<li>
									<input type="radio" name="radio" id="list_radio1" />
									<label for="list_radio1" class="confirm-cargo_list-grid">
										<h4>Авиа</h4>
										<p>
											8-15 дней (страховка 1-4%). Одежда сумки 12$, прочее
											12,5$, обувь 12,5$, майнеры/видео карта 13$, чай/продукты
											питания 14$
										</p>
									</label>
								</li>
								<li>
									<input type="radio" name="radio" id="list_radio2" />
									<label for="list_radio2" class="confirm-cargo_list-grid">
										<h4>Авто</h4>
										<p>18-30 дней. От 2.5$ через Казахстан</p>
									</label>
								</li>
								<li>
									<input type="radio" name="radio" id="list_radio3" />
									<label for="list_radio3" class="confirm-cargo_list-grid">
										<h4>Авто стандарт</h4>
										<p>от 35 дней. От 2.1$ за кг</p>
									</label>
								</li>
							</ul>
						</div>
						<div class="confirm-cargo_back">
							<h4>Страховка груза</h4>
							<p class="confirm-cargo_text">
								Чтобы узнать подробнее про страховку груза и на какие страховые
								случаи она распространяется, перейдите на
								<a @click="cargoInsurance = true">страницу страхования </a>
							<ul class="confirm-cargo_list">


								<li>
									<input type="radio" name="radio1" id="radio1" />
									<label for="radio1">Нужна страховка</label>
								</li>
								<li>
									<input type="radio" name="radio1" id="radio2" />
									<label for="radio2">Без страховки</label>
								</li>
							</ul>
							</p>
						</div>
					</div>
				</div>
				<div class="confirm-cargo_back">
					<h4>Выберите способ оплаты заказа</h4>
					<p class="confirm-cargo_text">
						В зависимости от выбранного способа оплаты будет изменена комиссия на выкуп. Мы не берем
						дополнительную комиссию на оплату. Чтобы узнать подробнее про способы оплаты, перейдите на
						<a href="/payment">страницу оплаты </a>
					</p>
					<div class="confirm-cargo_items">
						<ul class="confirm-cargo_list">
							<li>
								<input type="radio" name="radi2" id="list_radio4" />
								<label for="list_radio4" class="confirm-cargo_list-grid">
									<h4>На счет организации (Договор + Торг12)</h4>
									<p>
										Комиссия на заказ 3% + 15% налоги (от 200 т.р)
									</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio2" id="list_radio5" />
								<label for="list_radio5" class="confirm-cargo_list-grid">
									<h4>Наличными в Москве</h4>
									<p>Комиссия на заказ 3% (от 500 т.р)</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio2" id="list_radio6" />
								<label for="list_radio6" class="confirm-cargo_list-grid">
									<h4>USDT</h4>
									<p>Через обменники и биржи 3-5%</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio2" id="list_radio7" />
								<label for="list_radio7" class="confirm-cargo_list-grid">
									<h4>Карта Сбербанка 4%/6%</h4>
									<p>Комиссия на заказ 4% < 10к¥ < 6%. Счёт может быть поделен</p>
								</label>
							</li>
						</ul>
						<ul class="confirm-cargo_list">
							<li>
								<input type="radio" name="radio3" id="list_radio8" />
								<label for="list_radio8" class="confirm-cargo_list-grid">
									<h4>Оплата картой-дубликат (от 100 т.р)</h4>
									<p>
										Предоставьте дубликат своей карты Сбербанк нашему представителю и при оплате
										заказа мы снимем необходимую сумму
									</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio3" id="list_radio9" />
								<label for="list_radio9" class="confirm-cargo_list-grid">
									<h4>Виртуальная карта Мир или QR</h4>
									<p>от 100 т.р (комиссия заказа от 2.5%)</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio3" id="list_radio10" />
								<label for="list_radio10" class="confirm-cargo_list-grid">
									<h4>Наличными в Санкт-Петербурге</h4>
									<p>От 300 т.р.</p>
								</label>
							</li>

						</ul>
					</div>
				</div>

				<div class="confirm-cargo_back">
					<h4>Выберите тип упаковки груза</h4>
					<p class="confirm-cargo_text">
						Независимо от вида упаковки, она добавляет к стоимости доставки от 1 до 5 кг общей массы
						груза. Чтобы подробнее узнать про упаковку груза, перейдите на страницу <a
							@click="cargoPackaging = true">упаковка груза </a>
					</p>
					<div class="confirm-cargo_items">
						<ul class="confirm-cargo_list">
							<li>
								<input type="radio" name="radi3" id="list_radio4" />
								<label for="list_radio4" class="confirm-cargo_list-grid">
									<h4>Упаковка скотч/мешок, переупаковка в новые коробки</h4>
									<p>
										От 5 юаней/место
									</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio3" id="list_radio5" />
								<label for="list_radio5" class="confirm-cargo_list-grid">
									<h4>Обрешетка груза
									</h4>
									<p>От 35 юаней за коробку</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio3" id="list_radio6" />
								<label for="list_radio6" class="confirm-cargo_list-grid">
									<h4>Сжатие под прессом объемного груза</h4>
									<p>50 юаней</p>
								</label>
							</li>
						</ul>
						<ul class="confirm-cargo_list">
							<li>
								<input type="radio" name="radio5" id="list_radio8" />
								<label for="list_radio8" class="confirm-cargo_list-grid">
									<h4>Поддон</h4>
									<p>
										От 300 юаней за поддон 
									</p>
								</label>
							</li>
							<li>
								<input type="radio" name="radio5" id="list_radio9" />
								<label for="list_radio9" class="confirm-cargo_list-grid">
									<h4>Деревянный ящик</h4>
									<p>От 300 юаней за м3 </p>
								</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="confirm-cargo_block ">
					<div class="confirm-cargo_block-item">
						<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M5.96335 0.678759L0.76035 9.91189C0.25949 10.8007 0.901725 11.8998 1.92195 11.8998H12.0784C13.0864 11.8998 13.7299 10.8244 13.2533 9.93614L8.29987 0.703001C7.80291 -0.22333 6.47942 -0.237061 5.96335 0.678759ZM7.57529 4.25309C7.5822 3.93127 7.32321 3.66667 7.00132 3.66667C6.67958 3.66667 6.42066 3.93104 6.42735 4.25271L6.50196 7.83574C6.50761 8.10684 6.729 8.32367 7.00016 8.32367C7.2712 8.32367 7.49253 8.10704 7.49835 7.83606L7.57529 4.25309ZM6.52727 10.1272C6.65859 10.2646 6.81616 10.3333 7 10.3333C7.12121 10.3333 7.23131 10.3022 7.3303 10.2399C7.43131 10.1755 7.51212 10.0896 7.57273 9.98229C7.63535 9.87493 7.66667 9.75577 7.66667 9.6248C7.66667 9.43156 7.6 9.26624 7.46667 9.12882C7.33535 8.99141 7.1798 8.9227 7 8.9227C6.81616 8.9227 6.65859 8.99141 6.52727 9.12882C6.39798 9.26624 6.33333 9.43156 6.33333 9.6248C6.33333 9.82233 6.39798 9.9898 6.52727 10.1272Z"
								fill="#EF0000" />
						</svg>
						<p>Внимание: Перед отправкой груза на наш склад уточните у нашего менеджера не является ли
							товар запрещённым, и сможет ли наша компания отправить его через таможенный пункт (по
							телефону 8 (800) 707-75-68, или напишите сообщение к этому заказу после добавления)</p>
					</div>
					<div class="confirm-cargo_block-item mb-3">
						<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M5.96335 0.678759L0.76035 9.91189C0.25949 10.8007 0.901725 11.8998 1.92195 11.8998H12.0784C13.0864 11.8998 13.7299 10.8244 13.2533 9.93614L8.29987 0.703001C7.80291 -0.22333 6.47942 -0.237061 5.96335 0.678759ZM7.57529 4.25309C7.5822 3.93127 7.32321 3.66667 7.00132 3.66667C6.67958 3.66667 6.42066 3.93104 6.42735 4.25271L6.50196 7.83574C6.50761 8.10684 6.729 8.32367 7.00016 8.32367C7.2712 8.32367 7.49253 8.10704 7.49835 7.83606L7.57529 4.25309ZM6.52727 10.1272C6.65859 10.2646 6.81616 10.3333 7 10.3333C7.12121 10.3333 7.23131 10.3022 7.3303 10.2399C7.43131 10.1755 7.51212 10.0896 7.57273 9.98229C7.63535 9.87493 7.66667 9.75577 7.66667 9.6248C7.66667 9.43156 7.6 9.26624 7.46667 9.12882C7.33535 8.99141 7.1798 8.9227 7 8.9227C6.81616 8.9227 6.65859 8.99141 6.52727 9.12882C6.39798 9.26624 6.33333 9.43156 6.33333 9.6248C6.33333 9.82233 6.39798 9.9898 6.52727 10.1272Z"
								fill="#EF0000" />
						</svg>
						<p>Будьте внимательны. Оплачивайте заказы только по реквизитам, указанным на сайте. Если вам
							предлагают оплатить счет вне нашего сайта – это мошенники.
						</p>
					</div>

				</div>
				<div class="confirm-cargo_btns">
					<SecondaryButton @click="count--" text="Вернуться назад" />
					<MainButton text="Следующий шаг" @click="3 >= count ? count = 3 : count++" />
				</div>
			</div>


		</div>
		<div v-show="count == 3">
			<div class="confirm-cargo_three">
				<div class="confirm-cargo_back">
					<div class="confirm-cargo_ul-flex">
						<p class="default-p">Номер заказа</p>
						<p class="default-p_semibold">124661</p>
					</div>
					<div class="confirm-cargo_ul-flex">
						<p class="default-p">Город</p>
						<p class="default-p_semibold">Москва</p>
					</div>
					<div class="confirm-cargo_ul-flex">
						<p class="default-p">Адрес</p>
						<p class="default-p_semibold">ул. 2-я Тупиковая, д. 30, кв 4</p>
					</div>
					<div class="confirm-cargo_ul-flex">
						<p class="default-p">Способ доставки</p>
						<p class="default-p_semibold">Авто стандарт</p>
					</div>

				</div>
				<div class="confirm-cargo_back">
					<h3 class="default-h3 mb-1">Итого килограмм <span class="default-h3_red ml-1">12</span></h3>
					<p class="default-p ">Обязательно промаркируйте посылку номером своего заказа, что бы мы могли без
						труда сообщить вам о прибытии товара на склад</p>
					<textarea class="confirm-cargo_textarea" name="" id="" placeholder="Примечание к заказу"></textarea>
				</div>
			</div>
			<div class="confirm-cargo_block">
				<div class="confirm-cargo_block-item">
					<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.96335 0.678759L0.76035 9.91189C0.25949 10.8007 0.901725 11.8998 1.92195 11.8998H12.0784C13.0864 11.8998 13.7299 10.8244 13.2533 9.93614L8.29987 0.703001C7.80291 -0.22333 6.47942 -0.237061 5.96335 0.678759ZM7.57529 4.25309C7.5822 3.93127 7.32321 3.66667 7.00132 3.66667C6.67958 3.66667 6.42066 3.93104 6.42735 4.25271L6.50196 7.83574C6.50761 8.10684 6.729 8.32367 7.00016 8.32367C7.2712 8.32367 7.49253 8.10704 7.49835 7.83606L7.57529 4.25309ZM6.52727 10.1272C6.65859 10.2646 6.81616 10.3333 7 10.3333C7.12121 10.3333 7.23131 10.3022 7.3303 10.2399C7.43131 10.1755 7.51212 10.0896 7.57273 9.98229C7.63535 9.87493 7.66667 9.75577 7.66667 9.6248C7.66667 9.43156 7.6 9.26624 7.46667 9.12882C7.33535 8.99141 7.1798 8.9227 7 8.9227C6.81616 8.9227 6.65859 8.99141 6.52727 9.12882C6.39798 9.26624 6.33333 9.43156 6.33333 9.6248C6.33333 9.82233 6.39798 9.9898 6.52727 10.1272Z"
							fill="#EF0000" />
					</svg>
					<p>Внимание: Перед отправкой груза на наш склад уточните у нашего менеджера не является ли товар
						запрещённым, и сможет ли наша компания отправить его через таможенный пункт (по телефону 8
						(800) 707-75-68, или напишите сообщение к этому заказу после добавления)</p>
				</div>
			</div>
			<div class="confirm-cargo_btns margin-64 ">
				<SecondaryButton @click="count--" text="Вернуться назад" />
				<MainButton text="Следующий шаг" @click="3 >= count ? count = 3 : count++" />

			</div>

		</div>
		<div v-show="cargoInsurance" class="popup-overlay">
			<div class="popup_content">
				<div class="popup_close" @click="cargoInsurance = !cargoInsurance">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>
				</div>
				<div class="popup-scroll">
					<h2 class="default-h2">Страховка груза</h2>
					<ul class="popup_content-ul">
						<li class="">
							<h4>Как работает страховка?</h4>
							<p class="default-p">В случае потери груза вам возвращается сумма на которую вы страховали
								груз,
								на повреждения груза страховка НЕ РАСПРОСТРАНЯЕТСЯ</p>
						</li>
						<li class="">
							<h4>Сколько стоит страховка?</h4>
							<p class="default-p">Страховка в большинстве случаев рассчитывается 2% от стоимости товара!
								Исключения составляет маленький и дорогой груз (к примеру 100кг электроники по цене
								4000$ -
								в этом случае страховка будет составлять 4% от стоимости груза при авто доставке),
								при стоимости груза до 20$ \ кг - 2%, стоимость груза 20$ - 30$\кг - 3%, стоимость груза
								30-50$/кг - 4% (все что дороже 50$ в кг груза НЕ СТРАХУЕТСЯ) </p>
						</li>
						<li class="">
							<h4>Страхование авиа доставки</h4>
							<p class="default-p">При стоимости груза до 30$ \ кг - 2%, стоимость груза 31$ - 100$\кг -
								3%,
								стоимость груза 101-300$/кг - 4% (все что дороже 300$ в кг груза НЕ СТРАХУЕТСЯ) 
								<br>
								<br>
								В случае если груз не был застрахован при доставке из Китая в Россию (если при
								оформлении
								заказа вы не указали что бы мы оформили страховку) то при конфискации на таможне или
								потере
								груза в пути мы вернем лишь 4$ за 1 кг товара (для авиа доставки ставка к возврату
								составляет 9$ за 1 кг товара) (к примеру если потеряно 100кг * 4$  = 400$ за груз +
								сумма
								оплаченной доставки). Потери груза и конфискация случаются очень редко, из 35000
								доставленных грузов было потеряно около 100 (это 0,28%)

								<br>
								<br>
								В случае потери груза при оформленной страховке вам возвращается тот % от суммы который
								вы
								выбрали при оформлении заказа (к примеру если цена груза составляла 10000 юаней и вы
								выбрали
								застраховать на 50% то при потери вам вернется только 5000 юаней)
							</p>
						</li>
					</ul>
				</div>


			</div>
		</div>
		<div v-show="cargoPackaging" class="popup-overlay packaging">
			<div class="popup_content">
				<div class="popup_close" @click="cargoPackaging = !cargoPackaging">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>
				</div>
				<div class="popup-scroll">
					<h2 class="default-h2">Упаковка груза</h2>
					<ul class="popup_content-ul">
						<li class="">
							<h4>Упаковка в Китае</h4>
							<p class="default-p">Хотели бы вам объяснить как проходит упаковка посылок для передачи в
								ТК, мы
								используем только чистые, ровные, ни в коем случае не поврежденные коробки, плотно
								упаковываем ваш товар, если есть пространство мы заполняем его пузырчатой пленкой, и
								потом
								оборачиваем каждую коробку, не зависимо от размера и габаритов в мешок а затем
								в  цветной
								скотч, проклеивая все стыки, вот в таком состоянии вы получаете груз в России</p>
						</li>
						<li class="">
							<div class="text_with_dots">
								<div>
									<span class="text_with_dots_dot"></span>
									<h4>Упаковка скотч/мешок, переупаковка в новые коробки</h4>
								</div>
							</div>
							<p class="default-p">Если от поставщика были повреждения - 5 юаней/место (10 юаней / место
								если
								коробка большая) </p>
						</li>
						<li class="">
							<h4>Обрешетка груза</h4>
							<p class="default-p">Во время доставки груз проходит пересортировку через логистический путь
								Иу-Казахстан-Москва до 4-х раз, в процессе груз могут кидать, с верху ставить другие
								коробки, а так же груз может падать. Если не сделать обрешетку на груз, товар может
								повредиться. Обрешетка снижает риск повреждения . На груз без обрешетки претензии не
								принимаются.
								<br>
								<br>
								Стоимость от 35 юаней за коробку.
								<br>
								<br>
								<span>Важные условия обрешетки:

								</span>
								данная услуга добавляет вес и объем к вашему грузу
							</p>
						</li>
						<li class="">
							<div class="text_with_dots">
								<div>
									<span class="text_with_dots_dot"></span>
									<h4>Поддон</h4>
								</div>
							</div>
							<p class="default-p">Если у вас много коробок или большой обьем мы можем поставить ваш груз
								на
								поддон, в этом случае сверху на него ничего ставится не будет и при разгрузке будет
								задействована спец техника - цена от 300 юаней за поддон 

							</p>
						</li>
						<li class="">
							<div class="text_with_dots">
								<div>
									<span class="text_with_dots_dot"></span>
									<h4>Деревянный ящик</h4>
								</div>
							</div>
							<p class="default-p">Высокий уровень устойчивости к механическим повреждениям, а так же
								внешним
								воздействиям различного характера. Разгрузка / погрузка осуществляется спец техникой,
								цена
								от 300 юаней за м3 
								<br><br>
								<span>Важные условия деревянного ящика:</span>
								данная услуга добавляет вес и объем к вашему грузу
							</p>
						</li>
						<li class="">
							<div class="text_with_dots">
								<div>
									<span class="text_with_dots_dot"></span>
									<h4>Сжатие под прессом объемного груза</h4>

								</div>
							</div>


							<p class="default-p">
								Эта услуга сокращает плотность груза (вес/объем, как мы знаем чем выше плотность тем
								ниже
								цена) подходит для тех кто заказывает мягкие объемные вещи: прим. одежда, мягкие
								игрушки,
								прочие изделия из ваты. Цена услуги 50 юаней
								<br><br>
								<span> Обязательные условия: </span> если вы заказываете данную услугу, то мы не несем
								ответственность за пуговицы, замки, иные пластмассовые или металлических изделия (лучше
								воздержаться) – все это под прессом может сломаться
							</p>
						</li>
					</ul>
				</div>


			</div>
		</div>
		<div v-show="deniee" class="popup-overlay packaging">
			<div class="popup_content">
				<div class="popup_close" @click="deniee = !deniee">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>
				</div>
				<div class="popup-scroll">
					<h2 class="default-h2">Использовать сохраненные данные</h2>
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
									<a @click="() => popupChange = false" class="default-violet">Редактировать</a>
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
									<a @click="() => popupChange = false" class="default-violet">Редактировать</a>
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
					<div class="dannie-btns">
						<MainButton text="Использовать данные" />
						<!-- <button class="dannie-btn">Использовать данные</button> -->
						<button class="confirm-cargo_btn-border"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M2.00033 8L14 8" stroke="#EF0000" stroke-linecap="round"
									stroke-linejoin="round" />
								<path d="M8 2.00033L8 14" stroke="#EF0000" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>Добавить новые данные</button>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div v-if="parameterPopup" class="popup-overlay">
		<div class="popup_content" style="height: 90vh;">
			<div class="popup_close" @click="closePopup()">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
						stroke-linecap="round" />
				</svg>

			</div>
			<div class="popup_scrol">
				<div class="popup_parameter_content">
					<h2 class="default-h2">Укажите параметры позиции</h2>
					<input placeholder="https://www.alibaba.com/" class="confirm-cargo_back_input " type="text" name=""
						id="">
					<input placeholder="Название товара*" class="confirm-cargo_back_input " type="text" name="" id="">
					<span class="parameter_small_span">Укажите название товара на китайском языке </span>
					<div class="parameter_inputs_flex">
						<input placeholder="Укажите размер*" class="confirm-cargo_back_input " type="text" name=""
							id="">
						<input placeholder="Укажите цвет*" class="confirm-cargo_back_input " type="text" name="" id="">
					</div>
					<input placeholder="Укажите стоимость*" class="confirm-cargo_back_input " type="text" name="" id="">

					<textarea class="last_textarea_parameter " placeholder="Примечание к товару" name=""
						id=""></textarea>
					<div class="popup_parameter_content_bottom">
						<div class="popup_parameter_count">
							<span>Количество</span>
							<Counter />
						</div>
						<div class="popup_parameter_content_bottom_sums">
							<div>
								<span>Сумма</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Доставка</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Услуги</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Итого</span>
								<span>¥ 0</span>
							</div>
						</div>
					</div>
					<div class="checbox_parameter">
						<input type="checkbox" id="customCheckbox">
						<label for="customCheckbox" class="customCheckboxLabel"></label>
						<label for="">Нужен фотоотчет <span>+ 3 ¥</span></label>
					</div>
					<div class="parameter_images" v-if="imageUrls.length">
						<div v-for="(url, index) in imageUrls" :key="index">
							<img :src="url" alt="Selected Image" />
						</div>
					</div>
					<div class="parameter_last_btns">
						<div @click="triggerFileInput" class="profile_photo_popup_button">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.33287 5.41168L5.37217 9.37238C4.8415 9.90305 4.8415 10.7635 5.37217 11.2941C5.90285 11.8248 6.76327 11.8248 7.29394 11.2941L12.2049 6.38314C13.1961 5.39192 13.196 3.7848 12.2045 2.79376C11.2134 1.80299 9.60681 1.80314 8.61581 2.7941L3.70484 7.70505C2.25333 9.15658 2.25333 11.5099 3.70484 12.9615C5.15635 14.413 7.50974 14.413 8.96127 12.9615L12.5894 9.33325"
									stroke="#EF0000" stroke-width="1.25" stroke-linecap="round" />
							</svg>
							<span>Прикрепить фото</span>

						</div>
						<input type="file" ref="fileInput" @change="handleFileChange" multiple style="display: none" />
						<MainButton text="Добавить товар" />
					</div>
				</div>
			</div>

		</div>

	</div>

	<div v-if="popupChange" class="popup-overlay">
		<div class="popup_content" style="height: 90vh;">
			<div class="popup_close" @click="() => popupChange = false">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
						stroke-linecap="round" />
				</svg>

			</div>
			<div class="popup_scrol">
				<div class="popup_parameter_content">
					<h2 class="default-h2">Редактирование параметров позиции</h2>
					<input value="http://detail.tmall.com/item.htm?id=716688013846" placeholder="https://www.alibaba.com/" class="confirm-cargo_back_input " type="text" name=""
						id="">
					<input value="【官方正品】小天才电话手表儿童Q1R4G定位智能防水小学生初中生男" placeholder="Название товара*" class="confirm-cargo_back_input " type="text" name="" id="">
					<span class="parameter_small_span">Укажите название товара на китайском языке </span>
					<div  class="parameter_inputs_flex">
						<input value="54" placeholder="Укажите размер*" class="confirm-cargo_back_input " type="text" name=""
							id="">
						<input value="HJP-00 柠" placeholder="Укажите цвет*" class="confirm-cargo_back_input " type="text" name="" id="">
					</div>
					<input value="55555" placeholder="Укажите стоимость*" class="confirm-cargo_back_input " type="text" name="" id="">

					<textarea class="last_textarea_parameter " placeholder="Примечание к товару" name=""
						id=""></textarea>
					<div class="popup_parameter_content_bottom">
						<div class="popup_parameter_count">
							<span>Количество</span>
							<Counter />
						</div>
						<div class="popup_parameter_content_bottom_sums">
							<div>
								<span>Сумма</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Доставка</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Услуги</span>
								<span>¥ 0</span>
							</div>
							<div>
								<span>Итого</span>
								<span>¥ 0</span>
							</div>
						</div>
					</div>
					<div class="checbox_parameter">
						<input type="checkbox" id="customCheckbox">
						<label for="customCheckbox" class="customCheckboxLabel"></label>
						<label for="">Нужен фотоотчет <span>+ 3 ¥</span></label>
					</div>
					<div class="parameter_images" v-if="imageUrls.length">
						<div v-for="(url, index) in imageUrls" :key="index">
							<img :src="url" alt="Selected Image" />
						</div>
					</div>
					<div class="parameter_last_btns">
						<div @click="triggerFileInput" class="profile_photo_popup_button">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.33287 5.41168L5.37217 9.37238C4.8415 9.90305 4.8415 10.7635 5.37217 11.2941C5.90285 11.8248 6.76327 11.8248 7.29394 11.2941L12.2049 6.38314C13.1961 5.39192 13.196 3.7848 12.2045 2.79376C11.2134 1.80299 9.60681 1.80314 8.61581 2.7941L3.70484 7.70505C2.25333 9.15658 2.25333 11.5099 3.70484 12.9615C5.15635 14.413 7.50974 14.413 8.96127 12.9615L12.5894 9.33325"
									stroke="#EF0000" stroke-width="1.25" stroke-linecap="round" />
							</svg>
							<span>Прикрепить фото</span>

						</div>
						<input type="file" ref="fileInput" @change="handleFileChange" multiple style="display: none" />
						<MainButton text="Добавить товар" />
					</div>
				</div>
			</div>

		</div>

	</div>
	<div v-if="popupDarg" class="popup-overlay">
		<div class="popup_content">
			<div class="popup_close" @click="popupDarg = false">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
						stroke-linecap="round" />
				</svg>
			</div>
			<div class="popup-scroll">
				<h1 class="default-h1 mb-2">Перемещение позиции</h1>
				<p class="default-p">Пожалуйста, выберите и нажмите на заказ ниже для добавления позиции в него</p>
				<div class="drag-flex mb-4">
					<div class="drag-back">
						<div class="drag-top">
							<ul>
								<li>
									<p class="text__typography-sm mb-1">ID заказа</p>
									<p class="default-p_text">1365</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Дата</p>
									<p class="default-p_text">03.08.2023 / 12:46</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Позиций</p>
									<p class="default-p_text">1365</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Общая стоиомсть</p>
									<p class="default-p_text mb-01">¥ 50.47</p>
									<p class="default_red ">₽ 671.25</p>

								</li>
							</ul>
						</div>
						<div class="drag-img">
							<img src="/public/images.png" alt="">
							<img src="/public/images.png" alt="">
							<img src="/public/images.png" alt="">
						</div>
					</div>
					<div class="drag-back">
						<div class="drag-top">
							<ul>
								<li>
									<p class="text__typography-sm mb-1">ID заказа</p>
									<p class="default-p_text">1365</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Дата</p>
									<p class="default-p_text">03.08.2023 / 12:46</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Позиций</p>
									<p class="default-p_text">1365</p>
								</li>
								<li>
									<p class="text__typography-sm mb-1">Общая стоиомсть</p>
									<p class="default-p_text mb-01">¥ 50.47</p>
									<p class="default_red ">₽ 671.25</p>

								</li>
							</ul>
						</div>
						<div class="drag-img">
							<img src="/public/images.png" alt="">
							<img src="/public/images.png" alt="">
							<img src="/public/images.png" alt="">
						</div>
					</div>
				</div>
				<button disabled class="confirm-cargo_btn">Переместить</button>
			</div>
		</div>
	</div>
	<div v-show="popupDelete" class="popup-overlay profile_photo_popup">
		<div class="popup_content">
			<div class="popup_close" @click="popupDelete = false">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
						stroke-linecap="round" />
				</svg>

			</div>
			<h1 class="default-h1 mb-2">Вы собираетесь удалить товар из списка</h1>
			<p class="default-p mb-4">Товар будет удален и восстановить его будет невозможно</p>
			<div class="popup_buttons">
				<MainButton text="Подтвердить заказ" />
				<span>Позже</span>
			</div>
		</div>
	</div>
</template>

<script>
import Counter from '@/components/Counter.vue';
import MainButton from '@/components/MainButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
export default {
	name: 'ConfirmCargo',
	data() {
		return {
			cargoInsurance: false,
			cargoPackaging: false,
			popupChange: false,
			deniee: false,
			count: 1,
			arr: [''],
			amount: 0,
			parameterPopup: false,
			imageUrls: [],
			popupDarg: false,
			popupDelete: false,
		}
	},
	components: {
		MainButton,
		SecondaryButton,
		Counter
	},
	methods: {
		openPopup() {
			this.parameterPopup = true;
		},
		closePopup() {
			this.parameterPopup = true;
		},
		triggerFileInput() {
			this.$refs.fileInput.click();
		},
		handleFileChange(event) {
			const files = event.target.files;
			this.imageUrls = []; // Clear existing image URLs

			Array.from(files).forEach(file => {
				const reader = new FileReader();
				reader.onload = (e) => {
					this.imageUrls.push(e.target.result);
				};
				reader.readAsDataURL(file);
			});
		},
	}
}
</script>

<style src="./comfirm-cargo.css" lang="css" scoped></style>

<style lang="scss">
@import url('./cargos.scss');
</style>
