<template>
  <div class="Patient-Info" v-loading="loading">
    <!-- 个人基本信息  {{ $viewText.homePage.userInfo }}-->
    <div class="patient-header">
      <span class="patient-title">xxx</span> 
      <img src="../../../public/img/idImg.png" alt class="idImg" />
    </div>
    <div class="patient-content">
      <div class="photo-box" v-if="photoShow">
        <img :src="personalInfo.photoImage" v-if="personalInfo.photoImage" />
        <img src="../../../public/img/photo_nan.png" alt='' 
        v-else-if="personalInfo.age < 18 && personalInfo.sexCode == '1'"/>
        <img
          src="../../../public/img/photo_nv.png"
          alt=''
          v-else-if="personalInfo.age < 18 && personalInfo.sexCode == '2'"/>
        <img
          src="../../../public/img/photo_man.png"
          alt=''
          v-else-if="personalInfo.age > 18 && personalInfo.sexCode == '1' "/>
        <img
          src="../../../public/img/photo_woman.png"
          alt=''
          v-else-if="personalInfo.age > 18 && personalInfo.sexCode == '2'"/>
      </div>
      <div class="photo-box" v-else></div>
      <div class="patient-info">
        <span class="patient-name">{{ personalInfo.name }}</span>
        <img src="../../../public/img/nan.png" alt v-if="personalInfo.sexCode == '1'" />
        <img src="../../../public/img/nv.png" alt class="idImg" v-if="personalInfo.sexCode == '2'" />
        <span class="other-info">{{ personalInfo.age }}&nbsp;岁</span>
        <span class="other-info">{{ personalInfo.ageArea }}</span>
        <i class="el-icon-star-off" style="color:#ff9423" @click="openCollectionForm"></i>
      </div>
      <div class="patient-diseases" ref="tagRef">
        <span v-for="(item, index) in tagList" :key="index">
          <span v-if="index < setMoreShow('tagRef', tagList, 'VALUE')">{{ item.VALUE }}</span>
        </span>
        <span v-if="tagList.length > setMoreShow('tagRef', tagList, 'VALUE')" @click="modalShow = true" style="cursor: pointer;">...</span>
      </div>
      <div class="patient-detail">
        <div>
          电话：{{personalInfo.telephone}}&nbsp;&nbsp;&nbsp;
          血型：{{personalInfo.bloodType}}
        </div>
        <div style="overflow: hidden;">
          联系人姓名：{{personalInfo.relationName}}&nbsp;&nbsp;&nbsp;
          联系人电话：
          <span :title="personalInfo.contactTel">{{ personalInfo.contactTel }}</span>
        </div>
        <div>身份证号：{{ personalInfo.idCard }}</div>
        <!-- <div style="overflow: hidden;"> -->
        <!-- 出生日期：<span>{{$formatDate(personalInfo.birthday)}}</span> -->
        <!-- 血&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：<span>{{personalInfo.bloodType}}</span>&nbsp;&nbsp; -->
        <!-- 民族：<span :title="personalInfo.nation">{{personalInfo.nation}}</span> -->
        <!-- </div> -->
        <div
          style="overflow: hidden;text-overflow:ellipsis; white-space:nowrap;"
          :title="personalInfo.signOrgan"
        >建档机构：{{ personalInfo.signOrgan }}</div>
        <div
          style="overflow: hidden;text-overflow:ellipsis; white-space:nowrap;"
          :title="personalInfo.address"
        >家庭住址：{{ personalInfo.address }}</div>
        <div
          style="overflow: hidden;text-overflow:ellipsis; white-space:nowrap;"
          :title="personalInfo.qytdmc"
        >签约团队：{{personalInfo.qytdmc}}</div>
      </div>
    </div>
    <MaxDialog v-model="modalShow" width="600">
      <div class="title">
        <img src="../../../public/img/baioti.png" alt />
        <span>人群标签</span>
      </div>
      <div class="modal-body">
        <div class="patient-diseases">
          <span v-for="(item, index) in tagList" :key="index">
            {{
            item.VALUE
            }}
          </span>
        </div>
      </div>
    </MaxDialog>
        <!-- 收藏弹框 -->
    <CustomDialog
      :visible.sync="addMtDialog"
      title="收藏"
      width="568px"
      @cancel="$_handleCancel"
      @confirm="$_handleConfirm">
      <div class="tree">
        <TreeMenu
          @treeAdd="DialogtreeAdd"
          @treeEdit="DialogtreeEdit"
          @treeDelete="DialogtreeDelete"
          :data="treeData"
          @node-click="DialogNodeClick"
          treeTitle="收藏列表"
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
        <!-- 收藏弹框树形控件弹框 -->
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
import MaxDialog from "../../components/Max-Dialog.vue";
import { binaryToImage } from "../../assets/utils.js";
import CustomDialog from "@/components/CustomDialog.vue";
import TreeMenu from "@/components/treeMenu.vue";
export default {
  components: {
    MaxDialog,
    CustomDialog,
    TreeMenu
  },
  data() {
    return {
      loading: false,
      personalInfo: {},
      tagList: [],
      modalShow: false,
      photoShow: false,
      addMtDialog: false, //收藏弹框
      treeadd:false,//左侧树形控件弹框
      nodetitle:'添加收藏',//树形控件弹框的标题
      form: {
        name: "",
        age: ""
      },
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
    };
  },
  mounted() {
    // this.getPersonalInfo();
    // this.getTagMarkByMpi();
  },
  methods: {
    getNotNull(str) {
      if (str) {
        return str;
      } else {
        return "";
      }
    },
    getPersonalInfo() {
      var param = {
        mpi: this.$getMpi()
      };
      this.loading = true;
      this.$store
        .dispatch("homePage/getPersonInfoForHomeByMpi", param)
        .then(res => {
          this.loading = false;
          // console.log(res);
          if (res.status == 200) {
            this.personalInfo = res.data;
            console.log(res.data);
            if (this.personalInfo.birthday) {
              this.personalInfo.age = this.jsGetAge(this.personalInfo.birthday);
              this.personalInfo.ageArea = this.jsAgeArea(
                this.personalInfo.birthday
              );
            }
            this.personalInfo.photoImage = this.toImage(
              this.personalInfo.photo
            );
            sessionStorage.setItem("sexCode", this.personalInfo.sexCode);
            this.$nextTick(() => {
              this.photoShow = true;
            });
          }
        });
    },
    toImage(avatar) {
      //二进制头像转化为图片
      if (avatar) {
        return binaryToImage(avatar);
      } else {
        return "";
      }
    },
    getTagMarkByMpi() {
      var param = {
        mpi: this.$getMpi()
      };
      this.$store
        .dispatch("personalInformation/getTagMarkByMpi", param)
        .then(res => {
          if (res.status == 200) {
            this.tagList = res.data;
          }
        });
    },
    jsGetAge(strBirthday) {
      var returnAge;
      var strBirthdayArr = strBirthday.split("-");
      var birthYear = strBirthdayArr[0];
      var birthMonth = strBirthdayArr[1];
      var birthDay = strBirthdayArr[2];

      var d = new Date();
      var nowYear = d.getFullYear();
      var nowMonth = d.getMonth() + 1;
      var nowDay = d.getDate();

      if (nowYear == birthYear) {
        returnAge = 0; //同年 则为0岁
      } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
          if (nowMonth == birthMonth) {
            var dayDiff = nowDay - birthDay; //日之差
            if (dayDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          } else {
            var monthDiff = nowMonth - birthMonth; //月之差
            if (monthDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          }
        } else {
          returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
        }
      }
      return returnAge; //返回周岁年龄
    },
    //计算年龄时期
    jsAgeArea(strBirthday) {
      var birthYear = Number(strBirthday.split("-")[0]);
      var nowYear = new Date().getFullYear();
      if (nowYear <= birthYear + 4) {
        return "婴儿期";
      } else if (birthYear + 4 < nowYear && nowYear <= birthYear + 11) {
        return "儿童期";
      } else if (birthYear + 11 < nowYear && nowYear <= birthYear + 18) {
        return "少年期";
      } else if (birthYear + 18 < nowYear && nowYear <= birthYear + 35) {
        return "青年期";
      } else if (birthYear + 35 < nowYear && nowYear <= birthYear + 59) {
        return "中年期";
      } else if (nowYear > birthYear + 59) {
        return "老年期";
      }
    },
    setMoreShow(refName, list, keyName) {
      //设置更多标签显示
      //疾病史：占60
      //每个中文字占15
      //其他12
      //更多两个字占32
      let ref = this.$refs[refName];
      if (ref) {
        let elWidthValue = ref.offsetWidth;
        let lastWidth = elWidthValue - 42;
        let length = 0;
        let index = list.length;
        for (let i = 0; i < list.length; i++) {
          let keyLength = list[i][keyName] ? list[i][keyName].length : 0;
          let num = keyLength * 15 + 12;
          length += num;
          if (length > lastWidth) {
            index = i;
            break;
          }
        }
        return index;
      }
    },
      //打开收藏弹框
    openCollectionForm(){
      this.addMtDialog=true;
    },
    //弹框确认按钮
    $_handleConfirm(formName) {
      alert("submit!");
      this.addMtDialog = false;
    },
    //弹框取消按钮
    $_handleCancel() {
      this.addMtDialog = false;
    },
    //弹框树形控件中的新增事件
    DialogtreeAdd(key) {
      console.log("弹框key", key);
      this.treeadd=true;
    },
    //弹框树形控件中的编辑事件
    DialogtreeEdit(key) {
      console.log("弹框key", key);
      this.treeadd=true;
    },
    //弹框树形控件中的删除事件
    DialogtreeDelete(key) {
      console.log("弹框key", key);
    },
    //点击弹框树形控件节点时触发事件
    DialogNodeClick(data){
        console.log("个人收藏弹框",data);
    },
    //树形控件弹框取消按钮事件
    cancel(){
      this.treeadd = false;
    },
    //树形控件弹框确认按钮事件
    confirm(){
      this.treeadd = false;
    },
  }
  
};
</script>
<style lang="less" scoped>
.Patient-Info {
//   height: 442px;
//   width:430px;
	height:420px;
	width: 0;
	flex:1;
// 	flex:0 0 auto;
  background: #ffffff;
box-shadow:0px 2px 8px 0px rgba(176,182,187,1);
border-radius:4px;
  .tree {
    width: 442px;
    height: 358px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(217, 217, 217, 1);
    margin: 26px 63px;
    overflow: auto;
  }
  .form {
    margin: 0 62px;
  }
  .nodeform{
    margin: 20px;
  }
  .patient-header {
    height: 90px;
    //background:linear-gradient(0deg,rgba(69,133,230,1) 0%,rgba(69,122,229,1) 100%);
    background: linear-gradient(
      0deg,
      rgba(72, 151, 240, 1) 99%,
      rgba(127, 181, 240, 1) 1%
    );
    border-radius: 4px 4px 0 0;
    padding-top: 21px;
    box-sizing: border-box;

    .patient-title {
      font-size: 17px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      margin-left: 20px;
    }

    .idImg {
      float: right;
      width: 46px;
      height: 38px;
      margin-right: 29px;
    }
  }

  .patient-content {
    text-align: center;
    box-sizing: border-box;
    padding: 0 50px;

    .photo-box {
      width: 116px;
      height: 142px;
      line-height: 142px;
      margin: auto;
      box-shadow: 0px 2px 8px 0px rgba(139, 150, 176, 0.3);
      background: #ffffff;
      margin-top: -45px;

      img {
        // vertical-align: middle;
        width: 110px;
        height: 136px;
        margin-top: 3px;
      }
    }

    .patient-info {
      text-align: center;
      margin-top: 10px;
      i{
        font-size: 20px;
        cursor:pointer;
      }
      span {
        font-weight: bold;
        margin-right: 8px;
      }

      img {
        margin-right: 8px;
      }

      .patient-name {
        font-size: 20px;
        color: #474f59;
        padding-right: 2px;
      }

      .other-info {
        font-size: 18px;
        //color: #3172F5;
        color: #4b99f0;
      }
    }

    .patient-detail {
      text-align: left;

      div {
        height: 27px;
        line-height: 27px;
        font-size: 14px;
        color: #3d434d;
        box-sizing: border-box;
        border-bottom: 1px solid #e6e6e6;
      }
    }
  }

  .patient-diseases {
    margin: 13px 0 13px 0;
    box-sizing: border-box;
    white-space: nowrap;

    span {
      padding: 3px 9px;
      color: #e8823e;
      font-size: 14px;
      background: #fcf5e8;
      border: 1px solid #e8823e;
      border-radius: 9px;
      margin-right: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }
}
</style>
