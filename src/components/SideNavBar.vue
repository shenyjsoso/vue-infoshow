<!-- 左侧导航 -->
<template>
  <div class="navbar">
    <el-menu
      class="el-menu-demo"
      :default-active="onRoutes"
      text-color="#4D4D4D"
      active-text-color="#4D4D4D"
      @select="handleSelect"
    >
      <template v-for="item in items">
          <!-- 有二级子菜单 -->
        <template v-if="item.subs">
          <el-submenu
            :index="item.index"
            :key="item.index "
            :hide-timeout="180"
            :show-timeout="180"
          >
            <template slot="title">
              <i :class="item.icon"></i>
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
        <!-- 无二级子菜单 -->
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
  props: {
    items: Array,
    tittle: String
  },
  data() {
    //这里存放数据
    return {
      // thisitems:this.items
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
  watch: {
    //    items:function(val){
    //        console.log("观察",val);
    //        this.thisitems=val;
    //    },
    //    deep:true
  },
  //方法集合
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, "--", keyPath);
      this.$emit("selectRow", key);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
.navbar {
  // position: absolute;
  // left: 204px;
  // top:0px;
  box-sizing: border-box;
  font-size: 14px;
  height: inherit;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  /deep/.el-menu {
    border-right: 0px;
    background-color: transparent;
  }
  /deep/.el-menu-item {
    height: 44px;
    line-height: 44px;
    font-size: 15px;
  }
  /deep/.el-submenu__title {
    font-size: 15px;
    height: 44px;
    line-height: 44px;
  }
  /deep/.el-menu-item:hover {
    background-color: #dceffc !important;
  }
  /deep/.el-menu-item.is-active {
    background-color: #dceffc;
    border-left: 2px solid #1890ff;
  }

  /deep/.el-submenu .el-menu-item {
    height: 44px;
    line-height: 44px;
  }
}
::selection {
  background: transparent;
}
::-moz-selection {
  background: transparent;
}
::-webkit-selection {
  background: transparent;
}
</style>