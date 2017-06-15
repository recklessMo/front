<template>
  <div>
    <group title="通知详情">
      <cell title="通知名称" :value="informMessage.name"></cell>
      <cell title="通知类型" :value="informMessage.type"></cell>
      <cell title="创建时间" :value="informMessage.created | dateStr"></cell>
    </group>

    <group title="通知内容">
      <x-textarea title="详细" v-model="informMessage.text" :rows="10"></x-textarea>
    </group>

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
        informMessage: {},
        id: 0
      }
    },
    methods: {
    },
    created () {
      this.id = this.$route.params.id
      this.show = true
      this.$http(
        {
          method: 'get',
          url: '/public/wechat/informMessage?id=' + this.id
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.informMessage = response.data.data
        }, function (response) {
        })
    }
  }
</script>
