<template>
    <div class="report">
        <!-- 门诊费用 -->
        <table>
            <tr>
                <td colspan="10" class="title" style="font-weight: bold;color: #BF3B26;font-size: 26px;">
                    {{PersonalCostRecord.organName}}门诊收费票据
                </td>
            </tr>
			<tr>
				<td colspan="2">
					<span class="spanStyle">姓名：</span>
					<span style="font-weight: bold;">{{PersonalCostRecord.name}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">性别：</span>
					<span style="font-weight: bold;">{{$aadata.sex[PersonalCostRecord.﻿sex+'']}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">年龄：</span>
					<span style="font-weight: bold;">{{$getAgeBybirth(PersonalCostRecord.birthday)}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">门诊号：</span>
					<span style="font-weight: bold;">{{PersonalCostRecord.opEmHpNo}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">科室：</span>
					<span style="font-weight: bold;">{{PersonalCostRecord.dptName}}</span>
				</td>
			</tr>
        </table>

			<div style="width: 1020px;margin: auto;overflow: auto;">
				<table style="width: 50%!important;float: left;">
					<tr class="itemTitle">
						<td width="250px">费用记录明细</td>
						<td>数量</td>
						<td>单位</td>
						<td>金额</td>
					</tr>
					<tr v-for="(item,index) in PersonalCostDetailses.slice(0,Math.ceil(PersonalCostDetailses.length/2))">
						<td style="padding-left: 14px;">&nbsp;{{item.projName}}</td>
						<td>{{item.projAmt}}</td>
						<td>{{item.mxxmdw}}</td>
						<td>{{item.projMon}}</td>
					</tr>
				</table>
				<table style="width:50%!important;float: left;">
					<tr class="itemTitle">
						<td width="250px">费用记录明细</td>
						<td>数量</td>
						<td>单位</td>
						<td>金额</td>
					</tr>
					<tr v-for="(item,index) in PersonalCostDetailses.slice(Math.ceil(PersonalCostDetailses.length/2))">
						<td style="padding-left: 14px;">&nbsp;{{item.projName}}</td>
						<td>{{item.projAmt}}</td>
						<td>{{item.mxxmdw}}</td>
						<td>{{item.projMon}}</td>
					</tr>
				</table>
			</div>

			<table style="margin-top: 100px;">
                <colgroup>
                    <col style="width:328px">
                    <col>
                    <col>
                    <col>
                </colgroup>
				<tr class="itemTitle">
					<td>
						<span class="spanStyle">合计费用（大写）：</span>
						<span style="font-weight: bold;">{{$bmoney(PersonalCostRecord.totalFee)}}</span>
					</td>
					<td>
						<span style="font-weight: bold;">￥：{{PersonalCostRecord.totalFee}}</span>
					</td>
					<td>
						<span class="spanStyle">个人负担金额：</span>
						<span style="font-weight: bold;">{{PersonalCostRecord.indPay}}</span>
					</td>
					<td>
						<span class="spanStyle">支付方式：</span>
						<span style="font-weight: bold;">{{$aadata.payMode[PersonalCostRecord.payMode + '']}}</span>
					</td>
				</tr>
			</table>
            <table>
                <colgroup>
                    <col style="width:328px">
                    <col>
                    <col>
                    <col>
                </colgroup>
                <tr>
                    <td colspan="2">收款单位：{{PersonalCostRecord.organName}}</td>
                    <td>收款人：{{PersonalCostRecord.rcdName}}</td>
                    <td>日期：{{$formatDate(PersonalCostRecord.rcdDt)}}</td>
                </tr>
            </table>
        <!-- <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="mark" colspan="2">{{PersonalCostRecord.name}}</td>
				<td class="alignCenter">门诊号</td>
				<td class="mark" colspan="2">{{PersonalCostRecord.opEmHpNo}}</td>
				<td class="alignCenter">收费时间</td>
				<td class="mark" colspan="2">{{$formatDate(PersonalCostRecord.rcdDt)}}</td>
			</tr>
            <tr>
            	<td class="alignCenter">门诊总费用</td>
            	<td class="mark" colspan="2">{{PersonalCostRecord.totalFee}}</td>
            	<td class="alignCenter">个人负担金额</td>
            	<td class="mark" colspan="2">{{PersonalCostRecord.indPay}}</td>
            	<td class="alignCenter">支付方式</td>
            	<td class="mark" colspan="2">{{PersonalCostRecord.payMode}}</td>
            </tr>
			<tr>
				<td class="alignCenter" colspan="3">费用记录明细</td>
				<td class="alignCenter" colspan="2">数量</td>
				<td class="alignCenter" colspan="2">单位</td>
				<td class="alignCenter" colspan="2">金额</td>
			</tr>
			<template v-for="(item,index) in PersonalCostDetailses">
				<tr>
					<td class="mark" colspan="3">&nbsp;{{item.projName}}</td>
					<td class="mark" colspan="2">{{item.projAmt}}</td>
					<td class="mark" colspan="2">{{item.mxxmdw}}</td>
					<td class="mark" colspan="2">{{item.projMon}}</td>
				</tr>
			</template>
        </table> -->
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
				PersonalCostRecord:{},
				PersonalCostDetailses:[{},{},{},{}],
				personalCostLength:4
            }
        },
        created(){
			var reportData = this.reportData;
			if(reportData){
				this.PersonalCostRecord = reportData.PersonalCostRecord || {};
			}
			this.formatList(reportData.PersonalCostDetailses);
             //console.log(this.reportData)
        },
		methods:{
            payTypeSwitch(type){
                switch(type){
                    case '01':
                        return '城镇职工基本医疗保险';
                        break;
                    case '02':
                        return '城镇国民基本医疗保险';
                        break;
                    case '03':
                        return '新型农村合作医疗';
                        break;
                    case '04':
                        return '贫困救助';
                        break;
                    case '05':
                        return '商业医疗保险';
                        break;
                    case '06':
                        return '全公费';
                        break;
                    case '07':
                        return '全自费';
                        break;
                    case '08':
                        return '其他社会保险';
                        break;
                    case '99':
                        return '其他';
                        break;
                    default:
                        return '';
                }
            },
			formatList(drugList){
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
				this.PersonalCostDetailses = list;
			},
		}
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
			.spanStyle{
				color:#BF3B26;
				font-size:16px;
			}
			.itemTitle{
				border-top:2px solid  rgba(191, 59, 38, 0.7);
				border-bottom:2px solid  rgba(191, 59, 38, 0.7);
				font-size: 16px;
				font-weight: bold;
			}
        }
    }
</style>