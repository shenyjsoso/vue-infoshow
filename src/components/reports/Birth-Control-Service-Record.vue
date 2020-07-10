<template>
    <div class="report">
        <!-- 计划生育技术服务记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    计划生育技术服务咨询登记本
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">时间</td>
				<td class="alignCenter">姓名</td>
				<td class="alignCenter">性别</td>
				<td class="alignCenter">年龄</td>
				<td class="alignCenter">住址</td>
				<td class="alignCenter">咨询内容</td>
				<td class="alignCenter">指导</td>
				<td class="alignCenter">签名</td>
			</tr>
            <tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
			</tr>
			<tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
			</tr>
			<tr>
				<td class="mark">&nbsp;</td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
				<td class="mark"></td>
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