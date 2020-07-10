<template>
    <div class="report">
        <!-- 检查报告记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title">
                    检查报告记录表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
            	<td class="alignCenter">姓名</td>
            	<td class="mark">{{reportData.name}}</td>
            	<td class="alignCenter">性别</td>
            	<td class="mark">{{$aadata.sex[reportData.﻿sex+'']}}</td>
            	<td class="alignCenter">年龄</td>
            	<td class="mark">{{getAgeFromBirth(reportData.birthday)}}</td>
				<td class="alignCenter">检查单号</td>
				<td class="mark">{{reportData.StudyUid}}</td>
            </tr>
			<tr>
				<td class="alignCenter">门诊号</td>
				<td class="mark">{{reportData.opEmHpExNo}}</td>
				<td class="alignCenter">检查科室</td>
				<td class="mark">{{reportData.chkDptName}}</td>
				<td class="alignCenter">检查技师姓名 </td>
				<td class="mark">{{reportData.chkDocName}}</td>
				<td class="alignCenter">检查时间</td>
				<td class="mark">{{$formatDate(reportData.chkDt)}}</td>
				<!-- <td class="alignCenter">就诊部位</td>
				<td class="mark" colspan="2">{{reportData.jzbw}}</td>
				<td class="alignCenter">主治医师</td>
				<td class="mark">{{reportData.zzys}}</td> -->
			</tr>
			<tr>
				<!-- <td class="alignCenter">检查时间</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.chkDt)}}</td> -->
				<td class="alignCenter">检查方法</td>
				<td class="mark" colspan="3">{{reportData.chkMethodname}}</td>
				<td class="alignCenter">检查项目</td>
				<td class="mark" colspan="3">{{reportData.projName}}</td>
				<!-- <td class="alignCenter">检查部位</td>
				<td class="mark">{{reportData.jcbw}}</td> -->
			</tr>
			<!-- <tr>
				<td class="alignCenter">检查项目</td>
				<td class="mark" colspan="2">{{reportData.projName}}</td>
				<td class="alignCenter">检查部位</td>
				<td class="mark" colspan="2">{{reportData.jcbw}}</td>
				<td class="alignCenter">检查类别</td>
				<td class="mark">{{reportData.examtype}}</td>
			</tr> -->
			<tr>
				<td class="alignCenter">检查所见</td>
				<td class="mark" colspan="7">{{reportData.rptDescrip}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检查结论</td>
				<td class="mark" colspan="7">{{reportData.prtSeeing}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检查人</td>
				<td class="mark" colspan="3">{{reportData.chkDocName}}</td>
				<td class="alignCenter">复核人</td>
				<td class="mark" colspan="3">{{reportData.rvName}}</td>
			</tr>
        </table>
    </div>
</template>
<script>
	import {getAgeBybirth} from '../../assets/utils.js';
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
		methods:{
			getAgeFromBirth(birth){
				return getAgeBybirth(birth)
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