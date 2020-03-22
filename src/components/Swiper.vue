<template>
  <div class="swiper-container sw">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../node_modules/swiper/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000, //1秒切换一次
        disableOnInteraction: false
      },
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style scoped>
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color:red;
}


</style>