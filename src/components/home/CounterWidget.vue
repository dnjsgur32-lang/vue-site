<template>
    <article class="card tool">
        <h3>Counter</h3>
        <div class="row">
            <button @click="dec">-1</button>
            <strong class="count">{{ count }}</strong>
            <button @click="inc">+1</button>
        </div>

        <p class="muted">
            x2: <strong>{{ doubled }}</strong>
            짝수? <strong>{{ isEven ? 'Yes' : 'No' }}</strong>
        </p>
    </article>
</template>

<script setup>
import { computed, ref } from 'vue';


const count = ref(0)
const inc = () => { count.value++ }
const dec = () => { count.value-- }
const doubled = computed(() => count.value * 2)
const isEven = computed(() => count.value % 2 === 0)
</script>

<style scoped>
.tool h3 { margin: 0 0 10px; }

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.count {
  font-size: 22px;
  min-width: 48px;
  text-align: center;
}
.muted { color: var(--muted); }
</style>