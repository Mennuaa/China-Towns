<template>
    <div>
      <div class="stars">
        <svg v-for="(star, index) in stars" :key="index" class="star" :class="{ filled: index <= currentRating }" @click="rate(index)"
             width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6745 6.48069C13.1967 6.10096 12.9281 5.27482 12.2825 5.27482H9.74601C9.16414 5.27482 8.64947 4.89748 8.47441 4.34254L7.63541 1.68244C7.43941 1.06093 6.55987 1.06093 6.36381 1.68244L5.52483 4.34254C5.3498 4.89748 4.83512 5.27482 4.25324 5.27482H1.71677C1.07109 5.27482 0.802481 6.10096 1.32471 6.48069L3.58375 8.12329C4.07196 8.47822 4.26078 9.11696 4.04409 9.68029L3.06409 12.2282C2.82566 12.8482 3.54131 13.3974 4.07843 13.0067L6.21541 11.4526C6.68294 11.1125 7.31634 11.1125 7.78387 11.4526L9.92081 13.0067C10.4579 13.3974 11.1736 12.8482 10.9351 12.2282L9.95514 9.68029C9.73847 9.11696 9.92727 8.47822 10.4155 8.12329L12.6745 6.48069Z"
                stroke="#E8C820" stroke-width="1.25" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    data() {
      return {
        stars: Array(5).fill(null),
        currentRating: -1
      };
    },
    methods: {
      rate(index) {
        this.currentRating = index;
        this.$emit('rating-submitted', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .stars {
    display: flex;
    gap: 5px;
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
  