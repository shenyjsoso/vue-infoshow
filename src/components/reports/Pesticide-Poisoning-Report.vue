<template>
    <div class="report">
        <!-- 农药中毒报告卡 -->
        <table>
        	<tr>
                <td colspan="8" class="title" style="font-weight: bold;">
					<div class="title">农药中毒报告卡</div>
				</td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">表号</td>
				<td colspan="2" class="mark">{{reportData.jlbdbh}}</td>
				<td class="alignCenter">制表机关</td>
				<td colspan="2" class="mark">
					{{reportData.zbjg}}
				</td>
				<td class="alignCenter">批准机关</td>
				<td colspan="2" class="mark">{{reportData.pzjg}}</td>
			</tr>
			<tr>
				<td class="alignCenter">批准文号</td>
				<td colspan="2" class="mark">{{reportData.pzwh}}</td>
				<td class="alignCenter">有效期至</td>
				<td colspan="5" class="mark">
					{{$formatDate(reportData.xyqz)}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">姓名</td>
				<td colspan="2" class="mark">{{reportData.xm}}</td>
				<td class="alignCenter">身份证号</td>
				<td colspan="2" class="mark">{{reportData.sfzjhm}}</td>
				<td class="alignCenter">联系电话</td>
				<td colspan="2" class="mark">{{reportData.lxdh}}</td>
			</tr>
			<tr>
				<td rowspan="2" class="alignCenter">卡片序号</td>
				<td colspan="8">
					<span class="lineBox">{{reportData.dzszzqzxs}}</span>省（自治区、直辖市）
					<span class="lineBox">{{reportData.dzsdq}}</span>地、 市
					<span class="lineBox">{{reportData.dzxq}}</span>县
					<span class="lineBox">{{reportData.dzxzjdbsc}}</span>乡（镇）
					<span class="lineBox">{{reportData.dzcjlnd}}</span>村
				</td>
			</tr>
			<tr>
				<td colspan="8">
					<span class="lineBox">{{reportData.kpxh}}</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">性别</td>
				<td colspan="2">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.男&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.xbdm == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.女&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.xbdm == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">年龄</td>
				<td colspan="5">
					<span class="lineBox">{{reportData.nl}}</span>岁
				</td>
			</tr>
			<tr>
				<td colspan="9">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.单一&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdnygs == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.两种及以上&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdnygs == '2'">&#xe631;</i>
						</div>
					</div>
					具体中毒农药名称：
					<span class="lineBox">{{reportData.jtzdnymc}}</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">中毒原因</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.生产性自用&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdyy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.生产性受雇&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdyy == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.生活性误服（用）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdyy == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.生活性自服&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zdyy == '4'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">职业安全卫生知识的培训*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.未接受教育&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zyaqwszsdpx == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.接受教育&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zyaqwszsdpx == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">施药方式*</td>
				<td colspan="7">
					隔行打药：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ghdy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ghdy == '2'">&#xe631;</i>
						</div>
					</div>
					退步打药：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.tbdy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.tbdy == '2'">&#xe631;</i>
						</div>
					</div>
					顺风打药：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sfdy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sfdy == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td rowspan="4" colspan="2" class="alignCenter">危险行为*</td>
				<td colspan="7">
					阅读标签：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ydbq == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ydbq == '2'">&#xe631;</i>
						</div>
					</div>
					徒手配药：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.tspy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.tspy == '2'">&#xe631;</i>
						</div>
					</div>
					使用防护用品：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.syfhyp == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.syfhyp == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="7">
					施药时吸烟：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sysxy == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sysxy == '2'">&#xe631;</i>
						</div>
					</div>
					施药时进食：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sysjs == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.sysjs == '2'">&#xe631;</i>
						</div>
					</div>
					用手擦汗：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ysch == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.ysch == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="7">
					药械滴漏：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.jxdl == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.jxdl == '2'">&#xe631;</i>
						</div>
					</div>
					身体被农药污染：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.stbnywr == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.stbnywr == '2'">&#xe631;</i>
						</div>
					</div>
					打药结束后清洗：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.dyjshqx == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.dyjshqx == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="7">
					感觉不适继续工作：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.gjbsjxgz == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.gjbsjxgz == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">转归*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.治愈&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zg == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.好转&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zg == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.死亡&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.zg == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.其他&nbsp;&nbsp;&nbsp;<span class="lineBox">
								{{reportData.zgqt}}
							</span>
							<i class="iconfont xz" v-if="reportData.zg == '4'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">诊断时间</td>
				<td colspan="3">
					<span class="lineBox alignCenter">{{$formatDate(reportData.zdrq,'yyyy')}}</span>年
					<span class="lineBox alignCenter">{{$formatDate(reportData.zdrq,'MM')}}</span>月
					<span class="lineBox alignCenter">{{$formatDate(reportData.zdrq,'dd')}}</span>日
				</td>
				<td class="alignCenter">死亡日期</td>
				<td colspan="3">
					<span class="lineBox alignCenter">{{$formatDate(reportData.deathdatetime,'yyyy')}}</span>年
					<span class="lineBox alignCenter">{{$formatDate(reportData.deathdatetime,'MM')}}</span>月
					<span class="lineBox alignCenter">{{$formatDate(reportData.deathdatetime,'dd')}}</span>日
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">诊断单位（盖章）</td>
				<td colspan="2" class="mark">{{reportData.zddw}}</td>
				<td class="alignCenter">单位负责人</td>
				<td colspan="2" class="mark">{{reportData.dwfzr}}</td>
				<td class="alignCenter">填表人</td>
				<td class="mark">{{reportData.tbr}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">填报人联系电话</td>
				<td colspan="2" class="mark">{{reportData.tbrlxdh}}</td>
				<td class="alignCenter">填报日期</td>
				<td colspan="4">
					<span class="lineBox alignCenter">{{$formatDate(reportData.tbrq,'yyyy')}}</span>年
					<span class="lineBox alignCenter">{{$formatDate(reportData.tbrq,'MM')}}</span>月
					<span class="lineBox alignCenter">{{$formatDate(reportData.tbrq,'dd')}}</span>日
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">填报说明</td>
				<td colspan="7">
					1.本卡填报单位为最初接诊农药中毒患者的医疗卫生机构。<br />
					2.统计范围为在农、林业等生产活动中使用农药或生活中误服各类农药而发生中毒者
					（不包括食物农药残留超标和属于刑事案件的中毒患者）。本报告卡不包括生产农药而发生中毒者。<br />
					3.最初接诊农药中毒患者的医疗卫生机构，在患者确诊后24小时内填卡网上直报。<br />
					4. *仅限于生产性自用和生产性受雇引起的农药中毒。
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