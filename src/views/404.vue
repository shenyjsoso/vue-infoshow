<template>
    <div class="no-page-404">
        <div class="no-page-view">
            <img class="no-page-img" src="../../public/img/404bg.png" />
            <span class="no-page-title">404</span>
            <span class="no-page-msg">抱歉，你访问的页面不存在</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.no-page-404 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .no-page-view {
        align-items: center;
        height: 240px;
        width: 460px;
        position: relative;
        top: -40px;
        .no-page-img {
            width: 214px;
            height: 240px;
            position: absolute;
            top: 0px;
            left: 0px;
        }
        .no-page-title {
            height: 60px;
            display: block;
            color: #434e59;
            font-size: 60px;
            position: absolute;
            top: 40px;
            left: 252px;
            line-height: 60px;
        }
        .no-page-msg {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 16px;
            position: absolute;
            top: 123px;
            left: 252px;
        }
    }
}
</style>
