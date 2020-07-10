<template>
    <div class="report">
        <!-- 新生儿疾病筛查记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    新生儿疾病筛查记录表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td rowspan="2" class="alignCenter">标本编号</td>
                <td rowspan="2" class="alignCenter">采血时间</td>
                <td rowspan="2" class="alignCenter">母亲姓名</td>
                <td rowspan="2" class="alignCenter">出生时间</td>
                <td rowspan="2" class="alignCenter">通讯地址及电话</td>
                <td rowspan="2" class="alignCenter">送检员签字</td>
                <td class="alignCenter" colspan="3">检查结果</td>
                <td rowspan="2" class="alignCenter">取回报告时间及签名</td>
                <td rowspan="2" class="alignCenter">备注</td>
            </tr>
            <tr>
                <td class="alignCenter">CAH</td>
                <td class="alignCenter">CH</td>
                <td class="alignCenter">PKU</td>
            </tr>
            <tr v-for="(item,index) in tableList" :key="index">
                <td class="mark">{{item.bbbh}}&nbsp;</td>
                <td class="mark">{{$formatDate(item.cxrqsj,'yyyy-MM-dd hh:mm')}}</td>
                <td class="mark">{{item.mqxm}}</td>
                <td class="mark">{{$formatDate(item.csrqsj)}}</td>
                <td class="mark">{{item.addressAndPhone}}</td>
                <td class="mark">{{item.checkSign}}</td>
                <td class="mark">{{item.checkResultCAH}}</td>
                <td class="mark">{{item.checkResultCH}}</td>
                <td class="mark">{{item.checkResultPKU}}</td>
                <td class="mark">{{item.getreportTimeAndSign}}</td>
                <td class="mark">{{item.remarks}}</td>
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
                tableList:[],
                normalLength:10
            }
        },
        created(){
            this.getTableList();
        },
        methods:{
            getTableList(){
                var list = [];
                var data = this.reportData.XSEJBSCJL;
                if(data && data.length>0){
                    list = data;
                    if(data.length < this.normalLength){
                        var otherLength = this.normalLength - data.length;
                        for(var i=0;i<otherLength;i++){
                            list.push({});
                        }
                    }
                }else{
                    for(var i=0;i<this.normalLength;i++){
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
            width: 960px;
        }
    }
</style>