<template>
    <div class="report">
        <!-- 入院记录 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    入院记录
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter" colspan="2">姓名</td>
				<td class="mark" colspan="4">{{report.name}}</td>
				<td class="alignCenter" colspan="2">出生地</td>
				<td class="mark" colspan="4">{{report.birrthAddress}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">性别</td>
				<td class="mark" colspan="4">{{report.sex == '1'?'男':report.sex == '2'?'女':''}}</td>
				<td class="alignCenter" colspan="2">现住址</td>
				<td class="mark" colspan="4">{{report.presentAddress}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">年龄</td>
				<td class="mark" colspan="4">{{toMathAge(report.rcdDt,report.birthday)}}</td>
				<td class="alignCenter" colspan="2">工作单位</td>
				<td class="mark" colspan="4">{{report.company}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">婚姻</td>
				<td class="mark" colspan="4">{{report.marryStatusName}}</td>
				<td class="alignCenter" colspan="2">入院时间</td>
				<td class="mark" colspan="4">{{$formatDate(report.ihDisDate,'yyyy-MM-dd hh:mm:ss')}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">民族</td>
				<td class="mark" colspan="4">{{report.nationName}}</td>
				<td class="alignCenter" colspan="2">记录时间</td>
				<td class="mark" colspan="4">{{$formatDate(report.rcdDt,'yyyy-MM-dd hh:mm:ss')}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">职业</td>
				<td class="mark" colspan="4">{{report.occupationName}}</td>
				<td class="alignCenter" colspan="2">病史叙述者</td>
				<td class="mark" colspan="4">{{report.providehxName}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">卡类型</td>
				<td class="mark" colspan="10">{{report.klx}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">主诉</td>
				<td class="mark" colspan="10">{{report.subjComplaint}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">现病史</td>
				<td class="mark" colspan="10">{{report.presHx}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">既往史</td>
				<td class="mark" colspan="10">{{report.prevHx}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">个人史</td>
				<td class="mark" colspan="10">{{report.perHis}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">婚育史</td>
				<td class="mark" colspan="10">{{report.obsHis}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">家族史</td>
				<td class="mark" colspan="10">{{report.famHis}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="12">体格检查</td>
			</tr>
			<tr>
				<td class="alignCenter">T</td>
				<td class="alignCenter" colspan="2">
					<span class="mark">{{report.temp}}</span>
					<span style="float: right;">℃</span>
				</td>
				<td class="alignCenter">P</td>
				<td class="alignCenter" colspan="2">
					<span class="mark">{{report.pr}}</span>
					<span style="float: right;">次/分</span>
				</td>
				<td class="alignCenter">R</td>
				<td class="alignCenter" colspan="2">
					<span class="mark">{{report.rr}}</span>
					<span style="float: right;">次/分</span>
				</td>
				<td class="alignCenter">BP</td>
				<td class="alignCenter" colspan="2">
					<span class="mark">{{report.sbp}}/{{report.dbp}}</span>
					<span style="float: right;">mmHg</span>
				</td>
			</tr>
			<tr>
				<td colspan="12">
                    &nbsp;<span class="mark">{{report.phyEx}}</span>
                </td>
			</tr>
			<tr>
				<td colspan="12">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="12">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="12">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="12">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="12">&nbsp;</td>
			</tr>
			<tr>
				<td class="mark" colspan="5"></td>
				<td class="alignCenter" colspan="2">初步诊断</td>
				<td class="mark" colspan="5">
                    {{report.pdDisName}}
                </td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td class="alignCenter" colspan="2">医师签名</td>
				<td class="mark" colspan="5">{{report.pdDocName}}</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td class="alignCenter" colspan="2">日期</td>
				<td class="mark" colspan="5">{{$formatDate(report.ihDisDate)}}</td>
			</tr>
        </table> -->
        <div class="report-box">
            <div class="header">{{ report.ryksmc }}入院记录</div>
        </div>
        <table style="margin-top: 36px;">
            <tr>
                <td colspan="2">
                    姓名：<span class="mark">{{ report.name }}</span>
                </td>
                <td colspan="2">
                    科室：<span class="mark">{{ report.ihDptName }}</span>
                </td>
                <td colspan="2">
                    床号：<span class="mark">{{ report.ch }}</span>
                </td>
                <td colspan="2">
                    住院号：<span class="mark">{{ report.hpSNo }}</span>
                </td>
            </tr>
        </table>

        <div class="report-box" style="border-top: 2px solid #1a1a1a;">
            <table style="width: 960px !important;">
                <tr>
                    <td>
                        <span class="juest">性别</span>：<span class="mark">{{ $aadata.sex[report.sex + ''] }}</span>
                    </td>
                    <!-- <td><span class="juest">出生地</span>：<span class="mark">{{report.birrthAddress}}</span></td> -->
                    <td>
                        <span class="juest">民族</span>：<span class="mark">{{ report.nationName }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="juest">年龄</span>：<span class="mark">{{ $jsGetAge(report.birthday, report.rcdDt) }}</span>
                    </td>
                    <td>
                        <span class="juest">住址</span>：<span class="mark">{{ report.presentAddress }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="juest">职业</span>：<span class="mark">{{ report.occupationName }}</span>
                    </td>
                    <td>
                        <span class="juest">入院时间</span>：<span class="mark">{{ $formatDate(report.hpDate, 'yyyy-MM-dd') }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="juest">婚姻状况</span>：<span class="mark">{{ report.marryStatusName }}</span>
                    </td>
                    <td>
                        <span class="juest">记录时间</span>：<span class="mark">{{ $formatDate(report.rcdDt, 'yyyy-MM-dd hh:mm:ss') }}</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span class="juest">病史陈述者</span>：<span class="mark">{{ report.providehxName }}</span>
                    </td>
                </tr>
            </table>

            <p class="line">
                <span class="little-title">主诉：</span>
                <span class="little-con">{{ report.subjComplaint }}</span>
            </p>
            <p class="line">
                <span class="little-title">现病史：</span>
                <span class="little-con">{{ report.presHx }}</span>
            </p>
            <p class="line">
                <span class="little-title">既往史：</span>
                <span class="little-con">{{ report.prevHx }}</span>
            </p>
            <p class="line">
                <span class="little-title">个人史：</span>
                <span class="little-con">{{ report.perHis }}</span>
            </p>
            <p class="line">
                <span class="little-title">婚育史：</span>
                <span class="little-con">{{ report.obsHis }}</span>
            </p>
            <p class="line">
                <span class="little-title">家族史：</span>
                <span class="little-con">{{ report.famHis }}</span>
            </p>
        </div>

        <!-- 体格检查 -->
        <table style="width: 960px !important;">
            <tr>
                <td colspan="4" style="font-weight:bold;color:rgba(20,22,26,1);font-size: 18px;text-align: center;">体格检查</td>
            </tr>
            <tr>
                <td>
                    T：<span class="mark">{{ report.temp }}</span> ℃
                </td>
                <td>
                    P：<span class="mark">{{ report.pr }}</span> 次/分
                </td>
                <td>
                    R：<span class="mark">{{ report.rr }}</span> 次/分
                </td>
                <td>
                    BP：<span class="mark">{{ report.dbp }}/{{ report.sbp }}</span> mmHg
                </td>
            </tr>
        </table>

        <div class="report-box">
            <p class="line">
                <span class="little-title">初步诊断：</span>
                <span class="little-con">{{ report.pdDisDes }}</span>
            </p>
        </div>
        <table style="margin-top: 40px;">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    医生签名：<span class="mark">{{ report.rsphyName }}</span>
                </td>
                <td>
                    日期：<span class="mark">{{ $formatDate(report.ihDisDate) }}</span>
                </td>
            </tr>
        </table>

        <div class="report-box" style="border-bottom: 2px solid #1a1a1a;"></div>
    </div>
</template>
<script>
import { getAgeBybirth } from '../../assets/utils.js'
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
        return {
            report: {}
        }
    },
    created() {
        this.report = this.reportData
        // console.log(this.reportData)
    },
    methods: {
        toMathAge(rcdDt, birth) {
            if (rcdDt && birth) {
                var year = parseInt(this.$formatDate(rcdDt, 'yyyy')) - parseInt(this.$formatDate(birth, 'yyyy')) + 1
                return year
            } else {
                return ''
            }
        },
        getAgeFromBirth(birth) {
            return getAgeBybirth(birth)
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
//  .report{
//      table{
//          width: 960px;
// .fontBold{
// 	font-weight:bold;
// }
//          tr{
//              td{
//                  .jy{
//                      position: relative;
//                      .xz{
//                          font-size: 24px;
//                          font-weight: bold;
//                          color:rgb(25,90,255);
//                          position: absolute;
//                          left: -2px;
//                          top: -2px;
//                      }
//                  }
//              }
//          }
//      }
//  }
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
                        width: 80px;
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
                // display: inline-block;
                font-size: 18px;
                line-height: 18px;
                font-family: FZSSJW;
                font-weight: bold;
                color: rgba(20, 22, 26, 1);
            }

            .little-con {
                // display: inline-block;
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
