<!-- 首页时间线下面的信息展示 -->
<template>
<div class='InfoDetail'>
         
          <div class="firstHeader">
            <el-tabs v-model="HeaderName" @tab-click="HeaderClick">
              <el-tab-pane label="检查" name="first"></el-tab-pane>
              <el-tab-pane label="检验" name="second"></el-tab-pane>
              <el-tab-pane label="手术" name="a"></el-tab-pane>
              <el-tab-pane label="体检" name="v"></el-tab-pane>
              <el-tab-pane label="近期用药" name="vs"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="container">
          <div class="info">
            <span class="type">眼底检查</span>
            <span class="time">2020.02.09</span>
            <span class="hospital">高新区科技城医院</span>
          </div>
          <div class="info">
            <span class="type">眼底检查</span>
            <span class="time">2020.02.09</span>
            <span class="hospital">高新区科技城医院</span>
          </div>
          <div class="info">
            <span class="type">眼底检查</span>
            <span class="time">2020.02.09</span>
            <span class="hospital">高新区科技城医院</span>
          </div>
          <div class="info">
            <span class="type">眼底检查</span>
            <span class="time">2020.02.09</span>
            <span class="hospital">高新区科技城医院</span>
          </div>
          <div class="info">
            <span class="type">眼底检查</span>
            <span class="time">2020.02.09</span>
            <span class="hospital">高新区科技城医院</span>
          </div>
        </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
//import引入的组件需要注入到对象中才能使用
    components: {

    },
    data() {
    //这里存放数据
        return {
            HeaderName:'',
        };
    },
    props: {
    },
    //计算属性 类似于data概念
    computed: {

    },
    //监控data中的数据变化
    watch: {

    },
    //方法集合
    methods: {
        HeaderClick(tab, event) {
      console.log(tab, event);
      console.log(this.HeaderName);
      // if (this.activeName) {
      //         this.$router.push({
      //             path: this.activeName,
      //         }).catch(err => {err})
      //     }
    },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.InfoDetail{
        width: 100%;
        background: #fff;
        height: 226px;
        box-shadow:0px 2px 7px 0px rgba(208,211,214,1);
        border-radius:2px;
          .firstHeader {
            background: #fff;
            width: 100%;
            height: 40px;
            padding-left: 16px;
            border-bottom: 1px solid #e6e6e6;
            /deep/.el-tabs__item {
              height: 40px;
              line-height: 40px;
              font-size: 13px;
            }
            /deep/.el-tabs__nav-wrap::after {
              background-color: transparent;
            }
            /deep/.el-tabs__item.is-active{
              color: #499AEB;
            }
            /deep/.el-tabs__item:hover{
              color: #499AEB;
            }
            /deep/.el-tabs__active-bar{
              background-color:#499AEB;
            }
          }
          .container{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            overflow-y: auto;
            height: 186px;
            // padding: 16px;
            .info{
              margin: 16px 0 0 16px ;
              width:250px;
              height:68px;
              background:rgba(243,245,249,1);
              border-radius:2px;
              position: relative;
              
              .type{
                position: absolute;
                top: 14px;
                left: 14px;
                font-size:14px;
                font-family:MicrosoftYaHei;
                color:rgba(26,26,26,1);
              }
              .time{
                position: absolute;
                top: 14px;
                right: 14px;
                font-size:12px;
                font-family:MicrosoftYaHei;
                color:rgba(153,153,153,1);
              }
              .hospital{
                position: absolute;
                left: 14px;
                bottom: 14px;
                font-size:12px;
                font-family:MicrosoftYaHei;
                color:rgba(102,102,102,1);
              }
            }
          }
      }

</style>