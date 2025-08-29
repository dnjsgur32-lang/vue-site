<template>
  <div class="bg">
    <!-- 1) 양방향 바인딩 -->
    <div class="b1">
      <label>
        텍스트:
        <input type="text" v-model="inpText" />
      </label>
      <p>출력: {{ inpText }}</p>
      <hr />
    </div>

    <!-- 2) 체크박스 바인딩 -->
    <div class="b2">
      <p>
        <label>
          중요한가요?
          <input type="checkbox" v-model="important" />
        </label>
        → {{ important }}
      </p>
      <hr />
    </div>

    <!-- 3) 폼 + 목록 -->
    <div class="b3">
      <form @submit.prevent="addItem">
        <p>
          <label>
            목록:
            <input
              type="text"
              v-model.trim="itemName"
              placeholder="목록 이름을 입력하세요."
              required
            />
          </label>
        </p>
        <p>
          <label>
            갯수:
            <input
              type="number"
              v-model.number="itemNumber"
              min="1"
              step="1"
              placeholder="갯수를 입력하세요."
              required
            />
          </label>
        </p>
        <p>
          <label>
            중요성:
            <input type="checkbox" v-model="itemImportant" />
          </label>
          → {{ itemImportant }}
        </p>
        <button type="submit">목록 추가</button>
      </form>

      <hr />

      <p><strong>=== 구매 목록 ===</strong></p>
      <ul>
        <li v-for="(list, idx) in shoppingList" :key="list.name + '-' + idx">
          물건: {{ list.name }} /
          갯수: {{ list.number }} /
          중요성: {{ list.important ? '중요' : '보통' }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 1) 양방향 바인딩
const inpText = ref('Initial text')
const important = ref(false)

// 2) 폼 상태
const itemName = ref('')
const itemNumber = ref(1)
const itemImportant = ref(false)

// 3) 목록 데이터
const shoppingList = ref([
  { name: '토마토', number: 5, important: false },
  { name: '바나나', number: 3, important: true },
])

// 4) 추가 핸들러
const addItem = () => {
  // 간단 검증
  const nameOk = itemName.value?.length > 0
  const numOk = Number.isFinite(itemNumber.value) && itemNumber.value > 0

  if (!nameOk || !numOk) return

  shoppingList.value.push({
    name: itemName.value,
    number: itemNumber.value,
    important: itemImportant.value,
  })

  // 폼 초기화
  itemName.value = ''
  itemNumber.value = 1
  itemImportant.value = false  // ✅ ref는 .value로 리셋
}
</script>

<style scoped>
/* 컨테이너: 한 칼럼 그리드 */
.bg {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 12px;
  border: 1px solid #cfe;
  border-radius: 8px;
  background-color: bisque;
}

/* 카드 공통 */
.b1,
.b2,
.b3 {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  background: #fff;
}

/* 목록 스타일 */
.b3 ul {
  list-style: decimal inside;
  padding-left: 0;
  margin: 0;
}
</style>
