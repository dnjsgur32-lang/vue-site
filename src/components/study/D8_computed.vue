<template>
    <div>
        <label>
            <input type="checkbox" v-model="chbxVal">
            {{ isImportant }}
        </label>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const chbxVal = ref(false)
const isImportant = computed(
    () => {
    if(chbxVal.value){
        return "중요해요."
     } else {
        return "평범해요."
     }
}
)
</script>

<style scoped>

</style>