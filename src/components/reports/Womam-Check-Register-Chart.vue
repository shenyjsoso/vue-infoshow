<template>
	<div class="report">
		<!-- 妇女检查登记表 -->
		<table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    妇女检查登记表
                </td>
            </tr>
        </table>
		<table border="2" class="stripe">
			<tr>
				<td>姓名</td>
				<td class="mark">{{reportData.xm}}</td>
				<td>性别</td>
				<td class="mark">{{reportData.sexName}}</td>
				<td>年龄</td>
				<td class="mark">{{personalWomanExamReport.jcnl}}</td>
				<td>婚否</td>
				<td class="mark">{{reportData.maritalStatusName}}</td>
				<td>籍贯</td>
				<td class="mark">{{reportData.hjShen}}</td>
			</tr>
			<tr>
				<td>电话</td>
				<td class="mark" colspan="3">{{reportData.lxdhhm}}</td>
				<td>地址</td>
				<td class="mark" colspan="5">
					<span v-if="reportData.xzdzshen">{{reportData.xzdzshen}}</span>
					<span v-if="reportData.xzdzshi">{{reportData.xzdzshi}}</span>
					<span v-if="reportData.xzdzqu">{{reportData.xzdzqu}}</span>
					<span v-if="reportData.xzdzxiang">{{reportData.xzdzxiang}}</span>
					<span v-if="reportData.xzdzcun">{{reportData.xzdzcun}}</span>
					<span v-if="reportData.xzdzmphm">{{reportData.xzdzmphm}}</span>
				</td>
			</tr>
			<tr>
				<td>既往史及家族史</td>
				<td class="mark" colspan="3">
					<span v-if="reportData.jwjbs">{{reportData.jwjbs}};</span>
					<span v-if="reportData.jzycxjbs">{{reportData.jzycxjbs}}</span>
				</td>
				<td>主任签名</td>
				<td class="mark" colspan="5">{{personalWomanExamReport.lrysxm}}</td>
			</tr>
			<tr>
				<td rowspan="4">妇科检查</td>
				<td>外阴</td>
				<td colspan="8">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							未见异常&nbsp;&nbsp;&nbsp;{{personalWomanExamReport.wyjcms}}
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='未见异常'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							白斑&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='白斑'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							湿疹&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='湿疹'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							肿物&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='肿物'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							炎症&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='炎症'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							溃疡&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='溃疡'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.wyjcms=='其他'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>阴道分泌物</td>
				<td colspan="8">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							未见异常&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='未见异常'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							脓性&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='脓性'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							异味&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='异味'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							豆渣样&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='豆渣样'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							血性&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='血性'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							泡沫状&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='泡沫状'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.ydfmwjjjg=='其他'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>宫体</td>
				<td colspan="8">（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							未见异常&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtdx=='未见异常'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							大&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtdx=='大'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							小）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtdx=='小'">&#xe631;</i>
						</div>
					</div>
					宫体位置：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							前&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtwz=='前'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							中&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtwz=='中'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							后&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtGtwz=='后'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcGtQt=='其他'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>附件</td>
				<td colspan="8">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							未见异常&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjYcbs=='未见异常'">&#xe631;</i>
						</div>
					</div>
					压痛：（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							左&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjYt=='左'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							右）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjYt=='右'">&#xe631;</i>
						</div>
					</div>
					增厚：（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							左&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjZh=='左'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							右）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjZh=='右'">&#xe631;</i>
						</div>
					</div>
					肿物：（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							囊性&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjZw=='囊性'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							实性）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.fkjcFjZw=='实性'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td rowspan="4">电子阴道镜</td>
				<td colspan="9">
					宫颈光滑（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjghbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
					宫颈纳囊（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjnnbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
					宫颈肥大（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjfdbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
				</td>
			</tr>
			<tr>
				<td colspan="5">
					宫颈息肉（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjxrbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
					异物增生（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjzsbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
				</td>
				<td>肿瘤</td>
				<td colspan="3">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							有&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjYwzl=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							无&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjYwzl=='0'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">
					宫颈多发纳囊（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjdfnnbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
					宫颈口裂伤（
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjklsbs=='1'">&#xe631;</i>
							&nbsp;
						</div>
					</div>）
				</td>
				<td>宫颈糜烂</td>
				<td colspan="3">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							Ⅰ度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjmlcd=='Ⅰ度'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							Ⅱ度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjmlcd=='Ⅱ度'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							Ⅲ度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.dzydjGjmlcd=='Ⅲ度'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="2">妇科检查情况及治疗建议</td>
				<td colspan="7" class="mark">{{personalWomanExamReport.dzydjFkjcqkjzljy}}</td>
			</tr>
			<tr>
				<td rowspan="3">化验检查</td>
				<td colspan="9">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							白细胞&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcBxb=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							脓细胞&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcNxb=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							红细胞&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcHxb=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							霉菌&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcMc=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="9">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							线索细胞&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcXsxb=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							滴虫&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcDc=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							清洁度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcQjd=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							球菌&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcQj=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="9">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							上皮细胞&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcSpxb=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							杆菌&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.hyjcGj=='1'">&#xe631;</i>
						</div>
					</div>
					细胞学涂片：巴式
					<span class="lineBox">{{personalWomanExamReport.gjgpbsfjmc}}</span>级，HBSAG
				</td>
			</tr>
			<tr>
				<td rowspan="2">乳腺检查</td>
				<td colspan="3">乳房肿块</td>
				<td colspan="6">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							有&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.rxjcRxzkbs=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							无&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="personalWomanExamReport.rxjcRxzkbs=='0'">&#xe631;</i>
						</div>
					</div>
					左
					<span class="lineBox">{{personalWomanExamReport.rxjcRxzkz}}</span>cm &nbsp;&nbsp;
					右
					<span class="lineBox">{{personalWomanExamReport.rxjcRxzky}}</span>cm
				</td>
			</tr>
			<tr>
				<td colspan="3">乳透触诊检查情况及治疗建议</td>
				<td class="mark" colspan="6">{{personalWomanExamReport.rxjcRtczjcqkjzljy}}</td>
			</tr>
			<tr>
				<td>彩超检查</td>
				<td colspan="3">B超检查情况及治疗建议</td>
				<td class="mark" colspan="6">{{personalWomanExamReport.ccjcBcjcqkjzljy}}</td>
			</tr>
			<tr>
				<td rowspan="2">结论</td>
				<td class="mark" colspan="9">&nbsp;{{personalWomanExamReport.result}}</td>
			</tr>
			<tr>
				<td colspan="9" style="text-align: right;">
					<span class="borderB">{{$formatDate(personalWomanExamReport.jcrq,'yyyy')}}</span> 年
					<span class="borderB">{{$formatDate(personalWomanExamReport.jcrq,'MM')}}</span> 月
					<span class="borderB">{{$formatDate(personalWomanExamReport.jcrq,'dd')}}</span> 日&nbsp;&nbsp;&nbsp;&nbsp;
					医生签名：<span class="borderB">{{personalWomanExamReport.lrysxm}}</span>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		props: {
			reportData: {
				type: Object,
				default () {
					return {

					}
				}
			}
		},
		data() {
			return {
				personalWomanExamReport:{}
			}
		},
		created() {
			// console.log(this.reportData)
			this.personalWomanExamReport = this.reportData.personalWomanExamReport || {};
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
