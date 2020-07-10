<!-- 自定义弹框 -->
<template>
  <div class="CustomDialog">
    <el-dialog :visible.sync="visibleDialog" v-bind="$attrs" v-on="$listeners">
    <el-divider></el-divider>
      <slot></slot>
    <el-divider></el-divider>
      <span slot="footer">
        <el-button @click="$_handleCancel">取 消</el-button>
        <el-button type="primary" @click="$_handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  //import引入的组件需要注入到对象中才能使用
  inheritAttrs: false,
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  //计算属性 类似于data概念
  computed: {
    visibleDialog: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("update:visible");
      }
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 对外抛出cancel事件
    $_handleCancel() {
      this.$emit("cancel");
    },
    // 对外抛出 confirm事件
    $_handleConfirm() {
      this.$emit("confirm");
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
<style lang='less' scoped>
//@import url(); 引入公共css类
.CustomDialog {
  background: #fff;
  /deep/.el-button--primary{
      background-color:#4299F0;
      border-color:#4299F0;
  }
  /deep/.el-dialog__body{
      padding:0 ;
  }
  /deep/.el-divider--horizontal{
      margin: 0;
  }
  /deep/.el-dialog__title{
      font-size:16px;
    font-family:MicrosoftYaHeiSemibold;
    color:rgba(38,38,38,1);
  }
}
</style>