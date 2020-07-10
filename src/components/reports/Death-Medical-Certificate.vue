<template>
    <div class="report">
        <!-- 死亡医学证明 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    死亡医学证明
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter" colspan="2">医学证明编号</td>
				<td class="mark" colspan="2">
                    {{reportData.jlbh}}
                </td>
				<td class="alignCenter" colspan="2">健康档案标识号</td>
				<td class="mark" colspan="2">
                    {{reportData.phrid}}
                </td>
			</tr>
            <tr>
            	<td class="alignCenter" colspan="2">患者姓名</td>
            	<td class="mark">{{reportData.xm}}</td>
            	<td class="alignCenter">身份证号</td>
            	<td class="mark" colspan="2">{{reportData.sfzjhm}}</td>
				<td class="alignCenter">出生日期</td>
				<td class="mark">{{$formatDate(reportData.csrq)}}</td>
            </tr>
			<tr>
				<td class="alignCenter" colspan="2">性别</td>
				<td class="mark">{{reportData.xb}}</td>
				<td class="alignCenter">婚姻状况</td>
				<td class="mark" colspan="2">{{reportData.hyzk}}</td>
				<td class="alignCenter">民族类别</td>
				<td class="mark">{{reportData.mzlb}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">工作单位名称</td>
				<td class="mark" colspan="2">{{reportData.gzdwmc}}</td>
				<td class="alignCenter" colspan="2">工作单位联系电话</td>
				<td class="mark" colspan="2">{{reportData.gzdwlxdh}}</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">地址</td>
				<td class="mark">{{reportData.dzszzqzxs}}</td>
				<td class="alignCenter" colspan="2">省（自治区、直辖市）</td>
				<td class="mark">{{reportData.dzsdq}}</td>
				<td class="alignCenter">市（地区）</td>
				<td class="mark">{{reportData.dzxq}}</td>
				<td class="alignCenter">区（县）</td>
			</tr>
			<tr>
				<td class="mark">{{reportData.dzxzjdbsc}}</td>
				<td class="alignCenter" colspan="2">街道（乡、镇）</td>
				<td class="mark">{{reportData.dzcjlnd}}</td>
				<td class="alignCenter">路(村、街、弄)</td>
				<td class="mark">{{reportData.dzmphm}}</td>
				<td class="alignCenter">号</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">现住址</td>
				<td class="mark">{{reportData.xzzsheng}}</td>
				<td class="alignCenter" colspan="2">省（自治区、直辖市）</td>
				<td class="mark">{{reportData.xzzshi}}</td>
				<td class="alignCenter">市（地区）</td>
				<td class="mark">{{reportData.xzzqu}}</td>
				<td class="alignCenter">区（县）</td>
			</tr>
			<tr>
				<td class="mark">{{reportData.xzzjiedao}}</td>
				<td class="alignCenter" colspan="2">街道（乡、镇）</td>
				<td class="mark">{{reportData.xzzlu}}</td>
				<td class="alignCenter">路(村、街、弄)</td>
				<td class="mark">{{reportData.xzzhao}}</td>
				<td class="alignCenter">号</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">文化程度</td>
				<td class="mark" colspan="2">{{reportData.whcd}}</td>
				<td class="alignCenter" colspan="2">职业类别</td>
				<td class="mark" colspan="2">{{reportData.cylb}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">家人联系电话</td>
				<td class="mark" colspan="2">{{reportData.jrlxdh}}</td>
				<td class="alignCenter" colspan="2">家人姓名</td>
				<td class="mark" colspan="2">{{reportData.jrxm}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">死亡日期</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.swrqsj)}}</td>
				<td class="alignCenter" colspan="2">死亡地点类别</td>
				<td class="mark" colspan="2">{{reportData.swddlb}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">死亡医院</td>
				<td class="mark" colspan="2">{{reportData.swyy}}</td>
				<td class="alignCenter" colspan="2">死亡原因名称</td>
				<td class="mark" colspan="2">{{reportData.swddmc}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">发病到死亡时长</td>
				<td class="mark" colspan="2">{{reportData.fbdswsc}}</td>
				<td class="alignCenter" colspan="2">疾病的诊断状态类型名称</td>
				<td class="mark" colspan="2">{{reportData.jbdzdztlx}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">最高诊断机构级别名称</td>
				<td class="mark" colspan="2">{{reportData.zgzdjgjbmc}}</td>
				<td class="alignCenter" colspan="2">述疾病的最好诊断依据名称</td>
				<td class="mark" colspan="2">{{reportData.sjbdzhzdyjmc}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">根本死亡原因名称</td>
				<td class="mark" colspan="2">{{reportData.gbswyymc}}</td>
				<td class="alignCenter" colspan="2">填报日期</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.createdate)}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">填报人姓名</td>
				<td class="mark" colspan="2">{{reportData.createuser}}</td>
				<td class="alignCenter" colspan="2">填报机构名称</td>
				<td class="mark" colspan="2">{{reportData.tbjgmc}}</td>
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
        }
    }
</style>