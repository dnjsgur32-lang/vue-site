<template>
    <!-- 요소는 존재하나 보여주고 감춘다. show/hiden -->
    <div v-show="showDiv">이 엘리먼트는 감출수 있어요.</div>
    <hr>
    <!-- if / show 비교 -->
     <p>Set the 'showDiv' data property to 'false', and run the code again. Right click this green p element, choose 'Inspect' or 'Inspect element' and you can see that the div element with v-show still exist, it is only the CSS display property that is set to 'none', and the div with v-if is destroyed.</p>
    <div v-show="showDiv">div태그를 보여주고 감춘다</div>
    <div v-if="showDiv">div태그의 요소를 생성하다. / 생성하지 않는다.</div>
</template>

<script setup>
    import { ref } from 'vue';

    const showDiv = ref(true)
</script>

<style scoped>
div {
      padding: 20px;
      margin: 10px;
      display: inline-block;
      font-weight: bold;
      border: solid black 1px;
    }
</style>