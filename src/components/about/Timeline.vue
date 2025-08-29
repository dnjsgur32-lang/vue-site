<template>
    <article class="card soft">
        <h3>타임라인</h3>
        <ol class="timeline">
            <li>
                <time>Day 1</time>라우터 기본 구조, 상단 네비
            </li>
            <li>
                <time>Day 2</time> WebDisign 레이아웃 및 하위 라우트 연결
            </li>
            <li>
                <time>Day 3</time>이미지 규격, CSS 정리, 접근성 개선            
            </li>
        </ol>
    </article>
</template>

<script setup>

</script>

<style scoped>
h3 { margin: 0 0 8px; }
.timeline {
  margin: 0;
  padding-left: 18px;
}
.timeline time {
  font-weight: 700;
  margin-right: 6px;
  color: var(--brand);
}
.soft { background: #fff; }
</style>