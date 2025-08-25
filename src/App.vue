<script setup>
import { ref } from 'vue';
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';
import Ex5 from './components/Ex5.vue';
import Ex6 from './components/Ex6.vue';
import Ex7 from './components/Ex7.vue';
import Ex8 from './components/Ex8.vue';
import Ex9 from './components/Ex9.vue';
import Ex10 from './components/Ex10.vue';
import Ex11 from './components/Ex11.vue';
import Ex12 from './components/Ex12.vue';

const pages = { Ex1, Ex2, Ex3, Ex4, Ex5,
   Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12 };
const activeComp = ref('Ex1');
</script>

<template>
  <div class="stage">
    <!-- 미니멀 툴바 -->
    <div class="toolbar" role="tablist" aria-label="과제 전환">
      <button
  class="btn"
  :class="{ active: activeComp==='Ex1' }"
  @click="activeComp='Ex1'"
  role="tab"
  :aria-selected="activeComp==='Ex1'"
>
  <span class="icon">📎</span>
  bind_바인드
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex2' }"
  @click="activeComp='Ex2'"
  role="tab"
  :aria-selected="activeComp==='Ex2'"
>
  <span class="icon">❓</span>
  if_이프
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex3' }"
  @click="activeComp='Ex3'"
  role="tab"
  :aria-selected="activeComp==='Ex3'"
>
  <span class="icon">👁️‍🗨️</span>
  show_쇼우
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex4' }"
  @click="activeComp='Ex4'"
  role="tab"
  :aria-selected="activeComp==='Ex4'"
>
  <span class="icon">🔃</span>
  for_포
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex5' }"
  @click="activeComp='Ex5'"
  role="tab"
  :aria-selected="activeComp==='Ex5'"
>
  <span class="icon">🖇️</span>
  양방향_bind
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex6' }"
  @click="activeComp='Ex6'"
  role="tab"
  :aria-selected="activeComp==='Ex6'"
>
  <span class="icon">🧩</span>
  v-if_조건부렌더링
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex7' }"
  @click="activeComp='Ex7'"
  role="tab"
  :aria-selected="activeComp==='Ex7'"
>
  <span class="icon">📋</span>
  v-for_반복 렌더링
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex8' }"
  @click="activeComp='Ex8'"
  role="tab"
  :aria-selected="activeComp==='Ex8'"
>
  <span class="icon">⏱️</span>
  watch 값을 감시
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex9' }"
  @click="activeComp='Ex9'"
  role="tab"
  :aria-selected="activeComp==='Ex9'"
>
  <span class="icon">🖥️</span>
  computed 계산된 속성
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex10' }"
  @click="activeComp='Ex10'"
  role="tab"
  :aria-selected="activeComp==='Ex10'"
>
  <span class="icon">🖱️</span>
  이벤트 핸들링
</button>

<button
  class="btn"
  :class="{ active: activeComp==='Ex11' }"
  @click="activeComp='Ex11'"
  role="tab"
  :aria-selected="activeComp==='Ex11'"
>
  <span class="icon">🎨</span>
  class & style 바인딩
</button>


<button
  class="btn"
  :class="{ active: activeComp==='Ex12' }"
  @click="activeComp='Ex12'"
  role="tab"
  :aria-selected="activeComp==='Ex12'"
>
  <span class="icon">⚡</span>
  watchEffect 자동 반응
</button>
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
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  justify-items: stretch;
  max-width: 760px;
  margin: 0 auto;
}

/* 버튼: 선명하지 않은 테두리 + 라운드 + 적당한 패딩 */
.btn {
  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 4px;                      /* 이모지-텍스트 간격 */
  
  min-height: 56px;              /* 높이 통일 (원하면 60~64로 증가) */
  padding: 12px 16px;
  text-align: center;

  /* 한글 줄바꿈 보기 좋게 */
  word-break: keep-all;          /* 단어(조사) 중간에 안 끊기게 */
  text-wrap: balance;            /* 줄 길이 균형(지원 브라우저에서) */
  line-height: 1.3;

  appearance: none;
  border: 1px solid #e2e2e7;
  background: #fff;
  color: #222;
  border-radius: 12px;
  font-size: 16px;
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

.icon {
  font-size: 24px;
  line-height: 1;
}

/* 사용자 환경설정: 모션 최소화 시 전환 제거 */
@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active { transition: none; }
}

@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active { transition: none;}
}

/* 반응형 여백 */
@media (max-width: 640px) {
  .stage { padding: 16px 12px 24px; }
  .btn { flex: 1 0 calc(50% - 8px);
  }
}
</style>
