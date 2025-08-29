<template>
    <div class="box">
        <h3>Ex5: v-model 양방향 바인딩</h3>
        <input v-model="name" placeholder="이름을 입력하세요."/>
        <p>안녕하세요, <strong>{{  name || '이정현' }}</strong>님!</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref(''); //입력값을 저장하는 반응형 변수
</script>

<style scoped>
.box { padding: 12px;}
input {
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>