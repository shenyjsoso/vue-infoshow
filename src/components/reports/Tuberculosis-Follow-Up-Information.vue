<template>
    <div class="report">
        <!-- 肺结核病随访信息 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    肺结核患者随访服务记录表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{TuberculosisVisits.xm}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{TuberculosisVisits.fjhbbh}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 140px;">
                <col style="width: 200px;">
                <col>
            </colgroup>
            <tr>
                <td colspan="2" class="alignCenter">随访时间</td>
                <td class="mark alignCenter">{{$formatDate(TuberculosisVisits.sfsj)}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">治疗月序</td>
                <td class="alignCenter">第<span class="lineBox">{{TuberculosisVisits.zlyx}}</span>月</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">督导人员</td>
                <td>
                    1.医生 2.家属 3.自服药 4.其他
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.ddry}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访方式</td>
                <td>
                    1.门诊2.家庭3.电话
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.sffs}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">症状及体征</td>
                <td>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 1.咳嗽咳痰
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'1')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 2.低热盗汗
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'2')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 3.咯血或血痰
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'3')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 4.胸痛消瘦
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'4')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 5.恶心纳差
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'5')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 6.关节疼痛
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'6')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 7.头痛失眠
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'7')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 8.视物模糊
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'8')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 9.皮肤瘙痒、皮疹
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'9')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 10.耳鸣、听力下降
                        <i class="iconfont xz" v-if="inIt(TuberculosisVisits.zzjtz,'10')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 其他：<span class="lineBox">&nbsp;{{TuberculosisVisits.qtzzjtz}}</span>
                        <i class="iconfont xz" v-if="TuberculosisVisits.qtzzjtz">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <!-- <tr>
                <td colspan="2" class="alignCenter">症状及体征</td>
                <td style="vertical-align: text-top;">
                    <span class="checkBox" v-for="(item,index) in splitList(TuberculosisVisits.zzjtz)">{{item}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">0.没有症状</td>
                <td rowspan="11" style="vertical-align: text-top;">其他：<span class="mark">{{TuberculosisVisits.qtzzjtz}}</span></td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">1.咳嗽咳痰</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">2.低热盗汗</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">3.咯血或血痰</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">4.胸痛消瘦</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">5.恶心纳差</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">6.关节疼痛</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">7.头痛失眠</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">8.视物模糊</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">9.皮肤瘙痒、皮疹</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">10.耳鸣、听力下降</td>
            </tr> -->
            <tr>
                <td class="alignCenter" rowspan="2">生活方式指导</td>
                <td class="alignCenter">吸烟</td>
                <td>
                    <span class="lineBox">{{TuberculosisVisits.smokecount}}</span>支/天
                </td>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">饮酒</td>
                <td>
                    <span class="lineBox">{{TuberculosisVisits.drinkcount}}</span>两/天
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="4">用药</td>
                <td class="alignCenter">化疗方案</td>
                <td class="mark">{{TuberculosisVisits.yyhlfa}}</td>
            </tr>
            <tr>
                <td class="alignCenter">方法</td>
                <td>
                    1每日 2间歇
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.yyyf}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">药品剂型</td>
                <td>
                    1 固定剂量复合制剂
                    2 散装药
                    3 板式组合药
                    4 注射剂
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in splitList(TuberculosisVisits.ypjx)">{{item}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">漏服药次数</td>
                <td>
                    <span class="lineBox">{{TuberculosisVisits.lfycs}}</span>次
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">药物不良反应</td>
                <td>
                    1 无
                    2 有<span class="lineBox">{{TuberculosisVisits.ywblfyms}}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.ywblfy}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">并发症或合并症</td>
                <td>
                    1 无
                    2 有<span class="lineBox">{{TuberculosisVisits.bfzhhbzms}}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.bfzhhbz}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="3">转诊</td>
                <td class="alignCenter">科别</td>
                <td class="mark">{{TuberculosisVisits.zzkb}}</td>
            </tr>
            <tr>
                <td class="alignCenter">原因</td>
                <td class="mark">{{TuberculosisVisits.zzyy}}</td>
            </tr>
            <tr>
                <td class="alignCenter">2周内随访结果</td>
                <td class="mark">{{TuberculosisVisits.sfjg}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">处理意见</td>
                <td class="mark">{{TuberculosisVisits.clyj}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访时间</td>
                <td class="mark">{{$formatDate(TuberculosisVisits.xcsfsj)}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访医生签名</td>
                <td class="mark">{{TuberculosisVisits.sfys}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">停止治疗</td>
                <td>
                    1 出现停止治疗时间<span class="lineBox">{{$formatDate(TuberculosisVisits.tzzlsj)}}</span><br>
                    2 停止治疗原因：1完成疗程 2死亡 3丢失 4转入耐多药治
                    <span class="rightBox">
                        <span class="checkBox">{{TuberculosisVisits.tzzlyy}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">全程管理情况</td>
                <td>
                    应访视患者<span class="lineBox">{{TuberculosisVisits.yfscs}}</span>次，
                    实际访视<span class="lineBox">{{TuberculosisVisits.sjfscs}}</span>次；<br>
                    患者在疗程中，
                    应服药<span class="lineBox">{{TuberculosisVisits.yfycs}}</span>次，
                    实际服药<span class="lineBox">{{TuberculosisVisits.sjfycs}}</span>次，
                    服药率<span class="lineBox">{{TuberculosisVisits.fyl}}</span>%<br>
                    评估医生签名：<span class="lineBox">{{TuberculosisVisits.pgys}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            TuberculosisVisits: {}
        }
    },
    created() {
        var reportData = this.reportData.TuberculosisVisits || [];
        if (reportData.length > 0) {
            this.TuberculosisVisits = reportData[0] || {};
        }
    },
    methods: {
        inIt(str,val){//判断字符串是否包含
            if(val && str){
                let list = this.splitList(str);
                let filterList = list.filter(row => {
                    return row == val
                })
                if(filterList.length > 0){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        },
        splitList(str) {
            var list = [];
            if (str) {
                list = str.split(',');
            }
            return list
        },
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        width: 800px;

        .fontBold {
            font-weight: bold;
        }

        tr {
            td {
                .jy {
                    position: relative;

                    .xz {
                        font-size: 24px;
                        font-weight: bold;
                        color: rgb(25, 90, 255);
                        position: absolute;
                        left: -2px;
                        top: -2px;
                    }
                }
            }
        }
    }
}
</style>