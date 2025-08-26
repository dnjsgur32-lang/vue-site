<script setup>
import { ref, computed, watch } from 'vue'
import Ex1 from './components/Ex1.vue'
import Ex2 from './components/Ex2.vue'
import Ex3 from './components/Ex3.vue'
import Ex4 from './components/Ex4.vue'
import Ex5 from './components/Ex5.vue'
import Ex6 from './components/Ex6.vue'
import Ex7 from './components/Ex7.vue'
import Ex8 from './components/Ex8.vue'
import Ex9 from './components/Ex9.vue'
import Ex10 from './components/Ex10.vue'
import Ex11 from './components/Ex11.vue'
import Ex12 from './components/Ex12.vue'
import Ex13 from './components/Ex13.vue'
import Ex15 from './components/Ex15.vue'
import Ex16 from './components/Ex16.vue'
import Ex14 from './components/Ex14.vue'

/* 페이지 세트 */
const pages1 = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12 }
const pages2 = { Ex13, Ex14, Ex15, Ex16 } // 26일: 새 과제들만

/* 단계 & 선택 상태 */
const step = ref('day')
const selectedDay = ref(null)   // 날짜 객체 자체를 저장
const activeComp = ref('Ex1')   // 실제 선택은 openDay에서 보정됨

/* 날짜 목록 */
const days = ref([
  { id: '2025-08-25', label: '08월 25일', pages: pages1 },
  { id: '2025-08-26', label: '08월 26일', pages: pages2 },
])

/* 계산 값 */
const currentDay = computed(() => selectedDay.value)
const currentPages = computed(() => (currentDay.value ? currentDay.value.pages : null))

/* ───────────────── 메뉴 메타 & 동적 가시 메뉴 ───────────────── */
const allMenus = [
  { key: 'Ex1',  label: 'bind_바인드',          icon: '📎' },
  { key: 'Ex2',  label: 'if_이프',              icon: '❓' },
  { key: 'Ex3',  label: 'show_쇼우',            icon: '👁️‍🗨️' },
  { key: 'Ex4',  label: 'for_포',               icon: '🔃' },
  { key: 'Ex5',  label: '양방향_bind',          icon: '🖇️' },
  { key: 'Ex6',  label: 'v-if_조건부렌더링',    icon: '🧩' },
  { key: 'Ex7',  label: 'v-for_반복 렌더링',    icon: '📋' },
  { key: 'Ex8',  label: 'watch 값을 감시',      icon: '⏱️' },
  { key: 'Ex9',  label: 'computed 계산된 속성', icon: '🖥️' },
  { key: 'Ex10', label: '이벤트 핸들링',        icon: '🖱️' },
  { key: 'Ex11', label: 'class & style 바인딩', icon: '🎨' },
  { key: 'Ex12', label: 'watchEffect 자동 반응', icon: '⚡' },
  { key: 'Ex13', label: '카운터 & 토글',        icon: '🔢' },
  { key: 'Ex14', label: 'v-model 간단폼',       icon: '📝' },
  { key: 'Ex15', label: '로컬 목록 필터',       icon: '🔍' },
  { key: 'Ex16', label: '탭 전환',              icon: '🗂️' },
]

// pages 객체의 첫 키를 얻어 초기 선택에 사용
function firstKeyOf(pages) {
  const keys = pages ? Object.keys(pages) : []
  return keys.length ? keys[0] : null
}

// 현재 날짜 pages에 실제 존재하는 키만 버튼으로 노출
const visibleMenus = computed(() => {
  if (!currentPages.value) return []
  return allMenus.filter(m => currentPages.value[m.key])
})

/* 화면 전환 */
const openDay = (day) => {
  selectedDay.value = day
  activeComp.value = firstKeyOf(day.pages) || null // 날짜별 첫 컴포넌트 자동 선택
  step.value = 'menu'
}
const backToDay = () => {
  step.value = 'day'
  selectedDay.value = null
}

/* 안전 가드: 렌더 가능한지 확인 */
const canRenderActive = computed(() => {
  return !!(currentPages.value && currentPages.value[activeComp.value])
})

/* 선택 유효성 자동 보정(세트 변경/초기 진입 등) */
watch([currentPages, activeComp], ([pages, key]) => {
  if (!pages) {
    activeComp.value = null
    return
  }
  if (!key || !pages[key]) {
    activeComp.value = firstKeyOf(pages)
  }
})
</script>

<template>
  <div class="stage">
    <!-- 1) 날짜 선택 화면 -->
    <div v-if="step === 'day'" class="card day-select">
      <h2 class="title">이정현 vue 과제</h2>
      <p class="desc">아래 항목중 과제를 선택하세요.</p>

      <div class="day-list" v-if="days && days.length">
        <button
          v-for="d in days"
          :key="d.id"
          class="day-button"
          @click="openDay(d)"
          role="button"
          :aria-label="`${d.label} 과제 보기`"
        >
          📅 {{ d.label }} 과제 보기
        </button>
      </div>
      <p v-else class="desc">표시할 날짜가 없습니다.</p>
    </div>

    <!-- 2) 메뉴 + 콘텐츠 화면 -->
    <div v-else class="menu-stage">
      <!-- 브레드크럼 -->
      <div class="crumbs">
        <button class="link" @click="backToDay" aria-label="목록으로">← 목록</button>
        <span class="sep">/</span>
        <span class="muted">{{ currentDay && currentDay.label }}</span>
      </div>

      <!-- 메뉴 버튼들: 현재 날짜 pages 기준으로 동적 생성 -->
      <div class="toolbar" role="tablist" aria-label="과제 전환">
        <button
          v-for="m in visibleMenus"
          :key="m.key"
          class="btn"
          :class="{ active: activeComp===m.key }"
          @click="activeComp = m.key"
          role="tab"
          :aria-selected="activeComp===m.key"
        >
          <span class="icon">{{ m.icon }}</span> {{ m.label }}
        </button>
      </div>

      <!-- 콘텐츠 카드 -->
      <Transition name="fade-slide" mode="out-in">
        <div id="comp_view" class="card" :key="activeComp" role="region" aria-live="polite">
          <!-- 존재할 때만 KeepAlive 자체를 렌더 -->
          <template v-if="canRenderActive">
            <KeepAlive>
              <component :is="currentPages[activeComp]" />
            </KeepAlive>
          </template>
          <template v-else>
            <div class="desc">
              선택한 컴포넌트를 불러올 수 없어요. (선택 날짜의 pages에 키가 없거나 비어 있음)
            </div>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
/* 배경/레이아웃 */
.stage {
  min-height: 70vh;
  padding: 20px 16px 32px;
  background: #f7f7f8;
  display: grid;
  gap: 16px;
  place-items: start center;
}

/* 날짜 선택 카드 */
.day-select {
  width: min(720px, 92vw);
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 14px rgba(0,0,0,.03);
  display: grid;
  gap: 12px;
  justify-items: start;
}
.title { margin: 0; font-size: 20px; }
.desc  { margin: 0 0 8px; color:#666; }
.day-button {
  appearance:none; border:1px solid #e2e2e7; background:#fff; color:#222;
  padding:10px 14px; border-radius: 10px; cursor:pointer; font-size:15px;
}
.day-button:hover { background:#f3f3f5; }

/* 브레드크럼 */
.crumbs { width: min(960px, 92vw); display:flex; gap:8px; align-items:center; }
.crumbs .link {
  appearance:none; background:none; border:none; color:#4f46e5; cursor:pointer;
  padding:4px 0;
}
.crumbs .link:hover { text-decoration: underline; }
.crumbs .sep { color:#aaa; }
.crumbs .muted { color:#666; }

/* 메뉴 툴바 */
.toolbar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  justify-items: stretch;
  max-width: 760px;
  margin: 0 auto;
}

/* 버튼 공통 */
.btn {
  display:flex; align-items:center; justify-content:center; gap:4px;
  min-height:56px; padding:12px 16px;
  text-align:center; word-break:keep-all; text-wrap:balance; line-height:1.3;
  appearance:none; border:1px solid #e2e2e7; background:#fff; color:#222;
  border-radius:12px; font-size:16px; cursor:pointer;
  transition: background .15s ease, border-color .15s ease, transform .08s ease;
}
.btn:hover { background:#f3f3f5; }
.btn:active { transform: translateY(1px); }
.btn.active { border-color:#8b5cf6; background:#f5f3ff; color:#5b21b6; }
.btn:focus-visible { outline:3px solid rgba(139,92,246,.35); outline-offset:2px; }

/* 카드 공통 */
.card {
  width: min(960px, 92vw);
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,.03);
}

/* 전환 */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity .18s ease, transform .18s ease, filter .18s ease;
}
.fade-slide-enter-from { opacity: 0; transform: translateY(6px); filter: saturate(.95); }
.fade-slide-leave-to   { opacity: 0; transform: translateY(-4px); filter: blur(.5px); }

.icon { font-size: 24px; line-height: 1; }

/* 반응형 */
@media (max-width: 640px) {
  .stage { padding: 16px 12px 24px; }
  .toolbar { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
</style>
