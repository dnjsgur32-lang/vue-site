<script setup>
import popupImage from '@/assets/images/popup.jpg'
</script>

<template>
  <div class="popup-wrap">
    <div class="popup">
      <img :src="popupImage" alt="이벤트 팝업" class="popup-image" />
      <h2>럭셔리 컬렉션 이벤트</h2>
      <p>최신 맞춤 컬렉션을 지금 만나보세요.</p>
      <button class="close-popup" @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<style scoped>
.popup-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 400px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}
.popup-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.close-popup {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 5px;
  cursor: pointer;
}
.close-popup:hover {
  background: #444;
}
</style>
