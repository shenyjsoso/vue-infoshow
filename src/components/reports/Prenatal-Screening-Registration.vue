<template>
    <div class="report">
        <!-- 产前筛查登记表 -->
        <!-- <table>
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td colspan="12" class="title">产前筛查登记表</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <td class="alignCenter" rowspan="2">手册编号</td>
                <td class="alignCenter" rowspan="2">检查日期</td>
                <td class="alignCenter" rowspan="2">姓名</td>
                <td class="alignCenter" rowspan="2">年龄</td>
                <td class="alignCenter" rowspan="2">地址及电话</td>
                <td class="alignCenter" rowspan="2">末次月经</td>
                <td class="alignCenter" colspan="4">产前筛查疾病</td>
                <td class="alignCenter" rowspan="2">医生签名</td>
                <td class="alignCenter" rowspan="2">备注</td>
            </tr>
            <tr>
                <td class="alignCenter">地贫</td>
                <td class="alignCenter">唐氏综合症</td>
                <td class="alignCenter">神经管缺陷</td>
                <td class="alignCenter">其他</td>
            </tr>
            <tr v-for="(item,index) in tableList" :key="index">
                <td class="alignCenter mark">{{item.jlbdbh}}&nbsp;</td>
                <td class="alignCenter mark">{{$formatDate(item.checkDate)}}</td>
                <td class="alignCenter mark">{{item.name}}</td>
                <td class="alignCenter mark">{{item.age}}</td>
                <td class="alignCenter mark">{{item.telAndAddr}}</td>
                <td class="alignCenter mark">{{$formatDate(item.mcyjrq)}}</td>
                <td class="alignCenter mark">{{item.thalassemia}}</td>
                <td class="alignCenter mark">{{item.downSyndrome}}</td>
                <td class="alignCenter mark">{{item.neuralTubeDefect}}</td>
                <td class="alignCenter mark">{{item.otherDisease}}</td>
                <td class="alignCenter mark">{{item.verifier}}</td>
                <td class="alignCenter mark">{{item.memo}}</td>
            </tr>
        </table> -->
        <table>
            <tr>
                <td colspan="6" class="title" style="font-weight: bold;">
                    产前筛查登记表
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    手册编号:<span class="mark">{{report.jlbdbh}}</span>
                </td>
                <td colspan="3" style="text-align: right;">
                    检查日期:<span class="mark">{{$formatDate(report.checkDate)}}</span>
                </td>
            </tr>
        </table>
        <table border="2">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="alignCenter mark">{{report.name}}</td>
                <td class="alignCenter">年龄</td>
                <td class="alignCenter mark">{{report.age}}</td>
                <td class="alignCenter">电话</td>
                <td class="alignCenter mark">{{report.tel}}</td>
            </tr>
            <tr>
                <td class="alignCenter">地址</td>
                <td class="alignCenter mark" colspan="3">{{report.addr}}</td>
                <td class="alignCenter">末次月经</td>
                <td class="alignCenter mark">{{$formatDate(report.mcyjrq)}}</td>
            </tr>
            <tr>
                <td rowspan="4" class="alignCenter">高危筛查</td>
                <td class="alignCenter">地贫</td>
                <td colspan="4" class="mark">{{report.thalassemia}}</td>
            </tr>
            <tr>
                <td class="alignCenter">唐氏综合症</td>
                <td colspan="4" class="mark">{{report.downSyndrome}}</td>
            </tr>
            <tr>
                <td class="alignCenter">神经管缺陷</td>
                <td colspan="4" class="mark">{{report.neuralTubeDefect}}</td>
            </tr>
            <tr>
                <td class="alignCenter">其他</td>
                <td colspan="4" class="mark">{{report.otherDisease}}</td>
            </tr>
            <tr>
                <td class="alignCenter">备注</td>
                <td colspan="3" class="mark">{{report.memo}}</td>
                <td class="alignCenter">医生签名</td>
                <td class="alignCenter mark">{{report.doctorSignature}}</td>
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
                listLength:10,
                tableList:[],
                report:{}
            }
        },
        created(){
            this.report = this.reportData || {};
            // this.formatList();
        },
        methods:{
            formatList(){
                var list = [];
                var preWomanScrDiagRecList = this.reportData.preWomanScrDiagRecList;
                if(preWomanScrDiagRecList){
                    if(preWomanScrDiagRecList.length > this.listLength){
                        list = preWomanScrDiagRecList;
                    }else{
                        var CL = this.listLength - preWomanScrDiagRecList.length;
                        list = preWomanScrDiagRecList;
                        for(var i=0;i<CL;i++){
                           list.push({});
                        }
                    }
                }else{
                    for(var i=0;i<this.listLength;i++){
                       list.push({});
                    }
                }
                this.tableList = list;
            }
        }
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