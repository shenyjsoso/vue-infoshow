<template>
  <div class="MonitorFigure">
    <div class="img-box" :style="{background:background}">
      <img :src="figureList.icon" alt="figureList.icon" />
    </div>
    <div class="figure">
      <div class="figure-title">{{figureList.title}}</div>
      <div class="figure-num">{{figureList.num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hy-tag",
  props: {
    figureList: {
      type: Object,
      default() {
        return {};
      }
    },
    background: {
      type: String,
      default() {
        return "#C2E1F8";
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.MonitorFigure {
  .img-box {
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 35px;
    //background:#C2E1F8;
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .figure {
    display: inline-block;
    float: right;
    color: #297acc;
    .figure-title {
      font-size: 16px;
    }
    .figure-num {
      font-size: 36px;
      font-weight: 400;
      margin-top: 10px;
    }
  }
}
</style>
