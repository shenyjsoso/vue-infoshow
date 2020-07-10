<template>
    <div class="report">
        <!-- 儿童健康体检 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">儿童健康体检(弃用)</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">ss</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">sssssss</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td>性别</td>
                <td colspan="3">
                    1.男&nbsp;
                    2.女&nbsp;
                    9.未说明的性别&nbsp;
                    0.未知的性别&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>出生日期</td>
                <td colspan="3" class="mark"></td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td colspan="3" class="mark"></td>
                <td>家庭住址</td>
                <td colspan="3" class="mark"></td>
            </tr>
            <tr>
                <td>父亲</td>
                <td class="mark"></td>
                <td>职业</td>
                <td class="mark"></td>
                <td>联系电话</td>
                <td class="mark"></td>
                <td>出生日期</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td>母亲</td>
                <td class="mark"></td>
                <td>职业</td>
                <td class="mark"></td>
                <td>联系电话</td>
                <td class="mark"></td>
                <td>出生日期</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td>出生孕周</td>
                <td class="mark"></td>
                <td colspan="6">
                    母亲妊娠期患病情况&nbsp;
                    1 无&nbsp;
                    2 糖尿病 &nbsp;
                    3 妊娠期高血压&nbsp;
                    4 其他&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>助产机构名称</td>
                <td colspan="2" class="mark"></td>
                <td colspan="5">
                    出生情况&nbsp;
                    1 顺产&nbsp;
                    2 胎头吸引&nbsp;
                    3 产钳&nbsp;
                    4 剖宫&nbsp;
                    5 双多胎&nbsp;
                    6 臀位&nbsp;
                    7 其他&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    新生儿窒息&nbsp;
                    1 无&nbsp;
                    2 有&nbsp;
                    (Apgar 评分：1min&nbsp;5min&nbsp;不详）
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    畸型&nbsp;
                    1 无&nbsp;
                    2 有&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    新生儿听力筛查：&nbsp;
                    1 通过&nbsp;
                    2 未通过&nbsp;
                    3 未筛查&nbsp;
                    4 不详&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    新生儿疾病筛查：&nbsp;
                    1 未进行&nbsp;
                    2 检查均阴性&nbsp;
                    3 甲低&nbsp;
                    4 苯丙酮尿症&nbsp;
                    5 其他遗传代谢病&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">新生儿出生体重(kg)</td>
                <td colspan="2" class="mark"></td>
                <td>目前体重(kg)</td>
                <td class="mark"></td>
                <td>出生身长(cm)</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="4">
                    喂养方式&nbsp;
                    1 纯母乳&nbsp;
                    2 混合&nbsp;
                    3 人工&nbsp;
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>吃奶量(ml/次)</td>
                <td class="mark"></td>
                <td>吃奶次数(次/日)</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="4">
                    呕吐  1 无 2 有
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="2">
                    大便 1 糊状 2 稀 3 其他
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>大便次数(次/日)</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="2">体温(℃)</td>
                <td colspan="2" class="mark"></td>
                <td>心率(次/分钟)</td>
                <td class="mark"></td>
                <td>呼吸频率(次/分钟)</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td colspan="4">
                    面色 1 红润 2 黄染 3 其他
                    <span class="lineBox"></span>
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    黄疸部位 1 无 2 面部 3 躯干 4 四肢 5 手足
                    <span class="rightBox">
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    前囟
                    <span class="lineBox"></span>cm×
                    <span class="lineBox"></span>cm
                    1 正常 2 膨隆 3 凹陷 4 其他
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    眼睛   1 未见异常  2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    四肢活动度 1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    耳外观 1 未见异常  2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    颈部包块 1 无 2 有
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    鼻   1 未见异常  2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    皮 肤 1 未见异常 2 湿疹 3 糜烂 4 其他
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    口腔  1 未见异常  2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    肛   门   1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    心肺听诊 1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    胸   部   1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    腹部触诊 1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4">
                    脊   柱   1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    外生殖器 1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td colspan="4"></td>
            </tr>
            <tr>
                <td colspan="8">
                    脐带  1 未脱    2 脱落    3 脐部有渗出 4 其他
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    转诊建议
                    1 无 2 有 原因：<span class="lineBox"></span><br>
                    机构及科室：<span class="lineBox"></span>
                    <span class="rightBox">
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    指导 1 喂养指导 2 发育指导 3 防病指导 4 预防伤害指导 5 口腔保健指导 6 其他
                    <span class="rightBox">
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>/
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">本次访视日期</td>
                <td colspan="2" class="mark"></td>
                <td colspan="2">下次随访地点</td>
                <td colspan="2" class="mark"></td>
            </tr>
            <tr>
                <td colspan="2">下次随访日期</td>
                <td colspan="2" class="mark"></td>
                <td colspan="2">随访医生签名</td>
                <td colspan="2" class="mark"></td>
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
            width: 800px;
        }
    }
</style>