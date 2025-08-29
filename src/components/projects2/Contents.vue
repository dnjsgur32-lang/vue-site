<!-- src/components/projects2/Contents.vue -->
<script setup>
const emit = defineEmits(['open-notice'])
</script>

<template>
  <div class="km-contents">
    <!-- 공지 -->
    <section class="notice card" aria-labelledby="notice-title">
      <h2 id="notice-title">공지사항</h2>
      <ul class="list">
        <li>
          <a href="#" @click.prevent="emit('open-notice')">김치 레시피 공모전</a>
          <time datetime="2025-08-01">08-01</time>
        </li>
        <li>
          <a href="#" @click.prevent="emit('open-notice')">체험 프로그램 예약 시작</a>
          <time datetime="2025-08-05">08-05</time>
        </li>
        <li>
          <a href="#" @click.prevent="emit('open-notice')">여름 특별 전시 안내</a>
          <time datetime="2025-08-10">08-10</time>
        </li>
      </ul>
      <a href="#" class="more">more +</a>
    </section>

    <!-- 갤러리 -->
    <section class="gallery card" aria-labelledby="gallery-title">
      <h2 id="gallery-title">갤러리</h2>
      <div class="gallery-items">
        <figure class="thumb">
          <img class="thumb-img" src="@/assets/images2/g1.jpg" alt="담근 김치" />
          <figcaption>여러 맛의 김치</figcaption>
        </figure>
        <figure class="thumb">
          <img class="thumb-img" src="@/assets/images2/g2.jpg" alt="김치 재료" />
          <figcaption>명품 김치</figcaption>
        </figure>
        <figure class="thumb">
          <img class="thumb-img" src="@/assets/images2/g3.jpg" alt="발효 저장" />
          <figcaption>볶음 김치</figcaption>
        </figure>
      </div>
    </section>

    <!-- 배너 -->
    <section class="banner card">
      <h2 class="sr-only">배너</h2>
      <a href="#">
        <img src="@/assets/images2/banner.jpg" alt="김치 체험 이벤트 배너" />
      </a>
    </section>

    <!-- 바로가기 -->
    <section class="shortcut card">
      <h2 class="sr-only">바로가기</h2>
      <div class="shortcuts">
        <a class="btn" href="#">
          <img src="@/assets/images2/shortcut1.png" alt="예약 아이콘" />
          <span>예약하기</span>
        </a>
        <a class="btn" href="#">
          <img src="@/assets/images2/shortcut2.png" alt="오시는 길 아이콘" />
          <span>오시는 길</span>
        </a>
        <a class="btn" href="#">
          <img src="@/assets/images2/shortcut3.png" alt="이벤트 안내 아이콘" />
          <span>이벤트 안내</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 12컬럼 그리드 */
.km-contents {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
}

/* 카드 공통 */
.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
}
h2 { margin: 0 0 12px; font-size: 18px; }

/* ── 공지(200px 박스에 맞춤) ───────────────────────── */
.notice { grid-column: span 6; }
.notice .list {
  list-style: none;
  margin: 0; padding: 0;
  max-height: 126px;              /* 헤더/패딩 제외하고 200px 안에 들어가게 */
  overflow: auto;
}
.notice .list li {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px dashed var(--line);
  padding: 6px 0;
}
.notice .list li:last-child { border-bottom: none; }
.notice time { color: var(--muted); font-size: 12px; }
.notice .more { display: inline-block; margin-top: 8px; color: var(--brand); font-weight: 600; }

/* ── 갤러리(크기 통일) ─────────────────────────────── */
.gallery { grid-column: span 6; }
.gallery-items {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.thumb { display: flex; flex-direction: column; gap: 6px; }
.thumb-img {
  width: 100%;
  aspect-ratio: 3 / 2;            /* 동일 비율 박스 */
  object-fit: cover;               /* 중앙 기준 살짝 크롭 → 통일감 */
  border-radius: 8px;
}
.thumb figcaption {
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}

/* ── 배너(200px 고정) ─────────────────────────────── */
.banner { grid-column: span 8; height: 200px; display: flex; }
.banner img {
  width: 100%;
  height: 100%;                    /* 200px 꽉 채움 */
  object-fit: cover;
  border-radius: 8px;
}

/* ── 바로가기 ─────────────────────────────────────── */
.shortcut { grid-column: span 4; }
.shortcuts { display: flex; gap: 8px; }
.btn {
  flex: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: 1px solid var(--line);
  padding: 12px;
  border-radius: 8px;
  background: var(--brand-weak);
  text-align: center;
  font-weight: 600;
}
.btn img { width: 48px; height: 48px; margin-bottom: 8px; }
.btn:hover { filter: brightness(.97); }

/* 스크린리더 전용 */
.sr-only {
  position: absolute; width: 1px; height: 1px; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0; padding: 0;
}

/* 반응형 */
@media (max-width: 960px) {
  .notice, .gallery, .banner, .shortcut { grid-column: 1 / -1; }
  .banner { height: 160px; }
}
</style>
