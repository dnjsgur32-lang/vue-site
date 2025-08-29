<!-- src/components/projects2/Slider.vue -->
<template>
  <div class="km-slider" role="region" aria-label="메인 슬라이더">
    <div class="km-track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div class="km-slide g1">
        <div class="km-hero">
          <h2>김치의 품격</h2>
          <p>발효의 깊이를 경험하세요</p>
        </div>
      </div>
      <div class="km-slide g2">
        <div class="km-hero">
          <h2>수제 체험</h2>
          <p>양념부터 버무림까지 직접</p>
        </div>
      </div>
      <div class="km-slide g3">
        <div class="km-hero">
          <h2>지역의 맛</h2>
          <p>다양한 김치의 세계</p>
        </div>
      </div>
    </div>

    <div class="km-dots" role="tablist">
      <button
        v-for="i in 3"
        :key="i"
        class="km-dot"
        :class="{ active: current === i - 1 }"
        @click="go(i - 1)"
        :aria-label="`슬라이드 ${i}`"
      />
    </div>

    <div class="km-arrows">
      <button class="prev" @click="prev" aria-label="이전">‹</button>
      <button class="next" @click="next" aria-label="다음">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const current = ref(0)
let t = null

const next  = () => (current.value = (current.value + 1) % 3)
const prev  = () => (current.value = (current.value + 2) % 3)
const go    = (i) => { current.value = i; start() }
const start = () => { stop(); t = setInterval(next, 3000) }
const stop  = () => { if (t) clearInterval(t); t = null }

onMounted(start)
onBeforeUnmount(stop)
</script>

<style scoped>
/* 부모 .km-visual { height:300px } 유지 */
.km-slider{
  position: relative;
  height: 100%;
  overflow: hidden;
}
.km-track{
  display: flex;
  height: 100%;
  transition: transform .5s ease;
}
.km-slide{
  flex: 0 0 100%;
  height: 100%;
  position: relative;           /* ✅ 절대좌표 기준을 슬라이드로 지정 */
}

/* 화면 꽉 채우기 */
.km-slide.g1,
.km-slide.g2,
.km-slide.g3{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
/* 이미지 경로/프레임 (그대로 사용 중이면 유지) */
.km-slide.g1{ background-image:url('@/assets/images2/slide1.jpg'); background-position:50% 45%; }
.km-slide.g2{ background-image:url('@/assets/images2/slide2.jpg'); }
.km-slide.g3{ background-image:url('@/assets/images2/slide3.jpg'); }

/* 히어로: 도트와 겹치지 않게 약간 위로 */
.km-hero{
  position: absolute;
  left: 16px;
  bottom: 42px;                 /* ⬅︎ 16 → 42 로 올림 */
  padding: 10px 14px;
  color: #fff;
  background: rgba(0,0,0,.45);
  border-radius: 8px;
  z-index: 2;                   /* 도트/화살표보다 살짝 아래 or 위 조절 가능 */
}
.km-hero h2{ margin:0 0 4px; font-size:20px; }
.km-hero p { margin:0; font-size:14px; opacity:.9; }

/* 도트 */
.km-dots{
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
}
.km-dot{ width:10px; height:10px; border-radius:50%; border:1px solid #fff; background:rgba(255,255,255,.5); }
.km-dot.active{ background:#fff; }

</style>
