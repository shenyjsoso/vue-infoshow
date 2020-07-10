<template>
    <!-- 折叠面板 -->
    <div class="hy-collapse">
        <div class="hy-collapse-header">
            <span class="hy-collapse-header---title" @click="collapse">
                {{ title }} <i class="iconfont" :class="{ 'is-collapse': isCollapse }">&#xe640;</i>
            </span>
            <div class="hy-collapse-header---bots">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="hy-collapse-body" :class="{ 'body-is-collapse': isCollapse, 'is-body-not-pad': isBodyNotPad }">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hy-collapse',
    props: {
        title: {
            type: [String, Number],
            default() {
                return '标题'
            }
        },
        isBodyNotPad: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        collapse() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>
<style lang="less" scoped>
.hy-collapse {
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    box-shadow: 4px 2px 16px 6px rgba(102, 111, 128, 0.03);
    margin-bottom: 14px;
    .hy-collapse-header {
        position: relative;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        padding: 0px 15px;
        border-bottom: 1px solid #e6e6e6;
        white-space: nowrap;
        overflow: hidden;
        .hy-collapse-header---title {
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: rgba(38, 38, 38, 1);
            line-height: 60px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
            &:active {
                opacity: 0.6;
            }
            .iconfont {
                display: inline-block;
                transition: all 0.3s;
                transform: rotate(180deg);
                -ms-transform: rotate(180deg); /* IE 9 */
                -moz-transform: rotate(180deg); /* Firefox */
                -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
                -o-transform: rotate(180deg);
                line-height: 1;
            }
            .is-collapse {
                transform: rotate(0deg);
                -ms-transform: rotate(0deg); /* IE 9 */
                -moz-transform: rotate(0deg); /* Firefox */
                -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
                -o-transform: rotate(0deg);
            }
        }
        .hy-collapse-header---bots {
            height: 60px;
            position: absolute;
            top: 0px;
            right: 15px;
        }
    }
    .hy-collapse-body {
        min-height: 60px;
        box-sizing: border-box;
        padding: 15px;
        overflow: hidden;
        transition: all 0.3s;
    }
    .is-body-not-pad {
        padding: 0px;
    }
    .body-is-collapse {
        min-height: 0px;
        height: 0px;
        padding: 0px 15px;
    }
}
</style>
