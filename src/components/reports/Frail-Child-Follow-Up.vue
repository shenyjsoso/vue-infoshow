<template>
    <div class="report">
        <!-- 体弱儿随诊信息表 -->
        <table>
            <tr>
                <td colspan="5" class="title" style="font-weight: bold;">
                    体弱儿随诊信息表
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    登记日期：<span class="mark">{{$formatDate(reportData.jcrq)}}</span>
                </td>
				<td colspan="2" style="text-align: right;">
					乡镇：<span class="mark">{{reportData.xz}}</span>
				</td>
            </tr>
        </table>
        <table border="2">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">儿童姓名</td>
                <td class="alignCenter mark">{{reportData.xm}}</td>
                <td class="alignCenter">性别</td>
                <td class="alignCenter mark">{{reportData.sex}}</td>
                <td class="alignCenter">出生日期</td>
                <td class="alignCenter mark">{{$formatDate(reportData.csrq)}}</td>
                <td class="alignCenter">家长姓名</td>
                <td class="alignCenter mark">{{reportData.jzmc}}</td>
            </tr>
            <tr>
                <td class="alignCenter">家庭住址</td>
                <td colspan="3" class="alignCenter mark">{{reportData.jtzz}}</td>
                <td class="alignCenter">联系电话</td>
                <td colspan="3" class="alignCenter mark">{{reportData.lxdh}}</td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr class="topTr">
                <td colspan="8">第一次随访情况</td>
            </tr>
            <tr>
                <td class="alignCenter">随访日期</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{$formatDate(reportData.fszrq)}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">症状及体征</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.fzz}}/{{reportData.ftz}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">处理意见</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.fcljzdyj}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">结论</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 痊愈
                        <i class="iconfont xz" v-if="reportData.fqy == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 好转
                        <i class="iconfont xz" v-if="reportData.fhz == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 转诊
                        <i class="iconfont xz" v-if="reportData.fzzhen == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 随访
                        <i class="iconfont xz" v-if="reportData.fsf == '是'">&#xe631;</i>
                    </span>
                </td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr class="topTr">
                <td colspan="8">第二次随访情况</td>
            </tr>
            <tr>
                <td class="alignCenter">随访日期</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{$formatDate(reportData.sszrq)}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">症状及体征</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.szz}}/{{reportData.stz}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">治疗指导</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.scljzdyj}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">结论</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 痊愈
                        <i class="iconfont xz" v-if="reportData.sqy == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 好转
                        <i class="iconfont xz" v-if="reportData.shz == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 转诊
                        <i class="iconfont xz" v-if="reportData.szzhen == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 随访
                        <i class="iconfont xz" v-if="reportData.ssf == '是'">&#xe631;</i>
                    </span>
                </td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr class="topTr">
                <td colspan="8">第三次随访情况</td>
            </tr>
            <tr>
                <td class="alignCenter">随访日期</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{$formatDate(reportData.tszrq)}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">症状及体征</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.tzz}}/{{reportData.ttz}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">治疗指导</td>
                <td colspan="7" class="mark">
                    <span style="padding-left: 40px;">{{reportData.tzlzd}}</span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">结论</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 转诊
                        <i class="iconfont xz" v-if="reportData.tzzhen == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 随访
                        <i class="iconfont xz" v-if="reportData.tsf == '是'">&#xe631;</i>
                    </span>
                </td>
            </tr>
        </table>
        <table border="2" style="margin-top: 24px;">
            <colgroup>
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col style="width: 108px;">
                <col>
                <col>
            </colgroup>
            <tr>
                <td class="alignCenter">备注</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 治愈
                        <i class="iconfont xz" v-if="reportData.zy == '是'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 死亡
                        <i class="iconfont xz" v-if="reportData.sw == '是'">&#xe631;</i>
                    </span>
                </td>
            </tr>
        </table>

        <!-- <table>
            <tr>
                <td colspan="8"
                    class="title"
                    style="font-weight: bold;">
                    体弱儿随诊信息表
                </td>
            </tr>
            <tr>
                <td colspan="8" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">乡镇：</span>
                    <span class="mark alignCenter" v-if="reportData.personalWeakChildVisitInfo && reportData.personalWeakChildVisitInfo.length>0">
                        {{reportData.personalWeakChildVisitInfo[0].xz}}
                    </span>
                    <span v-else></span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td rowspan="3" class="alignCenter">检查日期</td>
                <td rowspan="3" class="alignCenter">儿童姓名</td>
                <td rowspan="3" class="alignCenter">性别</td>
                <td rowspan="3" class="alignCenter">出生日期</td>
                <td rowspan="3" class="alignCenter">家长名称</td>
                <td rowspan="3" class="alignCenter">家庭住址</td>
                <td rowspan="3" class="alignCenter">联系电话</td>
                <td colspan="19" class="alignCenter">随访情况</td>
                <td colspan="2" class="alignCenter">备注</td>
            </tr>
            <tr>
                <td colspan="7" class="alignCenter">第1次</td>
                <td colspan="7" class="alignCenter">第2次</td>
                <td colspan="5" class="alignCenter">第3次</td>
                <td rowspan="2" class="alignCenter">治愈</td>
                <td rowspan="2" class="alignCenter">死亡</td>
            </tr>
            <tr>
                <td class="alignCenter">日期</td>
                <td class="alignCenter">症状及体征</td>
                <td class="alignCenter">处理意见</td>
                <td class="alignCenter">痊愈</td>
                <td class="alignCenter">好转</td>
                <td class="alignCenter">转诊</td>
                <td class="alignCenter">随访</td>

                <td class="alignCenter">日期</td>
                <td class="alignCenter">症状及体征</td>
                <td class="alignCenter">处理意见</td>
                <td class="alignCenter">痊愈</td>
                <td class="alignCenter">好转</td>
                <td class="alignCenter">转诊</td>
                <td class="alignCenter">随访</td>

                <td class="alignCenter">日期</td>
                <td class="alignCenter">症状及体征</td>
                <td class="alignCenter">治疗指导</td>
                <td class="alignCenter">转诊</td>
                <td class="alignCenter">随访</td>
            </tr>
            <tr v-for="(item,index) in tableData" :key="index">
                <td class="mark alignCenter">&nbsp;{{$formatDate(item.jcrq)}}</td>
                <td class="mark alignCenter">{{item.xm}}</td>
                <td class="mark alignCenter">{{item.sex}}</td>
                <td class="mark alignCenter">{{$formatDate(item.csrq)}}</td>
                <td class="mark alignCenter">{{item.jzmc}}</td>
                <td class="mark alignCenter">{{item.jtzz}}</td>
                <td class="mark alignCenter">{{item.lxdh}}</td>

                <td class="mark alignCenter">{{$formatDate(item.fszrq)}}</td>
                <td class="mark alignCenter">
                    {{item.fzz}}/{{item.ftz}}
                </td>
                <td class="mark alignCenter">{{item.fcljzdyj}}</td>
                <td class="mark alignCenter">{{item.fqy}}</td>
                <td class="mark alignCenter">{{item.fhz}}</td>
                <td class="mark alignCenter">{{item.fzzhen}}</td>
                <td class="mark alignCenter">{{item.fsf}}</td>

                <td class="mark alignCenter">{{$formatDate(item.sszrq)}}</td>
                <td class="mark alignCenter">
                    {{item.szz}}/{{item.stz}}
                </td>
                <td class="mark alignCenter">{{item.scljzdyj}}</td>
                <td class="mark alignCenter">{{item.sqy}}</td>
                <td class="mark alignCenter">{{item.shz}}</td>
                <td class="mark alignCenter">{{item.szzhen}}</td>
                <td class="mark alignCenter">{{item.ssf}}</td>

                <td class="mark alignCenter">{{$formatDate(item.tszrq)}}</td>
                <td class="mark alignCenter">
                    {{item.tzz}}/{{item.ttz}}
                </td>
                <td class="mark alignCenter">{{item.tzlzd}}</td>
                <td class="mark alignCenter">{{item.tzzhen}}</td>
                <td class="mark alignCenter">{{item.tsf}}</td>

                <td class="mark alignCenter">{{item.zy}}</td>
                <td class="mark alignCenter">{{item.sw}}</td>
            </tr>
        </table> -->
    </div>
</template>
<script>
    export default{
        props:{
            reportData:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{

            }
        },
        created(){

        },
        methods:{
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        overflow-x: auto;
        table{
            width: 2000px;
        }
    }
</style>