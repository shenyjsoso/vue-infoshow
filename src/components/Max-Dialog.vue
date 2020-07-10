<template>
    <div class="mos-dialog">
        <!-- 最大化弹框 -->
        <transition name="mask">
            <div class="Mask" v-show="show"></div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="show">
                <div class="dialog" :style="{'width':width+'px','height':height == 'auto'?height : height+'px'}">
                    <div class="content">
                        <div class="dialog-slot">
                            <img class="close" src="../../public/img/icon/guanbi.png" @click="close">
                            <div class="slot-box">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'mos-dialog',
    model: {
        prop: 'show',
        event: 'close'
    },
    props: {
        title: {
            type: [String, Boolean],
            default () {
                return '弹出框标题'
            }
        },
        show: {
            type: Boolean,
            default () {
                return false
            }
        },
        width: {
            type: [Number, String],
            default () {
                return 928
            }
        },
        height: {
            type: [Number, String],
            default () {
                return 'auto'
            }
        },
    },
    data() {
        return {

        }
    },
    mounted() {
        let self = this;
        this.$nextTick(function() {
            document.addEventListener('keyup', (e) => {
                //此处填写你的业务逻辑即可
                if (e.keyCode == 27) { //esc
                    self.close();
                }
            })
        })
    },
    methods: {
        close() {
            this.$emit('close', false);
        }
    }
}
</script>
<style lang="less">
@import '../assets/css/myanimation.css';
    .mos-dialog{
        .fade-enter-active{
            animation:bounce-in .5s;
            -webkit-animation:bounce-in .5s;
        }
        .fade-leave-active{
            animation:bounce-in .5s reverse;
            -webkit-animation:bounce-in .5s reverse;
        }
        .mask-leave-active{
            animation:mask-in .5s reverse;
            -webkit-animation:mask-in .5s reverse;
        }
    }
</style>
<style lang="less">
.mos-dialog {
    .Mask {
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, .42);
        text-align: center;
        white-space: nowrap;
        z-index: 100;
    }

    .mask {
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        text-align: center;
        // white-space: nowrap;
        overflow: auto;
        z-index: 101;
        &:after {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        .dialog {
            display: inline-block;
            background-color: #fff;
            vertical-align: middle;
            border-radius: 6px;
            box-shadow: 0px 2px 5px #ccc;
            overflow: hidden;

            .content {
                height: 100%;
                width: auto;
                text-align: left;
                position: relative;
                overflow-y: auto;
                overflow-x: hidden;
                .dialog-slot {
                    width: 100%;
                    height: 100%;
                    position: relative;

                    .close {
                        width: 20px;
                        height: 20px;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                        z-index: 103;

                        &:active {
                            opacity: 0.6;
                        }
                    }

                    .slot-box {
                        z-index: 102;
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        padding: 28px;
                        position: relative;
                    }
                }

                .body {
                    box-sizing: border-box;
                    overflow-y: auto;
                }
            }
        }
    }
}

.mos-dialog {
    .fade-enter-active {
        animation: bounce-in .5s;
        -webkit-animation: bounce-in .5s;
    }

    .fade-leave-active {
        animation: bounce-in .5s reverse;
        -webkit-animation: bounce-in .5s reverse;
    }

    .mask-leave-active {
        animation: mask-in .5s reverse;
        -webkit-animation: mask-in .5s reverse;
    }
}
</style>