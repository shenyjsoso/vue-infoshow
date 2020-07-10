<template>
    <div class="report">
        <!-- 冠心病随访记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title">冠心病随访记录表</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{ report.name }}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">
                        {{ report.phrid }}
                    </span>
                </td>
            </tr>
        </table>

        <div class="table-body-wrap">
            <div style="float:left">
                <table border="2" class="stripe" style="width: auto!important;border-right: none;" ref="table1Ref">
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
                        <td class="alignCenter" rowspan="7">体征</td>
                        <td class="alignCenter">体重(kg)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">身高(cm)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">腰围(cm)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">测试心电图次数</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">测血生化指标次数</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">血压(mmhg)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">血糖(mmol/L)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="4">生活方式指导</td>
                        <td class="alignCenter">吸烟与以前相比</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">饮酒量与以前相比</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">针对性健康教育</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">本次病情总体评价与转归</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="4">用药情况</td>
                        <td class="alignCenter">控制血压用药</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法1</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法2</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法3</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="4">用药情况</td>
                        <td class="alignCenter">控制血糖用药</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法1</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法2</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法3</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" rowspan="4">用药情况</td>
                        <td class="alignCenter">控制血脂用药</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法1</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法2</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">用药名称及方法3</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" colspan="2">下次随访时间</td>
                    </tr>
                    <tr>
                        <td class="alignCenter" colspan="2">随访医生</td>
                    </tr>
                </table>
            </div>
            <TableDrag width="800" style="border-right: 2px solid #999999;">
                <table border="2" class="stripe" style="width: 810px!important;border-left: none;border-right: none;cursor: pointer;" ref="table2Ref">
                    <colgroup>
                        <col style="width: 200px;" v-for="(item, index) in visitList" :key="index" />
                    </colgroup>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ $formatDate(item.visitdate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.visitwayName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.weight }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.height }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.waistline }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.electrocardiogram }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodbiochemicalindex }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.dbp }}/{{ item.sbp }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodsuger }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.somkeName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.drinkName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.healtheducation }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.visitevaluateName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.medicinebloodpressureName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodpressureusemethod1 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodpressureusemethod2 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodpressureusemethod3 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.medicinebloodsugerName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodsugerusemethod1 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodsugerusemethod2 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodsugerusemethod3 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.medicinebloodfatName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodfatusemethod1 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodfatusemethod2 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.bloodfatusemethod3 }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ $formatDate(item.nextdate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.visitdoctorName }}&nbsp;</td>
                    </tr>
                </table>
            </TableDrag>
        </div>
    </div>
</template>
<script>
import TableDrag from '../../components-v2/Table-Drag.vue'
export default {
    components: {
        TableDrag,
    },
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
            visitList: [{}, {}, {}, {}],
        }
    },
    created() {
        var report = this.reportData
        if (report) {
            if (report.list && report.list.length > 0) {
                this.report = report.list[0]
                if (report.list.length > 3) {
                    this.visitList = report.list
                } else {
                    let last = 4 - report.list.length
                    let list = report.list
                    for (let i = 0; i < last; i++) {
                        list.push({})
                    }
                    this.visitList = list
                }
            }
        }
    },
    mounted() {
        this.setHeight()
    },
    methods: {
        setHeight() {
            //设置行高度
            var tb1 = this.$refs.table1Ref
            var tb2 = this.$refs.table2Ref
            for (var i = 0; i < tb1.rows.length; ++i) {
                let height1 = tb1.rows[i].clientHeight
                let height2 = tb2.rows[i].clientHeight
                if (height1 > height2) {
                    tb2.rows[i].style.height = height1 + 'px'
                    tb1.rows[i].style.height = height1 + 'px'
                } else {
                    tb1.rows[i].style.height = height2 + 'px'
                    tb2.rows[i].style.height = height2 + 'px'
                }
            }
        },
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
.report {
    .table-body-wrap {
        width: 1080px;
        margin: 0 auto;
    }
}
</style>
