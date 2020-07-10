<template>
    <div class="report">
        <!-- 药敏结果表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    药敏结果表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="mark">{{report.name}}</td>
				<td class="alignCenter">性别</td>
				<td class="mark">{{report.sexname}}</td>
				<td class="alignCenter">年龄</td>
				<td class="mark">{{report.age}}</td>
				<td class="alignCenter">样品编号</td>
				<td class="mark">{{report.ypbh}}</td>
			</tr>
           <tr>
				<td class="alignCenter">科别</td>
				<td class="mark">{{report.kb}}</td>
				<td class="alignCenter">床号</td>
				<td class="mark" colspan="3">{{report.ch}}</td>
				<td class="alignCenter">送检医生</td>
				<td class="mark">{{report.sjys}}</td>
           </tr>
			<tr>
				<td class="alignCenter">序号</td>
				<td class="alignCenter" colspan="2">项目</td>
				<td class="alignCenter" colspan="2">结果</td>
				<td class="alignCenter">参考范围</td>
				<td class="alignCenter" colspan="2">提示</td>
			</tr>
			<tr v-for="(item,index) in list" :key="index">
				<td class="mark alignCenter">{{index+1}}</td>
				<td class="mark alignCenter" colspan="2">{{item.xmmc}}</td>
				<td class="mark alignCenter" colspan="2">{{item.xmjg}}</td>
				<td class="mark alignCenter">{{item.ckfw}}</td>
				<td class="mark alignCenter" colspan="2">{{item.xmts}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检验者</td>
				<td class="mark">{{report.jyz}}</td>
				<td class="alignCenter">核对者</td>
				<td class="mark">{{report.hdz}}</td>
				<td class="alignCenter">日期</td>
				<td class="mark" colspan="3">{{$formatDate(report.bgrq)}}</td>
			</tr>
			<tr>
				<td colspan="8">
					<p>结果说明：<span class="mark">{{report.jcjg}}</span></p>
					<p style="text-align: right;">（本报告签名后有效，本结果仅对该送检标本负责）</p>
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
                report:{},
                list:[]
            }
        },
        created(){
            var reportData = this.reportData;
            this.report = reportData.PersonalAllergyResult || {};
            var list = reportData.PersonalAllergyDetailses || [];
            if(list && list.length > 0){
                this.list = list;
            }else{
                this.list = [{},{},{}];
            }
            // console.log(this.reportData)
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
			.fontBold{
				font-weight:bold;
			}
            tr{
                td{
                    .jy{
                        position: relative;
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