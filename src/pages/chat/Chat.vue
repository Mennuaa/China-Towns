	<script setup>

	import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

	const isChatActive = ref(false)
	const isFocused = ref(false)
	const searchQuery = ref('')
	const chatList = ref([
		{
			name: 'Вася Пупкин',
			time: '14:33',
			message: 'Последнее сообщение 1',
			imgSrc: "../../public/images/chatList.png",
			messages: [
				{ id: 1, text: 'Здравствуйте, аааа меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 2, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 3, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 4, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 5, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 6, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 7, text: 'Здравствуйте, меня зовут Вася.', sender: 'Вася', time: '18:10', read: true },
				{ id: 9, text: 'Здравствуйте. Подскажите пожалуйста как я могу оплатить товар?', sender: 'me', time: '18:11', read: true },
			]
		},
		{
			name: 'Петя Иванов',
			time: '15:20',
			message: 'Последнее сообщение 2',
			imgSrc: "../../public/images/chatList.png",
			messages: [
				{ text: 'Привет, это Петя.', sender: 'Петя', time: '15:00', read: false },
				{ text: 'Привет, Петя! Как дела?', sender: 'me', time: '15:01', read: true },
			]
		},
		{
			name: 'Сергей Смирнов',
			time: '16:45',
			message: 'Последнее сообщение 3',
			imgSrc: "../../public/images/chatList.png",
			messages: [
				{ text: 'Здравствуйте, это Сергей.', sender: 'Сергей', time: '16:30', read: true },
				{ text: 'Привет, Сергей! Как помочь вам?', sender: 'me', time: '16:31', read: true },
			]
		},
		{
			name: 'Андрей Кузнецов',
			time: '17:50',
			message: 'Последнее сообщение 4',
			imgSrc: "../../public/images/chatList.png",
			messages: [
				{ text: 'Привет, я Андрей.', sender: 'Андрей', time: '17:40', read: true },
				{ text: 'Привет, Андрей! Что нового?', sender: 'me', time: '17:41', read: true },
			]
		},
		{
			name: 'Мария Васильева',
			time: '18:30',
			message: 'Последнее сообщение 5',
			imgSrc: "../../public/images/chatList.png",
			messages: [
				{ text: 'Здравствуйте, меня зовут Мария.', sender: 'Мария', time: '18:20', read: true },
				{ text: 'Здравствуйте, Мария! Чем могу помочь?', sender: 'me', time: '18:21', read: true },
			]
		},
	])

	const filteredChats = computed(() => {
		if (!searchQuery.value) return chatList.value
		return chatList.value.filter(chat =>
			chat.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			chat.message.toLowerCase().includes(searchQuery.value.toLowerCase())
		)
	})

	const screenWidth = ref(window.innerWidth)
	const activeChat = window.innerWidth > 1200 ? ref(chatList.value[0] || {}) : ref({})

	const toggleChat = (chat) => {

		if (document.querySelector('.dont_show')) {
			hideRight()
		}


		isChatActive.value = !isChatActive.value
		activeChat.value = chat
		nextTick(() => {

		})
	}

	const handleResize = () => screenWidth.value = window.innerWidth

	window.addEventListener('resize', handleResize)
	onMounted(() => handleResize())
	onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

	const isSearchActive = ref(false)
	const searchInput = ref('')
	const searchResults = ref([])
	const currentSearchIndex = ref(0)
	const closeSearchActive = () => {
		document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'))
		isSearchActive.value = false
		searchInput.value = ''
	}
	watch(searchInput, (newValue) => {
		if (!newValue.trim()) {
			searchResults.value = []
			return
		}

		const regex = new RegExp(newValue, 'gi')
		searchResults.value = []

		if (activeChat.value && activeChat.value.messages) {
			activeChat.value.messages.forEach((message, messageIndex) => {
				const matches = [...message.text.matchAll(regex)]
				matches.forEach(match => {
					searchResults.value.push({
						messageIndex,
						startIndex: match.index,
						endIndex: match.index + match[0].length
					})
				})
			})
		}

		currentSearchIndex.value = 0
		nextTick(() => scrollToSearchResult())
	})

	const scrollToSearchResult = () => {
		if (searchResults.value.length > 0) {
			const currentResult = searchResults.value[currentSearchIndex.value];
			const messageElements = document.querySelectorAll('.chat-message p');
			const messageElement = messageElements[currentResult.messageIndex];
			const container = document.querySelector('.chat-messages'); 

			if (messageElement && container) {
				const containerRect = container.getBoundingClientRect();
				const elementRect = messageElement.getBoundingClientRect();
				const offsetTop = elementRect.top - containerRect.top + container.scrollTop;
				container.scrollTo({
					top: offsetTop - container.clientHeight / 2 + elementRect.height / 2,
					behavior: 'smooth'
				});
			}
		}
	};

	const nextSearchResult = () => {
		if (searchResults.value.length > 0) {
			currentSearchIndex.value = (currentSearchIndex.value + 1) % searchResults.value.length;
			nextTick(() => scrollToSearchResult());
		}
	};

	const prevSearchResult = () => {
		if (searchResults.value.length > 0) {
			currentSearchIndex.value = (currentSearchIndex.value - 1 + searchResults.value.length) % searchResults.value.length;
			nextTick(() => scrollToSearchResult());
		}
	};

	const highlightAllSearchTerms = (text, searchTerm) => {
		const regex = new RegExp(searchTerm, 'gi');
		return text.replace(regex, match => `<span class="highlight">${match}</span>`);
	};

	const searchResultDisplay = computed(() => {
		if (searchResults.value.length > 0) {
			return `${currentSearchIndex.value + 1} из ${searchResults.value.length}`;
		} else {
			return '';
		}
	});
	const messageInput = ref('')

	const isSendButtonActive = computed(() => messageInput.value.trim().length > 0)
	const hideRight = () => {
		if (window.innerWidth <= 1200) {
			return toggleChat({})
		}
		activeChat.value = {}

		document.querySelector('.chat_right') ? document.querySelector('.chat_right').classList.toggle('dont_show') : document.querySelector('.chat_right').classList.toggle('active')
		document.querySelector('.chat_left') ? document.querySelector('.chat_left').classList.toggle('left_show') : document.querySelector('.chat_left').classList.toggle('active')
	}

</script>

<template>
	<div class="chat">
		<div class="container">
			<div class="chat_container">
				<div v-show="!isChatActive || screenWidth > 1124" class="chat chat_left">
					<div class="chat_left_header">
						<label for="input" :class="{
							'header-end-search': true,
							'header-search-focused': isFocused,
						}">
							<svg class="header-search" width="16" height="16" viewBox="0 0 16 16" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.6274 10.3057L13.3334 13M11.9998 7C11.9998 4.42268 9.9105 2.33334 7.33317 2.33334C4.75584 2.33334 2.6665 4.42268 2.6665 7C2.6665 9.57734 4.75584 11.6667 7.33317 11.6667C9.9105 11.6667 11.9998 9.57734 11.9998 7Z"
									stroke="#A4B7C0" stroke-width="1.25" stroke-linecap="round" />
							</svg>
							<input id="input" type="text" placeholder="Поиск" @focus="isFocused = true"
								@blur="isFocused = false" v-model="searchQuery" />
						</label>

					</div>
					<div class="chat_left_content">
						<div v-if="filteredChats.length === 0" class="no-chats"><span>Чат не найден</span></div>
						<div v-else>
							<div v-if="searchQuery" class="no-chats"><span>Найдено {{ filteredChats.length }}
									чатов</span></div>
							<div v-for="(chat, index) in filteredChats" :key="index"
								:class="{ 'active': chat === activeChat }" class="chatList" @click="toggleChat(chat)">
								<div class="chat_list_img">
									<img :src="chat.imgSrc" alt=""
										style="width: 55px; height: 55px; border-radius: 10px;" />
								</div>
								<div class="chat_lis_text">
									<div class="chat_list_texts">
										<h3>{{ chat.name }}</h3>
										<span>{{ chat.time }}</span>
									</div>
									<p>{{ chat.message }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="(isChatActive  && chatRightMedia == false) || (screenWidth > 1124 && chatRightMedia == false)"	class="chat chat-body chat_right">
					<div class="chat-header">
						<svg class="chat-icon-back" @click="toggleChat(chat)" width="12" height="22" viewBox="0 0 12 22"
							fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1L1 11L11 21" stroke="white" stroke-width="1.25" stroke-linecap="round" />
						</svg>
						<h2>Онлайн чат с оператором</h2>
						<div class="chat_header_end">
							<svg @click="toggleMediaTab" width="32" height="32" viewBox="0 0 32 32" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 10.2857C7 9.02335 8.00736 8 9.25 8H13.2128C14.1219 8 14.9416 8.55574 15.2905 9.40854L15.4238 9.73432C15.7726 10.5871 16.5924 11.1429 17.5015 11.1429H22.75C23.9927 11.1429 25 12.1662 25 13.4286V21.7143C25 22.9767 23.9927 24 22.75 24H9.25C8.00736 24 7 22.9767 7 21.7143V10.2857Z"
									stroke="white" stroke-width="1.25" stroke-linecap="round" />
							</svg>
							<svg @click="isSearchActive = !isSearchActive" width="32" height="32" viewBox="0 0 32 32"
								fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.4337 20.4533L25 25M22.7496 14.875C22.7496 10.5258 19.2239 7 14.8748 7C10.5257 7 7 10.5258 7 14.875C7 19.2243 10.5257 22.75 14.8748 22.75C19.2239 22.75 22.7496 19.2243 22.7496 14.875Z"
									stroke="white" stroke-linecap="round" />
							</svg>


							<button class="header_chat_left_close_button" @click="hideRight()">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="white"
										stroke-linecap="round" />
								</svg>

							</button>
						</div>
					</div>
					<div class="chat-messages">
						<div v-if="isSearchActive" class="search-container">
							<div class="search-container-buttons">
								<svg @click="nextSearchResult" width="16" height="17" viewBox="0 0 16 17" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10.666 7.16699L7.99935 9.83366L5.33268 7.16699" stroke="#727272"
										stroke-linecap="round" />
								</svg>

								<svg @click="prevSearchResult" width="16" height="17" viewBox="0 0 16 17" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10.666 9.83398L7.99935 7.16732L5.33268 9.83398" stroke="#727272"
										stroke-linecap="round" />
								</svg>


							</div>
							<div class="search-container-content">
								<label for="input" class="
								header-end-search">
									<svg class="header-search" width="16" height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.6274 10.3057L13.3334 13M11.9998 7C11.9998 4.42268 9.9105 2.33334 7.33317 2.33334C4.75584 2.33334 2.6665 4.42268 2.6665 7C2.6665 9.57734 4.75584 11.6667 7.33317 11.6667C9.9105 11.6667 11.9998 9.57734 11.9998 7Z"
											stroke="#A4B7C0" stroke-width="1.25" stroke-linecap="round" />
									</svg>
									<span>{{ searchResultDisplay }}</span>

									<input v-model="searchInput" id="input" type="text" placeholder="Поиск" />
								</label>
								<a @click="closeSearchActive()" class="default-violet">Отмена</a>
							</div>
						</div>

						<div v-if="activeChat">
							<div v-if="searchInput && searchResults.length === 0" class="no-messages">
								<p>Сообщения не найдены</p>
							</div>
							<div v-else>
								<div class="chat-time_stamp">
									<div class="chat-time">Сегодня</div>
								</div>
								<div v-for="(message, index) in activeChat.messages || []" :key="index"
									:class="{ 'chat-message_i': message.sender === 'me' }">
									<div class="chat-message">
										<div v-if="message.sender !== 'me'" class="chat-message-name">
											<span>{{ message.sender }}</span>
											<StarRatingVue v-for="item in items" :key="item.id"
												@rating-submitted="showPopup(message.id)" />
											<div v-if="showPopupFlag === message.id" class="stars-popup">
												<p class="default-">Пожалуйста, оставьте свой комментарий, чтобы мы
													могли
													улучшить качество наших ответов</p>
												<input id="input" type="text" placeholder="Комментарий" />
												<MainButton text="Отправить" @click="closePopup" />
											</div>
										</div>
										<p class="default-p"
											v-html="searchInput ? highlightAllSearchTerms(message.text, searchInput) : message.text">
										</p>
										<div class="chat_message_delivered">
											<span class="chat-message-date">{{ message.time }}</span>
											<svg v-if="message.sender == 'me'" width="16" height="16"
												viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path v-if="message.read"
													d="M9.83533 6.07422L6.06413 9.84549C5.5434 10.3662 4.69921 10.3662 4.17851 9.84549L3 8.66695M13.9556 6.07422L10.1844 9.84549C9.66372 10.3662 8.81953 10.3662 8.29883 9.84549"
													stroke="#EF0000" stroke-linecap="round" />
												<path v-else
													d="M9.83533 6.07422L6.06413 9.84549C5.5434 10.3662 4.69921 10.3662 4.17851 9.84549L3 8.66695"
													stroke="var(--secondary-light)" stroke-linecap="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div class="chat-form">
						<input v-model="messageInput" placeholder="Введите сообщение" class="chat-input" type="text" />
						<div class="chat-icons">
							<div style="display: flex; gap: 24px">
								<svg @click="triggerFileInput" class="chat-icon-file" width="20" height="22"
									viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.10692 16.4174L13.4868 9.3512C13.9348 8.92215 14.1589 8.70764 14.2759 8.47485C14.4856 8.0579 14.4856 7.5722 14.2759 7.15525C14.1589 6.92246 13.9348 6.70794 13.4868 6.27892C13.0387 5.8499 12.8147 5.63538 12.5715 5.52328C12.1361 5.32249 11.6288 5.32248 11.1934 5.52328C10.9502 5.63538 10.7262 5.8499 10.2781 6.27892L2.95178 13.2939C1.85303 14.3459 1.30366 14.872 1.11183 15.4836C0.962722 15.9591 0.962722 16.466 1.11183 16.9414C1.30366 17.5531 1.85303 18.0791 2.95178 19.1312C4.05053 20.1832 4.5999 20.7092 5.2387 20.8929C5.73526 21.0357 6.26468 21.0357 6.76124 20.8929C7.40004 20.7092 7.94941 20.1832 9.0482 19.1312L16.4815 12.0138C17.5258 11.0138 18.048 10.5138 18.3617 9.9937C19.2128 8.58216 19.2128 6.84311 18.3617 5.43161C18.048 4.91147 17.5258 4.41147 16.4815 3.41148C15.4371 2.4115 14.9149 1.9115 14.3717 1.6112C12.8975 0.796268 11.0813 0.796268 9.6071 1.6112C9.0639 1.9115 8.5417 2.4115 7.49733 3.41148L1.5079 9.1464"
										stroke="#A4B7C0" stroke-width="1.5" stroke-linecap="round" />
								</svg>
								<input type="file" ref="fileInput" class="file-input" @change="handleFileChange" />
								<svg class="chat-icon-emoji" width="24" height="24" viewBox="0 0 24 24" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										stroke="#A4B7C0" stroke-width="1.5" />
									<path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
										stroke="#A4B7C0" stroke-width="1.5" stroke-linecap="round" />
									<path
										d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
										fill="#A4B7C0" />
									<path
										d="M9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
										fill="#A4B7C0" />
								</svg>
							</div>
							<svg :class="{ 'active': isSendButtonActive }" class="chat-icon-send" width="40" height="40"
								viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="40" height="40" rx="20" fill="#DBC3C3" />
								<path
									d="M30 20C30 18.56 29.0667 18.08 29.0667 18.08L10 8L13.4 18.8L22.4 20L13.4 21.2L10 32L29.0667 21.92C29.0667 21.92 30 21.44 30 20Z"
									fill="white" />
							</svg>


						</div>
					</div>
				</div>
				<div v-if="chatRightMedia" class="chat chat-body chat_right">
					<div class="chat-header chat-media-header">
						<svg @click="toggleMediaTab" width="12" height="22" viewBox="0 0 12 22" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1L1 11L11 21" stroke="var(--primary-text)" stroke-width="1.25"
								stroke-linecap="round" />
						</svg>
						<b @click="activeTab = 'media'" :class="['default-b', { 'active': activeTab === 'media' }]">
							Медиа
						</b>
						<b @click="activeTab = 'documents'" :class="['default-b', { 'active': activeTab === 'documents' }]">
							Документы
						</b>
						<b @click="activeTab = 'links'" :class="['default-b', { 'active': activeTab === 'links' }]">Ссылки</b>
						<div class="chat_header_end">



							<button class="header_chat_left_close_button" @click="toggleMediaTab">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)"
										stroke-linecap="round" />
								</svg>

							</button>
						</div>
					</div>
					<div class="chat-messages">
						<div v-if="activeChat">
							<div v-if="activeTab === 'media'">
								<div class="media_content">
									<p class="default-p">Февраль</p>
									<div class="media_content_images">
										<img src="../../../public/images/media.png" alt="">
										<img src="../../../public/images/media.png" alt="">
									</div>
								</div>
								<div class="media_content">
									<p class="default-p">Март</p>
									<div class="media_content_images">
										<img src="../../../public/images/media.png" alt="">
										<img src="../../../public/images/media.png" alt="">
									</div>
								</div>
							</div>
							<div v-else-if="activeTab === 'documents'">
								<div class="media_content">
									<p class="default-p">Февраль</p>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>

									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>

									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>
								</div>

								<div class="media_content">
									<p class="default-p">Март</p>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>

									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>

									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<p class="default-p">Какой-то документ.pdf</p>
												<span>6,2 МБ • 23 февраля в 12:16</span>
											</div>
										</div>


									</div>
								</div>
							</div>
							<div v-else-if="activeTab === 'links'">
								<div class="media_content">
									<p class="default-p">Февраль</p>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<a href="" class="default-violet">Какая-то ссылка</a>
											</div>
										</div>


									</div>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<a href="" class="default-violet">Какая-то ссылка</a>
											</div>
										</div>


									</div>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<a href="" class="default-violet">Какая-то ссылка</a>
											</div>
										</div>


									</div>
									<div class="media_content_documents">
										<div class="media_content_document">
											<img src="../../../public/images/media.png" alt="">
											<div class="media_content_document_texts">
												<a href="" class="default-violet">Какая-то ссылка</a>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style src="./chat.css"></style>
<script>
import MainButton from '@/components/MainButton.vue';

import StarRatingVue from '@/components/StarRating.vue'


export default {
	data() {
		return {
			items: [
				{ id: 1, name: 'Item 1' }
				// Add more items as needed
			],
			showPopupFlag: false,

			currentRating: -1,
			chatRightMedia: false,
			activeTab: "",
		};
	},
	methods: {
		toggleMediaTab(){
			this.chatRightMedia = !this.chatRightMedia
			this.activeTab = "media"
		},
		showPopup(itemId) {
			this.showPopupFlag = itemId;
		},
		closePopup() {
			this.showPopupFlag = false;
		},
		triggerFileInput() {
			this.$refs.fileInput.click();
		},
		handleFileChange(event) {
			const file = event.target.files[0];
			console.log('Selected file:', file);
			
		}

	},
	components: {
		MainButton,
		StarRatingVue
	},
};
</script>

<style scoped>
.stars {
	display: flex;
	gap: 5px;
}

.file-input {
	display: none;
}

.star {
	cursor: pointer;
	stroke: #E8C820;
	transition: fill 0.2s;
}

.star.filled {
	fill: #E8C820;
}
</style>