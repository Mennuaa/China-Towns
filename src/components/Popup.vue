<template>
    <div class="popup-overlay">
      <div class="popup_content">
        <div class="popup_close" @click="closePopup">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 23L16 16M16 16L23 9M16 16L23 23M16 16L9 9" stroke="var(--primary-text)" stroke-linecap="round" />
          </svg>
        </div>
        <slot></slot> <!-- This is where the dynamic content will be inserted -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PopupVue',
    props: {
      showPopup: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
 
.buttons_popup {
	position: initial;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
}

.popup_close {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: end;
	cursor: pointer;
	align-items: center;
}

@media screen and (max-width: 1050px) {
	.popup_content {
		width: 100%;
		height: 100%;
	}
}

.popup_video {
	width: 100%;
	height: 100%;
}

.popup_video iframe {
	width: 100%;
	height: 100%;
}

.profile_mobile_go_back {
	display: flex;
	gap: 10px;
	margin-bottom: 30px;
}

.profile_mobile_go_back span {
	color: var(--primary-text);
	font-size: 12px;
	font-weight: 400;
	line-height: 14.52px;
	text-align: left;
}
.profile_mobile_go_back {
	display: none;
}
@media screen and (max-width: 1050px) {
	.profile_mobile_go_back {
		display: flex;
	}
}

  </style>
  