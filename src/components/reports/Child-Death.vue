<template>
    <div class="report">
        <!--儿童死亡报告  -->
        <table>
            <tr>
                <td colspan="5" class="title" style="font-weight: bold;">
                    儿童死亡报告单
                </td>
            </tr>
            <tr>
                <td>
                    编号:<span class="mark">{{reportData.rptid}}</span>
                </td>
                <td colspan="2">
                    填卡单位:<span class="mark">{{reportData.organName}}</span>
                </td>
                <td>
                    填卡人:<span class="mark">{{reportData.tkr}}</span>
                </td>
                <td>
                    填卡时间:<span class="mark">{{$formatDate(reportData.tkrq)}}</span>
                </td>
            </tr>
        </table>
        <table border="2">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">地址</td>
                <td colspan="7">
                    <span class="lineBox">&nbsp;{{reportData.xiang}}&nbsp;</span>&nbsp;&nbsp;(乡/区)&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{reportData.cun}}&nbsp;</span>&nbsp;&nbsp;街道(村)&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{reportData.mphm}}&nbsp;</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">父亲姓名</td>
                <td class="alignCenter mark">{{reportData.fqxm}}</td>
                <td class="alignCenter">母亲姓名</td>
                <td class="alignCenter mark">{{reportData.mqxm}}</td>
                <td class="alignCenter">患儿姓名</td>
                <td class="alignCenter mark">{{reportData.hexm}}</td>
                <td class="alignCenter">联系电话</td>
                <td class="alignCenter mark">{{reportData.lxdh}}</td>
            </tr>
            <tr>
                <td class="alignCenter">户口</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1本地户口
                        <i class="iconfont xz" v-if="reportData.hk == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 2非本地户口
                        <i class="iconfont xz" v-if="reportData.hk == '2'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 3非本地户口居住1年以上
                        <i class="iconfont xz" v-if="reportData.hk == '3'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">性别</td>
                <td colspan="2">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1男
                        <i class="iconfont xz" v-if="reportData.xbdm == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 65px;">
                        <span class="checkBox"></span> 2女
                        <i class="iconfont xz" v-if="reportData.xbdm == '2'">&#xe631;</i>
                    </span>
                </td>
                <td class="alignCenter">出生日期</td>
                <td colspan="4">
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.csrq,'yyyy')}}&nbsp;</span>&nbsp;&nbsp;年&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.csrq,'MM')}}&nbsp;</span>&nbsp;&nbsp;月&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.csrq,'dd')}}&nbsp;</span>&nbsp;&nbsp;日
                </td>
            </tr>
            <tr>
                <td class="alignCenter">出生体重</td>
                <td colspan="3">
                    <span class="lineBox">&nbsp;{{reportData.cstz}}&nbsp;</span>&nbsp;&nbsp;克&nbsp;&nbsp;
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1测量
                        <i class="iconfont xz" v-if="reportData.czfs == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 2估计
                        <i class="iconfont xz" v-if="reportData.czfs == '2'">&#xe631;</i>
                    </span>
                </td>
                <td class="alignCenter">孕周</td>
                <td colspan="3">
                    <span class="lineBox">&nbsp;{{reportData.yz}}&nbsp;</span>&nbsp;&nbsp;周&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="alignCenter">出生地址</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 省/市医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 30px;">2 区县医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">3 街道/乡镇卫生院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">4 村/诊所卫生室&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">5 途中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">6 家中&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.csdd}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死亡日期</td>
                <td colspan="3">
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.swrq,'yyyy')}}&nbsp;</span>&nbsp;&nbsp;年&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.swrq,'MM')}}&nbsp;</span>&nbsp;&nbsp;月&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{$formatDate(reportData.swrq,'dd')}}&nbsp;</span>&nbsp;&nbsp;日
                </td>
                <td class="alignCenter">死亡年龄</td>
                <td colspan="3">
                    <span class="lineBox">&nbsp;{{reportData.swnl}}&nbsp;</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死亡诊断</td>
                <td colspan="7" class="mark">
                    {{reportData.swzd}}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死因分类</td>
                <td colspan="7" class="mark">
                    <span v-for="(item,index) in strsplit(reportData.swflbh)" :key="index" style="display: inline-block;margin-left: 20px;">
                        {{item}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死亡地址</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 60px;">2 途中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 70px;">3 家中&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.swdddm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死前治疗</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 住院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 60px;">2 门诊&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 70px;">3 未治疗&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.sqzldm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">诊断级别</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 省(市)&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 50px;">2 区县&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 70px;">3 街道(乡镇)&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 60px;">4 村(诊断)&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 120px;">5 未就医&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.zdjbdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">未治疗或<br>未就医主要原因</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 经济困难&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 30px;">2 交通不便&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">3 来不及送医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;">4 家长认为病情不严重&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 40px;margin-right: 100px;">5 习俗习惯&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 20px;">
                        6 其他&nbsp;&nbsp;
                        <span class="lineBox">&nbsp;{{reportData.qtyy}}&nbsp;</span>
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.wzlhwjyzyyy}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死亡诊断依据</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">1 病理尸检&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 30px;">2 临床&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 70px;">3 死后推断&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.syzdyj}}</span>
                    </span>
                </td>
            </tr>
        </table>
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    儿童死亡报告单
                </td>
            </tr>
        </table>
        <div style="width: 810px;box-sizing: border-box;border: 1px solid #000;margin: 0 auto;padding: 5px;">
            <table>
                <tr>
                    <td style="vertical-align:text-top;padding-right: 10px;">
                        <p>编 号<span class="lineBox">&nbsp;{{reportData.rptid}}</span></p>
                        <p>
                            住址<span class="lineBox">&nbsp;{{reportData.xiang}}</span>乡(区)
                            <span class="lineBox">&nbsp;{{reportData.cun}}</span>街道(村)
                            <span class="lineBox">&nbsp;{{reportData.mphm}}</span>
                        </p>
                        <p>
                            父亲姓名<span class="lineBox">&nbsp;{{reportData.fqxm}}</span>
                            母亲姓名<span class="lineBox">&nbsp;{{reportData.mqxm}}</span>
                        </p>
                        <p>
                            患儿姓名<span class="lineBox">&nbsp;{{reportData.hexm}}</span>
                            联系电话<span class="lineBox">&nbsp;{{reportData.lxdh}}</span>
                        </p>
                        <p>
                            (1)本地户口 (2)非本地户口<br>
                            (3)非本地户口居住1年以上
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.hk}}</span>
                            </span>
                        </p>
                        <p>
                            性别：1.男 2.女
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.xbdm}}</span>
                            </span>
                        </p>
                        <p>
                            出生日期
                            <table border="1" style="width: 200px !important;">
                                <tr>
                                    <td colspan="2" class="linep">年</td>
                                    <td colspan="2" class="linep">月</td>
                                    <td colspan="2" class="linep">日</td>
                                </tr>
                                <tr>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'year',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'year',0)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'month',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'month',0)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'day',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.csrq,'day',0)}}</td>
                                </tr>
                            </table>
                        </p>
                        <p>
                            出生体重<span class="lineBox">{{reportData.cstz}}</span>克
                            (1)测量 (2)估计
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.czfs}}</span>
                            </span>
                        </p>
                        <p>
                            孕周<span class="lineBox">
                                {{reportData.yz}}
                            </span>周
                        </p>
                        <p>
                            出生地点：
                        </p>
                        <p style="padding-left: 20px;">
                            (1)省(市)医院
                        </p>
                        <p style="padding-left: 20px;">
                            (2)区县医院
                        </p>
                        <p style="padding-left: 20px;">
                            (3)街道(乡镇)卫生院
                        </p>
                        <p style="padding-left: 20px;">
                            (4)村(诊所)卫生室
                        </p>
                        <p style="padding-left: 20px;">
                            (5)途中
                        </p>
                        <p style="padding-left: 20px;">
                            (6)家中
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.csdd}}</span>
                            </span>
                        </p>
                        <p>
                            死亡日期
                            <table border="1" style="width: 200px !important;">
                                <tr>
                                    <td colspan="2" class="linep">年</td>
                                    <td colspan="2" class="linep">月</td>
                                    <td colspan="2" class="linep">日</td>
                                </tr>
                                <tr>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'year',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'year',0)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'month',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'month',0)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'day',1)}}</td>
                                    <td class="linep mark">&nbsp;{{$getDateNumByType(reportData.swrq,'day',0)}}</td>
                                </tr>
                            </table>
                        </p>
                        <p>
                            死亡年龄
                            <span class="lineBox">{{reportData.swnl}}</span>
                        </p>
                    </td>
                    <td style="vertical-align:text-top;padding-left: 10px;">
                        <p>
                            死亡诊断<span class="lineBox">{{reportData.swzd}}</span>
                        </p>
                        <p>
                            死亡分类
                            <span class="rightBox" v-if="reportData.swflbh">
                                <span class="checkBox" v-for="(item,index) in reportData.swflbh.split(',')">
                                    {{item}}
                                </span>
                            </span>
                            <span class="rightBox" v-else>
                                <span class="checkBox"></span>
                            </span>
                        </p>
                        <p>
                            死亡地点：(1)医院 (2)途中
                        </p>
                        <p style="padding-left: 70px;">
                            (3)家中
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.swdddm}}</span>
                            </span>
                        </p>
                        <p>
                            死前治疗：(1)住院 (2)门诊
                        </p>
                        <p style="padding-left: 70px;">
                            (3)未治疗
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.sqzldm}}</span>
                            </span>
                        </p>
                        <p>
                            诊断级别：(1)省(市)
                        </p>
                        <p style="padding-left: 70px;">
                            (2)区县
                        </p>
                        <p style="padding-left: 70px;">
                            (3)街道(乡镇)
                        </p>
                        <p style="padding-left: 70px;">
                            (4)村(诊断)
                        </p>
                        <p style="padding-left: 70px;">
                            (5)未就医
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.zdjbdm}}</span>
                            </span>
                        </p>
                        <p>
                            未治疗或未就医主要原因：（单选）
                        </p>
                        <p style="padding-left: 70px;">
                            (1)经济困难
                        </p>
                        <p style="padding-left: 70px;">
                            (2)交通不便
                        </p>
                        <p style="padding-left: 70px;">
                            (3)来不及送医院
                        </p>
                        <p style="padding-left: 70px;">
                            (4)家长认为病情不严重
                        </p>
                        <p style="padding-left: 70px;">
                            (5)风俗习惯
                        </p>
                        <p style="padding-left: 70px;">
                            (6)其他(请注明)<span class="lineBox">{{reportData.qtyy}}</span>
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.wzlhwjyzyyy}}</span>
                            </span>
                        </p>
                        <p>
                            死因诊断依据：(1)病理尸检
                        </p>
                        <p style="padding-left: 70px;">
                            (2)临床
                        </p>
                        <p style="padding-left: 70px;">
                            (3)死后推断
                            <span class="rightBox">
                                <span class="checkBox">{{reportData.syzdyj}}</span>
                            </span>
                        </p>
                    </td>
                </tr>
            </table>
        </div>
        <table>
            <tr style="line-height: 36px;">
                <td colspan="3">
                    填卡单位<span class="lineBox">{{reportData.organName}}</span>
                </td>
                <td colspan="3">
                    填卡人<span class="lineBox">{{reportData.tkr}}</span>
                </td>
                <td colspan="4">
                    日期<span class="lineBox">{{$formatDate(reportData.tkrq)}}</span>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:text-top;">填报说明：</td>
                <td colspan="8">
                    1.本表由监测县区乡镇卫生院、社区卫生服务机构填写上报。统计范围为户籍和非户籍人口中死亡的0~4岁儿童。<br>
                    2.本表为季报，每年2月28日上报上年第4季度报表，5月28日上报本年第1季度报表，8月28日上报本年第2季度报表，11月15日前上报第3季度报表，报送方式为网络报告。<br>
                    3.死因分类填写“儿童死因分类编号”。
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    死因分类编号
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td>01癫痫</td>
                <td>13其他消化系统疾病</td>
                <td>25交通意外</td>
            </tr>
            <tr>
                <td>02败血症</td>
                <td>14先天性心脏病</td>
                <td>26意外窒息</td>
            </tr>
            <tr>
                <td>03麻疹</td>
                <td>15神经管畸形</td>
                <td>27意外中毒</td>
            </tr>
            <tr>
                <td>04结核</td>
                <td>16先天愚型</td>
                <td>28意外跌落</td>
            </tr>
            <tr>
                <td>05其他传染性和寄生虫病</td>
                <td>17其他先天异常</td>
                <td>29其他意外</td>
            </tr>
            <tr>
                <td>06白血病</td>
                <td>18早产或低出生体重</td>
                <td>30内分泌、营养及代谢疾病</td>
            </tr>
            <tr>
                <td>07其他肿瘤</td>
                <td>19出生窒息</td>
                <td>31血液及造血器官疾病</td>
            </tr>
            <tr>
                <td>08脑膜炎</td>
                <td>20新生儿破伤风</td>
                <td>32循环系统疾病</td>
            </tr>
            <tr>
                <td>09其他神经系统疾病</td>
                <td>21新生儿硬肝症</td>
                <td>33泌尿系统疾病</td>
            </tr>
            <tr>
                <td>10肺炎</td>
                <td>22颅脑出血</td>
                <td>34其他</td>
            </tr>
            <tr>
                <td>11其他呼吸系统疾病</td>
                <td>23其他新生儿病</td>
                <td>35诊断不明</td>
            </tr>
            <tr>
                <td>12腹泻</td>
                <td>24溺水</td>
                <td></td>
            </tr>
        </table> -->
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
            strsplit(str){
                if(str){
                    return str.split(',')
                }else{
                    return []
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    table{
        tr{
            td{
                span{
                    font-family: FZSSJW;
                }
            }
        }
    }
</style>