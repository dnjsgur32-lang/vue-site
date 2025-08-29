<template>
    <article class="card soft">
        <h3>시험 체크리스트</h3>
        <ul class="checks">
            <li>
                <input type="checkbox" v-model="chk.header">
                header 높이 고정(100px)
            </li>
            <li>
                <input type="checkbox" v-model="chk.slider">
                슬라이더 300px & 자동롤링
            </li>
            <li>
                <input type="checkbox" v-model="chk.contents">
                콘텐츠 200px (공지/갤러리/배너/숏컷)
            </li>
            <li>
                <input type="checkbox" v-model="chk.popup">
                공지 팝업 동작
            </li>
            <li>
                <input type="checkbox" v-model="chk.assets">
                이미지 경로/해상도 적합
            </li>
        </ul>
    </article>
</template>

<script setup>
import { reactive } from 'vue';


const chk = reactive({
    header: false,
    slider: false,
    contents: false,
    popup: false,
    assets: false,
})
</script>

<style scoped>
h3 { margin: 0 0 8px; }
.soft { background: #fff; }

.checks {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}
.checks input {
  margin-right: 6px;
}
</style>