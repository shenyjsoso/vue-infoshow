<template>
    <div class="report">
        <!-- 门诊手术 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    门诊手术
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter" rowspan="2">序号</td>
                <td class="alignCenter" rowspan="2">手术日期</td>
                <td class="alignCenter" rowspan="2">患者姓名</td>
                <td class="alignCenter" rowspan="2">性别</td>
                <td class="alignCenter" rowspan="2">年龄</td>
                <td class="alignCenter" rowspan="2">家庭住址或工作单位</td>
                <td class="alignCenter" rowspan="2">联系电话</td>
                <td class="alignCenter" rowspan="2">术前诊断</td>
                <td class="alignCenter" colspan="2">进手术室</td>
                <td class="alignCenter" colspan="2">出手术室</td>
                <td class="alignCenter" rowspan="2">手术体位</td>
                <td class="alignCenter" rowspan="2">术者</td>
                <td class="alignCenter" rowspan="2">配合护士</td>
                <td class="alignCenter" rowspan="2">标本名称</td>
                <td class="alignCenter" rowspan="2">是否送检</td>
                <td class="alignCenter" rowspan="2">送标本者签字</td>
                <td class="alignCenter" rowspan="2">拒做病理的患者本人签字</td>
                <td class="alignCenter" rowspan="2">备注</td>
            </tr>
            <tr>
                <td class="alignCenter">时间</td>
                <td class="alignCenter">血压</td>
                <td class="alignCenter">时间</td>
                <td class="alignCenter">血压</td>
            </tr>
            <tr>
                <td class="mark alignCenter">1</td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
                <td class="mark alignCenter"></td>
            </tr>
        </table> -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    门诊手术
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    手术单号：<span class="mark"></span>
                </td>
            </tr>
        </table>
        <table border="2">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">性别</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">年龄</td>
                <td class="alignCenter mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">术前主要诊断疾病</td>
                <td colspan="5" class="mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">手术名称</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">手术类型</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">手术位置</td>
                <td class="alignCenter mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">手术记录日期</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">手术开始日期</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">手术结束日期</td>
                <td class="alignCenter mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">麻醉方式</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">术后诊断</td>
                <td class="alignCenter mark"></td>
                <td class="alignCenter">手术医生</td>
                <td class="alignCenter mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">执行科室</td>
                <td colspan="5" class="mark"></td>
            </tr>
        </table> -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-family: 宋体;font-size: 26px !important">{{report.organName}}手术记录</td>
            </tr>
            <tr class="dashed">
                <td colspan="2">姓名：<span class="mark">{{report.name}}</span></td>
                <td colspan="2">性别：<span class="mark">{{$aadata.sex[report.sex + '']}}</span></td>
                <td colspan="2">年龄：<span class="mark">{{$jsGetAge(report.birthday,report.recDt)}}</span></td>
                <td colspan="2">门诊号：<span class="mark">{{report.opEmHpNo}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="4">科室：<span class="mark">{{report.dptName}}</span></td>
                <td colspan="4">手术日期：<span class="mark">{{$formatDate(report.beginDt)}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">术前诊断：</span><span class="mark">{{report.opdDisName}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">手术名称：</span><span class="mark">{{report.operName}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">术后诊断：</span><span class="mark">{{report.oldDisName}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="4">手术开始时间：<span class="mark">{{$formatDate(report.beginDt,'yyyy-MM-dd hh:mm:ss')}}</span></td>
                <td colspan="4">手术结束时间：<span class="mark">{{$formatDate(report.finishDt,'yyyy-MM-dd hh:mm:ss')}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="2">手术者：<span class="mark">{{report.opDocName}}</span></td>
                <td colspan="2">助手1：<span class="mark">{{report.ssysz1xm}}</span></td>
                <td colspan="4">助手2：<span class="mark">{{report.ssysz2xm}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="4">麻醉者：<span class="mark">{{report.anesName}}</span></td>
                <td colspan="4">麻醉方法：<span class="mark">{{report.anesmethodName}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="4">手术级别：<span class="mark">{{report.operNnis}}</span></td>
                <td colspan="4">切口愈合等级：<span class="mark">{{$aadata.oper.woundGrade[report.woundGrade + '']}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8">手术并发症：<span class="mark">{{report.ssbfz}}</span></td>
            </tr>
        </table>
        <div class="report-box">
            <p class="line">
                <span class="little-title">手术步骤：</span><br>
                <span class="little-con indent" v-html="strReplace(report.opProc)"></span>
            </p>
            <!-- <p class="line">
                <span class="little-title">送检标本：</span>
                <span class="little-con"></span>
            </p> -->
        </div>
        <table style="margin-top: 40px;">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>记录者：<span class="mark">{{report.opDocName}}</span></td>
                <td>日期：<span class="mark">{{$formatDate(report.recDt)}}</span></td>
            </tr>
        </table>
        <div class="report-box" style="border-bottom: 2px solid #1a1a1a;"></div>
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default () {
                return {

                }
            }
        }
    },
    data() {
        return {
            report: {}
        }
    },
    created() {
        // console.log(this.reportData)
        this.report = this.reportData || {};
    },
    methods:{
        strReplace(str){
            if(str){
                let width = 10;
                str = str.replace(/-/g,`<span style="display:inline-block;width:${width}px;"></span>-<span style="display:inline-block;width:${width}px;"></span>`);
                return str
            }else{
                return ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        tr {
            td {
                font-size: 16px !important;
            }
        }

        .dashed {
            border-bottom: 1px dashed #999999;
        }
    }

    .report-box {
        width: 1020px;
        margin: 0 auto;

        .line {
            padding: 12px 10px;
            box-sizing: border-box;

            .little-title {
                display: inline-block;
                font-size: 18px;
                line-height: 18px;
                font-family: FZSSJW;
                font-weight: bold;
                color: rgba(20, 22, 26, 1);
            }

            .little-con {
                display: inline-block;
                font-size: 16px;
                line-height: 22px;
                font-family: FZSSJW;
                font-weight: 400;
                color: rgba(20, 22, 26, 1);
            }

            .indent {
                text-indent: 35px;
                padding-top: 14px;
            }
            .mark{
                color:#3D6299;
            }
        }
    }
}
</style>