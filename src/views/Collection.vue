<!-- 收藏 -->
<template>
  <div class="Collection">
    <div class="lefttree">
      <TreeMenu
        @treeAdd="treeAdd"
        @treeEdit="treeEdit"
        @treeDelete="treeDelete"
        :data="treeData"
        treeTitle="全部收藏"
        @node-click="handleNodeClick"
      ></TreeMenu>
    </div>
    <div class="content">
      <div class="title">
        <div class="name">收藏列表</div>
        <!-- <el-button type="primary" icon="el-icon-plus" size="medium" @click="addMt">编辑收藏</el-button> -->
      </div>
      <el-table
        :data="tableData"
        :highlight-current-row="true"
        style="width: 100%"
        header-row-class-name="tableHeader"
        v-loading="tableloading"
        size="medium"
      >
        <el-table-column prop="code" label="序号"></el-table-column>
        <el-table-column prop="name" label="姓名">
          <template slot-scope="scope">
            <span style="color:#4299F0; cursor: pointer;" @click="jumpToHomeByName(scope.row)">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="性别"></el-table-column>
        <el-table-column prop="type" label="年龄"></el-table-column>
        <el-table-column prop="type" label="备注"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <span class="text" style="margin-right: 17px;" @click="tableEdit(scope.row)">
              <i class="el-icon-edit" style="color:#4299F0"></i>编辑
            </span>
            <span class="text" @click="CancelCollection(scope.row)">
              <i class="el-icon-star-on" style="color:#ff9423"></i>取消收藏
            </span>
          </template>
        </el-table-column>
      </el-table>

      <div class="page">
        <el-pagination
          layout="prev, pager, next,jumper"
          :current-page.sync="page.pageNum"
          :size="page.size"
          :total="page.total"
          @current-change="currentChange"
        ></el-pagination>
      </div>
    </div>

    <div class="footer">
      <!-- 底部 -->
      苏州市环亚数据技术有限公司 版权所有
    </div>

    <!-- 编辑收藏弹框 -->
    <CustomDialog
      :visible.sync="addMtDialog"
      title="编辑收藏"
      width="568px"
      @cancel="$_handleCancel"
      @confirm="$_handleConfirm">
      <div class="tree">
        <TreeMenu
          @treeAdd="treeAdd"
          @treeEdit="treeEdit"
          @treeDelete="treeDelete"
          :data="treeData"
          treeTitle="收藏列表"
          @node-click="DialogNodeClick"
        ></TreeMenu>
      </div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="55px">
          <el-form-item label="备注：">
            <el-input v-model="form.name" placeholder="请输入备注" :clearable="true"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </CustomDialog>
    <!-- 树形控件中按钮弹框 -->
    <CustomDialog
      :visible.sync="treeadd"
      :title="nodetitle"
      width="500px"
      @cancel="cancel"
      @confirm="confirm">
      <div class="nodeform">
        <el-form ref="nodeform" :model="form" label-width="100px">
          <el-form-item label="节点名称：">
            <el-input v-model="form.name" placeholder="请输入节点名称" :clearable="true"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </CustomDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {mapMutations} from 'vuex'
import CustomDialog from "@/components/CustomDialog.vue";
import TreeMenu from "@/components/treeMenu.vue";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    CustomDialog,
    TreeMenu
  },
  data() {
    //这里存放数据
    return {
      tableloading: false,
      addMtDialog: false, //新增收藏按钮弹框
      treeadd:false,//左侧树形控件弹框
      nodetitle:'',//左侧树形控件弹框的标题
      form: {
        name: "",
        age: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      }, //表单校验规则
      treeData: [
        {
          label: "收藏",
          id: 1,
          children: [
            {
              id: 2,
              label: "收藏1"
            },
            {
              id: 3,
              label: "收藏2"
            },
            {
              id: 4,
              label: "收藏3"
            },
            {
              id: 5,
              label: "收藏3"
            },
            {
              id: 6,
              label: "收藏3"
            },
            {
              id: 7,
              label: "收藏3"
            },
            {
              id: 8,
              label: "收藏3"
            }
          ]
        }
      ],
      tableData: [
        {
          code: "123",
          name: "小李"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        },
        {
          code: "2"
        }
      ],
      page: {
        total: 0,
        size: 10,
        pageNum: 1
      }
    };
  },
  props: {},
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(['SETUSERID']),
    //新增收藏弹框确认按钮
    $_handleConfirm() {
      alert("submit!");
      this.addMtDialog = false;
    },
    //新增收藏弹框取消按钮
    $_handleCancel() {
      this.addMtDialog = false;
    },
    //树形控件中的新增事件
    treeAdd(key) {
      console.log("key", key);
      this.nodetitle='新增节点'
      this.treeadd=true;
    },
    //树形控件中的编辑事件
    treeEdit(key) {
      console.log("key", key);
      this.nodetitle='编辑节点'
      this.treeadd=true;
    },
    //树形控件中的删除事件
    treeDelete(key) {
      console.log("key", key);
    },
    // //弹框树形控件中的新增事件
    // DialogtreeAdd(key) {
    //   console.log("弹框key", key);
    //   this.treeAdd(key);
    // },
    // //弹框树形控件中的编辑事件
    // DialogtreeEdit(key) {
    //   console.log("弹框key", key);
    //   this.treeEdit(key);
    // },
    // //弹框树形控件中的删除事件
    // DialogtreeDelete(key) {
    //   console.log("弹框key", key);
    //   this.treeDelete(key);
    // },
    //表格中的编辑事件
    tableEdit(row) {
      console.log(row);
      this.addMtDialog = true;
    },
    //表格中的取消收藏事件
    CancelCollection(row) {
      console.log(row);
      this.PromptWindow(row);

    },
    //分页按钮
    currentChange(val) {
      console.log(val);
    },
    //左侧树形控件弹框取消按钮事件
    cancel(){
      this.treeadd = false;
    },
    //左侧树形控件弹框确认按钮事件
    confirm(){
      this.treeadd = false;
    },
    //点击左侧树形控件节点时触发事件
    handleNodeClick(data) {
      console.log("收藏页",data);
    },
    //点击弹框树形控件节点时触发事件
    DialogNodeClick(data){
        console.log("弹框",data);
    },
    //点击姓名跳转
    jumpToHomeByName(row){
      console.log('点击姓名',row);
      this.SETUSERID(row.code)
      this.$router.push({name: "homeinfo"}).catch(err => {err;});
      
    },
    //提示窗口
    PromptWindow(row) {
        let msg = `是否取消收藏`
        // 删除
        const h = this.$createElement
        const tishi = require('../../public/img/tag/tishi.png')
        this.$msgbox({
            title: '',
            message: h('div', { style: 'padding-left:22px' }, [
                h('h2', { style: 'color:#262626;font-size:16px;' }, [
                    h(
                        'img',
                        {
                            style: 'display:inline-block;width:22px;height:22px;position: absolute;left:-6px',
                            attrs: {
                                src: tishi,
                            },
                        },
                        ''
                    ),
                    h('span', null, '提示 '),
                ]),
                h('div', { style: 'padding-top:10px;font-size:14px;' }, msg),
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    instance.confirmButtonLoading = true
                    instance.confirmButtonText = '执行中...'
                    let param = {
                        id: row.id ? row.id : '',
                    }
                    this.$ajax.inter.deleteinterInfo(param).then(
                        (res) => {
                            instance.confirmButtonLoading = false
                            instance.confirmButtonText = '确定'
                            this.loading = false
                            let data = res.data.result
                            if (res.data.code == 200) {
                                this.getdata()
                                this.$message({
                                    type: 'success',
                                    message: '取消成功!',
                                })
                                done()
                            }
                        },
                        (err) => {
                            instance.confirmButtonLoading = false
                            instance.confirmButtonText = '确定'
                            this.loading = false
                            this.$message.error(err || '取消失败')
                        }
                    )
                } else {
                    done()
                }
            },
        })
            .then((action) => {})
            .catch((action) => {})
    },
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
.Collection {
  background: rgba(244, 246, 250, 1);
  margin: 16px 24px 0 24px;
  position: absolute;
  overflow: auto;
  top: 44px;
  left: 0;
  bottom: 0;
  right: 0;
  .nodeform{
    margin: 20px;
  }
  .lefttree {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 280px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 4px 2px 16px 6px rgba(102, 111, 128, 0.03);
  }
  .tree {
    width: 442px;
    height: 358px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(217, 217, 217, 1);
    margin: 26px 63px;
  }
  .form {
    margin: 0 62px;
  }
  .content {
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 56px;
    right: 0;
    left: 306px;
    overflow: auto;
    padding: 16px;
    .title {
      height: 30px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom: 10px;
      .name{
        font-size:16px;
        font-family:MicrosoftYaHei;
        color:rgba(38,38,38,1);
      }
      /deep/.el-button--primary {
        background-color: #4299f0;
        border-color: #4299f0;
      }
    }
    .page {
      float: right;
      margin-top: 10px;
    }
    .text {
      color: #585858;
      cursor: pointer;
      i {
        font-size: 16px;
      }
    }
  }
  .footer {
    height: 56px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 306px;
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