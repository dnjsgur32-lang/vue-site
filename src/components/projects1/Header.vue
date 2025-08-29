<!-- src/components/projects1/Header.vue -->
<template>
  <header>
    <div class="header-wrap">
      <div class="logo">
        <a href="#">
          <img :src="logoImage" alt="Man's쇼핑몰 로고" />
        </a>
      </div>

      <!-- 네비게이션: 호버 시 서브메뉴 전체 열림 -->
      <nav
        class="main-menu"
        @mouseover="isMenuOpen = true"
        @mouseleave="isMenuOpen = false"
      >
        <ul class="depth1">
          <li>
            <a href="#">탑</a>
            <ul class="depth2" v-show="isMenuOpen">
              <li><a href="#">블라우스</a></li>
              <li><a href="#">티</a></li>
              <li><a href="#">셔츠</a></li>
              <li><a href="#">니트</a></li>
            </ul>
          </li>

          <li>
            <a href="#">아우터</a>
            <ul class="depth2" v-show="isMenuOpen">
              <li><a href="#">자켓</a></li>
              <li><a href="#">코트</a></li>
              <li><a href="#">가디건</a></li>
              <li><a href="#">머플러</a></li>
            </ul>
          </li>

          <li>
            <a href="#">팬츠</a>
            <ul class="depth2" v-show="isMenuOpen">
              <li><a href="#">청바지</a></li>
              <li><a href="#">짧은바지</a></li>
              <li><a href="#">긴바지</a></li>
              <li><a href="#">레깅스</a></li>
            </ul>
          </li>

          <li>
            <a href="#">악세사리</a>
            <ul class="depth2" v-show="isMenuOpen">
              <li><a href="#">귀고리</a></li>
              <li><a href="#">목걸이</a></li>
              <li><a href="#">반지</a></li>
              <li><a href="#">팔찌</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
// 경로는 프로젝트 설정에 맞춰 조정(@ 별칭 없으면 상대경로 사용)
import logoImage from '@/assets/images/logo.jpg'

const isMenuOpen = ref(false)
</script>

<!-- 스타일은 기존 공통 CSS(App.css 등)의
     .header-wrap, .main-menu, .depth1, .depth2 규칙을 그대로 사용 -->
<!-- <style scoped></style> -->
