<template>
    <div class="report">
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    肿瘤患者管理卡
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;text-align: left;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{ reportData.name }}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{ reportData.phrid }}</span>
                </td>
            </tr>
        </table>

        <table border="2" class="stripe">
            <tr>
                <td>责任医生</td>
                <td class="mark" colspan="2">{{ reportData.manadoctorname }}</td>
                <td>肿瘤类别</td>
                <td class="mark" colspan="2">{{ reportData.tumortype }}</td>
                <td>其他肿瘤</td>
                <td class="mark" colspan="2">{{ reportData.othertumor }}</td>
                <td>诊断(部位)</td>
                <td class="mark" colspan="2">{{ reportData.primarysite }}</td>
            </tr>
            <tr>
                <td>管辖机构</td>
                <td colspan="5" class="mark">{{ reportData.manaunitName }}</td>
                <td>继发部位</td>
                <td colspan="2" class="mark">{{ reportData.secondarysite }}</td>
                <td>病理类型</td>
                <td colspan="2" class="mark">{{ reportData.pathologicaltype }}</td>
            </tr>
            <tr>
                <td>发病日期</td>
                <td class="mark" colspan="2">{{ $formatDate(reportData.da) }}</td>
                <td>首次诊断日期</td>
                <td class="mark" colspan="2">{{ $formatDate(reportData.diagnosisdate) }}</td>
                <td>诊断依据</td>
                <td class="mark" colspan="2">{{ $aadata.zlzdyj[reportData.diagnosis + ''] }}</td>
                <td>诊断单位</td>
                <td class="mark" colspan="2">{{ reportData.diagnosisunit }}</td>
            </tr>
            <tr>
                <td>是否治疗</td>
                <td class="mark" colspan="2">{{ reportData.treatmentName }}</td>
                <td>治疗方式</td>
                <td class="mark" colspan="2">{{ reportData.treatmentprojectName }}</td>
                <td>转移情况</td>
                <td class="mark" colspan="2">{{ reportData.metastasisName }}</td>
                <td>转移部位</td>
                <td class="mark" colspan="2">{{ reportData.metastaticsites }}</td>
            </tr>
            <tr>
                <td>肿瘤名称</td>
                <td class="mark" colspan="2">{{ reportData.tumorname1 }}</td>
                <td>确诊时期别</td>
                <td class="mark" colspan="2">{{ reportData.qzsqbName }}</td>
                <td>肿瘤家族史</td>
                <td class="mark" colspan="2">{{ reportData.tumorfamilyName }}</td>
                <td>与患者关系</td>
                <td class="mark" colspan="2">{{ reportData.relationshipName }}</td>
            </tr>
            <tr>
                <td>目前情况</td>
                <td class="mark" colspan="2">{{ $aadata.zlmqqk[reportData.treatmenteffect + ''] }}</td>
                <td>建档日期</td>
                <td class="mark" colspan="2">{{ $formatDate(reportData.createdate) }}</td>
                <td>创建机构</td>
                <td class="mark" colspan="5">{{ reportData.createunitName }}</td>
            </tr>
            <tr>
                <td>报告单位</td>
                <td class="mark" colspan="5">{{ reportData.reportunit }}</td>
                <td>报告日期</td>
                <td class="mark" colspan="2">{{ $formatDate(reportData.reportdate) }}</td>
                <td>报告医生</td>
                <td class="mark" colspan="2">{{ reportData.reportdoctor }}</td>
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
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
.report {
    table {
        tr {
            td {
                text-align: center;
            }
        }
    }
}
</style>
