<template>
    <div class="report">
        <!-- 检查报告 -->
        <table>
            <tr>
                <td colspan="6" class="title">
                    检查报告
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
            </tr>
			<tr>
				<!-- <td class="alignCenter">科室</td>
				<td class="mark">{{reportData.sqksmc}}</td>
				<td class="alignCenter">床号</td>
				<td class="mark">{{reportData.ch}}</td> -->
				<!-- <td class="alignCenter">病人来源</td>
				<td class="mark">{{reportData.brly}}</td> -->
				<td class="alignCenter">检查单号</td>
				<td class="mark">{{reportData.StudyUid}}</td>
				<td class="alignCenter">住院号</td>
				<td class="mark">{{reportData.opEmHpExNo}}</td>
				<td class="alignCenter">报告时间</td>
				<td class="mark">{{$formatDate(reportData.rptDt)}}</td>
			</tr>
			<!-- <tr>
				<td class="alignCenter">报告时间</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.rptDt)}}</td>
				<td class="alignCenter">检查类别</td>
				<td class="mark" colspan="2">{{reportData.examtype}}</td>
				<td class="alignCenter">检查方法</td>
				<td class="mark">{{reportData.chkMethodname}}</td>
			</tr> -->
			<tr>
				<td class="alignCenter">检查方法</td>
				<td class="mark" >{{reportData.chkMethodname}}</td>
				<td class="alignCenter">检查医疗机构名称</td>
				<td class="mark" >{{reportData.chkOrganName}}</td>
				<td class="alignCenter">检查技师姓名</td>
				<td class="mark" >{{reportData.chkDocName}}</td>
				<!-- <td class="alignCenter">检查医疗机构名称</td>
				<td class="mark" colspan="2">{{reportData.chkOrganName}}</td> -->
			</tr>
			<tr>
				<td class="alignCenter">检查项目</td>
				<td class="mark" colspan="5">{{reportData.projName}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检查所见</td>
				<td class="mark" colspan="5">{{reportData.rptDescrip}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检查结论</td>
				<td class="mark" colspan="5">{{reportData.prtSeeing}}</td>
			</tr>
			<tr>
				<td class="alignCenter">审核医生</td>
				<td class="mark" colspan="2">{{reportData.rvName}}</td>
				<td class="alignCenter">报告医生</td>
				<td class="mark" colspan="2">{{reportData.rptName}}</td>
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
            console.log(this.reportData)
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