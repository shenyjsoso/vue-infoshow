<template>
    <div class="report">
        <!-- 严重精神障碍患者个人信息补充表 -->
        <table>
            <tr>
                <td colspan="8"
                    class="title"
                    style="font-weight: bold;">
                    严重精神障碍患者个人信息补充表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{report.name}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{report.followno}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 70px;">
                <col style="width: 70px;">
                <col>
                <col>
                <col>
                <col style="width: 70px;">
                <col style="width: 70px;">
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td colspan="2" class="alignCenter">监护人姓名</td>
                <td colspan="3" class="mark">{{report.guardianname}}</td>
                <td colspan="2" class="alignCenter">与患者关系</td>
                <td colspan="3" class="mark">{{report.guardianrelationship}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">监护人住址</td>
                <td colspan="3" class="mark">{{report.guardianaddress}}</td>
                <td colspan="2" class="alignCenter">监护人电话</td>
                <td colspan="3" class="mark">{{report.guardiantel}}</td>
            </tr>
            <tr>
                <td colspan="4" class="alignCenter">辖区村（居）委会联系人、电话</td>
                <td colspan="6" class="mark">{{report.jwhlxrdhhm}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">户别</td>
                <td colspan="8">
                    1 城镇    2 农村
                    <span class="rightBox">
                        <span class="checkBox">{{report.household}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">就业情况</td>
                <td colspan="8">
                    1 在岗工人
                    2 在岗管理者
                    3 农民
                    4 下岗或无业
                    5 在校学生
                    6 退休
                    7 专业技术人员
                    8 其他
                    9 不详
                    <span class="rightBox">
                        <span class="checkBox">{{report.empsituaition}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">知情同意</td>
                <td colspan="8">
                    1 同意参加管理<br>
                    0 不同意参加管理<br>
                    签字：{{report.signatoryname}}<br>
                    签 字 时 间
                    <span class="lineBox">{{$formatDate(report.signatorydate,'yyyy')}}</span>年
                    <span class="lineBox">{{$formatDate(report.signatorydate,'MM')}}</span>月
                    <span class="lineBox">{{$formatDate(report.signatorydate,'dd')}}</span>日
                    <span class="rightBox">
                        <span class="checkBox">{{report.markmanagement}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">初次发病时间</td>
                <td colspan="8">
                    <span class="lineBox">{{$formatDate(report.firstonsettime,'yyyy')}}</span>年
                    <span class="lineBox">{{$formatDate(report.firstonsettime,'MM')}}</span>月
                    <span class="lineBox">{{$formatDate(report.firstonsettime,'dd')}}</span>日
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">既往主要症状</td>
                <td colspan="8">
                    1 幻觉
                    2 交流困难
                    3 猜疑
                    4 喜怒无常
                    5 行为怪异
                    6 兴奋话多
                    7 伤人毁物
                    8 悲观厌世
                    9 无故外走
                    10 自语自笑
                    11 孤僻懒散
                    12 其他<br>
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in strSplit(report.jwzyzz)">{{item}}</span>
                       <!-- <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span> -->
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">既往关锁情况</td>
                <td colspan="8">
                    1 无关锁
                    2 关锁
                    3 关锁已解除
                    <span class="rightBox">
                        <span class="checkBox">{{report.pastlocksituation}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">既往治疗情况</td>
                <td class="alignCenter">门诊</td>
                <td colspan="8">
                    1 未治
                    2 间断门诊治疗
                    3 连续门诊治疗
                    <span class="rightBox">
                        <span class="checkBox">{{report.treatmentcode}}</span>
                    </span>
                    <br>
                    首次抗精神病药治疗时间
                    <span class="lineBox">{{$formatDate(report.firsttreatmentdate,'yyyy')}}</span>年
                    <span class="lineBox">{{$formatDate(report.firsttreatmentdate,'MM')}}</span>月
                    <span class="lineBox">{{$formatDate(report.firsttreatmentdate,'dd')}}</span>日
                </td>
            </tr>
            <tr>
                <td class="alignCenter">住院</td>
                <td colspan="8">
                    曾住精神专科医院/综合医院精神专科
										<span class="lineBox" v-if="report.jwjszkzycs&&report.jwzhyyjszkcs">{{parseInt(report.jwjszkzycs)+parseInt(report.jwzhyyjszkcs)}}</span>
										<span class="lineBox" v-if="report.jwjszkzycs&&!report.jwzhyyjszkcs">{{parseInt(report.jwjszkzycs)}}</span>
										<span class="lineBox" v-if="!report.jwjszkzycs&&report.jwzhyyjszkcs">{{parseInt(report.jwzhyyjszkcs)}}</span>
										<span class="lineBox" v-else></span>次
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">目前诊断情况</td>
                <td colspan="8">
                    诊断
                    <span class="lineBox">{{report.currentdiagnosis}}</span>确诊医院
                    <span class="lineBox">{{report.authororganname}}</span>确诊日期
					<span class="lineBox">{{$formatDate(report.diagdate)}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">最近一次治疗效果</td>
                <td colspan="8">
                    1 临床痊愈
                    2 好转
                    3 无变化
                    4 加重
                    <span class="rightBox">
                        <span class="checkBox">{{report.latesttreatmenteffect}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">危险行为</td>
                <td colspan="8">
                    1 轻度滋事<span class="lineBox">{{report.mildtrouble}}</span>次
                    2 肇事<span class="lineBox">{{report.accident}}</span>次<br>
                    3 肇祸<span class="lineBox">{{report.disaster}}</span>次
                    4 其他危害行为<span class="lineBox">{{report.otherharmfulbehavior}}</span>次<br>
                    5 自伤<span class="lineBox">{{report.selfinjury}}</span>次
                    6 自杀未遂<span class="lineBox">{{report.attemptedsuicide}}</span>次<br>
                    7 无
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in strSplit(report.dangerousact)">{{item}}</span>
                        <!-- <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span>
                        <span class="checkBox"></span> -->
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">经济状况</td>
                <td colspan="8">
                    1 贫困，在当地贫困线标准以下
                    2 非贫困
                    <span class="rightBox">
                        <span class="checkBox">{{report.economicalstatus}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">专科医生的意见(如果有请记录)</td>
                <td colspan="8" class="mark">{{report.specialistadvice}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">填表日期</td>
                <td colspan="3">
                    <span class="lineBox">{{$formatDate(report.createdate,'yyyy')}}</span>年
                    <span class="lineBox">{{$formatDate(report.createdate,'MM')}}</span>月
                    <span class="lineBox">{{$formatDate(report.createdate,'dd')}}</span>日
                </td>
                <td colspan="2" class="alignCenter">医生签字</td>
                <td colspan="3" class="mark">{{report.responsibledoctorname}}</td>
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
            // console.log(this.report)
            this.report = this.reportData || {}
        },
        methods:{
            strSplit(str){
                if(str){
                    return str.split(',')
                }else{
                    return [];
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 800px;
        }
    }
</style>