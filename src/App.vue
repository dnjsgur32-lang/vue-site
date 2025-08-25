<script setup>
import { ref } from 'vue';
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';

const pages = { Ex1, Ex2, Ex3, Ex4 };
const activeComp = ref('Ex1');
</script>

<template>
  <div class="stage">
    <!-- 미니멀 툴바 -->
    <div class="toolbar" role="tablist" aria-label="예제 전환">
      <button
        class="btn"
        :class="{ active: activeComp==='Ex1' }"
        @click="activeComp='Ex1'"
        role="tab" aria-selected="activeComp==='Ex1'"
      >bind_바인드</button>

      <button
        class="btn"
        :class="{ active: activeComp==='Ex2' }"
        @click="activeComp='Ex2'"
        role="tab" aria-selected="activeComp==='Ex2'"
      >if_이프</button>

      <button
        class="btn"
        :class="{ active: activeComp==='Ex3' }"
        @click="activeComp='Ex3'"
        role="tab" aria-selected="activeComp==='Ex3'"
      >show_쇼우</button>

      <button
        class="btn"
        :class="{ active: activeComp==='Ex4' }"
        @click="activeComp='Ex4'"
        role="tab" aria-selected="activeComp==='Ex4'"
      >for_포</button>
    </div>

    <!-- 콘텐츠 카드: 은은한 페이드/슬라이드 -->
    <Transition name="fade-slide" mode="out-in">
      <div id="comp_view" class="card" :key="activeComp">
        <KeepAlive>
          <component :is="pages[activeComp]" />
        </KeepAlive>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 무채색 배경 + 넉넉한 여백 */
.stage {
  min-height: 70vh;
  padding: 20px 16px 32px;
  background: #f7f7f8;
  display: grid;
  gap: 12px;
  place-items: start center;
}

/* 툴바: 심플 버튼 배치 */
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

/* 버튼: 선명하지 않은 테두리 + 라운드 + 적당한 패딩 */
.btn {
  appearance: none;
  border: 1px solid #e2e2e7;
  background: #fff;
  color: #222;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease, transform .08s ease;
}
.btn:hover { background: #f3f3f5; }
.btn:active { transform: translateY(1px); }
.btn.active {
  border-color: #8b5cf6;
  background: #f5f3ff;
  color: #5b21b6;
}

/* 키보드 접근성 */
.btn:focus-visible {
  outline: 3px solid rgba(139,92,246,.35);
  outline-offset: 2px;
}

/* 내용 카드: 아주 옅은 그림자 + 라운드 + 보더 */
.card {
  width: min(960px, 92vw);
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,.03);
}

/* 전환: 은은한 페이드 + 약한 슬라이드 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity .18s ease, transform .18s ease, filter .18s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(6px);
  filter: saturate(.95);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
  filter: blur(.5px);
}

/* 사용자 환경설정: 모션 최소화 시 전환 제거 */
@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active { transition: none; }
}

/* 반응형 여백 */
@media (max-width: 640px) {
  .stage { padding: 16px 12px 24px; }
  .btn { padding: 8px 12px; }
}
</style>
