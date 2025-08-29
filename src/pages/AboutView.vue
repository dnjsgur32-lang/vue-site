<template>
    <section class="card about">
        <AboutHeader />

        <div class="grid">
            <ProfileStack />
            <Timeline />
            <ExamChecklist />
        </div>
    </section>
</template>

<script setup>
import AboutHeader from '@/components/about/AboutHeader.vue';
import ExamChecklist from '@/components/about/ExamChecklist.vue';
import ProfileStack from '@/components/about/ProfileStack.vue';
import Timeline from '@/components/about/Timeline.vue';


</script>

<style scoped>
.about { padding: 24px; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 12px;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>