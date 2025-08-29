<template>
  <div class="bg">
    <section class="card">
      <h3>'S' 키 알림</h3>
      <p>텍스트 영역에 S 키를 누르면 알림이 뜹니다.</p>
      <textarea
        rows="3"
        placeholder="여기에 입력."
        @keydown.s.prevent="onSKeyAlert"
      ></textarea>
    </section>
    <section class="card">
      <h3>키 값 표시 (한/영 지원)</h3>
      <p>입력창에 키를 누르면 어떤 키인지 표시됩니다. (한글은 조합 완료 후 문자 표시)</p>
      <input
        type="text"
        v-model="text"
        placeholder="아무 키나 눌러보세요."
        @keydown="onGetKey"
        @compositionstart="onCompStart"
        @compositionend="onCompEnd"
        @input="onInput"
      />
      <p class="pill">입력된 키: <strong>{{ keyValue || '없음' }}</strong></p>
      <p class="pill">
        입력된 문자: <strong>{{ charValue || '없음' }}</strong>
        <span v-if="isComposing"> (조합 중…)</span>
      </p>
    </section>
    <section class="card">
      <h3>Ctrl + S 조합</h3>
      <p>Ctrl + S 를 동시에 누르면 알림이 뜹니다. (.prevent로 브라우저 저장창 방지)</p>
      <textarea
        rows="3"
        placeholder="여기에 입력."
        @keydown.ctrl.s.prevent="onCtrlSAlert"
      ></textarea>
    </section>
    <section class="card">
      <h3>Shift + 왼쪽 클릭시 이미지 변경</h3>
      <p>
        아래 이미지를 <b>Shift</b> 키를 누른 채로 <b>마우스 왼쪽 클릭</b>하면 다음 이미지로 변경됩니다.
      </p>
      <img :src="currentImage" alt="image" @click.left.shift="cycleImage" />
    </section>
    <section class="card">
      <h3>Ctrl + 우클릭시 색 변경</h3>
      <div
        class="colorBox"
        :style="{ backgroundColor: `hsl(${bgColorCtrl}, 80%, 80%)` }"
        @click.right.ctrl="incColorCtrl"
        @contextmenu.prevent
      >
        여기를 Ctrl + 우클릭하면 색상 변경됨
      </div>
    </section>
    <section class="card">
      <h3>우클릭시 색 변경</h3>
      <div
        class="colorBox"
        :style="{ backgroundColor: `hsl(${bgColorRight}, 80%, 80%)` }"
        @click.right="incColorRight"
        @contextmenu.prevent
      >
        여기를 우클릭하면 색상 변경됨
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const onSKeyAlert = () => { alert("'S' 키를 눌렀습니다.") }

const text = ref('')
const keyValue = ref('')
const charValue = ref('')
const isComposing = ref(false)
const onGetKey = (e) => { keyValue.value = e.key }
const onCompStart = () => { isComposing.value = true }
const onCompEnd = (e) => { isComposing.value = false; charValue.value = e.data ?? '' }
const onInput = (e) => {
  text.value = e.target.value
  if (!isComposing.value) charValue.value = e.data ?? ''
}

const onCtrlSAlert = () => { alert("'Ctrl' + 'S' 키를 동시에 눌렀습니다.") }

import tiger from '@/assets/img_tiger_square.jpeg'
import moose from '@/assets/img_moose_square.jpeg'
import kangaroo from '@/assets/img_kangaroo_square.jpeg'
const images = [tiger, moose, kangaroo]
const imgIndex = ref(0)
const currentImage = computed(() => images[imgIndex.value])
const cycleImage = () => { imgIndex.value = (imgIndex.value + 1) % images.length }

const bgColorCtrl = ref(0)
const bgColorRight = ref(0)
const incColorCtrl = () => { bgColorCtrl.value = (bgColorCtrl.value + 50) % 360 }
const incColorRight = () => { bgColorRight.value = (bgColorRight.value + 50) % 360 }
</script>

<style scoped>
/* 심플 & 세로 카드 */
.bg { display: grid; grid-template-columns: 1fr; gap: 12px; padding: 12px; }
.card { padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
textarea, input[type="text"] { width: 100%; }

/* 이미지 */
img { width: 200px; height: 200px; object-fit: cover; display: block; }

/* 색 변경 박스(5, 6번) */
.colorBox {
  width: 180px;
  height: 100px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  font-weight: 600;
  user-select: none;
  cursor: default;
}

/* 라벨 스타일 */
.pill { display: inline-block; margin-top: 6px; padding: 4px 8px; background: #f3f4f6; border-radius: 999px; }
</style>
