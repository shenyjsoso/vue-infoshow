<template>
    <div class="report">
        <!-- 体弱儿专案管理记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">体弱儿专案管理记录表</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">建卡时间</td>
                <td class="mark"></td>
                <td class="alignCenter">结案时间</td>
                <td class="mark"></td>
                <td class="alignCenter">体弱儿编号</td>
                <td class="mark"></td>
                <td class="alignCenter">体检表编号</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">儿童姓名</td>
                <td class="mark"></td>
                <td class="alignCenter">性别</td>
                <td class="mark"></td>
                <td class="alignCenter">出生日期</td>
                <td class="mark"></td>
                <td class="alignCenter">家庭地址</td>
                <td class="mark"></td>
            </tr>
            <tr>
                <td class="alignCenter">父亲姓名</td>
                <td class="mark"></td>
                <td class="alignCenter">母亲姓名</td>
                <td class="mark"></td>
                <td class="alignCenter">联系电话</td>
                <td class="mark" colspan="3"></td>
            </tr>
            <tr>
                <td class="alignCenter">体弱儿分类</td>
                <td colspan="7">
                    1、早产
                    2、双胎
                    3、癫痫病
                    4、低出生体重
                    5、重度窒息
                    6、先天性心脏病
                    7、活动期佝偻病
                    8、中重度贫血
                    9、中重度营养不良
                    10、神经精神发育迟缓
                    11、反复感染
                    12、两次测体重不增加或下降
                </td>
            </tr>
            <tr>
                <td class="alignCenter">体弱原因</td>
                <td colspan="7">
                    1、喂养不当
                    2、慢性疾病
                    3、产前产时因素
                    4、遗传因素
                    5、其他
                    <span class="lineBox"></span>
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">结案结论</td>
                <td colspan="7">
                    1、治愈
                    2、好转
                    3、死亡
                    4、转院
                    5、长期外出或户口外迁
                    <span class="lineBox"></span>
                    <span class="checkBox" style="float: right;"></span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">指导及处理</td>
                <td class="mark" colspan="7"></td>
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
            width: 900px;
        }
    }
</style>