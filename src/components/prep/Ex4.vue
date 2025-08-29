<template>
    <div class="container">
        <h2>오늘 먹을 과일</h2>
        
        <ul class="list">
            <li
            v-for="fruit in fruits"
            :key="fruit.id"
            class="item"
            :class="{ active: fruit.id === selectedId }"
        >
             <!-- 각 항목 클릭시 선택/강조 -->
             <span @click="select(fruit)" class="name">{{  fruit.name }}</span>
             <!-- 삭제 버튼 -->
             <button @click="remove(fruit.id)" class="remove">X</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const fruits = ref([
    { id: 'f1', name: '사과'},
    { id: 'f2', name: '바나나'},
    { id: 'f3', name: '체리'},
    ]);

const selectedId = ref(null)
// 항목 선택/해제
function select(fruit) {
    selectedId.value = selectedId.value === fruit.id ? null : fruit.id;
}

// 삭제 기능
function remove(id) {
    fruits.value = fruits.value.filter(f => f.id !== id)
}
</script>

<style scoped>
.container {
  max-width: 300px;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #f9f9f9;
  transition: all 0.2s ease; /* 부드러운 hover 애니메이션 */
  cursor: pointer;
}

/* 마우스 오버 효과 */
.item:hover {
  background: #f1f5f9;
  transform: translateY(-2px); /* 살짝 위로 올라가는 효과 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 선택된 항목 강조 */
.item.active {
  border-color: #7c3aed;
  background: #ede9fe;
}

/* 삭제 버튼 */
.remove {
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 2px 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.remove:hover {
  background: darkred;
}
</style>