<template>
    <div class="report">
        <!-- 门诊/急诊中药处方表 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    门诊/急诊中药处方表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="4">
                    <span class="lineBox">{{$getDateFormatByType(report.createtime,'year')}}</span>年
                    <span class="lineBox">{{$getDateFormatByType(report.createtime,'month')}}</span>月
                    <span class="lineBox">{{$getDateFormatByType(report.createtime,'day')}}</span>日
                </td>
                <td colspan="4" >
                    <span class="lineBox">{{report.dptName}}</span>科
                    <span class="lineBox">{{report.opEmHpNo}}</span>门诊号
                </td>
                <td class="alignCenter">处方编号</td>
                <td class="mark" colspan="3">{{report.rxCode}}</td>
            </tr>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark" colspan="2">{{report.name}}</td>
                <td class="alignCenter">性别</td>
                <td class="mark" colspan="2">{{report.sexname}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark" colspan="2">{{report.age}}</td>
                <td class="alignCenter">住址/单位</td>
                <td class="mark" colspan="2">{{report.zzdw}}</td>
            </tr>
            <tr>
                <td class="alignCenter">临床诊断</td>
                <td class="mark" colspan="11">{{report.lczd}}</td>
            </tr>
            <tr style="height: 250px;">
                <td colspan="12" class="mark" style="vertical-align: text-top;">
                    <span v-for="(item,index) in list" :key="index" style="display: inline-block;padding: 0px 5px;">
                        {{item.drugName}}{{item.singleDose}}{{item.doseUnit}}
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="2" class="alignCenter">剂数</td>
                <td rowspan="2" class="mark">{{report.cfjs}}</td>
                <td rowspan="2" colspan="8">
                    用法：日<span class="lineBox">{{report.mrjs}}</span>剂，
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            文火&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="report.jfhh=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            武火&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="report.jfhh=='2'">&#xe631;</i>
                        </div>
                    </div>
                    煎<span class="lineBox">{{report.jfcs}}</span>次，
                    每次<span class="lineBox">{{report.jfsj}}</span>分钟，
                    共取汁<span class="lineBox">{{report.yysl}}</span>毫升，
                    分<span class="lineBox">{{report.yycs}}</span>次，
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            内服&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="report.fyfs=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            外用&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="report.fyfs=='2'">&#xe631;</i>
                        </div>
                    </div>
                </td>
                <td class="alignCenter">医师</td>
                <td class="mark">{{report.docName}}</td>
            </tr>
            <tr>
                <td class="alignCenter">医师代码</td>
                <td class="mark">{{report.docCode}}</td>
            </tr>
            <tr>
                <td class="alignCenter">合计金额</td>
                <td class="mark">{{report.rxAmt}}</td>
                <td class="alignCenter">划价</td>
                <td class="mark">{{report.rxHj}}</td>
                <td class="alignCenter">审核</td>
                <td class="mark">{{report.sh}}</td>
                <td class="alignCenter">调配</td>
                <td class="mark">{{report.tp}}</td>
                <td class="alignCenter">复核</td>
                <td class="mark">{{report.fh}}</td>
                <td class="alignCenter">发药</td>
                <td class="mark">{{report.fy}}</td>
            </tr>
        </table> -->
        <table>
            <tr>
                <td style="font-size:24px;font-weight:bold;color:rgba(20,22,26,1);vertical-align: top;">门诊</td>
                <td colspan="6" class="title" style="font-family: 宋体;">{{report.organName}}<br>门诊处方 中药</td>
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
            <!-- <tr>
                <td colspan="8"><span class="juest">诊断</span>：<span class="mark">{{report.mdDisName}}</span></td>
            </tr> -->
        </table>
        <div class="report-box" style="border-top: 2px solid #1a1a1a;min-height: 300px;">
            <p class="line">
                <span class="little-title">RX:</span>
            </p>
            <table>
                <colgroup>
                    <col style="width: 60px;">
                    <col style="width: 300px;">
                    <col style="width: 300px;">
                    <col>
                </colgroup>
                <tr v-for="(item,index) in list" :key="index">
                    <td></td>
                    <td style="font-weight:bold;font-size: 18px;">
                        {{item[0].drugName}} 单次剂量:{{item[0].singleDose}} 剂量单位:{{item[0].doseUnit}}
                    </td>
                    <td style="font-weight:bold;font-size: 18px;">
                        <span v-if="item.length > 1">
                            {{item[1].drugName}} 单次剂量:{{item[1].singleDose}} 剂量单位:{{item[1].doseUnit}}
                        </span>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="2">
                        <span v-if="report.tcmOdrno">配{{report.tcmOdrno}}份</span>&nbsp;&nbsp;
                        <span>{{report.tcmPryDes}}</span>&nbsp;&nbsp;
                        <span>{{report.onceDosageDes}}</span>&nbsp;&nbsp;
                        <span>{{report.tcmUse}}</span>&nbsp;&nbsp;
                        <span>{{report.tcmDecoct}}</span>&nbsp;&nbsp;
                        <p>{{report.rxNote}}</p>
                    </td>
                    <td></td>
                </tr>
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
        if (reportData) {
            this.report = reportData.record || {};
            this.list = this.mapList(reportData.detailList || []);
        }
    },
    methods:{
        mapList(list){
            let result = [];
            for(var i=0;i<list.length;i+=2){
                result.push(list.slice(i,i+2));
            }
            return result;
        }
    }
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

        tr {
            td {
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
            }
        }
    }
}
</style>