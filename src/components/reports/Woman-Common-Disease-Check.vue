<template>
    <div class="report">
        <!-- 已婚妇女常见妇女病免费检查表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    已婚妇女常见妇女病免费检查表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="24">
                    <p>
                        <span class="borderB">{{reportData.xzdzshi}}</span> 市
                        <span class="borderB">{{reportData.xzdzqu}}</span></span> 县（区）
                        <span class="borderB">{{reportData.xzdzxiang}}</span></span> 乡镇（街道）
                        <span class="borderB">{{reportData.xzdzcun}}</span></span> 村（居）
                    </p>
                </td>
                <td colspan="3" class="alignCenter">登记表编号</td>
                <td colspan="4" class="mark">{{personalWomanCommonScr.fncjbscjlbdbh}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">姓名</td>
                <td colspan="3" class="mark">{{personalWomanCommonScr.name}}</td>
                <td colspan="2" class="alignCenter">年龄</td>
                <td colspan="2" class="mark">{{$formatDate(new Date(),'yyyy')-$formatDate(personalWomanCommonScr.birthday,'yyyy')}}</td>
                <td colspan="2" class="alignCenter">职业</td>
                <td colspan="2" class="mark">{{personalWomanCommonScr.occupation}}</td>
                <td colspan="3" class="alignCenter">单位或住址</td>
                <td colspan="8" class="mark">{{personalWomanCommonScr.workplaceOrAddress}}</td>
                <td colspan="3" class="alignCenter">电话号码</td>
                <td colspan="4" class="mark">{{personalWomanCommonScr.phoneNumber}}</td>
            </tr>
            <tr>
                <td colspan="31">
                    <p>
                        <span class="bolder">婚育史：</span>
                        结婚（<span style="color: #1951FF;">{{personalWomanCommonScr.marriageableAge}}</span>）岁，
                        足月产（<span style="color: #1951FF;">{{personalWomanCommonScr.zyccs}}</span>）胎，
                        早产（<span style="color: #1951FF;">{{personalWomanCommonScr.zccs}}</span>）胎，
                        中孕引产（<span style="color: #1951FF;">{{personalWomanCommonScr.middlePregnancyTimes}}</span>）次，
                        自然流产、人工流产、药物流产（<span style="color: #1951FF;">{{personalWomanCommonScr.medicalAbortionTimes}}</span>）次，
                        末产（<span style="color: #1951FF;">{{personalWomanCommonScr.lastdatedeliverytime}}</span>）年,
                        末孕（<span style="color: #1951FF;">{{personalWomanCommonScr.mcrszzrq}}</span>）年
                    </p>
                </td>
            </tr>
            <tr>
                <td colspan="31">
                    <span class="bolder">月经情况：</span>
                    初潮（<span style="color: #1951FF;">{{personalWomanCommonScr.menarcheyear}}</span>）岁，
                    周期：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            规则&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.yjzq=='规则'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            不规则
                            <i class="iconfont xz" v-if="personalWomanCommonScr.yjzq=='不规则'">&#xe631;</i>
                        </div>
                    </div>），
                    经量：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            多&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.menstrualBleedingAmount=='多'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            中&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.menstrualBleedingAmount=='中'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            少
                            <i class="iconfont xz" v-if="personalWomanCommonScr.menstrualBleedingAmount=='少'">&#xe631;</i>
                        </div>
                    </div>），
                    痛经：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.dysmenorrheaflag=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.dysmenorrheaflag=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    绝经年龄（<span style="color: #1951FF;">{{personalWomanCommonScr.menopausalage}}</span>）岁，
                    末次月经：（<span style="color: #1951FF;">{{$formatDate(personalWomanCommonScr.lastmenstrualperiod)}}</span>），
                    避孕情况：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            未避孕&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='未避孕'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            避孕套&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='避孕套'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            上环&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='上环'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            结扎&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='结扎'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            服药&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='服药'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            其他&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contraceptionCondition=='其他'">&#xe631;</i>
                        </div>
                    </div>）
                </td>
            </tr>
            <tr>
                <td colspan="31">
                    <span class="bolder">病史：</span>
                    白带血丝：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.leukorrheaBleedingFlag=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.leukorrheaBleedingFlag=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    接触性出血：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contactBleedingFlag=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.contactBleedingFlag=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    阴道不规则出血：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.vaginalBleedingFlag=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.vaginalBleedingFlag=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    子宫肌瘤：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfzgjlhb=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfzgjlhb=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    卵巢癌：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrcahb=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrcahb=='0'">&#xe631;</i>
                        </div>
                    </div>），
                    尿失禁：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.urinaryIncontinenceFlag=='1'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.urinaryIncontinenceFlag=='0'">&#xe631;</i>
                        </div>
                    </div>）， 其他：<span class="lineBox">{{personalWomanCommonScr.medicalHistoryOther}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="31">
                    <span class="bolder">手术史：</span>
                    子宫切除：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.hysterectomyFlag=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.hysterectomyFlag=='无'">&#xe631;</i>
                        </div>
                    </div>），
                    附件切除：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.adnexectomyFlag=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.adnexectomyFlag=='无'">&#xe631;</i>
                        </div>
                    </div>），
                    乳腺手术：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.breastOperationFlag=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.breastOperationFlag=='无'">&#xe631;</i>
                        </div>
                    </div>）<br />
                    <span class="bolder">家族肿瘤史：</span>
                    宫颈癌：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfgjahb=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfgjahb=='无'">&#xe631;</i>
                        </div>
                    </div>），
                    卵巢癌：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrcahb=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrcahb=='无'">&#xe631;</i>
                        </div>
                    </div>），
                    乳腺癌：（
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            有&nbsp;&nbsp;&nbsp;
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrxahb=='有'">&#xe631;</i>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <span class="checkBox"></span>
                            无
                            <i class="iconfont xz" v-if="personalWomanCommonScr.sfrxahb=='无'">&#xe631;</i>
                        </div>
                    </div>），
                    其他：<span class="lineBox">{{personalWomanCommonScr.jzzls}}</span>
                </td>
            </tr>
            <tr>
                <td rowspan="8" class="alignCenter">妇科检查</td>
                <td rowspan="3" colspan="2" class="alignCenter">日期</td>
                <td rowspan="3" colspan="2" class="alignCenter">普查号</td>
                <td colspan="8" class="alignCenter">外阴</td>
                <td colspan="6" class="alignCenter">阴道</td>
                <td colspan="8" class="alignCenter">宫颈</td>
                <td colspan="4" class="alignCenter">宫颈糜烂</td>
            </tr>
            <tr>
                <td rowspan="2" class="alignCenter">正常</td>
                <td rowspan="2" class="alignCenter">色素减退</td>
                <td rowspan="2" class="alignCenter">巴氏腺囊肿</td>
                <td rowspan="2" class="alignCenter">溃疡</td>
                <td rowspan="2" class="alignCenter">尖锐湿疣</td>
                <td rowspan="2" colspan="3" class="alignCenter">其他</td>
                <td rowspan="2" class="alignCenter">正常</td>
                <td colspan="3" class="alignCenter">膨出</td>
                <td rowspan="2" class="alignCenter">尖锐湿疣</td>
                <td rowspan="2" class="alignCenter">其他*</td>
                <td rowspan="2" class="alignCenter">正常</td>
                <td rowspan="2" class="alignCenter">肥大</td>
                <td rowspan="2" colspan="3" class="alignCenter">尖锐湿疣</td>
                <td rowspan="2" colspan="3" class="alignCenter">其他*</td>
                <td rowspan="2" class="alignCenter">无</td>
                <td rowspan="2" class="alignCenter">轻</td>
                <td rowspan="2" class="alignCenter">中</td>
                <td rowspan="2" class="alignCenter">重</td>
            </tr>
            <tr>
                <td class="alignCenter">Ⅰ</td>
                <td class="alignCenter">Ⅱ</td>
                <td class="alignCenter">Ⅲ</td>
            </tr>
            <tr>
                <td class="mark" colspan="2">&nbsp;{{$formatDate(personalWomanCommonScr.checktime)}}</td>
                <td class="mark" colspan="2">{{personalWomanCommonScr.serialNumber}}</td>
                <td class="mark">
                    <i class="iconfont xz" v-if="!personalWomanCommonScr.wySsjt&&!personalWomanCommonScr.wyBsxn
                            &&!personalWomanCommonScr.wyKy&&!personalWomanCommonScr.wyJrsy&&!personalWomanCommonScr.wyQt">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.wySsjt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.wyBsxnz=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.wyKy=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.wyJrsy=='1'">&#xe631;</i>
                </td>
                <td class="mark" colspan="3">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.wyQt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="!personalWomanCommonScr.ydPc&&!personalWomanCommonScr.ydJrsy
                            &&!personalWomanCommonScr.ydQt">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydPc=='Ⅰ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydPc=='Ⅱ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydPc=='Ⅲ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydJrsy=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydQt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="!personalWomanCommonScr.gjFd&&!personalWomanCommonScr.gjJrsy&&!personalWomanCommonScr.gjQt">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjFd=='1'">&#xe631;</i>
                </td>
                <td class="mark" colspan="3">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjJrsy=='1'">&#xe631;</i>
                </td>
                <td class="mark" colspan="3">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjQt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjmlcd=='无'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjmlcd=='轻'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjmlcd=='中'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjmlcd=='重'">&#xe631;</i>
                </td>
            </tr>
            <tr>
                <td colspan="8" class="alignCenter">宫体</td>
                <td colspan="2" rowspan="2" class="alignCenter">子宫脱垂Ⅱ度以上</td>
                <td colspan="8" class="alignCenter">附件</td>
                <td colspan="2" rowspan="3" class="alignCenter">检验者签名</td>
                <td colspan="6" class="alignCenter">白带常规</td>
                <td colspan="2" class="alignCenter">阴道炎治疗</td>
                <td colspan="2" class="alignCenter">妇科B超检查</td>
            </tr>
            <tr>
                <td rowspan="2" class="alignCenter">正常</td>
                <td colspan="3" class="alignCenter">增大</td>
                <td rowspan="2" colspan="3" class="alignCenter">压痛</td>
                <td rowspan="2" class="alignCenter">其他*</td>
                <td rowspan="2" class="alignCenter">正常</td>
                <td colspan="2" class="alignCenter">增厚</td>
                <td colspan="2" class="alignCenter">囊肿大小*</td>
                <td colspan="2" class="alignCenter">压痛</td>
                <td rowspan="2" class="alignCenter">其他</td>
                <td rowspan="2" class="alignCenter">滴虫</td>
                <td rowspan="2" class="alignCenter">霉菌</td>
                <td colspan="3" class="alignCenter">清洁度</td>
                <td rowspan="2" class="alignCenter">其他*</td>
                <td rowspan="2" class="alignCenter">无</td>
                <td rowspan="2" class="alignCenter">有</td>
                <td rowspan="2" class="alignCenter">未见异常</td>
                <td rowspan="2" class="alignCenter">其他</td>
            </tr>
            <tr>
                <td class="alignCenter">1+月</td>
                <td class="alignCenter">2+月</td>
                <td class="alignCenter">≥3月</td>
                <td class="alignCenter">新*</td>
                <td class="alignCenter">旧</td>
                <td class="alignCenter">左</td>
                <td class="alignCenter">右</td>
                <td class="alignCenter">左</td>
                <td class="alignCenter">右</td>
                <td class="alignCenter">左</td>
                <td class="alignCenter">右</td>
                <td class="alignCenter">Ⅰ-Ⅱ</td>
                <td class="alignCenter">Ⅲ</td>
                <td class="alignCenter">Ⅳ</td>
            </tr>
            <tr>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="!personalWomanCommonScr.gtZd&&!personalWomanCommonScr.gtYt&&!personalWomanCommonScr.gtQt">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="!personalWomanCommonScr.gtZd&&!personalWomanCommonScr.gtYt&&!personalWomanCommonScr.gtQt">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='1+月'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='1+月'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='2+月'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='2+月'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='≥3月'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gtZd=='≥3月'">&#xe631;</i>
                </td>
                <td class="mark" colspan="3">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.gtYt=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gtYt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.gtQt=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gtQt=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.zgtc=='新'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.zgtc=='新'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.zgtc=='旧'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.zgtc=='旧'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="!personalWomanCommonScr.fjZh&&!personalWomanCommonScr.fjNzdx
                            &&!personalWomanCommonScr.fjYt&&!personalWomanCommonScr.fjQt">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="!personalWomanCommonScr.fjZh&&!personalWomanCommonScr.fjNzdx
                            &&!personalWomanCommonScr.fjYt&&!personalWomanCommonScr.fjQt">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjZh=='左'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjZh=='左'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjZh=='右'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjZh=='右'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjNzdx=='左'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjNzdx=='左'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjNzdx=='右'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjNzdx=='右'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjYt=='左'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjYt=='左'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjYt=='右'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjYt=='右'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fjQt=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fjQt=='1'">&#xe631;</i>
                </td>
                <td class="mark" colspan="2">{{personalWomanCommonScr.fkjcJyzxm}}</td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgDc=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgDc=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgMj=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgMj=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅰ-Ⅱ'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅰ-Ⅱ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅲ'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅲ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅳ'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgQjd=='Ⅳ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgCg=='1'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.bdcgCg=='1'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.ydyzl=='无'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydyzl=='无'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.ydyzl=='有'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydyzl=='有'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fkbcjc=='未见异常'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fkbcjc=='未见异常'">&#xe631;</i>
                </td>
                <td class="mark">
                    <!-- <div style="display: inline-block;vertical-align: top;">
                        <div class="jy">
                            <i class="iconfont xz" v-if="personalWomanCommonScr.fkbcjc=='其他'">&#xe631;</i>
                        </div>
                    </div> -->
                    <i class="iconfont xz" v-if="personalWomanCommonScr.fkbcjc=='其他'">&#xe631;</i>
                </td>
            </tr>
            <tr>
                <td colspan="14" class="alignCenter">宫颈细胞学检查(巴氏分类、TBS分类）</td>
                <td colspan="2" rowspan="2" class="alignCenter">检查者签名</td>
                <td colspan="4" class="alignCenter">阴道镜检查</td>
                <td rowspan="2" class="alignCenter">检查单位及检查者</td>
                <td colspan="7" class="alignCenter">宫颈组织病理学诊断</td>
                <td rowspan="2" class="alignCenter">检查单位及检查者</td>
                <td colspan="2" class="alignCenter">宫颈异常处理建议</td>
            </tr>
            <tr>
                <td class="alignCenter">Ⅰ</td>
                <td class="alignCenter">Ⅱ</td>
                <td class="alignCenter">Ⅲ</td>
                <td class="alignCenter">Ⅳ</td>
                <td class="alignCenter">Ⅴ</td>
                <td class="alignCenter">NILM</td>
                <td class="alignCenter">ASC-US</td>
                <td class="alignCenter">ASC-H</td>
                <td class="alignCenter">LSIL</td>
                <td class="alignCenter">HSIL</td>
                <td class="alignCenter">SDD</td>
                <td class="alignCenter">AGC</td>
                <td class="alignCenter">AIS</td>
                <td class="alignCenter">ACC</td>
                <td class="alignCenter">阴性</td>
                <td class="alignCenter">阳性</td>
                <td class="alignCenter">可疑</td>
                <td class="alignCenter">其他</td>
                <td class="alignCenter">阴性</td>
                <td class="alignCenter">CINⅠ</td>
                <td class="alignCenter">CINⅡ</td>
                <td class="alignCenter">CINⅢ及原位癌</td>
                <td class="alignCenter">浸润癌</td>
                <td colspan="2" class="alignCenter">其他</td>
                <td class="alignCenter">治疗有/无</td>
                <td class="alignCenter">转诊</td>
            </tr>
            <tr>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='Ⅰ'">&#xe631;</i>&nbsp;
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='Ⅱ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='Ⅲ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='Ⅳ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='Ⅴ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='NILM'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='ASC-US'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='ASC-H'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='LSIL'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='HSIL'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='SDD'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='AGC'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='AIS'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjtlxbxjcjgdm=='ACC'">&#xe631;</i>
                </td>
                <td class="mark" colspan="2">{{personalWomanCommonScr.gjxbxjcJczqm}}</td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydjjcjg=='阴性'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydjjcjg=='阳性'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydjjcjg=='可疑'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.ydjjcjg=='其他'">&#xe631;</i>
                </td>
                <td class="mark">{{personalWomanCommonScr.ydjjcjgJcdwjjcz}}</td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='阴性'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='CINⅠ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='CINⅡ'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='CINⅢ及原位癌'">&#xe631;</i>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='浸润癌'">&#xe631;</i>
                </td>
                <td class="mark" colspan="2">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjzzblxjcjg=='其他'">&#xe631;</i>
                </td>
                <td class="mark">{{personalWomanCommonScr.gjzzblxjcjgJcdwjjcz}}</td>
                <td class="mark">
                    <span v-if="personalWomanCommonScr.gjyccljy!='转诊'">{{personalWomanCommonScr.gjyccljy}}</span>
                </td>
                <td class="mark">
                    <i class="iconfont xz" v-if="personalWomanCommonScr.gjyccljy=='转诊'">&#xe631;</i>
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
            personalWomanCommonScr: {}
        }
    },
    created() {
        // console.log(this.reportData)
        this.personalWomanCommonScr = this.reportData.personalWomanCommonScr || {};
    },
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

table tr {
    td {
        .jy {
            position: relative;

            // top: -15px;
            // left: -3px;
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

    .bolder {
        font-weight: bolder;
    }

    .borderB {
        border-bottom: 1px solid black;
        display: inline-block;
        min-width: 50px;
        text-align: center;
        color: #195aff;
    }

    p {
        text-align: left;
    }
}
</style>