import Vue from 'vue'
import VueRouter from 'vue-router'
import todoList from './components/todoList.vue'
import Bookkeeping from './components/Bookkeeping.vue'
import drawingBoard from './components/drawingBoard.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/todolist',
    meta: {
      title: 'TodoList'
    }
  }, {
    path: '/todolist',
    component: todoList,
    meta: {
      title: 'TodoList'
    }
  }, {
    path: '/bookkeeping',
    component: Bookkeeping,
    meta: {
      title: 'Bookkeeping'
    }
  }, {
    path: '/drawingBoard',
    component: drawingBoard,
    meta: {
      title: 'Drawing Board'
    }
  }]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router