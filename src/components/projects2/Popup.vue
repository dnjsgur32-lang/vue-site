<!-- src/components/projects2/Popup.vue -->
<template>
  <div class="dim" role="dialog" aria-modal="true" aria-label="공지 상세">
    <div class="box">
      <header><h3>공지 상세</h3><button @click="$emit('close')" aria-label="닫기">×</button></header>
      <div class="body">
        <p>공지사항 내용입니다.</p>
      </div>
      <footer><button class="close" @click="$emit('close')">닫기</button></footer>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.dim{position:fixed;inset:0;background:rgba(0,0,0,.45);display:grid;place-items:center;z-index:100}
.box{background:#fff;border-radius:10px;min-width:320px;max-width:560px;border:1px solid var(--line)}
header,footer{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--line)}
footer{border-top:1px solid var(--line);border-bottom:none}
.body{padding:16px}
.close{padding:8px 12px;border:1px solid var(--line);background:#fff;border-radius:6px}
header h3{margin:0;font-size:16px}
header button{border:none;background:transparent;font-size:20px;line-height:1}
</style>
