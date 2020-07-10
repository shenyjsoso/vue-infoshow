<template>
    <div class="report">
        <!-- 住院费用 -->
        <table style="font-size: 16px;">
            <tr>
                <td colspan="3" class="title" style="font-size: 26px;">
                    {{personalHospitalCost.organName}}病人费用汇总明细清单
                </td>
            </tr>
            <tr>
                <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{personalHospitalCost.name}}</td>
                <td>住&nbsp;&nbsp;院&nbsp;&nbsp;号：{{personalHospitalCost.opEmHpNo}}</td>
                <td>出院科室：{{personalHospitalCost.dptName}}</td>
            </tr>
            <tr>
                <td>入院日期：{{$formatDate(personalHospitalCost.rysj)}}</td>
                <td>出院日期：{{$formatDate(personalHospitalCost.cysj)}}</td>
            </tr>
        </table>
        <table style="margin-top: 10px;color: #1A1A1A;font-size: 16px;">
            <tr style="font-size: 18px;font-weight: bold;border-top: 2px solid #1A1A1A;">
                <td width="194px">项目编码</td>
                <td width="300px">收费项目</td>
                <td>规格</td>
                <td>单位</td>
                <td>数量</td>
                <td>单价</td>
                <td>金额</td>
            </tr>
            <template v-for="(item,index) in personalCostProject">
                <tr style="border-top: 2px solid #1A1A1A;">
                    <td style="font-weight: bold;font-family: simsun;" colspan="7">&nbsp;{{item.name}}</td>
                </tr>
                <tr v-for="(val,code) in item.data">
                    <td>{{val.projDeno}}</td>
                    <td>{{val.projName}}</td>
                    <td>{{val.mxxmgg}}</td>
                    <td>{{val.mxxmdw}}</td>
                    <td>{{val.projAmt}}</td>
                    <td>{{val.projUp}}</td>
                    <td>{{val.projMon}}</td>
                </tr>
            </template>
            <tr style="border-top: 2px solid #1A1A1A;">
                <td colspan="2">收费/退费日期时间：{{$formatDate(personalHospitalCost.rcdDt)}}</td>
                <td colspan="5">收费/退费标志：{{personalHospitalCost.chargeRefund}}</td>
            </tr>
        </table>
        <!-- <table border="2" class="stripe">
           <tr>
                            <td class="alignCenter" colspan="2">姓名</td>
                            <td class="mark" colspan="2">{{personalHospitalCost.name}}</td>
                            <td class="alignCenter">住院号</td>
                            <td class="mark" colspan="2">{{personalHospitalCost.opEmHpNo}}</td>
                            <td class="alignCenter">出院科室</td>
                            <td class="mark">{{personalHospitalCost.outDptName}}</td>
                        </tr>
            <tr>
                <td class="alignCenter" colspan="2">病房号</td>
                <td class="mark" colspan="2">{{personalHospitalCost.bfh}}</td>
                <td class="alignCenter">床位号</td>
                <td class="mark" colspan="4">{{personalHospitalCost.cwh}}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">入院日期</td>
                <td class="mark" colspan="2">{{$formatDate(personalHospitalCost.rysj)}}</td>
                <td class="alignCenter">出院日期</td>
                <td class="mark" colspan="4">{{$formatDate(personalHospitalCost.cysj)}}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">项目编码</td>
                <td class="alignCenter" colspan="2">收费项目</td>
                <td class="alignCenter">规格</td>
                <td class="alignCenter">单位</td>
                <td class="alignCenter">单价</td>
                <td class="alignCenter">数量</td>
                <td class="alignCenter" colspan="2">金额</td>
            </tr>
            <template v-for="(item,index) in personalCostProject">
                <tr>
                    <td class="alignCenter mark" colspan="2">&nbsp;{{item.projDeno}}</td>
                    <td class="alignCenter mark" colspan="2">{{item.projName}}</td>
                    <td class="alignCenter mark">{{item.mxxmgg}}</td>
                    <td class="alignCenter mark">{{item.mxxmdw}}</td>
                    <td class="alignCenter mark">{{item.projUp}}</td>
                    <td class="alignCenter mark">{{item.projAmt}}</td>
                    <td class="alignCenter mark" colspan="2">{{item.projMon}}</td>
                </tr>
            </template>
        </table> -->
    </div>
</template>
<script>
import { groupBy } from '../../assets/tagpage.js'
export default {
    props: {
        reportData: {
            type: Object,
            default () {
                return {

                }
            }
        }
    },
    data() {
        return {
            personalHospitalCost: {},
            personalCostProject: [{}, {}],
            personalCostLength: 4
        }
    },
    created() {
        var reportData = this.reportData;
        if (reportData) {
            //this.personalHospitalCost = reportData.PersonalCostRecord || {};
						this.personalHospitalCost = reportData|| {};
						if(reportData.detailList){
							this.formatList(reportData.detailList, 'hFinCatName')
						}
        }
        //this.formatList(reportData.personalCostProject);
        //this.formatList(reportData.PersonalCostDetailses, 'hFinCatName')
        // console.log(this.reportData)
    },
    methods: {
        /* formatList(drugList){
            var list = [];
            var detailList = drugList;
            if(detailList){
                if(detailList.length > this.personalCostLength){
                    list = detailList;
                }else{
                    var CL = this.personalCostLength - detailList.length;
                    list = detailList;
                    for(var i=0;i<CL;i++){
                        list.push({});
                    }
                }
            }else{
                for(var i=0;i<this.personalCostLength;i++){
                    list.push({});
                }
            }
            this.personalCostProject = list;
            // console.log(this.personalCostProject)
        } */
        formatList(list, byName) {
            this.personalCostProject = groupBy(list, byName)
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        width: 960px;

        .fontBold {
            font-weight: bold;
        }
    }
}
</style>