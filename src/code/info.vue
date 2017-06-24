<template>
  <div>
    <group title="个人信息">
      <cell title="姓名" :value="info.name"></cell>
      <cell title="性别" :value="info.sex == 0 ? '男':'女'"></cell>
      <cell title="出生日期" :value="info.birth | dateStr"></cell>
      <cell title="家长姓名" :value="info.parentName"></cell>
      <cell title="手机号" :value="info.phone"></cell>
      <cell title="民族" :value="info.people"></cell>
      <cell title="户口" :value="info.homeTown"></cell>
      <cell title="籍贯" :value="info.birthTown"></cell>
      <cell title="微信号" :value="info.wechat"></cell>
      <cell title="qq号" :value="info.qq"></cell>
    </group>

    <group title="教育信息">
      <cell title="学号" :value="info.sid"></cell>
      <cell title="班级" :value="info.className"></cell>
      <cell title="年级" :value="info.gradeOtherName"></cell>
      <cell title="入学年份" :value="info.gradeName"></cell>
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
    data () {
      return {
        show: false,
        info: {}
      }
    },
    created () {
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: '/public/wechat/info'
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.info = response.data.data
        }, function (response) {
        })
    }
  }
</script>
