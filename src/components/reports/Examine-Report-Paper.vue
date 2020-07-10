<template>
    <div class="report">
        <!-- 检验报告 -->
        <table>
        	<tr>
        		<td class="examineTitle">
        			<span class="type">{{$aadata.opEmHpExMark[report.﻿opEmHpExMark+'']}}</span>
        		</td>
        		<td colspan="6" class="title" style="font-size: 36px;padding-bottom: 0px;">
        			{{report.testOrganName}}
        		</td>
        		<td></td>
        	</tr>
            <tr>
            	<td></td>
                <td colspan="6" class="examineTitle">
                    {{report.rptName}}检验报告单
                </td>
                <td></td>
            </tr>
			<tr>
				<td colspan="8" style="font-size: 18px;text-align: right;">
					<span class="fontBold">No:</span>
					{{report.rptCode}}
				</td>
			</tr>
			<tr>
				<td class="alignRight">姓&nbsp;&nbsp;&nbsp;&nbsp;名:</td>
				<td>{{report.name}}</td>
				<td class="alignRight">性&nbsp;&nbsp;&nbsp;&nbsp;别:</td>
				<td>{{$aadata.sex[report.﻿sex+'']}}</td>
				<td class="alignRight">年&nbsp;&nbsp;&nbsp;&nbsp;龄:</td>
				<td>{{report.brnl}}</td>
				<td class="alignRight">样本种类:</td>
				<td>{{report.sampCname}}</td>
			</tr>
			<tr>
				<td class="alignRight" v-if="report.﻿opEmHpExMark">{{$aadata.opEmHpExMark[report.﻿opEmHpExMark+'']}}号:</td>
				<td v-if="report.﻿opEmHpExMark">{{report.opEmHpExNo}}</td>
				<td class="alignRight">科&nbsp;&nbsp;&nbsp;&nbsp;室:</td>
				<td :colspan="$aadata.opEmHpExMark[report.﻿opEmHpExMark+'']=='3'?1:5">{{report.sqksmc}}</td>
				<template v-if="$aadata.opEmHpExMark[report.﻿opEmHpExMark+'']=='3'">
					<td class="alignRight">病&nbsp;&nbsp;&nbsp;&nbsp;区:</td>
					<td>{{report.bq}}</td>
					<td class="alignRight">床&nbsp;&nbsp;&nbsp;&nbsp;号:</td>
					<td>{{report.ch}}</td>
				</template>
			</tr>
			<tr>
				<td class="alignRight">诊&nbsp;&nbsp;&nbsp;&nbsp;断:</td>
				<td colspan="8">
					<span v-if="$aadata.opEmHpExMark[report.﻿opEmHpExMark+'']=='4'">{{report.tjlbdm}}</span>
					<span v-else>{{report.diagnosisName}}</span>
				</td>
			</tr>
        </table>

		<table style="margin-top:15px ;">
			<tr class="itemStyle">
				<td width="400px">检验项目</td>
				<td>结果</td>
				<td>参考值</td>
				<td>单位</td>
			</tr>
			<tr v-for="(item,index) in list" :key="index">
				<td>{{item.exProjName}}</td>
				<td>
                    {{item.noRpt}}
                    <span :class="{'high':item.noRpt > item.unl ,'low':item.noRpt < item.lnl}"></span>
                </td>
				<td>{{item.lnl}}~{{item.unl}}</td>
				<td>{{item.rptUnit}}</td>
			</tr>
		</table>
		<table style="margin-top:50px ;">
			<tr style="border-top: 2px solid black;">
				<td colspan="2">送检医生：{{report.sampName}}</td>
				<td colspan="2">检验医生：{{report.testDocName}}</td>
				<td colspan="2">审核者：{{report.rvName}}</td>
			</tr>
			<tr>
				<td colspan="2">采样日期：{{$formatDate(report.sampDt,'yyyy-MM-dd hh:mm:ss')}}</td>
				<td colspan="2">接收日期：{{$formatDate(report.acceptDt,'yyyy-MM-dd hh:mm:ss')}}</td>
				<td colspan="2">报告日期：{{$formatDate(report.rptDt,'yyyy-MM-dd hh:mm:ss')}}</td>
			</tr>
			<tr>
				<td colspan="6" class="fontBold">※此报告单仅对本份标本负责※</td>
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
				report:{},
				list:[]
			}
		},
		created(){
			// console.log(this.reportData)
			this.report = this.reportData.personalLarExamInfo || {};
			this.formatList(this.reportData.personalTestDetails || []);
		},
		methods:{
			formatList(list){
				var result = [];
				if(list.length > 0){
					result = list;
				}else{
					result = [{},{},{}];
				}
				this.list = result;
			}
		}
	}
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
			td{
				font-size: 16px;
				font-weight: 400;

                .high {
                    &:after {
                        content: url(../../../public/imgv2/icon/shang.png);
                        width: 8px;
                        height: 16px;
                        position: relative;
                        left: 4px;
                    }
                }

                .low {
                    &:after {
                        content: url(../../../public/imgv2/icon/xia.png);
                        width: 8px;
                        height: 16px;
                        position: relative;
                        left: 4px;
                    }
                }
			}
			.fontBold{
				font-weight:bold;
			}
			.type{
				float: left;
				font-weight:bold;
			}
			.alignRight{
				text-align: right;
			}
			.itemStyle{
				border-top: 2px solid black;
				border-bottom: 2px solid black;
				td{
					font-size: 18px;
					font-weight: bold;
				}
			}
        }
    }
</style>