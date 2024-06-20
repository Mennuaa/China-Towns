<template>
    <div class="question" @click="toggle">
      <div class="question_top">
        <h3 class="default-h3">{{ question }}</h3>
        <svg v-if="!isOpen" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00065 16L28 16" stroke="var(--primary-text)" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 4.00065L16 28" stroke="var(--primary-text)" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00065 16L28 16" stroke="var(--primary-text)" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <p v-if="isOpen" class="default-p">
       {{ answer }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: String,
      answer: String,
      isOpen: Boolean,
    },
    methods: {
      toggle() {
        this.$emit('toggle');
      },
    },
  };
  </script>
  
  <style>
  
.question {
    cursor: pointer;
    margin-top: 20px;
    border-bottom: 1px solid var( --lighter-gray);
    padding: 20px 0;
  }
  
  .question_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  
  .question .default-p {
    margin-top: 20px;
  }
  </style>
  