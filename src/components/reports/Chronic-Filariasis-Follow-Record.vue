<template>
    <div class="report">
        <!-- 慢性丝虫病患者随访记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    慢性丝虫病患者随访记录表
                </td>
            </tr>
			<tr>
				<td colspan="6">姓名：<span class="mark">123</span></td>
				<td style="text-align: right;" colspan="2">编号：<span class="mark">123</span></td>
			</tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter" colspan="4">随访项目</td>
				<td class="alignCenter" colspan="4">
					<span class="lineBox"></span>年
					<span class="lineBox"></span>月
					<span class="lineBox"></span>日
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="4">症状</td>
				<td class="alignCenter" colspan="2">咳嗽</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">咳痰</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">呼吸困难</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">其他</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="4">体征</td>
				<td class="alignCenter" colspan="2">口唇以绀</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">哮鸣音/湿罗音</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">下肢水肿</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">其他</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="5">生活方式指导</td>
				<td class="alignCenter" colspan="2">吸烟</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="2">运动</td>
				<td colspan="2">
					<span class="lineBox"></span>次/周
				</td>
				<td colspan="2">
					<span class="lineBox"></span>分钟/次
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<span class="lineBox"></span>次/周
				</td>
				<td colspan="2">
					<span class="lineBox"></span>分钟/次
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">呼吸锻练</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">心理调整</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="4">实验室检查</td>
				<td class="alignCenter" colspan="2">血常规</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="3">其他检查</td>
				<td colspan="4" class="mark">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="4" class="mark">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="4" class="mark">&nbsp;</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="10">用药情况</td>
				<td class="alignCenter" colspan="2">药物名称1</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">用法</td>
				<td colspan="4">
					每日<span class="lineBox"></span>次
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">药物名称2</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">用法</td>
				<td colspan="4">
					每日<span class="lineBox"></span>次
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">药物名称3</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">用法</td>
				<td colspan="4">
					每日<span class="lineBox"></span>次
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">其他药物</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">用法</td>
				<td colspan="4">
					每日<span class="lineBox"></span>次
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">药物不良反应</td>
				<td colspan="4">
					1无;&nbsp;&nbsp;&nbsp;
					2有<span class="lineBox"></span>
					<span class="checkBox" style="float: right;"></span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">服药依从性</td>
				<td colspan="4">
					1规律;&nbsp;&nbsp;&nbsp;
					2间断;&nbsp;&nbsp;&nbsp;
					3不服药;&nbsp;&nbsp;&nbsp;
					<span class="checkBox" style="float: right;"></span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2" rowspan="2">转诊</td>
				<td class="alignCenter" colspan="2">原因</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">随访结束</td>
				<td colspan="4" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">下次随访时间</td>
				<td colspan="6" class="mark"></td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">随方医生签名</td>
				<td colspan="6" class="mark"></td>
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
             //console.log(this.reportData)
        },
		methods:{

		}
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
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