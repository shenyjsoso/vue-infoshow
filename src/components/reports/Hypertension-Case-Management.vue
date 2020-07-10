<template>
    <div class="report">
        <!-- 高血压病病人管理登记表 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    高血压病病人管理登记表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td rowspan="2">序号</td>
                <td rowspan="2">组名(小区)</td>
                <td rowspan="2">档案号</td>
                <td rowspan="2">姓名</td>
                <td rowspan="2">性别</td>
                <td rowspan="2">年龄</td>
                <td rowspan="2">居住属性</td>
                <td rowspan="2">管理属性</td>
                <td rowspan="2">体检日期</td>
                <td rowspan="2">联系方式</td>
                <td colspan="2">第一季度</td>
                <td colspan="2">第二季度</td>
                <td colspan="2">第三季度</td>
                <td colspan="2">第四季度</td>
                <td rowspan="2">备注</td>
            </tr>
            <tr>
                <td>日期</td>
                <td>血压值</td>
                <td>日期</td>
                <td>血压值</td>
                <td>日期</td>
                <td>血压值</td>
                <td>日期</td>
                <td>血压值</td>
            </tr>
            <tr v-for="(item,index) in tableList" :key="index">
                <td>{{index + 1}}</td>
                <td class="mark alignCenter">{{item.groupName}}</td>
                <td class="mark alignCenter">{{item.phrid}}</td>
                <td class="mark alignCenter">{{item.name}}</td>
                <td class="mark alignCenter">{{item.sexName}}</td>
                <td class="mark alignCenter">{{item.age}}</td>
                <td class="mark alignCenter">{{item.residenceProperty}}</td>
                <td class="mark alignCenter">{{item.managementProperty}}</td>
                <td class="mark alignCenter">{{$formatDate(item.checkingDate)}}</td>
                <td class="mark alignCenter">{{item.contactWay}}</td>
                <td class="mark alignCenter">{{$formatDate(item.firstQuarterFollowupDate)}}</td>
                <td class="mark alignCenter">{{item.firstQuarterBloodPressure}}</td>
                <td class="mark alignCenter">{{$formatDate(item.secondQuarterFollowupDate)}}</td>
                <td class="mark alignCenter">{{item.secondQuarterBloodPressure}}</td>
                <td class="mark alignCenter">{{$formatDate(item.thirdQuarterFollowupDate)}}</td>
                <td class="mark alignCenter">{{item.thirdQuarterBloodPressure}}</td>
                <td class="mark alignCenter">{{$formatDate(item.fourthQuarterFollowupDate)}}</td>
                <td class="mark alignCenter">{{item.fourthQuarterBloodPressure}}</td>
                <td class="mark alignCenter">{{item.memo}}</td>
            </tr>
        </table> -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    高血压病病人管理登记表
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    组名(小区):<span class="mark">{{report.groupName}}</span>
                </td>
                <td colspan="4" style="text-align: right;">
                    档案号:<span class="mark">{{report.phrid}}</span>
                </td>
            </tr>
        </table>
        <table border="2">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="alignCenter mark">{{report.name}}</td>
                <td class="alignCenter">性别</td>
                <td class="alignCenter mark">{{report.sexName}}</td>
                <td class="alignCenter">年龄</td>
                <td class="alignCenter mark">{{report.age}}</td>
                <td class="alignCenter">居住属性</td>
                <td class="alignCenter mark">{{report.residenceProperty}}</td>
            </tr>
            <tr>
                <td class="alignCenter">管理属性</td>
                <td class="mark" colspan="3">{{report.managementProperty}}</td>
                <td class="alignCenter">体检日期</td>
                <td class="alignCenter mark">{{report.checkingDate}}</td>
                <td class="alignCenter">联系电话</td>
                <td class="alignCenter mark">{{report.contactWay}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <tr style="background: #D8DCE5;">
                <td colspan="8" style="padding-left: 22px;">第一季度</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td colspan="7" class="mark">{{$formatDate(report.firstQuarterFollowupDate)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">血压值</td>
                <td colspan="7" class="mark">{{report.firstQuarterBloodPressure}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <tr style="background: #D8DCE5;">
                <td colspan="8" style="padding-left: 22px;">第二季度</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td colspan="7" class="mark">{{$formatDate(report.secondQuarterFollowupDate)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">血压值</td>
                <td colspan="7" class="mark">{{report.secondQuarterBloodPressure}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <tr style="background: #D8DCE5;">
                <td colspan="8" style="padding-left: 22px;">第三季度</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td colspan="7" class="mark">{{$formatDate(report.thirdQuarterFollowupDate)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">血压值</td>
                <td colspan="7" class="mark">{{report.thirdQuarterBloodPressure}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <tr style="background: #D8DCE5;">
                <td colspan="8" style="padding-left: 22px;">第四季度</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td colspan="7" class="mark">{{$formatDate(report.fourthQuarterFollowupDate)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">血压值</td>
                <td colspan="7" class="mark">{{report.fourthQuarterBloodPressure}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <tr>
                <td class="alignCenter">备注</td>
                <td colspan="7" class="mark">{{report.memo}}</td>
            </tr>
        </table> -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    高血压病病人管理登记表
                </td>
            </tr>
            <!-- <tr>
                <td colspan="8" style="text-align: right;">
                    编号:<span class="mark">{{ report.pkId }}</span>
                </td>
            </tr> -->
        </table>

        <table border="2">
            <colgroup>
                <col />
                <col style="width: 100px;" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td class="alignCenter">数据源</td>
                <td colspan="11" class="mark">{{ report.confirmedChannelName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark">{{ report.patientName }}</td>
                <td class="alignCenter">性别</td>
                <td class="mark">{{ report.sexName }}</td>
                <td class="alignCenter">出生日期</td>
                <td colspan="2" class="mark">{{ $formatDate(report.birthDay) }}</td>
                <td class="alignCenter">职业</td>
                <td class="mark" colspan="2">{{ report.occupationName }}</td>
                <td class="alignCenter">联系方式</td>
                <td class="mark">{{ report.telephone }}</td>
            </tr>
            <tr>
                <td class="alignCenter">住址</td>
                <td class="mark" colspan="11">{{ report.addressCountryside }}</td>
                <!-- <td class="alignCenter">医师签名</td>
                <td colspan="3" class="mark">{{report.manadoctorname}}</td>
                <td class="alignCenter">登记日期</td>
                <td colspan="3" class="mark">{{$formatDate(report.createdate)}}</td> -->
            </tr>
            <tr>
                <!-- <td class="alignCenter">邮编</td>
                <td class="mark">{{ report.postcode }}</td> -->
                <td class="alignCenter">建卡日期</td>
                <td colspan="4" class="mark">{{ $formatDate(report.createdate) }}</td>
                <td colspan="2" class="alignCenter">社区责任医师</td>
                <td colspan="5" class="mark">{{ report.communityChargeDoctor }}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">社区卫生服务中心名称</td>
                <td colspan="10" class="mark">{{ report.communityHealthServiceCenter }}</td>
            </tr>
            <!-- <tr>
                <td class="alignCenter" colspan="2">经常在什么地方就诊</td>
                <td colspan="10" class="mark">{{report.frequentHospital}}</td>
            </tr> -->
            <tr>
                <td class="alignCenter">家庭史</td>
                <td colspan="11" class="mark">{{ report.familyHistory || '未填写' }}</td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="3">生活习惯</td>
                <td class="alignCenter">吸烟</td>
                <!-- <td class="alignCenter">是否吸烟</td>
                <td class="mark" colspan="2">{{$aadata.somke[report.smokeflag + ''] || '未填写'}}</td> -->
                <td colspan="10" class="mark">
                    <!-- 日吸烟量：<span class="lineBox">{{report.smokecountday}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    开始吸烟年龄：<span class="lineBox">{{report.smokestartage}}</span> -->
                    {{ report.smokingStatus || '未填写' }}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">饮酒</td>
                <!-- <td class="alignCenter">是否饮酒</td>
                <td class="mark" colspan="2">{{$aadata.drink.flag[report.drinkflag + ''] || '未填写'}}</td> -->
                <td colspan="10" class="mark">
                    <!-- 日饮酒量：<span class="lineBox">{{report.drinkcountday}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    开始饮酒年龄：<span class="lineBox">{{report.drinkstartage}}</span> -->
                    {{ report.drinkStatus || '未填写' }}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">体育锻炼</td>
                <td colspan="10" class="mark">
                    <!-- 周运动次数：<span class="lineBox">{{report.traintimesweek}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    运动时长：<span class="lineBox">{{report.trainminute}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    坚持运动时间：<span class="lineBox">{{report.exercisetime}}</span> -->
                    {{ report.exerciseStatus || '未填写' }}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">身高</td>
                <td colspan="2" class="mark">{{ report.height }}</td>
                <td class="alignCenter">体重</td>
                <td colspan="2" class="mark">{{ report.weight }}</td>
                <td class="alignCenter" colspan="3">未服降压药情况下血压水平</td>
                <td colspan="3" class="mark">{{ report.beforeBloodPressure }}</td>
            </tr>
            <!-- <tr>
                <td class="alignCenter" colspan="2">高血压并发症情况</td>
                <td colspan="10" class="mark">{{report.complicationStatus}}</td>
            </tr> -->
            <!-- <tr>
                <td class="alignCenter" colspan="2">生活自理能力</td>
                <td colspan="10" class="mark">{{report.selfCareAbilityStatus}}</td>
            </tr> -->
            <tr>
                <td class="alignCenter" colspan="2">终止管理日期</td>
                <td colspan="2" class="mark">{{ $formatDate(report.stopManagerDate) }}</td>
                <td class="alignCenter">终止理由</td>
                <td colspan="7" class="mark">{{ report.stopManagerReason }}</td>
            </tr>
        </table>
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
        return {
            tableList: [],
            tableLength: 10,
            report: {}
        }
    },
    created() {
        // console.log(this.reportData)
        this.report = this.reportData || {}
        // this.formatList();
    },
    methods: {
        formatList() {
            var list = []
            var detailList = this.reportData.hypertensionRecordList
            if (detailList) {
                if (detailList.length > this.tableLength) {
                    list = detailList
                } else {
                    var CL = this.tableLength - detailList.length
                    list = detailList
                    for (var i = 0; i < CL; i++) {
                        list.push({})
                    }
                }
            } else {
                for (var i = 0; i < this.tableLength; i++) {
                    list.push({})
                }
            }
            this.tableList = list
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
</style>
