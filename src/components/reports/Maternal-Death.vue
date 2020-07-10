<template>
    <div class="report">
        <!-- 孕产妇死亡报告 -->
        <table>
            <tr>
                <td colspan="5" class="title" style="font-weight: bold;">
                    孕产妇死亡报告
                </td>
            </tr>
            <tr>
                <td>
                    编号:<span class="mark">{{report.residentsHealthFileNo}}</span>
                </td>
                <td colspan="2">
                    填卡单位:<span class="mark">{{report.tkdw}}</span>
                </td>
                <td>
                    填卡人:<span class="mark">{{report.tkr}}</span>
                </td>
                <td>
                    填卡时间:<span class="mark">{{$formatDate(report.tkrq)}}</span>
                </td>
            </tr>
        </table>
        <table border="2">
            <colgroup>
                <col style="width: 144px;">
                <col>
                <col style="width: 144px;">
                <col>
                <col style="width: 144px;">
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="alignCenter mark" colspan="2">{{report.xm}}</td>
                <td class="alignCenter">年龄</td>
                <td class="alignCenter mark" colspan="2">{{report.nl}}</td>
               <!-- <td class="alignCenter">联系电话</td>
                <td class="alignCenter mark">{{report.contactNumber}}</td> -->
            </tr>
            <tr>
                <td class="alignCenter">常住址</td>
                <td colspan="5">
                    <span class="lineBox">&nbsp;{{report.czshen}}&nbsp;</span>&nbsp;&nbsp;省&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.czshi}}&nbsp;</span>&nbsp;&nbsp;市&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.czqu}}&nbsp;</span>&nbsp;&nbsp;(区/县)&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.czxiang}}&nbsp;</span>&nbsp;&nbsp;乡&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.czcun}}&nbsp;</span>&nbsp;&nbsp;村&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.czmphm}}&nbsp;</span>&nbsp;&nbsp;号&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="alignCenter">暂住址</td>
                <td colspan="5">
                    <span class="lineBox">&nbsp;{{report.zzshen}}&nbsp;</span>&nbsp;&nbsp;省&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.zzshi}}&nbsp;</span>&nbsp;&nbsp;市&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.zzqu}}&nbsp;</span>&nbsp;&nbsp;(区/县)&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.zzxiang}}&nbsp;</span>&nbsp;&nbsp;乡&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.zzcun}}&nbsp;</span>&nbsp;&nbsp;村&nbsp;&nbsp;
                    <span class="lineBox">&nbsp;{{report.zzmphm}}&nbsp;</span>&nbsp;&nbsp;号&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="alignCenter">户籍</td>
                <td colspan="2">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1本地
                        <i class="iconfont xz" v-if="report.hk == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 60px;">
                        <span class="checkBox"></span> 2非本地
                        <i class="iconfont xz" v-if="report.hk == '2'">&#xe631;</i>
                    </span>
                </td>
                <td class="alignCenter">计划内外</td>
                <td colspan="2">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1计划内
                        <i class="iconfont xz" v-if="report.jhnw == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 60px;">
                        <span class="checkBox"></span> 2计划外
                        <i class="iconfont xz" v-if="report.jhnw == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">民族</td>
                <td colspan="5">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1汉族
                        <i class="iconfont xz" v-if="report.mzdm == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 60px;">
                        <span class="checkBox"></span> 2少数民族
						<!-- (请备注<span class="lineBox">&nbsp;{{report.ssmzmc}}&nbsp;</span>) -->
                        <i class="iconfont xz" v-if="report.mzdm == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">文化程度</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 130px;">1.大专及以上&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">2.高中或中专&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">3.初中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">4.小学&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">5.文盲&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.whcddm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">家庭年人均收入</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 130px;">{{'1.<1000'}}&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">2.1000~1999&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">3.2000~3999&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">4.4000~7999&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">{{'5.>8000'}}&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.jtnrjsrlb}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">居住地区</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 130px;">1.平原&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">2.山区&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 130px;">3.其他地区&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.jzdq}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">孕次</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;">孕次</span>
                    <span class="lineBox">&nbsp;{{report.yc}}&nbsp;</span>&nbsp;&nbsp;
                   <!-- 产次&nbsp;&nbsp;<span class="lineBox">&nbsp;{{report.parity}}&nbsp;</span>&nbsp;&nbsp;
                    人工流产、引产次&nbsp;&nbsp;<span class="lineBox">&nbsp;{{report.abortionAndOdinopoeia}}&nbsp;</span> -->
                </td>
            </tr>
            <tr>
                <td class="alignCenter">末次月经</td>
                <td class="alignCenter mark" colspan="2">{{$formatDate(report.mcyjrq)}}</td>
                <td class="alignCenter">分娩时间</td>
                <td class="alignCenter mark" colspan="2">{{$formatDate(report.fmrqsj)}}</td>
                <!-- <td class="alignCenter">死亡时间</td>
                <td class="alignCenter mark">{{$formatDate(report.swrq)}}</td> -->
            </tr>
            <tr>
                <td class="alignCenter">分娩地点</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1.省(地、市)级医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 区县级医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 街道(乡镇)卫生院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">4. 村接生室&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">5. 家中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">6. 途中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">7. 其他&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.csdd}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死亡地点</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1.省(地、市)级医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 区县级医院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 街道(乡镇)卫生院&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">4. 村接生室&nbsp;&nbsp;</span>
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">5. 家中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">6. 途中&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">7. 其他&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.swdddm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">新法接生</td>
                <td colspan="2">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1是
                        <i class="iconfont xz" v-if="report.xfjsbz == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 60px;">
                        <span class="checkBox"></span> 2否
                        <i class="iconfont xz" v-if="report.xfjsbz == '2'">&#xe631;</i>
                    </span>
                </td>
                <td class="alignCenter">产前检查</td>
                <td colspan="2">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1有
                        <i class="iconfont xz" v-if="report.cqjcbz == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 60px;">
                        <span class="checkBox"></span> 2无
                        <i class="iconfont xz" v-if="report.cqjcbz == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">接生者</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1.医务人员&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 乡村医生&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 接生员&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">4. 其他人员&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.jszlbbm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">初检孕周</td>
                <td class="alignCenter mark" colspan="2">{{report.cjyz}}</td>
                <td class="alignCenter">产检次数</td>
                <td class="alignCenter mark" colspan="2">{{report.cjcs}}</td>
            </tr>
            <tr>
                <td class="alignCenter">致死的主要<br>疾病诊断</td>
                <td colspan="5">
                    <span style="display: inline-block;padding-left: 20px;width: 400px;">
                        (a)直接导致死亡的疾病或情况  <span class="lineBox">{{report.zszyjbzd}}</span>
                    </span>
                    <!-- <span style="display: inline-block;width: 400px;">
                        (b)引起(a)的疾病或情况  <span class="lineBox">{{report.zszyjbzdBa}}</span>
                    </span>
                    <span style="display: inline-block;padding-left: 20px;width: 400px;">
                        (c)引起(b)的疾病或情况  <span class="lineBox">{{report.zszyjbzdCb}}</span>
                    </span>
                    <span style="display: inline-block;width: 400px;">
                        (d)引起(c)的疾病或情况  <span class="lineBox">{{report.zszyjbzdDc}}</span>
                    </span> -->
                </td>
            </tr>
            <tr>
                <td class="alignCenter">死因诊断依据</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 病理尸检&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 临床&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 推断&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.syzdyj}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">根本死因</td>
                <td colspan="5" class="mark">
                    <span style="display: inline-block;margin-left: 20px;" v-for="(item,index) in strSplit(report.syflms)" :key="index">{{item}}</span>
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">ICD-10编码</td>
                <td colspan="5" class="mark">{{report.icdCode}}</td>
            </tr>
            <tr>
                <td class="alignCenter">区县级医疗<br>保健机构评审结果</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 可避免&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 不可避免&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.qjylbjjgpsjg}}</span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">影响死亡的<br>主要因素</td>
                <td colspan="5" class="mark">
                    <span style="display: inline-block;margin-left: 20px;" v-for="(item,index) in strSplit(report.yxswzyys)" :key="index">{{item}}</span>
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">调查结论</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 就诊延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 交通延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 医疗机构延误&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.dcjlQu}}</span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">省级医疗<br>保健机构评审结果</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 可避免&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 不可避免&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.sjylbjjgpsjg}}</span>
                    </span>
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">影响死亡的<br>主要因素</td>
                <td colspan="5" class="mark">
                    <span style="display: inline-block;margin-left: 20px;" v-for="(item,index) in strSplit(report.yxswzyysSheng)" :key="index">{{item}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">调查结论</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 就诊延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 交通延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 医疗机构延误&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.dcjlSheng}}</span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">国家级医疗<br>保健机构评审结果</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 可避免&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 不可避免&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.gjjpsjg}}</span>
                    </span>
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">影响死亡的<br>主要因素</td>
                <td colspan="5" class="mark">
                    <span style="display: inline-block;margin-left: 20px;" v-for="(item,index) in strSplit(report.yxswzyysGuojia)" :key="index">{{item}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">调查结论</td>
                <td colspan="5">
                    <span style="display: inline-block;margin-left: 20px;width: 170px;">1. 就诊延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">2. 交通延误&nbsp;&nbsp;</span>
                    <span style="display: inline-block;width: 170px;">3. 医疗机构延误&nbsp;&nbsp;</span>
                    <span class="rightBox">
                        <span class="checkBox">{{report.dcjlGuojia}}</span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">死亡病历摘要<br>或调查小结</td>
                <td colspan="5" class="mark">{{report.swblzydcxj}}</td>
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
            this.report = this.reportData || {};
            // console.log(this.reportData)
        },
        methods:{
            strSplit(str){
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
    .report{
        table{
            tr{
                td{
                    span{
                        font-family: FZSSJW;
                    }
                }
            }
        }
    }
</style>