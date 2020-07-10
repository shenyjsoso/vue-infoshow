<template>
    <div class="report">
        <!-- 门诊病历 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="padding-bottom: 0px;font-size: 28px;">
                    {{report.organName}}
                </td>
            </tr>
            <tr>
                <td colspan="8" class="title">
                    门诊病历
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    姓名：<span class="mark">{{report.name}}</span>
                </td>
                <td colspan="2">
                    性别：<span class="mark">{{$aadata.sex[report.sex+'']}}</span>
                </td>
                <td colspan="2">
                    年龄：<span class="mark">{{$jsGetAge(report.birthday,report.seeDocDt)}}</span>
                </td>
                <td colspan="2">
                    科室：<span class="mark">{{report.dptName}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    就诊日期：<span class="mark">{{$formatDate(report.seeDocDt)}}</span>
                </td>
                <td colspan="4">
                    编号：<span class="mark">{{report.opEmNo}}</span>
                </td>
            </tr>
            <tr style="border-top: 1px solid #1A1A1A;">
                <td colspan="8">
                    <span class="juest">主诉</span>：<span class="mark">{{report.subjComplaint}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    <span class="juest">病史</span>：<span class="mark">{{report.presHx}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    <span class="juest">体格检查</span>：<span class="mark">{{report.phyEx}}</span>
                </td>
            </tr>
            <!-- <tr>
                <td colspan="8">
                    <span class="juest">实验室检查</span>：<span class="mark"></span>
                </td>
            </tr> -->
            <tr>
                <td colspan="8">
                    <span class="juest">处理</span>：<span class="mark">{{report.trMeas}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    <span class="juest">诊断</span>：<span class="mark">{{report.mdDisName}}</span>
                </td>
            </tr>
            <tr style="border-bottom: 1px solid #1A1A1A;">
                <td colspan="8" style="text-align: right;">
                    医生签名：<span class="lineBox">{{report.docName}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default{
        props:{
            reportData:{
                type:Object,
                default(){
                    return {

                    }
                }
            }
        },
        data(){
            return{
                report:{}
            }
        },
        created(){
            this.report = this.reportData;
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            tr{
                td{
                    .juest {
                        width: 80px;
                        display: inline-block;
                        font-size: 16px;
                        text-align: right;
                        text-align: justify;
                        font-weight: bold;
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