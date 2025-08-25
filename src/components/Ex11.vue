<template>
    <div class="box">
        <h3>Ex11: class & style 바인딩</h3>
        <!-- isHighlight가 true면 highlight 클래스 적용, false면 제거 -->
        <button
        @click="toggleHighlight"
        :class="{ highlight: isHighlight}" 
        >
        {{ isHighlight ? '강조 해제' : '강조 하기' }}
    </button>
    <p :style="{ color: isHighlight ? 'red' : 'black' }">
        클릭시 문장의 색이 변함
    </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isHighlight = ref(false)

function toggleHighlight() {
    isHighlight.value = !isHighlight.value
}
</script>

<style scoped>
.box { padding: 12px; }
button {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
.highlight {
  background: yellow;
  border-color: orange;
}
</style>