<template>
  <div>
    <div style="padding: 15px;">
      <button-tab v-model="tabvalue">
        <button-tab-item>{{'班级分析'}}</button-tab-item>
        <button-tab-item>{{'年级分析'}}</button-tab-item>
      </button-tab>
    </div>
    <ScoreTotalClass v-if="tabvalue==0"></ScoreTotalClass>
    <ScoreTotalGrade v-if="tabvalue==1"></ScoreTotalGrade>
  </div>
</template>


<script>
  import { ButtonTab, ButtonTabItem, Divider } from 'vux'
  import ScoreTotalClass from './scoreTotalClass.vue'
  import ScoreTotalGrade from './scoreTotalGrade.vue'

  export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      Divider,
      ScoreTotalClass,
      ScoreTotalGrade
    },
    methods: {
    },
    data () {
      return {
        tabvalue: 0
      }
    }
  }
</script>
