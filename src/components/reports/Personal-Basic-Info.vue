<template>
    <div class="report">
        <!-- 个人基本信息表 -->
        <div class="title">
            个人基本信息表
        </div>
        <div class="table-top">
            <span class="left">
                姓&nbsp;&nbsp;名：<span class="mark">{{ reportData.patientName || '无' }}</span>
            </span>
            <span class="right">
                编号：<span class="mark">{{ reportData.residentsHealthFileNo || '无' }}</span>
            </span>
        </div>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 40px;" />
                <col style="width: 80px;" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td colspan="2">性别</td>
                <td colspan="3">
                    <!-- 1 男 2 女 9 未说明的性别 0 未知的性别
                    <span class="checkBox" style="float: right;">
                        {{reportData.﻿sexCode}}
                    </span> -->
                    <span class="mark">
                        {{ getNameByCode($aadata.sex, reportData.sexCode) }}
                    </span>
                </td>
                <td>出生日期</td>
                <td colspan="2" class="mark">
                    {{ $formatDate(reportData.birthday) || '无' }}
                </td>
            </tr>
            <tr>
                <td colspan="2">身份证号</td>
                <td colspan="2" class="mark">
                    {{ reportData.identityNo || '无' }}
                </td>
                <td>工作单位</td>
                <td colspan="3" class="mark">
                    {{ reportData.workplaceName || '无' }}
                </td>
            </tr>
            <tr>
                <td colspan="2">本人电话</td>
                <td class="mark">
                    {{ reportData.telephone || '无' }}
                </td>
                <td>联系人姓名</td>
                <td class="mark">
                    {{ reportData.relationName || '无' }}
                </td>
                <td>联系人电话</td>
                <td colspan="2" class="mark">
                    {{ reportData.contactTel || '无' }}
                </td>
            </tr>
            <tr>
                <td colspan="2">户籍类型</td>
                <td colspan="2">
                    <!-- 1 户籍 2 非户籍
                    <span class="checkBox" style="float: right;">
                        {{reportData.residentAddressFlag}}
                    </span> -->
                    <span class="mark">{{ reportData.hjms ? reportData.hjms : '无' }}</span>
                    <!-- <span class="mark" v-if="reportData.residentAddressFlag == '1'">非户籍</span>
                    <span class="mark" v-else-if="reportData.residentAddressFlag == '2'">户籍</span>
                    <span class="mark" v-else>无</span> -->
                </td>
                <td>民族</td>
                <td colspan="3">
                    <!-- 01 汉族 99 少数民族
                    <span class="lineBox">
                        {{$aadata.nation[reportData.nationCode + '']}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{reportData.nationCode}}
                    </span> -->
                    <span class="mark">
                        {{ getNameByCode($aadata.nation, reportData.nationCode) }}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">血型</td>
                <td colspan="6">
                    <!-- 1 A型 2 B型 3 O型 4 AB型 5 不详 / RH：1 阴性 2 阳性 3 不详
                    <span class="rightBox">
                        <span class="checkBox">
                            {{reportData.bloodAboCode}}
                        </span>/
                        <span class="checkBox">
                            {{reportData.bloodRhCode}}
                        </span>
                    </span> -->
                    ABO:<span class="lineBox">{{ reportData.abobloodName || '无' }}</span> RH:<span class="lineBox">{{ reportData.rhbloodName || '无' }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">文化程度</td>
                <td colspan="6">
                    <!-- 1 研究生
                    2 大学本科
                    3 大学专科和专科学校
                    4 中等专业学校
                    5 技工学校
                    6 高中
                    7 初中
                    8 小学
                    9 文盲或半文盲
                    10 不详
                    <span class="checkBox" style="float: right;">
                        {{reportData.educationCode}}
                    </span> -->
                    <span class="mark">
                        {{ getNameByCode($aadata.whcd, reportData.educationCode) }}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">职业</td>
                <td colspan="6">
                    <!-- 0 国家机关、党群组织、企业、事业单位负责人
                    1 专业技术人员
                    2 办事人员和有关人员
                    3 商业、服务业人员
                    4 农、林、牧、渔、水利业生产人员
                    5 生产、运输设备操作人员及有关人员
                    6 军人
                    7 不便分类的其他从业人员
                    8 无职业 -->
                    <!--  11 国家公务员
                    13 专业技术人员
                    17 职员
                    21 企业管理人员
                    24 工人
                    27 农民
                    31 学生
                    37 现役军人
                    51 自由职业者
                    54 个体经营者
                    70 无业人员
                    80 退（离）休人员
                    99 其他
                    <span class="checkBox" style="float: right;">
                        {{reportData.occupationalCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.jobName }}
                        <!-- {{ getNameByCode($aadata.practJob, reportData.occupationalCategoryCode) }} -->
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">婚姻状况</td>
                <td colspan="6">
                    <!-- 1 未婚
                    2 已婚
                    3 丧偶
                    4 离婚
                    5 未说明的婚姻状况
                    <span class="checkBox" style="float: right;">
                        {{reportData.marryStatusCode}}
                    </span> -->
                    <span class="mark">
                        {{ getNameByCode($aadata.marry, reportData.marryStatusCode) }}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">医疗费用支付方式</td>
                <td colspan="6">
                    <!-- 01 城镇职工基本医疗保险
                    02 城镇居民基本医疗保险
                    03 新型农村合作医疗
                    04 贫困救助
                    05 商业医疗保险
                    06 全公费
                    07 全自费
                    08 其他社会保险
                    99 其他
                    <span class="checkBox" style="float: right;">
                        {{reportData.medicalExpensesPayWayCode}}
                    </span> -->
                    <span class="mark">
                        {{ getNameByCode($aadata.payMode, reportData.medicalExpensesPayWayCode) }}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">药物过敏史</td>
                <td colspan="6">
                    <!-- 1 无
                    2 青霉素
                    3 磺胺
                    4 链霉素
                    5 其他
                    <span class="lineBox">
                        {{reportData.allergenName}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{reportData.drugAllergens}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.allergenName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">暴露史</td>
                <td colspan="6">
                    <!-- 1 无
                    2 化学品
                    3 毒物
                    4 射线
                    <span class="checkBox" style="float: right;">
                        {{reportData.envirHazardsCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.envirHazardsCategoryName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="4">既往史</td>
                <td>疾病</td>
                <td colspan="6">
                    <!-- 1 无
                    2 高血压
                    3 糖尿病
                    4 冠心病
                    5 慢性阻塞性肺疾病
                    6 恶性肿瘤
                    7 脑卒中
                    8 严重精神障碍　
                    9 结核病
                    10 肝炎
                    11 其他法定传染病
                    12 职业病
                    13 其他 <br>
                    <span v-for="(item,index) in getListByStr(reportData.pastIllnessSpeciesCode)" :key="index">
                        <span class="checkBox">
                            {{item}}
                        </span>
                        确诊时间<span class="mark">
                            {{getListByStr(reportData.pastIllnessConfirmedDate)[index]}}
                        </span>
                    </span> -->
                    <span class="mark">
                        {{ reportData.pastDiseaseTypeName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td>手术</td>
                <td colspan="6">
                    <!-- 1 无 2 有
                    <span class="checkBox">
                        {{reportData.operationHistoryFlag}}
                    </span><br> -->
                    <template v-if="reportData.operationHistoryFlag == '0'">
                        <span class="mark">{{ reportData.operationHistory }}</span>
                    </template>
                    <template v-else-if="reportData.operationHistoryFlag == '1'">
                        <template v-if="getListByStr(reportData.operationHistory).length > 0">
                            <template v-for="(item, index) in getListByStr(reportData.operationHistory)">
                                名称{{ index + 1 }}：
                                <span class="lineBox" style="min-width: 200px;">
                                    {{ item }}
                                </span>
                                时间：
                                <span class="lineBox" style="min-width: 200px;">
                                    {{ $formatDate(getListByStr(reportData.operativeProcedureDate)[index]) }} </span
                                ><br />
                            </template>
                        </template>
                        <template v-else>
                            名称：<span class="lineBox" style="min-width: 200px;"></span> 时间：<span class="lineBox" style="min-width: 200px;"></span>
                        </template>
                    </template>
                    <template v-else>
                        <span class="mark">无</span>
                    </template>
                </td>
            </tr>
            <tr>
                <td>外伤</td>
                <td colspan="6">
                    <!-- 1 无 2 有
                    <span class="checkBox">
                        {{reportData.traumaHistory}}
                    </span><br> -->
                    <template v-if="reportData.traumaHistory == '0'">
                        <span class="mark">{{ reportData.traumaName }}</span>
                    </template>
                    <template v-else-if="reportData.traumaHistory == '1'">
                        <template v-if="getListByStr(reportData.traumaName).length > 0">
                            <template v-for="(item, index) in getListByStr(reportData.traumaName)">
                                名称{{ index + 1 }}：
                                <span class="lineBox" style="min-width: 200px;">
                                    {{ item }}
                                </span>
                                时间：
                                <span class="lineBox" style="min-width: 200px;"> {{ $formatDate(getListByStr(reportData.traumaOccurrenceDate)[index]) }} </span
                                ><br />
                            </template>
                        </template>
                        <template v-else>
                            名称：<span class="lineBox" style="min-width: 200px;"></span> 时间：<span class="lineBox" style="min-width: 200px;"></span>
                        </template>
                    </template>
                    <template v-else>
                        <span class="mark">无</span>
                    </template>
                </td>
            </tr>
            <tr>
                <td>输血</td>
                <td colspan="6">
                    <!-- 1 无 2 有
                    <span class="checkBox">
                        {{reportData.bloodTransfHistoryFlag}}
                    </span><br> -->

                    <template v-if="reportData.bloodTransfHistoryFlag == '0'">
                        <span class="mark">{{ reportData.bloodTransfusionReason }}</span>
                    </template>
                    <template v-else-if="reportData.bloodTransfHistoryFlag == '1'">
                        <template v-if="getListByStr(reportData.bloodTransfusionReason).length > 0">
                            <template v-for="(item, index) in getListByStr(reportData.bloodTransfusionReason)">
                                原因{{ index + 1 }}：
                                <span class="lineBox" style="min-width: 200px;">
                                    {{ item }}
                                </span>
                                时间：
                                <span class="lineBox" style="min-width: 200px;"> {{ $formatDate(getListByStr(reportData.bloodDate)[index]) }} </span><br />
                            </template>
                        </template>
                        <template v-else>
                            原因：<span class="lineBox" style="min-width: 200px;"></span> 时间：<span class="lineBox" style="min-width: 200px;"></span>
                        </template>
                    </template>
                    <template v-else>
                        <span class="mark">无</span>
                    </template>
                </td>
            </tr>
            <tr>
                <td colspan="2">家族史</td>
                <!-- <td>父母</td>
                <td colspan="2">
                    <span v-if="getListByStr(reportData.familyDiseaseNameCode)==0" class="checkBox"></span>
                    <span v-if="reportData.patientMyRelationshipCode=='5'">
                        <span v-for="(item,index) in getListByStr(reportData.familyDiseaseNameCode)">
                            <span class="checkBox">{{item}}</span>
                            <span v-if="index!=getListByStr(reportData.familyDiseaseNameCode).length-1">/</span>
                        </span>
                    </span>
                </td>
                <td>子女</td>
                <td colspan="2">
                    <span v-if="getListByStr(reportData.familyDiseaseNameCode)==0" class="checkBox"></span>
                    <span v-if="reportData.patientMyRelationshipCode=='2'||reportData.patientMyRelationshipCode=='3'">
                        <span v-for="(item,index) in getListByStr(reportData.familyDiseaseNameCode)">
                            <span class="checkBox">{{item}}</span>
                            <span v-if="index!=getListByStr(reportData.familyDiseaseNameCode).length-1">/</span>
                        </span>
                    </span>
                </td> -->
                <td colspan="6">
                    关系:<span class="lineBox">{{ reportData.familyRelaName || '无' }}</span
                    ><br />
                    疾病:<span class="lineBox">{{ reportData.familyDiseaseName || '无' }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">遗传病史</td>
                <td colspan="6" class="mark">
                    {{ reportData.hereditaryDiseaseHistory || '无' }}
                </td>
            </tr>
            <tr>
                <td colspan="2">残疾情况</td>
                <!-- <td colspan="4">
                    1 无残疾
                    2 视力残疾
                    3 听力残疾
                    4 言语残疾
                    5 肢体残疾
                    6 智力残疾
                    7 精神残疾
                    8 其他残疾
                </td>
                <td colspan="2">
                    <span v-if="getListByStr(reportData.disabilityCode)==0" class="checkBox" style="float: right;"></span>
                    <span class="checkBox" v-for="(item,index) in getListByStr(reportData.disabilityCode)" :key="index" style="float: right;">
                        {{item}}
                    </span>
                </td> -->
                <td colspan="6" class="mark">
                    {{ reportData.disabilityName || '无' }}
                </td>
            </tr>
            <tr>
                <td colspan="2" rowspan="5">生活环境*</td>
                <td>厨房排风设施</td>
                <td colspan="5">
                    <!-- 1 无
                    2 油烟机
                    3 换气扇
                    4 烟囱
                    <span class="checkBox" style="float: right;">
                        {{reportData.fkexhaustFacilCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.fkexhaustFacilCategoryName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td>燃料类型</td>
                <td colspan="5">
                    <!-- 1 液化气
                    2 煤
                    3 天然气
                    4 沼气
                    5 柴火
                    6 其他
                    <span class="checkBox" style="float: right;">
                        {{reportData.familyFuelCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.familyFuelCategoryName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td>饮水</td>
                <td colspan="5">
                    <!-- 1 自来水
                    2 经净化过滤的水
                    3 井水
                    4 河湖水
                    5 塘水
                    6 其他
                    <span class="checkBox" style="float: right;">
                        {{reportData.fdrinkWaterCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.fdrinkWaterCategoryName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td>厕所</td>
                <td colspan="5">
                    <!-- 1 卫生厕所
                    2 一格或二格粪池式
                    3 马桶
                    4 露天粪坑
                    5 简易棚厕
                    <span class="checkBox" style="float: right;">
                        {{reportData.familyToiletCategoryCode}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.familyToiletCategoryName || '无' }}
                    </span>
                </td>
            </tr>
            <tr>
                <td>牲畜栏</td>
                <td colspan="5">
                    <!-- 1 无
                    2 单设
                    3 室内
                    4 室外
                    <span class="checkBox" style="float: right;">
                        {{reportData.familyLivestockCategory}}
                    </span> -->
                    <span class="mark">
                        {{ reportData.familyLivestockCategoryName || '无' }}
                    </span>
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
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    created() {},
    methods: {
        getNameByCode(comparison, code, type = 1) {
            //字典
            if (code) {
                if (type == 1) {
                    //单个
                    let name = comparison[code]
                    if (name) {
                        return name
                    } else {
                        return '无'
                    }
                } else {
                    //多个
                    let arr = this.getListByStr(code)
                    let list = []
                    for (let i = 0; i < arr.length; i++) {
                        list.push(comparison[arr[i]])
                    }
                    return list.join(',')
                }
            } else {
                return '无'
            }
        },
        getListByStr(str) {
            var list = new Array()
            if (str) {
                list = str.split(',')
            }
            return list
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    padding: 20px 0px;
    margin: 0 auto;

    .title {
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-family: FZSSJW;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        padding: 40px 0px;
    }

    .table-top {
        font-weight: bold;
        font-size: 16px;
        box-sizing: border-box;
        width: 1020px;
        margin: 0 auto;
        height: 30px;
        padding: 0px 10px;

        .left {
            float: left;
            font-family: FZSSJW;
            .mark {
                color: #3d6299;
            }
        }

        .right {
            float: right;
            font-family: FZSSJW;
            .mark {
                color: #3d6299;
            }
        }
    }

    table {
        width: 850px;
    }
}
</style>
