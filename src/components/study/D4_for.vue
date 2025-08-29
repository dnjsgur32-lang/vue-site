<template>
    <ol>
        <li v-for="food in myFoods">{{ food }}</li>
    </ol>
</template>

<script setup>
import { ref } from 'vue';


const myFoods = ref([
    '브리또',
    '샐러드',
    '케이크',
    '스프',
    '생선',
    '피자',
    '밥'
])
</script>

<style lang="scss" scoped>

</style>