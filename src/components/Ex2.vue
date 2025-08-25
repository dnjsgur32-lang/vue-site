<template>
    <p v-if="typewriterInstock">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount > 0">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount2 > 3">재고 있음</p>
    <p v-else-if="typewriterCount2 > 0">재고 수량 적음</p>
    <p v-else-if="typewriterCount2 == 0">재고 없음</p>
    <p v-else>예약 재고 >> ( {{ typewriterCount2 }} )</p>
    <hr>
    <p v-if="Text.includes('pizza')">"pizza" 글이 포함되어 있음</p>
    <p v-else>"pizza"글이 포함되어 있지 않음</p>
    <hr>
    <div v-if="Text2.includes('pizza2')">
        <p>pizza</p>
        <img src="../assets/img_pizza.svg" alt="피자이미지">
    </div>
    <p v-else>피자 없음</p>
</template>

<script setup>
import { ref } from 'vue';

const typewriterInstock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)

const Text = ref("text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.'")
const Text2 = ref("text: 'I like taco, pizza2, Thai beef salad, pho soup and tagine.'")

</script>

<style scoped>
img{
    border: dashed black 1px;
    width: 180px;
    padding: 0 20px 20px 20px;
    font-weight: bold;
    background-color: lightgreen;
}
</style>