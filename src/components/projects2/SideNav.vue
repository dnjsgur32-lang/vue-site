<!-- src/components/projects2/SideNav.vue -->
<template>
  <aside class="km-side" aria-label="보조 내비게이션">
    <div class="km-logo">
      <img
        src="@/assets/images2/kimchi-logo.jpg"
        alt="KIMCHI STORY"
      />
    </div>

    <nav class="km-nav">
      <ul class="main">
        <li>
          <a href="#">김치 소개</a>
          <ul class="sub">
            <li><a href="#">초대의 글</a></li>
            <li><a href="#">김치의 유래</a></li>
            <li><a href="#">김치 재료</a></li>
            <li><a href="#">오시는 길</a></li>
          </ul>
        </li>

        <li>
          <a href="#">김치주전</a>
          <ul class="sub">
            <li><a href="#">지역별 김치</a></li>
            <li><a href="#">김치 스페셜</a></li>
            <li><a href="#">보관법</a></li>
            <li><a href="#">김치와 건강</a></li>
          </ul>
        </li>

        <li>
          <a href="#">체험프로그램</a>
          <ul class="sub">
            <li><a href="#">김치 담그기</a></li>
            <li><a href="#">영상과 행사</a></li>
            <li><a href="#">관람하기</a></li>
            <li><a href="#">예약하기</a></li>
          </ul>
        </li>

        <li>
          <a href="#">커뮤니티</a>
          <ul class="sub">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">참여게시판</a></li>
            <li><a href="#">자료실</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="km-side-bottom">LOGO</div>
  </aside>
</template>

<script setup>
/* import 불필요 — 사이드바만 렌더 */
</script>

<style scoped>
.km-side {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.km-logo img {
  height: 48px;
  border-radius: 6px;
}

.km-nav .main {
  list-style: none;
  margin: 0;
  padding: 0;
}

.km-nav .main > li {
  border-top: 1px solid var(--line);
}

.km-nav .main > li:first-child {
  border-top: none;
}

.km-nav .main > li > a {
  display: block;
  padding: 10px 8px;
  font-weight: 700;
}

.km-nav .main > li > a:hover {
  color: var(--brand);
}

/* 서브메뉴 */
.km-nav .sub {
  list-style: none;
  margin: 0;
  padding: 4px 0 10px 10px;
}

.km-nav .sub li a {
  display: block;
  padding: 6px 6px;
  color: var(--muted);
  border-radius: 6px;
}

.km-nav .sub li a:hover {
  background: var(--brand-weak);
  color: var(--brand);
}

.km-side-bottom {
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 12px;
}
</style>
