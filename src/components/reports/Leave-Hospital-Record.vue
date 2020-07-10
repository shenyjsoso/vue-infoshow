<template>
    <div class="report">
        <!-- 出院记录 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    出院记录
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark" colspan="3">{{reportData.name}}</td>
                <td class="alignCenter">性别</td>
                <td class="mark" colspan="3">
                    {{$aadata.sex[reportData.﻿sex+'']}}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">入院时间</td>
                <td class="mark" colspan="3">{{$formatDate(reportData.inHpDt)}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark" colspan="3">{{reportData.nl}}</td>
            </tr>
            <tr>
                <td class="alignCenter">出院时间</td>
                <td class="mark" colspan="3">{{$formatDate(reportData.outHpDt)}}</td>
                <td class="alignCenter">床号</td>
                <td class="mark" colspan="3">{{reportData.ch}}</td>
            </tr>
            <tr>
                <td class="alignCenter">科别</td>
                <td class="mark" colspan="7">{{reportData.ohDptName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">入院情况</td>
                <td colspan="7" class="mark">{{reportData.inHpIllCon}}</td>
            </tr>
            <tr>
                <td class="alignCenter">入院诊断</td>
                <td colspan="7" class="mark">{{reportData.ihdDisName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">诊疗经过</td>
                <td colspan="7" class="mark">{{reportData.hpCurPro}}</td>
            </tr>
            <tr>
                <td class="alignCenter">出院诊断</td>
                <td colspan="7" class="mark">{{reportData.ohdDisName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">出院情况</td>
                <td colspan="7" class="mark">{{reportData.outHpIllCon}}</td>
            </tr>
            <tr>
                <td class="alignCenter">出院医嘱</td>
                <td colspan="7" class="mark">{{reportData.outHpOdr}}</td>
            </tr>
            <tr>
                <td class="alignCenter">主治医师签名</td>
                <td class="mark" colspan="3">{{reportData.majDocName}}</td>
                <td class="alignCenter">住院医师签名</td>
                <td class="mark" colspan="3">{{reportData.zyysxm}}</td>
            </tr>
        </table> -->
        <div class="report-box">
            <div class="header">{{ reportData.organName }}出院记录</div>
        </div>
        <!-- <table style="margin-top: 36px;">
            <tr>
                <td colspan="2">姓名：<span class="mark">{{reportData.name}}</span></td>
                <td colspan="2">性别：<span class="mark">{{$aadata.sex[reportData.﻿sex+'']}}</span></td>
                <td colspan="2">年龄：<span class="mark">{{reportData.nl}}</span></td>
                <td colspan="2">住院号：<span class="mark">{{reportData.hpSNo}}</span></td>
                <td colspan="2">床号：<span class="mark">{{reportData.ch}}</span></td>
            </tr>
            <tr>
                <td colspan="2">科别：<span class="mark">{{reportData.ohDptName}}</span></td>
                <td colspan="3">入院时间：<span class="mark">{{$formatDate(reportData.inHpDt,'yyyy-MM-dd hh:mm:ss')}}</span></td>
                <td colspan="3">出院时间：<span class="mark">{{$formatDate(reportData.outHpDt,'yyyy-MM-dd hh:mm:ss')}}</span></td>
                <td colspan="2">住院天数：<span class="mark">{{reportData.zyts}}</span></td>
            </tr>
        </table> -->
        <table style="margin-top: 36px;">
            <tr>
                <td colspan="2">
                    姓名：<span class="mark">{{ reportData.name }}</span>
                </td>
                <td colspan="2">
                    科别：<span class="mark">{{ reportData.ohDptName }}</span>
                </td>
                <td colspan="2">
                    床号：<span class="mark">{{ reportData.ch }}</span>
                </td>
                <td colspan="2">
                    住院号：<span class="mark">{{ reportData.hpSNo }}</span>
                </td>
            </tr>
        </table>

        <div class="report-box" style="border-top: 2px solid #1a1a1a;">
            <table style="width: 960px !important;">
                <tr>
                    <td>
                        <span class="juest">性别</span>：<span class="mark">{{ $aadata.sex[reportData.sex + ''] }}</span>
                    </td>
                    <td>
                        <span class="juest">年龄</span>：<span class="mark">{{ $jsGetAge(reportData.birthday, reportData.outHpDt) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="juest">入院时间</span>：<span class="mark">{{ $formatDate(reportData.inHpDt, 'yyyy-MM-dd') }}</span>
                    </td>
                    <td>
                        <span class="juest">出院时间</span>：<span class="mark">{{ $formatDate(reportData.outHpDt, 'yyyy-MM-dd hh:mm:ss') }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="juest">手术名称</span>：<span class="mark">{{ reportData.operationName }}</span>
                    </td>
                    <td>
                        <span class="juest">手术日期</span>：<span class="mark">{{ $formatDate(reportData.operationDt, 'yyyy-MM-dd hh:mm:ss') }}</span>
                    </td>
                </tr>
            </table>

            <p class="line">
                <span class="little-title">入院诊断：</span><br />
                <span class="little-con">{{ reportData.ihdDisDes }}</span>
            </p>
            <p class="line">
                <span class="little-title">入院情况：</span><br />
                <span class="little-con indent">{{ reportData.inHpIllCon }}</span>
            </p>
            <p class="line">
                <span class="little-title">治疗经过：</span><br />
                <span class="little-con indent">{{ reportData.hpCurPro }}</span>
            </p>
            <p class="line">
                <span class="little-title">出院诊断：</span><br />
                <span class="little-con indent">{{ reportData.ohdDisDes }}</span>
            </p>
            <p class="line">
                <span class="little-title">出院情况：</span><br />
                <span class="little-con">{{ reportData.outHpIllCon }}</span>
            </p>
            <p class="line">
                <span class="little-title">出院医嘱：</span><br />
                <span class="little-con">{{ reportData.outHpOdr }}</span>
            </p>
        </div>
        <table style="margin-top: 40px;">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    主治医生：<span class="mark">{{ reportData.majDocName }}</span>
                </td>
                <td>
                    住院医生：<span class="mark">{{ reportData.zyysxm }}</span>
                </td>
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
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    created() {
        // console.log(this.reportData)
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        tr {
            td {
                font-size: 16px;
            }
        }
    }
    .report-box {
        width: 1020px;
        margin: 0 auto;

        table {
            tr {
                td {
                    .juest {
                        width: 70px;
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
                }
            }
        }

        .header {
            text-align: center;
            height: 26px;
            font-size: 26px;
            line-height: 26px;
            font-family: FZSSJW;
            font-weight: bold;
            color: rgba(20, 22, 26, 1);
        }

        .line {
            padding: 12px 38px;
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
}
</style>
