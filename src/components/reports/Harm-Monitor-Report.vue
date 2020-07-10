<template>
    <div class="report">
        <!-- 伤害监测报告 -->
        <table>
        	<tr>
                <td colspan="8" class="title">
					<div class="title">全国伤害监测报告卡</div>
				</td>
            </tr>
			<tr>
				<td colspan="4">
					监测医院/社康中心编号：<span class="mark">{{reportData.jcyybh}}</span>
				</td>
				<td colspan="4" style="text-align: right;">
					卡片编号：<span class="mark">{{reportData.jlbdbh}}</span>
				</td>
			</tr>
        </table>
        <table border="2">
			<tr class="topTr">
				<td colspan="9">
					<span>Ⅰ、患者一般信息</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">姓名*</td>
				<td colspan="2" class="mark">{{reportData.xm}}</td>
				<td class="alignCenter">性别*</td>
				<td colspan="2">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.男&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.xbdm==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.女&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.xbdm==2">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">年龄*</td>
				<td colspan="2">
					<span class="lineBox">{{reportData.nl}}</span>岁
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">户籍</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.本市&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.hj==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.本省&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.hj==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.外省&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.hj==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.外籍&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.hj==4">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">居住地址</td>
				<td colspan="7">
					<span class="lineBox">{{reportData.jzdzqu}}</span>区
					<span class="lineBox">{{reportData.jzdzxiaoqu}}</span>小区
					<span class="lineBox">{{reportData.jzdzhaolou}}</span>号楼
					<span class="lineBox">{{reportData.jzdzdanyuan}}</span>单元
					<span class="lineBox">{{reportData.jzdzshi}}</span>室
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">文化程度*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.文盲或半文盲&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.whcd==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.小学&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.whcd==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.初中&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.whcd==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.高中/中专&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.whcd==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.大专/本科以上&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.whcd==5">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">职业状况*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.学龄前儿童&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.在校学生&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.家务&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.待业&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.离退休人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.专业技术人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==6">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.办事人员和有关人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==7">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.商业/服务业人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==8">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.农牧渔水利生产人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==9">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							10.生产运输设备操作人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==10">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							11.军人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==11">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							12.其它/不详&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.zyzk==12">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="9">
					<span>Ⅱ、伤害事件的基本情况</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害发生时间*</td>
				<td colspan="7">
					<span class="lineBox">{{$formatDate(reportData.shfssj,'yyyy')}}</span>年
					<span class="lineBox">{{$formatDate(reportData.shfssj,'MM')}}</span>月
					<span class="lineBox">{{$formatDate(reportData.shfssj,'dd')}}</span>日
					<span class="lineBox">{{$formatDate(reportData.shfssj,'hh')}}</span>时（24小时制）
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">患者就诊时间*</td>
				<td colspan="5">
					<span class="lineBox">{{$formatDate(reportData.jzrqsj,'yyyy')}}</span>年
					<span class="lineBox">{{$formatDate(reportData.jzrqsj,'MM')}}</span>月
					<span class="lineBox">{{$formatDate(reportData.jzrqsj,'dd')}}</span>日
					<span class="lineBox">{{$formatDate(reportData.jzrqsj,'hh')}}</span>时（24小时制）
				</td>
				<td class="alignCenter">就诊医院</td>
				<td class="mark">{{reportData.jzyy}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害发生原因*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.机动车车祸&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.非机动车车祸&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.跌倒坠落&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.钝器伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.刀/锐器伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.烧烫伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==6">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.窒息/悬吊&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==7">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.溺水&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==8">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.中毒&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==9">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							10.动物伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==10">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							11.性侵犯&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsyy==11">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							12.其它&nbsp;&nbsp;&nbsp;<span class="lineBox">
								{{reportData.shfsyyqt}}
							</span>
							<i class="iconfont xz"  v-if="reportData.shfsyy==12">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害发生地点*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.家中&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.公共居住场所&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.学校和公共场所&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.体育和运动场所&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.公路/街道&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.贸易和服务场所&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==6">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.工业和建筑场所&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==7">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.农场/农田&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsdd==8">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.其它&nbsp;&nbsp;&nbsp;<span class="lineBox">
								{{reportData.shfsddqt}}
							</span>
							<i class="iconfont xz"  v-if="reportData.shfsdd==9">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害发生时活动*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.体育活动&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsshd==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.休闲活动&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsshd==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.有偿工作&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsshd==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.家务/学习&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsshd==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.乘架交通工具&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shfsshd==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其它&nbsp;&nbsp;&nbsp;<span class="lineBox">
								{{reportData.shfshdqt}}
							</span>
							<i class="iconfont xz"  v-if="reportData.shfsshd==6">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">是否故意*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.非故意伤害（意外事故）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sfgy==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.自残／自杀&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sfgy==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.故意（暴力／攻击）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sfgy==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.不清楚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sfgy==4">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="9">
					<span>Ⅲ、伤害临床信息</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害性质*（选择最严重的一种）</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.骨折&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.扭伤/拉伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.钝器伤、咬伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.挫伤/擦伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.烧烫伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.脑震荡/脑挫裂伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==6">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.器官系统损伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==7">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.其它&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==8">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.不清楚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shxz==9">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害部位*（选择最严重的伤害部位）</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.头部&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.上肢&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.下肢&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.躯干&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==4">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.多部位&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==5">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.全身广泛受伤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==6">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.呼吸系统&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==7">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.消化系统&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==8">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.神经系统&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==9">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							10.其它&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==10">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							11.不清楚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shbw==11">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">受伤程度*</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.轻度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sscd==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.中度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sscd==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.重度&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.sscd==3">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害临床诊断</td>
				<td colspan="7" class="mark">{{reportData.lczd}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">伤害结局</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.诊疗后回家&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shjj==1">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.观察/住院/转院&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shjj==2">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.死亡&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz"  v-if="reportData.shjj==3">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.其它&nbsp;&nbsp;&nbsp;<span class="lineBox">
								{{reportData.shjjqt}}
							</span>
							<i class="iconfont xz"  v-if="reportData.shjj==4">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">填报人</td>
				<td colspan="2" class="mark">{{reportData.reportpeople}}</td>
				<td class="alignCenter">填卡日期</td>
				<td colspan="4">
					<span class="lineBox">{{$formatDate(reportData.reporttime,'yyyy')}}</span>年
					<span class="lineBox">{{$formatDate(reportData.reporttime,'MM')}}</span>月
					<span class="lineBox">{{$formatDate(reportData.reporttime,'dd')}}</span>日
				</td>
			</tr>
			<tr>
				<td colspan="9">
					注：1.此卡不作为医学证明；2.带“*”标志的为必填项目。
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
						jlbdbh:'',
						xm:'',
						xbdm:'',
						hj:'',
						jzdzqu:'',
						jzdzxiaoqu:'',
						jzdzhaolou:'',
						jzdzdanyuan:'',
						jzdzshi:'',
						whcd:'',
						zyzk:'',
						shfssj:'',
						jzyy:'',
						jzrqsj:'',
						shfsyy:'',
						shfsdd:'',
						shfsshd:'',
						sfgy:'',
						shxz:'',
						shbw:'',
						sscd:'',
						lczd:'',
						reportpeople:''
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