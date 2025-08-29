<template>
    <div class="bg">
        <div class="b1" @click="changeText">
            <p>{{ text }}</p>
        </div>
    </div>
    <div class="bg">
        <div class="b2" @mousemove="mousePos">
        <span>xPos {{ xPos }} --- yPos {{ yPos }}</span>
        </div>
    </div>
    <div class="bg">
        <div class="b3">
            <p>{{ count }}</p>
            <button @click="addCount(1)">+1 증가</button>
            <button @click="addCount(5)">+5 증가</button>
            <button @click="addCount(-1)">-1 감소</button>
        </div>
    </div>
    <div class="bg">
        <div class="b4">
            <img id="tiger" @click="myMethod($event, '안녕~')" :src="img_tiger_square" alt="">
            <p>{{ msgAndId }}</p>
        </div>
    </div>
    <div>
        <div class="b5"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img_tiger_square from '@/assets/img_tiger_square.jpeg'

// 클릭 이벤트
const text = ref ('text')

function changeText() {
    text.value = '안녕~'
}
// 무브 이벤트
const xPos = ref(0)

const yPos = ref(0)

const mousePos = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
}
// 카운트 이벤트
const count = ref (0)
const addCount = (num) => {
    count.value += num
}
// 추출 문장 변경 이벤트
const msgAndId = ref('')

const myMethod = (e, msg) => {
    msgAndId.value = msg
    msgAndId.value += e.target.id
    msgAndId.value = `${e.target.id}야 ${msg} 좋은 하루 !`
}

// const changeText = () => ({
//function changText 와 같은 함수지만 예전 버전.    
// })
</script>

<style scoped>
.bg{
margin: 10px;
border-bottom: 3px double palegreen;
}
.b1{
    width: 200px;
    height: 100px;
    background-color: yellow;
    display: inline-block;
}
.b2{
    width: 200px;
    height: 100px;
    background-color: rgb(255, 140, 105);
    display: inline-block;
}
.b4 > img{
    width: 200px;
    height: 200px;
}
</style>