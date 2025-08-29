<script setup>
import { ref } from 'vue';
import D4_for from '@/components/study/D4_for.vue';
import D5_event from '@/components/study/D5_event.vue';
import D6_method from '@/components/study/D6_method.vue';
import D7_model from '@/components/study/D7_model.vue';
import D8_computed from '@/components/study/D8_computed.vue';
import D9_Watchers from '@/components/study/D9_Watchers.vue';



const pages = { D4_for, D5_event, D6_method, D7_model, D8_computed, D9_Watchers }
const activeComp = ref('D9_Watchers')
</script>

<template>
  <button @click="activeComp = 'D4_for'">v-for ~동안 실행</button>
  <button @click="activeComp = 'D5_event'">v-on 이벤트 발생</button>
  <button @click="activeComp = 'D6_method'">method 메소드 구현</button>
  <button @click="activeComp = 'D7_model'">model 양방향 바인드</button>
  <button @click="activeComp = 'D8_computed'">computed 계산된 코드</button>
  <button @click="activeComp = 'D9_Watchers'">watchers 데이터 값 변경 시, 감시자가 실행</button>
  
  
  <div class="page_view">
    <keepAlive>
      <component :is="pages[activeComp]"></component>
    </keepAlive>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  filter: drop-shadow(0 0 1.5px #131313);
  background-color: rgb(192, 190, 190);
}
.page_view{
  margin-top: 20px;
  border: 1px solid rgb(1, 131, 51);
  border-radius: 10px;
  filter: drop-shadow(1px 1px 1px rgb(123, 123, 123));
}
</style>
