<template>
  <div class="History" v-loading="loading">
    <!-- 既往史  {{ $viewText.homePage.leftBottom.name }}-->
    <div class="title">
      <img src="../../../public/img/baioti.png" alt />
      <span>既往史</span>
    </div>
    <!-- <div class="disease-info" ref="diseaseInfoRef" :class="{'lineHeight31':isWoman}">
			<span class="disease-title">疾病史：</span>
			<span style="font-weight: bold;" v-if="!diseaseList||diseaseList.length==0">无</span>
			<span v-else>
				<span class="disease-name disease-history"
					v-for="(item,index) in diseaseList"
					v-if="index < setMoreShow('diseaseInfoRef',diseaseList,'diagnosis')" @click="toViewCom(item)">{{item.diagnosis}}</span>
				<span class="disease-name disease-history"
					v-if="diseaseList.length > setMoreShow('diseaseInfoRef',diseaseList,'diagnosis')" @click="checkAll(1)">...</span>
			</span>
    </div>-->
    <div class="disease-info lineHeight31" ref="diseaseInfoRef">
      <span class="disease-title">门诊史：</span>
      <span style="font-weight: bold;" v-if="!clinicList || clinicList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name disease-history"
          v-for="(item, index) in clinicList"
          :key="index"
          @click="toViewCom(item)"
        ><span v-if="setMoreShow('diseaseInfoRef', clinicList, 'diagnosis') > index">{{ item.diagnosis }}</span></span>
        <span
          class="disease-name disease-history"
          v-if="clinicList.length > setMoreShow('diseaseInfoRef', clinicList, 'diagnosis')"
          @click="checkAll(0)"
        >...</span>
      </span>
    </div>
    <div class="disease-info lineHeight31" ref="diseaseInfoRef">
      <span class="disease-title">住院史：</span>
      <span style="font-weight: bold;" v-if="!inHospitalList || inHospitalList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name disease-history"
          v-for="(item, index) in inHospitalList"
          :key="index"
         
          @click="toViewCom(item)"
        ><span  v-if="setMoreShow('diseaseInfoRef', inHospitalList, 'diagnosis') > index">{{ item.diagnosis }}</span>
        </span>
        <span
          class="disease-name disease-history"
          v-if="inHospitalList.length > setMoreShow('diseaseInfoRef', inHospitalList, 'diagnosis')"
          @click="checkAll(1)"
        >...</span>
      </span>
    </div>

    <div class="disease-info lineHeight31" ref="operateRef">
      <span class="disease-title">手术史：</span>
      <span style="font-weight: bold;" v-if="!operateList || operateList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name operate-history"
          v-for="(item, index) in operateList"
          :key="index"
          
          @click="toViewCom(item)"
        >
        <span v-if="index < setMoreShow('operateRef', operateList, 'labelName')">{{ item.labelName }}</span>
        </span>
        <span
          class="disease-name operate-history"
          v-if="operateList.length > setMoreShow('operateRef', operateList, 'labelName')"
          @click="checkAll(2)"
        >...</span>
      </span>
    </div>
    <div class="disease-info lineHeight31" ref="bigDiaRef">
      <span class="disease-title">重大疾病史：</span>
      <span style="font-weight: bold;" v-if="!zdjbsList || zdjbsList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name operate-history"
          v-for="(item, index) in zdjbsList"
          :key="index"
         
          @click="toViewCom(item)"
        >
        <span  v-if="index < setMoreShow('bigDiaRef', zdjbsList, 'labelName')">{{ item.labelName }}</span>
        </span>
        <span
          class="disease-name operate-history"
          v-if="zdjbsList.length > setMoreShow('bigDiaRef', zdjbsList, 'labelName')"
          @click="checkAll(4)"
        >...</span>
      </span>
    </div>
    <div class="disease-info lineHeight31" ref="criAndDifRef">
      <span class="disease-title">疑难病例史：</span>
      <span style="font-weight: bold;" v-if="!criAndDifList || criAndDifList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name operate-history"
          v-for="(item, index) in criAndDifList"
          :key="index"
          
          @click="toViewCom(item)"
        >
        <span v-if="index < setMoreShow('criAndDifRef', criAndDifList, 'diseaseName')">{{ item.diseaseName }}</span>
        </span>
        <span
          class="disease-name operate-history"
          v-if="criAndDifList.length > setMoreShow('criAndDifRef', criAndDifList, 'diseaseName')"
          @click="checkAll(5)"
        >...</span>
      </span>
    </div>
    <div class="disease-info lineHeight31" ref="allergyHistoryRef">
      <span class="disease-title">过敏史：</span>
      <span style="font-weight: bold;" v-if="!allergyList || allergyList.length == 0">无</span>
      <span v-else>
        <span
          class="disease-name allergy-history"
          v-for="(item, index) in allergyList"
          :key="index"
         
        >
        <span  v-if="index < setMoreShow('allergyHistoryRef', allergyList, 'allergyHx')">{{ item.allergyHx }}</span>
        </span>
        <span
          class="disease-name allergy-history"
          v-if="allergyList.length > setMoreShow('allergyHistoryRef', allergyList, 'allergyHx')"
          @click="checkAll(3)"
        >...</span>
      </span>
    </div>
    <div class="disease-info lineHeight31">
      <span>输&nbsp;&nbsp;&nbsp;血：</span>
      <span style="font-weight: bold;" v-if="!bloodHistory || bloodHistory.length == 0">无</span>
      <span style="font-weight: bold;" v-else>
        <span v-for="(item, index) in bloodHistory" :key="index">{{ item.cNameBloodType }}&nbsp;</span>
      </span>
    </div>
    <!-- <div class="disease-info" :class="{ lineHeight31: isWoman }" v-if="isWoman">
            <span>生育史：</span>
            <span style="font-weight: bold;" v-if="!preWomanBasicInfo">无</span>
            <span style="font-weight: bold;" v-else>
                {{ preWomanBasicInfo.zyccs }}足(月生)-{{ preWomanBasicInfo.zccs }}早(产)-{{ preWomanBasicInfo.lczcs }}流(产)-{{
                    parseInt(preWomanBasicInfo.cc) - parseInt(preWomanBasicInfo.scls)
                }}存(活)&nbsp;
            </span>
    </div>-->
    <div class="disease-info disease-info-ban lineHeight31">
      <span>家族史：</span>
      <span style="font-weight: bold;" v-if="!familyHistory || familyHistory.length == 0">无</span>
      <span style="font-weight: bold;" v-else>
        <span v-for="(item, index) in familyHistory" :key="index">{{ item.medicalHistory }}&nbsp;</span>
      </span>
    </div>
    <div class="disease-info disease-info-ban lineHeight31">
      <span>遗传病史：</span>
      <span
        style="font-weight: bold;"
        v-if="!heredityHistoryList || heredityHistoryList.length == 0"
      >无</span>
      <span style="font-weight: bold;" v-else>
        <span v-for="(item, index) in heredityHistoryList" :key="index">{{ item.heredityHistory }}&nbsp;</span>
      </span>
    </div>
    <!-- <div class="disease-info disease-info-ban" :class="{'lineHeight31':isWoman}">
			<span>职业病史：</span>
			<span style="font-weight: bold;" v-if="!jobDiseaseList||jobDiseaseList.length==0">无</span>
			<span style="font-weight: bold;" v-else><span v-for="(item,index) in jobDiseaseList">{{item.jtbm}}&nbsp;</span></span>
    </div>-->
    <img src="../../../public/img/tu.png" alt class="pic" />

    <MaxDialog v-model="modalShow" width="600">
      <div class="title" style="padding: 0px 12px;">
        <img src="../../../public/img/baioti.png" alt />
        <span>{{ dialog.title }}</span>
      </div>
      <div class="modal-body">
        <span
          class="disease-name-max disease-history"
          v-for="(item, index) in dialog.list"
          :key="index"
          @click="toViewCom(item)"
        >
        <span v-if="dialog.style == 1">{{item.diagnosis}}</span>
        </span>
        <span
          class="disease-name-max operate-history"
          v-for="(item, index) in dialog.list" :key="index">
        <span v-if="dialog.style == 2">{{ item.labelName }}</span>
        </span>
        <span
          class="disease-name-max allergy-history"
          v-for="(item, index) in dialog.list"
          :key="index">
        <span v-if="dialog.style == 3">{{ item.allergyHx }}</span>
        </span>
        <span
          class="disease-name-max operate-history"
          v-for="(item, index) in dialog.list"
          :key="index"
          @click="toViewCom(item)"
        >
        <span v-if="dialog.style == 4">{{ item.labelName }}</span>
        </span>
        <span
          class="disease-name-max operate-history"
          v-for="(item, index) in dialog.list"
          :key="index"
          @click="toViewCom(item)">
        <span v-if="dialog.style == 5">{{ item.diseaseName }}</span>
        </span>
      </div>
    </MaxDialog>
  </div>
</template>
<script>
import MaxDialog from "../../components/Max-Dialog.vue";
export default {
  components: {
    MaxDialog
  },
  data() {
    return {
      loading: false,
      modalShow: false,
      dialog: {
        title: "",
        list: [],
        style: 1
      },
      isWoman: false,
      diseaseList: [],
      operateList: [],
      zdjbsList: [],
      allergyList: [],
      bloodHistory: [],
      familyHistory: [],
      heredityHistoryList: [],
      jobDiseaseList: [],
      clinicList: [],
      inHospitalList: [],
      criAndDifList: [],
      disLength: 3,
      preWomanBasicInfo: null
    };
  },
  mounted() {
    // this.getPersonSex();
    // this.getPastHistory();

  },
  methods: {
    setMoreShow(refName, list, keyName) {
      //设置更多标签显示
      //疾病史：占60
      //每个中文字占15
      //其他12
      //更多两个字占32
      let ref = this.$refs[refName];
      if (ref) {
        let elWidthValue = ref.offsetWidth;
        let lastWidth = elWidthValue - 142;
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
      //  		if(this.$refs.diseaseInfoRef){
      //   		let diseaseList = this.diseaseList;
      //   		let elWidthValue = this.$refs.diseaseInfoRef.offsetWidth;
      //   		let lastWidth = elWidthValue - 142;
      //   		let length = 0;
      //   		let index = diseaseList.length;
      //   		for(let i=0;i<diseaseList.length;i++){
      //   			let diagnosisLength = diseaseList[i].diagnosis ? diseaseList[i].diagnosis.length : 0;
      //   			let num = diagnosisLength*15 + 12;
      //   			length += num;
      //   			if(length > lastWidth){
      //   				index = i;
      //   				break;
      //   			}
      //   		}
      // 	this.disLength = index;
      // }
    },
    checkAll(val) {
      this.modalShow = true;
      if (val == 0) {
        (this.dialog.title = "门诊史"), (this.dialog.list = this.clinicList);
        this.dialog.style = 1;
      } else if (val == 1) {
        (this.dialog.title = "住院史"),
          (this.dialog.list = this.inHospitalList);
        this.dialog.style = 1;
      } else if (val == 2) {
        (this.dialog.title = "手术史"), (this.dialog.list = this.operateList);
        this.dialog.style = 2;
      } else if (val == 3) {
        (this.dialog.title = "过敏史"), (this.dialog.list = this.allergyList);
        this.dialog.style = 3;
      } else if (val == 4) {
        (this.dialog.title = "重大疾病史"), (this.dialog.list = this.zdjbsList);
        this.dialog.style = 4;
      } else if (val == 5) {
        (this.dialog.title = "疑难病例史"),
          (this.dialog.list = this.criAndDifList);
        this.dialog.style = 5;
      }
    },
    getPersonSex() {
      if (sessionStorage.getItem("sexCode") == "2") {
        this.isWoman = true;
      } else {
        this.isWoman = false;
      }
      /* var param={
					mpi:this.$getMpi(),
				};
				this.$store.dispatch('homePage/getPersonInfoForHomeByMpi',param).then((res)=>{
					if(res.status == 200){
						if(res.data.sexName=='女性'){
							this.isWoman = true;
						}else{
							this.isWoman = false;
						}
					}
				}) */
    },
    getPastHistory() {
      this.clinicList = [];
      this.inHospitalList = [];
      var param = {
        mpi: this.$getMpi()
      };
      this.loading = true;
      this.$store.dispatch("homePage/getPastHistory", param).then(
        res => {
          console.log(res);
          this.loading = false;
          if (res.status == 200) {
            this.diseaseList = res.data.diagnosisList;

            for (var i = 0; i < this.diseaseList.length; i++) {
              if (this.diseaseList[i].eventType == "1") {
                this.clinicList.push(this.diseaseList[i]);
              } else if (this.diseaseList[i].eventType == "3") {
                this.inHospitalList.push(this.diseaseList[i]);
              }
            }
            let bigList = res.data.bigDiseaseList.map(row => {
              row.labelName = row.diseaseName;
              return row;
            });

            let operateList = res.data.opsNameList.map(row => {
              row.labelName = row.operName;
              return row;
            });

            this.operateList = operateList;
            this.zdjbsList = bigList;
            this.allergyList = res.data.allergyHxList;
            this.bloodHistory = res.data.cNameBloodTypeList;
            this.familyHistory = res.data.medicalHistoryList;
            this.heredityHistoryList = res.data.heredityHistoryList;
            this.jobDiseaseList = res.data.jtbmList;
            this.preWomanBasicInfo = res.data.preWomanBasicInfo;
            this.criAndDifList = res.data.criAndDifList;
          }
        },
        err => {
          console.log(err);
          
          this.loading = false;
        }
      );
    },

    toViewCom(node) {
      //跳转
      console.log(node);
      var mpi = node.mpi;
      var param = {
        eventType: node.eventType,
        eventNo: node.eventNo,
        orgCode: node.orgCode,
        //orgName: node.organName,
        mpi: mpi,
        docCode: node.docCode,
        //docDate: node.diagnosisDate,
        docTypeCode: node.docTypeCode
      };
      // this.$Cookies.set(this.$getMpiKey(), param.mpi, { expires: 7 });
      var encode = this.$encode(JSON.stringify(param));
      var servicePath = "";
      switch (node.eventType) {
        case "5":
          servicePath = "MCHC";
          break;
        case "7":
          servicePath = "DiseaseControl";
          break;
        case "12":
          servicePath = "DiseaseManagement";
          break;
        default:
          servicePath = "MedicalService";
      }
      this.$router.push({
        path: `/Patient/${servicePath}/${param.eventNo}/${mpi}`,
        query: {
          node: encode
        }
      });
      this.$emit("close", false);
    }
  }
};
</script>
<style lang="less" scoped>
.History {
  // margin-right: 16px;
  flex:1;
  width: 100%;
  height: 100%;
  background: #ffffff;
box-shadow:0px 2px 7px 0px rgba(208,211,214,1);
border-radius:2px;
  box-sizing: border-box;
  padding: 20px 4px 0 5px;
  position: relative;
  .title {
    color: #525a66;
    font-size: 17px;
    margin-bottom: 20px;
    font-weight: bold;
    padding: 0 0 0 11px;
    img {
      margin-right: 8px;
    }
  }
  .lineHeight31 {
    line-height: 26px !important;
    padding: 0 11px;
  }
  .disease-info {
    line-height: 34px;
    background: #f7f9fe;
    margin-bottom: 6px;
    font-size: 15px;
    color: #474f59;
    padding: 0 6px;
    box-sizing: border-box;
    padding:0 11px;
    // overflow: hidden;
    // text-overflow:ellipsis;
    white-space: nowrap;
    .disease-title {
      font-weight: bold;
    }
  }
  .disease-info-ban {
    width: calc(100% - 118px);
  }
  .pic {
    position: absolute;
    top: 250px;
    right: 16px;
  }
  .disease-name {
    display: inline-block;
    box-sizing: border-box;
    height: 26px;
    line-height: 26px;
    padding: 0 7px;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    margin-right: 5px;
    // overflow:hidden;
    // text-overflow:ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .disease-name-max {
    display: inline-block;
    box-sizing: border-box;
    height: 38px;
    line-height: 38px;
    padding: 0 7px;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    margin-right: 5px;
    // overflow:hidden;
    // text-overflow:ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-family: Microsoft YaHei;
  }
  .disease-history {
    background: rgba(127, 170, 255, 1);
    // max-width: 100px;
    // height:38px;
    //background:linear-gradient(90deg,rgba(127,170,255,1) 0%,rgba(92,138,230,1) 100%);
    background: linear-gradient(
      90deg,
      rgba(127, 170, 255, 1) 0%,
      rgba(87, 155, 230, 1) 100%
    );
  }
  .operate-history {
    background: #5c73e6;
    //background:linear-gradient(90deg,#7F95FF 0%,#5C73E6 100%);
    background: linear-gradient(
      90deg,
      rgba(127, 149, 255, 1) 0%,
      rgba(134, 150, 232, 1) 100%
    );
    // max-width: 300px;
  }
  .allergy-history {
    background: #e66a5c;
    //background:linear-gradient(90deg,#FF8C7F 0%,#E66A5C 100%);
    background: linear-gradient(
      90deg,
      rgba(240, 149, 138, 1) 0%,
      rgba(255, 140, 127, 1) 98%
    );
    // max-width: 300px;
  }
  .modal-body {
    margin-top: 30px;
    max-height: 300px;
    overflow: auto;
    padding: 0px 12px;
    span {
      margin-bottom: 20px;
      max-width: none;
      padding: 0 20px;
      margin-right: 20px;
    }
    .title {
      color: #525a66;
      font-size: 17px;
      margin-bottom: 20px;
      font-weight: bold;
      img {
        margin-right: 8px;
      }
    }
 
  }
}
</style>
