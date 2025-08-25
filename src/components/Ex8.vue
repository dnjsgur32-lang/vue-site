<template>
    <div class="box">
        <h3>Ex8: watch 값을 감시.</h3>
        <!-- v-model.number → 숫자로 변환 -->
        <input v-model.number="count" type="number" min="0" />
        <input v-model="name" placeholder="이름 입력" />
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const name = ref('')
const message = ref('')

// count 값이 변할때마다 메세지 실행
// watch(변수, 콜백) → 변수 값 변경을 감지하고 특정 로직 실행
watch(count,(newVal) => {
    if (newVal >= 10) {
        message.value = '10 이상입니다!!'
    } else {
        message.value = `현재 count는 ${newVal}`
    }
});

watch(name, (newVal) => {
    if (newVal) {
        message.value =`${newVal} 님, 반갑습니다!!`
    }
})
</script>

<style scoped>
.box { padding: 12px;}
input {
    width: 60px;
    padding: 6px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>