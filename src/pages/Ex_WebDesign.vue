<template>
  <div class="wd-layout">
    <h2 class="wd-title">웹디자인 과제</h2>

    <nav class="wd-tabs" aria-label="웹디자인 하위 과제">
      <RouterLink to="/wd/a1" class="wd-tab">suit 쇼핑몰</RouterLink>
      <RouterLink to="/wd/b2" class="wd-tab">한국 김치 이야기</RouterLink>
    </nav>

    <!-- children 컴포넌트가 여기에 렌더링 -->
    <section class="wd-panel">
      <RouterView />
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 레이아웃 */
.wd-layout {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

/* 제목 */
.wd-title {
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: .2px;
}

/* 탭 네비게이션 */
.wd-tabs {
  display: flex;
  gap: 6px;
  border-bottom: 1px solid var(--line);
}

/* 탭 링크 */
.wd-tab {
  padding: 8px 12px;
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  color: #374151;
  background: transparent;
  text-decoration: none;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
}
.wd-tab:hover {
  background: #f3f4f6;
}

/* 활성 탭 (vue-router 자동 클래스) */
.wd-tab.router-link-active,
.wd-tab.router-link-exact-active {
  color: var(--brand);
  background: #fff;
  border-color: var(--line);
  border-bottom-color: #fff; /* 패널과 연결된 느낌 */
}

/* 접근성: 키보드 포커스 */
.wd-tab:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
  border-radius: 8px;
}

/* 콘텐츠 패널(자식 RouterView 래퍼) */
.wd-panel {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  /* 위쪽 테두리를 탭과 붙인 느낌으로 */
  margin-top: -1px;
}

/* 반응형: 좁은 화면에서 탭 줄바꿈 허용 */
@media (max-width: 640px) {
  .wd-tabs {
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
