<template>
    <div class="report">
        <!-- 老年人健康管理随访表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    老年人健康管理随访表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{report.name}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{report.phrid}}</span>
                </td>
            </tr>
        </table>
        <!--  class="stripe" -->
        <table border="2">
            <colgroup>
                <col style="width: 80px;">
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td colspan="2" class="alignCenter">项目/时间</td>
                <td class="mark" colspan="3">
                    {{report.projectname}} / {{$formatDate(report.visitdate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">症状</td>
                <td colspan="3">
                    <span class="widBox">1.无不适</span>
                    <span class="widBox">2.新出现症状</span>
                    <span class="widBox">3.原症状持续</span>
                    <span class="widBox">4.需转诊</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.zzbm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">心理状态与指导</td>
                <td colspan="3">
                    <span class="widBox">1.好</span>
                    <span class="widBox">2.可以抑郁</span>
                    <span class="widBox">3.心理指导</span>
                    <span class="widBox">4.需转诊</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.xlztyzdbm}}</span>
                    </span>
                </td>
            </tr>
            <!-- <tr style="background-color: #f5f5f5;">
                <td colspan="5" class="alignCenter">症状</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">无不适</td>
                <td colspan="3" class="mark">{{report.zzwbs}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">新出现症状</td>
                <td colspan="3" class="mark">{{report.zzxcxzz}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">原症状持续</td>
                <td colspan="3" class="mark">{{report.zzyzzcx}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">需转诊</td>
                <td colspan="3" class="mark">{{report.zzxzz}}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
                <td colspan="5" class="alignCenter">心理状态与指导</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">好</td>
                <td colspan="3" class="mark">{{report.xlztyzdh}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">可疑抑郁</td>
                <td colspan="3" class="mark">{{report.xlztyzdkyyy}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">心理指导</td>
                <td colspan="3" class="mark">{{report.xlztyzdxlzd}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">需转诊</td>
                <td colspan="3" class="mark">{{report.xlztyzdxzz}}</td>
            </tr> -->
            <tr style="background-color: #f5f5f5;">
                <td colspan="5" class="alignCenter">危险因素与指导</td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="7">生活方式指导</td>
                <td class="alignCenter">体重</td>
                <td colspan="3" class="mark">{{report.weight}}</td>
            </tr>
            <tr>
                <td class="alignCenter">吸烟</td>
                <td colspan="3" class="mark">{{report.smoking}}</td>
            </tr>
            <tr>
                <td class="alignCenter">饮酒</td>
                <td colspan="3" class="mark">{{report.drinking}}</td>
            </tr>
            <tr>
                <td class="alignCenter">运动</td>
                <td colspan="3">
                    <span class="lineBox alignCenter">{{report.traintimesweek}}</span>次/周&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="lineBox alignCenter">{{report.trainminute}}</span>分钟/次
                </td>
            </tr>
            <tr>
                <td class="alignCenter">饮食</td>
                <td colspan="3" class="mark">{{report.eatedes}}</td>
            </tr>
            <tr>
                <td class="alignCenter">心理调整</td>
                <td colspan="3" class="mark">{{report.psychology}}</td>
            </tr>
            <tr>
                <td class="alignCenter">遵义行为</td>
                <td colspan="3" class="mark">{{report.zzxw}}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
                <td colspan="5" class="alignCenter">疾病预防知识教育</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">疫苗接种</td>
                <td colspan="3" class="mark">{{report.vaccination}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">冠心病预防</td>
                <td colspan="3" class="mark">{{report.gxbyf}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">骨质疏松预防</td>
                <td colspan="3" class="mark">{{report.gzssyf}}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
                <td colspan="5" class="alignCenter">下次随访事项</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访目标</td>
                <td colspan="3" class="mark">{{report.nextvisittarget}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访日期</td>
                <td colspan="3" class="mark">{{$formatDate(report.nextvisitdate)}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访医生签名</td>
                <td colspan="3" class="mark">{{report.visitdoctor}}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
                <td colspan="2" class="alignCenter">药物名称</td>
                <td class="alignCenter">药物用法</td>
                <td class="alignCenter">药物用量</td>
                <td class="alignCenter">药物副作用</td>
            </tr>
            <template v-if="medicines.length > 0">
                <tr v-for="(item,index) in medicines" :key="index">
                    <td class="mark alignCenter" colspan="2">{{item.ywmc}}&nbsp;</td>
                    <td class="mark alignCenter">{{item.ywyf}}</td>
                    <td class="mark alignCenter">{{item.ywyl}}</td>
                    <td class="mark alignCenter">{{item.ywfzy}}</td>
                </tr>
            </template>
            <tr v-else>
                <td class="mark" colspan="2">&nbsp;</td>
                <td class="mark"></td>
                <td class="mark"></td>
                <td class="mark"></td>
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
                report:{},
                medicines:[]
            }
        },
        created(){
            this.report = this.reportData.PersonalOldPeopleVisit || {};
            this.medicines = this.reportData.PersonalOldPeopleMedicines || [];
        },
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 800px;
            .fontBold{
                font-weight:bold;
            }
            tr{
                td{
                    .widBox{
                        display: inline-block;
                        width: 130px;
                    }
                }
            }
        }
    }
</style>