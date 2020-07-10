<!-- 首页 个人信息展示 -->
<template>
  <div class="homepage">
    <div class="row">
      <PatientInfo></PatientInfo>

      <div class="row-right">
        <TimeLine></TimeLine>
        <InfoDetail></InfoDetail>
      </div>
    </div>

    <div class="row" style="height:368px">
      <History></History>
      <TrackService></TrackService>
      <TrackDept></TrackDept>
    </div>

    <div class="footer">
      <!-- 底部 -->
      苏州市环亚数据技术有限公司 版权所有
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）


import TimeLine from "@/components/homepage/TimeLine.vue";
import PatientInfo from "@/components/homepage/Patient-Info.vue";
import History from "@/components/homepage/History.vue";
import TrackService from "@/components/homepage/Track-Service.vue";
import TrackDept from "@/components/homepage/Track-Dept.vue";
import InfoDetail from "@/components/homepage/InfoDetail.vue";
import { mapState } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    TimeLine,
    PatientInfo,
    History,
    TrackService,
    TrackDept,
    InfoDetail,

  },
  data() {
    //这里存放数据
    return {
      addMtDialog: false, //弹框


    };
  },
  props: {
    // id:String,//路由传参
  },
  //计算属性 类似于data概念
  computed: {
    ...mapState(["userid"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
   
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // if(this.id){
    //   console.log('走保存',this.id);
    //   this.SETUSERID(this.id)
    // }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("sessionStorage-id", sessionStorage.getItem("userid"));
    console.log("vuex-id", this.userid);
  },
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
.homepage {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  padding-bottom: 56px;

  .row {
    margin: 16px;
    display: flex;
    .row-right {
      margin-left: 16px;
      width: 0;
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  .footer {
    // position: sticky;
    // bottom: 0;
    // left: 0;
    height: 56px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: rgba(191, 191, 191, 1);
    line-height: 56px;
    overflow: hidden;
    background-color: #f4f6fa;
  }

}
</style>