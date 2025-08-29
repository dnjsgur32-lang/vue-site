<template>
  <HomeHero />

  <section class="grid">
    <CounterWidget />
    <MemoWidget />
  </section>

  <RouterHelper />
</template>

<script setup>
import HomeHero      from '@/components/home/HomeHero.vue'
import CounterWidget from '@/components/home/CounterWidget.vue'
import MemoWidget    from '@/components/home/MemoWidget.vue'
import RouterHelper  from '@/components/home/RouterHelper.vue'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;
}
@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
