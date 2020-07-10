<template>
    <div class="report">
        <!-- 第 2～5 次产前随访服务记录表 -->
        <table>
            <tr>
                <td colspan="6" class="title">
                    第 2～5 次产前随访服务记录表
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    姓名：<span class="mark">{{ report.twoTimes.patientName }}</span>
                </td>
                <td colspan="3" style="text-align: right;">
                    编号：<span class="mark">{{ report.twoTimes.residentsHealthFileNo }}</span>
                </td>
            </tr>
        </table>

        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 40px;" />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td class="alignCenter" colspan="2">项目</td>
                <td class="alignCenter">第2次</td>
                <td class="alignCenter">第3次</td>
                <td class="alignCenter">第4次</td>
                <td class="alignCenter">第5次</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">（随访/督促）日期</td>
                <td class="mark">{{ $formatDate(report.twoTimes.thisVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.threeTimes.thisVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.fourTimes.thisVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.fiveTimes.thisVisitDate) }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">孕周</td>
                <td class="mark">{{ report.twoTimes.pregnancyWeeks }}</td>
                <td class="mark">{{ report.threeTimes.pregnancyWeeks }}</td>
                <td class="mark">{{ report.fourTimes.pregnancyWeeks }}</td>
                <td class="mark">{{ report.fiveTimes.pregnancyWeeks }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">主诉</td>
                <td class="mark">{{ report.twoTimes.pastDiseaseHistory }}</td>
                <td class="mark">{{ report.threeTimes.pastDiseaseHistory }}</td>
                <td class="mark">{{ report.fourTimes.pastDiseaseHistory }}</td>
                <td class="mark">{{ report.fiveTimes.pastDiseaseHistory }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">体重（kg）</td>
                <td class="mark">{{ report.twoTimes.bodyWeight }}</td>
                <td class="mark">{{ report.threeTimes.bodyWeight }}</td>
                <td class="mark">{{ report.fourTimes.bodyWeight }}</td>
                <td class="mark">{{ report.fiveTimes.bodyWeight }}</td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="4">产科检查</td>
                <td class="alignCenter">宫底高度（cm）</td>
                <td class="mark">{{ report.twoTimes.palaceHeight }}</td>
                <td class="mark">{{ report.threeTimes.palaceHeight }}</td>
                <td class="mark">{{ report.fourTimes.palaceHeight }}</td>
                <td class="mark">{{ report.fiveTimes.palaceHeight }}</td>
            </tr>
            <tr>
                <td class="alignCenter">腹围（cm）</td>
                <td class="mark">{{ report.twoTimes.abdominalCircumference }}</td>
                <td class="mark">{{ report.threeTimes.abdominalCircumference }}</td>
                <td class="mark">{{ report.fourTimes.abdominalCircumference }}</td>
                <td class="mark">{{ report.fiveTimes.abdominalCircumference }}</td>
            </tr>
            <tr>
                <td class="alignCenter">胎位</td>
                <td class="mark">{{ report.twoTimes.tireOrientationName }}</td>
                <td class="mark">{{ report.threeTimes.tireOrientationName }}</td>
                <td class="mark">{{ report.fourTimes.tireOrientationName }}</td>
                <td class="mark">{{ report.fiveTimes.tireOrientationName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">胎心率（次/分钟）</td>
                <td class="mark">{{ report.twoTimes.babyHeartRate }}</td>
                <td class="mark">{{ report.threeTimes.babyHeartRate }}</td>
                <td class="mark">{{ report.fourTimes.babyHeartRate }}</td>
                <td class="mark">{{ report.fiveTimes.babyHeartRate }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">血压（mmHg）</td>
                <td class="mark">{{ report.twoTimes.systolicPressure }}/{{ report.twoTimes.diastolicPressure }}</td>
                <td class="mark">{{ report.threeTimes.systolicPressure }}/{{ report.threeTimes.diastolicPressure }}</td>
                <td class="mark">{{ report.fourTimes.systolicPressure }}/{{ report.fourTimes.diastolicPressure }}</td>
                <td class="mark">{{ report.fiveTimes.systolicPressure }}/{{ report.fiveTimes.diastolicPressure }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">血红蛋白（g/L）</td>
                <td class="mark">{{ report.twoTimes.hemoglobinValue }}</td>
                <td class="mark">{{ report.threeTimes.hemoglobinValue }}</td>
                <td class="mark">{{ report.fourTimes.hemoglobinValue }}</td>
                <td class="mark">{{ report.fiveTimes.hemoglobinValue }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">尿蛋白</td>
                <td class="mark">{{ report.twoTimes.urineProteinQuantDetection }}</td>
                <td class="mark">{{ report.threeTimes.urineProteinQuantDetection }}</td>
                <td class="mark">{{ report.fourTimes.urineProteinQuantDetection }}</td>
                <td class="mark">{{ report.fiveTimes.urineProteinQuantDetection }}</td>
            </tr>
            <!-- <tr>
				<td class="alignCenter" colspan="2">其他辅助检查</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">分类</td>
				<td>
					1.未见异常<br />
					2.异常
					<span class="rightBox">
						<span class="checkBox"></span>
					</span>
				</td>
				<td>
					1.未见异常<br />
					2.异常
					<span class="rightBox">
						<span class="checkBox"></span>
					</span>
				</td>
				<td>
					1.未见异常<br />
					2.异常
					<span class="rightBox">
						<span class="checkBox"></span>
					</span>
				</td>
				<td>
					1.未见异常<br />
					2.异常
					<span class="rightBox">
						<span class="checkBox"></span>
					</span>
				</td>
			</tr> -->
            <tr>
                <td class="alignCenter" colspan="2">指导</td>
                <td>
                    1.生活方式<br />
                    2.营养<br />
                    3.心理<br />
                    4.运动<br />
                    5.其他<br /><br /><br />
                    <span class="rightBox">
                        <span class="checkBox">{{ report.twoTimes.maternalGuideCategoryCode }}</span>
                    </span>
                </td>
                <td>
                    1.生活方式<br />
                    2.营养<br />
                    3.心理<br />
                    4.运动<br />
                    5.自我监护<br />
                    6.母乳喂养<br />
                    7.其他<br />
                    <span class="rightBox">
                        <span class="checkBox">{{ report.threeTimes.maternalGuideCategoryCode }}</span>
                    </span>
                </td>
                <td>
                    1.生活方式<br />
                    2.营养<br />
                    3.心理<br />
                    4.运动<br />
                    5.自我监测<br />
                    6.分娩准备<br />
                    7.母乳喂养<br />
                    8.其他
                    <span class="rightBox">
                        <span class="checkBox">{{ report.fourTimes.maternalGuideCategoryCode }}</span>
                    </span>
                </td>
                <td>
                    1.生活方式<br />
                    2.营养<br />
                    3.心理<br />
                    4.运动<br />
                    5.自我监测<br />
                    6.分娩准备<br />
                    7.母乳喂养<br />
                    8.其他
                    <span class="rightBox">
                        <span class="checkBox">{{ report.fiveTimes.maternalGuideCategoryCode }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">转诊</td>
                <td>
                    0.无&nbsp;&nbsp;&nbsp;&nbsp;1.有
                    <span class="rightBox">
                        <span class="checkBox">{{ report.twoTimes.transferTreatmentFlag }}</span> </span
                    ><br />
                    3.原因：<span class="mark">{{ report.twoTimes.transferTreatmentReason }}</span
                    ><br />
                    4.机构及科室<span class="mark">{{ report.twoTimes.transformInOrgName }}/{{ report.twoTimes.transformInOrgDeptName }}</span>
                </td>
                <td>
                    0.无&nbsp;&nbsp;&nbsp;&nbsp;1.有
                    <span class="rightBox">
                        <span class="checkBox">{{ report.threeTimes.transferTreatmentFlag }}</span> </span
                    ><br />
                    3.原因：<span class="mark">{{ report.threeTimes.transferTreatmentReason }}</span
                    ><br />
                    4.机构及科室<span class="mark">{{ report.threeTimes.transformInOrgName }}/{{ report.threeTimes.transformInOrgDeptName }}</span>
                </td>
                <td>
                    0.无&nbsp;&nbsp;&nbsp;&nbsp;1.有
                    <span class="rightBox">
                        <span class="checkBox">{{ report.fourTimes.transferTreatmentFlag }}</span> </span
                    ><br />
                    3.原因：<span class="mark">{{ report.fourTimes.transferTreatmentReason }}</span
                    ><br />
                    4.机构及科室<span class="mark">{{ report.fourTimes.transformInOrgName }}/{{ report.fourTimes.transformInOrgDeptName }}</span>
                </td>
                <td>
                    0.无&nbsp;&nbsp;&nbsp;&nbsp;1.有
                    <span class="rightBox">
                        <span class="checkBox">{{ report.fiveTimes.transferTreatmentFlag }}</span> </span
                    ><br />
                    3.原因：<span class="mark">{{ report.fiveTimes.transferTreatmentReason }}</span
                    ><br />
                    4.机构及科室<span class="mark">{{ report.fiveTimes.transformInOrgName }}/{{ report.fiveTimes.transformInOrgDeptName }}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">下次随访日期</td>
                <td class="mark">{{ $formatDate(report.twoTimes.nextVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.threeTimes.nextVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.fourTimes.nextVisitDate) }}</td>
                <td class="mark">{{ $formatDate(report.fiveTimes.nextVisitDate) }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">随访医生签名</td>
                <td class="mark">{{ report.twoTimes.visitingDoctorName }}</td>
                <td class="mark">{{ report.threeTimes.visitingDoctorName }}</td>
                <td class="mark">{{ report.fourTimes.visitingDoctorName }}</td>
                <td class="mark">{{ report.fiveTimes.visitingDoctorName }}</td>
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
        return {
            report: {
                twoTimes: {},
                threeTimes: {},
                fourTimes: {},
                fiveTimes: {},
            },
            keys: ['twoTimes', 'threeTimes', 'fourTimes', 'fiveTimes'],
        }
    },
    created() {
        let list = this.reportData.list
        if (list && list.length > 0) {
            let reportData = list
            let length = reportData.length
            let keys = this.keys
            for (let i = 0; i < length; i++) {
                if (i < keys.length) {
                    this.report[keys[i]] = reportData[i]
                }
            }
        }
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
</style>
