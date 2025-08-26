<template>
  <section class="box">
    <h3>Ex16: 간단 탭</h3>

    <div class="tabs">
      <button
        v-for="t in tabs"
        :key="t.key"
        :class="['tab', { active: active === t.key }]"
        @click="active = t.key"
      >
        {{ t.label }}
      </button>
    </div>

    <div class="panel" v-if="active === 'intro'">
      <p>안녕하세요! 이것은 소개 탭입니다.</p>
    </div>
    <div class="panel" v-else-if="active === 'faq'">
      <p>자주 묻는 질문을 간단히 보여주는 영역입니다.</p>
    </div>
    <div class="panel" v-else>
      <p>연락처: contact@example.com</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  { key: 'intro', label: '소개' },
  { key: 'faq', label: 'FAQ' },
  { key: 'contact', label: '연락처' }
]

const active = ref('intro')
</script>

<style scoped>
.box { display: grid; gap: 12px; }
.tabs { display: flex; gap: 8px; flex-wrap: wrap; }
.tab {
  padding: 8px 12px; border: 1px solid #ddd; border-radius: 999px;
  background: #fff; cursor: pointer;
}
.tab.active { background: #eef2ff; border-color: #c7d2fe; }
.panel { padding: 10px; border: 1px solid #eee; border-radius: 8px; background: #fff; }
</style>
