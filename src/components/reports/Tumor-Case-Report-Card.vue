<template>
    <div class="report">
        <!-- 肿瘤报告 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    肿瘤报告
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="6"></td>
                <td>编码</td>
                <td colspan="3" class="mark">
                    {{reportData.tumorreportcardno}}
                </td>
            </tr>
            <tr>
                <td>姓名</td>
                <td class="mark">
                    {{reportData.name}}
                </td>
                <td>性别</td>
                <td class="mark">
                    {{reportData.sexname}}
                </td>
                <td>年龄</td>
                <td class="mark">
                    {{reportData.age}}
                </td>
                <td>报告区县</td>
                <td colspan="3" class="mark">
                    {{reportData.reportqx}}
                </td>
            </tr>
            <tr>
                <td>ICD编码</td>
                <td class="mark">
                    {{reportData.icdCode}}
                </td>
                <td>ICD-O编码</td>
                <td class="mark">
                    {{reportData.icdoCode}}
                </td>
                <td>身份证号</td>
                <td colspan="2" class="mark">
                    {{reportData.idcard}}
                </td>
                <td>出生日期</td>
                <td colspan="2" class="mark">
                    {{$formatDate(reportData.birthday)}}
                </td>
            </tr>
            <tr>
                <td>民族</td>
                <td class="mark">
                    {{reportData.nationname}}
                </td>
                <td>联系电话</td>
                <td colspan="2" class="mark">
                    {{reportData.lxdhhm}}
                </td>
                <td>职业类别</td>
                <td colspan="4" class="mark">
                    {{reportData.zylb}}
                </td>
            </tr>
            <tr>
                <td>工作单位</td>
                <td colspan="9" class="mark">
                    {{reportData.gzdw}}
                </td>
            </tr>
            <tr>
                <td>户籍地址</td>
                <td class="mark">
                    {{reportData.szzqzxs}}
                </td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td colspan="2" class="mark">
                    {{reportData.sdq}}
                </td>
                <td>市(地区)</td>
                <td colspan="2" class="mark">
                    {{reportData.xq}}
                </td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">
                    {{reportData.xzjdbsc}}
                </td>
                <td>街道(乡、镇)</td>
                <td colspan="2" class="mark">
                    {{reportData.cjlnd}}
                </td>
                <td>路(村、街、弄)</td>
                <td colspan="2" class="mark">
                    {{reportData.mphm}}
                </td>
                <td>号</td>
            </tr>
            <tr>
                <td>邮政编码</td>
                <td colspan="9" class="mark">
                    {{reportData.yzbm}}
                </td>
            </tr>
            <tr>
                <td>现住址</td>
                <td class="mark">
                    {{reportData.xszzqzxs}}
                </td>
                <td colspan="2">省(自治区、直辖市)</td>
                <td colspan="2" class="mark">
                    {{reportData.xsdq}}
                </td>
                <td>市(地区)</td>
                <td colspan="2" class="mark">
                    {{reportData.xxq}}
                </td>
                <td>区(县)</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2" class="mark">
                    {{reportData.xxzjdbsc}}
                </td>
                <td>街道(乡、镇)</td>
                <td colspan="2" class="mark">
                    {{reportData.xcjlnd}}
                </td>
                <td>路(村、街、弄)</td>
                <td colspan="2" class="mark">
                    {{reportData.xmphm}}
                </td>
                <td>号</td>
            </tr>
            <tr>
                <td colspan="2">户口迁移日期</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.movedate)}}
                </td>
                <td colspan="2">户口迁移地址</td>
                <td colspan="3" class="mark">
                    {{reportData.moveaddress}}
                </td>
            </tr>
            <tr>
                <td colspan="2">首次诊断日期</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.firstclinicdate)}}
                </td>
                <td colspan="2">肿瘤位置描述</td>
                <td colspan="3" class="mark">
                    {{reportData.tumorsitedes}}
                </td>
            </tr>
            <tr>
                <td>病理号</td>
                <td class="mark">
                    {{reportData.pathologyno}}
                </td>
                <td colspan="2">病理学类型</td>
                <td colspan="2" class="mark">
                    {{reportData.pathologytype}}
                </td>
                <td colspan="2">肿瘤临床分期</td>
                <td colspan="2" class="mark">
                    {{reportData.tumorstagingdes}}
                </td>
            </tr>
            <tr>
                <td colspan="2">肿瘤诊断依据</td>
                <td class="mark">
                    {{reportData.tumordiagbasisdes}}
                </td>
                <td colspan="2">原发肿瘤(T)</td>
                <td colspan="2" class="mark">
                    {{reportData.topography}}
                </td>
                <td colspan="2">区域淋巴结(N)</td>
                <td class="mark">
                    {{reportData.lymphnode}}
                </td>
            </tr>
            <tr>
                <td colspan="2">远程转移(M)</td>
                <td class="mark">
                    {{reportData.metastasis}}
                </td>
                <td colspan="2">原肿瘤诊断</td>
                <td colspan="2" class="mark">
                    {{reportData.yzlzd}}
                </td>
                <td colspan="2">原肿瘤诊断日期</td>
                <td class="mark">
                    {{$formatDate(reportData.yzlzdrq)}}
                </td>
            </tr>
            <tr>
                <td colspan="2">死亡日期</td>
                <td colspan="3" class="mark">
                    {{$formatDate(reportData.deathdatetime)}}
                </td>
                <td colspan="2">死亡地点</td>
                <td colspan="3" class="mark">
                    {{reportData.deathaddress}}
                </td>
            </tr>
            <tr>
                <td colspan="2">其他死亡地点</td>
                <td colspan="3" class="mark">
                    {{reportData.otherdeathaddress}}
                </td>
                <td colspan="2">死亡原因</td>
                <td colspan="3" class="mark">
                    {{reportData.reasondeatha}}
                </td>
            </tr>
            <tr>
                <td>填报日期</td>
                <td class="mark">
                    {{$formatDate(reportData.reporttime)}}
                </td>
                <td colspan="2">填报单位名称</td>
                <td colspan="3" class="mark">
                    {{reportData.reportlorganname}}
                </td>
                <td colspan="2">报告医师姓名</td>
                <td class="mark">
                    {{reportData.reportdoctorname}}
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