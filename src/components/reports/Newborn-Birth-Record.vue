<template>
    <div class="report">
        <!-- 产时保健新生儿记录 -->
        <table>
            <tr>
                <td colspan="8"
                    class="title"
                    style="font-weight: bold;">
                    产时保健新生儿记录
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="2">产母姓名</td>
                <td colspan="2" class="mark">
                    {{PersonalIntrcNBornInfo.ap020103901}}
                </td>
                <td colspan="2">床号</td>
                <td colspan="2" class="mark">
                    {{PersonalIntrcNBornInfo.bedid}}
                </td>
                <td colspan="2">住院号</td>
                <td colspan="2" class="mark">
                    {{PersonalIntrcNBornInfo.de010001400}}
                </td>
                <td colspan="2">住址</td>
                <td colspan="5" class="mark">
                    {{PersonalIntrcNBornInfo.ap020100900}}
                </td>
            </tr>
            <tr>
                <td colspan="2">出生时间</td>
                <td colspan="10" class="mark">
                    <!-- <span class="lineBox"></span>年
                    <span class="lineBox"></span>月
                    <span class="lineBox"></span>日
                    <span class="lineBox"></span>时
                    <span class="lineBox"></span>分 -->
                    {{PersonalIntrcNBornInfo.timeofbirth}}
                </td>
                <td colspan="2">体格检查</td>
                <td colspan="5" class="mark">
                    {{PersonalIntrcNBornInfo.tgjcDate}}
                </td>
            </tr>
            <tr>
                <td colspan="2">分娩方式</td>
                <td colspan="10">
                    1自然
                    2胎吸
                    3产钳（出口低）
                    4剖宫产术
                    5臂助产
                    6臂牵引
                    7其他<span class="lineBox">
                        {{PersonalIntrcNBornInfo.fmfsqt}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{PersonalIntrcNBornInfo.fmfs}}
                        </span>
                    </span>

                </td>
                <td colspan="2">一般状况</td>
                <td colspan="5">
                    反应：0差 1好
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.reaction}}
                    </span><br>
                    哭声：0弱 1好 2呻吟
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.crying}}
                    </span>
                </td>
            </tr>
            <tr>
                <td>性别</td>
                <td class="mark">
                    {{PersonalIntrcNBornInfo.ap020110202}}
                </td>
                <td>产次</td>
                <td class="mark">
                    {{PersonalIntrcNBornInfo.de021000200}}
                </td>
                <td>孕周</td>
                <td colspan="2" class="mark">
                    {{PersonalIntrcNBornInfo.fmyz}}
                </td>
                <td colspan="2">脐带结扎方式</td>
                <td class="mark" colspan="3">
                    {{PersonalIntrcNBornInfo.qdjzfs}}
                </td>
                <td colspan="2">面色</td>
                <td colspan="5" class="mark">
                    {{PersonalIntrcNBornInfo.msdes}}
                </td>
            </tr>
            <tr>
                <td colspan="2">身长(cm)</td>
                <td colspan="2" class="mark">
                    {{PersonalIntrcNBornInfo.de041016600}}
                </td>
                <td colspan="2">体重(g)</td>
                <td colspan="6" class="mark">
                    {{PersonalIntrcNBornInfo.de041001900}}
                </td>
                <td colspan="2">皮肤</td>
                <td colspan="5">
                    1正常  2青紫  3苍白  4皮下出血
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.pfcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">呼吸</td>
                <td colspan="10">
                    1正常     2人工
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.hxcode}}
                    </span>
                </td>
                <td colspan="2">头部变形</td>
                <td colspan="5">
                    1轻 2重  3无
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.tbbxcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="12"></td>
                <td colspan="2">颅骨重叠</td>
                <td colspan="5">
                    1冠状   2矢状  3人字缝    4无
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.lgcdcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="12"></td>
                <td colspan="2">胎头水肿</td>
                <td colspan="5">
                    1顶部  2枕部  3颞部  4大小
                    <span class="mark" style="text-decoration: underline;">
                        {{PersonalIntrcNBornInfo.ttszdsize}}
                    </span>cm  5无
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.ttszcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="12"></td>
                <td colspan="2">胎头血肿</td>
                <td colspan="5">
                    1顶部  2枕部  3颞部  4大小
                    <span class="mark" style="text-decoration: underline;">
                        {{PersonalIntrcNBornInfo.ttxzdsize}}
                    </span>cm  5无
                    <span class="checkBox">
                        {{PersonalIntrcNBornInfo.ttxzcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td rowspan="5">新生儿评分</td>
                <td colspan="2" class="alignCenter"></td>
                <td class="alignCenter">呼吸</td>
                <td colspan="2" class="alignCenter">心率</td>
                <td colspan="2" class="alignCenter">肌张力</td>
                <td colspan="2" class="alignCenter">喉反射</td>
                <td colspan="2" class="alignCenter">皮肤颜色</td>
                <td colspan="2" class="alignCenter">总分</td>
                <td colspan="5">
                    前囟<span class="mark" style="text-decoration: underline;">
                        {{PersonalIntrcNBornInfo.qxhj}}
                    </span>cm*<span class="mark" style="text-decoration: underline;">
                        {{PersonalIntrcNBornInfo.qxzj}}
                    </span>cm <br>
                    张力  <span class="mark">{{PersonalIntrcNBornInfo.qxzldes}}</span> <br>
                    口腔  <span class="mark">{{PersonalIntrcNBornInfo.kqdes}}</span><br>
                    乳结  <span class="mark">{{PersonalIntrcNBornInfo.rjdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">一分钟</td>
                <td class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzhxscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzxlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzjzlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzhfsscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzpfysscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.yfzhxscore+
                    PersonalIntrcNBornInfo.yfzxlscore+
                    PersonalIntrcNBornInfo.yfzjzlscore+
                    PersonalIntrcNBornInfo.yfzhfsscore+
                    PersonalIntrcNBornInfo.yfzpfysscore}}
                </td>
                <td colspan="5">
                    心 <span class="mark">{{PersonalIntrcNBornInfo.xzdes}}</span><br>
                    肺 <span class="mark">{{PersonalIntrcNBornInfo.fbdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">五分钟</td>
                <td class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzhxscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzxlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzjzlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzhfsscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzpfysscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.wfzhxscore+
                    PersonalIntrcNBornInfo.wfzxlscore+
                    PersonalIntrcNBornInfo.wfzjzlscore+
                    PersonalIntrcNBornInfo.wfzhfsscore+
                    PersonalIntrcNBornInfo.wfzpfysscore}}
                </td>
                <td colspan="5">
                    肝 <span class="mark">{{PersonalIntrcNBornInfo.gzdes}}</span><br>
                    脾 <span class="mark">{{PersonalIntrcNBornInfo.pzdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">十分钟</td>
                <td class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzhxscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzxlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzjzlscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzhfsscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzpfysscore}}
                </td>
                <td colspan="2" class="mark alignCenter">
                    {{PersonalIntrcNBornInfo.sfzhxscore+
                    PersonalIntrcNBornInfo.sfzxlscore+
                    PersonalIntrcNBornInfo.sfzjzlscore+
                    PersonalIntrcNBornInfo.sfzhfsscore+
                    PersonalIntrcNBornInfo.sfzpfysscore}}
                </td>
                <td colspan="5">
                    四肢 <span class="mark">{{PersonalIntrcNBornInfo.szdes}}</span><br>
                    肛门 <span class="mark">{{PersonalIntrcNBornInfo.gmdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="mark"></td>
                <td class="mark"></td>
                <td colspan="2" class="mark"></td>
                <td colspan="2" class="mark"></td>
                <td colspan="2" class="mark"></td>
                <td colspan="2" class="mark"></td>
                <td colspan="2" class="mark"></td>
                <td colspan="5">
                    生殖器 <span class="mark">{{PersonalIntrcNBornInfo.szqdes}}</span><br>
                    髋关节 <span class="mark">{{PersonalIntrcNBornInfo.kgjdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="14" rowspan="2"></td>
                <td colspan="5">
                    畸形 <span class="mark">{{PersonalIntrcNBornInfo.qxdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    诊断 <span class="mark">{{PersonalIntrcNBornInfo.zddes}}</span><br>
                    检查者 <span class="mark">{{PersonalIntrcNBornInfo.jczdes}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="3">母亲产前产时合并症</td>
                <td colspan="16" class="mark">
                    {{PersonalIntrcNBornInfo.mqcqcshbzdes}}
                </td>
            </tr>
            <tr>
                <td colspan="3">出生前胎儿情况</td>
                <td colspan="16" class="mark">
                    {{PersonalIntrcNBornInfo.csqteqkdes}}
                </td>
            </tr>
            <tr>
                <td colspan="3">出生时特殊情况处理</td>
                <td colspan="16" class="mark">
                    {{PersonalIntrcNBornInfo.csstsqkdes}}
                </td>
            </tr>
            <tr>
                <td rowspan="2">日期</td>
                <td rowspan="2">体温</td>
                <td rowspan="2">皮肤</td>
                <td rowspan="2">炭疽</td>
                <td rowspan="2">口腔</td>
                <td colspan="3">脐带</td>
                <td colspan="2">大便</td>
                <td colspan="2">小便</td>
                <td colspan="2">呕吐</td>
                <td colspan="3">哺乳</td>
                <td rowspan="2">臂</td>
                <td rowspan="2">足印</td>
            </tr>
            <tr>
                <td>脱</td>
                <td>感染</td>
                <td>血出</td>
                <td>色颜</td>
                <td>状性</td>
                <td>有</td>
                <td>无</td>
                <td>量</td>
                <td>质性</td>
                <td>乳母</td>
                <td>乳牛</td>
                <td>合混</td>
            </tr>
            <tr v-for="(item,index) in infoList" :key="index">
                <td class="mark">{{item.cheackDate}}</td>
                <td class="mark">{{item.temperature}}&nbsp;</td>
                <td class="mark">{{item.skinning}}</td>
                <td class="mark">{{item.anthracnose}}</td>
                <td class="mark">{{item.oral}}</td>
                <td class="mark">{{item.qdtl}}</td>
                <td class="mark">{{item.qdgr}}</td>
                <td class="mark">{{item.qdcx}}</td>
                <td class="mark">{{item.dbsy}}</td>
                <td class="mark">{{item.dbzx}}</td>
                <td class="mark">{{item.xby}}</td>
                <td class="mark">{{item.xbw}}</td>
                <td class="mark">{{item.otl}}</td>
                <td class="mark">{{item.otzx}}</td>
                <td class="mark">{{item.brRm}}</td>
                <td class="mark">{{item.brRn}}</td>
                <td class="mark">{{item.brHh}}</td>
                <td class="mark">{{item.arm}}</td>
                <td v-if="index == 0" :rowspan="infoList.length">
                    <img style="width: 100%;height: 100%;" :src="PersonalIntrcNBornInfo.footprintUrl" :alt="PersonalIntrcNBornInfo.footprintName">
                </td>
            </tr>
            <tr>
                <td rowspan="4">出院记录</td>
                <td colspan="18">
                    出院日期：<span class="mark">
                        {{PersonalIntrcNBornInfo.cyrq}}
                    </span>  &nbsp;&nbsp;&nbsp;&nbsp;
                    出院体重：<span class="mark">
                        {{PersonalIntrcNBornInfo.cytz}}
                    </span>g&nbsp;&nbsp;&nbsp;&nbsp;
                    脐带（1未脱   2已脱）<span class="checkBox">
                        {{PersonalIntrcNBornInfo.qdztcode}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="18">
                    查体异常：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.ctycdes}}
                    </span>  &nbsp;&nbsp;&nbsp;&nbsp;
                    转科：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.zkksname}}
                    </span>  &nbsp;&nbsp;&nbsp;&nbsp;
                    转院：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.zyyyname}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="18">
                    结    论：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.cyjldes}}
                    </span>  &nbsp;&nbsp;&nbsp;&nbsp;
                    医嘱：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.cyyzdes}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="15">
                    死亡日期：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.swrq}}
                    </span>
                    死亡诊断： <span class="lineBox">
                        {{PersonalIntrcNBornInfo.swzd}}
                    </span>  &nbsp;&nbsp;&nbsp;&nbsp;
                    签名：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.cyqm}}
                    </span>
                </td>
                <td colspan="3">
                    盖印者：<span class="lineBox">
                        {{PersonalIntrcNBornInfo.zygyz}}
                    </span>
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
                listLength:7,
                infoList:[],
                PersonalIntrcNBornInfo:{}
            }
        },
        created(){
            // console.log(this.
            this.PersonalIntrcNBornInfo = this.reportData.PersonalIntrcNBornInfo || {};
            this.getPersonalNBornCheckInfoList();
        },
        methods:{
            getPersonalNBornCheckInfoList(){
                var list = new Array();
                var personalNBornCheckInfoList = this.reportData.PersonalNBornCheckInfoList || [];
                if(personalNBornCheckInfoList && personalNBornCheckInfoList.length > 0){
                    list = personalNBornCheckInfoList;
                    var otherList = [];
                    if(personalNBornCheckInfoList.length < this.listLength){
                        var otherLength = this.listLength - personalNBornCheckInfoList.length;
                        for(var i=0;i<otherLength;i++){
                           otherList.push({});
                        }
                        list = list.concat(otherList);
                    }
                }else{
                    for(var i=0;i<this.listLength;i++){
                       list.push({});
                    }
                }
                this.infoList = list;
            }
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