<!-- MainButton.vue -->
<template>
    <button class="main-button">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'MainButton',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .main-button {
    padding: 15px 25px;
    background-color: var(--primary-red);
    color: var( --text-light);
    height: max-content;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .main-button:hover {
    background-color: #BB0000;
  }
  </style>
  