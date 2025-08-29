<template>
    <div class="box">
        <h3>Ex6: v-if 조건부 렌더링</h3>
        <button @click="isVisible = !isVisible">
            {{  isVisible ? '숨기기' : '보이기' }}
        </button>
        <p v-if="isVisible">조건이 참(true)일 때만 보이는 문장!</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(true); //표시 여부 false 일 경우 문장이 안 보임.
</script>

<style scoped>
.box { padding: 12px;}
button {
    margin-bottom: 8px;
    padding: 6px 10px;
    border: 1px solid #888;
    border-radius: 4px;
    cursor: pointer;
}
</style>