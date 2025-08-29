<template>
  <div class="slider-container" role="region" aria-label="메인 슬라이더">
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, idx) in slides"
        :key="idx"
        class="slide"
        :style="{ backgroundImage: `url(${slide})` }"
        role="img"
        :aria-label="`슬라이드 ${idx + 1}`"
      >
        <!-- ✅ 첫 번째 슬라이드에만 텍스트 박스 -->
        <div v-if="idx === 0" class="slider-text">
          <h2>JUST SUIT</h2>
          <p>당신의 품격을 완성합니다.</p>
        </div>
        <div v-if="idx===0" class="slider-text">
          <h2>JUST SUIT</h2>
          <p>당신의 품격을 완성합니다.</p>
        </div>
      </div>
    </div>

    <div class="slider-dots" role="tablist" aria-label="슬라이드 이동">
      <button
        v-for="(_, idx) in slides"
        :key="idx"
        class="dot"
        :class="{ active: currentSlide === idx }"
        @click="goTo(idx)"
        :aria-label="`${idx + 1}번 슬라이드로 이동`"
        :aria-selected="currentSlide === idx"
        role="tab"
      />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 경로는 프로젝트 설정(@ 별칭) 기준. 없으면 상대경로로 변경하세요.
import slide1 from '@/assets/images/slider1.jpg'
import slide2 from '@/assets/images/slider2.jpg'
import slide3 from '@/assets/images/slider3.jpg'

const slides = [slide1, slide2, slide3]
const currentSlide = ref(0)
let timer = null

function start() {
  stop()
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 3000)
}
function stop() {
  if (timer) clearInterval(timer)
  timer = null
}
function goTo(index) {
  currentSlide.value = index
  start() // 수동 이동 후에도 자동 롤링 유지
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<style scoped>
.slider-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

/* 트랙 */
.slider {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

/* 슬라이드 */
.slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/* 도트 */
.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
}
.dot.active {
  background: #fff;
}
</style>
