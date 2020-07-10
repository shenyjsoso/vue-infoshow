<template>
    <div class="report">
        <!-- 1～8月龄儿童健康检查记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">1～8月龄儿童健康检查记录表</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{report.oMonth.patientName}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{report.oMonth.childHealthExamRecordNo}}</span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col style="width: 50px;">
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <tr>
                <td colspan="2" class="alignCenter">月龄</td>
                <td class="alignCenter">满月</td>
                <td class="alignCenter">3月龄</td>
                <td class="alignCenter">6月龄</td>
                <td class="alignCenter">8月龄</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访日期</td>
                <td class="mark">
                    {{$formatDate(report.oMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.tMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.sMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.eMonth.flupDate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">体重/kg</td>
                <td class="mark">
                    <span class="lineBox">{{report.oMonth.childrenWeight}}</span>&nbsp;<br>
                    <div class="jy">
                        <span class="checkBox"></span>上
                        <i class="iconfont xz">&#xe631;</i>
                    </div>
                    <div class="jy">
                        <span class="checkBox"></span>中
                        <i class="iconfont xz">&#xe631;</i>
                    </div>
                    <div class="jy">
                        <span class="checkBox"></span>下
                        <i class="iconfont xz">&#xe631;</i>
                    </div>
                </td>
                <td class="mark">
                    {{report.tMonth.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.sMonth.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.eMonth.childrenWeight}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">身长/cm</td>
                <td class="mark">{{report.oMonth.childrenHeight}}</td>
                <td class="mark">{{report.tMonth.childrenHeight}}</td>
                <td class="mark">{{report.sMonth.childrenHeight}}</td>
                <td class="mark">{{report.eMonth.childrenHeight}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">头围/cm</td>
                <td class="mark">{{report.oMonth.headCircumference}}</td>
                <td class="mark">{{report.tMonth.headCircumference}}</td>
                <td class="mark">{{report.sMonth.headCircumference}}</td>
                <td class="mark">{{report.eMonth.headCircumference}}</td>
            </tr>
            <tr>
                <td rowspan="16" class="alignCenter">体格检查</td>
                <td class="alignCenter">面色</td>
                <td class="mark">{{report.oMonth.neonatalFaceName}}</td>
                <td class="mark">{{report.tMonth.neonatalFaceName}}</td>
                <td class="mark">{{report.sMonth.neonatalFaceName}}</td>
                <td class="mark">{{report.eMonth.neonatalFaceName}}</td>
                <!-- <td>
                    1 红润 2 黄染 3 其他<br>
                    <span class="lineBox">
                        {{report.oMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2 黄染 3 其他<br>
                    <span class="lineBox">
                        {{report.tMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2 其他<br>
                    <span class="lineBox">
                        {{report.sMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2 其他<br>
                    <span class="lineBox">
                        {{report.eMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.de041002600}}
                        </span>
                    </span>
                </td> -->
            </tr>
            <tr>
                <td class="alignCenter">皮肤</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">前 囟</td>
                <td>
                    1 闭合 ２未闭
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.oMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.oMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.tMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.tMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.sMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.sMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.eMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.eMonth.anteriorHalftone}}
                    </span>cm
                </td>
            </tr>
            <tr>
                <td class="alignCenter">颈部包块</td>
                <td>
                    1 有 2 无
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041010300}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.neckMassFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 有 2 无
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041010300}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.neckMassFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 有 2 无
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041010300}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.neckMassFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    <!-- 1 有 2 无<br>
                    <span class="lineBox">
                        {{report.eMonth.de041010300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.de041010400}}
                        </span>
                    </span> -->
                </td>
            </tr>
            <tr>
                <td class="alignCenter">眼睛</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">耳</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">听力</td>
                <td></td>
                <td></td>
                <td>
                    1 通过 2 未通过
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.ap043006400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.neonatalUnhsResultsCode}}
                        </span>
                    </span>
                </td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">口腔</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041010700}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.oralExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041010700}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.oralExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    出牙数<span class="lineBox">
                        {{report.sMonth.teethNumber}}
                    </span>（颗）
                </td>
                <td>
                    出牙数<span class="lineBox">
                        {{report.eMonth.teethNumber}}
                    </span>（颗）
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">胸部</td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.oMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.tMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.sMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.eMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">腹部</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041004600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.abdominalTouchAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">脐部</td>
                <td align="top">
                    1 未脱 2 脱落 <br>3 脐部有渗出 4 其他
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041014400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.umbilicalCordOffFlag}}
                        </span>
                    </span>
                </td>
                <td align="top">
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041014400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.umbilicalCordOffFlag}}
                        </span>
                    </span>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">四肢</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.limbMobilityAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.limbMobilityAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.limbMobilityAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.limbMobilityAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">可疑佝偻病症状</td>
                <td></td>
                <td>
                    1 无 2 夜惊 <br>3 多汗 4 烦躁
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.suspectRicketsSymptomCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无 2 夜惊 <br>3 多汗 4 烦躁
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.suspectRicketsSymptomCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无 2 夜惊 <br>3 多汗 4 烦躁
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041017900}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.suspectRicketsSymptomCode}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">可疑佝偻病体征</td>
                <td></td>
                <td valign="top">
                    1 无 <br>2 颅骨软化
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.ap041014400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.suspectRicketsFlagCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无 <br>2 肋串珠<br>
                    3肋软骨沟<br>
                    4鸡胸 <br>5 手足镯<br>
                    6 颅骨软化<br> 7 方颅
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.ap041014400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.suspectRicketsFlagCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无 <br>2 肋串珠<br>
                    3肋软骨沟<br>
                    4鸡胸<br> 5 手足镯<br>
                    6 颅骨软化<br> 7 方颅
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.ap041014400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.suspectRicketsFlagCode}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">肛门</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041024000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.anusExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041024000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.anusExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041024000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.anusExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041024000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.anusExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">外生殖</td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.de041019500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.oMonth.aedeaExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.de041019500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.tMonth.aedeaExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.de041019500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.sMonth.aedeaExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.de041019500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.eMonth.aedeaExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">血红蛋白值</td>
                <td></td>
                <td></td>
                <td>
                    <span class="lineBox">
                        {{report.sMonth.hemoglobinValue}}
                    </span>g/L
                </td>
                <td>
                    <span class="lineBox">
                        {{report.eMonth.hemoglobinValue}}
                    </span>g/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">户外活动</td>
                <td>
                    <span class="lineBox">
                        {{report.oMonth.outdoorActivitiesDuration}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.tMonth.outdoorActivitiesDuration}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.sMonth.outdoorActivitiesDuration}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.eMonth.outdoorActivitiesDuration}}
                    </span>小时/日
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">服用维生素D</td>
                <td>
                    <span class="lineBox">
                        {{report.oMonth.takingVitaminDDose}}
                    </span>IU/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.tMonth.takingVitaminDDose}}
                    </span>IU/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.sMonth.takingVitaminDDose}}
                    </span>IU/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.eMonth.takingVitaminDDose}}
                    </span>IU/日
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">发育评估</td>
                <td></td>
                <td valign="top">
                    1.对很大声音没有反应<br>
                    2.逗引时不发音或不会微笑<br>
                    3.不注视人脸，不追视移动人或物品<br>
                    4.俯卧时不会抬头
                    <span class="rightBox" v-if="report.tMonth.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tMonth.physicalGrowthEvaluateCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.发音少，不会笑出声<br>
                    2.不会伸手抓物<br>
                    3.紧握拳松不开<br>
                    4.不能扶坐
                    <span class="rightBox" v-if="report.sMonth.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sMonth.physicalGrowthEvaluateCode)" :key="index">
                            <!-- {{report.sMonth.de051001700}} -->
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.听到声音无应答<br>
                    2.不会区分生人和熟人<br>
                    3.双手间不会传递玩具<br>
                    4.不会独坐
                    <span class="rightBox" v-if="report.eMonth.physicalGrowthEvaluateCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.eMonth.physicalGrowthEvaluateCode)" :key="index">
                            <!-- {{report.eMonth.de051001700}} -->
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">两次随访间患病情况</td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.oMonth.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.oMonth.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.oMonth.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.oMonth.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.oMonth.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.oMonth.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.tMonth.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.tMonth.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.tMonth.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.tMonth.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.tMonth.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tMonth.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.sMonth.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.sMonth.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.sMonth.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.sMonth.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.sMonth.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sMonth.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肺炎<span class="lineBox">
                        {{report.eMonth.flUp2PneumoniaInhospTimes}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.eMonth.flUp2DiarrheaInhospTimes}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.eMonth.flUp2TraumaInhospTimes}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.eMonth.flUp2OdiseaseInhospTimes}}
                    </span>
                    <span class="rightBox" v-if="report.eMonth.flUp2SickenFlag">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.eMonth.flUp2SickenFlag)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">转诊建议</td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                            {{report.oMonth.transferTreatmentFlag}}
                        </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.oMonth.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.oMonth.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.oMonth.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                            {{report.tMonth.transferTreatmentFlag}}
                        </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.tMonth.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.tMonth.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.tMonth.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                            {{report.sMonth.transferTreatmentFlag}}
                        </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.sMonth.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.sMonth.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.sMonth.transformInOrgDeptName}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                            {{report.eMonth.transferTreatmentFlag}}
                        </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.eMonth.transferTreatmentReason}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.eMonth.transformInOrgName}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.eMonth.transformInOrgDeptName}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">指 导</td>
                <td>
                    1 科学喂养<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他
                    <!-- <br>
                    <span class="lineBox">
                        {{report.oMonth.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.oMonth.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.oMonth.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 科学喂养<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他
                    <!-- <br>
                    <span class="lineBox">
                        {{report.tMonth.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.tMonth.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.tMonth.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 科学喂养<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他
                    <!-- <br>
                    <span class="lineBox">
                        {{report.sMonth.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.sMonth.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.sMonth.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 科学喂养<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他
                    <!-- <br>
                    <span class="lineBox">
                        {{report.eMonth.guideOther}}
                    </span> -->
                    <span class="rightBox" v-if="report.eMonth.childHealGuideCategoryCode">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.eMonth.childHealGuideCategoryCode)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">下次随访日期</td>
                <td class="mark">
                    {{$formatDate(report.oMonth.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.tMonth.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.sMonth.nextFollowUpDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.eMonth.nextFollowUpDate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访医生签名</td>
                <td class="mark">
                    {{report.oMonth.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.tMonth.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.sMonth.followUpPhysicianName}}
                </td>
                <td class="mark">
                    {{report.eMonth.followUpPhysicianName}}
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
                return {}
            }
        }
    },
    data() {
        return {
            report: {
                oMonth: {},
                sMonth: {},
                tMonth: {},
                eMonth: {}
            }
        }
    },
    created() {
        this.report.oMonth = this.reportData.oMonth || {};
        this.report.sMonth = this.reportData.sMonth || {};
        this.report.tMonth = this.reportData.tMonth || {};
        this.report.eMonth = this.reportData.eMonth || {};
    },
    methods: {
        setSplit(str) {
            if (str) {
                return (str + '').split(',');
            } else {
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';

.report {
    table {
        width: 960px;
    }
}
</style>