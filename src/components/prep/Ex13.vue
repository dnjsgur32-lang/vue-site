<template>
  <section class="box">
    <h3>Ex13: 카운터 & 토글</h3>

    <p class="num">현재 값: <strong>{{ count }}</strong></p>

    <div class="row">
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
      <button @click="reset">리셋</button>
    </div>

    <div class="row">
      <button @click="showTip = !showTip">힌트 토글</button>
    </div>

    <p v-show="showTip" class="tip">v-show는 DOM을 유지하고, 보이기만 숨겨요.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const showTip = ref(false)

function reset() {
  count.value = 0
}
</script>

<style scoped>
.box { display: grid; gap: 10px; }
.row { display: flex; gap: 8px; flex-wrap: wrap; }
.num { margin: 0; }
button { padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer; }
button:hover { background: #f7f7f7; }
.tip { color: #555; font-size: 14px; }
</style>
