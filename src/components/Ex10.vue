<template>
    <div class="box">
        <h3>Ex10: 이벤트 핸들링</h3>
        <!-- @click="함수명"으로 클릭 이벤트 연결 -->
        <button @click="increase"> + 증가</button>
        <button @click="decrease"> - 감소</button>
        <p>현재 값: <strong>{{ count }}</strong></p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

// 이 아래 두 함수가 메서드
// 메서드로 로직을 분리 → 유지보수가 편함
function increase() {
    count.value++;
}

function decrease() {
    if (count.value > 0)
    count.value--
}
</script>

<style scoped>
.box { padding: 12px;}
button {
    margin: 4px;
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}
</style>