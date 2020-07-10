<template>
    <div class="report">
        <!-- 住院登记 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    住院登记
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="mark" colspan="2">{{reportData.de020103900}}</td>
				<td class="alignCenter">家长姓名</td>
				<td colspan="4">
					<span class="lineBox">{{reportData.jzxm}}</span>（未满十四周岁的患者需填写）
				</td>
				<td class="alignCenter">性别</td>
				<td colspan="2">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.男&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ap020110201=='男'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.女&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ap020110201=='女'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">住院号</td>
				<td class="mark">{{reportData.de010001400}}</td>
			</tr>
			<tr>
				<td class="alignCenter">民族</td>
				<td colspan="2">
					<span class="lineBox">{{reportData.mz}}</span>（注：非汉族要写此项）
				</td>
				<td class="alignCenter">出生日期</td>
				<td colspan="4">
					<span class="lineBox">{{$formatDate(reportData.de020100501,'yyyy')}}</span>年
					<span class="lineBox">{{$formatDate(reportData.de020100501,'MM')}}</span>月
					<span class="lineBox">{{$formatDate(reportData.de020100501,'dd')}}</span>日
				</td>
				<td class="alignCenter">国籍</td>
				<td class="mark" colspan="2">{{reportData.gj}}</td>
				<td class="alignCenter">电话</td>
				<td class="mark">{{reportData.dh}}</td>
			</tr>
			<tr>
				<td class="alignCenter">年龄</td>
				<td class="mark" colspan="2">{{reportData.de020103200}}</td>
				<td class="alignCenter">身份证号</td>
				<td class="mark" colspan="4">{{reportData.sfzh}}</td>
				<td class="alignCenter">婚姻状况</td>
				<td class="mark" colspan="2">{{reportData.ap020100600}}</td>
				<td class="alignCenter">职业</td>
				<td class="mark">{{reportData.zy}}</td>
			</tr>
			<tr>
				<td class="alignCenter">国籍</td>
				<td colspan="2">
					<span class="lineBox"><span v-if="reportData.gj!='中国'">{{reportData.gj}}</span></span>（注：非中国籍要写此项）
				</td>
				<td class="alignCenter">籍贯</td>
				<td colspan="4">
					<span class="lineBox">{{reportData.jgsheng}}</span>省（区、市）
					<span class="lineBox">{{reportData.jgshi}}</span>市
				</td>
				<td class="alignCenter">出生地</td>
				<td colspan="4">
					<span class="lineBox">{{reportData.csdsheng}}</span>省（区、市）
					<span class="lineBox">{{reportData.csdshi}}</span>市
					<span class="lineBox">{{reportData.csdxian}}</span>县
				</td>
			</tr>
			<tr>
				<td class="alignCenter">现住址</td>
				<td colspan="7">
					<span class="lineBox">{{reportData.xzzsheng}}</span>省
					<span class="lineBox">{{reportData.xzzshi}}</span>市
					<span class="lineBox">{{reportData.xzzxian}}</span>县（区）
					<span class="lineBox">{{reportData.xzzqt}}</span>
				</td>
				<td class="alignCenter">邮编</td>
				<td colspan="4" class="mark">{{reportData.xzzyb}}</td>
			</tr>
			<tr>
				<td class="alignCenter">户口住址</td>
				<td colspan="7">
					<span class="lineBox">{{reportData.hkdzsheng}}</span>省
					<span class="lineBox">{{reportData.hkdzshi}}</span>市
					<span class="lineBox">{{reportData.hkdzxian}}</span>县（区）
					<span class="lineBox">{{reportData.hkdzqt}}</span>
				</td>
				<td class="alignCenter">邮编</td>
				<td colspan="4" class="mark">{{reportData.hkdzyb}}</td>
			</tr>
			<tr>
				<td class="alignCenter">工作单位及地址</td>
				<td colspan="7" class="mark">{{reportData.gzdw}};{{reportData.gzdwdz}}</td>
				<td class="alignCenter">单位电话</td>
				<td colspan="4" class="mark">{{reportData.dwdh}}</td>
			</tr>
			<tr>
				<td class="alignCenter">联系人姓名</td>
				<td class="mark" colspan="2">{{reportData.lxrxm}}</td>
				<td class="alignCenter">关系</td>
				<td class="mark">{{reportData.lxrgx}}</td>
				<td class="alignCenter">地址</td>
				<td class="mark" colspan="4">{{reportData.lxrdz}}</td>
				<td class="alignCenter">电话</td>
				<td class="mark" colspan="2">{{reportData.lxtdh}}</td>
			</tr>
			<tr>
				<td colspan="13">
					*本人确保以上情况真实可靠，确认签名：
					<span class="lineBox">{{reportData.brqm}}</span>
					（家属签名：<span class="lineBox">{{reportData.jsqm}}</span>
					关系：<span class="lineBox">{{reportData.bryjsgx}}</span>）
				</td>
			</tr>
			<tr>
				<td class="alignCenter">入院日期</td>
				<td colspan="7">
					<span class="lineBox">{{$formatDate(reportData.inDate,'yyyy')}}</span>年
					<span class="lineBox">{{$formatDate(reportData.inDate,'MM')}}</span>月
					<span class="lineBox">{{$formatDate(reportData.inDate,'dd')}}</span>日
				</td>
				<td class="alignCenter">入院科室</td>
				<td class="mark" colspan="4">{{reportData.ap081002601}}</td>
			</tr>
			<tr>
				<td class="alignCenter">门（急）诊诊断</td>
				<td class="mark" colspan="7">{{reportData.mjzzd}}</td>
				<td class="alignCenter">收入院医师</td>
				<td class="mark" colspan="4">{{reportData.ap020103929}}</td>
			</tr>
			<tr>
				<td class="alignCenter">押金</td>
				<td class="mark" colspan="7">{{reportData.yj}}</td>
				<td class="alignCenter">备注</td>
				<td class="mark" colspan="4">{{reportData.bz}}</td>
			</tr>
			<tr>
				<td colspan="13">
					提示：入院时患者应当使用真实姓名，如果不使用真实姓名，您就放弃了享受真实姓名的有关权益，也将自行
					承担由此引发的不良后果。
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

	.report {
		table {
			tr {
				td {
					.jy {
						position: relative;

						.xz {
							font-size: 24px;
							font-weight: bold;
							color: rgb(25, 90, 255);
							position: absolute;
							left: -2px;
							top: -2px;
						}
					}
				}
			}

			width: 960px;
		}
	}
</style>
