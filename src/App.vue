<script setup>
import { ref, computed, watch } from 'vue'

/* ===========================
   1) 자동 임포트
   - prep/Ex*.vue (준비과제)
  
   =========================== */
const globPrep = import.meta.glob('@/components/prep/Ex*.vue', { eager: true })
const globAll1 = import.meta.glob('@/components/**/*.vue', { eager: true })
const globAll2 = import.meta.glob('@/pages/*.vue', { eager: true })

/* 파일 경로 → 파일명 키로 맵핑 (Ex1, HomeView 등) */
const toMap = (mods) =>
  Object.fromEntries(
    Object.entries(mods).map(([p, m]) => {
      const name = p.split('/').pop().replace('.vue', '')
      return [name, m.default]
    }),
  )

const Prep = toMap(globPrep)                  // Ex1 ~ Ex20
const Any  = toMap({ ...globAll1, ...globAll2 }) // 모든 컴포넌트/페이지

/* 특정 키만 뽑는 유틸 */
const pick = (obj, keys) =>
  keys.reduce((acc, k) => (obj[k] ? ((acc[k] = obj[k]), acc) : acc), {})

/* ===========================
   2) 날짜별 묶음
   =========================== */
const pages1 = pick(Prep, [
  'Ex1','Ex2','Ex3','Ex4','Ex5','Ex6',
  'Ex7','Ex8','Ex9','Ex10','Ex11','Ex12',
])
const pages2 = pick(Prep, ['Ex13','Ex14','Ex15','Ex16'])
const pages3 = pick(Prep, ['Ex17','Ex18','Ex19','Ex20'])

/* 08/28~29: 페이지/도구 등을 메뉴로 노출
   - 파일이 없어도 pick이 자동으로 건너뜀 */
const pages4 = pick(Any, [
  // 라우터 페이지
  'HomeView','AboutView','StudyView',
  'Ex_WebDesign','Ex_A1','Ex_B2',

  // 있으면 노출되는 도구/소개 컴포넌트들
  'HomeIntro','AboutIntro','QuickMemo','RouterHelper',
])

/* ===========================
   3) 상태/계산값/동작
   =========================== */
const step        = ref('day')
const selectedDay = ref(null)
const activeComp  = ref(null)

const days = ref([
  { id: '2025-08-25',   label: '08월 25일',   pages: pages1 },
  { id: '2025-08-26',   label: '08월 26일',   pages: pages2 },
  { id: '2025-08-27',   label: '08월 27일',   pages: pages3 },
  { id: '2025-08-28~29',label: '08월 28~29일',pages: pages4 },
])

const currentDay   = computed(() => selectedDay.value)
const currentPages = computed(() =>
  currentDay.value ? currentDay.value.pages : null,
)

/* 메뉴 정의(보여줄 순서/라벨). 존재하는 키만 필터링됨 */
const allMenus = [
  // Ex 시리즈
  { key:'Ex1',  label:'bind_바인드',      icon:'📎' },
  { key:'Ex2',  label:'if_이프',          icon:'❓' },
  { key:'Ex3',  label:'show_쇼우',        icon:'👁️‍🗨️' },
  { key:'Ex4',  label:'for_포',           icon:'🔃' },
  { key:'Ex5',  label:'양방향_bind',      icon:'🖇️' },
  { key:'Ex6',  label:'v-if',             icon:'🧩' },
  { key:'Ex7',  label:'v-for',            icon:'📋' },
  { key:'Ex8',  label:'watch',            icon:'⏱️' },
  { key:'Ex9',  label:'computed',         icon:'🖥️' },
  { key:'Ex10', label:'이벤트',           icon:'🖱️' },
  { key:'Ex11', label:'class/style',      icon:'🎨' },
  { key:'Ex12', label:'watchEffect',      icon:'⚡' },
  { key:'Ex13', label:'카운터',           icon:'🔢' },
  { key:'Ex14', label:'v-model',          icon:'📝' },
  { key:'Ex15', label:'필터',             icon:'🔍' },
  { key:'Ex16', label:'탭',               icon:'🗂️' },
  { key:'Ex17', label:'키/마우스',        icon:'🎊' },
  { key:'Ex18', label:'폼/파일',          icon:'🖱️' },
  { key:'Ex19', label:'웹/라우터',        icon:'📚' },
  { key:'Ex20', label:'기타',             icon:'🧰' },

  // 08/28~29
  { key:'HomeView',     label:'홈 화면',          icon:'🏠' },
  { key:'AboutView',    label:'어바웃 화면',      icon:'ℹ️' },
  { key:'StudyView',    label:'스터디 화면',      icon:'📖' },
  { key:'Ex_WebDesign', label:'웹디자인 루트',    icon:'🧭' },
  { key:'Ex_A1',        label:'suit 쇼핑몰',      icon:'🛍️' },
  { key:'Ex_B2',        label:'한국 김치 이야기', icon:'🥬' },
  { key:'HomeIntro',    label:'Home 소개',        icon:'📄' },
  { key:'AboutIntro',   label:'About 소개',       icon:'📄' },
  { key:'QuickMemo',    label:'Quick Memo',       icon:'📝' },
  { key:'RouterHelper', label:'Router Helper',    icon:'🧭' },
]

const firstKeyOf = (pages) => {
  const ks = pages ? Object.keys(pages) : []
  return ks.length ? ks[0] : null
}

const visibleMenus = computed(() =>
  currentPages.value
    ? allMenus.filter((m) => currentPages.value[m.key])
    : [],
)

const openDay = (day) => {
  selectedDay.value = day
  activeComp.value  = firstKeyOf(day.pages)
  step.value = 'menu'
}

const backToDay = () => {
  step.value = 'day'
  selectedDay.value = null
}

const canRenderActive = computed(() =>
  !!(currentPages.value && currentPages.value[activeComp.value]),
)

/* 선택 유효성 자동 보정 */
watch([currentPages, activeComp], ([pages, key]) => {
  if (!pages || !pages[key]) activeComp.value = firstKeyOf(pages || {})
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

      <Transition name="fade-slide" mode="out-in">
        <div id="comp_view" class="card" :key="activeComp" role="region" aria-live="polite">
          <template v-if="canRenderActive">
            <KeepAlive>
              <component :is="currentPages[activeComp]" />
            </KeepAlive>
          </template>
          <template v-else>
            <div class="desc">
              선택한 날짜의 과제를 불러올 수 없습니다.
              <br>
              ==과제 작성 X / 페이지 연결 X==
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
