<template>
  <!-- 门诊 住院 体检的展示页面-->
  <div class="home">
    <div class="container">
      <div class="nav">
        <!-- 左导航 -->

        <SideNavBar @selectRow="selectRow" :items="items"></SideNavBar>
      </div>
      <div class="content" >
        <div class="body">
          <!-- 内容 -->
          <!-- <HeaderNavBar @getType="getType"></HeaderNavBar> -->
          <div class="firstHeader">
            <el-tabs v-model="firstHeaderName" @tab-click="firstHeaderClick">
              <el-tab-pane label="门诊病历" name="first"></el-tab-pane>
              <el-tab-pane label="门诊处方" name="second"></el-tab-pane>
              <el-tab-pane label="检查报告" name="a"></el-tab-pane>
              <el-tab-pane label="检验报告" name="v"></el-tab-pane>
            </el-tabs>
          </div>

          <div class="secondHeader">
            <el-radio-group v-model="secondHeaderName" @change="secondHeaderClick">
              <el-radio-button label="血常规检验" value="2"></el-radio-button>
              <el-radio-button label="免疫检验" value="1"></el-radio-button>
              <el-radio-button label="甘油三酯检验" value="3"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="reportdiv" ref="printcontent">
              <div class="report-header">
                    <el-pagination
                    layout="prev,next,total"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="page.total"
                    :pageSize="page.pageSize"
                    @current-change="handleCurrentChange"
                    :hide-on-single-page="hidevalue"
                >
                <!-- <span>当前页</span> -->
                </el-pagination>
                <!-- 自己写的分页 -->
                <!-- <el-button type="primary" class="nonepage" @click="pageChange('prev')">上一页</el-button>
                <el-button type="primary" class="havepage" @click="pageChange('next')">下一页</el-button>
                <div style="margin-left:12px">共计10页</div> -->
              </div>
              
              <!-- <ChildDeath :reportData="resultData" :key="comp"></ChildDeath> -->
              <component :is="comp" :reportData="resultData" ></component>
              <CheckClosedLoop></CheckClosedLoop>
          </div>
          
        </div>
        <div class="footer">
          <!-- 底部 -->
          苏州市环亚数据技术有限公司 版权所有
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue'
import ChildDeath from '../components/reports/Child-Death.vue'
import ChildHealthCheckup from '../components/reports/Child-Health-Checkup.vue'

import CheckClosedLoop from '../components/CheckClosedLoop.vue'
export default {
  name: "Home",
  components: {
    // HeaderNavBar,
    SideNavBar,
    ChildDeath,
    CheckClosedLoop,
    ChildHealthCheckup
  },
  props: {
    type:String,//路由传参
  },
  data() {
    return {
      hidevalue: true,
      page: {
        currentPage: 1,
        total: 2,
        pageSize: 1
        },
      firstHeaderName: "",
      secondHeaderName: "",
      resultData: {},//报告单数据
      comp: 'ChildDeath',//报告单组件名
      items:[
                {
                    index: 'aa',
                    title: '门诊处1方',
                    icon:"el-icon-search",
                    subs:[
                        {
                        index: 'aqa',
                        title: '门诊2手术 202',
                    },{
                        index: 'aaa',
                        title: '门诊2手术 2020-20-2'
                    },{
                        index: 'aaaa',
                        title: '门诊2手术 2020-20-2'
                    },
                    ]
                },
                {
                    index: 's',
                    title: '病历概要',
                    subs:[
                        {
                        index: 'asa',
                        title: '门诊2手术 2020-20-2'
                    },{
                        index: 'assaa',
                        title: '门诊2手术 2020-20-2'
                    },{
                        index: 'asssaaa',
                        title: '门诊2手术 2020-20-2'
                    },
                    ]
                },
                {
                    index: 'f',
                    title: '检验报告',
                    subs:[
                        {
                        index: 'ss',
                        title: '门诊手术2'
                    }
                    ]
                    
                }
              
            ] 
    };
  },
  computed: {
    navList() {
      // return this.$store.state.sysmenu || []
      return [
        {
          title: "ESB服务总线",
          index: "/404"
        },
        {
          title: "接口管理",
          index: "/report"
        },
        {
          title: "接口调用日志",
          index: "/406"
        }
      ];
    }
  },
  watch: {
    type: function(newval){
      console.log('type改变',newval);
      this.items[0].title=newval
    }
  },
  created() {
  },
  mounted() {
    
    this.items[0].title=this.type;
    console.log('type',this.type)
  },
  methods: {
    //分页查询
    handleCurrentChange (page) {
          this.page.currentPage = page;
          if(page==1){
            this.comp='ChildDeath'
          }else{
            this.comp='ChildHealthCheckup'
          }
          
          console.log(page);
          // this.selectReportsDetailsEach(val);
    },
    firstHeaderClick(tab, event) {
      console.log(tab, event);
      console.log(this.firstHeaderName);
      // if (this.activeName) {
      //         this.$router.push({
      //             path: this.activeName,
      //         }).catch(err => {err})
      //     }
    },
    secondHeaderClick() {
      console.log(this.secondHeaderName);
    },
    //左侧导航栏点击事件
     selectRow(key) {
      console.log("点击了", key);
    },
  }
};
</script>
<style lang="less" scoped>
.home {
  
  box-sizing: border-box;
  height: 100%;
  position: relative;
  margin-top: 16px;
  .container {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -weblit-flex;
    display: flex;
    height: 100%;
    height: calc(100% - 60px);
    background-color: #f4f6fa;
    .nav {
      width: 205px;
      height: 100%;
      background: #f9fdff;
      transition: all 0.4s;
      overflow: auto;
    //   /deep/.el-collapse-item__header {
    //     padding: 0 12px;
    //   }
    //   /deep/.el-collapse {
    //     border: 0;
    //   }
    //   /deep/.el-collapse-item__wrap {
    //     background-color: transparent;
    //   }
    //   /deep/.el-collapse-item__header {
    //     background-color: transparent;
    //   }
    }

    .content {
      flex: 1;
      margin-left: 18px;
      overflow-y: scroll;
      transition: all 0.4s;
      .body {
        min-height: calc(100% - 60px);
        display: flex;
        flex-direction: column;

        .firstHeader {
          background: #fff;
          height: 48px;
          padding-left: 30px;
          border-bottom: 1px solid #e6e6e6;
          /deep/.el-tabs__item {
            height: 48px;
            line-height: 48px;
            font-size: 13px;
          }
          /deep/.el-tabs__nav-wrap::after {
            background-color: transparent;
          }
          /deep/.el-tabs__item.is-active{
            color: #499AEB;
          }
          /deep/.el-tabs__item:hover{
            color: #499AEB;
          }
          /deep/.el-tabs__active-bar{
            background-color:#499AEB;
          }
        }
        .secondHeader {
          height: 56px;
          background: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 29px;

          /deep/.el-radio-button--small .el-radio-button__inner {
            font-size: 14px;
          }
          /deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner{
            background-color:#4299F0;
            border-color:#4299F0;
          }
        }
        .reportdiv{
            // height: 100%;
            // min-height: calc(100% - 60px );
            flex: 1;
            padding: 31px;
            background: #F0F2F5;
            overflow-y: auto;
            .report-header{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 80px;
                background: #fff;
                color: #808080;
                font-size:13px;
                padding-right: 30px;
                // .nonepage{
                //   width:82px;
                //   height:32px;
                //   background-color: #F5F5F5;
                //   color: #595959;
                //   border:1px solid #D9D9D9;
                //   &:hover{
                //     opacity: 0.8;
                //   }
                // }
                // .havepage{
                //   width:82px;
                //   height:32px;
                //   background-color:#4299F0;
                //   border:1px solid #4299F0;
                //   color: #FFFFFF;
                //   &:hover{
                //     opacity: 0.8;
                //   }
                // }
                /deep/.el-pagination button{
                    border: 1px solid #D9D9D9 !important;
                    height: 32px !important;
                    width:82px !important;
                    // margin-right:8px !important;
                    border-radius: 4px;
                    text-align: center;
                    &:hover{
                    opacity: 0.8;
                  }
                  }
                  /deep/.el-pagination button:disabled{
                    background-color: #F5F5F5;
                  color: #595959;
                  }
                  /deep/.el-pagination .btn-next{
                    background-color:#4299F0;
                  border:1px solid #4299F0;
                  color: #FFFFFF;
                  }
                  /deep/.el-pagination .btn-prev{
                    background-color:#4299F0;
                  border:1px solid #4299F0;
                  color: #FFFFFF;
                  }
            }
        }
      }
      .footer {
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
  }
}
</style>
