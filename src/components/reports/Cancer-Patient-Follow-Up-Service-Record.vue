<template>
    <div class="report">
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    肿瘤患者随访服务记录表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;text-align: left;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{ report.name }}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{ report.phrid }}</span>
                </td>
            </tr>
        </table>

        <div class="table-body-wrap">
            <div style="float:left">
                <table border="2" class="stripe" style="width: auto!important;border-right: none;" ref="table1Ref">
                    <colgroup>
                        <col style="width: 230px;" />
                    </colgroup>
                    <tr>
                        <td class="alignCenter">随访日期</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">随访方式</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">随访医生</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">目前情况</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">主要治疗方式</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">治疗医院</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">治疗情况</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">有无复发</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">复发次数(次)</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">有无移位</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">转移部位</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">健康指导</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">卡氏评分</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">填报单位</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">报告医生</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">死亡日期</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">死亡原因</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">死亡地点</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">下次随访日期</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">最后修改单位</td>
                    </tr>
                    <tr>
                        <td class="alignCenter">最后修改人</td>
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
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.visitdoctorName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.currentsituation }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.treatmentmethodName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.treatmenthospital }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.treatmenteffectName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.isrecrudescenceName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.recrudescencetimes }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.metastaticsitesName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.metastaticsites }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ $aadata.zlzdnr[item.healtheducation + ''] }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.kps }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.inputunitName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.inputuserName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ $formatDate(item.deaddate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.deadreasonName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.deadplaceName }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ $formatDate(item.nextvisitdate) }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.lastmodifyunittd }}&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="mark" v-for="(item, index) in visitList" :key="index">{{ item.lastmodifyuserName }}&nbsp;</td>
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
                } else {
                    tb1.rows[i].style.height = height2 + 'px'
                }
            }
        },
        splitList(str) {
            var list = []
            if (str) {
                let newStr = str.replace(/null/g, '')
                list = newStr.split(',')
            } else {
                list = ['']
            }
            return list
        },
    },
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
