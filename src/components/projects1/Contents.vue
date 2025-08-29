<template>
  <section class="contents">
    <!-- C1/C2: 공지/갤러리 탭 -->
    <div class="card">
      <div class="tabs">
        <button class="tab-btn" :class="{ active: tab==='notice' }" @click="tab='notice'">공지사항</button>
        <button class="tab-btn" :class="{ active: tab==='gallery' }" @click="tab='gallery'">갤러리</button>
      </div>

      <!-- 공지 -->
      <ul v-if="tab==='notice'" class="notice-list">
        <li><a href="#" @click="handleNoticeClick">공지사항1</a></li>
        <li><a href="#" @click="handleNoticeClick">공지사항2</a></li>
        <li><a href="#" @click="handleNoticeClick">공지사항3</a></li>
        <li><a href="#" @click="handleNoticeClick">공지사항4</a></li>
      </ul>

      <!-- 갤러리 -->
      <div v-else class="gallery-grid">
        <img :src="gallery1" alt="갤러리1" />
        <img :src="gallery2" alt="갤러리2" />
        <img :src="gallery3" alt="갤러리3" />
      </div>
    </div>

    <!-- C3: 배너 -->
    <div class="card">
      <h2>배너</h2>
      <img :src="banner" alt="배너" class="banner-img" />
    </div>

    <!-- C4: 바로가기 -->
    <div class="card">
      <h2>바로가기</h2>
      <img :src="shortcut" alt="바로가기" class="shortcut-img" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 이미지 import
import gallery1 from '@/assets/images/gallery1.jpg'
import gallery2 from '@/assets/images/gallery2.jpg'
import gallery3 from '@/assets/images/gallery3.jpg'
import banner from '@/assets/images/banner.jpg'
import shortcut from '@/assets/images/shortcut.jpg'

// Props와 이벤트 정의
const props = defineProps({
  onNoticeClick: { type: Function, default: null }
})
const emit = defineEmits(['open-notice'])

// 현재 탭 상태
const tab = ref('notice')

// 공지 클릭 핸들러
function handleNoticeClick(e) {
  e.preventDefault()
  if (props.onNoticeClick) props.onNoticeClick()
  else emit('open-notice')
}
</script>
