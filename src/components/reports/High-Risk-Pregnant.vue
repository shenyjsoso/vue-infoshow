<template>
    <div class="report">
        <!-- 高危孕产妇专案管理登记表（高危孕产妇随访登记表） -->
        <table>
            <tr>
                <td colspan="18"
                    class="title"
                    style="font-weight: bold;">
                    {{reportData.jcjgdm}}高危孕产妇管理信息表
                </td>
            </tr>
        </table>
        <table border="2">
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark">{{reportData.name}}</td>
                <td class="alignCenter">年龄</td>
                <td class="mark">{{getAge(reportData.birthday,reportData.gwpfrq)}}</td>
                <td class="alignCenter">民族</td>
                <td class="mark">{{$aadata.nation[reportData.mzdm + '']}}</td>
                <td class="alignCenter">文化程度</td>
                <td class="mark">{{$aadata.whcd[reportData.whcddm + '']}}</td>
            </tr>
            <tr>
                <td class="alignCenter">家庭地址</td>
                <td class="mark" colspan="5">{{getNotNull(reportData.xzdzshen)+getNotNull(reportData.xzdzshi)+getNotNull(reportData.xzdzqu)+getNotNull(reportData.xzdzxiang)+getNotNull(reportData.xzdzcun)+getNotNull(reportData.xzdzmphm)}}</td>
                <td class="alignCenter">联系电话</td>
                <td class="mark">{{reportData.sjhm}}</td>
            </tr>
            <tr>
                <td class="alignCenter">孕次</td>
                <td class="mark">{{reportData.yc}}</td>
                <td class="alignCenter">产次</td>
                <td class="mark">{{reportData.cc}}</td>
                <td class="alignCenter">高危评分</td>
                <td class="mark">{{reportData.yfgwpfz}}</td>
                <td class="alignCenter">评分日期</td>
                <td class="mark">{{$formatDate(reportData.cczdrq)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">高危因素</td>
                <td class="mark" colspan="7">{{$aadata.ycgw[reportData.gwysxq + '']}}</td>
            </tr>
            <tr>
                <td class="alignCenter">处理及指导意见</td>
                <td class="mark" colspan="7">{{reportData.gawycfchzdyj}}</td>
            </tr>
            <tr>
                <td class="alignCenter">指导者</td>
                <td class="mark" colspan="7">{{reportData.jcysxm}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    import {jsGetAge} from '../../assets/utils.js'
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
            getAge(b,d){
                return jsGetAge(b,d);
            },
            getNotNull(s){
                if(s){
                    return s;
                }else{
                    return '';
                }
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