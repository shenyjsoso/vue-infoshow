<template>
    <div class="report">
        <!-- 产前筛查报告单 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">产前筛查报告单</td>
            </tr>
            <tr>
                <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</td>
                <td class="mark">{{record.name}}</td>
                <td>出生日期：</td>
                <td class="mark">{{$formatDate(record.csrq)}}</td>
                 <td>胎儿个数：</td>
                <td class="mark">{{record.ts}}</td>
                 <td>样品编号：</td>
                <td class="mark">{{record.sampleNo}}</td>
            </tr>
            <tr>
                <td>末次月经：</td>
                <td class="mark">{{$formatDate(record.mcyjrq)}}</td>
                <td>妊&nbsp;&nbsp;娠&nbsp;&nbsp;史：</td>
                <td class="mark">{{record.pregnancyHistory}}</td>
                <td>其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他：</td>
                <td class="mark">{{record.other}}</td>
                <td>流&nbsp;&nbsp;水&nbsp;&nbsp;号：</td>
                <td class="mark">{{record.serialNo}}</td>
            </tr>
            <tr>
                <td>采样日期：</td>
                <td class="mark">{{$formatDate(record.samplingDate)}}</td>
                <td>联系方式：</td>
                <td class="mark">{{record.contactWay}}</td>
                <td>送检医生：</td>
                <td class="mark">{{record.inspectionDoctor}}</td>
                <td>计算方式：</td>
                <td class="mark">{{record.operateMode}}</td>
            </tr>
            <tr>
                <td>样本种类：</td>
                <td class="mark">{{record.sampleType}}</td>
                <td>检验方法：</td>
                <td class="mark">{{record.laboratoryMethod}}</td>
                <td>送检单位：</td>
                <td class="mark" colspan="3">{{record.inspectionUnit}}</td>
            </tr>
            <tr>
                <td>预产年龄：</td>
                <td class="mark">{{record.edcAge}}</td>
                <td>孕妇体重：</td>
                <td class="mark">{{record.tz}}</td>
                <td>孕&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;周：</td>
                <td class="mark" colspan="3">{{record.gestationalWeeks}}</td>
            </tr>
            <tr style="border-top: 2px solid #000000;border-bottom: 2px solid #000000;">
                <td colspan="2" style="font-weight: bold;">项目名称</td>
                <td style="font-weight: bold;">结果</td>
                <td style="font-weight: bold;">单位</td>
                <td colspan="2" style="font-weight: bold;">MOM值</td>
                <td colspan="2" style="font-weight: bold;">参考值</td>
            </tr>
            <tr v-for="(item,index) in tableList" :ley="index">
                <td colspan="2" class="mark">{{item.cqscxm}}&nbsp;</td>
                <td class="mark">{{item.cqscjg}}</td>
                <td class="mark">{{item.unit}}</td>
                <td colspan="2" class="mark">{{item.momValue}}</td>
                <td colspan="2" class="mark">{{item.referenceValue}}</td>
            </tr>
            <tr>
                <td colspan="8">&nbsp;</td>
            </tr>
            <tr style="border-bottom: 2px solid #000000;">
                <td>说明：</td>
                <td colspan="7" class="mark">{{record.memo}}</td>
            </tr>
            <tr>
                <td>实验日期：</td>
                <td class="mark">{{$formatDate(record.experimentDate)}}</td>
                <td>报告日期：</td>
                <td class="mark">{{$formatDate(record.reportDate)}}</td>
                <td>检&nbsp;&nbsp;验&nbsp;&nbsp;者：</td>
                <td class="mark">{{record.verifier}}</td>
                <td>审&nbsp;&nbsp;核&nbsp;&nbsp;者：</td>
                <td class="mark">{{record.approver}}</td>
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
                listLength:8,
                tableList:[],
                record:{}
            }
        },
        created(){
            // console.log(this.reportData)
            if(this.reportData.record){
                this.record = this.reportData.record;
            }
            this.formatList();
        },
        methods:{
            formatList(){
                var list = [];
                var detailList = this.reportData.detailList;
                if(detailList){
                    if(detailList.length > this.listLength){
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
                this.tableList = list;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 900px;
            tr{
                td{
                    padding:5px;
                }
            }
        }
    }
</style>