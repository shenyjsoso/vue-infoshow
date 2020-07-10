<!-- 维护 -->
<template>
  <div class="Maintenance">
    <div class="lefttree">
      <TreeMenu
        @treeAdd="treeAdd"
        @treeEdit="treeEdit"
        @treeDelete="treeDelete"
        :data="treeData"
        treeTitle="闭环流程配置"
        @node-click="handleNodeClick"
      ></TreeMenu>
    </div>
    <div class="content">
      <div class="title">
        <div class="name">闭环流程</div>
        <el-button type="primary" icon="el-icon-plus" size="medium" @click="addMt">新增闭环节点</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        header-row-class-name="tableHeader"
        v-loading="tableloading"
        size="medium"
      >
        <el-table-column prop="code" label="显示序号">
          <template slot-scope="scope">
            {{scope.row.code}}
            <i class="el-icon-top" style="color:#4299F0;font-size: 16px;cursor: pointer;" @click="MoveUp(scope.$index,scope.row)" v-if="scope.$index!=0"></i>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="执行状态编码"></el-table-column>
        <el-table-column prop="type" label="闭环节点"></el-table-column>
        <el-table-column prop="date" label="创建时间">
          <template slot-scope="scope">
            <span style="color:#EF6060">{{$moment(scope.row.date).format("YYYY*MM*DD")}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="systemInfo" label="业务系统"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <span class="text" style="margin-right: 17px;" @click="tableEdit(scope.row)">
              <i class="el-icon-edit" style="color:#4299F0"></i>编辑
            </span>
            <span class="text" @click="tableDelete(scope.row)">
              <i class="el-icon-delete" style="color:red"></i>删除
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

    <!-- 新增闭环节点弹框 -->
    <CustomDialog
      :visible.sync="addMtDialog"
      :title="MTTittle"
      width="566px"
      @cancel="$_handleCancel"
      @confirm="$_handleConfirm('SearchForm')">
      <div class="form">
        <el-form :model="MTform" label-width="130px" :rules="rules" ref="SearchForm">
          <el-form-item label="闭环节点编码：" prop="code">
            <el-input v-model="MTform.code" placeholder="请输入闭环节点编码"></el-input>
          </el-form-item>
          <el-form-item label="闭环节点名称：" prop="name">
            <el-input v-model="MTform.name" placeholder="请输入闭环节点名称"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </CustomDialog>
        <!-- 左侧树形控件弹框 -->
    <CustomDialog
      :visible.sync="treeadd"
      :title="nodetitle"
      width="500px"
      @cancel="cancel"
      @confirm="confirm">
      <div class="nodeform">
        <el-form ref="nodeform" :model="nodeForm" label-width="100px">
          <el-form-item label="节点名称：">
            <el-input v-model="nodeForm.name" placeholder="请输入节点名称" :clearable="true"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </CustomDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
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
      addMtDialog: false, //新增闭环弹框
      treeadd:false,//左侧树形控件弹框
      nodetitle:'',//左侧树形控件弹框的标题
      MTTittle:'',//新增，编辑弹框的标题
      MTform: {
        code: "",
        name: ""
      },//闭环节点弹框输入框数据
      nodeForm:{
        name:"",
      },
      rules: {
        code: [{ required: true, message: "请输入闭环节点编码", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" }],
        name: [
          { required: true, message: "请输入闭环节点名称", trigger: "blur" }
        ],
        
      }, //表单校验规则
      treeData: [
        {
          label: "闭环",
          id: 1,
          children: [
            {
              id: 2,
              label: "闭环1"
            },
            {
              id: 3,
              label: "开环2"
            },
            {
              id: 4,
              label: "闭环3"
            },
            {
              id: 5,
              label: "闭环3"
            }
          ]
        }
      ],
      tableData: [
        {
          code: "1",
          index:'1',
        },
        {
          code: "2",
     
        },
        {
          code: "3",
      
        },
        {
          code: "4",
       
        },
        {
          code: "5",
       
        },
        {
          code: "6",
 
        },
   
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
    //新增闭环弹框确认按钮
    $_handleConfirm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //新增闭环弹框取消按钮
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
    //表格中的编辑事件
    tableEdit(row) {
      this.MTTittle='编辑闭环节点';
      console.log(row);
      this.addMtDialog = true;
      this.MTform.code=row.code;
      this.MTform.name=row.name;
    },
    //表格中的删除事件
    tableDelete(row) {
      console.log(row);
      this.PromptWindow(row);
    },
    //表格行向上移动
    MoveUp(index,row){
      console.log('上移',index,row);
      console.log(this.tableData[index]);
      if (index > 0) {
        let upDate = this.tableData[index - 1];
        this.tableData.splice(index - 1, 1);
        this.tableData.splice(index,0, upDate);
      } else {
        this.$message({
          message: '已经是第一条，不可上移',
          type: 'warning'
        });
      }
    },
    //分页按钮
    currentChange(val) {
      console.log(val);
    },
    //新增闭环节点按钮
    addMt() {
      this.MTTittle='新增闭环节点';
      this.addMtDialog = true;
      this.MTform.code="";
      this.MTform.name="";
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
      console.log("维护页面",data);
    },
    //提示窗口
    PromptWindow(row) {
        let msg = `是否删除`
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
                                    message: '删除成功!',
                                })
                                done()
                            }
                        },
                        (err) => {
                            instance.confirmButtonLoading = false
                            instance.confirmButtonText = '确定'
                            this.loading = false
                            this.$message.error(err || '删除失败')
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
.Maintenance {
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
  .form {
    margin: 30px 78px;
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
      /deep/.el-button--primary{
        background-color:#4299F0;
        border-color:#4299F0;
      }
    }
    .page {
      float: right;
      margin-top: 10px;
    }
    .text {
      color: #585858;
      cursor: pointer;
      i{
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