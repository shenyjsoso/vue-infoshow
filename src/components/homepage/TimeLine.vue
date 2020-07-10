<!-- 时间线 -->
<template>
  <div class="TimeLine">
    <div class="select">
        <el-select v-model="value" placeholder="请选择" size="small" @change="selectChange">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
      </el-select>
    </div>

    <div class="btn" @click="linebtn('left')"><div class="triangle-left"></div></div>
    <div class="line" ref="line">
    <div class="circle zhuyuan">
      <div class="info">
        <div class="infotop">
          <span class="type">住院</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
    <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
      
    </div>
    <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
    <div class="circle zhuyuan">
      <div class="info">
        <div class="infotop">
          <span class="type">住院</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
    <div class="circle zhuyuan">
      <div class="info">
        <div class="infotop">
          <span class="type">住院</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
    <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
        <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
        <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
            <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
            <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
            <div class="circle menzhen">
      <div class="info">
        <div class="infotop">
          <span class="type">门诊</span> 慢性胃窦炎
        </div>
        <div class="infobottom">2020-03-09~2020-03-12</div>
      </div>
    </div>
    </div>


    <div class="btn" @click="linebtn('right')"><div class="triangle-right"></div></div>
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
      value:'',
      options:[
                {label:'全部',value:''},
                {label:'门诊',value:'1'},
                {label:'住院',value:'3'},
            ],
    };
  },
  props: {},
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //时间线滚动
    linebtn(direction){
      var pos = 0;
      var id = setInterval(()=>{
         if (pos == 20) {
          clearInterval(id);
        } else {
          pos ++; 
          this.$nextTick(function(){
              if(direction=='left'){
                this.$refs.line.scrollLeft -= 15;
              }
              else if(direction=='right'){
                this.$refs.line.scrollLeft += 15;
              }
          })
              
        }
      }, 10);
    },
    selectChange(){

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
.TimeLine {
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    }
  /deep/.el-select{
            .el-input__inner{
                background: #F5F8FF;
            }
        }
  position: relative;
  padding: 17px;
  background: #fff;
  height: 178px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:0px 2px 7px 0px rgba(208,211,214,1);
  border-radius:4px;
  .select{
    width: 88px;
    position: absolute;
    right: 16px;
    top: 14px;
    z-index: 100;
  }
  .btn{
    flex: 0 0 auto;
    width:20px;
    height:20px;
    background:rgba(237,242,246,1);
    border-radius: 10px;
    border:1px solid rgba(150,177,204,1);
    position: relative;
    cursor: pointer;
    &:hover{opacity: 0.8;}
    .triangle-left {
    position: absolute;
    top:4px;
    left:3px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 10px solid #499AEB;
    border-bottom: 5px solid transparent;
    }
    .triangle-right {
    position: absolute;
    top:4px;
    left:5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid #499AEB;
    border-bottom: 5px solid transparent;
    }
  }
  .line{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      height: 150px;
      // transition: scrollLeft 4s;
  }
  .circle {
    flex: 0 0 auto;
    margin: 0 64px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    // background: rgba(255, 255, 255, 1);
    border: 2px solid;
    // border-color:  rgba(244, 167, 29, 1);
    position: relative;
    .info {
      position: absolute;
      bottom: 15px;
      width: 160px;
      height: 58px;
      //   background: rgba(249, 246, 241, 1);
      border-radius: 2px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .infotop {
        font-size: 14px;
        font-family: MicrosoftYaHeiSemibold;
        color: rgba(38, 38, 38, 1);
      }
      .infobottom {
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: rgba(77, 77, 77, 1);
      }
    }
    &::before,
    &::after {
      content: ""; /*CSS伪类用法*/
      position: absolute; /*定位背景横线的位置*/
      top: 52%;
      width: 60px;
      height: 1px;
      background-image: linear-gradient(
        to right,
        #ccc 0%,
        #ccc 50%,
        transparent 50%
      );
      background-size: 8px 1px;
      background-repeat: repeat-x;
    }
    &:last-child::before{
      content: ""; /*CSS伪类用法*/
      position: absolute; /*定位背景横线的位置*/
      top: 52%;
      width: 230px;
      height: 1px;
      background-image: linear-gradient(
        to right,
        #ccc 0%,
        #ccc 50%,
        transparent 50%
      );
      background-size: 8px 1px;
      background-repeat: repeat-x;
    }
      &:last-child{
        .info div{
            width: 230px;
        }
        
      }
    &::before {
      left: 12px; /*调整背景横线的左右距离*/
    }
    &::after {
      right: 12px;
    }
    //根据奇偶数来控制info div
    &:nth-child(odd) {
      .info {
        bottom: 15px;
      }
    }
    &:nth-child(even) {
      .info {
        top: 15px;
      }
    }
  }

  .zhuyuan {
    border-color: #f4a71d;
    .info {
      background: #f9f6f1;
    }
    .type {
      color: #e79c16;
    }
  }
  .menzhen {
    border-color: #499aeb;
    .info {
      background: #f0f6fa;
    }
    .type {
      color: #1d90f4;
    }
  }
}
</style>