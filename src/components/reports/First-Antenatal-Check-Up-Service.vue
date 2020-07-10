<template>
    <div class="report">
        <!-- 第 1 次产前检查服务记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title">{{ report.medicalInstitutionName }}第 1 次产前检查服务记录表</td>
            </tr>
            <tr>
                <td colspan="4">
                    姓名:<span class="mark">{{ report.patientName }}</span>
                </td>
                <td colspan="4" style="text-align:right;">
                    编号:<span class="mark">{{ report.antenatalFlupRecordNo }}</span>
                </td>
            </tr>
        </table>

        <table border="2" class="stripe">
            <colgroup>
                <col />
                <col style="width:100px;" />
                <col style="width:100px;" />
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td class="alignCenter">填表日期</td>
                <td colspan="3" class="mark">{{ $formatDate(report.writeDate) }}</td>
                <td class="alignCenter">孕周</td>
                <td colspan="3" class="mark">{{ report.pregnancyWeeks }}</td>
            </tr>
            <tr>
                <td class="alignCenter">孕妇年龄</td>
                <td colspan="7" class="mark">{{ $jsGetAge(report.birthday, report.writeDate) }}</td>
            </tr>
            <tr>
                <td class="alignCenter">丈夫姓名</td>
                <td colspan="2" class="mark">{{ report.husbandName }}</td>
                <td class="alignCenter">丈夫年龄</td>
                <td class="mark">{{ $jsGetAge(report.husbandBirthday, report.writeDate) }}</td>
                <td class="alignCenter">丈夫电话</td>
                <td colspan="2" class="mark">{{ report.husbandTel }}</td>
            </tr>
            <tr>
                <td class="alignCenter">孕次</td>
                <td colspan="2" class="mark">{{ report.pregnancyCount }}</td>
                <td class="alignCenter">产次</td>
                <td colspan="4">
                    阴道分娩<span class="lineBox">{{ report.vaginalDeliveryCount }}</span
                    >次&nbsp; 剖宫产<span class="lineBox">{{ report.cesareanOperationCount }}</span
                    >次
                </td>
            </tr>
            <tr>
                <td class="alignCenter">末次月经</td>
                <td colspan="2" class="mark">{{ $formatDate(report.lastMenstrualDate) }}</td>
                <td class="alignCenter">预产期</td>
                <td colspan="4" class="mark">{{ $formatDate(report.preProductionPeriod) }}</td>
            </tr>
            <tr>
                <td class="alignCenter">既往史</td>
                <td colspan="7">
                    1 无 2 心脏病 3 肾脏疾病 4 肝脏疾病 5 高血压 6 贫血 7 糖尿病 8 其他<span class="lineBox"></span>
                    <span class="rightBox" v-if="setSplit(report.pastDiseaseHistory).length > 0">
                        <span class="checkBox" v-for="(item, index) in setSplit(report.pastDiseaseHistory)" :key="index">{{ item }}</span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">家族史</td>
                <td colspan="7">
                    1 无 2 遗传性疾病史 3 精神疾病史 4 其他
                    <span class="rightBox" v-if="setSplit(report.familyDiseaseHistoryCode).length > 0">
                        <span class="checkBox" v-for="(item, index) in setSplit(report.familyDiseaseHistoryCode)" :key="index">{{ item }}</span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">个人史</td>
                <td colspan="7">
                    1 无特殊 2 吸烟 3 饮酒 4 服用药物 5 接触有毒有害物质 6 接触放射线 7 其他
                    <span class="rightBox" v-if="setSplit(report.pastDiseaseHistory).length > 0">
                        <span class="checkBox" v-for="(item, index) in setSplit(report.pastDiseaseHistory)" :key="index">{{ item }}</span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">妇科手术史</td>
                <td colspan="7">
                    1 无 ２有
                    <span class="rightBox">
                        <span class="checkBox">{{ report.gynaecologyOpHistoryFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">孕产史</td>
                <td colspan="7">
                    1 流产<span class="lineBox">{{ report.abortionCount }}</span> 2 死胎<span class="lineBox">{{ report.stillbornFoetusNumber }}</span> 3
                    死产<span class="lineBox">{{ report.stillbirthNumber }}</span> 4 新生儿死亡<span class="lineBox">{{ report.newbornDieCount }}</span> 5
                    出生缺陷儿<span class="lineBox">{{ report.birthDefectCount }}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">身高(cm)</td>
                <td colspan="3" class="mark">{{ report.height }}</td>
                <td class="alignCenter">体重(kg)</td>
                <td colspan="3" class="mark">{{ report.bodyWeight }}</td>
            </tr>
            <tr>
                <td class="alignCenter">体质指数(BMI)</td>
                <td colspan="3" class="mark">{{ report.bodyMassIndex }}</td>
                <td class="alignCenter">血压(mmHg)</td>
                <td colspan="3" class="mark">{{ report.diastolicPressure }}/{{ report.systolicPressure }}</td>
            </tr>
            <tr>
                <td class="alignCenter">听 诊</td>
                <td colspan="3">
                    心脏：0 未见异常 1 异常<span class="lineBox">{{ report.cardiacAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.cardiacAbnormalFlag }}</span>
                    </span>
                </td>
                <td colspan="4">
                    肺部：0 未见异常 1 异常<span class="lineBox">{{ report.lungAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.lungAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="3">妇科检查</td>
                <td colspan="3">
                    外阴：0 未见异常 1 异常<span class="lineBox">{{ report.vulvaAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.vulvaAbnormalFlag }}</span>
                    </span>
                </td>
                <td colspan="4">
                    阴道：0 未见异常 1 异常<span class="lineBox">{{ report.vaginaAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.vaginaAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    宫颈：0 未见异常 1 异常<span class="lineBox">{{ report.cervicalAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.cervicalAbnormalFlag }}</span>
                    </span>
                </td>
                <td colspan="4">
                    子宫：0 未见异常 1 异常<span class="lineBox">{{ report.uteriAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.uteriAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="7">
                    附件：0 未见异常 1 异常<span class="lineBox">{{ report.uteriAbnormalDescription }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.adnexalAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="13">辅助检查</td>
                <td colspan="2" class="alignCenter">血常规</td>
                <td colspan="5">
                    血红蛋白值<span class="lineBox">{{ report.hemoglobinValue }}</span
                    >g/L<span class="block-white"></span> 白细胞计数值<span class="lineBox">{{ report.whiteBloodCellCount }}</span
                    >g/L<span class="block-white"></span> 血小板计数值<span class="lineBox">{{ report.plateletCount }}</span
                    >g/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">尿常规</td>
                <td colspan="5">
                    尿蛋白<span class="lineBox">{{ report.urineProteinQuantDetection }}</span
                    >mg/24h<span class="block-white"></span> 尿糖<span class="lineBox">{{ report.urineSugarQuantDetection }}</span
                    >mmol/L<span class="block-white"></span> 尿酮体<span class="lineBox">{{ report.urineKetoneQualResultName }}</span
                    ><br />
                    尿潜血<span class="lineBox">{{ report.urineOccultBloodResultName }}</span
                    ><span class="block-white"></span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">血型</td>
                <td class="alignCenter">ABO</td>
                <td colspan="5" class="mark">{{ report.abobloodName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">Rh*</td>
                <td colspan="5" class="mark">{{ report.rhbloodName }}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">血糖*</td>
                <td colspan="5">
                    <span class="lineBox">{{ report.bloodGlucoseTestValue }}</span
                    >mmol/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">肝功能</td>
                <td colspan="5">
                    血清谷丙转氨酶<span class="lineBox">{{ report.serumAstValues }}</span
                    >U/L<span class="block-white"></span> 血清谷草转氨酶<span class="lineBox">{{ report.serumAltValues }}</span
                    >U/L<span class="block-white"></span><br />
                    白蛋白<span class="lineBox">{{ report.albuminConcentration }}</span
                    >g/L<span class="block-white"></span> 总胆红素<span class="lineBox">{{ report.totalBilirubinValue }}</span
                    >μmol/L<span class="block-white"></span><br />
                    结合胆红素<span class="lineBox">{{ report.conjugatedBilirubinValue }}</span
                    >μmol/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">肾功能</td>
                <td colspan="5">
                    血清肌酐<span class="lineBox">{{ report.serumCreatinineValue }}</span
                    >μmol/L<span class="block-white"></span> 血尿素<span class="lineBox">{{ report.bloodUreaNitrogenValue }}</span
                    >mmol/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter" rowspan="2">阴道分泌物*</td>
                <td colspan="5">
                    1 未见异常 2 滴虫 3 假丝酵母菌 4 其他<span class="lineBox">{{ report.vdExamResultName }}</span>
                    <span class="rightBox" v-if="setSplit(report.vdExamResultCode).length > 0">
                        <span class="checkBox" v-for="(item, index) in setSplit(report.vdExamResultCode)" :key="index">{{ item }}</span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    阴道清洁度：1Ⅰ度 2Ⅱ度 3 Ⅲ度 4 Ⅳ度
                    <span class="rightBox">
                        <span class="checkBox">{{ report.vdCleanlinessCode }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">乙型肝炎</td>
                <td colspan="5">
                    乙型肝炎表面抗原<span class="lineBox">{{ report.hbvFaceAntigenResultNam }}</span
                    ><span class="block-white"></span> 乙型肝炎表面抗体*<span class="lineBox">{{ report.hbvFaceAntibodyResultName }}</span
                    ><span class="block-white"></span><br />
                    乙型肝炎 e 抗原*<span class="lineBox">{{ report.hbvEAntigenResultName }}</span
                    ><span class="block-white"></span> 乙型肝炎 e 抗体*<span class="lineBox">{{ report.hbvEAntibodyResultName }}</span
                    ><span class="block-white"></span><br />
                    乙型肝炎核心抗体*<span class="lineBox">{{ report.hbvCoreAntibodyResultName }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">梅毒血清学试验*</td>
                <td colspan="5">
                    1 阴性 2 阳性
                    <span class="rightBox">
                        <span class="checkBox">{{ report.sySerumTestResultCode }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">HIV 抗体检测*</td>
                <td colspan="5">
                    1 阴性 2 阳性
                    <span class="rightBox">
                        <span class="checkBox">{{ report.hivAbDetectionResultCode }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">B超*</td>
                <td colspan="5" class="mark">{{ report.bUltrasonicExamResult }}</td>
            </tr>
            <!-- <tr>
                <td colspan="2" class="alignCenter">其他*</td>
                <td colspan="5" class="mark"></td>
            </tr> -->
            <tr>
                <td class="alignCenter">总体评估</td>
                <td colspan="7">
                    1 未见异常 2 异常<span class="lineBox">{{ report.maternalAbnormalResult }}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{ report.maternalAbnormalFlag }}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">保健指导</td>
                <td colspan="7">
                    1 生活方式 2 心理 3 营养 4 避免致畸因素和疾病对胚胎的不良影响 5 产前筛查宣传告知 6 其他
                    <span class="rightBox" v-if="setSplit(report.maternalGuideCategoryCode).length > 0">
                        <span class="checkBox" v-for="(item, index) in setSplit(report.maternalGuideCategoryCode)" :key="index">{{ item }}</span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">转诊</td>
                <td colspan="7">
                    0 无 1 有<span class="rightBox">
                        <span class="checkBox">{{ report.transferTreatmentFlag }}</span> </span
                    ><br />
                    原因：<span class="lineBox" style="min-width: 300px;">{{ report.transferTreatmentReason }}</span
                    ><br />
                    机构：<span class="lineBox" style="min-width: 300px;">{{ report.transformInOrgName }}</span
                    ><br />
                    科室：<span class="lineBox" style="min-width: 300px;">{{ report.transformInOrgDeptName }}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">下次随访日期</td>
                <td colspan="3" class="mark">{{ $formatDate(report.nextVisitDate) }}</td>
                <td class="alignCenter">随访医生签名</td>
                <td colspan="3" class="mark">{{ report.visitingDoctorName }}</td>
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
            report: {},
        }
    },
    created() {
        this.report = this.reportData || {}
    },
    methods: {
        setSplit(str) {
            if (str) {
                return (str + '').split(',')
            } else {
                return []
            }
        },
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
.report {
    .block-white {
        display: inline-block;
        width: 60px;
    }
}
</style>
