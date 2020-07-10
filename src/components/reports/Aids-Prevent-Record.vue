<template>
    <div class="report">
        <!-- 艾滋病防治记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    艾滋病防治记录表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td colspan="2">工作机构名称</td>
				<td colspan="6" class="mark"></td>
			</tr>
			<tr>
				<td colspan="2">工作时间</td>
				<td colspan="6">
					<span class="lineBox"></span>年
					<span class="lineBox"></span>月
					<span class="lineBox"></span>日
					<span class="lineBox"></span>时
					<span class="lineBox"></span>分至
					<span class="lineBox"></span>时
					<span class="lineBox"></span>分
				</td>
			</tr>
            <tr>
				<td colspan="2">干预、宣传对象</td>
				<td colspan="6">
					1、CSW  2、MSM  3、IDU  4、流动人口
					<span class="checkBox" style="float: right;"></span>
				</td>
			</tr>
			<tr>
				<td colspan="2">干预活动地点(或场所名称)</td>
				<td colspan="6" class="mark"></td>
			</tr>
			<tr>
				<td colspan="2">
					工作人员数：<span class="lineBox"></span>人<br />
					1、卫生医疗机构工作人员<span class="lineBox"></span>人<br />
					2、外聘人员<span class="lineBox"></span>人<br />
					3、社会组织外展人员<span class="lineBox"></span>人<br />
					4、同伴教育员<span class="lineBox"></span>人<br />
					5、其他<span class="lineBox"></span>人
				</td>
				<td colspan="6">
					干预形式<span class="lineBox"></span>(根据备注选择编号1－6)<br />
					① 一般外展干预（包括卫生医疗机构工作人员、聘用的外展人员、社会组织外展人员进行的外展现场单独或集中的咨询检测、健康干预； ②同伴教育员活动；③其他形式（需注明）<span class="lineBox"></span>
				</td>
			</tr>
			<tr>
				<td colspan="2" rowspan="6">干预主要内容（请在具体的内容项上打上“√”）</td>
				<td colspan="6">
					1、安全套推广：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							①安全套发放&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							②安全套宣传&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					2、自愿咨询检测（VCT）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							①宣传艾滋病VCT&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							②检测转介服务转介卡发放<span class="lineBox"></span>张&nbsp;&nbsp;&nbsp;
							<!-- <i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							③现场开展检测&nbsp;&nbsp;&nbsp;
						<!-- 	<i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					3、性病服务：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							①性病咨询&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							②性病治疗的转介服务&nbsp;&nbsp;&nbsp;
							<!-- <i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							③性病知识宣传&nbsp;&nbsp;&nbsp;
						<!-- 	<i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					4、美沙酮维持治疗：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							①维持治疗知识宣讲&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							②美沙酮咨询与转介&nbsp;&nbsp;&nbsp;
							<!-- <i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					5、专题调查：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							①问卷<span class="lineBox"></span>份;&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							②采血<span class="lineBox"></span>份;&nbsp;&nbsp;&nbsp;
							<!-- <i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							③宫颈分泌物（FSW）<span class="lineBox"></span>份&nbsp;&nbsp;&nbsp;
						<!-- 	<i class="iconfont xz">&#xe631;</i> -->
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					6、其它有针对性的宣传教育：（具体）
					<span class="lineBox"></span>
				</td>
			</tr>
			<tr>
				<td colspan="2">干预人数：<span class="lineBox"></span>人</td>
				<td colspan="6">
					2010年1月1日至今首次接受干预人数（本次干预）：<span class="lineBox"></span>人
				</td>
			</tr>
			<tr>
				<td colspan="2">发放宣传材料数量</td>
				<td colspan="6">
					发放安全套<span class="lineBox"></span>个，
					材料名称：<span class="lineBox"></span>，
					共<span class="lineBox"></span>份; 
				</td>
			</tr>
			<tr>
				<td colspan="2" rowspan="2">关键人物签名及联系方式</td>
				<td colspan="6" class="mark">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="6">
					<span class="lineBox"></span>年
					<span class="lineBox"></span>月
					<span class="lineBox"></span>日
				</td>
			</tr>
			<tr>
				<td colspan="2">活动小结（主要成效、存在问题及下次改进计划等）</td>
				<td colspan="6" class="mark">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="2">工作队负责人签名</td>
				<td colspan="2" class="mark"></td>
				<td colspan="2">工作人员签名</td>
				<td colspan="2" class="mark"></td>
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