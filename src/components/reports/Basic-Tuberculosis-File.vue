<template>
    <div class="report">
        <!-- 肺结核基本档案 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    结核病人基本档案表
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{reportData.xm}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{reportData.fjhbbh}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 140px;">
                <col style="width: 240px;">
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter" colspan="2">随访时间</td>
                <td class="mark">{{$formatDate(reportData.sfsj)}}</td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">随访方式</td>
                <td>
                    1门诊&nbsp;&nbsp;
                    2家庭
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.sffs}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">患者类型</td>
                <td>
                    1初治&nbsp;&nbsp;
                    2复治
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.hzlx}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">痰菌情况</td>
                <td>
                    1阳性&nbsp;&nbsp;
                    2阴性&nbsp;&nbsp;
                    3未查痰
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.tjqk}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">耐药情况</td>
                <td>
                    1耐药&nbsp;&nbsp;
                    2非耐药&nbsp;&nbsp;
                    3未检测
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.nyqk}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">症状及体征</td>
                <td>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 0.没有症状
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'0')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 1.咳嗽咳痰
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'1')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 2.低热盗汗
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'2')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 3.咯血或血痰
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'3')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 4.胸痛消瘦
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'4')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 5.恶心纳差
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'5')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 6.头痛失眠
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'6')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 7.视物模糊
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'7')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 8.皮肤瘙痒、皮疹
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'8')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 9.耳鸣、听力下降
                        <i class="iconfont xz" v-if="inIt(reportData.bzjtz,'9')">&#xe631;</i>
                    </span>
                    <span class="jy" style="width: 200px;display: inline-block;">
                        <span class="checkBox"></span> 其他：<span class="lineBox">&nbsp;{{reportData.bzjtzqt}}</span>
                        <i class="iconfont xz" v-if="reportData.bzjtzqt">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <!-- <tr>
                <td colspan="2">症状及体征：</td>
                <td>
                    <span class="checkBox" v-for="(item,index) in setSplit(reportData.bzjtz)">{{item}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    0 没有症状   1 咳嗽咳痰
                </td>
                <td rowspan="6" style="vertical-align: text-top;">
                    其他：<span class="mark">{{reportData.bzjtzqt}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    2 低热盗汗   3 咯血或血痰
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    4 胸痛消瘦   5 恶心纳差
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    6 头痛失眠   7 视物模糊
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    8 皮肤瘙痒、皮疹
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">
                    9 耳鸣、听力下降
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter" rowspan="3">用药</td>
                <td class="alignCenter">化疗方案</td>
                <td class="mark">{{reportData.hlfa}}</td>
            </tr>
            <tr>
                <td class="alignCenter">用法</td>
                <td>
                    1每日&nbsp;&nbsp;
                    2间歇
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.yf}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">药品剂型</td>
                <td>
                    1固定剂量复合制剂&nbsp;&nbsp;
                    2散装药&nbsp;&nbsp;
                    3板式组合药&nbsp;&nbsp;
                    4注射剂
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.ypjx}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" colspan="2">督导人员选择</td>
                <td>
                    1医生 2家属 3自服药 4其他
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.ddryxz}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">家庭居住环境评估</td>
                <td class="alignCenter">单独的居室</td>
                <td>
                    1 有   2无
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.dddjs}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">通风情况</td>
                <td>
                    1 良好 2 一般 3 差
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.tfqk}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">生活方式评估</td>
                <td class="alignCenter">吸烟</td>
                <td>
                    <span class="lineBox">{{reportData.xy}}</span>支/天
                </td>
            </tr>
            <tr>
                <td class="alignCenter">饮酒</td>
                <td>
                    <span class="lineBox">{{reportData.yj}}</span>两/天
                </td>
            </tr>
            <tr>
                <td rowspan="11" class="alignCenter">健康教育及培训</td>
                <td rowspan="2" class="alignCenter">取药地点、时间</td>
                <td>
                    地点:<span class="mark">{{reportData.qydd}}</span>
                </td>
            </tr>
            <tr>
                <td>
                    时间:<span class="mark">{{$formatDate(reportData.qysj)}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">服药记录卡的填写</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.fyjlkdtx}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">服药方法及药品存放</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.fyffjypcf}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">肺结核治疗疗程</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.fjhzllc}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">不规律服药危害</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.bglfywh}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">服药后不良反应及处理</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.fyhblfujcl}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">治疗期间复诊查痰</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.zlqjfzct}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">外出期间如何坚持服药</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.wcqjrhjcfy}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">生活习惯及注意事项</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.shxgjzysx}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">密切接触者检查</td>
                <td>
                    1 掌握  2 未掌握
                    <span class="rightBox">
                        <span class="checkBox">{{reportData.mqjczjc}}</span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访时间</td>
                <td class="mark">{{$formatDate(reportData.xcsfsj)}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">评估医生签名</td>
                <td class="mark">{{reportData.pgysqm}}</td>
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
                xm:'',
                fjhbbh:'',
                sfsj:'',
                sffs:'',
                hzlx:'',
                tjqk:'',
                nyqk:'',
                bzjtzqt:'',
                hlfa:'',
                yf:'',
                ypjx:'',
                ddryxz:'',
                dddjs:'',
                tfqk:'',
                xy:'',
                yj:'',
                qydd:'',
                qysj:'',
                fyjlkdtx:'',
                fyffjypcf:'',
                fjhzllc:'',
                bglfywh:'',
                fyhblfujcl:'',
                zlqjfzct:'',
                wcqjrhjcfy:'',
                shxgjzysx:'',
                mqjczjc:'',
                xcsfsj:'',
                pgysqm:'',
                bzjtz:''
            }
        },
        created(){
            // console.log(this.reportData)
        },
        methods:{
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