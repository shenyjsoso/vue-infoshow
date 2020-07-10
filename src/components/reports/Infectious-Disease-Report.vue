<template>
    <div class="report">
        <!-- 传染病报告 -->
        <table>
            <tr>
                <td colspan="8"
                    class="title"
                    style="font-weight: bold;">
                    传染病报告
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="7"></td>
                <td>编号</td>
                <td colspan="2" class="mark">
                    {{reportData.bgkbh}}
                </td>
            </tr>
            <tr>
                <td>姓名</td>
                <td class="mark">
                    {{reportData.hzxm}}
                </td>
                <td>性别</td>
                <td class="mark">
                    {{reportData.xb}}
                </td>
                <td>年龄</td>
                <td class="mark">
                    {{reportData.hznl}}
                </td>
                <td>出生日期</td>
                <td class="mark">
                    {{$formatDate(reportData.csrq)}}
                </td>
                <td>报卡类别</td>
                <td class="mark">
                    {{reportData.bklb}}
                </td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td colspan="2" class="mark">
                    {{reportData.sfzjhm}}
                </td>
                <td colspan="2">患者家长姓名</td>
                <td class="mark">
                    {{reportData.jzxm}}
                </td>
                <td>联系电话</td>
                <td class="mark">
                    {{reportData.brdhhm}}
                </td>
                <td>配偶联系电话</td>
                <td class="mark">
                    {{reportData.polxdh}}
                </td>
            </tr>
            <tr>
                <td>工作单位</td>
                <td colspan="2" class="mark">
                    {{reportData.gzdwxxdz}}
                </td>
                <td colspan="2">工作单位电话</td>
                <td colspan="2" class="mark">
                    {{reportData.gzdwdhhm}}
                </td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td>工作地址</td>
                <td colspan="2" class="mark">
                    {{reportData.gzdzsheng}}
                </td>
                <td colspan="2">省（自治区、直辖市）</td>
                <td class="mark">
                    {{reportData.gzdzshi}}
                </td>
                <td colspan="2">市（地区）</td>
                <td class="mark">
                    {{reportData.gzdzqu}}
                </td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">
                    {{reportData.gzdzjd}}
                </td>
                <td colspan="2">街道（乡、镇）</td>
                <td class="mark">
                    {{reportData.gzdzl}}
                </td>
                <td colspan="2">路(村、街、弄)</td>
                <td class="mark">
                    {{reportData.gzdihao}}
                </td>
                <td>号</td>
            </tr>
            <tr>
                <td>户籍地址</td>
                <td colspan="2" class="mark">
                    {{reportData.hjdzsheng}}
                </td>
                <td colspan="2">省（自治区、直辖市）</td>
                <td class="mark">
                    {{reportData.hjdzshi}}
                </td>
                <td colspan="2">市（地区）</td>
                <td class="mark">
                    {{reportData.hjdzqu}}
                </td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">
                    {{reportData.hjdzjd}}
                </td>
                <td colspan="2">街道（乡、镇）</td>
                <td class="mark">
                    {{reportData.hjdzlu}}
                </td>
                <td colspan="2">路(村、街、弄)</td>
                <td class="mark">
                    {{reportData.hjdzhao}}
                </td>
                <td>号</td>
            </tr>
            <tr>
                <td>邮政编码</td>
                <td colspan="9" class="mark">
                    {{reportData.xzdyzbm}}
                </td>
            </tr>
            <tr>
                <td>现住址</td>
                <td colspan="2" class="mark">
                    {{reportData.xzzsheng}}
                </td>
                <td colspan="2">省（自治区、直辖市）</td>
                <td class="mark">
                    {{reportData.xzzshi}}
                </td>
                <td colspan="2">市（地区）</td>
                <td class="mark">
                    {{reportData.xzzqu}}
                </td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">
                    {{reportData.xzzjd}}
                </td>
                <td colspan="2">街道（乡、镇）</td>
                <td class="mark">
                    {{reportData.xzzlu}}
                </td>
                <td colspan="2">路(村、街、弄)</td>
                <td class="mark">
                    {{reportData.xzzhao}}
                </td>
                <td>号</td>
            </tr>
            <tr>
                <td>职业</td>
                <td class="mark">
                    {{reportData.zymc}}
                </td>
                <td>其他职业</td>
                <td class="mark">
                    {{reportData.qtzy}}
                </td>
                <td>诊断状态</td>
                <td colspan="2" class="mark">
                    {{reportData.zdzt}}
                </td>
                <td>诊断结果</td>
                <td colspan="2" class="mark">
                    {{reportData.zdjg}}
                </td>
            </tr>
            <tr>
                <td>传染病发病类别</td>
                <td colspan="2" class="mark">
                    {{reportData.crbfblb}}
                </td>
                <td>首次出现症状日期</td>
                <td colspan="2" class="mark">
                    {{$formatDate(reportData.sccxzzrq)}}
                </td>
                <td>诊断日期</td>
                <td class="mark">
                    {{$formatDate(reportData.zzsj)}}
                </td>
                <td>死亡日期时间</td>
                <td class="mark">
                    {{$formatDate(reportData.ssrq)}}
                </td>
            </tr>
            <tr>
                <td>传染病类别</td>
                <td colspan="2" class="mark">
                    {{reportData.crblbdm}}
                </td>
                <td>传染病名称</td>
                <td colspan="2" class="mark">
                    {{reportData.crblbmc}}
                </td>
                <td colspan="2">其他法定管理以及重点监测传染病名称</td>
                <td colspan="2" class="mark">
                    {{reportData.qtcrbmc}}
                </td>
            </tr>
            <tr>
                <td>订正病名</td>
                <td colspan="2" class="mark">
                    {{reportData.dzbm}}
                </td>
                <td>退卡原因</td>
                <td colspan="2" class="mark">
                    {{reportData.tkyy}}
                </td>
                <td colspan="2">报告医师姓名</td>
                <td colspan="2" class="mark">
                    {{reportData.bgysxm}}
                </td>
            </tr>
            <tr>
                <td>填报日期</td>
                <td colspan="2" class="mark">
                    {{$formatDate(reportData.tbrq)}}
                </td>
                <td>填报单位名称</td>
                <td colspan="2" class="mark">
                    {{reportData.bgdwmc}}
                </td>
                <td colspan="2">填报单位电话号码</td>
                <td colspan="2" class="mark">
                    {{reportData.bgdwlxdh}}
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