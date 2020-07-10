<template>
    <div class="report">
        <!-- 糖尿病管理卡 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    糖尿病管理卡
                </td>
            </tr>
			<tr>
				<td colspan="2">建卡日期：<span class="mark">{{$formatDate(reportData.createdate)}}</span></td>
                <td colspan="2">建卡机构：<span class="mark">{{reportData.createunit}}</span></td>
                <td colspan="2">临床确诊年份：<span class="mark">{{$formatDate(reportData.diagnoseDate)}}</span></td>
				<td colspan="2">
					编号：<span class="mark">{{reportData.residentsHealthFileNo}}</span>
				</td>
			</tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td>姓名</td>
                <td class="mark" colspan="2">{{reportData.name}}</td>
                <td>性别</td>
                <td class="mark" colspan="2">{{$aadata.sex[reportData.﻿sex+'']}}</td>
                <td>出生日期</td>
                <td class="mark" colspan="2">{{$formatDate(reportData.birthday)}}</td>
                <td>建档日期</td>
                <td class="mark" colspan="2">{{$formatDate(reportData.createdate)}}</td>
                <!-- <td>婚姻</td>
                <td class="mark">{{reportData.marriagename}}</td>
                <td>文化程度</td>
                <td class="mark">{{reportData.whcdms}}</td> -->
            </tr>
            <!-- <tr>
                <td>身份证号</td>
                <td colspan="2" class="mark">{{reportData.idcard}}</td>
                <td>职业</td>
                <td colspan="2" class="mark">{{reportData.zymc}}</td>
                <td>联系电话</td>
                <td colspan="2" class="mark">{{reportData.lxdhhm}}</td>
                <td>费用支付方式</td>
                <td colspan="2" class="mark">{{reportData.fyzffsmc}}</td>
            </tr> -->
            <!-- <tr>
                <td>住址</td>
                <td class="mark">{{reportData.szzqzxs}}</td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td class="mark">{{reportData.sdq}}</td>
                <td>市(地区)</td>
                <td class="mark">{{reportData.xq}}</td>
                <td>区(县)</td>
                <td colspan="2" class="mark">{{reportData.xzjdbsc}}</td>
                <td colspan="2">街道(乡、镇)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="3" class="mark">{{reportData.cjlnd}}</td>
                <td colspan="2">路(村、街、弄)</td>
                <td class="mark">{{reportData.mphm}}</td>
                <td>号</td>
                <td colspan="4"></td>
            </tr> -->
            <!-- <tr>
                <td>建卡日期</td>
                <td class="mark" colspan="2">{{$formatDate(reportData.createdate)}}</td>
                <td colspan="2">建卡机构</td>
                <td colspan="3" class="mark">{{reportData.createunit}}</td>
                <td colspan="2">临床确诊年份</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.diagnoseDate)}}</td>
            </tr> -->
            <!-- <tr>
                <td>病例种类</td>
                <td colspan="3" class="mark">{{reportData.blzl}}</td>
                <td colspan="2">临床确诊年份</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.lcqznf)}}</td>
                <td>病历来源</td>
                <td colspan="3" class="mark">{{reportData.blly}}</td>
            </tr>
            <tr>
                <td>其他病历种类</td>
                <td colspan="3" class="mark">{{reportData.qtblzl}}</td>
                <td colspan="2">其他病历来源</td>
                <td colspan="2" class="mark">{{reportData.qtblly}}</td>
                <td colspan="2">IGR确诊时间年数</td>
                <td colspan="2" class="mark">{{reportData.igrqzsj}}</td>
            </tr> -->
            <tr>
                <td colspan="2">收缩压(mmHg)</td>
                <td class="mark">{{reportData.constriction}}</td>
                <td colspan="2">舒张压(mmHg)</td>
                <td class="mark">{{reportData.diastolic}}</td>
                <td>身高(cm)</td>
                <td class="mark">{{reportData.height}}</td>
                <td>体重(KG)</td>
                <td class="mark">{{reportData.weight}}</td>
                <td>体重指数</td>
                <td class="mark">{{reportData.bmi}}</td>
            </tr>
            <tr>
                <!-- <td colspan="2">脉搏(次/分)</td>
                <td class="mark">{{reportData.pulse}}</td>
                <td colspan="2">心率(次/分)</td>
                <td class="mark">{{reportData.heartrate}}</td> -->
                <!-- <td colspan="2">空腹血糖值(mmol/L)</td>
                <td class="mark">{{reportData.fbs}}</td> -->
                <!-- <td colspan="2">随机血糖值(mmol/L)</td>
                <td class="mark">{{reportData.fbgRandom}}</td> -->
            </tr>
            <tr>
                <td colspan="2">空腹血糖值(mmol/L)</td>
                <td class="mark">{{reportData.fbs}}</td>
                <td colspan="3">餐后两小时血糖值(mmol/L)</td>
                <td colspan="6" class="mark">{{reportData.pbs}}</td>
            </tr>
            <tr>
                <td>吸烟状况</td>
                <td colspan="2" class="mark">{{$aadata.somke[reportData.﻿smokeflag+'']}}</td>
                <td colspan="2">日吸烟量(支)</td>
                <td class="mark">{{reportData.smokecountday}}</td>
                <td colspan="2">开始吸烟年龄(岁)</td>
                <td class="mark">{{reportData.smokestartage}}</td>
                <td colspan="2">戒烟年龄</td>
                <td class="mark">{{reportData.smokeendage}}</td>
            </tr>
            <tr>
                <td>饮酒频率</td>
                <td colspan="2" class="mark">{{$aadata.drink.freq[reportData.drinkfreqcode+'']}}</td>
                <td colspan="2">饮酒种类</td>
                <td class="mark">{{$aadata.drink.type[reportData.drinktypecode+'']}}</td>
                <td colspan="2">开始饮酒年龄(岁)</td>
                <td class="mark">{{reportData.drinkstartage}}</td>
                <td colspan="2">戒酒年龄</td>
                <td class="mark">{{reportData.drinkendage}}</td>
            </tr>
            <tr>
                <td>饮食习惯</td>
                <td colspan="2" class="mark">{{$aadata.eat[reportData.eatehabitcode+'']}}</td>
                <td colspan="2">日主食量(g)</td>
                <td class="mark">{{reportData.mainintake}}</td>
                <td colspan="6"></td>
            </tr>
            <tr>
                <td colspan="2">运动方式说明</td>
                <td colspan="4" class="mark">{{reportData.exerciseinstruction}}</td>
                <!-- <td colspan="2">运动频率类别</td>
                <td colspan="2" class="mark">{{reportData.trainfreqdes}}</td> -->
                <td colspan="2">运动时间(min)</td>
                <td colspan="4" class="mark">{{reportData.trainminute}}</td>
            </tr>
            <tr>
                <td colspan="2">坚持运动时长(年)</td>
                <td colspan="2" class="mark">{{reportData.exercisetime}}</td>
                <td colspan="2">周运动次数(次/周)</td>
                <td colspan="2" class="mark">{{reportData.traintimesweek}}</td>
                <td colspan="4"></td>
            </tr>
            <!-- <tr>
                <td colspan="2">糖尿病家族史</td>
                <td colspan="2" class="mark">{{reportData.tnbjzsname}}</td>
                <td colspan="2">与患者关系名称</td>
                <td colspan="2" class="mark">{{reportData.yhzgxmc}}</td>
                <td colspan="4"></td>
            </tr> -->
            <!-- <tr>
                <td colspan="2">糖尿病并发症种类</td>
                <td colspan="2" class="mark">{{reportData.tnbbfzzlms}}</td>
                <td colspan="2">糖尿病并发症名称</td>
                <td colspan="2" class="mark">{{reportData.tnbbfzmc}}</td>
                <td colspan="2">糖尿病并发症诊断时间</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.tnbbfzzdsj)}}</td>
            </tr> -->
            <tr>
                <!-- <td>迁出区</td>
                <td colspan="2" class="mark">{{reportData.qcq}}</td>
                <td>迁出街道</td>
                <td colspan="2" class="mark">{{reportData.qcjd}}</td>
                <td>死亡信息</td>
                <td class="mark">{{reportData.swxxms}}</td>
                <td>失访信息</td>
                <td class="mark">{{reportData.sfxx}}</td> -->
                <td>其他信息</td>
                <td class="mark" colspan="11">{{reportData.otherAssay}}</td>
            </tr>
            <tr>
                <td>医疗机构名称</td>
                <td colspan="2" class="mark">{{reportData.diagnoseOrgan}}</td>
                <td>终止管理日</td>
                <td colspan="2" class="mark">{{$formatDate(reportData.zzrq)}}</td>
                <td>终止管理源</td>
                <td colspan="2" class="mark">{{reportData.zzlymc}}</td>
                <td>责任医师姓名</td>
                <td colspan="2" class="mark">{{reportData.zrysxm}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    import {jsGetAge} from '../../assets/utils.js'
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
            getAge(b,d){
                return jsGetAge(b,d)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
</style>