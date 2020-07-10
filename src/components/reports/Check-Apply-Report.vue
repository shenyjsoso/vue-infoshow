<template>
    <div class="report">
        <!-- 检查申请单 -->
        <table>
            <tr>
                <td colspan="6" class="examineTitle">
					<span class="type">{{$aadata.opEmHpExMark[reportData.﻿opEmHpExMark+'']}}</span>
						{{reportData.appOrganName}}检查申请单
                </td>
            </tr>
			<tr>
				<td colspan="6" style="font-size: 18px;text-align: right;">
					<span class="fontBold">No:</span>
					{{reportData.rptNo}}
				</td>
			</tr>
			<tr>
				<td colspan="2">姓&nbsp;&nbsp;&nbsp;&nbsp;名：{{reportData.name}}</td>
				<td colspan="2">性&nbsp;&nbsp;&nbsp;&nbsp;别：{{$aadata.sex[reportData.﻿sex+'']}}</td>
				<td colspan="2">年&nbsp;&nbsp;&nbsp;&nbsp;龄：{{$getAgeBybirth(reportData.birthday)}}</td>
			</tr>
			<tr>
				<td colspan="2" v-if="reportData.﻿opEmHpExMark">{{$aadata.opEmHpExMark[reportData.﻿opEmHpExMark+'']}}号：{{reportData.opEmHpExNo}}</td>
				<td colspan="2">科&nbsp;&nbsp;&nbsp;&nbsp;室：{{reportData.appDptName}}</td>
				<td colspan="2">申请日期：{{$formatDate(reportData.applyDt,'yyyy-MM-dd hh:mm:ss')}}</td>
			</tr>
        </table>

		<table style="margin-top:15px ;">
			<tr style="border-top: 2px solid black;">
				<td class="fontBold alignRight" style="font-size: 18px;vertical-align: top;" width="120px">
					病历摘要：
				</td>
				<td>
					<div>{{reportData.symptom}}</div>
				</td>
			</tr>
			<br /><br /><br /><br />
			<tr>
				<td class="fontBold alignRight" style="font-size: 18px;vertical-align: top;" width="120px">
					检查项目：
				</td>
				<td>
					<div>{{reportData.projName}}</div>
				</td>
			</tr>
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			<tr style="border-bottom: 2px solid black;">
				<td colspan="2" class="alignRight">申请医生：{{reportData.appDocName}}</td>
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

            }
        },
        created(){
            // console.log(this.reportData)
        },
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
				position: relative;
			}
			.fontBold{
				font-weight:bold;
			}
			.type{
				position: absolute;
				left:0;
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