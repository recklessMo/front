// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Index from './code/index.vue'
import ExamList from './code/examList.vue'
import AssignmentList from './code/assignmentList.vue'
import Assignment from './code/assignment.vue'
import Info from './code/info.vue'
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
    path: '/score/:id', name: 'score', component: Score
  },
  {
    path: '/assignmentList', component: AssignmentList
  },
  {
    path: '/assignment/:id', name: 'assignment', component: Assignment
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

Vue.filter('dateStr', function (value) {
  if (!value) {
    return ''
  }
  var date = new Date(value)
  var Y = date.getFullYear() + '年'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
  var D = date.getDate() + '日 '
  return Y + M + D
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
