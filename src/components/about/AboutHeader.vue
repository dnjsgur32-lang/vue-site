<template>
    <header class="head">
        <div class="avatar" aria-hidden="true">🎯</div>
        <div>
            <h1>About</h1>
            <p class="sub">
                이정현 - Vue 학습 및 실습 예제
            </p>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
.head {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
}
.avatar {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  font-size: 28px;
}
h1 {
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 800;
}
.sub {
  margin: 0;
  color: var(--muted);
}
</style>