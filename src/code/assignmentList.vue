<template>
  <div>
    <group :title="'作业列表'">
      <cell v-for="assignment in assignments" :key="assignment.id" :link="{name: 'assignment', params: {id: assignment.id}}" :title="assignment.name" :inline-desc="assignment.courseName">
        <div>{{assignment.submit}}</div>
      </cell>
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
        assignments: []
      }
    },
    created () {
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: 'http://192.168.1.103:8080/public/wechat/assignmentList'
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.assignments = response.data.data
        }, function (response) {
        })
    }
  }
</script>
