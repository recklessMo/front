<template>
  <div>
    <group :title="total.className">
      <cell :title="course.name" v-for="course in total.courseTotalList" :key="course.classId">
        <div>
          参考人数: {{course.totalCount}}人
        </div>
        <div>
          均分: {{course.avg | number}}分
        </div>
        <div>
          方差: {{course.stdDev | number}}
        </div>
        <div>
          满分: {{course.full}}人
        </div>
        <div>
          优秀: {{course.best}}人
        </div>
        <div>
          良好: {{course.good}}人
        </div>
        <div>
          及格: {{course.qualified}}人
        </div>
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
    data () {
      return {
        show: false,
        total: {}
      }
    },
    created () {
      this.eid = this.$route.params.id
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: 'http://192.168.1.102:8080/public/wechat/score/totalClass?eid=' + this.eid
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.total = response.data.data[0]
        }, function (response) {
        })
    }
  }
</script>
