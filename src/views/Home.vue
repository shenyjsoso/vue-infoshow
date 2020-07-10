<template>
  <!-- 主页布局 -->
  <div class="home">
    <div class="top-header">
      <div class="log" @click="backConditionsQuery">临床数据中心</div>
      <div class="tabs">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页" name="homeinfo"></el-tab-pane>
          <el-tab-pane label="门急诊" name="mjz"></el-tab-pane>
          <el-tab-pane label="住院" name="zy"></el-tab-pane>
          <el-tab-pane label="体检" name="tj"></el-tab-pane>
          </el-tabs>
      </div>
      <div class="rightbar">
        <span @click="gotoCollection"> <i class="el-icon-star-off" ></i> 收藏</span>
        <span @click="gotoMaintenance"> <i class="el-icon-setting" ></i> 维护</span>
      </div>
    </div>

    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
    

  </div>
</template>

<script>

export default {
  components: {
        
  },
  data() {
    return {
      activeName: '',
      
    };
  },
  computed: {

    navList() {
      // return this.$store.state.sysmenu || []
      return [
        {
          title: "ESB服务总线",
          index: "/404"
        },
        {
          title: "接口管理",
          index: "/report"
        },
        {
          title: "接口调用日志",
          index: "/406"
        }
      ];
    },
  },
  created() {
     
    
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$route.path.replace('',''));
    // if (this.$route.path == '/home') {
    //     if (this.navList && this.navList.length > 0) {
    //         let items = this.navList[0]
    //         if (items.children && items.children.length > 0) {
    //             this.navChange(items.children[0])
    //         } else {
    //             this.navChange(items)
    //         }
    //     }
    // }
  },
  watch: {
    $route:{
            handler(newRouter){
              console.log('监视路由',newRouter);
                this.activeName=newRouter.path.split("/").slice(-1).toString();
            },
            immediate: true
        }
  },
  methods: {
    handleClick(tab) {
      if (tab.label == "首页") {
        this.$router.push({
            name: "homeinfo"
          }).catch(err => {err;});
      } else {
        this.$router.push({
            name: "homeother",
            params: { type: this.activeName }
          }).catch(err => {err;});
      }
    },
    //返回搜索页面
    backConditionsQuery() {
      this.$router.push({name: "conditionsquery"}).catch(err => {err;});
    },
    //跳转维护页面
    gotoMaintenance(){
      this.$router.push({name: "maintenance"}).catch(err => {err;});
    },
    //跳转收藏页面
    gotoCollection(){
      this.$router.push({name: "collection"}).catch(err => {err;});
    }
  },
  //生命周期 - 销毁完成
  destroyed() { }, 
};
</script>
<style lang="less" scoped>
.home {
  box-sizing: border-box;
  height: 100%;
  position: relative;
  .top-header {
    display: flex;
    height: 44px;
    background:rgba(248,251,252,1);
    box-shadow:0px 1px 15px 0px rgba(159,182,206,0.56);
    /deep/.el-tabs__nav-wrap::after {
      // background-color: #fff;
      background:rgba(248,251,252,1);
    }
    /deep/.el-tabs__item {
      height: 44px;
      line-height: 44px;
      font-size: 13px;
    }
    /deep/.el-tabs__item.is-active {
      color: #499aeb;
    }
    /deep/.el-tabs__item:hover {
      color: #499aeb;
    }
    /deep/.el-tabs__active-bar {
      background-color: #499aeb;
    }
    .tabs{
      flex: 1;
    }
    .log {
      width: 108px;
      font-size: 18px;
      font-family: MicrosoftYaHeiSemibold;
      color: rgba(73, 154, 235, 1);
      line-height: 44px;
      margin: 0 51px 0 28px;
      cursor: pointer;
    }
    .rightbar{
      // width: 108px;
      padding: 12px 19px;
      font-size:14px;
      font-family:MicrosoftYaHei;
      color:rgba(77,77,77,1);
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        margin-left: 21px;
        cursor: pointer;
      }
      i{
        font-size: 16px;
        color:#808080
      }
    }
  }
}
</style>
