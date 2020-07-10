<template>
    <div class="report">
        <!-- 检查申请记录表 -->
        <table>
            <tr>
                <td colspan="6" class="title" style="font-weight: bold;">
                    检查申请记录表
                </td>
            </tr>
            <!-- 1:门诊，2:急诊，3:住院，4:体检，number  opEmHpExMark-->
            <tr>
                <td style="text-align: right;">门诊号：</td>
                <td class="mark">{{reportData.opEmHpExMark && reportData.opEmHpExMark != 3?reportData.opEmHpExNo:''}}</td>
                <td style="text-align: right;">住院号：</td>
                <td class="mark">{{reportData.opEmHpExMark == 3?reportData.opEmHpExNo:''}}</td>
                <td style="text-align: right;">编号：</td>
                <td class="mark">{{reportData.bh}}</td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">患者姓名</td>
				<td class="mark">{{reportData.name}}</td>
				<td class="alignCenter">性别</td>
				<td class="mark">{{reportData.sexName}}</td>
				<td class="alignCenter">年龄</td>
				<td class="mark">{{reportData.age}}</td>
				<td class="alignCenter">科别</td>
				<td class="mark">{{reportData.kb}}</td>
				<td class="alignCenter">床号</td>
				<td class="mark">{{reportData.ch}}</td>
			</tr>
			<tr>
				<td class="alignCenter">主诉</td>
				<td class="mark" colspan="9">{{reportData.zs}}</td>
			</tr>
            <tr>
            	<td class="alignCenter">查体</td>
            	<td class="mark" colspan="9">{{reportData.ct}}</td>
            </tr>
			<tr>
				<td class="alignCenter">辅助检查结果</td>
				<td class="mark" colspan="9">{{reportData.fzjcjg}}</td>
			</tr>
			<tr>
				<td class="alignCenter">诊断</td>
				<td class="mark" colspan="9">{{reportData.zd}}</td>
			</tr>
			<tr>
				<td class="alignCenter">检查部位项目</td>
				<td class="mark" colspan="9">{{reportData.projName}}</td>
			</tr>
			<tr>
				<td colspan="10" style="text-align: right;">
					申请医师：<span class="lineBox">{{reportData.appDocName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.applyDt,'year')}}</span>年
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.applyDt,'month')}}</span>月
					<span class="lineBox alignCenter">{{$getDateFormatByType(reportData.applyDt,'day')}}</span>日
				</td>
			</tr>
			<tr>
				<td class="alignCenter">注意事项</td>
				<td colspan="9">
					 1、请禁食8小时以上做胃镜、肝/胆/脾/胰腺超声检查，盆腔及泌尿系超声检查前请憋尿。<br />
					 2、因透视、DR、CT等放射检查对人体（尤其是儿童及孕妇）可造成一定的放射性损伤，故育龄期女性患者请及时告知医生您是否怀孕。
					 如确因病情需要做放射检查前，请患者及家属慎重考虑同意后签字（注：危重急诊患者及三无患者因情况特殊免签字）
					 <span class="lineBox">{{reportData.jsqz}}</span>。<br />
					 3、为了我们能及时与您保持联系，请自愿告知您的联系电话：<span class="lineBox">{{reportData.hzlxdh}}</span>。
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
            width: 960px;
			.fontBold{
				font-weight:bold;
			}
        }
    }
</style>