<template>
	<section style="position: relative;">
		<div class="home_first">
			<div class="home_first_content">
				<div class="home_first_texts">
					<h1 class="default-h1 ">
						Карго <span>доставка</span>
						и <span>выкуп</span> грузов
						из Китая
					</h1>
					<p>В любые города России, Казахстана и Белоруссии. Авиа доставка груза от 10 кг. Авто доставка
						груза через Казахстан или Киргизию</p>
					<div class="home_first_texts_buttons">
						<MainButton @click="goToOrderPage()" text="Выкуп товара" />
						<MainButton @click="goToGruzPage()" text="Оформить груз" />
					</div>
				</div>
				<div class="home_image">
					<div class="home_image_image">
						<div class="home_slider_buttons">
							<div class="slider_button disabled">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M19 9L12 16L19 23" stroke="white" stroke-linecap="round" />
								</svg>

							</div>
							<div class="slider_button">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M12 9L19 16L12 23" stroke="white" stroke-linecap="round" />
								</svg>

							</div>
						</div>
						<!-- <img src="../../../public/images/home1.png" alt=""> -->



					</div>
				</div>
			</div>
		</div>
		<section class="home_second">
			<div class="container">
				<div class="home_second_content">
					<div class="home_second_image">
						<img src="../../../public/images/home2.png" alt="">
					</div>
					<div class="home_second_texts">
						<h1 class="default-h1 "> <span>Главное</span> о компании</h1>

						<p class="default-p">China Town помогает владельцам среднего и малого бизнеса приобрести
							китайские товары. Карго
							доставка из Китая с сайтов: 1688.com, alibaba.com, taobao.com, tmall.com. Доставляем грузы
							из
							других китайских сайтов и работаем с покупкой по инвойсу. Минимальная сумма заказа 4000
							юаней.
						</p>
						<div class="home_second_texts_numbers">
							<div>
								<div class="home_second_texts_number">
									<h3>на 557 179 352 ¥</h3>
									<p class="default-p">Выкуплено товаров</p>
								</div>
								<div class="home_second_texts_number">
									<h3>1 553 350 кг</h3>
									<p class="default-p">Отправлено</p>
								</div>
								<div class="home_second_texts_number none">
									<h3>43 348</h3>
									<p class="default-p">Грузов доставлено</p>
								</div>
							</div>
							<div class="home_second_texts_sector">
								<div class="home_second_texts_number">
									<h3>56 521</h3>
									<p class="default-p">Клиентов обслужено</p>
								</div>
								<div class="home_second_texts_number">
									<h3>21 день</h3>
									<p class="default-p">Из Китая до Москвы</p>
								</div>

								<div class="home_second_texts_number">
									<h3>12</h3>
									<p class="default-p">Грузов потеряно</p>
								</div>
								<div class="home_second_texts_number none-media">
									<h3>43 348</h3>
									<p class="default-p">Грузов доставлено</p>
								</div>
							</div>
						</div>

						<div class="home_first_texts_buttons home_second_texts_buttons">
							<MainButton  text="Подробнее о компании" @click="goToAboutPage" />
							<SecondaryButton @click="showLicense = true" text="Смотреть лицензии" />
						</div>
					</div>

				</div>
			</div>
		</section>
		<section class="powerful">
			<div class="container">
				<div class="powerful_content">
					<h1 class="default-h1">
						Наши <span>сильные</span> стороны
					</h1>
					<div class="powerful_carts">
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.94026 3.11419L8.20677 3.52168L14.2495 7.30318L16.9974 5.67729C16.9453 5.64471 16.8923 5.61337 16.8382 5.58332L12.3937 3.11419C11.3199 2.5176 10.0141 2.5176 8.94026 3.11419Z"
											fill="white" />
										<path
											d="M4.49582 5.58332L6.40396 4.52325C6.47969 4.71494 6.61516 4.88499 6.80328 5.00272L12.3116 8.44978L11.9296 8.67577L11.9243 8.67892C11.137 9.15132 10.1568 9.16506 9.35655 8.71491L4.16269 5.79328C4.26904 5.71772 4.38018 5.64757 4.49582 5.58332Z"
											fill="white" />
										<path
											d="M2.66699 8.69144C2.66699 8.23182 2.75569 7.78506 2.92084 7.37196C2.9654 7.40851 3.01375 7.44169 3.06572 7.47092L8.376 10.458C8.78517 10.6882 9.22073 10.8503 9.66699 10.9447L9.66699 18.3773L9.66706 18.3885C9.41704 18.3152 9.17319 18.2139 8.94026 18.0845L4.49582 15.6154C3.36705 14.9883 2.66699 13.7985 2.66699 12.5072V8.69144Z"
											fill="white" />
										<path
											d="M11.667 18.3773L11.667 10.9188C12.1127 10.8124 12.5459 10.638 12.9505 10.3956L12.9533 10.3939L18.2874 7.23789C18.3057 7.22706 18.3236 7.21574 18.3409 7.20395C18.5523 7.66276 18.667 8.16879 18.667 8.69144V12.5072C18.667 13.6616 18.1075 14.7348 17.1825 15.3974C17.2569 15.5033 17.3533 15.5964 17.4699 15.6694L22.9782 19.1165L22.5963 19.3424L22.591 19.3456C21.8037 19.818 20.8235 19.8317 20.0232 19.3816L15.0721 16.5965L12.3937 18.0845C12.1608 18.2139 11.9169 18.3152 11.6669 18.3885L11.667 18.3773Z"
											fill="white" />
										<path
											d="M19.6069 13.7809L18.8734 14.1883L24.9161 17.9698L27.6641 16.344C27.612 16.3114 27.5589 16.28 27.5048 16.25L23.0604 13.7809C21.9865 13.1843 20.6808 13.1843 19.6069 13.7809Z"
											fill="white" />
										<path
											d="M13.3337 19.3581C13.3337 18.8985 13.4224 18.4517 13.5875 18.0386C13.6321 18.0752 13.6804 18.1084 13.7324 18.1376L19.0427 21.1247C19.4518 21.3549 19.8874 21.517 20.3337 21.6113V29.0439L20.3337 29.0552C20.0837 28.9819 19.8399 28.8806 19.6069 28.7512L15.1625 26.282C14.0337 25.6549 13.3337 24.4652 13.3337 23.1739V19.3581Z"
											fill="white" />
										<path
											d="M22.3337 29.0439V21.5854C22.7794 21.4791 23.2126 21.3046 23.6172 21.0623L23.62 21.0606L28.9541 17.9046C28.9724 17.8937 28.9902 17.8824 29.0076 17.8706C29.219 18.3294 29.3337 18.8355 29.3337 19.3581V23.1739C29.3337 24.4652 28.6336 25.6549 27.5048 26.282L23.0604 28.7512C22.8275 28.8806 22.5836 28.9819 22.3336 29.0552L22.3337 29.0439Z"
											fill="white" />
									</svg>

								</div>
							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Забота</h3>
								<p class="default-p">Имеем 4 вида упаковки для сохранности груза. Также имеем услугу
									сжатия под прессом объемного груза</p>
							</div>
						</div>
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd"
											d="M15.0633 3.01769L7.06334 6.01769C6.02254 6.40799 5.33301 7.40277 5.33301 8.51435L5.33301 15.9999C5.33304 20.7446 12.0034 25.4894 14.7944 27.267C15.5411 27.7426 16.4714 27.7647 17.2358 27.3182C20.0448 25.6774 26.6663 21.2525 26.6663 15.9999V8.51436C26.6663 7.40277 25.9768 6.40799 24.936 6.01769L16.936 3.01769C16.3323 2.7913 15.667 2.7913 15.0633 3.01769ZM20.0278 14.0521C20.425 13.6684 20.4359 13.0353 20.0522 12.6381C19.6685 12.2409 19.0354 12.23 18.6382 12.6137L15.1956 15.9396L13.3642 14.1552C12.9686 13.7697 12.3355 13.778 11.9501 14.1735C11.5647 14.5691 11.5729 15.2022 11.9685 15.5876L14.4948 18.0492C14.8819 18.4264 15.4987 18.4277 15.8875 18.0521L20.0278 14.0521Z"
											fill="white" />
									</svg>
								</div>


							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Надежность</h3>
								<p class="default-p">Процент утери и конфискации груза составляет всего 0,29 %</p>
							</div>
						</div>
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M23.1426 11.8861C24.332 11.2778 27.3776 9.55362 27.8982 7.60846C28.3683 5.85203 27.1752 4.02704 25.1549 4.00082C25.1132 4.00028 25.0709 4 25.028 4C24.2147 4 23.4886 4.35843 23.0629 4.62343C22.8304 4.76821 22.5036 4.76821 22.271 4.62343C21.8454 4.35843 21.1193 4 20.306 4C20.2631 4 20.2208 4.00028 20.1791 4.00082C18.1588 4.02704 16.9657 5.85203 17.4358 7.60846C17.9564 9.55362 21.002 11.2778 22.1914 11.8861C22.4885 12.038 22.8455 12.038 23.1426 11.8861Z"
											fill="white" />
										<path
											d="M2.66699 12V25.3333C2.66699 26.0697 3.15541 26.6667 3.7579 26.6667H7.57608C8.17858 26.6667 8.66699 26.0697 8.66699 25.3333V23.4864C9.01843 23.6798 9.45983 23.7123 9.86615 23.5069C10.3643 23.255 10.9624 23.3621 11.4285 23.6692C15.1983 26.1528 25.5055 26.6108 28.9378 19.6699C30.1275 17.2641 28.523 17.6833 25.6283 18.4395C23.5929 18.9713 20.9197 19.6697 18.1314 19.6699C17.4491 19.67 11.4156 18.6659 20.1576 16.2549L20.3074 16.2134C21.9083 15.7685 21.9404 14.2646 20.2789 14.2441C19.5229 14.2347 18.6651 14.3433 17.8262 14.4494C16.7041 14.5913 15.6159 14.729 14.8503 14.5748C14.5124 14.5067 14.21 14.3353 13.9068 14.1635C13.7043 14.0487 13.5014 13.9337 13.2873 13.8491C12.1335 13.3932 11.0988 13.2688 10.2127 13.3624C9.54208 13.4333 9.02925 13.7858 8.66699 14.2888V12C8.66699 11.2636 8.17858 10.6667 7.57608 10.6667H3.7579C3.15541 10.6667 2.66699 11.2636 2.66699 12Z"
											fill="white" />
									</svg>

								</div>

							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Доверие</h3>
								<p class="default-p">Компенсируем утерянный груз без оформления страховки. 4$ за
									1 кг + сумма оплаченной доставки</p>
							</div>
						</div>
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.00033 2.66699H16.0003C17.4731 2.66699 18.667 3.8609 18.667 5.33366V16.0003C18.667 17.4731 17.4731 18.667 16.0003 18.667H5.33366C3.8609 18.667 2.66699 17.4731 2.66699 16.0003V14.0003H12.0003C13.1049 14.0003 14.0003 13.1049 14.0003 12.0003C14.0003 10.8958 13.1049 10.0003 12.0003 10.0003H8.00033C9.1049 10.0003 10.0003 9.1049 10.0003 8.00033C10.0003 6.89576 9.1049 6.00033 8.00033 6.00033H3.05467C3.84585 4.04577 5.76207 2.66699 8.00033 2.66699Z"
											fill="white" />
										<path
											d="M11.3337 28.667C13.1746 28.667 14.667 27.1746 14.667 25.3337C14.667 23.4927 13.1746 22.0003 11.3337 22.0003C9.49271 22.0003 8.00033 23.4927 8.00033 25.3337C8.00033 27.1746 9.49271 28.667 11.3337 28.667Z"
											fill="white" />
										<path
											d="M24.667 25.3337C24.667 27.1746 23.1746 28.667 21.3337 28.667C19.4927 28.667 18.0003 27.1746 18.0003 25.3337C18.0003 23.4927 19.4927 22.0003 21.3337 22.0003C23.1746 22.0003 24.667 23.4927 24.667 25.3337Z"
											fill="white" />
										<path
											d="M6.66699 20.0008H17.3337C18.8064 20.0008 20.0003 18.8069 20.0003 17.3341V5.50879C21.2386 5.8345 22.335 6.60006 23.0673 7.68727L23.6685 8.57982C23.2988 8.74076 22.9602 8.97075 22.677 9.23955C22.1122 9.7757 21.667 10.5627 21.667 11.4878V14.0006C21.667 16.9421 23.6683 19.6673 26.5188 19.6673H28.0003V21.3335C28.0003 22.8258 27.1831 24.1272 25.9718 24.8147C25.7137 22.4815 23.7356 20.6669 21.3337 20.6669C18.7563 20.6669 16.667 22.7562 16.667 25.3335H16.0003C16.0003 22.7562 13.911 20.6669 11.3337 20.6669C9.5045 20.6669 7.92114 21.7192 7.15601 23.2516C6.84425 22.6821 6.66699 22.0285 6.66699 21.3335V20.0008Z"
											fill="white" />
										<path
											d="M24.8003 10.334H24.85L27.5454 14.3355C27.8419 14.7757 28.0003 15.2944 28.0003 15.8253V17.6673H26.5188C25.1148 17.6673 23.667 16.2138 23.667 14.0006V11.4878C23.667 11.2234 23.7975 10.9335 24.0539 10.6901C24.3194 10.4381 24.6167 10.334 24.8003 10.334Z"
											fill="white" />
										<path
											d="M1.66699 8.00033C1.66699 7.44804 2.11471 7.00033 2.66699 7.00033H8.00033C8.55261 7.00033 9.00033 7.44804 9.00033 8.00033C9.00033 8.55261 8.55261 9.00033 8.00033 9.00033H2.66699C2.11471 9.00033 1.66699 8.55261 1.66699 8.00033Z"
											fill="white" />
										<path
											d="M2.66699 11.0003C2.11471 11.0003 1.66699 11.448 1.66699 12.0003C1.66699 12.5526 2.11471 13.0003 2.66699 13.0003H12.0003C12.5526 13.0003 13.0003 12.5526 13.0003 12.0003C13.0003 11.448 12.5526 11.0003 12.0003 11.0003H2.66699Z"
											fill="white" />
									</svg>
								</div>


							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Удобство </h3>
								<p class="default-p">Доставим товар удобным вам способом из 3х предложенных</p>
							</div>
						</div>
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M11.8103 6.32741L13.4099 5.43874C15.0207 4.54386 16.9793 4.54386 18.5901 5.43874L25.2568 9.14244C25.5 9.27759 25.73 9.43015 25.9455 9.59809L21.3663 12.3075L11.8103 6.32741Z"
											fill="white" />
										<path
											d="M10.0481 7.30642L6.74324 9.14244C6.40917 9.32804 6.10013 9.54649 5.81925 9.79249C5.82071 9.79329 5.82216 9.7941 5.82361 9.79492L13.789 14.2756C15.146 15.0389 16.8081 15.0156 18.1431 14.2146L18.1484 14.2114L19.4283 13.4541L10.4695 7.84769C10.2614 7.71746 10.1177 7.52318 10.0481 7.30642Z"
											fill="white" />
										<path
											d="M4.60007 11.3468C4.21236 12.0934 4 12.9336 4 13.8046V19.5283C4 21.4652 5.05009 23.2498 6.74324 24.1905L13.4099 27.8942C13.916 28.1754 14.4564 28.3682 15.0096 28.4727C15.0033 28.4271 15 28.3806 15 28.3333V16.766C14.2415 16.6555 13.498 16.4066 12.8085 16.0187L4.84306 11.5381C4.75018 11.4858 4.66887 11.421 4.60007 11.3468Z"
											fill="white" />
										<path
											d="M17 16.7383V28.3333C17 28.3806 16.9967 28.4271 16.9904 28.4727C17.5436 28.3682 18.084 28.1754 18.5901 27.8942L25.2568 24.1905C26.9499 23.2498 28 21.4652 28 19.5283V13.8046C28 12.8462 27.7429 11.925 27.2779 11.1249C27.2457 11.1497 27.2117 11.1728 27.1759 11.194L19.1721 15.9296L19.1693 15.9312C18.491 16.3378 17.7549 16.607 17 16.7383Z"
											fill="white" />
									</svg>
								</div>


							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Качество </h3>
								<p class="default-p">Проверим визуально состояние вашего груза. При доплате выполним
									любые пожелания по проверке</p>
							</div>
						</div>
						<div class="powerful_cart">
							<div class="powerful_cart_top">
								<div class="powerful_cart_top_icon">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.3333 14.6665C19.3333 16.5075 17.841 17.9998 16 17.9998C14.1591 17.9998 12.6667 16.5075 12.6667 14.6665C12.6667 12.8256 14.1591 11.3332 16 11.3332C17.841 11.3332 19.3333 12.8256 19.3333 14.6665Z"
											fill="white" />
										<path fill-rule="evenodd" clip-rule="evenodd"
											d="M17.9308 28.4024C23.106 25.5877 27.4059 20.5724 28 14.6665C28 8.03909 22.6274 2.6665 16 2.6665C9.37258 2.6665 4 8.03909 4 14.6665C4.59879 20.6192 8.45625 25.6671 14.0378 28.4689C15.2677 29.0863 16.7219 29.0599 17.9308 28.4024ZM21.3333 14.6665C21.3333 17.612 18.9455 19.9998 16 19.9998C13.0545 19.9998 10.6667 17.612 10.6667 14.6665C10.6667 11.721 13.0545 9.33317 16 9.33317C18.9455 9.33317 21.3333 11.721 21.3333 14.6665Z"
											fill="white" />
									</svg>
								</div>


							</div>
							<div class="powerful_cart_texts">
								<h3 class="default-h3">Местоположение </h3>
								<p class="default-p">Имеем 2 собственных склада в крупных городах Китая — в Гуанчжоу
									и Иу</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>

		<section class="five_steps">
			<div class="container">
				<div class="five_steps_content">
					<h1 class="default-h1">
						<span>5 шагов</span> от покупки до получения груза
					</h1>

					<div class="five_steps_steps">
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[01]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts">
								<h3 class="default-h3">
									Формируете заказ и вносите оплату
								</h3>
								<p class="default-p">
									Связываемся с поставщиками, узнаём о наличии товара и выкупаем ваш заказ
								</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[02]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts_line"></div>

							<div class="five_steps_step_texts">
								<h3 class="default-h3">Выставляем счет на отправку</h3>
								<p class="default-p">Получение груза на складе в Китае</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[03]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts_line"></div>
							<div class="five_steps_step_texts_line_mobile_1"></div>
							<div class="five_steps_step_texts_line_mobile_2"></div>
							<div class="five_steps_step_texts">
								<h3 class="default-h3">Упаковываем груз для отправки</h3>
								<p class="default-p">Отправляем товар в Россию и выставляем счёт за доставку</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[04]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts">
								<h3 class="default-h3">Груз проходит таможню из Китая в Казахстан и далее Казахстан
									Россия г. Москва</h3>
								<p class="default-p">Сроки доставки согласно выбраним тарифам при оформлении заказа</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[05]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts">
								<h3 class="default-h3">При получении груза в Москве (Южные ворота)</h3>
								<p class="default-p">Груз передаётся в транспортную компанию до вашего города</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number"></h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts_line_second"></div>
							<div class="five_steps_step_texts">

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="delivery">
			<div class="delivery_content">
				<div class="delivery_bg">
					<div class="delivery_bg_texts container">
						<h1 class="default-h1">Варианты доставки</h1>
						<p class="default-p">Расчет доставки зависит от способа доставки, категории, веса и объема
							товара</p>
					</div>
					<div class="delivery_absolute container">
						<div class="delivery_absolute_left">
							<h4>Авиа доставка</h4>
							<p>Из Китая в Россию, Белорусию и Казахстан от 8 до 12 дней. Минимальный вес для
								отправки Авиа 10кг. Стоимость варьируется от конкретных позиций</p>
							<div class="delivery_absolute_left_list">
								<div class="delivery_absolute_left_list_item">
									<div></div>
									<span class="default-p"> Одежда и сумки — 12$</span>
								</div>
								<div class="delivery_absolute_left_list_item">
									<div></div>
									<span class="default-p">Прочее — 12,5$</span>
								</div>
								<div class="delivery_absolute_left_list_item">
									<div></div>
									<span class="default-p">Обувь — 12,5$</span>
								</div>
								<div class="delivery_absolute_left_list_item">
									<div></div>
									<span class="default-p">Майнеры/Видеокарта — 13$</span>
								</div>
								<div class="delivery_absolute_left_list_item">
									<div></div>
									<span class="default-p">Чай/Продукты питания — 14$</span>
								</div>
							</div>
						</div>
						<div class="delivery_absolute_right">
							<div class="delivery_absolute_right_item">
								<h2>Авто доставка через Казахстан</h2>
								<p class="default-p">От 15 до 30 дней. От 2,5$ за кг</p>
							</div>
							<div class="delivery_absolute_right_item">
								<h2>Авто доставка через Киргизию</h2>
								<p class="default-p">От 25-50 дней. От 2$ за кг</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="oplata">
			<div class="container">
				<div class="oplata_content">
					<h1 class="default-h1">Оплата происходит <span>этапами</span></h1>
					<div class="five_steps_steps">
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[01]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts">

								<p class="default-p">
									При выкупе с китайских интернет площадок: Вы вносите оплату за товар и за услуги
									выкупа (2% от общей стоимости). Сюда входит оплата доставки товара до наших складов
									в Китае и услуги оператора, 1 юань с каждой позиции заказа
								</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[02]</h3>
								<div></div>
							</div>
							<div class="five_steps_step_texts_line"></div>

							<div class="five_steps_step_texts">

								<p class="default-p">После принятия посылки на складе, вы оплачиваете ее доставку из
									Китая в Россию по одному из тарифов</p>
							</div>
						</div>
						<div class="five_steps_step">
							<div class="five_steps_step_top">
								<h3 class="default-h3 five_steps_step_number">[03]</h3>
								<div></div>
							</div>
							<!-- <div class="five_steps_step_texts_line"></div>
							<div class="five_steps_step_texts_line_mobile_1"></div>
							<div class="five_steps_step_texts_line_mobile_2"></div> -->
							<div class="five_steps_step_texts">

								<p class="default-p">Доставка по России оплачивается при получении товара. Пункт 2 и 3
									относятся к выкупу с китайских интернет площадок и к карго доставке</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="wb_ozon">
			<div class="container">
				<div class="wb_ozon_content">
					<h1 class="default-h1">Карго доставка идеально подходит для бизнеса на <span>Wildberries</span> и
						<span>Ozon</span>
					</h1>
					<div class="wb_ozon_content_bottom">
						<div class="wb_ozon_content_bottom_left">
							<p class="default-p">Выкупаем розницей и оптом товар от любого китайского производителя и
								доставляем до склада в Москве. Весь товар проверяем на наличие дефектов и при
								необходимости
								высылаем фотографии. Качество продукции будет на высшем уровне и хорошие отзывы
								покупателей
								не заставят себя ждать. 
								China Town отличный посредник не только в выкупе и карго доставке, но и для вашего
								бизнеса
								на маркетплейсах, оставляйте заявку на звонок и убедитесь в этом сами</p>
							<MainButton text="Позвоните мне" />
						</div>
						<div class="wb_ozon_content_bottom_right">
							<div>
								<svg width="226" height="27" viewBox="0 0 226 27" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_215_23773)">
										<path
											d="M8.2268 26.5262L1.38672 0.615723H5.91596L11.1847 20.5105L16.8231 0.615723H21.0288L26.6673 20.6052L31.936 0.615723H36.419L29.5789 26.5262H24.3565L18.8567 7.19993L13.4031 26.5262H8.2268Z"
											fill="#BE11A5" />
										<path d="M39.5615 0.615723H43.8597V26.5262H39.5615V0.615723Z" fill="#BE11A5" />
										<path d="M52.9645 22.4526H63.3633V26.5262H48.7588V0.663086H52.9645V22.4526Z"
											fill="#BE11A5" />
										<path
											d="M76.5811 0.663288C79.8625 0.568551 83.0515 1.94224 85.3161 4.4054C89.984 9.56856 89.984 17.6212 85.3161 22.7843C83.0515 25.2475 79.8625 26.6212 76.5811 26.5264H66.5059V0.663288H76.5811ZM76.5811 22.4528C78.9844 22.4528 80.9717 21.6001 82.4506 19.9422C84.022 18.237 84.8539 15.9159 84.7615 13.5949C84.8539 11.2264 84.022 8.95277 82.4506 7.2475C80.9255 5.58961 78.7995 4.64224 76.5811 4.73698H70.7116V22.4528H76.5811Z"
											fill="#BE11A5" />
										<path
											d="M111.383 19.1369C111.429 21.1264 110.597 23.0685 109.164 24.3948C107.685 25.8159 105.744 26.5738 103.711 26.5264H92.7573V0.663229H102.925C104.866 0.61586 106.761 1.37376 108.24 2.70007C109.673 3.97902 110.458 5.87376 110.412 7.81586C110.505 9.90007 109.488 11.8896 107.824 13.0738C110.042 14.2106 111.429 16.579 111.383 19.1369ZM96.963 4.64218V11.4632H102.925C104.774 11.4632 106.253 9.94744 106.253 8.05271C106.253 6.15797 104.774 4.64218 102.925 4.64218H96.963ZM103.711 22.5001C105.652 22.4053 107.177 20.7474 107.085 18.758C107.038 16.8632 105.513 15.3474 103.711 15.3001H96.963V22.5474L103.711 22.5001Z"
											fill="#BE11A5" />
										<path
											d="M119.609 22.4526H130.932V26.5262H115.403V0.663086H130.747V4.73677H119.609V11.4631H129.869V15.4894H119.609V22.4526Z"
											fill="#BE11A5" />
										<path
											d="M149.28 26.5266L143.827 17.1002H138.882V26.5266H134.676V0.616038H144.936C147.108 0.568669 149.234 1.46867 150.759 3.07919C152.331 4.59498 153.209 6.72656 153.162 8.95288C153.116 12.2687 151.129 15.2529 148.079 16.4371L153.902 26.5266H149.28ZM138.882 4.64235V13.3108H144.89C147.201 13.216 149.003 11.1792 148.911 8.7634C148.818 6.53709 147.062 4.73709 144.89 4.64235H138.882Z"
											fill="#BE11A5" />
										<path
											d="M171.695 26.5266L166.288 17.1002H161.343V26.5266H157.137V0.616038H167.397C169.57 0.568669 171.695 1.46867 173.221 3.07919C174.792 4.59498 175.67 6.72656 175.624 8.95288C175.578 12.2687 173.59 15.2529 170.54 16.4371L176.363 26.5266H171.695ZM161.343 4.64235V13.3108H167.351C169.708 13.1687 171.464 11.1318 171.326 8.71603C171.187 6.53709 169.477 4.73709 167.351 4.64235H161.343Z"
											fill="#BE11A5" />
										<path d="M179.414 0.615723H183.619V26.5262H179.414V0.615723Z" fill="#BE11A5" />
										<path
											d="M192.77 22.4526H204.093V26.5262H188.564V0.663086H203.908V4.73677H192.77V11.4631H203.03V15.4894H192.77V22.4526Z"
											fill="#BE11A5" />
										<path
											d="M207.051 20.6526L210.702 18.521C211.719 21.4578 213.845 22.8789 217.034 22.8789C220.223 22.8789 221.794 21.5052 221.794 19.4684C221.841 18.521 221.332 17.5736 220.5 17.0999C219.668 16.5315 218.143 15.9157 215.971 15.2526C213.522 14.4947 212.32 14.021 210.61 12.8841C208.9 11.7473 208.114 9.99467 208.114 7.67362C208.022 5.58941 208.946 3.55256 210.518 2.22625C212.135 0.852563 214.215 0.142036 216.341 0.189404C220.177 0.0472988 223.689 2.32098 225.261 5.87361L221.748 7.91046C220.685 5.54204 218.883 4.31046 216.387 4.31046C213.891 4.31046 212.366 5.54204 212.366 7.53151C212.366 9.52098 213.614 10.3262 217.542 11.5578C218.513 11.8894 219.206 12.1262 219.668 12.3157C220.131 12.5052 220.778 12.742 221.563 13.0736C222.21 13.3105 222.857 13.6894 223.412 14.1157C224.752 15.2052 226.231 16.9578 226.046 19.421C226.139 21.5999 225.214 23.6368 223.551 25.0105C221.887 26.3841 219.715 27.0473 216.988 27.0473C211.95 26.9999 208.345 24.5841 207.051 20.6526Z"
											fill="#BE11A5" />
									</g>
									<defs>
										<clipPath id="clip0_215_23773">
											<rect width="226" height="27" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div>
								<svg width="164" height="37" viewBox="0 0 164 37" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M23.3333 27.5022C27.3295 26.9898 30.5576 23.7253 31.0675 19.6809C31.2455 18.3005 31.1076 16.8972 30.6643 15.5793C30.221 14.2613 29.4843 13.064 28.5109 12.0796C27.5375 11.0953 26.3535 10.3502 25.0502 9.90193C23.7469 9.45366 22.3592 9.31415 20.9942 9.49417C16.9948 10.0098 13.7666 13.2743 13.26 17.3155C13.0819 18.6959 13.2199 20.0992 13.6632 21.4171C14.1065 22.7351 14.8432 23.9324 15.8166 24.9168C16.79 25.9011 17.974 26.6462 19.2773 27.0945C20.5806 27.5428 21.9682 27.6823 23.3333 27.5022ZM23.8782 1.5665C27.7256 1.97608 31.3173 3.7089 34.0528 6.47524C36.7884 9.24158 38.5019 12.8737 38.9069 16.7644C39.9617 27.528 31.0898 36.4998 20.4429 35.4331C16.5961 35.0229 13.0051 33.2897 10.2702 30.5235C7.53532 27.7572 5.82225 24.1254 5.41736 20.2352C4.36254 9.47162 13.2345 0.499812 23.8782 1.5665ZM47.9382 2.24003H72.575C73.5119 2.24003 74.0409 3.32284 73.4768 4.07693L56.4309 26.819H69.7865C72.2212 26.819 74.1365 29.0588 73.633 31.6111C73.2633 33.4834 71.5265 34.7596 69.64 34.7596H42.884C41.9566 34.7596 41.4308 33.6865 41.9885 32.942L59.0472 10.1806H48.0848C46.1982 10.1806 44.4614 8.90121 44.0918 7.03208C43.5851 4.47976 45.5035 2.24003 47.9382 2.24003ZM154.857 2.33027C157.4 1.78886 159.637 3.73533 159.637 6.21031V33.6123C159.637 34.5695 158.544 35.1012 157.805 34.5082L136.552 17.4573V30.7958C136.552 33.2707 134.315 35.2172 131.772 34.6758C129.949 34.2891 128.7 32.5714 128.7 30.6894V3.38407C128.7 2.42695 129.793 1.89521 130.532 2.48818L151.788 19.5391V6.31666C151.788 4.43464 153.04 2.72021 154.86 2.33027H154.857ZM99.5189 1.47949C112.53 1.47949 123.079 9.09779 123.079 18.495C123.079 27.8922 112.53 35.5105 99.5189 35.5105C86.5074 35.5105 75.9593 27.8922 75.9593 18.495C75.9593 9.09779 86.5074 1.47949 99.5189 1.47949ZM99.5189 9.42005C90.5291 9.42005 83.8114 14.2121 83.8114 18.495C83.8114 22.7779 90.5291 27.5699 99.5189 27.5699C108.509 27.5699 115.226 22.7811 115.226 18.495C115.226 14.2089 108.509 9.42005 99.5189 9.42005Z"
										fill="#005BFF" />
								</svg>

							</div>
						</div>
					</div>
				</div>

			</div>
		</section>

		<section class="team">
			<div class="container">
				<div class="team_content">
					<h1 class="default-h1">Наша <span>команда</span></h1>
					<div class="team_members">
						<div class="team_member">
							<div class="team_member_texts">
								<b>Алексей</b>
								<p class="default-p">Развитие речи и тайских филиалов</p>
							</div>
							<img src="../../../public/images/aleksei.png" alt="">
						</div>
						<div class="team_member">
							<div class="team_member_texts">
								<b>Андрей Джао</b>
								<p class="default-p">
									Развитие российских филиалов
								</p>
							</div>
							<img src="../../../public/images/andrei.png" alt="">

						</div>
						<div class="team_member">
							<div class="team_member_texts">
								<b>Джао Джи</b>
								<p class="default-p">Развитие филиала в городе Иу</p>
							</div>
							<img src="../../../public/images/jao.png" alt="">
						</div>
						<div class="team_member">
							<div class="team_member_texts">
								<b>Гуо Миа Линь</b>
								<p class="default-p">Развитие филиала в городе Гуанчжоу</p>
							</div>
							<img src="../../../public/images/guo.png" alt="">

						</div>
					</div>
				</div>

			</div>
		</section>

		<section class="reviews">
			<div class="container">
				<div class="reviews_content">
					<h1 class="default-h1">Отзывы наших <span>клиентов</span></h1>
				</div>
				<div class="reviews_reviews_div">
					<div class="reviews_reviews_div_top">
						<div class="reviews_reviews_div_top_left">
							<a :class="{ active: activeTab === 'text', inactive: activeTab !== 'text' }"
								@click="switchTab('text')">Отзывы</a>
							<a :class="{ active: activeTab === 'video', inactive: activeTab !== 'video' }"
								@click="switchTab('video')">Видеоотзывы</a>
						</div>
						<div class="reviews_reviews_div_top_right">
							<div class="reviews_buttons">
								<div class="reviews_button"
									:class="{ inactive: isLeftButtonInactive, active: !isLeftButtonInactive }"
									@click="showPreviousReview" :disabled="isLeftButtonInactive">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M19 9L12 16L19 23" stroke="" stroke-linecap="round" />
									</svg>
								</div>
								<div class="reviews_button"
									:class="{ inactive: isRightButtonInactive, active: !isRightButtonInactive }"
									@click="showNextReview" :disabled="isRightButtonInactive">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M12 9L19 16L12 23" stroke="" stroke-linecap="round" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="reviews_reviews_div_reviews">
						<div v-if="activeTab === 'text'" class="reviews_reviews_div_reviews">
							<div class="review" v-for="review in currentTextReviews" :key="review.id">
								<div class="review_top">
									<div class="review_user">
										<img :src="review.userImage" alt="">
										<h2>{{ review.userName }}</h2>
									</div>
									<div class="review_location">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M9.66667 7.33301C9.66667 8.25348 8.92048 8.99967 8 8.99967C7.07953 8.99967 6.33333 8.25348 6.33333 7.33301C6.33333 6.41253 7.07953 5.66634 8 5.66634C8.92048 5.66634 9.66667 6.41253 9.66667 7.33301Z"
												fill="#EF0000" />
											<path fill-rule="evenodd" clip-rule="evenodd"
												d="M8.96542 14.201C11.553 12.7936 13.703 10.2859 14 7.33301C14 4.0193 11.3137 1.33301 8 1.33301C4.68629 1.33301 2 4.0193 2 7.33301C2.2994 10.3094 4.22812 12.8333 7.0189 14.2342C7.63384 14.5429 8.36097 14.5297 8.96542 14.201ZM10.6667 7.33301C10.6667 8.80577 9.47276 9.99967 8 9.99967C6.52724 9.99967 5.33333 8.80577 5.33333 7.33301C5.33333 5.86025 6.52724 4.66634 8 4.66634C9.47276 4.66634 10.6667 5.86025 10.6667 7.33301Z"
												fill="#EF0000" />
										</svg>
										<p class="default-p">{{ review.location }}</p>
									</div>
								</div>
								<div class="review_text">
									<p class="default-p">{{ review.text }}</p>
								</div>
								<div class="review_bottom">
									<a v-if="review.images.length > 0" @click="showImages(review.images)">Смотреть фото
										груза</a>
								</div>
							</div>
						</div>

						<div v-if="activeTab === 'video'" class="reviews_reviews_div_reviews">
							<div class="review_video" v-for="review in currentVideoReviews" :key="review.id"
								:style="{ backgroundImage: `url(${review.videoImage})` }"
								@click="showVideo(review.videoUrl)">
								<svg width="56" height="56" viewBox="0 0 56 56" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect width="56" height="56" rx="28" fill="white" />
									<path
										d="M21 22.6958V33.3042C21 37.0484 25.3337 39.2817 28.5691 37.2048L36.8321 31.9005C39.7227 30.045 39.7227 25.955 36.8321 24.0995L28.5691 18.7952C25.3337 16.7183 21 18.9516 21 22.6958Z"
										fill="#EF0000" />
								</svg>
							</div>
						</div>
					</div>
					<div class="review_mobile_buttons">
						<div class="reviews_buttons">
							<div class="reviews_button"
								:class="{ inactive: isLeftButtonInactive, active: !isLeftButtonInactive }"
								@click="showPreviousReview" :disabled="isLeftButtonInactive">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M19 9L12 16L19 23" stroke="" stroke-linecap="round" />
								</svg>
							</div>
							<div class="reviews_button"
								:class="{ inactive: isRightButtonInactive, active: !isRightButtonInactive }"
								@click="showNextReview" :disabled="isRightButtonInactive">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M12 9L19 16L12 23" stroke="" stroke-linecap="round" />
								</svg>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>

		<section class="news">
			<div class="container">
				<div class="news_content">
					<h1 class="default-h1"><span>Актуальные</span> новости</h1>
					<div class="news_news">
						<div class="news_item">
							<div class="news_item_date">
								<p class="default-p">26 марта 2024</p>
							</div>
							<div class="news_item_texts">
								<h3 class="default-h3">Курс 13.5 = 1 юань</h3>
								<p class="default-p">Уважаемые клиенты 21.03.2024 года  курс на нашем сайте  равен
									13.45  руб за 1 юань .Все новые зачисления принимаем по актуальному курсу</p>
							</div>
						</div>

						<div class="news_item">
							<div class="news_item_date">
								<p class="default-p">26 марта 2024</p>
							</div>
							<div class="news_item_texts">
								<h3 class="default-h3">Курс 13.5 = 1 юань</h3>
								<p class="default-p">Уважаемые клиенты 21.03.2024 года  курс на нашем сайте  равен
									13.45  руб за 1 юань .Все новые зачисления принимаем по актуальному курсу</p>
							</div>
						</div>

						<div class="news_item">
							<div class="news_item_date">
								<p class="default-p">26 марта 2024</p>
							</div>
							<div class="news_item_texts">
								<h3 class="default-h3">Курс 13.5 = 1 юань</h3>
								<p class="default-p">Уважаемые клиенты 21.03.2024 года  курс на нашем сайте  равен
									13.45  руб за 1 юань .Все новые зачисления принимаем по актуальному курсу</p>
							</div>
						</div>
						<div class="see_all_news">
							<a href="">Смотреть все</a>
						</div>
					</div>

				</div>
			</div>

		</section>
		<div class="absolute_buttons">
			<div  @click="goToOrderPage()" class="absolute_button absolute_button_1">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M23.0032 17.7728C21.9405 17.1655 20.6446 17.1295 19.5499 17.6769L19.0236 17.94C17.1204 18.8916 14.8803 18.8916 12.9771 17.9401L12.4508 17.6769C11.356 17.1295 10.0601 17.1655 8.99743 17.7728L8.58346 18.0093C7.84118 18.4335 7.01768 18.6472 6.19455 18.6534L6.77928 23.6235C7.09527 26.3095 9.37162 28.3337 12.0761 28.3337L12.3334 28.3337V24.3337C12.3334 22.3087 13.975 20.6671 16.0001 20.6671C18.0251 20.6671 19.6667 22.3087 19.6667 24.3337V28.3337L20.5908 28.3337C23.2952 28.3337 25.5716 26.3095 25.8876 23.6235L26.4771 18.6122C25.4377 18.7481 24.3617 18.549 23.4172 18.0093L23.0032 17.7728Z"
						fill="white" />
					<path
						d="M17.6667 28.3337V24.3337C17.6667 23.4132 16.9205 22.6671 16.0001 22.6671C15.0796 22.6671 14.3334 23.4132 14.3334 24.3337V28.3337H17.6667Z"
						fill="white" />
					<path
						d="M18.9271 4.15482L17.3153 3.88619C16.4445 3.74106 15.5557 3.74106 14.6849 3.88619L13.053 4.15819L12.9936 4.75032L11.6589 14.9191L11.6583 14.9242L11.5905 15.4622L12.4224 15.8781C14.6746 17.0042 17.3256 17.0042 19.5778 15.8781L20.4097 15.4622L20.342 14.9242L20.3413 14.9191L19.0086 4.7655L18.9271 4.15482Z"
						fill="white" />
					<path
						d="M22.4476 15.637L24.9668 17.0765C25.6001 17.4384 26.3835 17.4114 26.9904 17.0068C27.6074 16.5955 27.9334 15.8664 27.8285 15.1323L26.8354 8.18064C26.7281 7.42959 26.306 6.7598 25.6747 6.33896L23.3386 4.78153C22.9005 4.48949 22.3859 4.33366 21.8594 4.33366H20.9687L20.9916 4.50523L22.3256 14.6691L22.4476 15.637Z"
						fill="white" />
					<path
						d="M9.55267 15.637L9.67463 14.6691L9.67529 14.664L11.0066 4.52041L11.0254 4.33366H10.1409C9.61439 4.33366 9.0997 4.4895 8.66166 4.78153L6.3255 6.33896C5.69425 6.7598 5.27213 7.42959 5.16484 8.18064L4.17175 15.1323C4.06688 15.8664 4.39287 16.5955 5.00989 17.0068C5.61677 17.4114 6.40015 17.4384 7.03343 17.0765L9.55267 15.637Z"
						fill="white" />
				</svg>
				<span>Выкуп товара</span>

			</div>
			<div @click="goToGruzPage()" class="absolute_button absolute_button_2">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.8103 6.32741L13.4099 5.43874C15.0207 4.54386 16.9793 4.54386 18.5901 5.43874L25.2568 9.14244C25.5 9.27759 25.73 9.43015 25.9455 9.59809L21.3663 12.3075L11.8103 6.32741Z"
						fill="white" />
					<path
						d="M10.0481 7.30642L6.74324 9.14244C6.40917 9.32804 6.10013 9.54649 5.81925 9.79249C5.82071 9.79329 5.82216 9.7941 5.82361 9.79492L13.789 14.2756C15.146 15.0389 16.8081 15.0156 18.1431 14.2146L18.1484 14.2114L19.4283 13.4541L10.4695 7.84769C10.2614 7.71746 10.1177 7.52318 10.0481 7.30642Z"
						fill="white" />
					<path
						d="M4.60007 11.3468C4.21236 12.0934 4 12.9336 4 13.8046V19.5283C4 21.4652 5.05009 23.2498 6.74324 24.1905L13.4099 27.8942C13.916 28.1754 14.4564 28.3682 15.0096 28.4727C15.0033 28.4271 15 28.3806 15 28.3333V16.766C14.2415 16.6555 13.498 16.4066 12.8085 16.0187L4.84306 11.5381C4.75018 11.4858 4.66887 11.421 4.60007 11.3468Z"
						fill="white" />
					<path
						d="M17 16.7383V28.3333C17 28.3806 16.9967 28.4271 16.9904 28.4727C17.5436 28.3682 18.084 28.1754 18.5901 27.8942L25.2568 24.1905C26.9499 23.2498 28 21.4652 28 19.5283V13.8046C28 12.8462 27.7429 11.925 27.2779 11.1249C27.2457 11.1497 27.2117 11.1728 27.1759 11.194L19.1721 15.9296L19.1693 15.9312C18.491 16.3378 17.7549 16.607 17 16.7383Z"
						fill="white" />
				</svg>
				<span>Оформить груз</span>
			</div>

			<div @click="goToChatPage()" class="absolute_button absolute_button_3">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.6667 5.33301H9.33333C6.38781 5.33301 4 7.72082 4 10.6663V17.3181C4 19.5355 5.79753 21.333 8.0149 21.333C8.99154 21.333 9.93415 21.689 10.6667 22.3334V15.9997C10.6667 13.7905 12.4575 11.9997 14.6667 11.9997H24V10.6663C24 7.72082 21.6122 5.33301 18.6667 5.33301Z"
						fill="white" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M25.3333 13.333H14.6667C13.1939 13.333 12 14.5269 12 15.9997V22.9211C12 24.695 13.438 26.133 15.2119 26.133C16.0054 26.133 16.7708 26.4267 17.3606 26.9575L18.2161 27.7275C19.2302 28.6402 20.7698 28.6402 21.7839 27.7275L22.6394 26.9575C23.2292 26.4267 23.9946 26.133 24.7881 26.133C26.562 26.133 28 24.695 28 22.9211V15.9997C28 14.5269 26.8061 13.333 25.3333 13.333ZM17 20.333C17 20.8853 16.5523 21.333 16 21.333C15.4477 21.333 15 20.8853 15 20.333C15 19.7807 15.4477 19.333 16 19.333C16.5523 19.333 17 19.7807 17 20.333ZM20 21.333C20.5523 21.333 21 20.8853 21 20.333C21 19.7807 20.5523 19.333 20 19.333C19.4477 19.333 19 19.7807 19 20.333C19 20.8853 19.4477 21.333 20 21.333ZM25 20.333C25 20.8853 24.5523 21.333 24 21.333C23.4477 21.333 23 20.8853 23 20.333C23 19.7807 23.4477 19.333 24 19.333C24.5523 19.333 25 19.7807 25 20.333Z"
						fill="white" />
				</svg>
				<span>Онлайн чат с оператором</span>
			</div>
		</div>
		<div v-if="showPopupImages" class="popup-overlay">
			<div class="popup_content">
				<div class="popup_close" @click="closePopupImage">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>

				</div>
				<div class="popup_images">
					<img :src="selectedImages[currentImageIndex]" alt="Review Image">
				</div>
				<div class="reviews_buttons buttons_popup">
					<div class="reviews_button"
						:class="{ inactive: currentImageIndex === 0, active: currentImageIndex > 0 }"
						@click="showPreviousImage" :disabled="currentImageIndex === 0">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 9L12 16L19 23" stroke="" stroke-linecap="round" />
						</svg>
					</div>
					<div class="reviews_button"
						:class="{ inactive: currentImageIndex === selectedImages.length - 1, active: currentImageIndex < selectedImages.length - 1 }"
						@click="showNextImage" :disabled="currentImageIndex === selectedImages.length - 1">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 9L19 16L12 23" stroke="" stroke-linecap="round" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div v-if="showLicense" class="popup-overlay">
			<div class="popup_content">
				<div class="popup_close" @click="closeLicnese">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>

				</div>
				<h3 class="default-h3" style="margin-bottom: 10px;">{{ licenses[currentLicense].text }}</h3>
				<div class="popup_images">
					<img :src="licenses[currentLicense].license" alt="Review Image">
				</div>
				<div class="reviews_buttons buttons_popup">
					<div class="reviews_button" :class="{ inactive: currentLicense === 0, active: currentLicense > 0 }"
						@click="showPreviousLicense" :disabled="currentLicense === 0">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 9L12 16L19 23" stroke="" stroke-linecap="round" />
						</svg>
					</div>
					<div class="reviews_button"
						:class="{ inactive: currentLicense === licenses.length - 1, active: currentLicense < licenses.length - 1 }"
						@click="showNextLicense" :disabled="currentLicense === licenses.length - 1">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 9L19 16L12 23" stroke="" stroke-linecap="round" />
						</svg>
					</div>
				</div>
			</div>
		</div>

		<div v-if="showPopupVideo" class="popup-overlay">
			<div class="popup_content" style="height: 90vh !important;">
				<div class="popup_close" @click="closePopupVideo">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
							stroke-linecap="round" />
					</svg>

				</div>
				<div class="popup_video">
					<iframe :src="selectedVideoUrl" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		</div>

	</section>

</template>

<script>
import MainButton from '../../components/MainButton.vue';
import SecondaryButton from '../../components/SecondaryButton.vue';
import olgaImage from '../../../public/images/olga.png';
import sashaImage from '../../../public/images/sasha.png';
import video1 from '../../../public/images/videoImage.png';
import video2 from '../../../public/images/videoImage.png';
import review1 from '../../../public/images/Reviews/review1.jpg';
import review2 from '../../../public/images/Reviews/review2.jpg';
import review3 from '../../../public/images/Reviews/review3.jpg';
import review4 from '../../../public/images/Reviews/review4.jpg';
import review5 from '../../../public/images/Reviews/review5.jpg';
import review6 from '../../../public/images/Reviews/review6.jpg';

import license1 from '../../../public/images/license1png.png';
import license2 from '../../../public/images/license2.png';
import license3 from '../../../public/images/license3.png';

export default {
	name: 'HomePage',
	components: {
		MainButton,
		SecondaryButton
	},
	data() {
		return {
			activeTab: 'text',
			textReviewIndex: 0,
			videoReviewIndex: 0,
			currentImageIndex: 0,
			currentLicense: 0,
			showPopupImages: false,
			showLicense: false,
			showPopupVideo: false,
			selectedVideoUrl: '',
			textReviews: [
				{
					id: 1,
					userName: 'Ольга',
					userImage: olgaImage,
					location: 'Санкт-Петербург',
					text: `Заказывали товар, прекрасный сервис, отзывчивые менеджеры. Полностью рекомендую, однако некоторые позиции не были в наличии, но сервис предупредил заранее. Доставка заняла около месяца. Сервис проверяет качество товара и надёжно упаковывает.
`,
					images: [review1, review2, review3]
				},
				{
					id: 2,
					userName: 'Рукомойникова Александра Сергеевна',
					userImage: sashaImage,
					location: 'Уфа',
					text: 'Получили заказ из Китая, все прошло отлично. Груз доставили быстро, упаковано надежно. Менеджеры подсказывали и отвечали в чате на все интересующие вопросы. Будем делать заказы и в дальнейшем. Товар не повреждён. Спасибо ChinaTown.',
					images: [review4, review5, review6]
				},
				{
					id: 3,
					userName: 'Мария',
					userImage: olgaImage,
					location: 'Москва',
					text: `Сделала первый заказ из Китая с компанией China Towns...`,
					images: []
				},
				{
					id: 4,
					userName: 'Алексей',
					userImage: sashaImage,
					location: 'Казань',
					text: 'Услугами компании пользуемся на протяжении года...',
					images: []
				}
			],
			videoReviews: [
				{
					id: 1,
					userName: 'Ольга',
					videoImage: video1,
					location: 'Санкт-Петербург',
					video: video1,
					videoUrl: 'https://www.youtube.com/embed/UZ9uyQI3pF0'
				},
				{
					id: 2,
					userName: 'Рукомойникова Александра Сергеевна',
					videoImage: video2,
					location: 'Уфа',
					video: video2,
					videoUrl: 'https://www.youtube.com/embed/UZ9uyQI3pF0'
				},
				{
					id: 3,
					userName: 'Рукомойникова Александра Сергеевна',
					videoImage: video2,
					location: 'Уфа',
					video: video2,
					videoUrl: 'https://www.youtube.com/embed/UZ9uyQI3pF0'
				}
			],
			licenses: [
				{
					id: 1,
					text: "Свидетельство о регистрации в России",
					license: license1
				},
				{
					id: 2,
					text: "Свидетельство о регистрации в Китае",
					license: license2

				},
				{
					id: 3,
					text: "Свидетельство о регистрации в Китае",
					license: license3
				}
			]
		};
	},
	computed: {
		currentTextReviews() {
			return window.innerWidth < 1050
				? this.textReviews.slice(this.textReviewIndex, this.textReviewIndex + 1)
				: this.textReviews.slice(this.textReviewIndex, this.textReviewIndex + 2);
		},
		currentVideoReviews() {
			return window.innerWidth < 1050
				? this.videoReviews.slice(this.videoReviewIndex, this.videoReviewIndex + 1)
				: this.videoReviews.slice(this.videoReviewIndex, this.videoReviewIndex + 3);
		},
		isLeftButtonInactive() {
			return (this.activeTab === 'text' && this.textReviewIndex === 0)
				|| (this.activeTab === 'video' && this.videoReviewIndex === 0);
		},
		isRightButtonInactive() {
			return window.innerWidth < 1050 ?
				this.activeTab === 'text' && this.textReviewIndex + 1 >= this.textReviews.length
				|| this.activeTab === 'video' && this.videoReviewIndex + 1 >= this.videoReviews.length
				:
				this.activeTab === 'text' && this.textReviewIndex + 2 >= this.textReviews.length
				|| this.activeTab === 'video' && this.videoReviewIndex + 3 >= this.videoReviews.length
		}
	},
	methods: {
		switchTab(tab) {
			this.activeTab = tab;
		},
		goToAboutPage() {
			this.$router.push('/about');

		},
		
		goToGruzPage() {
		$router.push('/confirm-cargo');
		},
		goToOrderPage() {
		$router.push('/confirm-order');
		},
		goToChatPage() {
		$router.push('/chat');
		},
		showImages(images) {
			this.selectedImages = images;
			this.showPopupImages = true;
			this.currentImageIndex = 0;
		},
		closePopupImage() {
			this.showPopupImages = false;
			this.selectedImages = [];
		},
		closeLicnese() {
			this.showLicense = false;

		},
		showPreviousImage() {
			if (this.currentImageIndex > 0) {
				this.currentImageIndex--;
			}
		},
		showNextImage() {
			if (this.currentImageIndex < this.selectedImages.length - 1) {
				this.currentImageIndex++;
			}
		},
		showPreviousLicense() {
			if (this.currentLicense > 0) {
				this.currentLicense--;
			}
		},
		showNextLicense() {
			if (this.currentLicense < this.licenses.length - 1) {
				this.currentLicense++;
			}
		},
		showPreviousReview() {
			if (this.isLeftButtonInactive) return;
			if (window.innerWidth > 1050) {
				if (this.activeTab === 'text') {
					this.textReviewIndex = Math.max(this.textReviewIndex - 2, 0);
				} else if (this.activeTab === 'video') {
					this.videoReviewIndex = Math.max(this.videoReviewIndex - 3, 0);
				}
			} else {
				if (this.activeTab === 'text') {
					this.textReviewIndex = Math.max(this.textReviewIndex - 1, 0);
				} else if (this.activeTab === 'video') {
					this.videoReviewIndex = Math.max(this.videoReviewIndex - 1, 0);
				}
			}
		},
		showNextReview() {
			if (this.isRightButtonInactive) return;
			if (window.innerWidth > 1050) {
				if (this.activeTab === 'text') {
					this.textReviewIndex = Math.min(this.textReviewIndex + 2, this.textReviews.length - 2);
				} else if (this.activeTab === 'video') {
					this.videoReviewIndex = Math.min(this.videoReviewIndex + 3, this.videoReviews.length - 3);
				}
			} else {
				if (this.activeTab === 'text') {
					this.textReviewIndex = Math.min(this.textReviewIndex + 1, this.textReviews.length - 1);
				} else if (this.activeTab === 'video') {
					this.videoReviewIndex = Math.min(this.videoReviewIndex + 1, this.videoReviews.length - 1);
				}
			}
		},
		showVideo(videoUrl) {
			this.selectedVideoUrl = videoUrl;
			this.showPopupVideo = true;
		},
		closePopupVideo() {
			this.showPopupVideo = false;
			this.selectedVideoUrl = '';
		}
	}
};

</script>

<style src="./homePage.css" lang="css" scoped></style>