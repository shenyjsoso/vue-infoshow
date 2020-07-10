<template>
    <div class="reportPage">
        <div class="paperBox">
            <!-- <h1>健康体检报告</h1> -->
            <h1>{{ personalInformation.combname }}</h1>
            <h2>HEALTH EXAMINATION REPORT</h2>
            <div class="personalInfo">
                <p>
                    姓名：&nbsp;&nbsp;&nbsp;<span>{{ personalInformation.name }}</span>
                </p>
                <p>
                    性别：&nbsp;&nbsp;&nbsp;<span>{{ $aadata.sex[personalInformation.sex + ''] }}</span>
                </p>
                <p>
                    年龄：&nbsp;&nbsp;&nbsp;<span>{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}</span
                    >岁
                </p>
                <p>
                    电话：&nbsp;&nbsp;&nbsp;<span>{{ personalInformation.mobilenumber }}</span>
                </p>
            </div>
            <div class="indexFooter">
                体检机构：&nbsp;&nbsp;&nbsp;{{ personalInformation.checkuporganization }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                体检时间：&nbsp;&nbsp;&nbsp;{{ $formatDate(personalInformation.checkuptime) }}
            </div>
        </div>
        <div class="paperBox">
            <div class="title">主检结论与健康建议</div>
            <div class="subTitle">EXAMINATION CONCLUSION</div>
            <div class="resultBox">
                <p>1.异常描述：<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ personalInformation.checkupexcep }}</p>
                <p>2.结果总述：<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ personalInformation.checkupoutcome }}</p>
                <p>3.结果建议：<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ personalInformation.checkupadvice }}</p>
            </div>
            <div class="personalDetail">
                <span>姓名：{{ personalInformation.name }}</span>
                <span>性别： {{ $aadata.sex[personalInformation.sex + ''] }}</span>
                <span>年龄：{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}岁</span>
            </div>
        </div>
        <div class="paperBox" v-if="healthCheckReport.length > 0">
            <div class="title">健康检查报告</div>
            <div class="subTitle">HEALTH CHECK REPORT</div>
            <div class="tableBox">
                <table v-for="(item, index) in healthCheckReport" :key="index">
                    <tr>
                        <td colspan="6" class="titleBg">{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].projectofficename : '' }}</td>
                    </tr>
                    <tr v-for="(val, key) in item.perCheckupDetailsList" :key="key">
                        <td colspan="2">{{ val.checkupprojectname }}</td>
                        <td>{{ val.result }}</td>
                        <td colspan="3">{{ val.checkupunit }}</td>
                    </tr>
                    <tr>
                        <td colspan="6" v-if="item.checkUpSummary">体检小结：{{ item.checkUpSummary }}</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="tableFooter">
                            检查医生：{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].checkdoctname : '' }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="personalDetail">
                <span>姓名：{{ personalInformation.name }}</span>
                <span>性别： {{ $aadata.sex[personalInformation.sex + ''] }}</span>
                <span>年龄：{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}岁</span>
            </div>
        </div>
        <div class="paperBox" v-if="healthInspectionReport.length > 0">
            <div class="title">健康检验报告</div>
            <div class="subTitle">HEALTH INSPECTION REPORT</div>
            <div class="tableBox">
                <table v-for="(item, index) in healthInspectionReport" :key="index">
                    <tr>
                        <td colspan="6" class="titleBg">{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].projectofficename : '' }}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;" colspan="2">分析项目</td>
                        <td style="font-weight: bold;">Result结果</td>
                        <td style="font-weight: bold;">单位</td>
                        <td style="font-weight: bold;" colspan="2">Ref.Range参考范围</td>
                    </tr>
                    <tr v-for="(val, key) in item.perCheckupDetailsList" :key="key">
                        <td colspan="2">{{ val.checkupprojectname }}</td>
                        <td>
                            <span
                                class="bd"
                                :class="{ high: judgeTrade(val.reference, val.result) == '2', low: judgeTrade(val.reference, val.result) == '1' }"
                                >{{ val.result }}</span
                            >
                        </td>
                        <td>{{ val.checkupunit }}</td>
                        <td colspan="2">{{ val.reference }}</td>
                    </tr>
                    <tr style="height: 79px;border:2px solid #999999;">
                        <td colspan="3">检查者：{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].checkdoctname : '' }}</td>
                        <td colspan="3">审核者：{{ personalInformation.zjysxm }}</td>
                    </tr>
                </table>
            </div>
            <div class="personalDetail">
                <span>姓名：{{ personalInformation.name }}</span>
                <span>性别： {{ $aadata.sex[personalInformation.sex + ''] }}</span>
                <span>年龄：{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}岁</span>
            </div>
        </div>
        <div class="paperBox" v-for="(item, index) in diagnoseReport" :key="index">
            <div class="title" style="margin-bottom: 25px;">{{ item.itemname }}诊断报告</div>
            <div class="thirdTitle">
                <span>序号：{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].checkupno : '' }}</span>
                <span>检查时间：{{ $formatDate(item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].checkdate : '') }}</span>
                <span style="margin-right: 0;">检查科室：{{ item.perCheckupDetailsList[0] ? item.perCheckupDetailsList[0].projectofficename : '' }}</span>
            </div>
            <div class="item">检查项目：{{ item.itemname }}</div>
            <div class="tableBox">
                <table>
                    <tr style="border:2px solid rgba(77,77,77,1)">
                        <td class="titleBg">{{ item.itemname }}描述：</td>
                    </tr>
                    <tr>
                        <td>
                            {{ item.checkUpSummary }}
                        </td>
                    </tr>
                </table>

                <table>
                    <tr style="border:2px solid rgba(77,77,77,1)">
                        <td class="titleBg">{{ item.itemname }}提示：</td>
                    </tr>
                    <tr>
                        <td>
                            {{ item.exceptiondesc }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="personalDetail">
                <span>姓名：{{ personalInformation.name }}</span>
                <span>性别： {{ $aadata.sex[personalInformation.sex + ''] }}</span>
                <span>年龄：{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}岁</span>
            </div>
        </div>
        <div class="paperBox">
            <div class="title">健康指导</div>
            <div class="subTitle">HEALTH GUIDE</div>
            <div class="tableBox">
                <table>
                    <tr>
                        <td class="titleBg">健康指导</td>
                    </tr>
                    <tr>
                        <td>{{ personalInformation.checkupadvice }}</td>
                    </tr>
                </table>
            </div>
            <div class="personalDetail">
                <span>姓名：{{ personalInformation.name }}</span>
                <span>性别： {{ $aadata.sex[personalInformation.sex + ''] }}</span>
                <span>年龄：{{ $jsGetAge(personalInformation.birthday, personalInformation.checkuptime) }}岁</span>
            </div>
        </div>
        <!-- <div class="paperBox">
			<div class="title">健康检查报告</div>
			<div class="subTitle">HEALTH CHECK REPORT</div>
			<div class="tableBox">
				<table>
					<tr>
						<td colspan="6" class="titleBg">一般状况</td>
					</tr>
					<tr>
						<td colspan="2">体温</td>
						<td>{{personalAdultPhySicalInfo.temperature}}</td>
						<td colspan="3">℃</td>
					</tr>
					<tr class="bgGray">
						<td colspan="2">脉搏</td>
						<td>{{personalAdultPhySicalInfo.pulseRate}}</td>
						<td colspan="3">次/分</td>
					</tr>
					<tr>
						<td colspan="2">呼吸频率</td>
						<td>{{personalAdultPhySicalInfo.respiratoryRate}}</td>
						<td colspan="3">次/分</td>
					</tr>
					<tr class="bgGray">
						<td rowspan="2" style="border: 1px solid #CCCCCC;">血压</td>
						<td style="padding-left: 28px;">左侧</td>
						<td>{{personalAdultPhySicalInfo.leftDiastolicPressure}}/{{personalAdultPhySicalInfo.leftSystolicPressure}}</td>
						<td colspan="3">mmHg</td>
					</tr>
					<tr class="bgGray">
						<td>右侧</td>
						<td>{{personalAdultPhySicalInfo.rightDiastolicPressure}}/{{personalAdultPhySicalInfo.rightSystolicPressure}}</td>
						<td colspan="3">mmHg</td>
					</tr>
					<tr>
						<td colspan="2">身高</td>
						<td>{{personalAdultPhySicalInfo.height}}</td>
						<td colspan="3">cm</td>
					</tr>
					<tr class="bgGray">
						<td colspan="2">体重</td>
						<td>{{personalAdultPhySicalInfo.bodyWeight}}</td>
						<td colspan="3">kg</td>
					</tr>
					<tr>
						<td colspan="2">腰围</td>
						<td>{{personalAdultPhySicalInfo.waistCircumference}}</td>
						<td colspan="3">cm</td>
					</tr>
					<tr class="bgGray">
						<td colspan="2">体质指数（BMI）</td>
						<td>{{personalAdultPhySicalInfo.bodyMassIndex}}</td>
						<td colspan="3">kg/m²</td>
					</tr>
					<tr>
						<td colspan="6" class="tableFooter">
							检查医生：{{personalAdultPhySicalInfo.doctorName}}
						</td>
					</tr>
				</table>

				<table>
					<tr>
						<td colspan="5" class="titleBg">脏器功能</td>
					</tr>
					<tr>
						<td rowspan="3" style="border: 1px solid #CCCCCC;">口腔</td>
						<td style="padding-left: 28px;">口唇</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.lipsCheckResultCode=='1'">红润</span>
							<span v-if="personalAdultPhySicalInfo.lipsCheckResultCode=='2'">苍白</span>
							<span v-if="personalAdultPhySicalInfo.lipsCheckResultCode=='3'">发绀</span>
							<span v-if="personalAdultPhySicalInfo.lipsCheckResultCode=='4'">皲裂</span>
							<span v-if="personalAdultPhySicalInfo.lipsCheckResultCode=='5'">疱疹</span>
						</td>
					</tr>
					<tr>
						<td>齿列</td>
						<td colspan="3">
							<span v-for="(item,index) in splitList(personalAdultPhySicalInfo.toothCategoryCode)">
								<span v-if="item=='1'">正常</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='2'">缺齿</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='3'">龋齿</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='4'">义齿(假牙)</span>&nbsp;&nbsp;&nbsp;
							</span>
						</td>
					</tr>
					<tr>
						<td>咽部</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.pharynxCheckResultCode=='1'">无充血</span>
							<span v-if="personalAdultPhySicalInfo.pharynxCheckResultCode=='2'">充血</span>
							<span v-if="personalAdultPhySicalInfo.pharynxCheckResultCode=='3'">淋巴滤泡增生</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td rowspan="4" style="border: 1px solid #CCCCCC;">视力</td>
						<td style="padding-left: 28px;">左眼</td>
						<td colspan="3">{{personalAdultPhySicalInfo.leftUncorrecteVisualAcuity}}</td>
					</tr>
					<tr class="bgGray">
						<td>左眼矫正</td>
						<td colspan="3">{{personalAdultPhySicalInfo.leftCorrectedVisualAcuity}}</td>
					</tr>
					<tr class="bgGray">
						<td>右眼</td>
						<td colspan="3">{{personalAdultPhySicalInfo.rightUncorrecteVisualAcuity}}</td>
					</tr>
					<tr class="bgGray">
						<td>右眼矫正</td>
						<td colspan="3">{{personalAdultPhySicalInfo.rightCorrectedVisualAcuity}}</td>
					</tr>
					<tr>
						<td>听力</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.listeningTestResultCode=='1'">听见</span>
							<span v-if="personalAdultPhySicalInfo.listeningTestResultCode=='2'">听不清或无法听见</span>
						</td>
					</tr>
					<tr>
						<td>运动能力</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.motionFunctionStatuCode=='1'">可顺利完成</span>
							<span v-if="personalAdultPhySicalInfo.motionFunctionStatuCode=='2'">无法独立完成其中任何一个动作</span>
						</td>
					</tr>
					<tr>
						<td colspan="5" class="tableFooter">
							检查医生：{{personalAdultPhySicalInfo.doctorName}}
						</td>
					</tr>
				</table>

				<table>
					<tr>
						<td colspan="5" class="titleBg">查体</td>
					</tr>
					<tr>
						<td>眼底*</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.fundusExamResultAbnorFlag=='1'">正常</span>
							<span v-if="personalAdultPhySicalInfo.fundusExamResultAbnorFlag=='2'">异常</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>皮肤</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='1'">正常</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='2'">潮红</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='3'">苍白</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='4'">发绀</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='5'">黄染</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='6'">色素沉着</span>
							<span v-if="personalAdultPhySicalInfo.skinExamResultCode=='9'">其他</span>
						</td>
					</tr>
					<tr>
						<td>巩膜</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.scleralExamResultCode=='1'">正常</span>
							<span v-if="personalAdultPhySicalInfo.scleralExamResultCode=='2'">黄染</span>
							<span v-if="personalAdultPhySicalInfo.scleralExamResultCode=='3'">充血</span>
							<span v-if="personalAdultPhySicalInfo.scleralExamResultCode=='9'">其他</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>淋巴结</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.lymphNodeExamResultCode=='1'">未触及</span>
							<span v-if="personalAdultPhySicalInfo.lymphNodeExamResultCode=='2'">锁骨上</span>
							<span v-if="personalAdultPhySicalInfo.lymphNodeExamResultCode=='3'">腋窝</span>
							<span v-if="personalAdultPhySicalInfo.lymphNodeExamResultCode=='9'">其他</span>
						</td>
					</tr>
					<tr>
						<td rowspan="3" style="border: 1px solid #CCCCCC;">肺</td>
						<td style="padding-left: 28px;">桶状胸</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.barrelChestFlag=='1'">否</span>
							<span v-if="personalAdultPhySicalInfo.barrelChestFlag=='2'">是</span>
						</td>
					</tr>
					<tr>
						<td>呼吸音</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.lungAbnorBreathSoundFlag=='1'">正常</span>
							<span v-if="personalAdultPhySicalInfo.lungAbnorBreathSoundFlag=='2'">异常</span>
						</td>
					</tr>
					<tr>
						<td>罗音</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.lungRalesFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.lungRalesFlag=='2'">干罗音</span>
							<span v-if="personalAdultPhySicalInfo.lungRalesFlag=='3'">湿罗音</span>
							<span v-if="personalAdultPhySicalInfo.lungRalesFlag=='4'">其他</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td rowspan="2" style="border: 1px solid #CCCCCC;">心脏</td>
						<td style="padding-left: 28px;">心律</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.heartRateCategoryCode=='1'">齐</span>
							<span v-if="personalAdultPhySicalInfo.heartRateCategoryCode=='2'">不齐</span>
							<span v-if="personalAdultPhySicalInfo.heartRateCategoryCode=='3'">绝对不齐</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>杂音</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.heartNoiseFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.heartNoiseFlag=='2'">有</span>
						</td>
					</tr>
					<tr>
						<td rowspan="5" style="border: 1px solid #CCCCCC;">腹部</td>
						<td style="padding-left: 28px;">压痛</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.abdominalTendernessFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.abdominalTendernessFlag=='2'">有</span>
						</td>
					</tr>
					<tr>
						<td>包块</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.abdominalMassFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.abdominalMassFlag=='2'">有</span>
						</td>
					</tr>
					<tr>
						<td>肝大</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.liverBigFalg=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.liverBigFalg=='2'">有</span>
						</td>
					</tr>
					<tr>
						<td>脾大</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.spleenBigFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.spleenBigFlag=='2'">有</span>
						</td>
					</tr>
					<tr>
						<td>移动性浊音</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.abdominalMobilityVoicedFlag=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.abdominalMobilityVoicedFlag=='2'">有</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>下肢水肿</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.lowerExtremExamResultCode=='1'">无</span>
							<span v-if="personalAdultPhySicalInfo.lowerExtremExamResultCode=='2'">单侧</span>
							<span v-if="personalAdultPhySicalInfo.lowerExtremExamResultCode=='3'">双侧不对称</span>
							<span v-if="personalAdultPhySicalInfo.lowerExtremExamResultCode=='4'">双侧对称</span>
						</td>
					</tr>
					<tr>
						<td>足背动脉搏动</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.dorsalisPedisPulseCode=='1'">未触及</span>
							<span v-if="personalAdultPhySicalInfo.dorsalisPedisPulseCode=='2'">触及双侧对称</span>
							<span v-if="personalAdultPhySicalInfo.dorsalisPedisPulseCode=='3'">触及左侧弱或消失</span>
							<span v-if="personalAdultPhySicalInfo.dorsalisPedisPulseCode=='4'">触及右侧弱或消失</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>肛门指检</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.analFingerExamResultCode=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.analFingerExamResultCode=='2'">触痛</span>
							<span v-if="personalAdultPhySicalInfo.analFingerExamResultCode=='3'">包块</span>
							<span v-if="personalAdultPhySicalInfo.analFingerExamResultCode=='4'">前列腺异常</span>
							<span v-if="personalAdultPhySicalInfo.analFingerExamResultCode=='5'">其他</span>
						</td>
					</tr>
					<tr>
						<td>乳腺</td>
						<td></td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.breastExamResultCode=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.breastExamResultCode=='2'">乳房切除</span>
							<span v-if="personalAdultPhySicalInfo.breastExamResultCode=='3'">异常泌乳</span>
							<span v-if="personalAdultPhySicalInfo.breastExamResultCode=='4'">乳腺包块</span>
							<span v-if="personalAdultPhySicalInfo.breastExamResultCode=='9'">其他</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td rowspan="5" style="border: 1px solid #CCCCCC;">妇科</td>
						<td style="padding-left: 28px;">外阴</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.vulvaAbnormalFlag=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.vulvaAbnormalFlag=='2'">异常</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>阴道</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.vaginaAbnormalFlag=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.vaginaAbnormalFlag=='2'">异常</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>宫颈</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.cervicalAbnormalFlag=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.cervicalAbnormalFlag=='2'">异常</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>宫体</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.uteriAbnormalFlag=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.uteriAbnormalFlag=='2'">异常</span>
						</td>
					</tr>
					<tr class="bgGray">
						<td>附件</td>
						<td colspan="3">
							<span v-if="personalAdultPhySicalInfo.adnexalAbnormalFlag=='1'">未见异常</span>
							<span v-if="personalAdultPhySicalInfo.adnexalAbnormalFlag=='2'">异常</span>
						</td>
					</tr>
					<tr>
						<td colspan="5" class="tableFooter">
							检查医生：{{personalAdultPhySicalInfo.doctorName}}
						</td>
					</tr>
				</table>
			</div>
			<div class="personalDetail">
				<span>姓名：{{personalInformation.patientName}}</span>
				<span>
					性别：
					<span v-if="personalInformation.sexCode=='1'">男</span>
					<span v-if="personalInformation.sexCode=='2'">女</span>
				</span>
				<span>年龄：{{jsGetAge(personalInformation.birthday)}}<span v-if="personalInformation.birthday">岁</span></span>
			</div>
		</div> -->
        <!-- <div class="paperBox" v-for="(item,index) in personalExaminationDetails">
			<div class="title" style="margin-bottom: 25px;">{{item.jcmc}}诊断报告</div>
			<div class="thirdTitle">
				<span>序号：{{item.rptCode}}</span>
				<span>检查时间：{{$formatDate(item.chkDt)}}</span>
				<span style="margin-right: 0;">检查科室：{{item.jcksmc}}</span>
			</div>
			<div class="item">
				检查项目：{{item.jcmc}}
			</div>
			<div class="iframeWrapper" style="height: 710px;">
				<iframe :src="item.rptDescrip" frameborder="0" width="100%" height="100%"></iframe>
			</div>
			<div class="tableBox">
				<table>
					<tr style="border:2px solid rgba(77,77,77,1)">
						<td class="titleBg">{{item.jcmc}}描述：</td>
					</tr>
					<tr>
						<td>
							{{item.mdDisName}}
						</td>
					</tr>
				</table>
				<table>
					<tr style="border:2px solid rgba(77,77,77,1)">
						<td class="titleBg">{{item.jcmc}}提示：</td>
					</tr>
					<tr>
						<td>
							{{item.yxzd}}
						</td>
					</tr>
				</table>
			</div>
		</div> -->
        <!-- <div class="paperBox">
			<div class="title">心电图诊断报告</div>
			<div class="subTitle">ECG REPORT</div>
			<div class="thirdTitle">
				<span>序号：10226</span>
				<span>检查时间：2019-08-10 10:00:00</span>
				<span style="margin-right: 0;">检查科室：心电科</span>
			</div>
			<div class="item">
				检查项目：心电
			</div>
			<div class="imgWrapper">
				<img class="electrocardiogramImg" src="">
			</div>
			<div class="tableBox">
				<table>
					<tr style="border:2px solid rgba(77,77,77,1)">
						<td class="titleBg">心电描述：</td>
					</tr>
					<tr>
						<td>
							未见异常
						</td>
					</tr>
				</table>
				<table>
					<tr style="border:2px solid rgba(77,77,77,1)">
						<td class="titleBg">心电提示：</td>
					</tr>
					<tr>
						<td>
							未见异常
						</td>
					</tr>
				</table>
			</div>
		</div> -->
        <!-- <div class="paperBox">

			<div class="title">健康指导</div>
			<div class="subTitle">HEALTH GUIDE</div>
			<div class="tableBox">
				<table>
					<tr>
						<td class="titleBg">健康指导</td>
					</tr>
					<tr>
						<td>
							<span v-for="(item,index) in splitList(personalAdultPhySicalInfo.jkzdjylbdm)">
								<span v-if="item=='1'">纳入慢性病患者健康管理</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='2'">建议复查</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='3'">建议转诊</span>&nbsp;&nbsp;&nbsp;
							</span>
						</td>
					</tr>
				</table> -->
        <!-- <table>
					<tr>
						<td class="titleBg">危险因素控制</td>
					</tr>
					<tr>
						<td>
							<span v-for="(item,index) in splitList(personalAdultPhySicalInfo.riskfactorscontrol)">
								<span v-if="item=='1'">戒烟</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='2'">健康饮酒</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='3'">饮食</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='4'">锻炼</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='5'">减体重</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='6'">建议接种疫苗</span>&nbsp;&nbsp;&nbsp;
								<span v-if="item=='7'">其他</span>&nbsp;&nbsp;&nbsp;
							</span>
						</td>
					</tr>
				</table> -->
        <!-- </div>
		</div> -->
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            personalAdultPhySicalInfo: {},
            personalInformation: {},
            personalExaminationDetails: [],
            InhospitalList: [{}, {}, {}, {}],
            famillyHisList: [{}, {}, {}, {}],
            drugList: [{}, {}, {}, {}],
            vaccinationHisList: [{}, {}, {}, {}],
            InhospitalListLength: 4,
            healthCheckReport: [],
            healthInspectionReport: [],
            diagnoseReport: []
        }
    },
    created() {
        var reportData = this.reportData
        if (reportData) {
            /* var CRJKTJ = reportData.CRJKTJ || {};
            this.personalAdultPhySicalInfo = CRJKTJ.personalAdultPhySicalInfo || {};
            this.personalInformation = CRJKTJ.personalInformation || {};
            this.personalExaminationDetails = CRJKTJ.personalExaminationDetails || {};
            this.personalExaminationDetails = CRJKTJ.personalExaminationDetails
            this.formatList(CRJKTJ.personalInhospitalHis,'InhospitalList');
            this.formatList(CRJKTJ.personalFamillyHis,'famillyHisList');
            this.formatList(CRJKTJ.personalDrugCondition,'drugList');
            this.formatList(CRJKTJ.personalVaccinationHis,'vaccinationHisList'); */

            var CRJKTJ = reportData.CRJKTJ || {}
            if (JSON.stringify(CRJKTJ) != '{}') {
                this.personalInformation = CRJKTJ.perCheckupRegisters[0] || {} //个人基本信息
                this.healthCheckReport = CRJKTJ.perCheckDetailProject[0] //健康检查报告
                this.healthInspectionReport = CRJKTJ.perCheckDetailProject[1] //健康检验报告
                this.diagnoseReport = CRJKTJ.perCheckDetailProject[2]
            }
        }
    },
    methods: {
        splitList(str) {
            var list = []
            if (str) {
                list = str.split(',')
            }
            return list
        },
        judgeTrade(reference, result) {
            if (reference && result) {
                try {
                    var arr = reference.split('-')
                    var lowNum = parseInt(arr[0])
                    var highNum = parseInt(arr[1])
                    result = parseInt(result)
                    if (result < lowNum) {
                        return '1'
                    } else if (result > highNum) {
                        return '2'
                    }
                } catch (err) {
                    return ''
                }
            } else {
                return ''
            }
        },
        formatList(listStr = [], type) {
            var list = []
            var detailList = listStr
            if (detailList) {
                if (detailList.length >= this.InhospitalListLength) {
                    list = detailList
                } else {
                    var CL = this.InhospitalListLength - detailList.length
                    list = detailList
                    for (var i = 0; i < CL; i++) {
                        list.push({})
                    }
                }
            } else {
                for (var i = 0; i < this.InhospitalListLength; i++) {
                    list.push({})
                }
            }
            if (type == 'InhospitalList') {
                this.InhospitalList = list
            } else if (type == 'famillyHisList') {
                this.famillyHisList = list
            } else if (type == 'drugList') {
                this.drugList = list
            } else if (type == 'vaccinationHisList') {
                this.vaccinationHisList = list
            }
        },
        jsGetAge(strBirthday) {
            if (strBirthday) {
                var returnAge
                var strBirthdayArr = strBirthday.split('-')
                var birthYear = strBirthdayArr[0]
                var birthMonth = strBirthdayArr[1]
                var birthDay = strBirthdayArr[2]

                var d = new Date()
                var nowYear = d.getFullYear()
                var nowMonth = d.getMonth() + 1
                var nowDay = d.getDate()

                if (nowYear == birthYear) {
                    returnAge = 0 //同年 则为0岁
                } else {
                    var ageDiff = nowYear - birthYear //年之差
                    if (ageDiff > 0) {
                        if (nowMonth == birthMonth) {
                            var dayDiff = nowDay - birthDay //日之差
                            if (dayDiff < 0) {
                                returnAge = ageDiff - 1
                            } else {
                                returnAge = ageDiff
                            }
                        } else {
                            var monthDiff = nowMonth - birthMonth //月之差
                            if (monthDiff < 0) {
                                returnAge = ageDiff - 1
                            } else {
                                returnAge = ageDiff
                            }
                        }
                    } else {
                        returnAge = -1 //返回-1 表示出生日期输入错误 晚于今天
                    }
                }
                return returnAge //返回周岁年龄
            } else {
                return ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report.less';

.report {
    table {
        width: 860px !important;
    }
}

.reportPage {
    width: 1140px !important;
    margin: 0 auto;
}
</style>
