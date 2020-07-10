<!-- 树型控件 -->
<template>
  <div class="treeMenu" >
    <div class="header">
      <span class="title" >{{ treeTitle }}</span>
      <div class="header-bots">
        <i class="el-icon-folder-add" @click="hControl(1)"></i>
        <i class="el-icon-edit-outline" @click="hControl(2)"></i>
        <i class="el-icon-delete" @click="hControl(3)"></i>
      </div>
    </div>
    <el-divider></el-divider>
    <el-input
      type="text"
      size="small"
      placeholder="输入内容查找"
      suffix-icon="el-icon-search"
      v-model.trim="filterText"
      :clearable="true"
    ></el-input>
    <div class="treediv" @click="noChecked">
        <el-tree
        node-key = "id"
        :data="data"
        :props="defaultProps"
        :highlight-current="true"
        :filter-node-method="filterNode"
        ref="listTree"
        v-bind="$attrs" 
        v-on="$listeners"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        >
        <span class="custom-tree-node" slot-scope="{ node,data }">
            <span class="treeicon"   v-if="data.children"></span>
            <span>{{ node.label }}</span>
        </span>
        </el-tree>
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
      filterText: "",//搜索框数据
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  props: {
    treeTitle: {
      type: String,
      default() {
        return "";
      }
    },
    data:Array,
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    filterText(val) {
      //筛选监听
      this.$refs.listTree.filter(val);
    }
  },
  //方法集合
  methods: {
    hControl(val) {
        //新增
      if (val == 1) {
          this.$emit("treeAdd",this.$refs.listTree.getCurrentKey())
      }
      //编辑 
      else if (val == 2) {
        this.$emit("treeEdit",this.$refs.listTree.getCurrentKey())
      } 
      //删除
      else if (val == 3) {
        this.$emit("treeDelete",this.$refs.listTree.getCurrentKey())
      } else return;
    },
    filterNode(value, data, node) {
      // 筛选方法
      if (!value) {
        return true;
      } else {
        var name = `${node.label}`;
        return name.indexOf(value) !== -1;
      }
    },
    noChecked(){
        //取消选中
        this.$refs.listTree.setCurrentKey();
    },
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType);
    },
    //拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    //判断节点能否被拖拽
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
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
::selection {
  background: transparent;
}
::-moz-selection {
  background: transparent;
}
::-webkit-selection {
  background: transparent;
}
.treeMenu {
  padding: 0 18px ;
  position: relative;
  height: 100%;
  .treediv{
      position: absolute;
      top: 107px;
      left:0;
      right:0;
      bottom:0px;
      padding: 20px 0;
      overflow-y: auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .title {
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: rgba(38, 38, 38, 1);
    }
    .header-bots {
      i {
        margin-left: 4px;
        cursor: pointer;
        color: rgba(128, 128, 128, 1);
        font-size: 20px;
      }
    }
  }
  /deep/.el-input__icon {
    color: #499aeb;
    font-size: 18px;
  }
  /deep/.el-tree-node__content {
    height: 44px;
  }
  /deep/.el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background-color: #dceffc;
    border-left: 2px solid #1890ff;
  }
  /deep/.el-divider--horizontal {
    margin: 0 0 14px -18px;
    width:calc(100% + 36px)
  }
  .treeicon{
    display: inline-block;
    background-image: url("../../public/img/tree/folder.png");
    height: 15px;
    width: 16px;
    margin-right: 3px;
    background-size: contain;
    background-repeat: no-repeat;
    white-space: pre;
    position: relative;
    top: 2px;
  }
  .treeiconopen{
      background-image: url("../../public/img/tree/folder-open.png");
  }
}
</style>