<template>
  <footer class="footer">
    <!-- 로고 -->
    <div class="footer__logo">
      <img :src="logoImage" alt="하단 로고" />
    </div>

    <!-- 저작권 -->
    <p class="footer__copy">
      COPYRIGHT © 2025 JUST SHOPPING MALL ALL RIGHTS RESERVED.
    </p>

    <!-- SNS 아이콘 -->
    <nav class="footer__sns" aria-label="소셜 링크">
      <a href="#" aria-label="KakaoTalk">
        <Icon icon="simple-icons:kakaotalk" width="28" />
      </a>
      <a href="#" aria-label="Instagram">
        <Icon icon="mdi:instagram" width="28" />
      </a>
      <a href="#" aria-label="YouTube">
        <Icon icon="mdi:youtube" width="28" />
      </a>
      <a href="#" aria-label="Twitter">
        <Icon icon="mdi:twitter" width="28" />
      </a>
    </nav>
  </footer>
</template>

<script setup>
import logoImage from '@/assets/images/logo.jpg'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.footer{
  text-align:center;
  padding:20px;
  background:#222;
  color:#fff;
}
.footer__logo img{
  width:120px;
  margin-bottom:10px;
}
.footer__copy{
  margin-bottom:10px;
  font-size:.9rem;
  opacity:.9;
}
.footer__sns{
  display:flex;
  justify-content:center;
  gap:12px;
}
.footer__sns a{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:36px;
  height:36px;
  border-radius:50%;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.footer__sns a:hover{
  transform:translateY(-2px);
  opacity:0.85;
}
</style>
