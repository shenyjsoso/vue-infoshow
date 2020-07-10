<template>
    <div class="report">
        <!-- 住院医嘱 -->
        <table>
            <tr>
                <td colspan="13" class="title" style="font-weight: bold;">
                    其他医嘱
                </td>
            </tr>
            <tr>
                <td style="text-align: right;">姓名</td>
                <td class="mark" colspan="2">{{orderMain.name}}</td>
                <td style="text-align: right;">科别</td>
                <td class="mark" colspan="3">{{orderMain.dptName}}</td>
                <!-- <td style="text-align: right;">病区</td>
                <td class="mark">{{orderMain.bq}}</td>
                <td style="text-align: right;">床号</td>
                <td class="mark">{{orderMain.bedNumber}}</td> -->
                <td style="text-align: right;">住院号</td>
                <td class="mark" colspan="5">{{orderMain.hpSNo}}</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="10" class="alignCenter">起始</td>
                <td colspan="3" class="alignCenter">停止</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td class="alignCenter">时间</td>
                <td colspan="4" class="alignCenter">医嘱内容</td>
                <td class="alignCenter">医师签名</td>
                <td class="alignCenter">执行时间</td>
                <td class="alignCenter">执行人签名</td>
                <td class="alignCenter">核对人签名</td>
                <td class="alignCenter">日期</td>
                <td class="alignCenter">时间</td>
                <td class="alignCenter">医师签名</td>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td class="mark">&nbsp;{{$formatDate(item.beginTime)}}</td>
                <td class="mark">{{$formatDate(item.beginTime,'hh:mm')}}</td>
                <td class="mark" colspan="4">{{item.odrName}}</td>
                <td class="mark">{{item.docName}}</td>
                <td class="mark">{{$formatDate(item.odrisuDt,'yyyy-MM-dd hh:mm')}}</td>
                <td class="mark">{{item.nurseName}}</td>
                <td class="mark">{{item.reviewerName}}</td>
                <td class="mark">{{$formatDate(item.stopDt)}}</td>
                <td class="mark">{{$formatDate(item.stopDt,'hh:mm')}}</td>
                <td class="mark">{{item.stpdocName}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default{
        props:{
            reportData:{
                type:Object,
                default(){
                    return {

                    }
                }
            }
        },
        data(){
            return{
                orderMain:{},
                list:[],
                listLength:4
            }
        },
        created(){
            var reportData = this.reportData;
            if(reportData){
                if(reportData.resList && reportData.resList.length>0){
                    this.orderMain = reportData.resList[0] || {};
                }else{
                    this.orderMain = {};
                }
            }
            this.formatList(reportData.resList);
            console.log(this.reportData)
        },
        methods:{
            formatList(listStr = []){
                var list = [];
                var detailList = listStr;
                if(detailList){
                    if(detailList.length >= this.listLength){
                            list = detailList;
                    }else{
                        var CL = this.listLength - detailList.length;
                        list = detailList;
                        for(var i=0;i<CL;i++){
                            list.push({});
                        }
                    }
                }else{
                    for(var i=0;i<this.listLength;i++){
                        list.push({});
                    }
                }
                this.list = list;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
            .fontBold{
                font-weight:bold;
            }
        }
    }
</style>