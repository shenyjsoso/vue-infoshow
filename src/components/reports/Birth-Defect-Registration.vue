<template>
    <div class="report">
        <!-- 出生缺陷登记卡 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    医疗机构出生缺陷登记卡
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="9" style="text-align: center;">
                    <span class="lineBox">&nbsp;</span>
                    省(市、自治区)
                    <span class="lineBox">&nbsp;</span>
                    区县
                    <span class="lineBox">&nbsp;</span>
                    医院(保健院、所)
                    <span class="lineBox">651651465</span>
                </td>
            </tr>
            <tr>
                <td rowspan="5" class="alignCenter">产妇情况</td>
                <td class="alignCenter">住院号</td>
                <td class="mark"></td>
                <td class="alignCenter">姓名</td>
                <td class="mark"></td>
                <td class="alignCenter">民族</td>
                <td class="mark"></td>
                <td class="alignCenter">实足年龄</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">通讯地址</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">邮编</td>
                <td class="mark"></td>
                <td class="alignCenter">孕次</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">常住址</td>
                <td colspan="6">
                    <span class="checkBox"></span>
                    1.城镇&nbsp;&nbsp;
                    2.乡村
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">家庭年人均收入(元)</td>
                <td colspan="6">
                    <span class="checkBox"></span>
                    1.{{'<'}}1000&nbsp;&nbsp;
                    2.1000~&nbsp;&nbsp;
                    3.2000~&nbsp;&nbsp;
                    4.4000~&nbsp;&nbsp;
                    5.8000及以上
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">文化程度</td>
                <td colspan="6">
                    <span class="checkBox"></span>
                    1.文盲&nbsp;&nbsp;
                    2.小学&nbsp;&nbsp;
                    3.初中&nbsp;&nbsp;
                    4.高中、中专&nbsp;&nbsp;
                    5.大专及以上
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="5">缺陷儿童情况</td>
                <td colspan="2" class="alignCenter">出生日期</td>
                <td colspan="2" class="mark"></td>
                <td colspan="2" class="alignCenter">性别</td>
                <td colspan="2">
                    <span class="checkBox"></span>
                    1.男&nbsp;&nbsp;
                    2.女&nbsp;&nbsp;
                    3.不明
                </td>
            </tr>
            <tr>
                <td class="alignCenter">胎龄(w)</td>
                <td class="mark"></td>
                <td class="alignCenter">体重(g)</td>
                <td class="mark"></td>
                <td class="alignCenter">转归</td>
                <td colspan="3">
                    <span class="checkBox"></span>
                    1.活产&nbsp;&nbsp;
                    2.死胎&nbsp;&nbsp;
                    3.死产&nbsp;&nbsp;
                    4.七天内死亡
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">胎数</td>
                <td colspan="2">
                    <span class="checkBox"></span>
                    1.单胎&nbsp;&nbsp;
                    2.双胎&nbsp;&nbsp;
                    3.多胎
                </td>
                <td colspan="2" class="alignCenter">诊断为出生缺陷后治疗性引产</td>
                <td colspan="2">
                    <span class="checkBox"></span>
                    1.是&nbsp;&nbsp;
                    2.否
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">双胎或多胎</td>
                <td colspan="2">
                    <span class="checkBox"></span>
                    1.同卵&nbsp;&nbsp;
                    2.异卵
                </td>
                <td colspan="2" class="alignCenter">诊断依据</td>
                <td colspan="2">
                    <span class="checkBox"></span>
                    1.临床&nbsp;&nbsp;
                    2.超声&nbsp;&nbsp;
                    3.尸解&nbsp;&nbsp;<br>
                    4.生化检查(AFP、HCG/其他<span class="lineBox"></span>)&nbsp;&nbsp;
                    5.染色体&nbsp;&nbsp;<br>
                    6.其他<span class="lineBox"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">畸形确诊时间</td>
                <td colspan="6">
                    <span class="checkBox"></span>
                    1.产前(孕<span class="lineBox"></span>周)&nbsp;&nbsp;
                    2.产后七天内
                </td>
            </tr>
            <tr>
                <td rowspan="14">出生缺陷诊断</td>
                <td colspan="4">
                    01无脑畸形
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    15多指(趾)&nbsp;&nbsp;&nbsp;&nbsp;左&nbsp;&nbsp;&nbsp;&nbsp;右
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    02脊柱裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    16并指(趾)&nbsp;&nbsp;&nbsp;&nbsp;左&nbsp;&nbsp;&nbsp;&nbsp;右
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    03脑膨出
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    17肢体短缩[包括缺指(趾)、裂手(足)]
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    04先天性脑积水
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    上肢&nbsp;&nbsp;&nbsp;&nbsp;左&nbsp;&nbsp;&nbsp;&nbsp;右
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    05腭裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    下肢&nbsp;&nbsp;&nbsp;&nbsp;左&nbsp;&nbsp;&nbsp;&nbsp;右
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    06唇裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    18先天性膈疝
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    07唇裂合并腭裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    19脐膨出
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    08小耳(包括无耳)
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    20腹裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    09外耳其他畸形(小耳、无耳除外)
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    21联体双胎
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    10食道闭锁或狭窄
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    22唐氏综合征(21-三体综合征)
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    11直肠肛门闭锁或狭窄（包括无肛）
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    23先天性心脏病（类型）
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    12尿道下裂
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4">
                    24其他（写明病名或详细描述）
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    13膀胱外翻
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4"></td>
            </tr>
            <tr>
                <td colspan="4">
                    14马蹄内翻足&nbsp;&nbsp;&nbsp;&nbsp;左&nbsp;&nbsp;&nbsp;&nbsp;右
                    <span class="checkBox" style="float: right;"></span>
                </td>
                <td colspan="4"></td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="6">孕早期情况</td>
                <td colspan="2" class="alignCenter">患病</td>
                <td colspan="3" class="alignCenter">服药</td>
                <td colspan="3" class="alignCenter">接触其他有害因素</td>
            </tr>
            <tr>
                <td>发烧({{'>'}}38℃)</td>
                <td class="mark"></td>
                <td>磺胺类(名称)</td>
                <td colspan="2" class="mark"></td>
                <td>饮酒(剂量)</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td>病毒感染(类型)</td>
                <td class="mark"></td>
                <td>抗生素(名称)</td>
                <td colspan="2" class="mark"></td>
                <td>农药(名称)</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td>糖尿病</td>
                <td class="mark"></td>
                <td>避孕药(名称)</td>
                <td colspan="2" class="mark"></td>
                <td>射线(名称)</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td>其他</td>
                <td class="mark"></td>
                <td>镇静药(名称)</td>
                <td colspan="2" class="mark"></td>
                <td>化学制剂(名称)</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td colspan="2" class="mark"></td>
                <td>其他</td>
                <td colspan="2" class="mark"></td>
                <td>其他</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td rowspan="3" class="alignCenter">家庭史</td>
                <td colspan="2" class="alignCenter">产妇异常生育史</td>
                <td colspan="6">
                    1.死胎<span class="lineBox"></span>例&nbsp;&nbsp;&nbsp;&nbsp;
                    2.自然流产<span class="lineBox"></span>例&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    3.缺陷儿<span class="lineBox"></span>例（缺陷名<span class="lineBox"></span>、<span class="lineBox"></span>、<span class="lineBox"></span>）
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">家族遗传史</td>
                <td colspan="6">
                    缺陷名<span class="lineBox"></span>&nbsp;&nbsp;
                    与缺陷儿亲缘关系<span class="lineBox"></span><br>
                    缺陷名<span class="lineBox"></span>&nbsp;&nbsp;
                    与缺陷儿亲缘关系<span class="lineBox"></span><br>
                    缺陷名<span class="lineBox"></span>&nbsp;&nbsp;
                    与缺陷儿亲缘关系<span class="lineBox"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">近亲婚配史</td>
                <td colspan="6">
                    <span class="checkBox"></span>
                    1.不是&nbsp;&nbsp;&nbsp;&nbsp;
                    2.是(关系<span class="lineBox"></span>)
                </td>
            </tr>
            <tr>
                <td class="alignCenter">填表人</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">职称</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">填表日期</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">医院审表人</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">职称</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">审表日期</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">省级审表人</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">职称</td>
                <td colspan="2" class="mark"></td>
                <td class="alignCenter">审表日期</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td colspan="9" class="alignCenter">
                    填报说明：本卡由出生缺陷监测医院填报。统计范围为在出生缺陷监测医院内住院分娩且被确诊为出生缺陷的患儿。
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