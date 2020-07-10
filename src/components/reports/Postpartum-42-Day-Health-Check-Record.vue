<template>
    <div class="report">
        <!-- 产后 42 天健康检查记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title">
                    产后 42 天健康检查记录表
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    姓名：<span class="mark">{{ reportData.patientName }}</span>
                </td>
                <td colspan="4" style="text-align: right;">
                    编号：<span class="mark">{{ reportData.postpartumExamTablesNo }}</span>
                </td>
            </tr>
        </table>

        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">随访日期</td>
                <td colspan="7">
                    <span class="borderB">{{ $getDateFormatByType(reportData.thisVisitDate, 'year') }}</span
                    >年&nbsp; <span class="borderB">{{ $getDateFormatByType(reportData.thisVisitDate, 'month') }}</span> 月&nbsp;
                    <span class="borderB">{{ $getDateFormatByType(reportData.thisVisitDate, 'day') }}</span> 日&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="alignCenter">分娩日期</td>
                <td colspan="3">
                    <span class="borderB">{{ $getDateFormatByType(reportData.fmrqsj, 'year') }}</span> 年&nbsp;
                    <span class="borderB">{{ $getDateFormatByType(reportData.fmrqsj, 'month') }}</span> 月&nbsp;
                    <span class="borderB">{{ $getDateFormatByType(reportData.fmrqsj, 'day') }}</span> 日&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td class="alignCenter">出院日期</td>
                <td colspan="3">
                    <span class="borderB">{{ $getDateFormatByType(reportData.zysj, 'year') }}</span> 年&nbsp;
                    <span class="borderB">{{ $getDateFormatByType(reportData.zysj, 'month') }}</span> 月&nbsp;
                    <span class="borderB">{{ $getDateFormatByType(reportData.zysj, 'day') }}</span> 日&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="alignCenter">一般健康情况</td>
                <td class="mark" colspan="7">{{ reportData.healthStatusDescribe }}</td>
            </tr>
            <tr>
                <td class="alignCenter">一般心理状况</td>
                <td class="mark" colspan="7">{{ reportData.psychologyStatusDescribe }}</td>
            </tr>
            <tr>
                <td class="alignCenter">血压（mmHg）</td>
                <td class="mark" colspan="7">{{ reportData.systolicPressure }}/{{ reportData.diastolicPressure }}</td>
            </tr>
            <tr>
                <td class="alignCenter">乳房</td>
                <td colspan="7">
                    0.未见异常&nbsp;&nbsp;&nbsp;&nbsp; 1.异常
                    <span class="rightBox">
                        <span class="checkBox">{{ reportData.loopholesSituation }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">恶露</td>
                <td colspan="7">
                    0.未见异常&nbsp;&nbsp;&nbsp;&nbsp; 1.异常
                    <span class="rightBox">
                        <span class="checkBox">{{ reportData.loopholeAbnormalDesp }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">子宫</td>
                <td colspan="7">
                    0.未见异常&nbsp;&nbsp;&nbsp;&nbsp; 1.异常
                    <span class="rightBox">
                        <span class="checkBox">{{ reportData.uteriAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">伤口</td>
                <td colspan="7">
                    0.未见异常&nbsp;&nbsp;&nbsp;&nbsp; 1.异常
                    <span class="rightBox">
                        <span class="checkBox">{{ reportData.woundHealingStatusCode }}</span>
                    </span>
                </td>
            </tr>
            <!-- <tr>
				<td class="alignCenter">其他</td>
				<td class="mark" colspan="7"></td>
			</tr>
			<tr>
				<td class="alignCenter">分类</td>
				<td colspan="7">
					1.已恢复&nbsp;&nbsp;&nbsp;&nbsp;
					2.未恢复
					<span class="rightBox">
						<span class="checkBox"></span>
					</span>
				</td>
			</tr> -->
            <tr>
                <td class="alignCenter">指导</td>
                <td colspan="7">
                    1.心理保健<br />
                    2.性保健与避孕<br />
                    3.婴儿喂养<br />
                    4.产妇营养<br />
                    5.其他
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item, index) in splitList(reportData.maternalGuideCategoryCode)">{{ item }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">处理</td>
                <td colspan="7">
                    1.结案<br />
                    2.转诊
                    <span class="rightBox">
                        <span class="checkBox">{{ reportData.closingFlag }}</span> </span
                    ><br />
                    &nbsp;&nbsp;&nbsp;原因：<span class="lineBox">{{ reportData.transferTreatmentReason }}</span
                    ><br />
                    &nbsp;&nbsp;&nbsp;机构：<span class="lineBox">{{ reportData.transformInOrgName }}</span
                    ><br />
                    &nbsp;&nbsp;&nbsp;科室：<span class="lineBox">{{ reportData.transformInOrgDeptName }}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">随访医生签名</td>
                <td class="mark" colspan="7">{{ reportData.visitingDoctorName }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {}
    },
    created() {
        console.log(this.reportData)
    },
    methods: {
        splitList(str) {
            var list = []
            if (str) {
                list = str.split(',')
            }
            return list
        },
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
</style>
