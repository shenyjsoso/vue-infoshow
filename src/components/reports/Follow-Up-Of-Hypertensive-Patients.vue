<template>
    <div class="report">
        <!-- 高血压患者随访服务记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    高血压患者随访服务记录表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-align: left;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{ visit.patientName }}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{ visit.residentsHealthFileNo }}</span>
                </td>
            </tr>
        </table>

        <div class="table-body-wrap">
            <div style="float:left">
                <table border="2" class="stripe" style="width: auto!important;border-right: none;">
                    <colgroup>
                        <col style="width: 86px;" />
                        <col style="width: 165px;" />
                    </colgroup>
                    <tr>
                        <td colspan="2" class="alignCenter">随访日期</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter">随访方式</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter" style="height: 63.75px;">症状</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="5">体征</td>
                        <td class="alignCenter">血压(mmHg)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">体重(kg)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">体质指数(BMI)kg/m²</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">心率(次/分钟)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">其他</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="6">生活方式指导</td>
                        <td class="alignCenter">日吸烟量（支）</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">日饮酒量（两）</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">运动</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">摄盐情况（咸淡）</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">心理调整</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">遵医行为</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter">辅助检查*</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter">服药依从性</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter">药物不良反应</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="alignCenter">此次随访分类</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" colspan="2" :style="{ height: 88.98 * maxNum + 'px' }">用药情况</td>
                        <!-- <td class="alignCenter">药物名称</td> -->
                    </tr>
                    <!-- <tr>
                        <td class="alignCenter">用法用量</td>
                    </tr> -->
                    <tr>
                        <td class="alignCenter" rowspan="2">转诊</td>
                        <td class="alignCenter">原因</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">机构及科别</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" colspan="2">下次随访日期</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" colspan="2">随方医生签名</td>
                    </tr>
                </table>
            </div>
            <!-- <div style="float:left;width: 800px;overflow: auto;border-right: 2px solid #999999;"> -->
            <TableDrag width="800" style="border-right: 2px solid #999999;">
                <table border="2" class="stripe" style="width: 810px!important;border-left: none;border-right: none;cursor: pointer;">
                    <colgroup>
                        <col style="width: 200px;" v-for="item in visitList" />
                    </colgroup>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ $formatDate(item.flupDate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.flupWayName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList" style="text-align: left;height: 63.75px;">
                            <div class="divBox">
                                <span class="mark" :title="symptom(item.symptomCode)">{{ symptom(item.symptomCode) }}&nbsp;</span>
                            </div>
                            <!-- <div class="divBox">
                                其他：<span class="mark" :title="item.otherPositiveSigns">{{ item.otherPositiveSigns }}</span>
                            </div> -->
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList">
                            <span class="mark">{{ item.systolicPressure }}/{{ item.diastolicPressure }}&nbsp;</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.bodyWeight }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.bodyMassIndex }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.heartRate }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.otherPositiveSigns }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.smokingDailyAmount }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ visit.drinkingDailyAmount }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList">
                            <span class="lineBox alignCenter">{{ item.motionFrequencyName }}</span
                            >次/周 <span class="lineBox alignCenter">{{ item.motionDuration }}</span
                            >分钟/次
                        </td>
                    </tr>
                    <tr>
                        <td class="mark noOver" v-for="(item, index) in visitList">{{ item.saltUptakeGradeName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark noOver" v-for="(item, index) in visitList" :title="item.psychicAdjustIcValueName">
                            {{ item.psychicAdjustIcValueName }}&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList" class="noOver">
                            <span class="mark" :title="item.complianceName">{{ item.complianceName }}&nbsp;</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="mark noOver" v-for="(item, index) in visitList" :title="item.auxiliaryExamResults">{{ item.auxiliaryExamResults }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList" class="noOver">
                            <span class="mark" :title="item.medicationComplianceName">{{ item.medicationComplianceName }}&nbsp;</span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList" class="noOver">
                            <span class="mark" v-if="item.drugReactionsFlag == '1'">无药物不良反应</span>
                            <span class="mark" v-if="item.drugReactionsFlag == '2'" :title="item.drugReactionsDescribe">{{ item.drugReactionsDescribe }}</span
                            >&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) in visitList" class="noOver">
                            <span class="mark" :title="item.flupResultName">{{ item.flupResultName }}&nbsp;</span>
                        </td>
                    </tr>
                    <!-- <tr>
												<td v-for="(item, index) in visitList" style="text-align: left;">
														<div style="width: 100%;text-overflow :ellipsis;overflow : hidden;white-space :nowrap; ">
															药物名称：<span class="lineBox" v-for="drugName in splitList(item.drugName)" title="无药物不良反良">{{drugName}}无药物不良反良</span>
														</div>
														用法用量：每日<span class="lineBox alignCenter" v-for="drugUseFrequency in splitList(item.drugUseFrequency)">{{ drugUseFrequency }}</span>次&nbsp;
														每次<span class="lineBox alignCenter" v-for="drugDoseage in splitList(item.drugDoseage)">{{ drugDoseage }}</span>
														<span v-for="drugDoseageUnit in splitList(item.drugDoseageUnit)">{{drugDoseageUnit}}</span>
												</td>
										</tr> -->
                    <tr>
                        <td v-for="(item, index) in visitList" :key="index" style="text-align: left;padding:0">
                            <div v-for="(row, val) in item.drugArr" class="drug-box" :key="val" :class="{ 'last-drug-box': val == item.drugArr.length - 1 }">
                                <template v-if="row.drugName">
                                    <div class="divBox">
                                        药物名称：<el-popover placement="top-start" width="200" trigger="hover" :content="row.drugName">
                                            <span class="lineBox" :title="row.drugName" slot="reference">{{ row.drugName }}</span>
                                            <span class="lineBox" slot="content">{{ row.drugName }}</span>
                                        </el-popover>
                                    </div>
                                    用法用量：每日<span class="lineBox alignCenter">{{ row.drugUseFrequency }}</span
                                    >次&nbsp; 每次<span class="lineBox alignCenter"
                                        >{{ row.drugDoseage }}{{ $aadata.drugDoseageUnit[row.drugDoseageUnit + ''] }}</span
                                    >
                                </template>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="mark noOver" v-for="(item, index) in visitList" :title="item.transferTreatmentReason">
                            {{ item.transferTreatmentReason }}&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="mark noOver" v-for="(item, index) in visitList" :title="item.transformInOrgName / item.transformInOrgDeptName">
                            {{ item.transformInOrgName }}/{{ item.transformInOrgDeptName }}&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ $formatDate(item.nextFollowUpDate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList">{{ item.responsiblePhysicianName }}&nbsp;</td>
                    </tr>
                </table>
            </TableDrag>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
import TableDrag from '../../components-v2/Table-Drag.vue'
export default {
    components: {
        TableDrag
    },
    props: {
        reportData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            visit: {},
            drugList: [{}, {}, {}, {}],
            drugLength: 4,
            visitList: [{}, {}, {}, {}],
            maxNum: 1
        }
    },
    created() {
        var report = this.reportData
        if (report) {
            if (report.list && report.list.length > 0) {
                this.visit = report.list[0]
            }
            this.formatList(report.list)
        }
    },
    methods: {
        splitList(str) {
            /* var list = []
            if (str) {
                list = str.split(',')
            }else{
							list = ['']
						}
						for(var i=0;i<list.length;i++){
							if(list[i]=='null'){
								list[i]=''
							}
						}
            return list */
            var list = []
            if (str) {
                let newStr = str.replace(/null/g, '')
                list = newStr.split(',')
            } else {
                list = ['']
            }
            return list
        },
        cheList(str) {
            if (str) {
                return str.split(',')
            } else {
                return []
            }
        },
        symptom(str) {
            //症状格式化
            let list = this.cheList(str)
            let zzMap = this.$aadata.gxyzz
            let result = []
            for (let i = 0; i < list.length; i++) {
                let val = zzMap[list[i]]
                if (val) {
                    result.push(val)
                }
            }
            if (result.length > 0) {
                return result.join(',')
            } else {
                return '未填写'
            }
        },
        formatList(visitList) {
            var list = []
            var detailList = visitList
            if (detailList) {
                if (detailList.length > this.visitList.length) {
                    list = detailList
                } else {
                    var CL = this.visitList.length - detailList.length
                    list = detailList
                    for (var i = 0; i < CL; i++) {
                        list.push({})
                    }
                }
            } else {
                for (var i = 0; i < this.visitList.length; i++) {
                    list.push({})
                }
            }
            //this.visitList = list;
            this.initData(list)
        },

        initData(list) {
            let arr = list.map(row => {
                let drugList = this.splitList(row.drugName)
                return drugList.length
            })
            let arrMax = Math.max(...arr)
            this.maxNum = arrMax || 1

            let newList = list.map(row => {
                let drugNameList = this.splitList(row.drugName)
                let drugUseFrequencyList = this.splitList(row.drugUseFrequency)
                let drugDoseageList = this.splitList(row.drugDoseage)
                let drugDoseageUnitList = this.splitList(row.drugDoseageUnit)
                let drugArr = []
                for (let i = 0; i < drugNameList.length; i++) {
                    let par = {
                        drugName: drugNameList[i],
                        drugUseFrequency: drugUseFrequencyList[i],
                        drugDoseage: drugDoseageList[i],
                        drugDoseageUnit: drugDoseageUnitList[i]
                    }
                    drugArr.push(par)
                }
                //判断是否为最长项
                if (drugNameList.length < this.maxNum) {
                    //否-补充
                    var CL = this.maxNum - drugNameList.length
                    for (var i = 0; i < CL; i++) {
                        drugArr.push({
                            drugName: '',
                            drugUseFrequency: '',
                            drugDoseage: '',
                            drugDoseageUnit: ''
                        })
                    }
                }
                row.drugArr = drugArr
                return row
            })
            this.visitList = newList
        }

        /* formatList(drugList) {
            var list = []
            var detailList = drugList
            if (detailList) {
                if (detailList.length > this.drugLength) {
                    list = detailList
                } else {
                    var CL = this.drugLength - detailList.length
                    list = detailList
                    for (var i = 0; i < CL; i++) {
                        list.push({})
                    }
                }
            } else {
                for (var i = 0; i < this.drugLength; i++) {
                    list.push({})
                }
            }
            this.drugList = list
        } */
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
.report {
    text-align: center;
    table {
        .noOver,
        .divBox {
            width: 100%;
            // text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        //width: 880px;
        tr {
            td {
                .ap {
                    display: inline-block;
                    width: 100px;
                    font-family: FZSSJW;
                }
                .lineBox {
                    min-width: 15px;
                }
                .drug-box {
                    height: 89px;
                    box-sizing: border-box;
                    padding: 8px 10px;
                    border-bottom: 1px solid #ccc;
                }
                .last-drug-box {
                    border-bottom: 0px solid #ccc;
                }
            }
        }
    }
    .table-body-wrap {
        width: 1080px;
        margin: 0 auto;
    }
}
</style>
