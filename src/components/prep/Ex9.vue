<template>
    <div class="box">
        <h3>Ex9: computed 계산된 속성</h3>
        <input v-model.number="price" type="number" placeholder="가격 입력" />
        <input v-model.number="quantity" type="number" placeholder="수량 입력">
        <p>총 금액 : <strong>{{ totalPrice }} 원</strong></p>

    </div>
</template>

<script setup>
// computed는 종속된 값이 바뀔 때만 계산
import { ref, computed } from 'vue';

const price = ref(0);
const quantity = ref(0);

// 계산된 값
const totalPrice = computed(() => price.value * quantity.value);
</script>

<style scoped>
.box { padding: 12px;}
input { margin: 4px;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
}
</style>