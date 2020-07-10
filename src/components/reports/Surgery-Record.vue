<template>
    <div class="report">
        <!-- 手术记录 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    手术记录
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark">{{report.xm}}</td>
                <td class="alignCenter">性别</td>
                <td class="mark">{{report.xbmc}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark">{{report.nl}}</td>
                <td class="alignCenter">病案号</td>
                <td class="mark">{{report.bah}}</td>
            </tr>
            <tr>
                <td class="alignCenter">出生日期</td>
                <td class="mark">{{$formatDate(report.csrq)}}</td>
                <td class="alignCenter">病区</td>
                <td class="mark">{{report.bq}}</td>
                <td class="alignCenter">床号</td>
                <td class="mark">{{report.ch}}</td>
                <td class="alignCenter">住院号</td>
                <td class="mark">{{report.zyh}}</td>
            </tr>
            <tr>
                <td class="alignCenter">手术开始时间</td>
                <td class="mark" colspan="3">{{$formatDate(report.operbegTime,'yyyy-MM-dd hh:mm:ss')}}</td>
                <td class="alignCenter">手术结束时间</td>
                <td class="mark" colspan="3">{{$formatDate(report.operendTime,'yyyy-MM-dd hh:mm:ss')}}</td>
            </tr>
            <tr>
                <td class="alignCenter">手术日期</td>
                <td class="mark" colspan="2">{{$formatDate(report.ssrq)}}</td>
                <td class="alignCenter">血型</td>
                <td class="mark" colspan="2">{{report.xx}}</td>
                <td class="alignCenter">手术类型名称</td>
                <td class="mark">{{report.operName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">术前诊断</td>
                <td class="mark" colspan="2">{{report.operPrediag}}</td>
                <td class="alignCenter">术后诊断</td>
                <td class="mark" colspan="2">{{report.operPostdiag}}</td>
                <td class="alignCenter">手术者姓名</td>
                <td class="mark">{{report.sszxm}}</td>
            </tr>
            <tr>
                <td class="alignCenter">助手I</td>
                <td class="mark" colspan="2">{{report.operdoc1Name}}</td>
                <td class="alignCenter">助手II</td>
                <td class="mark" colspan="2">{{report.operdoc2Name}}</td>
                <td class="alignCenter">切口愈合等级</td>
                <td class="mark">{{report.inchealId}}</td>
            </tr>
            <tr>
                <td class="alignCenter">麻醉者</td>
                <td class="mark" colspan="2">{{report.operanesName}}</td>
                <td class="alignCenter">麻醉方法</td>
                <td class="mark" colspan="2">{{report.anetypeName}}</td>
                <td class="alignCenter">麻醉执行科室</td>
                <td class="mark">{{report.mzzxks}}</td>
            </tr>
            <tr>
                <td class="alignCenter">手术名称</td>
                <td class="mark" colspan="2">{{report.operType}}</td>
                <td class="alignCenter">手术目标部位</td>
                <td class="mark" colspan="2">{{report.positionName}}</td>
                <td class="alignCenter">手术级别</td>
                <td class="mark">{{report.operLevelName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">麻醉分级</td>
                <td class="mark" colspan="2">{{report.mzfj}}</td>
                <td class="alignCenter">手术步骤</td>
                <td class="mark" colspan="2">{{report.ssbz}}</td>
                <td class="alignCenter">手术后情况</td>
                <td class="mark">{{report.sshqk}}</td>
            </tr>
            <tr>
                <td class="alignCenter">无菌手术标志</td>
                <td class="mark" colspan="2">{{report.wjssbz}}</td>
                <td class="alignCenter">无菌手术感染标志</td>
                <td class="mark" colspan="2">{{report.wjssgrbz}}</td>
                <td class="alignCenter">手术合并症标识</td>
                <td class="mark">{{report.sshbzbs}}</td>
            </tr>
            <tr>
                <td class="alignCenter">手术并发症标识</td>
                <td class="mark" colspan="2">{{report.ssbfzbs}}</td>
                <td class="alignCenter">病理检查</td>
                <td class="mark" colspan="2">{{report.bljc}}</td>
                <td class="alignCenter">其他医学处置</td>
                <td class="mark">{{report.qtyxcz}}</td>
            </tr>
            <tr>
                <td class="alignCenter">住院机构</td>
                <td class="mark" colspan="2">{{report.zyjg}}</td>
                <td class="alignCenter">住院科室</td>
                <td class="mark" colspan="2">{{report.zyks}}</td>
                <td class="alignCenter">手术执行科室</td>
                <td class="mark">{{report.sszxks}}</td>
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
                <td colspan="2">住院号：<span class="mark">{{report.opEmHpNo}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="4">住院科室：<span class="mark">{{report.dptName}}</span></td>
                <td colspan="4">手术日期：<span class="mark">{{$formatDate(report.beginDt)}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">术前诊断：</span><span class="mark">{{report.opdDisDes}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">手术名称：</span><span class="mark">{{report.operName}}</span></td>
            </tr>
            <tr class="dashed">
                <td colspan="8"><span style="font-weight: bold;">术后诊断：</span><span class="mark">{{report.oldDisDes}}</span></td>
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
        console.log(this.reportData)
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