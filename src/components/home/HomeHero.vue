<template>
    <section class="card hero" aria-label="소개">
        <h1>
            환영합니다 <span>🖐️</span>
        </h1>
        <p class="lead">
            Vue 기본기(반응성, 이벤트, 라우터 )를 가볍게 연습해봐요.
        </p>
    </section>
</template>

<script setup>

</script>

<style scoped>
.hero {
  text-align: center;
  padding: 28px 20px;
  background:
    radial-gradient(1200px 400px at 50% -200px, #fff 0, #fff0 60%),
    linear-gradient(180deg, #fff, #fff);
}
.hero h1 {
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 800;
}
.lead {
  margin: 0;
  color: var(--muted);
}
</style>