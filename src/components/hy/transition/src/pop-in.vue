<template>
    <div class="hy-trans-pop-in">
        <!-- 左右切换过渡 -->
        <transition-group name="pop-in">
            <slot></slot>
        </transition-group>
    </div>
</template>
<script>
    export default {
        name: 'hy-pop-in',
        data() {
            return {}
        }
    }
</script>
<style>
    .hy-trans-pop-in {
        height: inherit;
        box-sizing: border-box;
    }

    .pop-in-enter-active,
    .pop-in-leave-active {
        width: 100%;
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        position: absolute;
        backface-visibility: visible;
        perspective: 150;
        perspective-origin: 10% 10%;
        -webkit-perspective: 150;
        -webkit-perspective-origin: 10% 10%;
    }

    .pop-in-enter {
        width: 100%;
        opacity: 0;
        transform: translateX(0%);
    }

    .pop-in-leave-active {
        opacity: 0;
        transform: translateX(-0%);
    }
</style>