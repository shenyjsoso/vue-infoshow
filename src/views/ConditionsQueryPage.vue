<!-- 条件查询首页 -->
<template>
  <div class="ConditionsQuery">
    <div class="container">
      <div class="header">
        <div class="tittle">
          <img src="../../public/cdrimg/biaoti.png" alt />
        </div>
        <el-form
          label-width="80px"
          :inline="true"
          :model="SearchInfo"
          class="SearchForm"
          ref="SearchForm"
        >
          <el-form-item label="患者姓名:" prop="name">
            <el-input v-model.trim="SearchInfo.name" :clearable="true"></el-input>
          </el-form-item>

          <el-form-item label="身份证号:" prop="pass">
            <el-input v-model.trim="SearchInfo.pass" :clearable="true"></el-input>
          </el-form-item>

          <el-form-item label="医保卡号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>

          <el-form-item label="就诊类型:" prop="region">
            <el-select v-model="SearchInfo.region" :clearable="true">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="门/急诊号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>

          <el-form-item label="住院号:" prop="user">
            <el-input v-model.trim="SearchInfo.user" :clearable="true"></el-input>
          </el-form-item>

          <el-form-item label="就诊时间:" prop="date">
            <el-date-picker
              v-model="SearchInfo.date"
              type="date"
              align="center"
              size="small"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>

          <el-form-item>
            <div class="btnclass">
              <el-button class="btn" size="medium" @click="CLEANSEARCHINFO()">重置</el-button>
              <el-button class="btn" type="primary" size="medium" @click="onSubmit('SearchForm')">查询</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="bannerbg"></div>
    </div>
    <div class="introduce">
      <div class="bg">
        <span class="title">临床数据中心(CDR)</span>
        <span class="subtitle">Clinial Data Repository</span>
        <span
          class="content"
        >临床数据中心（CDR）以患者为中心，组织、整合、存储患者临床数据，将患者所有医疗信息以全面、标准、统一的方式整合存储，为临床数据的共享提供统一的平台支撑。</span>
        <span class="subcontent">对各类临床数据进行标准化、结构化表达、组织和存储，并在此基础上开放统一的、标准的、符合法律规范和安全要求的数据访问服务。</span>
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
import { mapMutations, mapState } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    //身份证校验规则
    var validateIdCard = (rule, value, callback) => {
      console.log("rule", rule);
      console.log("value", value);
      console.log("callback", callback);
      if (!value) {
        callback(new Error("身份证不能为空"));
      } else {
        if (this.SearchInfo.pass !== "") {
          // this.$refs.SearchForm.validateField('pass');
        }
        callback();
      }
    };
    return {
      rules: {
        pass: [
          { required: true, message: "请输入身份证", trigger: "blur" },
          { validator: validateIdCard, trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        date: [
          {
            required: true,
            message: "请选择日期",
            trigger: "blur"
          }
        ]
      } //表单校验规则
    };
  },
  props: {},
  //计算属性 类似于data概念
  computed: {
    ...mapState(["SearchInfo"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["CLEANSEARCHINFO"]),
    //查询按钮事件
    onSubmit(formName) {
      // this.$router.push({name: "conditionsquery"}).catch(err => {err;});
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ name: "conditionsquery" }).catch(err => {
            err;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
.ConditionsQuery {
  background: #f4f6fa;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  .container {
    // padding: 16px 24px;
    // position: absolute;
    background: linear-gradient(
      180deg,
      rgba(61, 140, 218, 1) 0%,
      rgba(62, 141, 227, 1) 100%
    );
    // bottom: 56px;
    // top: 21px;
    // left: 14px;
    // right: 14px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .header {
      // background: #3D8CDA;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      margin: 0 auto;
      width: 1280px;
      .tittle {
        text-align: center;
        margin-top: 66px;
        margin-bottom: 70px;
      }
      .SearchForm {
        margin: 0 20px;
      }
      .btn {
        width: 80px;
        height: 36px;
      }
      // /deep/.el-form-item--small.el-form-item{
      //   display: flex;
      // }
      /deep/.el-form-item__label {
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 1);
      }
      /deep/.el-form-item--small .el-form-item__label {
        line-height: 36px;
      }
      /deep/.el-form--inline .el-form-item {
        margin-right: 0px;
      }
      /deep/.el-button--medium {
        font-size: 16px;
      }
      /deep/.el-button {
        color: rgba(255, 255, 255, 1);
        background: transparent;
        border-color: rgba(255, 255, 255, 0.5);
        &:hover {
          opacity: 0.8;
        }
      }
      /deep/.el-button--primary {
        color: #3d8cdc;
        font-size: 15px;
        background: #c1e8ff;
        border-color: #4299f0;
      }

      /deep/.el-input--small .el-input__inner {
        height: 36px;
        width: 230px;
      }
      /deep/.el-date-editor.el-input {
        width: 230px;
      }
      .btnclass {
        width: 310px;
        display: flex;
        justify-content: flex-end;
      }
    }
    .bannerbg{
      width:1920px;
      height:120px;
      background-image: url(../../public/cdrimg/bannerbg.png);
      margin: 0 auto;
    }
  }
  .introduce {
    background: #fff;
    height: 380px;
    width: 100%;
    padding-top: 56px;
    .bg {
      width: 1280px;
      height: 270px;
      background-image: url(../../public/cdrimg/bg.png);
      margin: 0 auto;
      position: relative;
      .title {
        position: absolute;
        top: 23px;
        left: 64px;
        height: 43px;
        font-size: 32px;
        font-family: MicrosoftYaHei;
        color: rgba(26, 26, 26, 1);
        line-height: 43px;
      }
      .subtitle {
        position: absolute;
        top: 71px;
        left: 66px;
        height: 20px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: rgba(77, 77, 77, 1);
        line-height: 20px;
      }
      .content {
        position: absolute;
        top: 105px;
        left: 64px;
        width: 518px;
        height: 78px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: rgba(77, 77, 77, 1);
        line-height: 26px;
      }
      .subcontent {
        position: absolute;
        top: 193px;
        left: 64px;
        width: 506px;
        height: 52px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: rgba(77, 77, 77, 1);
        line-height: 26px;
      }
    }
  }
  .footer {
    // position: fixed;
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