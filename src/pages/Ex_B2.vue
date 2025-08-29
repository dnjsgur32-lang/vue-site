<template>
  <div class="km-page">
    <!-- 좌측 내비(시맨틱) -->
    <aside class="km-left" aria-label="보조 내비게이션">
      <SideNav />
    </aside>

    <!-- 메인: 슬라이더(300) + 콘텐츠 -->
    <main class="km-main" role="main" aria-label="주요 콘텐츠">
      <section class="km-visual" aria-label="메인 슬라이더">
        <Slider />
      </section>

      <section class="km-contents" aria-label="콘텐츠 영역">
        <!-- 콜백 prop 제거, 이벤트만 사용 -->
        <Contents @open-notice="openPopup" />
        <Footer />
      </section>
    </main>

    <!-- 우측 200 여백/위젯 영역 -->
    <aside class="km-right" aria-label="보조 위젯 영역"></aside>

    <!-- 모달 팝업 -->
    <Popup v-if="isPopupOpen" @close="isPopupOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// components
import SideNav  from '@/components/projects2/SideNav.vue'
import Slider   from '@/components/projects2/Slider.vue'
import Contents from '@/components/projects2/Contents.vue'
import Footer   from '@/components/projects2/Footer.vue'
import Popup    from '@/components/projects2/Popup.vue'

const isPopupOpen = ref(false)
const openPopup   = () => { isPopupOpen.value = true }
</script>

<style scoped>
/* ===== 레이아웃 ===== */
/* ===== 김치이야기 레이아웃 ===== */
.km-page {
  --gap: 16px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-areas: "left main right";
  gap: var(--gap);
}

/* 좌측 고정 내비 */
.km-left {
  grid-area: left;
  position: sticky;
  top: 0;
  align-self: start;
  max-height: 100dvh;
  overflow: auto;
  border-right: 1px solid var(--line);
  background: #fff;
}

/* 메인 */
.km-main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

/* 슬라이더 영역 (시험: 높이 300px) */
.km-visual {
  height: 300px;
}

/* 콘텐츠 래퍼 (시험: 높이 200px) */
.km-contents {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

/* 우측 보조 영역 */
.km-right {
  grid-area: right;
}

/* 반응형 */
@media (max-width: 1024px) {
  .km-page {
    grid-template-columns: 180px 1fr;
    grid-template-areas: "left main";
  }
  .km-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .km-page {
    grid-template-columns: 1fr;
    grid-template-areas: "left" "main";
  }
  .km-left {
    position: relative;
    max-height: unset;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

</style>
