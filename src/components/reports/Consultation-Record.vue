<template>
	<div class="report">
		<!-- 会诊记录 -->
        <table>
            <tr>
                <td colspan="8"  class="title" >会诊记录</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{reportData.xm}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">
                        {{reportData.jkdabh}}
                    </span>
                </td>
            </tr>
        </table>
		<table border="2" class="stripe">
			<tr>
				<td colspan="2" class="alignCenter">会诊原因</td>
				<td colspan="8" class="mark">{{reportData.hzyy}}</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">会诊意见</td>
				<td colspan="8" class="mark">{{reportData.hzyj}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">会诊医生及其所在医疗卫生机构</td>
				<td colspan="8" class="mark">
                    {{reportData.syjhzys}}/{{reportData.syjhzysszylwsjg}}
                </td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">医疗卫生机构名称</td>
				<td colspan="3" class="mark">{{reportData.ylwsjgmc}}</td>
				<td class="alignCenter" colspan="2">会诊医生签字</td>
				<td colspan="3" class="mark">{{reportData.hzysqz}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">责任医生</td>
				<td colspan="8" class="mark">{{reportData.zrys}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">会诊日期</td>
				<td colspan="8">
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.hzrq,'year')}}&nbsp;</span>年
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.hzrq,'month')}}&nbsp;</span>月
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.hzrq,'day')}}&nbsp;</span>日
				</td>
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
            width: 850px;
        }
    }
</style>