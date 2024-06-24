<!-- MainButton.vue -->
<template>
    <button class="secondary-button">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'SecondaryButton',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .secondary-button {
    padding: 15px 25px;
    border: 1px solid var(--primary-red) !important;
    color: var(--primary-red) !important;
    background: transparent;
    color: var( --text-light);
    height: max-content;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .secondary-button:hover {
    background-color: rgba(255, 239, 239, 1);
  }
  </style>
  