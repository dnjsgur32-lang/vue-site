<template>
  <div class="project1-wrap">
    <!-- 상단 헤더 -->
    <Header />

    <!-- 메인 슬라이더 -->
    <Slider />

    <!-- 공지사항, 갤러리, 배너, 바로가기 -->
    <Contents
      @open-notice="openPopup"
      :onNoticeClick="openPopup"
    />

    <!-- 팝업 -->
    <Popup v-if="isPopupOpen" @close="closePopup" />

    <!-- 하단 푸터 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 컴포넌트 경로는 프로젝트 구조에 맞춤(상대경로)
import Header   from '@/components/projects1/Header.vue'
import Slider   from '@/components/projects1/Slider.vue'
import Contents from '@/components/projects1/Contents.vue'
import Popup    from '@/components/projects1/Popup.vue'
import Footer   from '@/components/projects1/Footer.vue'



const isPopupOpen = ref(false)

// ✅ 핸들러 추가
function openPopup() {
  isPopupOpen.value = true
}
function closePopup() {
  isPopupOpen.value = false
}

// 최초 진입 시 팝업 자동 오픈 (원치 않으면 주석)
onMounted(() => {
  isPopupOpen.value = true
})
</script>

<style scoped>
/* 래퍼 클래스명 템플릿과 일치 */
.project1-wrap {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  font-family: Arial, sans-serif;
  color: #333;
}

/* 버튼 기본 스타일 */
button {
  cursor: pointer;
  font-size: 14px;
}

/* 공통 링크 스타일 */
a {
  color: inherit;
  text-decoration: none;
}

/* ==============================
   자식 컴포넌트 스타일 적용(:deep)
   ============================== */
.project1-wrap :deep(.contents) {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.project1-wrap :deep(.contents > div) {
  width: 24%;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 6px;
  background: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project1-wrap :deep(.contents > div:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.project1-wrap :deep(.contents h2) {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}
.project1-wrap :deep(.notice ul) {
  height: 140px;
  overflow-y: auto;
  padding-right: 4px;
}
.project1-wrap :deep(.notice ul li) { margin-bottom: 6px; }
.project1-wrap :deep(.notice ul li a) {
  display: block;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0;
}
/* 갤러리 */
.project1-wrap :deep(.gallery img) {
  width: 100%;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}
/* 배너, 바로가기 */
.project1-wrap :deep(.banner),
.project1-wrap :deep(.shortcut) { text-align: center; }
.project1-wrap :deep(.banner img),
.project1-wrap :deep(.shortcut img) {
  max-width: 100%;
  max-height: 100px;
  margin-top: 10px;
}

/* 팝업 */
.project1-wrap :deep(.popup-wrap) {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.project1-wrap :deep(.popup) {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
}
.project1-wrap :deep(.popup h2) {
  margin-bottom: 12px;
  color: #333;
  font-weight: bold;
}
.project1-wrap :deep(.popup p) {
  margin-bottom: 20px;
  line-height: 1.5;
  color: #555;
}
.project1-wrap :deep(.close-popup) {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  transition: background 0.2s ease;
}
.project1-wrap :deep(.close-popup:hover) { background: #0056b3; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
