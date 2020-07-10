<template>
    <div class="report">
        <!-- 病案首页 -->
		<table>
			<tr style="font-size: 20px;">
				<td colspan="2" style="text-align: right;">医疗机构</td>
				<td colspan="5" style="font-weight: bold;padding-left: 60px;">{{report.organName}}</td>
				<td colspan="5">（组织机构代码：
					<span style="font-weight: bold;">{{report.organCode﻿}}</span>）
				</td>
			</tr>
			<tr>
				<td colspan="2"></td>
				<td colspan="10" style="font-size: 20px;padding-left: 70px;"></td>
			</tr>
			<tr>
				<td colspan="4"> 
					医疗付费方式：{{$aadata.payMode[report.﻿payMode+'']}}
					<!-- <span class="checkBox">{{report.payMode}} --></span>
				</td>
				<td colspan="4" class="alignCenter" style="font-size: 26px;font-weight: bold;">住 院 病 案 首 页</td>
				<td colspan="4"></td>
			</tr>
			<tr>
				<td colspan="4"> 健康卡号：{{report.jkkh}}</td>
				<td colspan="4" class="alignCenter"> 第&nbsp;<span class="mark">{{report.hpNumb}}</span>&nbsp;次住院</td>
				<td colspan="4" style="text-align: right;"> 病案号：{{report.mrNo}}</td>
			</tr>
		</table>
        
		<table style="border: 1px solid black;border-bottom: none;">
			<tr>
				<td colspan="2">
					姓名 <span class="lineBox">{{report.name}}</span>
				</td>
				<td colspan="6">
					性别 &nbsp;&nbsp;
					<span class="checkBox">{{report.sex}}</span>&nbsp;&nbsp;
					0.未知的性别 1.男 2.女 9.未说明的性别
				</td>
				<td colspan="4">
					出生日期 <span class="lineBox">{{$formatDate(report.birthday)}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					年龄 <span class="lineBox">{{report.ageYear}}</span>
				</td>
				<td colspan="2">
					国籍 
					<span class="lineBox">{{report.nation}}</span>
				</td>
				<td colspan="4">
					（年龄不足一周岁的） 年龄 <span class="lineBox">{{report.ageMonth}}</span> 月
				</td>
				<td colspan="4">
					（新生儿年龄≤28天的） 年龄 <span class="lineBox">{{report.ageDay}}</span> 天
				</td>
			</tr>
			<tr>
				<td colspan="6">
					新生儿出生体重（
						一孩  <span class="lineBox">{{report.bWeight1}}</span> 克&nbsp;&nbsp;&nbsp;
						二孩  <span class="lineBox">{{report.bWeight2}}</span> 克）
				</td>
				<td colspan="6">
					新生儿入院体重
					<span class="lineBox">{{report.inHpWeight}}</span> 克
				</td>
			</tr>
			<tr>
				<td colspan="12">
					身份证件类型&nbsp;
					<span class="checkBox">{{report.cardtype}}</span>&nbsp;
					01.居民身份证 02.居民户口本 03.护照 04.军官证 05.驾驶证 06.港澳居民来往内地通行证 07.台湾居民来往内地通行证 99.其他有效证件 
				</td>
				<!-- <td colspan="4">
					身份证件号码 <span class="lineBox">{{report.cardno}}</span>
				</td> -->
			</tr>
			<tr>
				<td colspan="12">
					身份证件号码 <span class="lineBox">{{report.cardno}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="12">
					身份证件不详的具体原因&nbsp;&nbsp;
					<span class="checkBox">{{report.cerUnkRea}}</span>&nbsp;&nbsp;
					1.三无人员 2.新生儿未办理 3.无完全民事行为能力 4.意识障碍 9.其他
					<span class="lineBox">{{report.othReaExp}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					出生地&nbsp;&nbsp;
					<span class="lineBox">{{report.birthAddr}}{{report.birthAddr1}}{{report.birthAddr2}}</span><!-- 省 市 区 -->
				</td>
				<td colspan="3">
					籍贯&nbsp;&nbsp;
					<span class="lineBox">{{report.oryginAddr}}{{report.oryginAddr1}}</span><!-- 省 市 -->
				</td>
				<td colspan="3">
					民族&nbsp;&nbsp;
					<span class="lineBox">{{$aadata.nation[report.nationCode + '']}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					职业&nbsp;&nbsp;
					<span class="lineBox">{{$aadata.practJob[report.jobCode + '']}}</span>
				</td>
				<td colspan="10">
					婚姻&nbsp;&nbsp;
					<span class="checkBox">{{report.marrCode}}</span>&nbsp;&nbsp;
					1.未婚 2.已婚 3.丧偶 4.离婚 9.其他
				</td>
			</tr>
			<tr>
				<td colspan="6">
					现住址&nbsp;&nbsp;
					<span class="lineBox">{{report.curAddr}}{{report.curAddr1}}{{report.curAddr2}}{{report.curAddr3}}{{report.curAddr4}}{{report.curAddr5}}</span><!-- 详细地址 -->
				</td>
				<td colspan="3">
					电话&nbsp;&nbsp;
					<span class="lineBox">{{report.patPhone}}</span>
				</td>
				<td colspan="3">
					邮编&nbsp;&nbsp;
					<span class="lineBox">{{report.curPostcode}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="9">
					户口地址&nbsp;&nbsp;
					<span class="lineBox">{{report.hrAddr}}{{report.hrAddr1}}{{report.hrAddr2}}{{report.hrAddr3}}{{report.hrAddr4}}{{report.hrAddr5}}</span>
				</td>
				<td colspan="3">
					邮编&nbsp;&nbsp;
					<span class="lineBox">{{report.hrPostcode}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					工作单位及地址&nbsp;&nbsp;
					<span class="lineBox">{{report.workOrgan}}</span>
				</td>
				<td colspan="3">
					单位电话&nbsp;&nbsp;
					<span class="lineBox">{{report.organPhone}}</span>
				</td>
				<td colspan="3">
					邮编&nbsp;&nbsp;
					<span class="lineBox">{{report.organPostcode}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					联系人姓名&nbsp;&nbsp;
					<span class="lineBox">{{report.conName}}</span>
				</td>
				<td colspan="2">
					关系&nbsp;&nbsp;
					<span class="lineBox">{{$aadata.familyRelation[report.conPatCode + '']}}</span>
				</td>
				<td colspan="5">
					地址&nbsp;&nbsp;
					<span class="lineBox">{{report.conAddr}}</span>
				</td>
				<td colspan="3">
					电话&nbsp;&nbsp;
					<span class="lineBox">{{report.conPhone}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="12">
					入院途径&nbsp;&nbsp;
					<span class="checkBox">{{report.inHpWayCode}}</span>&nbsp;&nbsp;
					1.急诊 2.门诊 3.其他医疗机构转入 9.其他
				</td>
			</tr>
			<tr>
				<td colspan="3">
					入院时间&nbsp;&nbsp;
					<span class="lineBox">{{$formatDate(report.inHpDt)}}</span>
				</td>
				<td colspan="3">
					入院科别&nbsp;&nbsp;
					<span class="lineBox">{{report.inDptName}}</span>
				</td>
				<td colspan="3">
					病房&nbsp;&nbsp;
					<span class="lineBox">{{report.inHpWard}}</span>
				</td>
				<td colspan="3">
					转科科别&nbsp;&nbsp;
					<span class="lineBox">{{report.transCat}}</span>
				</td>
			</tr>
			<tr>
				<td colspan="3">
					出院时间&nbsp;&nbsp;
					<span class="lineBox">{{$formatDate(report.outHpDt)}}</span>
				</td>
				<td colspan="3">
					出院科别&nbsp;&nbsp;
					<span class="lineBox">{{report.outDptName}}</span>
				</td>
				<td colspan="3">
					病房&nbsp;&nbsp;
					<span class="lineBox">{{report.outHpWard}}</span>
				</td>
				<td colspan="3">
					实际住院&nbsp;&nbsp;
					<span class="lineBox">{{report.hOD}}</span>&nbsp;&nbsp;天
				</td>
			</tr>
			<tr>
				<td colspan="9">
					门（急）诊诊断&nbsp;&nbsp;
					<span class="lineBox">{{report.oeDisName}}</span>
				</td>
				<td colspan="3">
					疾病编码&nbsp;&nbsp;
					<span class="lineBox">{{report.oeDisCode}}</span>
				</td>
			</tr>
		</table>
		
		<table border="1">
			<tr>
				<td class="alignCenter" colspan="5">出院诊断</td>
				<td class="alignCenter" colspan="3">疾病编码</td>
				<td class="alignCenter" colspan="2">入院病情</td>
				<td class="alignCenter" colspan="2">治疗转归</td>
			</tr>
			<tr>
				<td colspan="5">主要诊断：{{report.mdisName}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred}}</td>
			</tr>
			<tr>
				<td colspan="5">其他诊断：{{report.mdisName1}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode1}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond1}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred1}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName2}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode2}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond2}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred2}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName3}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode3}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond3}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred3}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName4}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode4}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond4}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred4}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName5}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode5}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond5}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred5}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName6}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode6}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond6}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred6}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName7}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode7}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond7}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred7}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName8}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode8}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond8}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred8}}</td>
			</tr>
			<tr>
				<td colspan="5" style="padding-left: 80px;">&nbsp;{{report.mdisName9}}</td>
				<td class="alignCenter" colspan="3">{{report.mdisCode9}}</td>
				<td class="alignCenter" colspan="2">{{report.mdisCond9}}</td>
				<td class="alignCenter" colspan="2">{{report.trabsferred9}}</td>
			</tr>
		</table>
		<table>
			<tr class="borderTopN">
				<td colspan="6">
					入院病情：&nbsp;&nbsp;
					1.有 2.临床未确定 3.情况不明 4.无
				</td>
				<td colspan="6">
					治疗转归：&nbsp;&nbsp;
					1.治愈 2.好转 3.未愈 4.死亡 9.其他
				</td>
			</tr>
			<tr class="borderTopN">
				<td colspan="9">
					损伤、中毒的外部原因&nbsp;&nbsp;
					<span class="lineBox">{{report.extlCause}}</span>
				</td>
				<td colspan="3">
					疾病编码&nbsp;&nbsp;
					<span class="lineBox">{{report.extlCauseCode}}</span>
				</td>
			</tr>
			<tr class="borderTopN">
				<td colspan="9">
					病理诊断&nbsp;&nbsp;
					<span class="lineBox">{{report.pathoDiag}}</span>
				</td>
				<td colspan="3">
					疾病编码&nbsp;&nbsp;
					<span class="lineBox">{{report.pathoDiagCode}}</span>
				</td>
			</tr>
			<tr class="borderTopN">
				<td colspan="9"></td>
				<td colspan="3">
					病理号&nbsp;&nbsp;
					<span class="lineBox">{{report.pathoexNo}}</span>
				</td>
			</tr>
			<tr class="borderTopN">
				<td colspan="3">
					药物过敏&nbsp;&nbsp;
					<span class="checkBox">{{report.allergyMark}}</span>&nbsp;&nbsp;
					1.无 2.有,
				</td>
				<td colspan="6">
					过敏药物&nbsp;&nbsp;
					<span class="lineBox">{{report.aldrugName}}</span>
				</td>
				<td colspan="3">
					死亡患者尸检&nbsp;&nbsp;
					<span class="checkBox">{{report.autopsy}}</span>&nbsp;&nbsp;
					 1.是 2.否 
				</td>
			</tr>
			<tr class="borderTopN">
				<td colspan="6">
					血型&nbsp;&nbsp;
					<span class="checkBox">{{report.aboCode}}</span>&nbsp;&nbsp;
					1.A 2.B 3.O 4.AB 5.不详 6.未查
				</td>
				<td colspan="6">
					RH&nbsp;&nbsp;
					<span class="checkBox">{{report.rhCode}}</span>&nbsp;&nbsp;
					1.阴 2.阳 3.不详 4.未查 
				</td>
			</tr>
			<tr class="borderTopN" style="border-bottom: none ;">
				<td colspan="3">
					科主任&nbsp;&nbsp;
					<span class="lineBox">{{report.scheadName}}</span>
				</td>
				<td colspan="3">
					主任（副主任）医师&nbsp;&nbsp;
					<span class="lineBox">{{report.cphyName}}</span>
				</td>
				<td colspan="3">
					主治医师&nbsp;&nbsp;
					<span class="lineBox">{{report.rsphyName}}</span>
				</td>
				<td colspan="3">
					住院医师&nbsp;&nbsp;
					<span class="lineBox">{{report.hphyName}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr class="borderTopN" style="border-bottom: none ;">
				<td colspan="3">
					责任护士&nbsp;&nbsp;
					<span class="lineBox">{{report.primaryNur}}</span>
				</td>
				<td colspan="3">
					进修医师&nbsp;&nbsp;
					<span class="lineBox">{{report.rfrphyName}}</span>
				</td>
				<td colspan="3">
					实习医师&nbsp;&nbsp;
					<span class="lineBox">{{report.internName}}</span>
				</td>
				<td colspan="3">
					编码员&nbsp;&nbsp;
					<span class="lineBox">{{report.coderName}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr class="borderTopN" style="border-bottom: none ;">
				<td colspan="3">
					病案质量&nbsp;&nbsp;
					<span class="checkBox">{{report.mrquCode}}</span>&nbsp;&nbsp;
					1.甲 2.乙 3.丙
				</td>
				<td colspan="3">
					质控医师&nbsp;&nbsp;
					<span class="lineBox">{{report.quctrdocName}}</span>
				</td>
				<td colspan="3">
					质控护士&nbsp;&nbsp;
					<span class="lineBox">{{report.quctrnurse}}</span>
				</td>
				<td colspan="3">
					质控日期&nbsp;&nbsp;
					<span class="lineBox">{{$formatDate(report.quctrDate)}}</span>&nbsp;&nbsp;
				</td>
			</tr>
		</table>
		<table border="1">
			<tr>
				<td rowspan="2" class="alignCenter">手术及操作编码</td>
				<td rowspan="2" class="alignCenter">手术及日期</td>
				<td rowspan="2" class="alignCenter">手术级别</td>
				<td rowspan="2" class="alignCenter">手术类别</td>
				<td rowspan="2" style="width: 120px;" class="alignCenter">手术及操作名称</td>
				<td colspan="3" class="alignCenter">手术及操作者</td>
				<td rowspan="2" class="alignCenter">切口类别</td>
				<td rowspan="2" class="alignCenter">愈合等级</td>
				<td rowspan="2" class="alignCenter">麻醉方式</td>
				<td rowspan="2" class="alignCenter">麻醉医师</td>
			</tr>
			<tr>
				<td class="alignCenter">术者</td>
				<td class="alignCenter">Ⅰ助</td>
				<td class="alignCenter">Ⅱ助</td>
			</tr>
			<tr v-for="(item,index) in operateList">
				<td class="mark">&nbsp;{{item.operCode}}</td>
				<td class="mark">{{$formatDate(item.operDate)}}</td>
				<td class="mark">{{item.nnis}}</td>
				<td class="mark">{{item.ifEleSur}}</td>
				<td class="mark">{{item.operName}}</td>
				<td class="mark">{{item.opDocName}}</td>
				<td class="mark">{{item.firassiName}}</td>
				<td class="mark">{{item.secassiName}}</td>
				<td class="mark">{{item.woundGrade}}</td>
				<td class="mark">{{item.woundType}}</td>
				<td class="mark">{{item.anesmethodName}}</td>
				<td class="mark">{{item.anesName}}</td>
			</tr>
			<tr>
				<td colspan="4">
					手术类别： 1.择期手术　2.急诊手术
				</td>
				<td colspan="8">
					切口类别：0.O类切口 1.Ⅰ类切口 2.Ⅱ类切口 3.Ⅲ类切口<br />
					愈合等级：1.甲 2.乙 3.丙 4.其他
				</td>
			</tr>
		</table>
		<table>
			<tr class="borderTopN" >
				<td>
					离院方式&nbsp;&nbsp;
					<span class="checkBox">{{report.dischawaycode}}</span>&nbsp;&nbsp;
					1.医嘱离院 2.医嘱转院，拟接收医疗机构名称：
					<span class="lineBox"><span v-if="report.dischawaycode=='2'">{{report.intorganName}}</span></span><br />
					3.医嘱转社区卫生服务机构/乡镇卫生院，拟接收医疗机构名称：<span class="lineBox"><span v-if="report.dischawaycode=='3'">{{report.intorganName}}</span></span>
					4.非医嘱离院 5.死亡 9.其他
				</td>
			</tr>
			<tr class="borderTopN" style="border-bottom:none ;">
				<td>
					是否有出院31天内再住院计划&nbsp;&nbsp;
					<span class="checkBox">{{report.if31rhp}}</span>&nbsp;&nbsp;
					1.无 2.有， 目的: &nbsp;&nbsp;
					<span class="lineBox">{{report.rhpP}}</span>
				</td>
			</tr>
		</table>
		<table style="border: 1px solid #1A1A1A;border-bottom: none;">
			<tr>
				<td colspan="6">
					颅脑损伤患者昏迷时间：入院前&nbsp;&nbsp;
					<span class="lineBox">{{report.patIhFd}}</span>天
					<span class="lineBox">{{report.patIhFh}}</span>小时
					<span class="lineBox">{{report.patIhFm}}</span>分钟
				</td>
				<td colspan="6">
					入院后&nbsp;&nbsp;
					<span class="lineBox">{{report.patIhBd}}</span>天
					<span class="lineBox">{{report.patIhBh}}</span>小时
					<span class="lineBox">{{report.patIhBm}}</span>分钟
				</td>
			</tr>
			<tr>
				<td colspan="12">
					住院费用（元）：
					总费用&nbsp;&nbsp;<span class="lineBox">{{report.totalCost}}</span>
					（自付金额：&nbsp;&nbsp;<span class="lineBox">{{report.indPay}}</span>）
				</td>
			</tr>
			<tr>
				<td colspan="12">
					1.综合医疗服务类：
					（1）一般医疗服务费：&nbsp;&nbsp;<span class="lineBox">{{report.genMedSf}}</span>&nbsp;&nbsp;
					（2）一般治疗操作费：&nbsp;&nbsp;<span class="lineBox">{{report.genCurSf}}</span>&nbsp;&nbsp;
					（3）护理费：&nbsp;&nbsp;<span class="lineBox">{{report.nursingFee}}</span>&nbsp;&nbsp;
					（4）其他费用：&nbsp;&nbsp;<span class="lineBox">{{report.othTreSf}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					2.诊断类：
					（5）病理诊断费：&nbsp;&nbsp;<span class="lineBox">{{report.pathDiagFee}}</span>&nbsp;&nbsp;
					（6）实验室诊断费：&nbsp;&nbsp;<span class="lineBox">{{report.labDiagFee}}</span>&nbsp;&nbsp;
					（7）影像学诊断费：&nbsp;&nbsp;<span class="lineBox">{{report.imagDiagFee}}</span>&nbsp;&nbsp;
					（8）临床诊断项目费：&nbsp;&nbsp;<span class="lineBox">{{report.clinDiagFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					3.治疗类：
					（9）非手术治疗项目费：&nbsp;&nbsp;<span class="lineBox">{{report.nonOpTFee}}</span>&nbsp;&nbsp;
					  （ 临床物理治疗费：&nbsp;&nbsp;<span class="lineBox">{{report.nonOpTcpFee}}</span>）&nbsp;&nbsp;
					（10）手术治疗费：&nbsp;&nbsp;<span class="lineBox">{{report.opTFee}}</span>&nbsp;&nbsp;
					（麻醉费：&nbsp;&nbsp;<span class="lineBox">{{report.nonOpTFee}}</span>&nbsp;&nbsp;
					  手术费：&nbsp;&nbsp;<span class="lineBox">{{report.opFee}}</span>）
				</td>
			</tr>
			<tr>
				<td colspan="12">
					4.康复类：
					（11）康复费：&nbsp;&nbsp;<span class="lineBox">{{report.rehabFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					5.中医类：
					（12）中医治疗费：&nbsp;&nbsp;<span class="lineBox">{{report.cmTreatFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					6.西药类：
					(13)西药费：&nbsp;&nbsp;<span class="lineBox">{{report.wMedFee}}</span>&nbsp;&nbsp;
					（抗菌药物费用：&nbsp;&nbsp;<span class="lineBox">{{report.antCostFee}}</span>）
				</td>
			</tr>
			<tr>
				<td colspan="12">
					7.中药类：
					(14)中成药费：&nbsp;&nbsp;<span class="lineBox">{{report.cMedFee}}</span>&nbsp;&nbsp;
					(15)中草药费：&nbsp;&nbsp;<span class="lineBox">{{report.chMedFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					8.血液和血液制品类：
					(16)血费：&nbsp;&nbsp;<span class="lineBox">{{report.bloodFee}}</span>&nbsp;&nbsp;
					(17)白蛋白类制品费：&nbsp;&nbsp;<span class="lineBox">{{report.albuminFee}}</span>&nbsp;&nbsp;
					(18)球蛋白类制品费：&nbsp;&nbsp;<span class="lineBox">{{report.globulinFee}}</span>&nbsp;&nbsp;
					(19)凝血因子类制品费：&nbsp;&nbsp;<span class="lineBox">{{report.coagFactFee}}</span>&nbsp;&nbsp;
					(20)细胞因子类制品费：&nbsp;&nbsp;<span class="lineBox">{{report.collFactFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					9.耗材类：
					(21)检查用一次性医用材料费：&nbsp;&nbsp;<span class="lineBox">{{report.chUseDmmFee}}</span>&nbsp;&nbsp;
					(22)治疗用一次性医用材料费：&nbsp;&nbsp;<span class="lineBox">{{report.trUseDmmFee}}</span>&nbsp;&nbsp;
					(23)手术用一次性医用材料费：&nbsp;&nbsp;<span class="lineBox">{{report.opUseDmmFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="12">
					10.其他类：
					(24)其他费：&nbsp;&nbsp;<span class="lineBox">{{report.otherFee}}</span>&nbsp;&nbsp;
				</td>
			</tr>
		</table>
		<table border="1">
			<tr>
				<td class="alignCenter">重症监护室名称</td>
				<td class="alignCenter">进入重症监护室时间（ 年 月 日 时 分）</td>
				<td class="alignCenter">转出重症监护室时间（ 年 月 日 时 分）</td>
			</tr>
			<tr>
				<td class="mark alignCenter">&nbsp;{{report.icuName1}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate1)}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate1)}}</td>
			</tr>
			<tr>
				<td class="mark alignCenter">&nbsp;{{report.icuName2}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate2)}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate2)}}</td>
			</tr>
			<tr>
				<td class="mark alignCenter">&nbsp;{{report.icuName3}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate3)}}</td>
				<td class="mark alignCenter">{{$formatDate(report.inIcuDate3)}}</td>
			</tr>
		</table>
		<table style="border: 1px solid #1A1A1A;border-top: none;">
			<tr>
				<td colspan="3">
					危重病例：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifCriCase}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
				<td colspan="3">
					疑难病例：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifDifCase}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
				<td colspan="3">
					MDT病历：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifMdtCase}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
			</tr>
			<tr>
				<td colspan="3">
					单病种病例：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifSdCase}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
				<td colspan="3">
					日间手术病例：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifDoCase}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
				<td colspan="3">
					教学查房病历：&nbsp;&nbsp;
					<span class="checkBox">{{report.ifTeachMr}}</span>&nbsp;&nbsp;
					0.否 1.是
				</td>
			</tr>
			<tr>
				<td colspan="9">
					诊断符合情况：&nbsp;&nbsp;
					1.门诊与出院&nbsp;&nbsp;
					<span class="checkBox">{{report.ophpdiagCi}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					2.入院与出院&nbsp;&nbsp;
					<span class="checkBox">{{report.addiagCi}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					3.术前与术后&nbsp;&nbsp;
					<span class="checkBox">{{report.operdiagCi}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					4.临床与病理&nbsp;&nbsp;
					<span class="checkBox">{{report.ccasediagCi}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					5.放射与病理&nbsp;&nbsp;
					<span class="checkBox">{{report.rcasediagCi}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					（0.未做 1.符合 2.不符合 3.不确定）
				</td>
			</tr>
			<tr>
				<td colspan="9">
					抢救情况：&nbsp;&nbsp;
					抢救&nbsp;&nbsp;
					<span class="checkBox">{{report.rscNo}}</span>次&nbsp;&nbsp;&nbsp;&nbsp;
					成功&nbsp;&nbsp;
					<span class="checkBox">{{report.scRscNo}}</span>次&nbsp;&nbsp;&nbsp;&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="9">
					临床路径管理：&nbsp;&nbsp;
					<span class="checkBox">{{report.cpwManaCode}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					1.完成 2.变异 3.退出 4.未入
				</td>
			</tr>
		</table>
		<table>
			<tr>
				<td>
					说明：（一）医疗付款方式&nbsp;&nbsp;&nbsp;&nbsp;
					01.城镇职工基本医疗保险
					02.城镇居民基本医疗保险
					03.新型农村合作医疗
					04.贫困救助
					05.商业医疗保险
					06.全公费
					07.全自费
					08.其他社会保险
					99.其他<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					（二）凡可由医院信息系统提供住院费用清单的，住院病案首页中可不填写“住院费用”。
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
                report:{},
				operateList:[{},{},{}]
            }
        },
        created(){
			var reportData = this.reportData;
			if(reportData){
				this.report = reportData.firstpagemedicalrecord || {};
				if(reportData.mrOperationrecord){
					var list = reportData.mrOperationrecord;
					if(list.length<this.operateList.length){
						var num = this.operateList.length-list.length;
						for(var i=0;i<num;i++){
							list.push({});
						}
						this.operateList = list;
					}else{
						this.operateList = list;
					}
				}
			}
            
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
			.borderTopN{
				border: 1px solid #1A1A1A;
				border-top: none;
			}
            tr{
                td{
                    .juest {
                        width: 80px;
                        display: inline-block;
                        font-size: 16px;
                        text-align: right;
                        text-align: justify;
                        font-weight: bold;
                        text-align-last: justify;

                        i {
                            display: inline-block;
                            width: 100%;
                        }
                    }
                }
            }
        }
		
    }
</style>
