<!-- src/components/Ex18.vue -->
<template>
  <div class="wrap">
    <!-- 1) Enter로 추가 / Esc로 초기화 -->
    <section class="card">
      <h3>1) Enter로 추가 · Esc로 초기화</h3>
      <p>할 일을 입력하고 <b>Enter</b>를 누르면 목록에 추가됩니다. <b>Esc</b>로 입력창 초기화.</p>
      <input
        type="text"
        v-model.trim="todoInput"
        placeholder="할 일을 입력하세요"
        @keyup.enter="addTodo"
        @keydown.esc.prevent="todoInput = ''"
      />
      <ol class="num-list">
        <li v-for="(t, i) in todos" :key="i">{{ t }}</li>
      </ol>
    </section>

    <!-- 2) v-model 수식어(.number / .lazy) -->
    <section class="card">
      <h3>2) v-model 수식어: .number · .lazy</h3>
      <p>수량은 <code>.number</code>로 숫자 변환, 가격은 <code>.lazy</code>로 <em>focus 해제 시</em> 반영.</p>
      <div class="row">
        <label>수량
          <input type="number" min="1" v-model.number="qty" />
        </label>
        <label>단가(₩)
          <input type="number" min="0" step="10" v-model.lazy="price" />
        </label>
      </div>
      <p>합계: <b>{{ formattedTotal }}</b> (qty: {{ typeof qty }}, price: {{ typeof price }})</p>
    </section>

    <!-- 3) 마우스 휠로 박스 크기 조절 -->
    <section class="card">
      <h3>3) 휠로 크기 조절 (@wheel.prevent)</h3>
      <p>박스 위에서 마우스 휠을 굴리면 크기가 0.5~2.0 사이에서 변합니다.</p>
      <div
        class="box"
        :style="{ transform:`scale(${boxScale})` }"
        @wheel.prevent="onWheel"
      >
        scale: {{ boxScale.toFixed(2) }}
      </div>
    </section>

    <!-- 4) 드래그&드롭: 파일 목록 + 이미지 미리보기 -->
    <section class="card">
      <h3>4) Drag & Drop 파일</h3>
      <p>아래 영역에 파일을 드롭하세요. 이미지면 미리보기가 표시됩니다.</p>
      <div
        class="dropzone"
        @dragover.prevent
        @drop.prevent="onDrop"
      >
        파일을 여기로 드롭
      </div>
      <ul class="bulletless" v-if="files.length">
        <li v-for="(f, i) in files" :key="i">{{ f.name }} ({{ prettySize(f.size) }})</li>
      </ul>
      <img v-if="previewUrl" class="preview" :src="previewUrl" alt="미리보기" />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

/* 1) Enter로 추가 / Esc로 초기화 */
const todoInput = ref('')
const todos = ref([])
const addTodo = () => {
  if (!todoInput.value) return
  todos.value.push(todoInput.value)
  todoInput.value = ''
}

/* 2) v-model 수식어(.number / .lazy) */
const qty = ref(1)
const price = ref(1000)
const total = computed(() => qty.value * price.value)
const formattedTotal = computed(() =>
  new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(total.value)
)

/* 3) 휠로 크기 조절 */
const boxScale = ref(1)
const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const onWheel = (e) => {
  // e.deltaY > 0 이면 축소, < 0 이면 확대
  const step = 0.1
  boxScale.value = clamp(boxScale.value + (e.deltaY < 0 ? step : -step), 0.5, 2.0)
}

/* 4) 드래그&드롭 파일 + 이미지 미리보기 */
const files = ref([])
const previewUrl = ref(null)
const revokePreview = () => { if (previewUrl.value) URL.revokeObjectURL(previewUrl.value) }
const onDrop = (e) => {
  const dropped = Array.from(e.dataTransfer?.files || [])
  files.value = dropped
  // 이미지 파일이 하나라도 있으면 첫 이미지만 미리보기
  const img = dropped.find(f => f.type && f.type.startsWith('image/'))
  revokePreview()
  previewUrl.value = img ? URL.createObjectURL(img) : null
}
onBeforeUnmount(revokePreview)

/* 공통 유틸 */
const prettySize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  const mb = kb / 1024
  return `${mb.toFixed(2)} MB`
}
</script>

<style scoped>
/* 심플 카드 레이아웃 */
.wrap { display: grid; grid-template-columns: 1fr; gap: 12px; padding: 12px; }
.card { padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
input, textarea { width: 100%; }

/* 리스트 스타일 */
.num-list { list-style: decimal inside; padding: 0; margin: 8px 0 0; }
.bulletless { list-style: none; padding: 0; margin: 8px 0 0; }

.row { display: flex; gap: 12px; align-items: center; }
.row label { display: grid; gap: 6px; }

/* 박스(휠 조절) */
.box {
  width: 160px; height: 100px;
  display: grid; place-items: center;
  border-radius: 6px; font-weight: 700;
  background: #e0f2fe; user-select: none;
  border: 1px solid #bae6fd;
}

/* 드롭존 & 미리보기 */
.dropzone {
  height: 90px; display: grid; place-items: center;
  border: 2px dashed #c7cdd4; border-radius: 8px;
  background: #fafafa; color: #6b7280;
}
.preview {
  display: block; margin-top: 8px;
  width: 220px; height: 220px; object-fit: cover; border-radius: 6px;
  border: 1px solid #e5e7eb;
}
</style>
