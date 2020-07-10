<template>
    <div class="report">
        <!-- 3～6岁儿童健康检查记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">3～6岁儿童健康检查记录表</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{report.tYear.patientName}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{report.tYear.childHealthExamRecordNo}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 50px;">
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td colspan="2" class="alignCenter">月(年)龄</td>
                <td class="alignCenter">3岁</td>
                <td class="alignCenter">4岁</td>
                <td class="alignCenter">5岁</td>
                <td class="alignCenter">6岁</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访日期</td>
                <td class="mark">
                    {{$formatDate(report.tYear.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.fYear.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.fvYear.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.sYear.flupDate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">体重/kg</td>
                <td class="mark">
                    {{report.tYear.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.fYear.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.fvYear.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.sYear.childrenWeight}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">身高/cm</td>
                <td class="mark">{{report.tYear.childrenHeight}}</td>
                <td class="mark">{{report.fYear.childrenHeight}}</td>
                <td class="mark">{{report.fvYear.childrenHeight}}</td>
                <td class="mark">{{report.sYear.childrenHeight}}</td>
            </tr>
            <!-- <tr>
                <td colspan="2" class="alignCenter">体重/身高</td>
                <td class="mark"></td>
                <td class="mark"></td>
                <td class="mark"></td>
                <td class="mark"></td>
            </tr> -->
            <tr>
                <td colspan="2" class="alignCenter">体格发育评价</td>
                <td>
                    1 正常 <br>
                    2 低体重<br>
                    3 消瘦 <br>
                    4 生长迟缓<br>
                    5 超重
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tYear.physicalGrowthEvaluateCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 正常 <br>
                    2 低体重<br>
                    3 消瘦 <br>
                    4 生长迟缓<br>
                    5 超重
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fYear.physicalGrowthEvaluateCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 正常 <br>
                    2 低体重<br>
                    3 消瘦 <br>
                    4 生长迟缓<br>
                    5 超重
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fvYear.physicalGrowthEvaluateCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 正常 <br>
                    2 低体重<br>
                    3 消瘦 <br>
                    4 生长迟缓<br>
                    5 超重
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sYear.physicalGrowthEvaluateCode}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="5" class="alignCenter">体格检查</td>
                <td class="alignCenter">视力(左/右)</td>
                <td class="mark"></td>
                <td class="mark">
                    {{report.fYear.leftUncorrecteVisualAcuity}}/
                    {{report.fYear.rightUncorrecteVisualAcuity}}
                </td>
                <td class="mark">
                    {{report.fvYear.leftUncorrecteVisualAcuity}}/
                    {{report.fvYear.rightUncorrecteVisualAcuity}}
                </td>
                <td class="mark">
                    {{report.sYear.leftUncorrecteVisualAcuity}}/
                    {{report.sYear.rightUncorrecteVisualAcuity}}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">听力</td>
                <td>
                    1 通过 2 未通过
					<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.neonatalUnhsResultsName}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tYear.neonatalUnhsResultsCode}}
                        </span>
                    </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">出牙/龋齿数（颗）</td>
                <td>
                    <span class="lineBox">
                        {{report.tYear.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.tYear.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.fYear.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.fYear.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.fvYear.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.fvYear.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.sYear.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.sYear.cariesNumber}}
                    </span>
                </td>
            </tr>
           <!-- <tr>
                <td class="alignCenter">胸部</td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.tYear.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tYear.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.fYear.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fYear.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.fvYear.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fvYear.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.sYear.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sYear.chestExamCode}}
                        </span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">腹部</td>
                <td>
                    1 未见异常 2 异常
					<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tYear.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fYear.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.fvYear.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sYear.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">血红蛋白值</td>
                <td>
                    <span class="lineBox">
                        {{report.tYear.hemoglobinValue}}
                    </span>g/L
                </td>
                <td>
                    <span class="lineBox">
                        {{report.fYear.hemoglobinValue}}
                    </span>g/L
                </td>
                <td>
                    <span class="lineBox">
                        {{report.fvYear.hemoglobinValue}}
                    </span>g/L
                </td>
                <td>
                    <span class="lineBox">
                        {{report.sYear.hemoglobinValue}}
                    </span>g/L
                </td>
            </tr>
           <!-- <tr>
                <td class="alignCenter">其他</td>
                <td class="mark">
                    {{report.tYear.ap041002500}}
                </td>
                <td class="mark">
                    {{report.fYear.ap041002500}}
                </td>
                <td class="mark">
                    {{report.fvYear.ap041002500}}
                </td>
                <td class="mark">
                    {{report.sYear.ap041002500}}
                </td>
            </tr> -->
            <tr>
                <td colspan="2" class="alignCenter">发育评估</td>
                <td valign="top">
                    1.不会说自己的名字<br>
                    2.不会玩“拿棍当马骑”等假想游戏<br>
                    3.不会模仿画圆<br>
                    4.不会双脚跳
                    <span class="rightBox" v-if="report.tYear.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tYear.physicalGrowthEvaluateCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不会说带形容词的句子<br>
                    2.不能按要求等待或轮流<br>
                    3.不会独立穿衣<br>
                    4.不会单脚站立
                    <span class="rightBox" v-if="report.fYear.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fYear.physicalGrowthEvaluateCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不能简单叙说事情经过<br>
                    2.不知道自己的性别<br>
                    3.不会用筷子吃饭<br>
                    4.不会单脚跳
                    <span class="rightBox" v-if="report.fvYear.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fvYear.physicalGrowthEvaluateCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不会表达自己的感受或想法<br>
                    2.不会玩角色扮演的集体游戏<br>
                    3.不会画方形<br>
                    4.不会奔跑
                    <span class="rightBox" v-if="report.sYear.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sYear.physicalGrowthEvaluateCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">两次随访间患病情况</td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.tYear.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.tYear.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.tYear.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.tYear.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.tYear.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tYear.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.fYear.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.fYear.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.fYear.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.fYear.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.fYear.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fYear.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.fvYear.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.fvYear.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.fvYear.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.fvYear.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.fvYear.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fvYear.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.sYear.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.sYear.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.sYear.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.sYear.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.sYear.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sYear.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">转诊建议</td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.tYear.transferTreatmentFlag}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.tYear.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.tYear.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.tYear.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.fYear.transferTreatmentFlag}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.fYear.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.fYear.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.fYear.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.fvYear.transferTreatmentFlag}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.fvYear.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.fvYear.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.fvYear.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.sYear.transferTreatmentFlag}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.sYear.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.sYear.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.sYear.transformInOrgDeptName}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">指 导</td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<!-- <br>
                    <span class="lineBox">
                        {{report.tYear.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.tYear.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tYear.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<!-- <br>
                    <span class="lineBox">
                        {{report.fYear.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.fYear.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fYear.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<!-- <br>
                    <span class="lineBox">
                        {{report.fvYear.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.fvYear.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.fvYear.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<!-- <br>
                    <span class="lineBox">
                        {{report.sYear.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.sYear.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sYear.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访日期</td>
                <td class="mark">
                    {{$formatDate(report.tYear.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.fYear.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.fvYear.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.sYear.nextFollowUpDate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访医生签名</td>
                <td class="mark">
                    {{report.tYear.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.fYear.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.fvYear.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.sYear.followUpPhysicianName}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default () {
                return {
                    tYear: {},
                    fYear: {},
                    fvYear: {},
                    sYear: {}
                }
            }
        }
    },
    data() {
        return {
            report: {
                tYear: {},
                fYear: {},
                fvYear: {},
                sYear: {}
            }
        }
    },
    created() {
        this.report.tYear = this.reportData.tYear || {};
        this.report.fYear = this.reportData.fYear || {};
        this.report.fvYear = this.reportData.fvYear || {};
        this.report.sYear = this.reportData.sYear || {};
    },
    methods: {
        setSplit(str) {
            if (str) {
                return (str + '').split(',');
            } else {
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        width: 960px;
    }
}
</style>