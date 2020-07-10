<template>
    <div class="report">
        <!-- 婚前医学检查 -->
        <table>
            <tr>
                <td colspan="8" class="title">婚前医学检查证明</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="4" class="alignCenter">
                    <span class="lineBox">{{reportData.hjdssmc}}</span>省
                    <span class="lineBox">{{reportData.hjddsmc}}</span>市
                    <span class="lineBox">{{reportData.hjdqxmc}}</span>区(县)
                    <span class="lineBox">{{reportData.hjdjdmc}}</span>街道(乡)
                    编号：<span class="lineBox">{{reportData.hqbjfwjlbdh}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">姓名</td>
                <td class="mark">{{reportData.name}}</td>
                <td class="alignCenter">出生日期</td>
                <td class="mark">{{$formatDate(reportData.birthday)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">性别</td>
                <td class="mark">{{reportData.cnameSex}}</td>
                <td class="alignCenter">民族</td>
                <td class="mark">{{reportData.mzmc}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">身份证号</td>
                <td colspan="2" class="mark">{{reportData.idcard}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">单位或职业</td>
                <td colspan="2" class="mark">{{reportData.dwhzy}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">现住址</td>
                <td colspan="2" class="mark">{{reportData.xzz}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">对方姓名</td>
                <td colspan="2" class="mark">{{reportData.dfname}}</td>
            </tr>
            <tr>
                <td colspan="4">
                    直系、三代内旁系血亲关系
                    <span class="checkBox">{{reportData.zxsdnpxxqgx}}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    有
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    婚前医学检查结果：
                    <span style="color:rgb(25,90,255);">{{reportData.hqexjcjg}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div style="float: left;">医学意见：</div>
                    <div style="vertical-align: top;padding-left: 80px;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            ①建议不宜结婚
                            <i class="iconfont xz" v-if="reportData.hqyxyjdm == '1'">&#xe631;</i>
                        </div>
                        <div class="jy">
                            <span class="checkBox"></span>
                            ②建议不宜生育
                            <i class="iconfont xz" v-if="reportData.hqyxyjdm == '2'">&#xe631;</i>
                        </div>
                        <div class="jy">
                            <span class="checkBox"></span>
                            ③建议暂缓结婚
                            <i class="iconfont xz" v-if="reportData.hqyxyjdm == '3'">&#xe631;</i>
                        </div>
                        <div class="jy">
                            <span class="checkBox"></span>
                            ④未发现医学上不宜结婚的情况
                            <i class="iconfont xz" v-if="reportData.hqyxyjdm == '4'">&#xe631;</i>
                        </div>
                        <div class="jy">
                            <span class="checkBox"></span>
                            ⑤建议采取医学措施，尊重受检者意愿
                            <i class="iconfont xz" v-if="reportData.hqyxyjdm == '5'">&#xe631;</i>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">主检医师</td>
                <td class="mark">{{reportData.zjysxm}}</td>
                <td class="alignCenter">检查单位</td>
                <td class="mark">{{reportData.hqjcjgmc}}</td>
            </tr>
            <tr>
                <td colspan="4">
                    注：
                    <div style="display: inline-block;vertical-align: top;">
                        1、本证明有限期为三个月<br>
                        2、对上述结果如有异议，可申请医学技术鉴定
                    </div>
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
            width: 800px;
            tr{
                td{
                    font-family: FZSSJW;
                    .jy{
                        position: relative;
                        display: inline-block;
                        font-family: FZSSJW;
                        margin-right: 20px;
                        .xz{
                            font-family: FZSSJW;
                            font-size: 24px;
                            font-weight: bold;
                            color:rgb(25,90,255);
                            position: absolute;
                            left: -2px;
                            top: -2px;
                        }
                    }
                }
            }
        }
    }
</style>