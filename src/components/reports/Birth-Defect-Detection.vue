<template>
    <div class="report">
        <!-- 出生缺陷检测报告 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">出生缺陷监测疾病报告</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td>姓名</td>
                <td class="mark">{{reportData.etxm}}</td>
                <td>新生儿性别</td>
                <td class="mark">
									<span v-if="reportData.etxb=='1'">男</span>
									<span v-if="reportData.etxb=='2'">女</span>
								</td>
                <td>出生日期</td>
                <td class="mark">{{$formatDate(reportData.etcsrq)}}</td>
                <td>产前诊断孕周(w)</td>
                <td class="mark">{{reportData.cqzdyz}}</td>
            </tr>
            <tr>
                <td>地址</td>
                <td class="mark">{{reportData.dzsheng}}</td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td class="mark">{{reportData.dzshi}}</td>
                <td>市(地区)</td>
                <td class="mark">{{reportData.dzqu}}</td>
                <td>县(区)</td>
            </tr>
            <tr>
                <td>住院号</td>
                <td class="mark">{{reportData.zyh}}</td>
                <td>母亲姓名</td>
                <td class="mark">{{reportData.mqxm}}</td>
                <td>民族</td>
                <td class="mark">{{reportData.mqmz}}</td>
                <td>实足年龄</td>
                <td class="mark">{{reportData.mqnl}}</td>
            </tr>
            <tr>
                <td>常住址</td>
                <td class="mark">{{reportData.czzsheng}}</td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td class="mark">{{reportData.czzshi}}</td>
                <td>市(地区)</td>
                <td class="mark">{{reportData.czzqu}}</td>
                <td>县(区)</td>
            </tr>
						<tr>
								<td>详细地址</td>
								<td colspan="7" class="mark">{{reportData.czzlu}}</td>
						</tr>
           <!-- <tr>
                <td></td>
                <td colspan="2" class="mark">{{reportData.czzjiedao}}</td>
                <td>街道(乡、镇)</td>
                <td class="mark">{{reportData.czzlu}}</td>
                <td>路(村、街、弄)</td>
                <td class="mark">{{reportData.czzhao}}</td>
                <td>号</td>
            </tr> -->
            <tr>
                <td>邮政编码</td>
                <td class="mark">{{reportData.yb}}</td>
                <td>文化程度</td>
                <td class="mark" colspan="5">
                    {{reportData.whcd == '1'? '文盲' :
                      reportData.whcd == '2'? '小学' :
                      reportData.whcd == '3'? '初中' :
                      reportData.whcd == '4'? '高中，中专' :
                      reportData.whcd == '5'? '大专及以上' : ''
                    }}
                </td>
            </tr>
            <tr>
                <td>孕次</td>
                <td class="mark">{{reportData.yc}}</td>
                <td>产次</td>
                <td class="mark">{{reportData.cc}}</td>
                <td>胎龄(d)</td>
                <td class="mark">{{reportData.tl}}</td>
                <td>分娩日期时间</td>
                <td class="mark">{{$formatDate(reportData.etcsrq)}}</td>
            </tr>
            <tr>
                <td>体重(KG)</td>
                <td class="mark">{{reportData.cstz}}</td>
                <td>胎数</td>
                <td class="mark">
                    {{reportData.ts == '1' ?'单胎':reportData.ts == '2'?'双胎': reportData.ts == '3' ?'三胎以上':''}}
                </td>
                <td>多胎类型</td>
                <td class="mark">
                    {{reportData.dtlbdm == '1' ?'同卵':reportData.dtlbdm == '2'?'异卵': reportData.dtlbdm == '9' ?'其他':''}}
                </td>
                <td>出生缺陷类别</td>
                <td class="mark">{{reportData.csqxlb}}</td>
            </tr>
            <tr>
                <td colspan="2">出生缺陷儿结局</td>
                <td colspan="2" class="mark">{{reportData.csqxejjdm}}</td>
                <td colspan="2">出生缺陷诊断依据类别</td>
                <td colspan="2" class="mark">{{reportData.zdyj}}</td>
            </tr>
            <tr>
                <td colspan="2">出生缺陷确诊时间类别</td>
                <td colspan="2" class="mark">{{reportData.csqxqzsjlbdm}}</td>
                <td colspan="2">孕早期患病情况</td>
                <td colspan="2" class="mark">{{reportData.yzqfbQk}}</td>
            </tr>
            <tr>
                <td colspan="2">其他孕早期患病情况</td>
                <td colspan="2" class="mark">{{reportData.qtyzqhbqk}}</td>
                <td colspan="2">病毒感染类型描述</td>
                <td colspan="2" class="mark">{{reportData.bdgrlxms}}</td>
            </tr>
            <tr>
                <td colspan="2">孕早期服药类别</td>
                <td colspan="2" class="mark">{{reportData.yzqfylbdm}}</td>
                <td colspan="2">孕早期服药名称</td>
                <td colspan="2" class="mark">{{reportData.yzqfymc}}</td>
            </tr>
            <tr>
                <td colspan="2">孕早期接触有害因素类别</td>
                <td colspan="2" class="mark">{{reportData.yqzjcyhysLbdm}}</td>
                <td colspan="2">孕早期接触有害因素名称</td>
                <td colspan="2" class="mark">{{reportData.yzqjcyhysmc}}</td>
            </tr>
            <tr>
                <td colspan="2">孕早期接触有害因素情况</td>
                <td colspan="2" class="mark">{{reportData.yzqjcyhysQk}}</td>
                <td>死胎例数</td>
                <td class="mark">{{reportData.stls}}</td>
                <td>自然流产次数</td>
                <td class="mark">{{reportData.zrlccs}}</td>
            </tr>
            <tr>
                <td colspan="2">出生缺陷儿例数</td>
                <td class="mark" colspan="2">{{reportData.csqxels}}</td>
                <td colspan="2">家族遗传性疾病史</td>
                <td colspan="2" class="mark">{{reportData.jzycxjbs}}</td>
            </tr>
            <tr>
                <td colspan="2">缺陷患者与本人关系</td>
                <td class="mark">{{reportData.qxhzybrgx}}</td>
                <td>出生缺陷名</td>
                <td class="mark">{{reportData.csqxmc}}</td>
                <td colspan="2">家族近亲婚配者与本人关系</td>
                <td class="mark">{{reportData.jzjqhpzybrgx}}</td>
            </tr>
            <tr>
                <td>填报日期</td>
                <td class="mark">{{$formatDate(reportData.tbrq)}}</td>
                <td>填报人姓名</td>
                <td class="mark">{{reportData.tbr}}</td>
                <td>填报人职称</td>
                <td class="mark">{{reportData.tbrzc}}</td>
                <td>填报单位名称</td>
                <td class="mark">{{reportData.tbdw}}</td>
            </tr>
            <tr>
                <td colspan="2">医院审表日期</td>
                <td class="mark">{{$formatDate(reportData.yysbrq)}}</td>
                <td colspan="2">医院审表人姓名</td>
                <td class="mark">{{reportData.yysbrxm}}</td>
                <td>医院审表人职称</td>
                <td class="mark">{{reportData.yysbrzcmc}}</td>
            </tr>
            <tr>
                <td colspan="2">省级审表日期</td>
                <td class="mark">{{$formatDate(reportData.sjsbrq)}}</td>
                <td colspan="2">省级审表人姓名</td>
                <td class="mark">{{reportData.sjsbrxm}}</td>
                <td>省级审表人职称</td>
                <td class="mark">{{reportData.sjsbrzcmc}}</td>
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

        }
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