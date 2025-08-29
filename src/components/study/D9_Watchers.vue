<template>
    <div>
        <input v-model="rangeVal" 
        type="range" min="0" max="100" step="1">

        <p>{{ rangeVal }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const rangeVal = ref(70)
// watch(감시 대상, (구현부))
watch(rangeVal, (val) => {
    if(val > 20 && val < 40) {
        // 21~39 > 20으로 보냄
        rangeVal.value = 20
    } else if (val >= 40 && val < 60){
        // 40~59 > 60으로 보냄
        rangeVal.value =60
    }
})
</script>

<style scoped>

</style>