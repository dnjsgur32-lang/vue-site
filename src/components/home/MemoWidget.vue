<template>
    <article class="card tool">
        <h3>Quick Memo</h3>

        <form class="row"@submit.prevent="addMemo">
            <input
                v-model.trim="memoText"
                type="text"
                placeholder="메모를 적고 Enter"
                aria-label="메모 입력"/>
            <button type="submit">추가</button>
        </form>

        <ul class="list">
            <li v-for="(m, i) in memos" :key="i">
                <span>{{ m }}</span>
                <button class="ghost" @click="removeMemo(i)">삭제</button>
            </li>
        </ul>
    </article>
</template>

<script setup>
import { ref } from 'vue';

const memoText = ref('')
const memos = ref ([])

const addMemo = () => {
    if (!memoText.value)
    return
    memos.value.push(memoText.value)
    memoText.value = ''
}
</script>

<style scoped>
.tool h3 { margin: 0 0 10px; }

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type="text"] {
  flex: 1 1 auto;
  min-width: 160px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.list {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}
.list li {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

button.ghost {
  background: #fff;
  border: 1px solid var(--line);
}
</style>