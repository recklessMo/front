<template>
  <div>
    <!--主要包括成绩， 班内排名， 年级排名-->
    <group title="成绩单">
      <cell v-for="singleCourse in score.courseScoreList" :title="singleCourse.courseName">
        <div>
          分数: {{singleCourse.score}}分
        </div>
        <div>
          班内排名: 34名
        </div>
        <div>
          年级排名: 45名
        </div>
      </cell>
    </group>

    <div v-transfer-dom>
      <loading v-model="show" :text="'正在加载'"></loading>
    </div>

  </div>
</template>

<style>
</style>

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
        score: {},
        eid: 0
      }
    },
    created () {
      this.eid = this.$route.params.id
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: 'http://192.168.1.102:8080/public/wechat/score/my?eid=' + this.eid
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.score = response.data.data
        }, function (response) {
        })
    }
  }
</script>
