<template>
    <div class="box">
        <h3>Ex7: v-for 반복 렌더링</h3>
        <ul>
            <li v-for="(fruit,index) in fruits" :key="index">
                {{ index + 1 }}. {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const fruits = ref(['사과', '바나나', '체리'])
</script>

<style scoped>
.box { padding: 12px;}
li {margin: 4px 0;}

</style>