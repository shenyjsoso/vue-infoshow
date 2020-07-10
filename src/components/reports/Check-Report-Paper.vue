<template>
    <div class="report">
        <!-- 检查报告 -->
        <table>
            <tr>
                <td colspan="6" class="examineTitle">
					<span class="type">{{$aadata.opEmHpExMark[reportData.﻿opEmHpExMark+'']}}</span>
						{{reportData.chkOrganName}}
                </td>
            </tr>
			<tr>
				<td colspan="6" class="examineTitle">{{reportData.projName}}检查报告单</td>
			</tr>
			<tr>
				<td colspan="6" style="font-size: 18px;text-align: right;">
					<span class="fontBold">No:</span>
					{{reportData.rptCode}}
				</td>
			</tr>
			<tr>
				<td colspan="2">姓&nbsp;&nbsp;&nbsp;&nbsp;名：{{reportData.name}}</td>
				<td colspan="2">性&nbsp;&nbsp;&nbsp;&nbsp;别：{{$aadata.sex[reportData.﻿sex+'']}}</td>
				<td colspan="2">年&nbsp;&nbsp;&nbsp;&nbsp;龄：{{$getAgeBybirth(reportData.birthday)}}</td>
			</tr>
			<tr>
				<td colspan="2" v-if="reportData.﻿opEmHpExMark">{{$aadata.opEmHpExMark[reportData.﻿opEmHpExMark+'']}}号：{{reportData.opEmHpExNo}}</td>
				<td colspan="2">科&nbsp;&nbsp;&nbsp;&nbsp;室：{{reportData.chkDptName}}</td>
				<td colspan="2">检查仪器号：{{reportData.yqbm}}</td>
			</tr>
        </table>

		<table style="margin-top:15px ;">
			<tr style="border-top: 2px solid black;">
				<td colspan="6" class="fontBold" style="font-size: 18px;">检查所见：</td>
			</tr>
			<tr>
				<td colspan="6">
				<div class="iframeWrapper" style="height: 400px;">
					<!-- <div class="imgBox" v-for="(item,index) in 8"></div> -->
                    <template v-if="isUrl(reportData.rptDescrip)">
                        <iframe  :src="reportData.rptDescrip" frameborder="0" width="100%" height="100%"></iframe>
                    </template>

                    <div v-else>
                        {{reportData.rptDescrip}}
                    </div>
				</div></td>
			</tr>
			<!-- <tr>
				<td colspan="6">
					<span class="urlStyle">www.wzrmys.com</span>&nbsp;
					点击查看图片
				</td>
			</tr> -->
			<br /><br />
			<tr>
				<td colspan="6" class="fontBold" style="font-size: 18px;">检查结论：</td>
			</tr>
			<tr>
				<td colspan="6">{{reportData.prtSeeing}}</td>
			</tr>
		</table>
		<table style="margin-top:10px ;">
			<tr style="border-top: 2px solid black;">
				<td colspan="2">检查医生：{{reportData.chkDocName}}</td>
				<td colspan="2">审核医生：{{reportData.rvName}}</td>
				<td colspan="2">报告医生：{{reportData.rptName}}</td>
			</tr>
			<tr>
				<td colspan="2">检查时间：{{$formatDate(reportData.chkDt,'yyyy-MM-dd hh:mm')}}</td>
				<td colspan="2">报告日期：{{$formatDate(reportData.rptDt,'yyyy-MM-dd hh:mm')}}</td>
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

            }
        },
        created(){
            console.log(this.reportData)
        },
        methods:{
            isUrl(str){
                if(str){
                    var reg = RegExp(/^http/);
                    if(str.match(reg)){
                        return true
                    }
                    else{
                        return false
                    }
                }else{
                    return false
                }
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
			.urlStyle{
				font-size:18px;
				font-weight:bold;
				color:rgba(69,122,230,1);
			}
        }
    }
</style>