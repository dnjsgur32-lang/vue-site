<template>
    <div class="box">
        <h3>Ex12: watchEffect 자동 반응</h3>
        <input v-model.number="num" type="number" placeholder="숫자 입력" />
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const num = ref(0);
const message = ref('')

// watchEffect: 의존하는 값이 바뀔 때마다 실행
watchEffect(() => {
    if (num.value % 2 === 0) {
        message.value = `숫자 ${num.value}는 짝수`
    } else {
        message.value = `숫자 ${num.value}는 홀수`
    }
})
</script>

<style scoped>
.box { padding: 12px; }
input {
  margin: 4px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>