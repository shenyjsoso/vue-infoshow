<!-- 导航 -->
<template>
  <div class="navbar">
    <el-menu
      class="el-menu-demo"
      :default-active="onRoutes"
      text-color="#4D4D4D"
      active-text-color="#4299F0"
      unique-opened
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu
            :index="item.index"
            :key="item.index "
            :hide-timeout="180"
            :show-timeout="180"
          >
            <template slot="title">
              <!-- <i :class="item.icon"></i> -->
              <span slot="title">{{ item.title }}</span>
            </template>

            <template v-for="subItem in item.subs">
              <!-- 有三级子菜单 -->
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
                :popper-append-to-body="true"
              >
                <i :class="subItem.icon"></i>
                <template slot="title">{{ subItem.title }}</template>

                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <!-- 无三级子菜单 -->
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                <i :class="subItem.icon"></i>
                <template slot="title">
                  {{ subItem.title }}
                  <!-- <a style="color:#595959" :href="subItem.whref" target="_blank">{{ subItem.title }}</a> -->
                </template>
                <!-- {{ subItem.title }} -->
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <!-- <i :class="item.icon"></i> -->
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
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
      items: [
        {
          index: "a",
          title: "门诊处方"
        },
        {
          index: "s",
          title: "病历概要"
        },
        {
          index: "d",
          title: "检查报告"
        },
        {
          index: "f",
          title: "检验报告"
        },
        {
          index: "v",
          title: "门诊费用"
        },
        {
          index: "x",
          title: "门诊手术"
        }
      ]
    };
  },
  //计算属性 类似于data概念
  computed: {
    onRoutes() {
      //return this.$route.path.replace('/', '');
      return "";
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, "--", keyPath);
      this.$emit("getType", key);
    }
  },
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

<style lang='less' >
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #3897f4 !important;
}
</style>
<style lang='less' scoped>
.navbar {
  // position: absolute;
  // left: 204px;
  // top:0px;
  font-size: 14px;
  height: 48px;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  //高度重新设置
  /deep/.el-menu--horizontal > .el-menu-item {
    height: 48px;
    line-height: 48px;
  }
  /deep/.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 48px;
    line-height: 48px;
  }
  // /deep/.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  //     color:#3897f4 !important;
  // }
}
</style>