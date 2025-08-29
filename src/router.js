// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// ✅ 폴더 트리에 맞춰 pages에서 임포트
import HomeView     from '@/pages/HomeView.vue'
import AboutView    from '@/pages/AboutView.vue'
import StudyView    from '@/pages/StudyView.vue'

import Ex_WebDesign from '@/pages/Ex_WebDesign.vue'
import Ex_A1        from '@/pages/Ex_A1.vue'
import Ex_B2        from '@/pages/Ex_B2.vue'

import NotFound     from '@/pages/NotFound.vue'   // 선택

const routes = [
  { path: '/',      name: 'home',  component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/study', name: 'study', component: StudyView },

  {
    path: '/wd',
    component: Ex_WebDesign,
    children: [
      { path: 'a1', name: '쇼핑몰',    component: Ex_A1 },
      { path: 'b2', name: '김치이야기', component: Ex_B2 },
      // 기본 자식 라우트(선택): /wd 진입 시 a1로
      { path: '', redirect: { name: '쇼핑몰' } },
    ],
  },

  // 404 (선택)
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
