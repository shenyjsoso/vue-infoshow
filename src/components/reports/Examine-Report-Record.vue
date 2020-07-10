<template>
    <div class="report">
        <!-- 检验报告记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" >
                    检验报告记录表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
            	<td class="alignCenter">姓名</td>
            	<td class="mark">{{report.name}}</td>
            	<td class="alignCenter">性别</td>
            	<td class="mark">{{report.sexName}}</td>
            	<td class="alignCenter">年龄</td>
            	<td class="mark">{{report.brnl}}</td>
				<td class="alignCenter">标本号</td>
				<td class="mark">{{report.bbh}}</td>
            </tr>
			<tr>
				<td class="alignCenter">急诊号</td>
				<td class="mark">{{report.opEmHpExNo}}</td>
				<td class="alignCenter">科室</td>
				<td class="mark">{{report.sqksmc}}</td>
				<td class="alignCenter">病区</td>
				<td class="mark">{{report.bq}}</td>
				<td class="alignCenter">床号</td>
				<td class="mark">{{report.ch}}</td>
			</tr>
			<tr>
				<td class="alignCenter">标本种类</td>
				<td class="mark">{{report.bbzl}}</td>
				<td class="alignCenter">标本说明</td>
				<td class="mark">{{report.bbsm}}</td>
				<td class="alignCenter">采样日期</td>
				<td class="mark">{{$formatDate(report.sampDt)}}</td>
				<td class="alignCenter">临床诊断</td>
				<td class="mark">{{report.lczd}}</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">项目</td>
				<td colspan="2" class="alignCenter">结果</td>
				<td colspan="2" class="alignCenter">单位</td>
				<td colspan="2" class="alignCenter">参考值</td>
			</tr>
			<tr v-for="(item,index) in list" :key="index">
				<td class="alignCenter mark" colspan="2">{{item.jyxmmc}}</td>
				<td class="alignCenter mark" colspan="2">{{item.noRpt}}</td>
				<td class="alignCenter mark" colspan="2">{{item.rptUnit}}</td>
				<td class="alignCenter mark" colspan="2">{{item.lnl}}~{{item.unl}}</td>
			</tr>
			<tr>
				<td class="alignCenter">送检医生</td>
				<td class="mark">{{report.sjys}}</td>
				<td class="alignCenter">检验医生</td>
				<td class="mark">{{report.testDocName}}</td>
				<td class="alignCenter">审核者</td>
				<td class="mark">{{report.rvName}}</td>
				<td class="alignCenter">检验日期</td>
				<td class="mark">{{$formatDate(report.testDt)}}</td>
			</tr>
			<tr>
				<td colspan="6"></td>
				<td class="alignCenter">报告日期</td>
				<td class="mark">{{$formatDate(report.rptDt)}}</td>
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
			.fontBold{
				font-weight:bold;
			}
        }
    }
</style>