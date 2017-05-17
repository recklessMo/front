// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Index from './code/index.vue'
import ExamList from './code/examList.vue'
import Info from './code/info.vue'
import Category from './code/category.vue'
import ScoreTotal from './code/scoreTotal.vue'
import Score from './code/score.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/', component: Index
  },
  {
    path: '/info', component: Info
  },
  {
    path: '/examlist', component: ExamList
  },
  {
    path: '/category/:id', name: 'category', component: Category
  },
  {
    path: '/result/my/:id', name: 'score', component: Score
  },
  {
    path: '/result/total/:id', name: 'total', component: ScoreTotal
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.filter('number', function (value) {
  return value.toFixed(2)
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
