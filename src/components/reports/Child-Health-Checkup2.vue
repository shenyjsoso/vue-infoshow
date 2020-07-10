<template>
    <div class="report">
        <!-- 12～30月龄儿童健康检查记录表 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">12～30月龄儿童健康检查记录表</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{report.twMonth.patientName}}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">{{report.twMonth.childHealthExamRecordNo}}</span>
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
                <td colspan="2" class="alignCenter">月(年)龄</td>
                <td class="alignCenter">12月龄</td>
                <td class="alignCenter">18月龄</td>
                <td class="alignCenter">24月龄</td>
                <td class="alignCenter">30月龄</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访日期</td>
                <td class="mark">
                    {{$formatDate(report.twMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.etMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.twfMonth.flupDate)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.thMonth.flupDate)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">体重/kg</td>
                <td class="mark">
                    {{report.twMonth.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.etMonth.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.twfMonth.childrenWeight}}
                </td>
                <td class="mark">
                    {{report.thMonth.childrenWeight}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">身长(高)/cm</td>
                <td class="mark">{{report.twMonth.childrenHeight}}</td>
                <td class="mark">{{report.etMonth.childrenHeight}}</td>
                <td class="mark">{{report.twfMonth.childrenHeight}}</td>
                <td class="mark">{{report.thMonth.childrenHeight}}</td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">头围/cm</td>
                <td class="mark">{{report.twMonth.headCircumference}}</td>
                <td class="mark">{{report.etMonth.headCircumference}}</td>
                <td class="mark">{{report.twfMonth.headCircumference}}</td>
                <td class="mark">{{report.thMonth.headCircumference}}</td>
            </tr>
            <tr>
                <td rowspan="12" class="alignCenter">体格检查</td>
                <td class="alignCenter">面色</td>
				<td class="mark">{{report.twMonth.neonatalFaceName}}</td>
				<td class="mark">{{report.etMonth.neonatalFaceName}}</td>
				<td class="mark">{{report.twfMonth.neonatalFaceName}}</td>
				<td class="mark">{{report.thMonth.neonatalFaceName}}</td>
               <!-- <td>
                    1 红润 2 其他<br>
                    <span class="lineBox">
                        {{report.twMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2其他<br>
                    <span class="lineBox">
                        {{report.etMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2其他<br>
                    <span class="lineBox">
                        {{report.twfMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.de041002600}}
                        </span>
                    </span>
                </td>
                <td>
                    1 红润 2其他<br>
                    <span class="lineBox">
                        {{report.thMonth.ap041013300}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.de041002600}}
                        </span>
                    </span>
                </td> -->
            </tr>
            <tr>
                <td class="alignCenter">皮肤</td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.etMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twfMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.thMonth.ap041004500}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.skinExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">前 囟</td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.twMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.twMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.etMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.etMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td>
                    1 闭合 ２未闭<span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.anteriorFontanelCloseFlag}}
                        </span>
                    </span><br>
                    <span class="lineBox">
                        {{report.twfMonth.anteriorFontanel}}
                    </span>cm×<span class="lineBox">
                        {{report.twfMonth.anteriorHalftone}}
                    </span>cm
                </td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">眼睛</td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.etMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twfMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.thMonth.de041021600}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.eyeAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">耳外观</td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.etMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.twfMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<!-- <br>
                    <span class="lineBox">
                        {{report.thMonth.ap041015000}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.earAppearExamAbnormalFlag}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">听力</td>
                <td>
                    1 通过 2 未通过<!-- <br>
                    <span class="lineBox">
                        {{report.twMonth.ap043006400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.neonatalUnhsResultsCode}}
                        </span>
                    </span>
                </td>
                <td></td>
                <td>
                    1 通过 2 未通过<!-- <br>
                    <span class="lineBox">
                        {{report.twfMonth.ap043006400}}
                    </span> -->
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.neonatalUnhsResultsCode}}
                        </span>
                    </span>
                </td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">出牙/龋齿数（颗）</td>
                <td>
                    <span class="lineBox">
                        {{report.twMonth.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.twMonth.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.etMonth.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.etMonth.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.twfMonth.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.twfMonth.cariesNumber}}
                    </span>
                </td>
                <td>
                    <span class="lineBox">
                        {{report.thMonth.teethNumber}}
                    </span>/
                    <span class="lineBox">
                        {{report.thMonth.cariesNumber}}
                    </span>
                </td>
            </tr>
            <!-- <tr>
                <td class="alignCenter">胸部</td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.twMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.etMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.twfMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox">
                        {{report.thMonth.chestExamDesc}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.chestExamCode}}
                        </span>
                    </span>
                </td>
            </tr> -->
            <tr>
                <td class="alignCenter">腹部</td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.de041004600}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.de041004700}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.de041004600}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.de041004700}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.de041004600}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.de041004700}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.de041004600}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.de041004700}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">四肢</td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.de041017900}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.de041018000}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.de041017900}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.de041018000}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.de041017900}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.de041018000}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.de041017900}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.de041018000}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">步态</td>
                <td></td>
                <td>
                    1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.de041001100}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.de041001100}}
                        </span>
                    </span>
                </td>
                <td>
                    1 未见异常 2 异常
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.thMonth.de041001100}}
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="alignCenter">可疑佝偻病体征</td>
                <td>
                    1 无<br>
                    2 肋串珠<br>
                    3 肋软骨沟<br>
                    4 鸡胸<br>
                    5 手足镯<br>
                    6“O”型腿<br>
                    7“X”型腿<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.ap041014400}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twMonth.de041010500}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肋串珠<br>
                    3 肋软骨沟<br>
                    4 鸡胸<br>
                    5 手足镯<br>
                    6“O”型腿<br>
                    7“X”型腿<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.ap041014400}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.etMonth.de041010500}}
                        </span>
                    </span>
                </td>
                <td>
                    1 无<br>
                    2 肋串珠<br>
                    3 肋软骨沟<br>
                    4 鸡胸<br>
                    5 手足镯<br>
                    6“O”型腿<br>
                    7“X”型腿<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.ap041014400}}
                    </span>
                    <span class="rightBox">
                        <span class="checkBox">
                            {{report.twfMonth.de041010500}}
                        </span>
                    </span>
                </td>
                <td></td>
            </tr>
            <tr>
                <td class="alignCenter">血红蛋白值</td>
                <td></td>
                <td>
                    <span class="lineBox">
                        {{report.etMonth.de045009100}}
                    </span>g/L
                </td>
                <td></td>
                <td>
                    <span class="lineBox">
                        {{report.thMonth.de045009100}}
                    </span>g/L
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">户外活动</td>
                <td>
                    <span class="lineBox">
                        {{report.twMonth.de030002000}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.etMonth.de030002000}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.twfMonth.de030002000}}
                    </span>小时/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.thMonth.de030002000}}
                    </span>小时/日
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">服用维生素D</td>
                <td>
                    <span class="lineBox">
                        {{report.twMonth.ap085004500}}
                    </span>IU/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.etMonth.ap085004500}}
                    </span>IU/日
                </td>
                <td>
                    <span class="lineBox">
                        {{report.twfMonth.ap085004500}}
                    </span>IU/日
                </td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">发育评估</td>
                <td valign="top">
                    1.呼唤名字无反应<br>
                    2.不会模仿“再见”或“欢迎”动作<br>
                    3.不会用拇食指对捏小物品<br>
                    4.不会扶物站立
                    <span class="rightBox" v-if="report.twMonth.developmentAssessment">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twMonth.developmentAssessment)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不会有意识叫“爸爸”或“妈妈”<br>
                    2.不会按要求指人或物<br>
                    3.与人无目光交流<br>
                    4.不会独走
                    <span class="rightBox" v-if="report.etMonth.developmentAssessment">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.etMonth.developmentAssessment)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不会说3个物品的名称<br>
                    2.不会按吩咐做简单事情<br>
                    3.不会用勺吃饭<br>
                    4.不会扶栏上楼梯/台阶<br>
                    <span class="rightBox" v-if="report.twfMonth.developmentAssessment">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twfMonth.developmentAssessment)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td valign="top">
                    1.不会说 2-3 个字的短语<br>
                    2.兴趣单一、刻板<br>
                    3.不会示意大小便<br>
                    4.不会跑
                    <span class="rightBox" v-if="report.thMonth.developmentAssessment">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.thMonth.developmentAssessment)" :key="index">
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
                        {{report.twMonth.ap021009001}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.twMonth.ap021009002}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.twMonth.ap021009003}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.ap060005200}}
                    </span>
                    <span class="rightBox" v-if="report.twMonth.de060007000">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twMonth.de060007000)" :key="index">
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
                        {{report.etMonth.ap021009001}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.etMonth.ap021009002}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.etMonth.ap021009003}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.ap060005200}}
                    </span>
                    <span class="rightBox" v-if="report.etMonth.de060007000">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.etMonth.de060007000)" :key="index">
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
                        {{report.twfMonth.ap021009001}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.twfMonth.ap021009002}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.twfMonth.ap021009003}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.ap060005200}}
                    </span>
                    <span class="rightBox" v-if="report.twfMonth.de060007000">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twfMonth.de060007000)" :key="index">
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
                        {{report.thMonth.ap021009001}}
                    </span>次<br>
                    3 腹泻<span class="lineBox">
                        {{report.thMonth.ap021009002}}
                    </span>次<br>
                    4 外伤<span class="lineBox">
                        {{report.thMonth.ap021009003}}
                    </span>次<br>
                    5 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.ap060005200}}
                    </span>
                    <span class="rightBox" v-if="report.thMonth.de060007000">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.thMonth.de060007000)" :key="index">
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
                        {{report.twMonth.de060017400}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.ap060017701}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.ap081001308}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.ap081002502}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.etMonth.de060017400}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.ap060017701}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.ap081001308}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.ap081002502}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.twfMonth.de060017400}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.ap060017701}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.ap081001308}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.ap081002502}}
                    </span>
                </td>
                <td>
                    1 无 2 有 <span class="rightBox"><span class="checkBox">
                        {{report.thMonth.de060017400}}
                    </span></span><br>
                    原因：<span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.ap060017701}}
                    </span><br>
                    机构：<span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.ap081001308}}
                    </span><br>
                    科室：<span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.ap081002502}}
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
                    6 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twMonth.guideOther}}
                    </span>
                    <span class="rightBox" v-if="report.twMonth.de060001800">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twMonth.de060001800)" :key="index">
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
                    6 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.etMonth.guideOther}}
                    </span>
                    <span class="rightBox" v-if="report.etMonth.de060001800">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.etMonth.de060001800)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.twfMonth.guideOther}}
                    </span>
                    <span class="rightBox" v-if="report.twfMonth.de060001800">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.twfMonth.de060001800)" :key="index">
                            {{item}}
                        </span>
                    </span>
                    <span class="rightBox" v-else>
                        <span class="checkBox"></span>
                    </span>
                </td>
                <td>
                    1 合理膳食<br>
                    2 生长发育<br>
                    3 疾病预防<br>
                    4 预防伤害<br>
                    5 口腔保健<br>
                    6 其他<br>
                    <span class="lineBox" style="min-width: 115px;">
                        {{report.thMonth.guideOther}}
                    </span>
                    <span class="rightBox" v-if="report.thMonth.de060001800">
                        <span class="checkBox" v-for="(item,index) in setSplit(report.thMonth.de060001800)" :key="index">
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
                    {{$formatDate(report.twMonth.ap060010901)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.etMonth.ap060010901)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.twfMonth.ap060010901)}}
                </td>
                <td class="mark">
                    {{$formatDate(report.thMonth.ap060010901)}}
                </td>
            </tr>
            <tr>
                <td colspan="2" class="alignCenter">随访医生签名</td>
                <td class="mark">
                    {{report.twMonth.ap020103910}}
                </td>
                <td class="mark">
                    {{report.etMonth.ap020103910}}
                </td>
                <td class="mark">
                    {{report.twfMonth.ap020103910}}
                </td>
                <td class="mark">
                    {{report.thMonth.ap020103910}}
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
                    twMonth: {},
                    etMonth: {},
                    twfMonth: {},
                    thMonth: {}
                }
            }
        }
    },
    data() {
        return {
            report: {
                twMonth: {},
                etMonth: {},
                twfMonth: {},
                thMonth: {}
            }
        }
    },
    created() {
        this.report.twMonth = this.reportData.twMonth || {};
        this.report.etMonth = this.reportData.etMonth || {};
        this.report.twfMonth = this.reportData.twfMonth || {};
        this.report.thMonth = this.reportData.thMonth || {};
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