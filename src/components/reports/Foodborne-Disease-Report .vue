<template>
    <div class="report">
        <!-- 食源性疾病报告 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    食源性疾病报告
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter">*发生日期</td>
				<td colspan="3">
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.fsrq,'year')}}
					</span>年
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.fsrq,'month')}}
					</span>月
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.fsrq,'day')}}
					</span>日
				</td>
				<td class="alignCenter">*报告日期</td>
				<td colspan="3">
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.bgrq,'year')}}
					</span>年
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.bgrq,'month')}}
					</span>月
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.bgrq,'day')}}
					</span>日
				</td>
			</tr>
			<tr>
				<td class="alignCenter">*发生地区</td>
				<td colspan="3" class="mark">
					<!-- <span class="lineBox"></span>市
					<span class="lineBox"></span>县/区 -->
					{{reportData.fsdq}}
				</td>
				<td class="alignCenter">*发生场所具体名称</td>
				<td colspan="3" class="mark">
					{{reportData.fscsjtmc}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">*发生场所类型</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							学校食堂&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							单位食堂&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							宾馆饭店&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							街头摊点&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							食品超市&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							家庭&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('6',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							快餐店&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('7',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							送餐&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('8',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							不明&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('9',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('10',reportData.fscslx)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">*引发事件原因（可多选）</td>
				<td class="alignCenter">产生环节</td>
				<td colspan="6">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							养殖&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							生产&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							加工&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							运输&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							储存&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							销售&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('6',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('7',reportData.yfsjyycshj)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">因素</td>
				<td colspan="6">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							加工不当&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							存储不当&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							原料变质&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							交叉污染&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							误食误用&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							投毒&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('6',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							加工人员污染&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('7',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							设备污染&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('8',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							原料污染&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('9',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							原因不明&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('10',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其它&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('11',reportData.yfsjyyys)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="3">发病人群</td>
				<td colspan="7">
					暴露人数：<span class="lineBox alignCenter">
						{{reportData.fbrqblrszs}}
					</span>人
					（男<span class="lineBox alignCenter">
						{{reportData.fbrqblrsnan}}
					</span>人，女<span class="lineBox alignCenter">
						{{reportData.fbrqblrsnv}}
					</span>人）
					发病人数：<span class="lineBox alignCenter">
						{{reportData.fbrszs}}
					</span>人
					（男<span class="lineBox alignCenter">
						{{reportData.fbrsnan}}
					</span>人，女<span class="lineBox alignCenter">
						{{reportData.fbrsnv}}
					</span>人）
				</td>
			</tr>
			<tr>
				<td colspan="7">
					住院人数：<span class="lineBox alignCenter">
						{{reportData.fbrqzyrszs}}
					</span>人
					（男<span class="lineBox alignCenter">
						{{reportData.fbrqzyrsnan}}
					</span>人，女<span class="lineBox alignCenter">
						{{reportData.fbrqzyrsnv}}
					</span>人）
					死亡人数：<span class="lineBox alignCenter">
						{{reportData.fbrqswrszs}}
					</span>人
					（男<span class="lineBox alignCenter">
						{{reportData.fbrqswrsnan}}
					</span>人，女<span class="lineBox alignCenter">
						{{reportData.fbrqswrsnv}}
					</span>人）
				</td>
			</tr>
			<tr>
				<td colspan="7">
					人均医疗费用：<span class="lineBox alignCenter">
						{{reportData.fbrqrjylfy}}
					</span>元
				</td>
			</tr>
			<tr>
				<td class="alignCenter">发病人群年龄</td>
				<td colspan="7">
					0-5岁：<span class="lineBox alignCenter">
						{{reportData.fbrqnl05rs}}
					</span>人；
					6岁-15岁：<span class="lineBox alignCenter">
						{{reportData.fbrqnl615rs}}
					</span>人；
					16岁-60岁：<span class="lineBox alignCenter">
						{{reportData.fbrqnl1660rs}}
					</span>人；
					60以上：<span class="lineBox alignCenter">
						{{reportData.fbrqnl60rs}}
					</span>人
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">发病详情</td>
			</tr>
			<tr>
				<td class="alignCenter">中毒症状</td>
				<td colspan="7">
					恶心：<span class="lineBox alignCenter">{{reportData.zdzzexrs}}</span>人；
					金属味：<span class="lineBox alignCenter">{{reportData.zdzzjswrs}}</span>人；
					苍白：<span class="lineBox alignCenter">{{reportData.zdzzcbrs}}</span>人；
					色素沉着：<span class="lineBox alignCenter">{{reportData.zdzzssczrs}}</span>人；
					虚脱：<span class="lineBox alignCenter">{{reportData.zdzzxtrs}}</span>人；
					脱皮：<span class="lineBox alignCenter">{{reportData.zdzztprs}}</span>人；
					脱水：<span class="lineBox alignCenter">{{reportData.zdzztsrs}}</span>人；
					口渴：<span class="lineBox alignCenter">{{reportData.zdzzkkrs}}</span>人；
					指甲出现白带：<span class="lineBox alignCenter">{{reportData.zdzzzjcxbdrs}}</span>人；
					呕吐：<span class="lineBox alignCenter">{{reportData.zdzzotrs}}</span>人；
					贫血：<span class="lineBox alignCenter">{{reportData.zdzzpxrs}}</span>人；
					肿胀：<span class="lineBox alignCenter">{{reportData.zdzzzzrs}}</span>人；
					发绀：<span class="lineBox alignCenter">{{reportData.zdzzfgrs}}</span>人；
					肥皂味：<span class="lineBox alignCenter">{{reportData.zdzzfzwrs}}</span>人；
					唾液过多：<span class="lineBox alignCenter">{{reportData.zdzztygdrs}}</span>人；
					面部潮红：<span class="lineBox alignCenter">{{reportData.zdzzmbchrs}}</span>人；
					足/腕下垂：<span class="lineBox alignCenter">{{reportData.zdzzzwxcrs}}</span>人；
				</td>
			</tr>
			<tr>
				<td class="alignCenter">肠道感染症状</td>
				<td colspan="7">
					腹痛：<span class="lineBox alignCenter">{{reportData.cdgrzzftrs}}</span>人；
					腹泻：<span class="lineBox alignCenter">{{reportData.cdgrzzfxrs}}</span>人；
					寒战：<span class="lineBox alignCenter">{{reportData.cdgrzzhzrs}}</span>人；
					便秘：<span class="lineBox alignCenter">{{reportData.cdgrzzbmrs}}</span>人；
					发热：<span class="lineBox alignCenter">{{reportData.cdgrzzfrrs}}</span>人；
					里急后重：<span class="lineBox alignCenter">{{reportData.cdgrzzljhzrs}}</span>人；
				</td>
			</tr>
			<tr>
				<td class="alignCenter">一般感染症状</td>
				<td colspan="7">
					咳嗽：<span class="lineBox alignCenter">{{reportData.ybgrzzksrs}}</span>人；
					淋巴结肿胀：<span class="lineBox alignCenter">{{reportData.ybgrzzlbjzzrs}}</span>人；
					乏力：<span class="lineBox alignCenter">{{reportData.ybgrzzflrs}}</span>人；
					尿量减少：<span class="lineBox alignCenter">{{reportData.ybgrzznljsrs}}</span>人；
					背部/肾区疼痛：<span class="lineBox alignCenter">{{reportData.ybgrzzbsttrs}}</span>人；
					浮肿：<span class="lineBox alignCenter">{{reportData.ybgrzzfzrs}}</span>人；
					头痛：<span class="lineBox alignCenter">{{reportData.ybgrzzttrs}}</span>人；
					黄疸：<span class="lineBox alignCenter">{{reportData.ybgrzzhyrs}}</span>人；
					食欲减退：<span class="lineBox alignCenter">{{reportData.ybgrzzsytjrs}}</span>人；
					不适：<span class="lineBox alignCenter">{{reportData.ybgrzzbsrs}}</span>人；
					肌肉痛：<span class="lineBox alignCenter">{{reportData.ybgrzzjrtrs}}</span>人；
					出汗：<span class="lineBox alignCenter">{{reportData.ybgrzzchrs}}</span>人；
					颈部关节僵硬：<span class="lineBox alignCenter">{{reportData.ybgrzzjgjjyrs}}</span>人；
				</td>
			</tr>
			<tr>
				<td class="alignCenter">局部感染症状</td>
				<td colspan="7">
					耳：<span class="lineBox alignCenter">{{reportData.jbgrzzerrs}}</span>人；
					眼：<span class="lineBox alignCenter">{{reportData.jbgrzzyanrs}}</span>人；
					痒：<span class="lineBox alignCenter">{{reportData.jbgrzzyangrs}}</span>人；
					口：<span class="lineBox alignCenter">{{reportData.jbgrzzkours}}</span>人；
					皮疹：<span class="lineBox alignCenter">{{reportData.jbgrzzpzrs}}</span>人；
					皮肤破损：<span class="lineBox alignCenter">{{reportData.jbgrzzpfpsrs}}</span>人；
				</td>
			</tr>
			<tr>
				<td class="alignCenter">神经疾病症状</td>
				<td colspan="7">
					视力模糊：<span class="lineBox alignCenter">{{reportData.sjjbzzslmhrs}}</span>人；
					眼睑下垂：<span class="lineBox alignCenter">{{reportData.sjjbzzylxcrs}}</span>人；
					言语困难：<span class="lineBox alignCenter">{{reportData.sjjbzzyyknrs}}</span>人；
					麻木：<span class="lineBox alignCenter">{{reportData.sjjbzzmmrs}}</span>人；
					瘫痪：<span class="lineBox alignCenter">{{reportData.sjjbzzthrs}}</span>人；
					针刺感：<span class="lineBox alignCenter">{{reportData.sjjbzzzcgrs}}</span>人；
					昏迷：<span class="lineBox alignCenter">{{reportData.sjjbzzhmrs}}</span>人；
					抽搐：<span class="lineBox alignCenter">{{reportData.sjjbzzccrs}}</span>人；
					谵妄：<span class="lineBox alignCenter">{{reportData.sjjbzzzwrs}}</span>人；
					吞咽困难：<span class="lineBox alignCenter">{{reportData.sjjbzztyknrs}}</span>人；
					呼吸困难：<span class="lineBox alignCenter">{{reportData.sjjbzzhxknrs}}</span>人；
					晕眩：<span class="lineBox alignCenter">{{reportData.sjjbzzxyrs}}</span>人；
					复视：<span class="lineBox alignCenter">{{reportData.sjjbzzfsrs}}</span>人；
					其它症状：<span class="lineBox alignCenter">{{reportData.sjjbzzqtzzrs}}</span>；
					具体描述：<span class="lineBox alignCenter">{{reportData.sjjbzzjtmsrs}}</span>；
					其他：<span class="lineBox alignCenter">{{reportData.sjjbzzqtrs}}</span>人；
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">时间信息</td>
			</tr>
			<tr>
				<td colspan="8">
					首发时间：
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.sfsj,'year')}}
					</span>年
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.sfsj,'month')}}
					</span>月
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.sfsj,'day')}}
					</span>日
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.sfsj,'hour')}}
					</span>时；<br />
					末发时间：
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.mfsj,'year')}}
					</span>年
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.mfsj,'month')}}
					</span>月
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.mfsj,'day')}}
					</span>日
					<span class="lineBox alignCenter">
						{{$getDateFormatByType(reportData.mfsj,'hour')}}
					</span>时<br />
					潜伏期最短：<span class="lineBox alignCenter">{{reportData.qfqzd}}</span>小时；
					潜伏期最长：<span class="lineBox alignCenter">{{reportData.qfqzc}}</span>小时；
					潜伏期中值：<span class="lineBox alignCenter">{{reportData.qfqzz}}</span>小时；<br />
					潜伏期：
					0-12h：<span class="lineBox alignCenter">{{reportData.qfq012hrs}}</span>人；
					12-24h：<span class="lineBox alignCenter">{{reportData.qfq1224hrs}}</span>；
					1天-2天：<span class="lineBox alignCenter">{{reportData.qfq12trs}}</span>；
					2天-7天：<span class="lineBox alignCenter">{{reportData.qfq27trs}}</span>；<br />
					病程最短：<span class="lineBox alignCenter">{{reportData.bczd}}</span>小时；
					病程最长：<span class="lineBox alignCenter">{{reportData.bczc}}</span>小时；
					病程中值：<span class="lineBox alignCenter">{{reportData.bczz}}</span>小时；
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">*可疑食品信息</td>
			</tr>
			<tr>
				<td class="alignCenter">可疑食品名称</td>
				<td class="mark" colspan="3">{{reportData.kespmc}}</td>
				<td class="alignCenter">*食品所属分类</td>
				<td class="mark" colspan="3">{{reportData.spssfl}}</td>
			</tr>
			<tr>
				<td class="alignCenter">产品商业名</td>
				<td class="mark" colspan="3">{{reportData.cpsym}}</td>
				<td class="alignCenter">生产商</td>
				<td class="mark" colspan="3">{{reportData.scs}}</td>
			</tr>
			<tr>
				<td class="alignCenter">自制食品名称</td>
				<td class="mark" colspan="3">{{reportData.zzspmc}}</td>
				<td class="alignCenter">食品原料</td>
				<td class="mark" colspan="3">{{reportData.spyl}}</td>
			</tr>
			<tr>
				<td class="alignCenter">食品销售方法</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							自制销售&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.spxsff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							长途运输销售&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.spxsff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							短途运输销售&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.spxsff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							连锁销售&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.spxsff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.spxsff)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">食品加工方法</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							高温熟制&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							中温加热&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							巴士杀菌&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							生食&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							冷冻食用&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('6',reportData.spjgff)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">食品采购时间</td>
				<td colspan="7" class="mark">
					{{reportData.spcgsj}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">食品运输手段</td>
				<td colspan="7">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							汽车&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.spyssd)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							火车&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.spyssd)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							船舶&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.spyssd)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							航空&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.spyssd)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.spyssd)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">样品检测信息</td>
			</tr>
			<tr>
				<td class="alignCenter">送检实验室名称</td>
				<td class="mark" colspan="3">
					{{reportData.sjsysmc}}
				</td>
				<td class="alignCenter">送检时间</td>
				<td class="mark" colspan="3">
					{{$formatDate(reportData.sjsj,'yyyy-MM-dd hh:mm')}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">食品样品</td>
				<td colspan="7">
					食品1名称：<span class="lineBox alignCenter">
						{{reportData.sp1mc}}
					</span>；
					*取样数量：<span class="lineBox alignCenter">
						{{reportData.sp1qysl}}
					</span>；<br/>
					化学物名称1：<span class="lineBox alignCenter">
						{{reportData.sp1hxwmc1}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp1jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp1jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp1jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1jcjg2dw}}
					</span>）；<br/>
					化学物名称2：<span class="lineBox alignCenter">
						{{reportData.sp1hxmc2}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp1hxmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp1hxmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp1hxmc2jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp1hxmc2jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1hxmc2jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp1hxmc2jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1hxmc2jcjg2dw}}
					</span>）；<br/>
					微生物名称1：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc1}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp1wswmc1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp1wswmc1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp1wswmc1jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc1jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc1jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc1jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc1jcjg2dw}}
					</span>）；<br/>
					微生物名称2：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc2}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp1wswmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp1wswmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp1wswmc2jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc2jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc2jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc2jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp1wswmc2jcjg2dw}}
					</span>）；
				</td>
			</tr>
			<tr>
				<td colspan="7">
					食品2名称：<span class="lineBox alignCenter">
						{{reportData.sp2mc}}
					</span>；
					*取样数量：<span class="lineBox alignCenter">
						{{reportData.sp2qysl}}
					</span>；<br/>
					化学物名称1：<span class="lineBox alignCenter">
						{{reportData.sp2hxwmc1}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp2jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp2jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp2jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2jcjg2dw}}
					</span>）；<br/>
					化学物名称2：<span class="lineBox alignCenter">
						{{reportData.sp2hxmc2}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp2hxmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp2hxmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp2hxmc2jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp2hxmc2jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2hxmc2jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp2hxmc2jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2hxmc2jcjg2dw}}
					</span>）；<br/>
					微生物名称1：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc1}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp2wswmc1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp2wswmc1jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp2wswmc1jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc1jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc1jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc1jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc1jcjg2dw}}
					</span>）；<br/>
					微生物名称2：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc2}}
					</span>；
					检测方法：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标一法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.sp2wswmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							国标二法&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.sp2wswmc2jcff)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							其他&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.sp2wswmc2jcff)">&#xe631;</i>
						</div>
					</div><br/>
					检测结果1：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc2jcjg1}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc2jcjg1dw}}
					</span>）；
					检测结果2：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc2jcjg2}}
					</span>（单位：<span class="lineBox alignCenter">
						{{reportData.sp2wswmc2jcjg2dw}}
					</span>）；
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">生物样品</td>
				<td colspan="7">
					样本1来源：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							病人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yb1ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							健康人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yb1ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							食品加工者&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yb1ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							环境&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yb1ly)">&#xe631;</i>
						</div>
					</div><br />
					样本1类型：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							腹泻物&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yb1lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							呕吐物&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yb1lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							血样&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yb1lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							肛拭子&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yb1lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							尿液&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.yb1lx)">&#xe631;</i>
						</div>
					</div><br />
					检测指标名称：<span class="lineBox alignCenter">
						{{reportData.yb1jczbmc}}
					</span>；
					检测方法：<span class="lineBox alignCenter">
						{{reportData.yb1jcff}}
					</span><br />
					采样数量：<span class="lineBox alignCenter">
						{{reportData.yb1cysl}}
					</span>
					阳性数量：<span class="lineBox alignCenter">
						{{reportData.yb1yxsl}}
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="7">
					样本2来源：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							病人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yb2ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							健康人&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yb2ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							食品加工者&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yb2ly)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							环境&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yb2ly)">&#xe631;</i>
						</div>
					</div><br />
					样本2类型：
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							腹泻物&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('1',reportData.yb2lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							呕吐物&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('2',reportData.yb2lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							血样&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('3',reportData.yb2lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							肛拭子&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('4',reportData.yb2lx)">&#xe631;</i>
						</div>
					</div>
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							尿液&nbsp;&nbsp;&nbsp;
							<i class="iconfont xz" v-if="$isChecked('5',reportData.yb2lx)">&#xe631;</i>
						</div>
					</div><br />
					检测指标名称：<span class="lineBox alignCenter">
						{{reportData.yb2jczbmc}}
					</span>；
					检测方法：<span class="lineBox alignCenter">
						{{reportData.yb2jcff}}
					</span><br />
					采样数量：<span class="lineBox alignCenter">
						{{reportData.yb2cysl}}
					</span>
					阳性数量：<span class="lineBox alignCenter">
						{{reportData.yb2yxsl}}
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">*诊断信息</td>
			</tr>
			<tr>
				<td class="alignCenter">*原因食品名称</td>
				<td class="mark" colspan="3">
					{{reportData.yyspmc}}
				</td>
				<td class="alignCenter">*原因食品分类</td>
				<td class="mark" colspan="3">
					{{reportData.yyspfl}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">*致病因素</td>
				<td class="mark" colspan="3">
					{{reportData.zbys}}
				</td>
				<td class="alignCenter">诊断名称</td>
				<td class="mark" colspan="3">
					{{reportData.zdmc}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="8" style="font-weight: bold;">填报信息</td>
			</tr>
			<tr>
				<td class="alignCenter">*填报人</td>
				<td class="mark" colspan="3">
					{{reportData.reporterName}}
				</td>
				<td class="alignCenter">填报日期</td>
				<td class="mark" colspan="3">
					{{$formatDate(reportData.reportDate,'yyyy-MM-dd hh:mm')}}
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
			.borderB{
				border-bottom: 1px solid black;
				display: inline-block;
				min-width: 40px;
				text-align:center;
				color:#195aff;
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