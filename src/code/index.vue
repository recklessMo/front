<template>
  <div>
    <!--<divider style="margin-top:10px;">{{'个人主页'}}</divider>-->
    <card :header="{title:index.orgName}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{index.totalGradeCount}}</span>
          <br/>
          年级数
        </div>
        <div class="vux-1px-r">
          <span>{{index.totalClassCount}}</span>
          <br/>
          班级数
        </div>
        <div class="vux-1px-r">
          <span>{{index.principal}}</span>
          <br/>
          校长
        </div>
        <div>
          <span>{{index.created}}</span>
          <br/>
          建于
        </div>
      </div>
    </card>

    <card :header="{title:index.gradeName}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{index.gradeClassCount}}</span>
          <br/>
          总班级数
        </div>
        <div class="vux-1px-r">
          <span>{{index.gradeCharger}}</span>
          <br/>
          年级主任
        </div>
        <div class="vux-1px-r">
          <span>{{index.gradePhone}}</span>
          <br/>
          电话
        </div>
      </div>
    </card>

    <card :header="{title:index.className}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{index.classTotalCount}}</span>
          <br/>
          总人数
        </div>
        <div class="vux-1px-r">
          <span>{{index.classCharger}}</span>
          <br/>
          班主任
        </div>
        <div class="vux-1px-r">
          <span>{{index.classPhone}}</span>
          <br/>
          电话
        </div>
      </div>
    </card>

    <panel header="操作选项" :list="list" :type="type"></panel>

    <div v-transfer-dom>
      <loading v-model="show" :text="'正在加载'"></loading>
    </div>

  </div>
</template>

<script>
  import { Divider, Card, Cell, Group, Panel, Loading, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Card,
      Divider,
      Cell,
      Group,
      Panel,
      Loading
    },
    data () {
      return {
        show: false,
        type: '3',
        list: [{
          src: '/app/img/menu/self.svg',
          title: '基本信息',
          url: '/info'
        }, {
          src: '/app/img/menu/score.svg',
          title: '成绩查询',
          url: '/examlist'
        }, {
          src: '/app/img/menu/assignment.svg',
          title: '作业查询',
          url: '/assignmentList'
        }, {
          src: '/app/img/menu/notice.svg',
          title: '通知列表',
          url: '/informMessageList'
        }
        ],
        index: {}
      }
    },
    created () {
      console.log('crated')
      this.show = true
      this.$http(
        {
          method: 'get',
          url: '/public/wechat/index'
        }).then(function (response) {
          console.log(response)
          this.show = false
          this.index = response.data.data
        }, function (response) {
        })
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
