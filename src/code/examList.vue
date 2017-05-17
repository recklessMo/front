<template>
  <div>
    <group :title="'考试列表'">
      <cell v-for="exam in exams" :key="exam.examId" :link="{name: 'category', params: {id: exam.examId}}" :title="exam.examName" :inline-desc="exam.examTime"></cell>
    </group>

    <div v-transfer-dom>
      <loading v-model="show" :text="'正在加载'"></loading>
    </div>
  </div>
</template>

<script>
  import { Cell, Group, Loading, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      Loading
    },
    methods: {},
    data () {
      return {
        exams: []
      }
    },
    created () {
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: 'http://192.168.1.102:8080/public/wechat/examList'
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.exams = response.data.data
        }, function (response) {
        })
    }
  }
</script>
