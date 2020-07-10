<template>
    <div class="hy-dialog">
        <el-dialog
            title="收货地址"
            :visible.sync="dialogVisible"
            :modal-append-to-body="modalAppendToBody"
            :width="width"
            :top="top"
            :append-to-body="appendToBody"
            :close-on-click-modal="false"
        >
            <div slot="title">
                <div class="hy-dialog-header-title">{{ title }}</div>
            </div>
            <slot></slot>
            <div slot="footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'hy-dialog',
    model: {
        prop: 'show',
        event: 'close'
    },
    props: {
        // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
        modalAppendToBody: {
            type: Boolean,
            default() {
                return false
            }
        },
        //标题
        title: {
            type: [String, Number],
            default() {
                return '标题'
            }
        },
        //绑定v-model
        show: {
            type: Boolean,
            default() {
                return false
            }
        },
        //宽度默认50%
        width: {
            type: [Number, String],
            default() {
                return '50%'
            }
        },
        // Dialog CSS 中的 margin-top 值
        top: {
            type: [Number, String],
            default() {
                return '15vh'
            }
        },
        // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
        appendToBody: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    computed: {
        dialogVisible: {
            get() {
                return this.show
            },
            set(val) {
                if (!val) {
                    this.close()
                }
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        close() {
            this.$emit('close', false)
        }
    }
}
</script>
<style lang="less">
.hy-dialog {
    .el-dialog {
        border-radius: 4px;
    }
    .el-dialog__header {
        padding: 17px 25px 16px 24px;
        border-bottom: 1px solid #e6e6e6;
    }
    .el-dialog__headerbtn {
        font-size: 20px;
        color: #8c8c8c;
        top: 17px;
    }
    .hy-dialog-header-title {
        font-size: 16px;
        font-family: 微软雅黑;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        line-height: 21px;
    }
    .el-dialog__body {
        padding: 24px;
    }
    .el-dialog__footer {
        padding: 10px 24px;
        border-top: 1px solid #e6e6e6;
    }
}
</style>
