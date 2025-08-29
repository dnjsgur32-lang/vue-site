<template>
  <section class="box">
    <h3>Ex14: 간단 폼</h3>

    <form @submit.prevent="handleSubmit" class="form">
      <label>
        이름
        <input v-model="name" type="text" placeholder="2글자 이상" />
      </label>

      <label>
        나이
        <input v-model.number="age" type="number" min="0" placeholder="숫자" />
      </label>

      <button type="submit" :disabled="!canSubmit">제출</button>
    </form>

    <p v-if="!name || name.length < 2" class="warn">이름은 2글자 이상 입력해 주세요.</p>
    <p v-if="age === '' || age === null || age === undefined" class="warn">나이를 입력해 주세요.</p>

    <p v-if="message" class="ok">{{ message }}</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const age = ref('')
const message = ref('')

const canSubmit = computed(() => {
  const nameOk = name.value && name.value.length >= 2
  const ageOk = age.value !== '' && age.value !== null && age.value !== undefined
  return nameOk && ageOk
})

function handleSubmit() {
  if (!canSubmit.value) return
  message.value = `${name.value} (${age.value}세) 제출 완료!`
}
</script>

<style scoped>
.box { display: grid; gap: 10px; }
.form { display: grid; gap: 8px; max-width: 320px; }
input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 8px; }
button { padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer; }
button[disabled] { opacity: .6; cursor: not-allowed; }
.warn { color: #c2410c; font-size: 13px; margin: 0; }
.ok { color: #0f766e; }
</style>
