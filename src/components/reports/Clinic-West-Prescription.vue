<template>
    <div class="report">
        <!-- 门诊/急诊西药处方表 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    门诊/急诊西药处方表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark">{{report.name}}</td>
                <td class="alignCenter">性别</td>
                <td class="mark">{{report.sexname}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark">{{report.age}}</td>
                <td class="alignCenter">费别</td>
                <td class="mark">{{report.fylb}}</td>
            </tr>
            <tr>
                <td class="alignCenter">门诊号</td>
                <td class="mark" colspan="2">{{report.opEmHpNo}}</td>
                <td class="alignCenter">就诊科室</td>
                <td class="mark" colspan="2">{{report.dptName}}</td>
                <td class="alignCenter">主治医师</td>
                <td class="mark">{{report.zzys}}</td>
            </tr>
            <tr>
                <td class="alignCenter">处方号</td>
                <td class="mark" colspan="2">{{report.rxCode}}</td>
                <td class="alignCenter">开方时间</td>
                <td class="mark" colspan="4">{{$formatDate(report.rxDt)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">诊断</td>
                <td class="mark" colspan="7">{{report.zd}}</td>
            </tr>
            <tr>
                <td class="alignCenter">Rx</td>
                <td class="mark" colspan="7">
                    <p v-for="(item,index) in list" :key="index">
                        {{item.tradeName}}&nbsp;&nbsp;
                        {{item.drugFryDesc}}&nbsp;&nbsp;
                        每次{{item.singleDose}}{{item.doseUnit}}
                    </p>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">调配</td>
                <td class="mark" colspan="3">{{report.tp}}</td>
                <td class="alignCenter">发药</td>
                <td class="mark" colspan="3">{{report.fy}}</td>
            </tr>
            <tr>
                <td class="alignCenter">核对</td>
                <td class="mark" colspan="3">{{report.hd}}</td>
                <td class="alignCenter">审核</td>
                <td class="mark" colspan="3">{{report.sh}}</td>
            </tr>
        </table> -->
        <table>
            <tr>
                <td style="font-size:24px;font-weight:bold;color:rgba(20,22,26,1);vertical-align: top;">门诊</td>
                <td colspan="6" class="title" style="font-family: 宋体;">{{report.organName}}<br>门诊处方 西药</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2"><span class="juest">姓名</span>：<span class="mark">{{report.name}}</span></td>
                <td colspan="2"><span class="juest">性别</span>：<span class="mark">{{$aadata.sex[report.sex + '']}}</span></td>
                <td colspan="2"><span class="juest">年龄</span>：<span class="mark">{{$jsGetAge(report.birthday,report.rxDt)}}</span></td>
                <td colspan="2"><span class="juest">就诊科室</span>：<span class="mark">{{report.dptName}}</span></td>
            </tr>
            <tr>
                <td colspan="4"><span class="juest">门诊号</span>：<span class="mark">{{report.opEmHpNo}}</span></td>
                <td colspan="4"><span class="juest">处方号</span>：<span class="mark">{{report.rxCode}}</span></td>
            </tr>
            <tr>
                <td colspan="4"><span class="juest">费别</span>：<span class="mark">{{$aadata.klx[report.klx+'']}}</span></td>
                <td colspan="4"><span class="juest">开方时间</span>：<span class="mark">{{$formatDate(report.rxDt)}}</span></td>
            </tr>
            <tr>
                <td colspan="8"><span class="juest">诊断</span>：<span class="mark">{{report.mdDisName}}</span></td>
            </tr>
        </table>
        <div class="report-box" style="border-top: 2px solid #1a1a1a;min-height: 300px;">
            <p class="line">
                <span class="little-title">RX:</span>
            </p>
            <table style="width: 800px !important;">
                <colgroup>
                    <col>
                    <col>
                    <col style="width: 100px;">
                </colgroup>
                <template v-for="(item,index) in list">
                    <tr>
                        <td style="font-size:18px;font-weight: bold;">{{item.tradeName}}</td>
                        <td style="font-size:18px;font-weight: bold;">【{{item.formDesc}}】</td>
                        <td style="font-size:18px;font-weight: bold;">{{item.packNo}} {{item.packUnit}}</td>
                    </tr>
                    <tr style="border-bottom: 1px dashed #999999;">
                        <td colspan="3" style="font-size:18px;">
                            用法：{{item.usewayDesc}}&nbsp;&nbsp;
                            每日{{item.drugFryDesc}}&nbsp;&nbsp;
                            每次{{item.singleDose}} {{item.doseUnit}} </td>
                    </tr>
                </template>
            </table>
        </div>
        <div class="report-box" style="border-top: 2px solid #1a1a1a;">
            <table>
                <tr>
                    <td><span class="juest">主治医生</span>：<span class="mark">{{report.docName}}</span></td>
                    <td><span class="juest">发药</span>：<span class="mark">{{report.pharName}}</span></td>
                    <td></td>
                </tr>
            </table>
        </div>
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
            report: {},
            list: []
        }
    },
    created() {
        var reportData = this.reportData;
        console.log(reportData)
        if (reportData) {
            this.report = reportData || {};
            this.list = this.report.detailList || [];
        }
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
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
        }
    }

    table {
        // width: 960px;

        .fontBold {
            font-weight: bold;
        }

        tr {
            td {
                .juest {
                    width: 65px;
                    display: inline-block;
                    font-size: 16px;
                    text-align: right;
                    text-align: justify;
                    text-align-last: justify;

                    i {
                        display: inline-block;
                        width: 100%;
                    }
                }

                .jy {
                    position: relative;

                    .xz {
                        font-size: 24px;
                        font-weight: bold;
                        color: rgb(25, 90, 255);
                        position: absolute;
                        left: -2px;
                        top: -2px;
                    }
                }
            }
        }
    }
}
</style>