<template>
  <section class="box">
    <h3>Ex15: 로컬 목록 필터</h3>

    <input
      v-model="q"
      type="text"
      placeholder="과일 검색 (예: ap, an)"
      class="input"
    />

    <p class="info">총 {{ items.length }}개 / 필터 {{ filtered.length }}개</p>

    <ul class="list">
      <li v-for="f in filtered" :key="f">{{ f }}</li>
    </ul>

    <p v-if="filtered.length === 0" class="warn">결과가 없습니다.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  'Apple','Banana','Cherry','Grape','Orange','Peach','Pear','Plum','Mango'
])

const q = ref('')

const filtered = computed(() => {
  const s = q.value.trim().toLowerCase()
  if (!s) return items.value
  return items.value.filter(v => v.toLowerCase().includes(s))
})
</script>

<style scoped>
.box { display: grid; gap: 10px; }
.input { max-width: 280px; padding: 8px; border: 1px solid #ddd; border-radius: 8px; }
.list { margin: 0; padding-left: 18px; }
.warn { color: #c2410c; font-size: 13px; }
.info { color: #555; font-size: 13px; margin: 0; }
</style>
