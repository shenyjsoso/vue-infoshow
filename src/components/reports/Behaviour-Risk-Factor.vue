<template>
    <div class="report">
        <!-- 行为危险因素监测记录表 -->
        <table>
        	<tr>
                <td colspan="8" class="title">
					<div class="title">行为危险因素监测记录表</div>
				</td>
            </tr>
        </table>
        <table border="2">
			<tr class="topTr">
				<td colspan="8">
					<span>A.人口学特征</span>
				</td>
			</tr>
			<tr>
				<td>A1</td>
				<td colspan="7">个人编码：<span class="lineBox alignCenter">
					{{reportData.grbm}}
				</span></td>
			</tr>
			<tr>
				<td>A2</td>
				<td colspan="7">被调查者姓名：<span class="lineBox alignCenter">
					{{reportData.xm}}
				</span></td>
			</tr>
			<tr>
				<td>A3</td>
				<td colspan="7">
					性别：
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
			</tr>
			<tr>
				<td>A4</td>
				<td colspan="7">年龄：<span class="lineBox alignCenter">
					{{reportData.nl}}
				</span>岁</td>
			</tr>
			<tr>
				<td>A5</td>
				<td colspan="7">电话号码：<span class="lineBox alignCenter">
					{{reportData.dhhm}}
				</span></td>
			</tr>
			<tr>
				<td>A6</td>
				<td colspan="7">
					家庭地址：
					<span class="lineBox alignCenter">{{reportData.jtzzzhen}}</span>镇（街道）
					<span class="lineBox alignCenter">{{reportData.jtzzcun}}</span>村（居委会）
					<span class="lineBox alignCenter">{{reportData.jtzzxxdz}}</span>（详细地址）
				</td>
			</tr>
			<tr>
				<td>A7</td>
				<td colspan="7">
					民族：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.汉族&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.mz == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.回族&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.mz == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.其他&nbsp;<span class="lineBox alignCenter">
								{{reportData.mzqt}}
							</span>&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.mz == '3'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>A8</td>
				<td colspan="7">
					文化程度：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.文盲&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.小学&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.初中&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.高中/技校/中专&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '4'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.大专&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '5'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.大学本科&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '6'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.研究生及以上&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.whcd == '7'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>A9</td>
				<td colspan="7">
					婚姻状况：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.未婚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.hyzklbdm == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.已婚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.hyzklbdm == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.同居&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.hyzklbdm == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.离婚&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.hyzklbdm == '4'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.丧偶&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.hyzklbdm == '5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>A10</td>
				<td colspan="7">
					职业类型：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.工人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.农民&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.军人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.行政干部&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '4'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.科技人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '5'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.医务人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '6'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.教师&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '7'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.金融财务&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '8'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							9.商业服务人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '9'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							10.家庭妇女&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '10'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							11.离、退休人员&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '11'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							12.待业&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '12'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							13.学生&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.wzlx == '13'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="8">
					<span>B.患病及医疗情况</span>
				</td>
			</tr>
			<tr>
				<td>B1</td>
				<td colspan="7">
					过去12个月内，您是否患有经医生诊断的以下慢性病：
					高血压、糖尿病、冠心病、脑卒中、恶性肿瘤、心肌梗死、
					慢性阻塞性肺部疾病(如慢支炎、肺气肿等)、哮喘、
					骨关节疾病（如骨关节炎、类风湿性关节炎等）、
					颈腰部疾病（如颈椎病、腰肌劳损、椎间盘突出等）、精神异常和精神病等：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b1 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b1 == '2'">&#xe631;</i>
						</div>
					</div>
					<span>（跳至B8）</span>
				</td>
			</tr>
			<tr>
				<td>B2</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为冠心病
					（包括心绞痛、心肌梗塞、无症状性心肌缺血、心力衰竭和心律失常等）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b2 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b2 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B3</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为脑卒中
					（即脑血管病，包括出血性卒中如脑出血、脑溢血、蛛网膜下腔出血，缺血性卒中如脑血栓形成、脑栓塞）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b3 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b3 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B4</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为慢性阻塞性肺部疾病(如慢支炎、肺气肿等)：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b4 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b4 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B5</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为骨关节疾病（如骨关节炎、类风湿性关节炎等）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b5 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b5 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B6</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为颈腰部疾病（如颈椎病、腰肌劳损、椎间盘突出等）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b6 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b6 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B7</td>
				<td colspan="7">
					您是否曾被县区级及以上医疗机构医生诊断为恶性肿瘤（包括全身恶性肿瘤和颅脑良性肿瘤）：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b7 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b7 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B8</td>
				<td colspan="7">
					您有几颗真牙因为蛀牙或牙周疾病而被拔掉：
					<span class="lineBox alignCenter">{{reportData.b8}}</span>颗（没有则填0）
				</td>
			</tr>
			<tr>
				<td>B9</td>
				<td colspan="7">
					过去12个月内，您是否因慢性病住过医院：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b9 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至B13）</span>
							<i class="iconfont xz" v-if="reportData.b9 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B10</td>
				<td colspan="7">
					您住院的慢性病名称：
					<span class="lineBox alignCenter">{{reportData.b10}}</span>
				</td>
			</tr>
			<tr>
				<td>B11</td>
				<td colspan="7">
					您过去12个月内因慢性病住院医疗费用总共花了
					<span class="lineBox alignCenter">{{reportData.b11}}</span>元（包括自己支付的和减免或报销的等）
				</td>
			</tr>
			<tr>
				<td>B12</td>
				<td colspan="7">
					其中自己支付
					<span class="lineBox alignCenter">{{reportData.b12}}</span>元
				</td>
			</tr>
			<tr>
				<td>B13</td>
				<td colspan="7">
					您的祖（外祖）父母、父母和兄弟姐妹中有没有人被医生诊断过患有下列慢性病（可多选）？<br />
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.未被诊断患有任何慢性疾病&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.高血压&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.糖尿病&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.冠心病&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '4'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.脑卒中&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '5'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.慢性呼吸系统疾病(如慢支炎、肺气肿、哮喘等)&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '6'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.恶性肿瘤&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b13 == '7'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.其他,&nbsp;&nbsp;&nbsp;请说明：<span class="lineBox alignCenter">{{reportData.b13qt}}</span>
							<i class="iconfont xz" v-if="reportData.b13 == '8'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B14</td>
				<td colspan="7">
					您的性别：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.男&nbsp;&nbsp;&nbsp;<span>（跳至C1）</span>
							<i class="iconfont xz" v-if="reportData.b14 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.女&nbsp;&nbsp;&nbsp;（此问题是为了方便排除男性被调查者）
							<i class="iconfont xz" v-if="reportData.b14 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B15</td>
				<td colspan="7">
					您有没有做过宫颈涂片检查：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.有&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b15 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.没有&nbsp;&nbsp;&nbsp;<span>（跳至B17）</span>
							<i class="iconfont xz" v-if="reportData.b15 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.不知道/记不清&nbsp;&nbsp;&nbsp;<span>（跳至B17）</span>
							<i class="iconfont xz" v-if="reportData.b15 == '3'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B16</td>
				<td colspan="7">
					最近一次检查是在什么时候：
					<span class="lineBox alignCenter">{{reportData.b16}}</span>月前
				</td>
			</tr>
			<tr>
				<td>B17</td>
				<td colspan="7">
					您有没有做过乳腺检查：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.有&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.b17 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.没有&nbsp;&nbsp;&nbsp;<span>（跳至C1）</span>
							<i class="iconfont xz" v-if="reportData.b17 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.不知道/记不清&nbsp;&nbsp;&nbsp;<span>（跳至C1）</span>
							<i class="iconfont xz" v-if="reportData.b17 == '3'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>B18</td>
				<td colspan="7">
					最近一次检查是在什么时候：
					<span class="lineBox alignCenter">{{reportData.b18}}</span>月前
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="8">
					<span>C.危险因素调查</span>
				</td>
			</tr>
			<tr>
				<td>C1</td>
				<td colspan="7">
					您知道慢性病高风险人群特征吗？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.知道&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c1 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.不知道&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c1 == '2'">&#xe631;</i>
						</div>
					</div><br />
					（慢性病高风险人群特征：1.血压：130-139/85-90mmHg；
					2.现在吸烟者；3.空腹血糖：6.1≤FBG＜7.0mmol/L；4.血清总胆固醇：
					5.2≤TC＜6.2mmol/L；5.男性腰围≥90cm,女性≥85cm)
				</td>
			</tr>
			<tr>
				<td>C2</td>
				<td colspan="7">
					您知晓您的体重吗？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c2 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C4）</span>
							<i class="iconfont xz" v-if="reportData.c2 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C3</td>
				<td colspan="7">
					您最近一次测量的体重是：
					<span class="lineBox alignCenter">{{reportData.c3}}</span>kg
				</td>
			</tr>
			<tr>
				<td>C4</td>
				<td colspan="7">
					您知晓您的腰围吗？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c4 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C6）</span>
							<i class="iconfont xz" v-if="reportData.c4 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C5</td>
				<td colspan="7">
					您最近一次测量的腰围是：
					<span class="lineBox alignCenter">{{reportData.c5}}</span>cm
				</td>
			</tr>
			<tr>
				<td>C6</td>
				<td colspan="7">
					您知晓您的血压吗？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c6 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C8）</span>
							<i class="iconfont xz" v-if="reportData.c6 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C7</td>
				<td colspan="7">
					您最近一次测量的血压是：
					<span class="lineBox alignCenter">{{reportData.c7szy}}</span>/<span class="lineBox alignCenter">{{reportData.c7ssy}}</span>mmHg
				</td>
			</tr>
			<tr>
				<td>C8</td>
				<td colspan="7">
					是否有医生诊断您患有高血压病：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c8 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C11）</span>
							<i class="iconfont xz" v-if="reportData.c8 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C9</td>
				<td colspan="7">
					近三个月内，是否有医生对您进行过高血压病防治知识的健康指导？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c9 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c9 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C10</td>
				<td colspan="7">
					您采取了什么措施来控制血压（可多选）？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.按医嘱服药&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('1',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.有症状时服药&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('2',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.控制饮食&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('3',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('4',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.血压监测&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('5',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他<span class="lineBox alignCenter">{{reportData.c10qt}}</span>&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('6',reportData.c10)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.没采取任何措施&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('7',reportData.c10)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C11</td>
				<td colspan="7">
					您知晓您的血糖吗？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c11 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C13）</span>
							<i class="iconfont xz" v-if="reportData.c11 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C12</td>
				<td colspan="7">
					您最近一次测量的血糖是：
					<span class="lineBox alignCenter">{{reportData.c12dxt}}</span>/<span class="lineBox alignCenter">{{reportData.c12gxt}}</span>mmol/L
				</td>
			</tr>
			<tr>
				<td>C13</td>
				<td colspan="7">
					是否曾经有医生诊断您患有糖尿病
					（如果是女性调查对象回答患有糖尿病，应询问是否是在怀孕期间患病。
					如果是，则不认为其患有糖尿病）？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c13 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C16）</span>
							<i class="iconfont xz" v-if="reportData.c13 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C14</td>
				<td colspan="7">
					近三个月内，是否有医生对您进行过糖尿病防治知识的健康指导？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c14 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c14 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C15</td>
				<td colspan="7">
					您采取了什么措施来控制血糖（可多选）？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.口服药&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('1',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.胰岛素注射&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('2',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.控制饮食&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('3',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('4',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.血糖监测&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('5',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他<span class="lineBox alignCenter">{{reportData.c15qt}}</span>&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('6',reportData.c15)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.没采取任何措施&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('7',reportData.c15)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C16</td>
				<td colspan="7">
					您是否吸烟？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.吸烟&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c16 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.已戒烟&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c16 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.不吸烟&nbsp;&nbsp;&nbsp;<span>（跳至C19）</span>
							<i class="iconfont xz" v-if="reportData.c16 == '3'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C17</td>
				<td colspan="7">
					您开始吸烟的年龄：
					<span class="lineBox alignCenter">{{reportData.c17}}</span>岁
				</td>
			</tr>
			<tr>
				<td>C18</td>
				<td colspan="7">
					您目前的吸烟频度有多大？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.偶尔吸（每天少于1支）&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c18 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.每天吸1-5支&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c18 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.每天吸6-10支&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c18 == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.每天吸11支以上&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c18 == '4'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C19</td>
				<td colspan="7">
					通常一周内，您在一天里吸入别人吸烟产生的烟雾（被动吸烟）累计超过15分钟的情况有几天：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.0天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.1天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '2'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.2天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '3'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.3天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '4'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.4天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '5'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.5天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '6'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							7.6天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '7'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							8.7天&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c19 == '8'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C20</td>
				<td colspan="7">
					您是否饮酒（饮酒指每周饮酒至少一次，连续半年以上）?
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.是&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c20 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.否&nbsp;&nbsp;&nbsp;<span>（跳至C24）</span>
							<i class="iconfont xz" v-if="reportData.c20 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C21</td>
				<td colspan="7">
					如果您饮酒，从开始饮酒至今
					<span class="lineBox alignCenter">{{reportData.c21}}</span>年
				</td>
			</tr>
			<tr>
				<td>C22</td>
				<td colspan="7">
					近半年，您的饮酒频率有多大?
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.每周至少饮酒3次&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c22 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.每周饮酒1-2次&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c22 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C23</td>
				<td colspan="7">
					如果每周饮酒，您平均每次饮酒的量相当于
					<span class="lineBox alignCenter">{{reportData.c23}}</span>标准饮酒单位（由调查员换算）<br />
					(1两40度及以上白酒=2；1两40度以下白酒=1.5；1斤葡萄酒=5；1瓶啤酒=2；1听啤酒=1；1斤黄酒=6.5)
				</td>
			</tr>
			<tr>
				<td>C24</td>
				<td colspan="7">
					您知道食品营养标签吗?
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.知道&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="reportData.c24 == '1'">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.不知道&nbsp;&nbsp;&nbsp;<span>（跳至D1）</span>
							<i class="iconfont xz" v-if="reportData.c24 == '2'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>C25</td>
				<td colspan="7">
					您在购买食品时，会看食品营养标签上的哪些内容（可多选）？
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.含有哪些营养成分&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('1',reportData.c25)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.能量或营养成分的含量&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('2',reportData.c25)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.营养成分对健康的作用&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('3',reportData.c25)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.其他（请详细说明）&nbsp;<span class="lineBox alignCenter">{{reportData.c25qt}}</span>&nbsp;&nbsp;
							<i class="iconfont xz" v-if="isMultiple('4',reportData.c25)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="8">
					<span>D.饮食情况</span>
				</td>
			</tr>
			<tr>
				<td colspan="5">
					请回忆在过去一周中，您所摄入的食物，并估计各类食物的食用频率和量（生重可食部分量）。
				</td>
				<td>a是否食用1=是，2=否</td>
				<td>b食用频率（顿/周）</td>
				<td>c平均每顿食用量</td>
			</tr>
			<tr>
				<td>D1</td>
				<td colspan="4">谷类（含大米/面食/杂粮/薯类/糕点）</td>
				<td class="mark alignCenter">{{reportData.d1a}}</td>
				<td class="mark alignCenter">{{reportData.d1b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d1c}}</span>两</td>
			</tr>
			<tr>
				<td>D2</td>
				<td colspan="4">蔬菜</td>
				<td class="mark alignCenter">{{reportData.d2a}}</td>
				<td class="mark alignCenter">{{reportData.d2b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d2c}}</span>两</td>
			</tr>
			<tr>
				<td>D3</td>
				<td colspan="4">水果</td>
				<td class="mark alignCenter">{{reportData.d3a}}</td>
				<td class="mark alignCenter">{{reportData.d3b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d3c}}</span>两</td>
			</tr>
			<tr>
				<td>D4</td>
				<td colspan="4">畜禽肉类（含猪肉/牛羊肉/禽肉/内脏类）</td>
				<td class="mark alignCenter">{{reportData.d4a}}</td>
				<td class="mark alignCenter">{{reportData.d4b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d4c}}</span>两</td>
			</tr>
			<tr>
				<td>D5</td>
				<td colspan="4">鱼虾类</td>
				<td class="mark alignCenter">{{reportData.d5a}}</td>
				<td class="mark alignCenter">{{reportData.d5b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d5c}}</span>两</td>
			</tr>
			<tr>
				<td>D6</td>
				<td colspan="4">蛋类</td>
				<td class="mark alignCenter">{{reportData.d6a}}</td>
				<td class="mark alignCenter">{{reportData.d6b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d6c}}</span>两</td>
			</tr>
			<tr>
				<td>D7</td>
				<td colspan="4">奶类</td>
				<td class="mark alignCenter">{{reportData.d7a}}</td>
				<td class="mark alignCenter">{{reportData.d7b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d7c}}</span>两</td>
			</tr>
			<tr>
				<td>D8</td>
				<td colspan="4">豆类</td>
				<td class="mark alignCenter">{{reportData.d8a}}</td>
				<td class="mark alignCenter">{{reportData.d8b}}</td>
				<td style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d8c}}</span>两</td>
			</tr>
			<tr>
				<td colspan="8">
					以家庭为单位按周询问最近一周全家食用量，您家里通常在一起就餐的人数（包括非家庭成员）
					<span class="lineBox alignCenter">{{reportData.jcdrs}}</span>人
				</td>
			</tr>
			<tr>
				<td colspan="2">D9植物油</td>
				<td colspan="2" style="text-align: right;">
					<span class="lineBox alignCenter">{{reportData.d9a}}</span>斤
				</td>
				<td colspan="2">D10动物油</td>
				<td colspan="2" style="text-align: right;">
					<span class="lineBox alignCenter">{{reportData.d10a}}</span>斤
				</td>
			</tr>
			<tr>
				<td colspan="2">D11盐</td>
				<td colspan="2" style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d11a}}</span>两</td>
				<td colspan="2">D12酱油</td>
				<td colspan="2" style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d12a}}</span>斤</td>
			</tr>
			<tr>
				<td colspan="2">D13醋</td>
				<td colspan="2" style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d13a}}</span>斤</td>
				<td colspan="2">D14酱类(黄酱\豆瓣酱\甜面酱等)</td>
				<td colspan="2" style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d14a}}</span>两</td>
			</tr>
			<tr>
				<td colspan="2">D15味精</td>
				<td colspan="2" style="text-align: right;"><span class="lineBox alignCenter">{{reportData.d15a}}</span>两</td>
				<td colspan="4"></td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="8">
					<span>E.成人每天活动6000步抽样调查用表  </span>
				请您回忆过去一个月里，一般情况下的一周内，您是否参加过下列活动（每次活动至少持续10分钟），
				请将每次至少持续10分钟的同一种活动的累计时间填入相应的位置。</td>
			</tr>
			<tr>
				<td colspan="3" rowspan="2">活动项目（每次至少持续10分钟）</td>
				<td rowspan="2">a．是否参加：1=是；2=否</td>
				<td colspan="4">累计活动时间</td>
			</tr>
			<tr>
				<td  colspan="2">b.每周多少天</td>
				<td colspan="2" >c.每天多少小时</td>
			</tr>
			<tr>
				<td>E1</td>
				<td colspan="2">走路</td>
				<td class="mark alignCenter">{{reportData.e1a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e1b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e1c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E2</td>
				<td colspan="2">骑脚踏车</td>
				<td class="mark alignCenter">{{reportData.e2a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e2b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e2c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E3</td>
				<td colspan="2">上下楼</td>
				<td class="mark alignCenter">{{reportData.e3a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e3b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e3c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E4</td>
				<td colspan="2">登山</td>
				<td class="mark alignCenter">{{reportData.e4a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e4b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e4c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E5</td>
				<td colspan="2">跑步</td>
				<td class="mark alignCenter">{{reportData.e5a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e5b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e5c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E6</td>
				<td colspan="2">羽毛球</td>
				<td class="mark alignCenter">{{reportData.e6a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e6b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e6c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E7</td>
				<td colspan="2">乒乓球</td>
				<td class="mark alignCenter">{{reportData.e7a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e7b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e7c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E8</td>
				<td colspan="2">篮球</td>
				<td class="mark alignCenter">{{reportData.e8a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e8b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e8c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E9</td>
				<td colspan="2">舞蹈</td>
				<td class="mark alignCenter">{{reportData.e9a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e9b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e9c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E10</td>
				<td colspan="2">健身操</td>
				<td class="mark alignCenter">{{reportData.e10a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e10b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e10c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E11</td>
				<td colspan="2">太极拳</td>
				<td class="mark alignCenter">{{reportData.e11a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e11b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e11c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E12</td>
				<td colspan="2">体力劳动</td>
				<td class="mark alignCenter">{{reportData.e12a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e12b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e12c}}</span>小时
				</td>
			</tr>
			<tr>
				<td>E13</td>
				<td colspan="2">其他：</td>
				<td class="mark alignCenter">{{reportData.e13a}}</td>
				<td colspan="2">
					<span class="lineBox alignCenter">{{reportData.e13b}}</span>天
				</td>
				<td colspan="2" >
					<span class="lineBox alignCenter">{{reportData.e13c}}</span>小时
				</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<tr class="topTr">
				<td colspan="8">
					<span>F.身体测量和实验室检测数据</span>
				</td>
			</tr>
			<tr>
				<td>F1</td>
				<td colspan="7">身高：
					<span class="lineBox alignCenter">{{reportData.f1}}</span>cm（保留到小数点后一位）
				</td>
			</tr>
			<tr>
				<td>F2</td>
				<td colspan="7">体重：
					<span class="lineBox alignCenter">{{reportData.f2}}</span>kg（保留到小数点后一位）
				</td>
			</tr>
			<tr>
				<td>F3</td>
				<td colspan="7">腰围：
					<span class="lineBox alignCenter">{{reportData.f3}}</span>cm（保留到小数点后一位）
				</td>
			</tr>
			<tr>
				<td>F4</td>
				<td colspan="7">收缩压：
					<span class="lineBox alignCenter">{{reportData.f4}}</span>（mmHg）
				</td>
			</tr>
			<tr>
				<td>F5</td>
				<td colspan="7">舒张压：
					<span class="lineBox alignCenter">{{reportData.f5}}</span>（mmHg）
				</td>
			</tr>
			<tr>
				<td>F6</td>
				<td colspan="7">心率：
					<span class="lineBox alignCenter">{{reportData.f6}}</span>（次/分）
				</td>
			</tr>
			<tr>
				<td>F7</td>
				<td colspan="7">空腹血糖：
					<span class="lineBox alignCenter">{{reportData.f7}}</span>mmol/L（保留到小数点后一位）
				</td>
			</tr>
			<tr>
				<td>调查人员</td>
				<td colspan="3" class="mark alignCenter">{{reportData.dcry}}</td>
				<td>调查时间</td>
				<td colspan="3">
					<span class="lineBox alignCenter">{{$formatDate(reportData.dcsj,'yyyy')}}</span>年
					<span class="lineBox alignCenter">{{$formatDate(reportData.dcsj,'MM')}}</span>月
					<span class="lineBox alignCenter">{{$formatDate(reportData.dcsj,'dd')}}</span>日
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
        methods:{
        	isMultiple(code,str){
        		var result = false;
        		if(code && str && str.indexOf(code) != -1){
        			result = true;
        		}
        		return result;
        	}
        }
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
                	span{
                		font-family: FZSSJW;
                	}
                    .jy{
                        position: relative;
                        font-family: FZSSJW;
                        .xz{
                        	font-family: FZSSJW;
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