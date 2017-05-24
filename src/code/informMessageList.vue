<template>
  <div>
    <group :title="'作业列表'">
      <cell v-for="informMessage in informMessages" :key="informMessage.id" :link="{name: 'InformMessage', params: {id: informMessage.id}}" :title="informMessage.name" :inline-desc="informMessage.type">
        <div>{{informMessage.created | dateStr}}</div>
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
        informMessages: []
      }
    },
    created () {
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: '/public/wechat/informMessageList'
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.informMessages = response.data.data
        }, function (response) {
        })
    }
  }
</script>
