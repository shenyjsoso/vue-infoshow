<template>
    <div class="report">
        <!-- 新生儿随访基本信息表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">新生儿随访基本信息表</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{reportData.xsexm}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark" style="min-width: 80px;display: inline-block;">{{reportData.etfsjbxxbh}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="2" class="alignCenter">性别</td>
                <td colspan="3">
                    1 男
                    2 女
                    9 未说明的性别
                    0 未知的性别
                    <span class="checkBox" style="float: right;">
                        {{reportData.xsexbdm}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">出生日期</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.xsecsrqsj)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">家庭住址</td>
                <td colspan="3" class="mark">{{reportData.jtzz}}</td>
                <td colspan="2" class="alignCenter">家庭电话</td>
                <td colspan="3" class="mark">
                    {{reportData.homeTelephone}}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">父亲姓名</td>
                <td class="mark">{{reportData.fqxm}}</td>
                <td class="alignCenter">职业</td>
                <td colspan="2" class="mark">
                    {{reportData.fatherProfessionTypeName}}
                </td>
                <td class="alignCenter">联系电话</td>
                <td colspan="2" class="mark">{{reportData.fqdhhm}}</td>
                <td class="alignCenter">出生年</td>
                <td class="mark">{{$getDateFormatByType(reportData.fqcsrq,'year')}}</td>
            </tr>
            <tr>
                <td class="alignCenter">既往史</td>
                <td colspan="4">
                    1 无
                    2 有
                    <span class="lineBox">
                        {{setOtherPa(reportData.fatherPastHistory) == 'other' ? reportData.fatherPastHistory : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.fatherPastHistory) == 'other' ? '2' : reportData.fatherPastHistory}}
                    </span>
                </td>
                <td class="alignCenter">过敏史</td>
                <td colspan="4">
                    1 无
                    2 有
                    <span class="lineBox">
                        {{setOtherPa(reportData.fatherAllergyHistory) == 'other' ? reportData.fatherAllergyHistory : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.fatherAllergyHistory) == 'other' ? '2' : reportData.fatherAllergyHistory}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">母亲姓名</td>
                <td class="mark">{{reportData.mqxm}}</td>
                <td class="alignCenter">职业</td>
                <td colspan="2" class="mark">
                    {{reportData.motherProfessionTypeName}}
                </td>
                <td class="alignCenter">联系电话</td>
                <td colspan="2" class="mark">
                    {{reportData.mqdhhm}}
                </td>
                <td class="alignCenter">出生年</td>
                <td class="mark">{{$getDateFormatByType(reportData.cssmqnl,'year')}}</td>
            </tr>
            <tr>
                <td class="alignCenter">既往史</td>
                <td colspan="4">
                    1 无
                    2 有
                    <span class="lineBox">
                        {{setOtherPa(reportData.motherPastHistory) == 'other' ? reportData.motherPastHistory : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.motherPastHistory) == 'other' ? '2' : reportData.motherPastHistory}}
                    </span>
                </td>
                <td class="alignCenter">过敏史</td>
                <td colspan="4">
                    1 无
                    2 有
                    <span class="lineBox">
                        {{setOtherPa(reportData.motherAllergyHistory) == 'other' ? reportData.motherAllergyHistory : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.motherAllergyHistory) == 'other' ? '2' : reportData.motherAllergyHistory}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">妊娠周数</td>
                <td colspan="2" class="mark">
                    {{reportData.csyz}}
                </td>
                <td class="alignCenter">妊娠期疾病</td>
                <td colspan="6">
                    1 糖尿病
                    2 妊高征
                    3 子痫
                    4 其他
                    <span class="lineBox">
                        {{setOtherPa(reportData.mqrchbz,4) == 'other' ? reportData.mqrchbz : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.mqrchbz,4) == 'other' ? '4' : reportData.mqrchbz}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">生产地点</td>
                <td colspan="2" class="mark">
                    {{reportData.csd}}
                </td>
                <td class="alignCenter">产时情况</td>
                <td colspan="6">
                    1 顺产
                    2 头吸
                    3 产钳
                    4 剖腹
                    5 双胎
                    6 臀位
                    7 其他
                    <span class="lineBox">
                        {{setOtherPa(reportData.csqk,7) == 'other' ? reportData.csqk : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.csqk,7) == 'other' ? '7' : reportData.csqk}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">新生儿出生体重(g)</td>
                <td colspan="3" class="mark">
                    {{reportData.cstz}}
                </td>
                <td colspan="2" class="alignCenter">出生身长(cm)</td>
                <td colspan="3" class="mark">
                    {{reportData.cssc}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">体温(℃)</td>
                <td colspan="3" class="mark">
                    {{reportData.temperature}}
                </td>
                <td colspan="2" class="alignCenter">呼吸(次/分钟)</td>
                <td colspan="3" class="mark">
                    {{reportData.breathing}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">脉搏(次/分钟)</td>
                <td colspan="3" class="mark">
                    {{reportData.sphygmus}}
                </td>
                <td colspan="2" class="alignCenter">面色</td>
                <td colspan="3">
                    1 红润
                    2 黄染
                    3 其他
                    <span class="lineBox">
                        {{setOtherPa(reportData.colourOfFace,3) == 'other' ? reportData.colourOfFace : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.colourOfFace,3) == 'other' ? '3' : reportData.colourOfFace}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">前囟</td>
                <td colspan="3">
                    <span class="lineBox">
                        {{reportData.anteriorFontanelLength}}
                    </span>cm×
                    <span class="lineBox">
                        {{reportData.anteriorFontanelWidth}}
                    </span>cm
                </td>
                <td colspan="2" class="alignCenter">后囟</td>
                <td colspan="3">
                    1 闭合
                    2 未闭
                    <span class="lineBox">
                        {{setOtherPa(reportData.posteriorFontanelIsClose) == 'other' ? reportData.posteriorFontanelIsClose : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.posteriorFontanelIsClose) == 'other' ? '2' : reportData.posteriorFontanelIsClose}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">眼</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.ocularRegion) == 'other' ? reportData.ocularRegion : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.ocularRegion) == 'other' ? '2' : reportData.ocularRegion}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">上肢肌张力</td>
                <td colspan="3">
                    1 正常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.upperLimbMuscleTensility) == 'other' ? reportData.upperLimbMuscleTensility : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.upperLimbMuscleTensility) == 'other' ? '2' : reportData.upperLimbMuscleTensility}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">耳</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.auralRegion) == 'other' ? reportData.auralRegion : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.auralRegion) == 'other' ? '2' : reportData.auralRegion}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">下肢肌张力</td>
                <td colspan="3">
                    1 正常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.lowerLimbMuscleTensility) == 'other' ? reportData.lowerLimbMuscleTensility : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.lowerLimbMuscleTensility) == 'other' ? '2' : reportData.lowerLimbMuscleTensility}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">口腔</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.oralCavity) == 'other' ? reportData.oralCavity : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.oralCavity) == 'other' ? '2' : reportData.oralCavity}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">颈部包块</td>
                <td colspan="3">
                    1 无
                    2 有
                    <span class="lineBox">
                        {{setOtherPa(reportData.neckMass) == 'other' ? reportData.neckMass : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.neckMass) == 'other' ? '2' : reportData.neckMass}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">鼻</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.nose) == 'other' ? reportData.nose : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.nose) == 'other' ? '2' : reportData.nose}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">皮肤</td>
                <td colspan="3">
                    1 未见异常
                    2 湿疹
                    3 糜烂
                    4 其他
                    <span class="lineBox">
                        {{setOtherPa(reportData.skin,4) == 'other' ? reportData.skin : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.skin,4) == 'other' ? '4' : reportData.skin}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">胸部</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.skin) == 'other' ? reportData.skin : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.skin) == 'other' ? '2' : reportData.skin}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">外生殖器</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.genitalia) == 'other' ? reportData.genitalia : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.genitalia) == 'other' ? '2' : reportData.genitalia}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">腹部</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.abdominalRegion) == 'other' ? reportData.abdominalRegion : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.abdominalRegion) == 'other' ? '2' : reportData.abdominalRegion}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">髋关节脱位检查</td>
                <td colspan="3">
                    1 通过
                    2 未通过
                    <span class="lineBox">
                        {{setOtherPa(reportData.hipJointDislocationCheck) == 'other' ? reportData.hipJointDislocationCheck : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.hipJointDislocationCheck) == 'other' ? '2' : reportData.hipJointDislocationCheck}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">脐带</td>
                <td colspan="3">
                    1 未脱
                    2 脱落
                    3 脐部有渗出
                    4 其他
                    <span class="lineBox">
                        {{setOtherPa(reportData.umbilicalCord,4) == 'other' ? reportData.umbilicalCord : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.umbilicalCord,4) == 'other' ? '4' : reportData.umbilicalCord}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">脊柱</td>
                <td colspan="3">
                    1 未见异常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.vertebralColumn) == 'other' ? reportData.vertebralColumn : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.vertebralColumn) == 'other' ? '2' : reportData.vertebralColumn}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">原始反射</td>
                <td colspan="3">
                    1 引出
                    2 未引出
                    <span class="lineBox">
                        {{setOtherPa(reportData.primitiveReflex) == 'other' ? reportData.primitiveReflex : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.primitiveReflex) == 'other' ? '2' : reportData.primitiveReflex}}
                    </span>
                </td>
                <td colspan="2" class="alignCenter">母乳喂养</td>
                <td colspan="3">
                    1 纯母乳
                    2 混合
                    3 人工
                    <span class="checkBox" style="float: right;">
                        {{reportData.breastfeeding}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">转诊</td>
                <td colspan="8">
                    1 无
                    2 有
                    原因：<span class="lineBox">
                        {{reportData.referralReason}}
                    </span>
                    地点：<span class="lineBox">
                        {{reportData.referralPlace}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{reportData.referralFlag}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">结论</td>
                <td colspan="8">
                    1 正常
                    2 异常
                    <span class="lineBox">
                        {{setOtherPa(reportData.checkConclusion) == 'other' ? reportData.checkConclusion : ''}}
                    </span>
                    <span class="checkBox" style="float: right;">
                        {{setOtherPa(reportData.checkConclusion) == 'other' ? '2' : reportData.checkConclusion}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">指导</td>
                <td colspan="8">
                    1 未做
                    2 已做
                    <span class="checkBox" style="float: right;">
                        {{reportData.guidance}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">监测日期</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.checkTime)}}
                </td>
                <td colspan="2" class="alignCenter">检查医生</td>
                <td colspan="3" class="mark">
                    {{reportData.checkDoctor}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次检查时间</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.nextCheckTime)}}
                </td>
                <td colspan="2" class="alignCenter">下次检查地点</td>
                <td colspan="3" class="mark">
                    {{reportData.nextCheckPlace}}
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

            }
        },
        created(){
            // console.log(this.reportData)
        },
        methods:{
            setOtherPa(name,index = 2){
                if(name){
                    var result = 'other';
                    for(var i=0;i<index;i++){
                        var key = i + 1 + '';
                        if(name == key){
                            result = '1';
                            break;
                        }
                    }
                    return result;
                }else{
                    return '';
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 850px;
        }
    }
</style>