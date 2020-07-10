<template>
    <div class="report">
        <!-- 尘肺病报告卡 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    尘肺病报告卡
                </td>
            </tr>
            <!-- <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span class="mark">{{reportData.bh}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    制表机关：<span class="mark">{{reportData.zbjg}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    批准机关：<span class="mark">{{reportData.pzjg}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    批准文号：<span class="mark">{{reportData.pzwh}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    有效期至：<span class="mark">{{$formatDate(reportData.yxqz)}}</span>
                </td>
            </tr> -->
            <tr>
                <td colspan="3">
                    身份证号：<span class="mark">
                        {{reportData.sfzh}}
                    </span>
                </td>
                <td colspan="3">
                    X先胸片号*：<span class="mark">
                        {{reportData.xxxpk}}
                    </span>
                </td>
                <td colspan="2">
                    表号：<span class="mark">
                        {{reportData.bh}}
                    </span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">卡片序号</td>
                <td colspan="8">
                    <span class="lineBox">
                        {{reportData.dzsheng}}
                    </span>省(自治区、直辖市)
                    <span class="lineBox">
                        {{reportData.dzshi}}
                    </span>地、市
                    <span class="lineBox">
                        {{reportData.dzxian}}
                    </span>县
                    <span class="lineBox">
                        {{reportData.dzxiang}}
                    </span>乡镇<br>
                    序号：<span class="lineBox">
                        {{reportData.kpxh}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="6">用人单位基本信息</td>
                <td colspan="4">
                    名称：<span class="mark">
                        {{reportData.yrdwmc}}
                    </span>
                </td>
                <td colspan="4">
                    编码：<span class="mark">
                        {{reportData.yrdwdm}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    通讯地址：<span class="mark">{{reportData.txdz}}</span>
                </td>
                <td colspan="4">
                    邮编：<span class="mark">{{reportData.yb}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    联系人：<span class="mark">{{reportData.lxr}}</span>
                </td>
                <td colspan="4">
                    联系电话：<span class="mark">{{reportData.lxdh}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    经济类型：<span class="mark">{{reportData.jjlx}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    行业：<span class="mark">{{reportData.hy}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    企业规模 &nbsp;
                    1大型 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.qygm == '1'">&#xe631;</i>
                        </div>&nbsp;
                    2中型 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.qygm == '2'">&#xe631;</i>
                        </div>&nbsp;
                    3小型 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.qygm == '3'">&#xe631;</i>
                        </div>&nbsp;
                    4不详 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.qygm == '4'">&#xe631;</i>
                        </div>&nbsp;
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    病人来源&nbsp;
                    体检机构 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.brly == '1'">&#xe631;</i>
                        </div>&nbsp;
                    诊断机构 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.brly == '2'">&#xe631;</i>
                        </div>&nbsp;
                    其他 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.brly == '3'">&#xe631;</i>
                        </div>&nbsp;
                </td>
                <td colspan="4">
                    姓名：<span class="mark">
                        {{reportData.xm}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    性别&nbsp;
                    1男 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.xb == '1'">&#xe631;</i>
                        </div>&nbsp;
                    2女 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.xb == '2'">&#xe631;</i>
                        </div>&nbsp;
                </td>
                <td colspan="3">
                    出生日期：<span class="mark">
                        {{$formatDate(reportData.csrq)}}
                    </span>
                </td>
                <td colspan="4">
                    开始接尘日期：<span class="mark">
                        {{$formatDate(reportData.ksjcrq)}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    统计工种：<span class="mark">{{reportData.tjgz}}</span>
                </td>
                <td colspan="3">
                    尘肺种类：<span class="mark">{{reportData.cfzl}}</span>
                </td>
                <td colspan="4">
                    实际接尘工龄：<span class="mark">{{reportData.sjjcgl}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    诊断I期：<span class="mark">{{$formatDate(reportData.zd1rq)}}</span>
                </td>
                <td colspan="3">
                    合并肺结核<br>
                    1是 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh1 == '1'">&#xe631;</i>
                        </div>&nbsp;
                    2否 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh1 == '2'">&#xe631;</i>
                        </div>&nbsp;
                </td>
                <td colspan="2" rowspan="4" style="vertical-align: text-top;">
                    报告类别<br><br>
                    1新病例 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.bglb == '1'">&#xe631;</i>
                        </div><br>
                    2死亡病例 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.bglb == '2'">&#xe631;</i>
                        </div><br>
                    3晋期病例 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.bglb == '3'">&#xe631;</i>
                        </div><br>
                    4调出病例 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.bglb == '4'">&#xe631;</i>
                        </div><br>
                    5调入病例 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.bglb == '5'">&#xe631;</i>
                        </div><br>
                    调出者：<span class="mark">
                        {{reportData.dcz}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    诊断II期：<span class="mark">{{$formatDate(reportData.zd2rq)}}</span>
                </td>
                <td colspan="3">
                    合并肺结核<br>
                    1是 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh2 == '1'">&#xe631;</i>
                        </div>&nbsp;
                    2否 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh2 == '2'">&#xe631;</i>
                        </div>&nbsp;
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    诊断III期：<span class="mark">{{$formatDate(reportData.zd3rq)}}</span>
                </td>
                <td colspan="3">
                    合并肺结核<br>
                    1是 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh3 == '1'">&#xe631;</i>
                        </div>&nbsp;
                    2否 <div class="jy">
                            <span class="checkBox"></span>
                            <i class="iconfont xz" v-if="reportData.hbfjh3 == '2'">&#xe631;</i>
                        </div>&nbsp;
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    死亡日期：<span class="mark">
                        {{$formatDate(reportData.swrq)}}
                    </span>
                </td>
                <td colspan="3">
                    死因：<span class="mark">{{reportData.sy}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="9">
                    诊断机构：<span class="mark">{{reportData.zdjg}}</span>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td>
                    报告单位：<span class="mark">{{reportData.bgdw}}</span>
                </td>
                <td>
                    单位负责人：<span class="mark">{{reportData.dwfzr}}</span>
                </td>
                <td>
                    报告人：<span class="mark">{{reportData.bgr}}</span>
                </td>
                <td>
                    报告日期：<span class="mark">{{$formatDate(reportData.bgrq)}}</span>
                </td>
            </tr>
            <tr>
                <td>
                    制表机关：<span class="mark">{{reportData.zbjg}}</span>
                </td>
                <td>
                    批准机关：<span class="mark">{{reportData.pzjg}}</span>
                </td>
                <td>
                    批准文号：<span class="mark">{{reportData.pzwh}}</span>
                </td>
                <td>
                    有效期至：<span class="mark">{{$formatDate(reportData.yxqz)}}</span>
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
            .fontBold{
                font-weight:bold;
            }
            tr{
                td{
                    .jy{
                        position: relative;
                        display: inline-block;
                        .xz{
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