<template>
    <div class="report">
        <!-- 结核病人登记管理记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    结核病人登记管理记录表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">序号</td>
                <td colspan="3" class="alignCenter">患者姓名</td>
                <td class="alignCenter">性别</td>
                <td class="alignCenter">年龄</td>
                <td colspan="6" class="alignCenter">现住址</td>
                <td colspan="3" class="alignCenter">发病日期</td>
                <td colspan="3" class="alignCenter">诊断</td>
                <td colspan="4" class="alignCenter">治疗方案</td>
                <td colspan="3" class="alignCenter">开始治疗时间</td>
                <td colspan="3" class="alignCenter">完成治疗时间</td>
                <td colspan="3" class="alignCenter">管理医生</td>
                <td colspan="4" class="alignCenter">备注</td>
            </tr>
            <tr v-for="i in 10">
                <td>{{i}}</td>
                <td class="mark" colspan="3"></td>
                <td class="mark"></td>
                <td class="mark"></td>
                <td class="mark" colspan="6"></td>
                <td class="mark" colspan="3"></td>
                <td class="mark" colspan="3"></td>
                <td class="mark" colspan="4"></td>
                <td class="mark" colspan="3"></td>
                <td class="mark" colspan="3"></td>
                <td class="mark" colspan="3"></td>
                <td class="mark" colspan="4"></td>
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