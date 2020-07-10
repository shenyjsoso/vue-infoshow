<!-- 条件查询结果页 -->
<template>
  <div class="ConditionsQuery">
    <div class="container">
      <div class="header">
        <el-form
          inline
          :model="SearchInfo"
          class="SearchForm"
          ref="SearchForm"
          style="width:100%"
        >
         <el-row :gutter="24">
         <el-col :span="6"> <el-form-item label="患者姓名:" prop="name">
             <el-input v-model.trim="SearchInfo.name" :clearable="true"></el-input> 
          </el-form-item>
          </el-col>
         <el-col :span="6"> <el-form-item label="身份证号:" prop="pass">
            <el-input v-model.trim="SearchInfo.pass" :clearable="true"></el-input>
          </el-form-item>
          </el-col>
         <el-col :span="6"> <el-form-item label="医保卡号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>
          </el-col>
         <el-col :span="6"> <el-form-item label="就诊类型:" prop="region">
            <el-select v-model="SearchInfo.region" :clearable="true">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          </el-col>
          </el-row>

          <el-row :gutter="24">
          <el-col :span="6"> <el-form-item label="门/急诊号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="6"> <el-form-item label="住院号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>
          </el-col>
         <el-col :span="6">  <el-form-item label="就诊时间:" prop="date">
            <el-date-picker
              v-model="SearchInfo.date"
              type="date"
              align="center"
              size="small"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
          </el-col>
         <el-col :span="6" style="display:flex;justify-content:flex-end;">  
            <el-button class="btn"  size="medium" @click="CLEANSEARCHINFO()">重置</el-button>
            <el-button class="btn"  type="primary" size="medium" @click="onSubmit('SearchForm')">查询</el-button>
          
          </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="tableMain">
        <el-table
          :data="TableData"
          style="width: 100%"
          header-row-class-name="tableHeader"
          v-loading="Loading"
          @row-click="rowclick"
        >
          <el-table-column prop="a" label="身份证号" width="180"></el-table-column>
          <el-table-column prop="b" label="姓名">
            <template slot-scope="scope">
            <span style="color:#4299F0; cursor: pointer;" @click="rowclick(scope.row)">{{scope.row.b}}</span>
          </template>
          </el-table-column>
          <el-table-column prop="b" label="性别"></el-table-column>

          <el-table-column prop="date" label="出生日期">
            <template slot-scope="scope">
              <span style="color:#EF6060">{{$moment(scope.row.date).format("YYYY*MM*DD")}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="b" label="电话"></el-table-column>
          <el-table-column prop="c" label="户籍地址"></el-table-column>
          <el-table-column prop="c" label="医保卡号"></el-table-column>
          <el-table-column prop="c" label="门急诊/住院号"></el-table-column>
          <el-table-column prop="c" label="就诊日期"></el-table-column>
        </el-table>
      </div>
      <div class="page">
        <hy-pagination
          :total="page.total"
          :pageSize="page.pageSize"
          @current-change="handleCurrentChange"
        ></hy-pagination>
      </div>
    </div>

    <div class="footer">
      <!-- 底部 -->
      苏州市环亚数据技术有限公司 版权所有
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如:组件，工具js，第三方插件js，json文件，图片文件等等）
import {mapMutations,mapState} from 'vuex'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      TableData: [
        {
          id: "1",
          a: "222888499876543543",
          b: "222222",
          c: "333333",
          date: "2020-01-01"
        },
        { id: "2", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "3", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "4", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "5", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "6", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "7", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "8", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "9", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" },
        { id: "10", a: "aaaaa", b: "222222", c: "333333", date: "2020-01-01" }
      ], //表格数据
      Loading: false, //表格加载
      page: {
        currentPage: 1,
        total: 0,
        pageSize: 10
      }, //分页
      formInline: {
        user: "",
        name: "",
        region: "",
        date: this.$moment().format("YYYY-MM-DD"),
        pass: ""
      }, //表单数据
    };
  },
  props: {},
  //计算属性 类似于data概念
  computed: {
        ...mapState([
                'userid',
                'SearchInfo',
            ])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(['SETUSERID','CLEANSEARCHINFO']),
    //查询按钮事件
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCurrentChange(page) {
      console.log(page);
    },
    rowclick(row) {
    console.log("点击了", row);
    if(row.id ){
      console.log('走保存',row.id );
      this.SETUSERID(row.id )
    }
    this.$router.push({name: "homeinfo"}).catch(err => {err;});
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
.ConditionsQuery {
  background: #f4f6fa;
  width: 100%;
  height: 100%;
  position: relative;
  .container {
    padding: 16px 24px;
    position: absolute;
    bottom: 56px;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    .header {
      background: #fff;
      // height: 200px;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px 56px 4px 56px;
      .btn {
        width:80px;
        height:36px;
      }
      /deep/.el-form--inline .el-form-item {
        margin-right: 24px;
        margin-bottom: 28px;
        width: 100%;
        display: flex;
      }
      /deep/.el-select{
        width:100%;
      }
      /deep/.el-form-item--small .el-form-item__content{
        flex:1;
      }
      /deep/.el-date-editor.el-input{
        width:100%;
      }
      /deep/.el-button--medium{
        font-size:15px;
      }
      /deep/.el-button--primary{
        background-color:#4299F0;
        border-color:#4299F0;
      }
      /deep/.el-input--small .el-input__inner{
        height:36px;
        line-height:36px;
      }
      /deep/.el-form-item--small .el-form-item__label{
         line-height:36px; 
      }
      // /deep/.el-date-editor.el-input{
      //   width: 160px;
      // }
    }
    .tableMain {
      margin: 32px 0;
      // max-height: 495px;
      background: #fff;
      padding: 20px;
      overflow: auto;

      .textStyle {
        color: #478cd1;
        cursor: pointer;
      }
    }
    .page {
      margin-top: 15px;
      text-align: right;
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
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