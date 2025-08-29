<template>
    <section class="card router">
        <h3>Router Helper</h3>

        <p class="muted">
            현재 경로: <code>{{ route.fullPath }}</code>
        </p>

        <div class="row wrap">
            <button @click="go('/')">Home</button>
            <button @click="go('/about')">About</button>
            <button @click="go('/study')">StudyView</button>
            <button @click="go('/-1')">뒤로가기</button>
        </div>
    </section>
</template>

<script setup>
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()
const go = (path) => router.push(path)
</script>

<style scoped>
.router h3 { margin: 0 0 8px; }
.muted { color: var(--muted); }

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.row.wrap { flex-wrap: wrap; }

code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 6px;
}
</style>