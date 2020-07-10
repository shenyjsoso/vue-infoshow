<!-- 检验闭环 -->
<template>
  <div class="CheckClosedLoop">
    <div class="tittle">检验闭环</div>

    <div class="steps" v-for="(item, index) in items" :key="index">

      <div class="headerinfo" >
        <div class="detail" v-for="(itemdetail,index) in item.detail" :key="index">{{itemdetail.tittle}}</div>
      </div>

      <el-steps :active="item.active" align-center :space="180" >
        <el-step icon="el-icon-circle-check" v-for="(itemspecific,index) in item.specific" :key="index" :title="itemspecific.tittle" :description="itemspecific.description">
        </el-step>
      </el-steps>
  </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        items:[
            {
                active:2,
                detail:[{tittle:"检验申请1"},{tittle:"检验申请2"},{tittle:"检验申请3"},{tittle:"检验申请4"},{tittle:"检验申请5"}],
                specific:[
                   {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                   {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                   {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                   {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                   {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                ]
            },{
                active:0,
                detail:[{tittle:"检验申请1"},{tittle:"检验申请1"},{tittle:"检验申请1"},{tittle:"检验申请1"}],
                specific:[
                    {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                    {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                    {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                    {tittle:"顾秋品/重症医学科护士站",description:"2020-01-20 10:02:00"},
                ]
            }
        ]
    };
  },
  props: {},
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.CheckClosedLoop {
  background: #fff;
  margin-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .tittle {
    width: 900px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    font-family: STZhongsong;
    color: rgba(26, 26, 26, 1);
    height: 86px;
    line-height: 86px;
  }
  .steps {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 28px;
    .headerinfo {
      font-size: 14px;
      color: #1a1a1a;
      font-family: MicrosoftYaHei;
      margin-bottom: 8px;
      display: flex;
      justify-content: flex-start;
      .detail {
        width: 180px;
        text-align: center;
        // margin: 62px;
      }
    }
  }
  /deep/.el-step__icon.is-icon {
    width: 20px;
  }
  /deep/.el-step__description {
    font-size: 13px;
  }
  /deep/.el-step__title {
    font-size: 13px;
  }
  /deep/.el-step__description {
    color: #4d4d4d;
  }
  /deep/.el-step__title {
    color: #4d4d4d;
  }
    /deep/.el-step__head.is-process {
    color: #bbb;
    border-color: #bbb;
  }
//   /deep/.el-step__head.is-process {
//     color: #4d4d4d;
//     border-color: #4d4d4d;
//   }
//   /deep/.el-step__head.is-wait {
//     color: #4d4d4d;
//     border-color: #4d4d4d;
//   }
//   /deep/.el-step__line{
//       background-color:#4d4d4d;
//   }
}
</style>