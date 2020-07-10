<template>
    <div class="report">
        <!-- 细菌结果表 -->
        <table>
            <tr>
                <td colspan="9" class="title" style="font-weight: bold;">
                    细菌结果表
                </td>
            </tr>
            <tr>
                <td colspan="9">
                    <div style="text-align: right;">
                        样品编号：{{report.ypbh}}&nbsp;&nbsp;
                    </div>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">检验名称</td>
				<td class="mark" colspan="2">{{report.jymc}}</td>
				<td class="alignCenter">生产批次</td>
				<td class="mark" colspan="2">{{report.scpc}}</td>
				<td class="alignCenter">生产日期</td>
				<td class="mark" colspan="2">{{$formatDate(report.scrq)}}</td>
			</tr>
            <tr>
            	<td class="alignCenter">产品商标</td>
            	<td class="mark" colspan="2">{{report.cpsb}}</td>
            	<td class="alignCenter">产品包装</td>
            	<td class="mark" colspan="2">{{report.cpbz}}</td>
            	<td class="alignCenter">检验日期</td>
            	<td class="mark" colspan="2">{{$formatDate(report.jyrq)}}</td>
            </tr>
			<tr>
				<td class="alignCenter">检品数量</td>
				<td class="mark" colspan="2">{{report.jpsl}}</td>
				<td class="alignCenter">产品规格</td>
				<td class="mark" colspan="2">{{report.cpgg}}</td>
				<td class="alignCenter">报告日期</td>
				<td class="mark" colspan="2">{{$formatDate(report.bgrq)}}</td>
			</tr>
			<tr>
				<td class="alignCenter">依据标准</td>
				<td class="mark" colspan="8">
					{{report.yjbz}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">检测依据</td>
				<td class="mark" colspan="8">
					{{report.jcyj}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">检验项目</td>
				<td class="mark" colspan="8">
					{{report.jyxm}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="9">检验结果</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">项目名称</td>
				<td class="alignCenter" colspan="2">单位描述</td>
				<td class="alignCenter" colspan="2">标准要求</td>
				<td class="alignCenter" colspan="2">结果</td>
				<td class="alignCenter">判定</td>
			</tr>
			<tr v-for="(item,index) in list" :key="index">
				<td class="alignCenter mark" colspan="2">{{item.xmmc}}&nbsp;</td>
				<td class="alignCenter mark" colspan="2">{{item.dwms}}</td>
				<td class="alignCenter mark" colspan="2">{{item.bzyq}}</td>
				<td class="alignCenter mark" colspan="2">{{item.jg}}</td>
				<td class="alignCenter mark">{{item.pd}}</td>
			</tr>
            <!-- <tr>
                <td colspan="9" style="vertical-align: top;">
                    结论:<span class="mark"></span>
                </td>
            </tr> -->
        </table>
        <!-- <table>
            <tr>
                <td>检验人(签字)：</td>
                <td class="mark"></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td>签发人(签字)：</td>
                <td class="mark"></td>
                <td>日期：</td>
                <td class="mark"></td>
            </tr>
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
                report:{},
                list:[]
            }
        },
        created(){
            var reportData = this.reportData;
            this.report = reportData.PersonalBacteriaResult || {};
            var list = reportData.PersonalBacteriaDetailses;
            if(list && list.length > 0){
                this.list = list;
            }else{
                this.list = [{},{}];
            }
            console.log(this.reportData)
        },
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
            tr{
                td{
                    .jy{
                        position: relative;
                        .xz{
                            font-size: 24px;
                            font-weight: bold;
                            color:rgb(25,90,255);
                            position: absolute;
                            left: -2px;
                            top: -2px;
                        }
                    }
                }
            }
        }
    }
</style>