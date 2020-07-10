<template>
    <div class="report">
        <!-- 肿瘤随访记录 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    肿瘤随访记录
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="6"></td>
                <td>编码</td>
                <td colspan="3" class="mark">{{reportData.tumorreportcardno}}</td>
            </tr>
            <tr>
                <td>姓名</td>
                <td class="mark">{{reportData.name}}</td>
                <td>性别</td>
                <td class="mark">{{reportData.sexname}}</td>
                <td>年龄</td>
                <td class="mark">{{reportData.age}}</td>
                <td>出生日期</td>
                <td colspan="3" class="mark">{{$formatDate(reportData.birthday)}}</td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td colspan="2" class="mark">{{reportData.idcrad}}</td>
                <td>联系电话</td>
                <td colspan="2" class="mark">{{reportData.lxdhhm}}</td>
                <td>费用支付方式</td>
                <td colspan="3" class="mark">{{reportData.fyzffsmc}}</td>
            </tr>
            <tr>
                <td>户籍地址</td>
                <td class="mark">{{reportData.szzqzxs}}</td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td colspan="2" class="mark">{{reportData.sdq}}</td>
                <td colspan="2" >市(地区)</td>
                <td class="mark">{{reportData.xq}}</td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">{{reportData.xzjdbsc}}</td>
                <td>街道(乡、镇)</td>
                <td colspan="2" class="mark">{{reportData.cjlnd}}</td>
                <td colspan="2" >路(村、街、弄)</td>
                <td class="mark">{{reportData.mphm}}</td>
                <td>号</td>
            </tr>
            <tr>
                <td>现住址</td>
                <td class="mark">{{reportData.xszzqzxs}}</td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td colspan="2" class="mark">{{reportData.xsdq}}</td>
                <td colspan="2">市(地区)</td>
                <td class="mark">{{reportData.xxq}}</td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">{{reportData.xxzjdbsc}}</td>
                <td>街道(乡、镇)</td>
                <td colspan="2" class="mark">{{reportData.xcjlnd}}</td>
                <td colspan="2" >路(村、街、弄)</td>
                <td class="mark">{{reportData.xmphm}}</td>
                <td>号</td>
            </tr>
            <tr>
                <td>随访日期</td>
                <td colspan="3" class="mark">{{$formatDate(reportData.visitdate)}}</td>
                <td colspan="2">随访医师</td>
                <td colspan="4" class="mark">{{reportData.visitdoctor}}</td>
            </tr>
            <tr>
                <td>身高(cm)</td>
                <td class="mark">{{reportData.height}}</td>
                <td>体重(KG)</td>
                <td class="mark">{{reportData.weight}}</td>
                <td colspan="2">体重指数</td>
                <td class="mark">{{reportData.bmi}}</td>
                <td colspan="2">精神状况</td>
                <td class="mark">{{reportData.jszk}}</td>
            </tr>
            <tr>
                <td>吸烟史</td>
                <td class="mark">{{reportData.smokinghistory}}</td>
                <td colspan="2">被动吸烟史地点</td>
                <td colspan="2" class="mark">{{reportData.bdxysdd}}</td>
                <td colspan="2">开始吸烟年龄(岁)</td>
                <td colspan="2" class="mark">{{reportData.smokestartage}}</td>
            </tr>
            <tr>
                <td colspan="2">日吸烟量(支)</td>
                <td class="mark">{{reportData.smokecountday}}</td>
                <td colspan="2">戒烟年龄(岁)</td>
                <td class="mark">{{reportData.smokeendage}}</td>
                <td colspan="2">合计吸烟年龄</td>
                <td colspan="2" class="mark">{{reportData.allsmokecountage}}</td>
            </tr>
            <tr>
                <td colspan="2">日饮酒量(两)</td>
                <td class="mark">{{reportData.drinkcountday}}</td>
                <td colspan="2">饮酒频率</td>
                <td class="mark">{{reportData.drinkfreq}}</td>
                <td colspan="2">饮酒种类</td>
                <td colspan="2" class="mark">{{reportData.drinktype}}</td>
            </tr>
            <tr>
                <td colspan="2">开始饮酒年龄(岁)</td>
                <td colspan="2" class="mark">{{reportData.drinkstartage}}</td>
                <td colspan="2">戒酒年龄(岁)</td>
                <td colspan="2" class="mark">{{reportData.drinkendage}}</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td colspan="2">运动方式说明</td>
                <td colspan="2" class="mark">{{reportData.exerciseinstruction}}</td>
                <td colspan="2">运动频率类别</td>
                <td colspan="2" class="mark">{{reportData.trainfreqtype}}</td>
                <td>运动时间(min)</td>
                <td class="mark">{{reportData.trainminute}}</td>
            </tr>
            <tr>
                <td colspan="2">坚持运动时长(年)</td>
                <td colspan="2" class="mark">{{reportData.exercisetime}}</td>
                <td colspan="2">周运动次数(次/周)</td>
                <td colspan="2" class="mark">{{reportData.traintimesweek}}</td>
                <td>饮食习惯</td>
                <td class="mark">{{reportData.eatehabit}}</td>
            </tr>
            <tr>
                <td colspan="2">首次出现症状日期</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.firstDate)}}</td>
                <td colspan="2">首次就诊日期</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.firstclinicdate)}}</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td colspan="2">治疗情况</td>
                <td colspan="2" class="mark">{{reportData.zlqk}}</td>
                <td colspan="2">住院号</td>
                <td colspan="2" class="mark">{{reportData.inhospitalcode}}</td>
                <td>病理号</td>
                <td class="mark">{{reportData.pathologyno}}</td>
            </tr>
            <tr>
                <td colspan="2">首次手术医院</td>
                <td colspan="3" class="mark">{{reportData.scssjgmc}}</td>
                <td colspan="2">手术日期</td>
                <td colspan="3" class="mark">{{$formatDate(reportData.opsDate)}}</td>
            </tr>
            <tr>
                <td colspan="2">首次肿瘤手术性质</td>
                <td colspan="3" class="mark">{{reportData.tumorfirstopera}}</td>
                <td colspan="2">肿瘤诊疗机构</td>
                <td colspan="3" class="mark">{{reportData.tumortreatorganname}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤手术机构名称</td>
                <td colspan="3" class="mark">{{reportData.tumoroperaorganname}}</td>
                <td colspan="2">肿瘤化疗机构名称</td>
                <td colspan="3" class="mark">{{reportData.tumorchemorganname}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤放疗机构名称</td>
                <td colspan="3" class="mark">{{reportData.tumorradioorganname}}</td>
                <td colspan="2">肿瘤化疗疗程次数</td>
                <td colspan="3" class="mark">{{reportData.tumorchemorgantime}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤病人治疗方式</td>
                <td colspan="2" class="mark">{{reportData.cnameCureProject}}</td>
                <td>复发次数</td>
                <td colspan="2" class="mark">{{reportData.relapsetimes}}</td>
                <td>复发日期</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.recurrencedate)}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤病人转移-部位</td>
                <td colspan="2" class="mark">{{reportData.tumormetastasis}}</td>
                <td>肿瘤家族史</td>
                <td colspan="2" class="mark">{{reportData.cnameTheriomaHis}}</td>
                <td>与本人关系</td>
                <td colspan="2" class="mark">{{reportData.jzzqtzlhzybrgx}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤家族史瘤别</td>
                <td colspan="2" class="mark">{{reportData.familyhistorytumor}}</td>
                <td colspan="2">目前疾病情况类别</td>
                <td colspan="2" class="mark">{{reportData.cnameCurState}}</td>
                <td>指导日期</td>
                <td class="mark">{{$formatDate(reportData.guidedate)}}</td>
            </tr>
            <tr>
                <td colspan="2">肿瘤病人指导内容</td>
                <td colspan="3" class="mark">{{reportData.guidedes}}</td>
                <td colspan="2">卡氏评分值</td>
                <td colspan="3" class="mark">{{reportData.carrsscorevalues}}</td>
            </tr>
            <tr>
                <td colspan="2">撤销随访管理日期</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.cancelthefollowupdate)}}</td>
                <td colspan="2">撤销随访管理原因</td>
                <td colspan="2" class="mark">{{reportData.cancelthefollowupreason}}</td>
                <td>死亡日期</td>
                <td class="mark">{{$formatDate(reportData.deathdatetime)}}</td>
            </tr>
            <tr>
                <td colspan="2">死亡原因</td>
                <td colspan="3" class="mark">{{reportData.deadreason}}</td>
                <td colspan="2">其他死亡原因</td>
                <td colspan="3" class="mark">{{reportData.otherdeadreason}}</td>
            </tr>
            <tr>
                <td colspan="2">死亡地点</td>
                <td colspan="2" class="mark">{{reportData.deadaddree}}</td>
                <td colspan="2">其他死亡地点</td>
                <td colspan="2" class="mark">{{reportData.otherdeadaddree}}</td>
                <td>生存期</td>
                <td class="mark">{{reportData.lifetime}}</td>
            </tr>
            <tr>
                <td colspan="2">填报单位名称</td>
                <td colspan="3" class="mark">{{reportData.reportlorganname}}</td>
                <td colspan="2">报告医师姓名</td>
                <td colspan="3" class="mark">{{reportData.reportdoctorname}}</td>
            </tr>
            <tr>
                <td colspan="2">医疗机构名称</td>
                <td colspan="3" class="mark">{{reportData.organName}}</td>
                <td colspan="2">下次随访日期</td>
                <td colspan="3" class="mark">{{$formatDate(reportData.nextDate)}}</td>
            </tr>
            <tr>
                <td>转诊原因</td>
                <td colspan="2" class="mark">{{reportData.referralreason}}</td>
                <td>接诊机构</td>
                <td colspan="2" class="mark">{{reportData.transinorganname}}</td>
                <td colspan="2">接诊机构科室名称</td>
                <td colspan="2" class="mark">{{reportData.transindeptname}}</td>
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

            }
        },
        created(){
            // console.log(this.reportData)
        },
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
        }
    }
</style>