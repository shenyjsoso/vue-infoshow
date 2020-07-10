<template>
    <button type="button" onsubmit="return false" @click.stop="clickBtn" :disabled="disabled" class="hy-button" :class="[
            type ? 'hy-button--' + type : '',
            size ? 'hy-button--' + size : '',
            {
                'is-disabled': disabled
            }
        ]">
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: 'hy-button',
        model: {
            event: 'clickBtn'
        },
        props: {
            //类型
            type: {
                type: String,
                default: 'default'
            },
            //尺寸
            size: {
                type: String,
                default: ''
            },
            disabled: Boolean
        },
        data() {
            return {}
        },
        methods: {
            clickBtn(e) {
                this.$emit('click', e)
            }
        }
    }
</script>
<style scoped>
    .hy-button,
    .hy-button--default {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #d9d9d9;
        color: #595959;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 9px 24px;
        font-size: 16px;
        border-radius: 4px;
    }

    .hy-button+.hy-button {
        margin-left: 10px;
    }

    .hy-button:focus,
    .hy-button:hover,
    .hy-button--default:focus,
    .hy-button--default:hover {
        color: #6ca3e2;
        border-color: #89bff5;
        background-color: transparent;
    }

    .hy-button:active,
    .hy-button--default:active {
        color: #4d88cc;
        border-color: #5799db;
        outline: 0;
    }

    .hy-button::-moz-focus-inner {
        border: 0;
    }

    .hy-button.is-disabled,
    .hy-button--default.is-disabled {
        color: #d9d9d9;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #d9d9d9;
    }

    .hy-button--primary {
        color: #fff;
        border-color: #5fa6ed;
        background-color: #5fa6ed;
    }

    .hy-button--primary:focus,
    .hy-button--primary:hover {
        color: #fff;
        border-color: #89bff5;
        background-color: #89bff5;
    }

    .hy-button--primary:active {
        color: #fff;
        border-color: #5799db;
        background-color: #5799db;
        outline: 0;
    }

    .hy-button--primary.is-disabled {
        color: #fff;
        cursor: not-allowed;
        background-image: none;
        background-color: #d9d9d9;
        border-color: #d9d9d9;
    }

    .hy-button--small {
        padding: 8px 24px;
    }

    .hy-button--small {
        padding: 8px 14px;
    }

    .hy-button--success {
        color: #fff;
        border-color: #4bccab;
        background-color: #4bccab;
    }

    .hy-button--success:focus,
    .hy-button--success:hover {
        color: #fff;
        border-color: #83cebb;
        background-color: #83cebb;
    }

    .hy-button--success:active {
        color: #fff;
        border-color: #5ac1a7;
        background-color: #5ac1a7;
        outline: 0;
    }

    .hy-button--success.is-disabled {
        color: #fff;
        cursor: not-allowed;
        background-image: none;
        background-color: #d9d9d9;
        border-color: #d9d9d9;
    }

    .hy-button--warning {
        color: #fff;
        border-color: #E7915D;
        background-color: #E7915D;
    }

    .hy-button--warning:focus,
    .hy-button--warning:hover {
        color: #fff;
        border-color: #EEB28D;
        background-color: #EEB28D;
    }

    .hy-button--warning:active {
        color: #fff;
        border-color: #EB8243;
        background-color: #EB8243;
        outline: 0;
    }

    .hy-button--warning.is-disabled {
        color: #fff;
        cursor: not-allowed;
        background-image: none;
        background-color: #d9d9d9;
        border-color: #d9d9d9;
    }

    .hy-button--danger {
        color: #f56c6c;
        border-color: #fbc4c4;
        background-color: #fef0f0;
    }

    .hy-button--danger:focus,
    .hy-button--danger:hover {
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
    }

    .hy-button--danger:active {
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
        outline: 0;
    }

    .hy-button--danger.is-disabled {
        color: #fff;
        cursor: not-allowed;
        background-image: none;
        background-color: #d9d9d9;
        border-color: #d9d9d9;
    }
</style>