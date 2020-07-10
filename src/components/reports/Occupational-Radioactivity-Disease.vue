<template>
    <div class="report">
        <!-- 职业性放射性疾病报告卡 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    职业性放射性疾病报告卡
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="alignCenter">辐射工作岗位</td>
				<td class="alignCenter">放射工作年限</td>
				<td class="alignCenter" colspan="2">体检/诊断结果</td>
				<td class="alignCenter" colspan="3">处理情况</td>
			</tr>
            <tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark" colspan="2"></td>
				<td class="mark" colspan="3"></td>
			</tr>
			<tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark" colspan="2"></td>
				<td class="mark" colspan="3"></td>
			</tr>
			<tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark" colspan="2"></td>
				<td class="mark" colspan="3"></td>
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
        }
    }
</style>