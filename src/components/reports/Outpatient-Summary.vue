<template>
    <div class="report">
        <!-- 门诊摘要 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    <div class="title">门诊摘要</div>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col>
                <col>
                <col>
                <col style="width: 110px;">
                <col style="width: 90px;">
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark alignCenter">{{reportData.name}}</td>
                <td class="alignCenter">性别</td>
                <td class="mark alignCenter" colspan="2">{{reportData.sexname}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark alignCenter">{{reportData.age}}</td>
                <td class="alignCenter">婚否</td>
                <td class="mark alignCenter">{{reportData.marriagename}}</td>
            </tr>
            <tr>
                <td class="alignCenter">门诊号</td>
                <td class="mark alignCenter">{{reportData.mzh}}</td>
                <td class="alignCenter">就诊科室</td>
                <td class="mark alignCenter" colspan="2">{{reportData.jzks}}</td>
                <td class="alignCenter">主治医师</td>
                <td class="mark alignCenter">{{reportData.zzys}}</td>
                <td class="alignCenter">就诊时间</td>
                <td class="mark alignCenter">{{$formatDate(reportData.jzsj)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">主诉</td>
                <td colspan="8" class="mark">{{reportData.zsnr}}</td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">体格检查</td>
                <td class="alignCenter">舒张压(mmHg)</td>
                <td class="mark alignCenter">{{reportData.diastolic}}</td>
                <td class="alignCenter">收缩压(mmHg)</td>
                <td class="mark alignCenter">{{reportData.constriction}}</td>
                <td class="alignCenter">体温(℃)</td>
                <td class="mark alignCenter">{{reportData.temperature}}</td>
                <td class="alignCenter">心率(次/分)</td>
                <td class="mark alignCenter">{{reportData.heartrate}}</td>
            </tr>
            <tr>
                <td class="alignCenter">身高(cm)</td>
                <td class="mark alignCenter">{{reportData.height}}</td>
                <td class="alignCenter">体重(kg)</td>
                <td class="mark alignCenter">{{reportData.weight}}</td>
                <td class="alignCenter">体重指数</td>
                <td class="mark alignCenter">{{reportData.bmi}}</td>
                <td class="alignCenter">呼吸频率(次/分)</td>
                <td class="mark alignCenter">{{reportData.breathingRate}}</td>
            </tr>
            <tr>
                <td class="alignCenter">主诊断</td>
                <td colspan="8" class="mark">{{reportData.zzd}}</td>
            </tr>
            <tr>
                <td class="alignCenter">从诊断</td>
                <td colspan="8" class="mark">{{reportData.czd}}</td>
            </tr>
            <tr>
                <td class="alignCenter">用药</td>
                <td colspan="8" class="mark">{{reportData.yy}}</td>
            </tr>
            <tr>
                <td class="alignCenter">检查项目</td>
                <td colspan="8" class="mark">{{reportData.jcxm}}</td>
            </tr>
            <tr>
                <td class="alignCenter">医学指导</td>
                <td colspan="8" class="mark">{{reportData.yxzd}}</td>
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
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 1020px;
        }
    }
</style>