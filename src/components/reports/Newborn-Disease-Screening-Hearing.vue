<template>
    <div class="report">
        <!-- 新生儿疾病听力筛查记录表 -->
        <table>
            <tr>
                <td colspan="5" class="title" style="font-weight: bold;">
                    新生儿疾病听力筛查记录表
                </td>
            </tr>
            <tr>
                <td>
                    编号:<span class="mark">{{reportData.residentsHealthFileNo}}</span>
                </td>
                <td colspan="2">
                    填卡单位:<span class="mark">{{reportData.inspectionUnit}}</span>
                </td>
                <td>
                    检查者:<span class="mark">{{reportData.checkerSignature}}</span>
                </td>
                <td>
                    报告时间:<span class="mark">{{$formatDate(reportData.lastmodifytime)}}</span>
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
                <td class="alignCenter">家长姓名</td>
                <td class="alignCenter mark">{{reportData.parentName}}</td>
                <td class="alignCenter">婴儿姓名</td>
                <td class="alignCenter mark">{{reportData.newbornName}}</td>
                <td class="alignCenter">性别</td>
                <td class="alignCenter mark">{{reportData.xb}}</td>
                <td class="alignCenter">出生日期</td>
                <td class="alignCenter mark">{{$formatDate(reportData.csrq)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">初查日期</td>
                <td colspan="3" class="alignCenter mark">{{$formatDate(reportData.initialScreeningDate)}}</td>
                <td class="alignCenter">复查日期</td>
                <td colspan="3" class="alignCenter mark">{{$formatDate(reportData.reviewDate)}}</td>
            </tr>
            <tr>
                <td class="alignCenter">检查方法</td>
                <td colspan="7">
                    <span class="jy" style="margin-left: 20px;">
                        <span class="checkBox"></span> 1.耳声发射（TEOAE）
                        <i class="iconfont xz" v-if="reportData.jcff == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 65px;">
                        <span class="checkBox"></span> 2.快速脑干诱发电位（AABR）
                        <i class="iconfont xz" v-if="reportData.jcff == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter" rowspan="2">检查结果</td>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">右耳</span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 1.通过
                        <i class="iconfont xz" v-if="reportData.jcjgye == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 2.未通过
                        <i class="iconfont xz" v-if="reportData.jcjgye == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="7">
                    <span style="display: inline-block;margin-left: 20px;">左耳</span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 1.通过
                        <i class="iconfont xz" v-if="reportData.jcjgze == '1'">&#xe631;</i>
                    </span>
                    <span class="jy" style="margin-left: 40px;">
                        <span class="checkBox"></span> 2.未通过
                        <i class="iconfont xz" v-if="reportData.jcjgze == '2'">&#xe631;</i>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">意见</td>
                <td colspan="7" class="mark">
                    {{reportData.bz}}
                </td>
            </tr>
        </table>
        <!-- <div class="rep-box">
            <h2 class="title">新生儿疾病听力筛查记录表</h2>
            <div class="xt">
                <label>检 查 单 位：</label>
                <span class="text" style="width: 245px;text-align: right;padding-right: 5px;">&nbsp;{{reportData.inspectionUnit}}</span>
                <label>编 号：</label>
                <span class="text">&nbsp;{{reportData.lbbh}}</span>
            </div>
            <div class="xt">
                <label>家 长 姓 名：</label>
                <span class="text">&nbsp;{{reportData.parentName}}</span>
            </div>
            <div class="xt">
                <label>婴 儿 姓 名：</label>
                <span class="text" style="width: 120px;">&nbsp;{{reportData.newbornName}}</span>
                <label>性 别：</label>
                <span class="text" style="width: 80px;">&nbsp;{{reportData.xb}}</span>
                <label>出 生：</label>
                <span class="text" style="width: 50px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.csrq,'year')}}</span>
                <label>年</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.csrq,'month')}}</span>
                <label>月</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.csrq,'day')}}</span>
                <label>日</label>
            </div>
            <div class="xt">
                <label>初 查 日 期：</label>
                <span class="text" style="width: 40px;padding-right: 5px;">&nbsp;{{getDateByType(reportData.initialScreeningDate,'year')}}</span>
                <label>年</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.initialScreeningDate,'month')}}</span>
                <label>月</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.initialScreeningDate,'day')}}</span>
                <label>日</label>
            </div>
            <div class="xt">
                <label>复 查 日 期：</label>
                <span class="text" style="width: 40px;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reviewDate,'year')}}</span>
                <label>年</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reviewDate,'month')}}</span>
                <label>月</label>
                <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reviewDate,'day')}}</span>
                <label>日</label>
            </div>
            <div class="xt">
                <label>检 查 方 法：</label>
                <div>
                    <div class="condition">
                        <i class="iconfont xz" v-if="reportData.jcff === '1'">&#xe631;</i>
                        1、耳声发射（TEOAE）
                    </div>
                    <div class="condition">
                        <i class="iconfont xz" v-if="reportData.jcff === '2'">&#xe631;</i>
                        2、快速脑干诱发电位（AABR）
                    </div>
                </div>
            </div>
            <div class="xt">
                <label>检 查 结 果：</label>
                <div>
                    <div class="pass">
                        右耳
                        <span>
                            <i class="iconfont xz" v-if="reportData.jcjgye === '1'">&#xe631;</i>
                            （1）通过
                        </span>
                        <span>
                            <i class="iconfont xz" v-if="reportData.jcjgye === '2'">&#xe631;</i>
                            （2）未通过
                        </span>
                    </div>
                    <div class="pass">
                        左耳
                        <span>
                            <i class="iconfont xz" v-if="reportData.jcjgze === '1'">&#xe631;</i>
                            （1）通过
                        </span>
                        <span>
                            <i class="iconfont xz" v-if="reportData.jcjgze === '2'">&#xe631;</i>
                            （2）未通过
                        </span>
                    </div>
                </div>
            </div>
            <div class="xt">
                <label>意 见：</label>
            </div>
            <div class="xt">
                <p style="color: rgb(25,90,255);">
                    &nbsp;&nbsp;&nbsp;&nbsp;{{reportData.bz}}
                </p>
            </div>
            <div class="xt" style="margin-top: 40px;">
                <div style="width:100%;text-align: right;">
                    <span style="display: inline-block;">检查者签名：</span>
                    <span class="text" style="width: 148px;display: inline-block;text-align: left;">{{reportData.checkerSignature}}</span>
                </div>
            </div>
            <div class="xt">
                <div style="width:100%;text-align: right;">
                    <span style="display: inline-block;">报告时间：</span>
                    <span class="text" style="width: 40px;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reportTime,'year')}}</span>
                    <label>年</label>
                    <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reportTime,'month')}}</span>
                    <label>月</label>
                    <span class="text" style="width: 40px;text-align: right;padding-right: 5px;">&nbsp;{{getDateByType(reportData.reportTime,'day')}}</span>
                    <label>日</label>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import {getDateFormatByType} from '../../assets/utils.js';
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
            getDateByType(date,type){
                return getDateFormatByType(date,type);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    // .report{
    //     .rep-box{
    //         width: 720px;
    //         margin: 0 auto;
    //         box-sizing: border-box;
    //         padding: 40px 60px;
    //         border: 1px solid #000;
    //         .title{
    //             text-align: center;
    //             margin-bottom: 40px;
    //         }
    //         .xt{
    //             width: 100%;
    //             line-height: 44px;
    //             display: flex;
    //             font-weight: bold;
    //             p{
    //                 line-height: 24px;
    //                 margin-bottom: 10px;
    //             }
    //             .text{
    //                 color:rgb(25,90,255);
    //             }
    //             .condition{
    //                 position: relative;
    //                 .xz{
    //                     font-size: 30px;
    //                     color:rgb(25,90,255);
    //                     position: absolute;
    //                     left: -10px;
    //                 }
    //             }
    //             .pass{
    //                 span{
    //                     position: relative;
    //                     .xz{
    //                         font-size: 30px;
    //                         color:rgb(25,90,255);
    //                         position: absolute;
    //                         left: 5px;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
</style>