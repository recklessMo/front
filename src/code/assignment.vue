<template>
  <div>
    <group title="作业详情">
      <cell title="名称" :value="assignment.name"></cell>
      <cell title="科目" :value="assignment.courseName"></cell>
      <cell title="创建时间" :value="assignment.created"></cell>
      <cell title="截止时间" :value="assignment.submit"></cell>

    </group>

    <group title="作业内容">
      <x-textarea title="详细" v-model="assignment.content" rows="10"></x-textarea>
    </group>

    <box gap="10px 10px">
      <x-button type="primary">点击反馈作业已经做完</x-button>
    </box>

    <div v-transfer-dom>
      <loading v-model="show" :text="'正在加载'"></loading>
    </div>

  </div>
</template>

<style>
</style>

<script>
  import { Cell, Group, Loading, TransferDomDirective as TransferDom, XTextarea, XButton, Box } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      Loading,
      XTextarea,
      XButton,
      Box
    },
    data () {
      return {
        show: false,
        assignment: {},
        id: 0
      }
    },
    created () {
      this.id = this.$route.params.id
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: 'http://192.168.1.103:8080/public/wechat/assignment?id=' + this.id
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.assignment = response.data.data
        }, function (response) {
        })
    }
  }
</script>
