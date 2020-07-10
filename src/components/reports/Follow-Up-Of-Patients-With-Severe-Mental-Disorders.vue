<template>
    <div class="report">
        <!-- 严重精神障碍患者随访服务记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    严重精神障碍患者随访服务记录表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{visit.checkstaffname}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{visit.visitid}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 150px;">
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td>随访日期</td>
                <td colspan="3" class="mark">{{$formatDate(visit.visitdate)}}</td>
            </tr>
            <tr>
                <td>本次随访方式</td>
                <td colspan="3">
                    1 门诊 2 家庭访视 3 电话
                    <span class="rightBox">
                        <span class="checkBox">{{visit.visitway}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>若失访，原因</td>
                <td colspan="3">
                    1 外出打工 2 迁居他处 3 走失 4 连续 3 次未到访 5 其他
                    <!-- <span class="lineBox"></span> -->
                    <span class="rightBox">
                        <span class="checkBox">{{visit.novisitreasoncode}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="2">如死亡，日期和原因</td>
                <td>死亡日期</td>
                <td colspan="2" class="mark">{{$formatDate(visit.deathdate)}}</td>
            </tr>
            <tr>
                <td>死亡原因</td>
                <td colspan="2">
                    1 躯体疾病<br>
                    ①传染病和寄生虫病 ②肿瘤 ③心脏病 ④脑血管病
                    ⑤呼吸系统疾病 ⑥消化系统疾病 ⑦其他疾病 ⑧不详 <br>
                    2 自杀 3 他杀 4 意外 5 精神疾病相关并发症 6 其他
                    <span class="rightBox">
                        <span class="checkBox">{{visit.zxjsjbhzswyydm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>危险性评估</td>
                <td colspan="3">
                    0（0 级）
                    1（1 级）
                    2（2 级）
                    3（3 级）
                    4（4 级）
                    5（5 级）
                    <span class="rightBox">
                        <span class="checkBox">{{visit.wxxfjdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>目前症状</td>
                <td colspan="3">
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
                    12 其他
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in splitList(visit.cueerntsymptoms)">{{item}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>自知力</td>
                <td colspan="3">
                    1 自知力完全 2 自知力不全 3 自知力缺失
                    <span class="rightBox">
                        <span class="checkBox">{{visit.zzlpjjgdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>睡眠情况</td>
                <td colspan="3">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.smqkdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>饮食情况</td>
                <td colspan="3">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.ysqkdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="5">社会功能情况</td>
                <td>个人生活料理</td>
                <td colspan="2">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.shgngrshdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>家务劳动</td>
                <td colspan="2">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.shgnjwlddm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>生产劳动及工作</td>
                <td colspan="2">
                    1 良好 2 一般 3 较差 9 此项不适用
                    <span class="rightBox">
                        <span class="checkBox">{{visit.shgnsclddm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>学习能力</td>
                <td colspan="2">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.shgnxxnldm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>社会人际交往</td>
                <td colspan="2">
                    1 良好 2 一般 3 较差
                    <span class="rightBox">
                        <span class="checkBox">{{visit.shgnrjjwdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>危险行为</td>
                <td colspan="3">
                    1 轻度滋事<span class="lineBox">{{visit.qdzs}}</span>次
                    2 肇事<span class="lineBox">{{visit.zs}}</span>次
                    3 肇祸<span class="lineBox">{{visit.zh}}</span>次
                    4 其他危害行为<span class="lineBox">{{visit.qtwhxw}}</span>次
                    5 自伤<span class="lineBox">{{visit.zishang}}</span>次
                    6 自杀未遂<span class="lineBox">{{visit.zsws}}</span>次
                    7 无
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in splitList(visit.wxxw)">{{item}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>两次随访期间关锁情况 </td>
                <td colspan="3">
                    1 无关锁 2 关锁 3 关锁已解除
                    <span class="rightBox">
                        <span class="checkBox">{{visit.closedoorcode}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>两次随访期间住院情况 </td>
                <td colspan="3">
                    0未住院
                    1 目前正在住院
                    2 曾住院，现未住院<br>
                    末次出院时间
                    <span class="lineBox">{{$formatDate(visit.mccysj,'yyyy')}}</span>年
                    <span class="lineBox">{{$formatDate(visit.mccysj,'MM')}}</span>月
                    <span class="lineBox">{{$formatDate(visit.mccysj,'dd')}}</span>日
                    <span class="rightBox">
                        <span class="checkBox">{{visit.lcsfqjzyqk}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>实验室检查</td>
                <td colspan="3">
                    1 无 2 有
                    <span class="rightBox">
                        <span class="checkBox">{{visit.labExamMark}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>用药依从性</td>
                <td colspan="3">
                    1 按医嘱规律用药 2 间断用药 3 不用药 4 医嘱勿需用药
                    <span class="rightBox">
                        <span class="checkBox">{{visit.medicine}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>药物不良反应</td>
                <td colspan="3">
                    1 无 2 有<span class="lineBox">{{visit.ywblfyms}}</span> 9 此项不适用
                    <span class="rightBox">
                        <span class="checkBox">{{visit.ywblfybz}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>治疗效果</td>
                <td colspan="3">
                    1 痊愈 2 好转 3 无变化 4 加重 9 此项不适用
                    <span class="rightBox">
                        <span class="checkBox">{{visit.jwzlxglbdm}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>是否转诊</td>
                <td colspan="3">
                    1 否 2 是<br>
                    转诊原因：<span class="lineBox">{{visit.referralreason}}</span> <br>
                    转诊至机构及科室：<span class="lineBox">{{visit.transfersectionname}}</span>
                    <span class="rightBox">
                        <span class="checkBox">{{visit.referralflag}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td :rowspan="drugList.length">用药情况</td>
                <td>
                    药物1：
                    <span class="lineBox">{{drugList[0].ywmc}}</span>
                </td>
                <td>
                    用法：每日(月)
                    <span class="lineBox">{{drugList[0].ywsypl}}</span>次
                </td>
                <td>
                    每次剂量
                    <span class="lineBox">{{drugList[0].ywsycjl}}</span>mg
                </td>
            </tr>
            <template v-for="(item,index) in drugList">
                <tr v-if="index != 0">
                    <td>
                        药物{{index + 1}}：
                        <span class="lineBox">{{item.ywmc}}</span>
                    </td>
                    <td>
                        用法：每日(月)
                        <span class="lineBox">{{item.ywsypl}}</span>次
                    </td>
                    <td>
                        每次剂量
                        <span class="lineBox">{{item.ywsycjl}}</span>mg
                    </td>
                </tr>
            </template>
            <!-- <tr>
                <td :rowspan="drugList.length">用药指导</td>
                <td>
                    药物1：
                    <span class="lineBox">{{drugList[0].ywmc}}</span>
                </td>
                <td>
                    用法：每日(月)
                    <span class="lineBox">{{drugList[0].ywzdsypl}}</span>次
                </td>
                <td>
                    每次剂量
                    <span class="lineBox">{{drugList[0].ywzdsycjl}}</span>mg
                </td>
            </tr>
            <template v-for="(item,index) in drugList">
                <tr v-if="index != 0">
                    <td>
                        药物{{index + 1}}：
                        <span class="lineBox">{{item.ywmc}}</span>
                    </td>
                    <td>
                        用法：每日(月)
                        <span class="lineBox">{{item.ywzdsypl}}</span>次
                    </td>
                    <td>
                        每次剂量
                        <span class="lineBox">{{item.ywzdsycjl}}</span>mg
                    </td>
                </tr>
            </template> -->
            <tr>
                <td>康复措施</td>
                <td colspan="3">
                    1 生活劳动能力 2 职业训练 3 学习能力 4 社会交往 5 其他
                    <span class="rightBox">
                        <span class="checkBox" v-for="(item,index) in splitList(visit.healingcode)">{{item}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>本次随访分类</td>
                <td colspan="3">
                    1 不稳定 2 基本稳定 3 稳定
                    <span class="rightBox">
                        <span class="checkBox">{{visit.sffl}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>下次随访日期</td>
                <td class="mark">{{$formatDate(visit.nextvisitdate)}}</td>
                <td>随访医生签名</td>
                <td class="mark">{{visit.visitdoctor}}</td>
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
                return {

                }
            }
        }
    },
    data() {
        return {
            visit: {},
            drugList: [{}, {}, {}, {}],
            drugLength: 4
        }
    },
    created() {
        var reportData = this.reportData.PsychosisvisitRes || null;
        if (reportData) {
            this.visit = reportData.visit || {};
            this.formatList(reportData.drugList);
        }
        console.log(this.visit)
        console.log(this.drugList)
    },
    methods: {
        splitList(str) {
            var list = [];
            if (str) {
                list = str.split(',');
            }
            return list
        },
        formatList(drugList) {
            var list = [];
            var detailList = drugList;
            if (detailList) {
                if (detailList.length > this.drugLength) {
                    list = detailList;
                } else {
                    var CL = this.drugLength - detailList.length;
                    list = detailList;
                    for (var i = 0; i < CL; i++) {
                        list.push({});
                    }
                }
            } else {
                for (var i = 0; i < this.drugLength; i++) {
                    list.push({});
                }
            }
            this.drugList = list;
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        width: 800px;
    }
}
</style>