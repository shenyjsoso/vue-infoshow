<template>
    <div class="report">
        <!-- 检验报告 -->
        <table>
            <tr>
                <td colspan="8" class="title">
                    检验报告
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{personalLarExamInfo.name}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{personalLarExamInfo.rptCode}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
            	<td class="alignCenter">性别</td>
            	<td class="mark">
                    {{$aadata.sex[personalLarExamInfo.sex + '']}}
				</td>
            	<td class="alignCenter">年龄</td>
            	<td class="mark">{{personalLarExamInfo.brnl}}</td>
				<td class="alignCenter">申请日期</td>
				<td class="mark">{{personalLarExamInfo.sqrq}}</td>
                <td class="alignCenter">卡类型</td>
                <td class="mark">{{$aadata.card.type[personalLarExamInfo.klx + '']}}</td>
            </tr>
			<tr>
				<td class="alignCenter">急诊号</td>
				<td class="mark">{{personalLarExamInfo.opEmHpExNo}}</td>
				<td class="alignCenter">科室</td>
				<td class="mark">{{personalLarExamInfo.sqksmc}}</td>
				<td class="alignCenter">病区</td>
				<td class="mark">{{personalLarExamInfo.bq}}</td>
				<td class="alignCenter">床号</td>
				<td class="mark">{{personalLarExamInfo.ch}}</td>
			</tr>
			<tr>
				<td class="alignCenter">标本种类</td>
				<td class="mark">{{personalLarExamInfo.sampCname}}</td>
				<!-- <td class="alignCenter">标本说明</td>
				<td class="mark">{{personalLarExamInfo.bbsm}}</td> -->
				<td class="alignCenter">采样日期</td>
				<td class="mark">{{$formatDate(personalLarExamInfo.sampDt)}}</td>
				<td class="alignCenter">检验机构名称</td>
				<td class="mark" colspan="3">{{personalLarExamInfo.testOrganNam}}</td>
			</tr>
            <tr>
                <td colspan="2" class="alignCenter">检验结果异常描述</td>
                <td colspan="6" class="mark">{{personalLarExamInfo.ifMarkMs}}</td>
            </tr>
			<tr>
				<td colspan="2" class="alignCenter">项目</td>
				<td colspan="2" class="alignCenter">结果</td>
				<td colspan="2" class="alignCenter">单位</td>
				<td colspan="2" class="alignCenter">参考值</td>
			</tr>
			<tr>
				<td class="alignCenter mark" colspan="2">{{personalTestDetails[0].jyxmmc}}</td>
				<td class="alignCenter mark" colspan="2">{{personalTestDetails[0].noRpt}}</td>
				<td class="alignCenter mark" colspan="2">{{personalTestDetails[0].rptUnit}}</td>
				<td class="alignCenter mark" colspan="2">{{personalTestDetails[0].lcl}}~{{personalTestDetails[0].unl}}</td>
			</tr>
			<template v-for="(item,index) in personalTestDetails">
				<tr v-if="index != 0">
					<td class="alignCenter mark" colspan="2">{{item.jyxmmc}}</td>
					<td class="alignCenter mark" colspan="2">{{item.noRpt}}</td>
					<td class="alignCenter mark" colspan="2">{{item.rptUnit}}</td>
					<td class="alignCenter mark" colspan="2">{{item.lcl}}~{{item.unl}}</td>
				</tr>
			</template>
			<!-- <tr>
				<td class="alignCenter">送检医生</td>
				<td class="mark">{{personalLarExamInfo.sjys}}</td>
				<td class="alignCenter">检验医生</td>
				<td class="mark">{{personalLarExamInfo.testDocName}}</td>
				<td class="alignCenter">审核者</td>
				<td class="mark">{{personalLarExamInfo.rvName}}</td>
				<td class="alignCenter">检验日期</td>
				<td class="mark">{{$formatDate(personalLarExamInfo.testDt)}}</td>
			</tr>
			<tr>
				<td colspan="6"></td>
				<td class="alignCenter">报告日期</td>
				<td class="mark">{{$formatDate(personalLarExamInfo.rptDt)}}</td>
			</tr> -->
        </table>
        <table>
            <tr>
                <td class="alignCenter">送检医生:</td>
                <td colspan="2" class="mark">{{personalLarExamInfo.sqrxm}}</td>
                <td class="alignCenter">检验医生:</td>
                <td colspan="2" class="mark">{{personalLarExamInfo.testDocName}}</td>
                <td class="alignCenter">审核者:</td>
                <td colspan="2" class="mark">{{personalLarExamInfo.rvName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">检验日期:</td>
                <td colspan="2" class="mark">{{$formatDate(personalLarExamInfo.testDt)}}</td>
                <td class="alignCenter">报告日期:</td>
                <td colspan="2" class="mark">{{$formatDate(personalLarExamInfo.rptDt)}}</td>
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
                personalLarExamInfo:{},
                personalTestDetails:[{},{},{},{}],
                testLength:4
            }
        },
        created(){
			var reportData = this.reportData;
			if(reportData){
				this.personalLarExamInfo = reportData.personalLarExamInfo || {};
                this.formatList(reportData.personalTestDetails);
			}
        },
		methods:{
			formatList(testList){
				var list = [];
				var detailList = testList;
				if(detailList){
					if(detailList.length > this.testLength){
						list = detailList;
					}else{
						var CL = this.testLength - detailList.length;
						list = detailList;
						for(var i=0;i<CL;i++){
							list.push({});
						}
					}
				}else{
					for(var i=0;i<this.testLength;i++){
						list.push({});
					}
				}
				this.personalTestDetails = list;
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