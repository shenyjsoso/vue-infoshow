<template>
    <div class="Track-Model">
        <!-- 就诊轨迹外壳 -->
        <div class="header">
            {{title}}<span class="times" v-show="timeStr">{{timeStr}}</span>
            <!-- <span class="qh" v-if="haveChange" @click="change">切换</span> -->
            <i class="qh iconfont" v-if="haveChange && !showChart" @click="change" title="切换图表">&#xe612;</i>
            <i class="qh iconfont" v-if="haveChange && showChart" @click="change" title="切换表格">&#xe621;</i>
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type:String,
                default(){
                    return ''
                }
            },
            times:{
                type:[String,Number,Array,Object],
                default(){
                    return ''
                }
            },
            haveChange:{
                type:Boolean,
                default(){
                    return false
                }
            },
            showChart:{//图表显示
                type:Boolean,
                default(){
                    return true
                }
            },
        },
        watch:{
            times:{
                handler(){
                    this.setTimes();
                },
                deep:true
            }
        },
        data(){
            return{
                timeStr:''
            }
        },
        methods:{
            change(){
                this.$emit('change')
            },
            setTimes(){
                let times = this.times;
                if(times && times.length > 0){
                    this.timeStr = `(${times[0]}至${times[1]})`;
                }else{
                    this.timeStr = '';
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .Track-Model{
        width: 100%;
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        .header{
            height: 18px;
            line-height: 18px;
            font-family:Microsoft YaHei;
            font-weight: bold;
            font-size: 16px;
            font-weight:bold;
            color:rgba(82,90,102,1);
            position: absolute;
            top: 25px;
            left: 20px;
            padding-left: 9px;
            &:before{
                content: '';
                width:4px;
                height:18px;
                background:rgba(92,138,230,1);
                border-radius:2px;
                position: absolute;
                left: 0px;
            }
            .times{
                color:rgba(122,135,153,1);
                font-weight:400;
                font-size: 15px;
                padding-left: 6px;
            }
            .qh{
                color:#8baaf2;
                font-weight:400;
                font-size: 18px;
                padding-left: 6px;
                cursor: pointer;
                &:hover{
                    opacity: 0.6;
                }
                &:active{
                    opacity: 0.8;
                }
            }
        }
        .body{
            position: absolute;
            top: 55px;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
    }
</style>