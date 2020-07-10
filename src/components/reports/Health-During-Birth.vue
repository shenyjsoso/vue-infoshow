<template>
    <div class="report">
        <!--产时保健分娩记录-->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    产时保健分娩记录
                </td>
            </tr>
            <tr>
                <td colspan="8" style="text-align: right;">孕产妇保健ID:<span class="mark">{{reportData.ap010000500}}</span></td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<!-- <tr>
				<td colspan="4"></td>
				<td colspan="2">孕产妇保健ID</td>
				<td class="mark" colspan="4">
                    {{reportData.ap010000500}}
                </td>
			</tr> -->
            <tr>
                <td>姓名</td>
                <td class="mark">
                    {{reportData.de020103900}}
                </td>
                <td>年龄</td>
                <td class="mark">
                    {{getAgeFromBirth(reportData.fmrqsj)}}
                </td>
                <td>出生日期</td>
                <td class="mark">
                    {{reportData.de020100501}}
                </td>
                <td>住院号</td>
                <td class="mark" colspan="3">
                    {{reportData.zyh}}
                </td>
            </tr>
            <tr>
            	<td>分娩日期</td>
            	<td class="mark">{{$formatDate(reportData.fmrqsj﻿)}}</td>
            	<td>分娩孕周</td>
            	<td class="mark">{{reportData.fmyz}}</td>
            	<td>分娩方式</td>
            	<td class="mark">{{reportData.fmfs}}</td>
            	<td colspan="2">其他分娩方式</td>
            	<td class="mark" colspan="2">{{reportData.fmfsqt}}</td>
            </tr>
			<tr>
				<td colspan="2">总产程时长(min)</td>
				<td class="mark" colspan="8">{{reportData.ccsjzf}}</td>
			</tr>
			<tr>
				<td colspan="2">第一产程时长（时）</td>
				<td colspan="2" class="mark">{{reportData.ccsj1s}}</td>
				<td colspan="2">第一产程时长（分）</td>
				<td class="mark" colspan="4">{{reportData.ccsj1f}}</td>
			</tr>
			<tr>
				<td colspan="2">第二产程时长（时）</td>
				<td colspan="2" class="mark">{{reportData.ccsj2s}}</td>
				<td colspan="2">第二产程时长（分）</td>
				<td class="mark" colspan="4">{{reportData.ccsj2f}}</td>
			</tr>
			<tr>
				<td colspan="2">第三产程时长（时）</td>
				<td colspan="2" class="mark">{{reportData.ccsj3s}}</td>
				<td colspan="2">第三产程时长（分）</td>
				<td class="mark" colspan="4">{{reportData.ccsj3f}}</td>
			</tr>
			<tr>
				<td colspan="2">产时出血量（mL）</td>
				<td class="mark" colspan="2">{{reportData.sxl}}</td>
				<td colspan="2">产后两小时出血量（mL）</td>
				<td class="mark" >{{reportData.chcxl2}}</td>
				<td colspan="2">手术出血量（mL）</td>
				<td class="mark" >{{reportData.sscxl}}</td>
			</tr>
			<tr>
				<td colspan="2">会阴裂伤程度</td>
				<td class="mark" colspan="2">{{reportData.hylscd}}</td>
				<td colspan="2">会阴-缝合针数</td>
				<td class="mark" colspan="4">{{reportData.hyfhzs}}</td>
			</tr>
			<!-- <tr>
				<td colspan="2">产时并发症</td>
				<td class="mark" colspan="2">{{reportData.ap050106100}}</td>
				<td colspan="2">产时并发症其他描述</td>
				<td class="mark" colspan="4">{{reportData.ap050112200}}</td>
			</tr> -->
			<tr>
				<td colspan="2">产后两小时舒张压（mmHg）</td>
				<td class="mark" colspan="2">{{reportData.ch2xsssy}}</td>
				<td colspan="2">产后两小时收缩压（mmHg）</td>
				<td class="mark" colspan="4">{{reportData.ch2xsssy}}</td>
				<!-- <td colspan="2">产后开奶时长（时）</td>
				<td class="mark" colspan="2">{{reportData.ap060030800}}</td> -->
			</tr>
			<tr>
				<td colspan="2">产后开奶时长（min）</td>
				<td class="mark" colspan="2">{{reportData.chknsc}}</td>
				<!-- <td>产妇结局</td>
				<td class="mark" colspan="2">{{reportData.ap021007000}}</td> -->
				<td colspan="2">孕产妇死亡</td>
				<td class="mark" colspan="4">{{reportData.ycfsw}}</td>
			</tr>
			<tr>
				<td colspan="2">助产机构名称</td>
				<td class="mark" colspan="2">{{reportData.fmjgmc}}</td>
				<td colspan="2">助产人员姓名</td>
				<td class="mark" colspan="4">{{reportData.jczxm}}</td>
			</tr>
			<!-- <tr>
				<td colspan="3">产后休养地区所属机构名称</td>
				<td class="mark" colspan="7">{{reportData.ap081001328}}</td>
			</tr> -->
			<!-- <tr>
				<td colspan="2" rowspan="2">产后修养地址</td>
				<td class="mark">{{reportData.ap020101901}}</td>
				<td colspan="2">省（自治区、直辖市）</td>
				<td class="mark">{{reportData.ap020101902}}</td>
				<td>市（地区）</td>
				<td class="mark">{{reportData.ap020101903}}</td>
				<td colspan="2">区（县）</td>
			</tr>
			<tr>
				<td class="mark">{{reportData.ap020101904}}</td>
				<td colspan="2">街道（乡、镇）</td>
				<td colspan="1" class="mark">{{reportData.ap020101905}}</td>
				<td colspan="2">路（村、街、弄）</td>
				<td class="mark">{{reportData.ap020101906}}</td>
				<td>号</td>
			</tr> -->
			<!-- <tr>
				<td>街道编码</td>
				<td class="mark" colspan="2">{{reportData.ap020101909}}</td>
				<td colspan="2">街道名称</td>
				<td class="mark" colspan="5">{{reportData.ap020101908}}</td>
			</tr> -->
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
        }
    }
</style>