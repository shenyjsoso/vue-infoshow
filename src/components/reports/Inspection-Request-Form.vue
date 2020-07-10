<template>
    <div class="report">
        <!-- 检验申请单 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    检验申请单
                </td>
            </tr>
        </table>
        <table border="2" class="stripe" style="min-height: 400px;">
            <colgroup>
                <col style="width: 300px;">
                <col>
            </colgroup>
            <tr>
                <td style="vertical-align: text-top;">
                    姓名：<span class="lineBox alignCenter">{{reportData.name}}&nbsp;</span><br>
                    性别：<span class="lineBox alignCenter">{{reportData.sexName}}&nbsp;</span>
                    年龄：<span class="lineBox alignCenter">{{reportData.age}}&nbsp;</span>岁<br>
                    科别：<span class="lineBox alignCenter">{{reportData.kb}}&nbsp;</span>科<br>
                    门诊号/住院号：<span class="lineBox alignCenter">{{reportData.opEmHpExNo}}&nbsp;</span><br>
                    床号：<span class="lineBox alignCenter">{{reportData.ch}}&nbsp;</span>床<br>
                    临床诊断：<br>
                    <span class="lineBox alignCenter">{{reportData.lczd}}&nbsp;</span><br>
                    送检标本：<span class="lineBox alignCenter">{{reportData.sjbb}}&nbsp;</span><br>
                    送检医生：<span class="lineBox alignCenter">{{reportData.appDocName}}&nbsp;</span><br>
                    执行护士：<span class="lineBox alignCenter">{{reportData.zxhs}}&nbsp;</span><br>
                    送检日期：<span class="lineBox alignCenter">{{$formatDate(reportData.applyDt)}}&nbsp;</span><br>
                    (注：请在所需项目前打“√”）或其它处注明
                </td>
                <td style="vertical-align: text-top;">
                    临床血液检验:
                    <div class="jy" v-for="(item,index) in lcxy" :key="'lcxy'+index">
                        <span class="checkBox"></span>{{item}}
                        <i class="iconfont xz" v-if="$isChecked((index+1+''),reportData.lcxyjy)">&#xe631;</i>
                    </div>
                    临床体液检验
                    <div class="jy" v-for="(item,index) in lcty" :key="'lcty'+index">
                        <span class="checkBox"></span>{{item}}
                        <i class="iconfont xz" v-if="$isChecked((index+1+''),reportData.lctyjy)">&#xe631;</i>
                    </div>
                    其他临床检验
                    <div class="jy">
                        <span class="checkBox"></span><span class="lineBox">{{reportData.qtlcjy}}</span>
                        <i class="iconfont xz" v-if="reportData.qtlcjy">&#xe631;</i>
                    </div>
                    生化检验
                    <div class="jy" v-for="(item,index) in shjy" :key="'shjy'+index">
                        <span class="checkBox"></span>{{item}}
                        <i class="iconfont xz" v-if="$isChecked((index+1+''),reportData.shjy)">&#xe631;</i>
                    </div>
                    其他生化检验
                    <div class="jy">
                        <span class="checkBox"></span><span class="lineBox">{{reportData.qtshjy}}</span>
                        <i class="iconfont xz" v-if="reportData.qtshjy">&#xe631;</i>
                    </div>
                    常规免疫
                    <div class="jy" v-for="(item,index) in cgmy" :key="'cgmy'+index">
                        <span class="checkBox"></span>{{item}}
                        <i class="iconfont xz" v-if="$isChecked((index+1+''),reportData.cgmy)">&#xe631;</i>
                    </div>
                    化学发光免疫
                    <div class="jy" v-for="(item,index) in hxfgmy" :key="'hxfgmy'+index">
                        <span class="checkBox"></span>{{item}}
                        <i class="iconfont xz" v-if="$isChecked((index+1+''),reportData.hxfgmy)">&#xe631;</i>
                    </div>
                    微生物
                    <div class="jy">
                        <span class="checkBox"></span><span class="lineBox">{{reportData.wsw}}</span>
                        <i class="iconfont xz" v-if="reportData.wsw">&#xe631;</i>
                    </div>
                    其他免疫
                    <div class="jy">
                        <span class="checkBox"></span><span class="lineBox">{{reportData.qtmy}}</span>
                        <i class="iconfont xz" v-if="reportData.qtmy">&#xe631;</i>
                    </div>
                </td>
            </tr>
        </table> -->
		<table>
			<tr>
				<td colspan="6" class="title" style="font-weight: bold;">
					检验申请单
				</td>
			</tr>
			<tr>
				<td colspan="2">
					科别:<span class="mark">{{reportData.kb}}</span>
				</td>
				<td colspan="2" style="text-align: center;">
					门诊号/住院号:<span class="mark">{{reportData.opEmHpExNo}}</span>
				</td>
				<td colspan="2" style="text-align: right;">
					床号:<span class="mark">{{reportData.ch}}&nbsp;&nbsp;</span>
				</td>
			</tr>
		</table>
		<table border="2">
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="alignCenter mark">{{reportData.name}}</td>
				<td class="alignCenter">性别</td>
				<td class="alignCenter mark">{{reportData.sexName}}</td>
				<td class="alignCenter">年龄</td>
				<td class="alignCenter mark">{{reportData.age}}</td>
			</tr>
			<tr>
				<td class="alignCenter">临床诊断</td>
				<td class="alignCenter mark" colspan="2">{{reportData.lczd}}</td>
				<td class="alignCenter">送检标本</td>
				<td class="alignCenter mark" colspan="2">{{reportData.sjbb}}</td>
			</tr>
			<tr>
				<td class="alignCenter">送检医生</td>
				<td class="alignCenter mark">{{reportData.appDocName}}</td>
				<td class="alignCenter">执行护士</td>
				<td class="alignCenter mark">{{reportData.zxhs}}</td>
				<td class="alignCenter">送检日期</td>
				<td class="alignCenter mark">{{$formatDate(reportData.applyDt)}}</td>
			</tr>
		</table>
		<table border="2" style="margin-top: 24px;">
			<colgroup>
				<col style="width: 144px;">
				<col>
				<col style="width: 144px;">
				<col>
				<col style="width: 144px;">
				<col>
			</colgroup>
			<tr class="topTr">
				<td colspan="7">请在所需项目前勾选，或其他处注明</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">临床血液检验</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>1.血常规
						<i class="iconfont xz" v-if="reportData.lcxyjy == '1'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>2.ABO血型+Rh血型鉴定
						<i class="iconfont xz" v-if="reportData.lcxyjy == '2'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>3.凝血酶原时间测定
						<i class="iconfont xz" v-if="reportData.lcxyjy == '3'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>4.凝血4项
						<i class="iconfont xz" v-if="reportData.lcxyjy == '4'">&#xe631;</i>
					</span>
				</td>
				<td colspan="4" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>5.交叉配血实验
						<i class="iconfont xz" v-if="reportData.lcxyjy == '5'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="3">临床体液检验</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>1.尿常规11项+镜检
						<i class="iconfont xz" v-if="reportData.lctyjy == '1'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>2.尿绒毛膜促性腺激素定性
						<i class="iconfont xz" v-if="reportData.lctyjy == '2'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>3.大便常规+隐血
						<i class="iconfont xz" v-if="reportData.lctyjy == '3'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>4.白带常规
						<i class="iconfont xz" v-if="reportData.lctyjy == '4'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>5.细菌性阴道病检测
						<i class="iconfont xz" v-if="reportData.lctyjy == '5'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>6.前列腺液常规
						<i class="iconfont xz" v-if="reportData.lctyjy == '6'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>7.精液分析检测
						<i class="iconfont xz" v-if="reportData.lctyjy == '7'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>8.沙眼衣原体抗原检测
						<i class="iconfont xz" v-if="reportData.lctyjy == '8'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>9.其他
						<i class="iconfont xz" v-if="reportData.lctyjy == '9'">&#xe631;</i>
						<span class="lineBox">{{reportData.qtlcjy}}</span>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="5">生化检验</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>1.肝功能15项
						<i class="iconfont xz" v-if="reportData.shjy == '1'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>2.肝功能12项
						<i class="iconfont xz" v-if="reportData.shjy == '2'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>3.肾功能4项
						<i class="iconfont xz" v-if="reportData.shjy == '3'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>4.血糖
						<i class="iconfont xz" v-if="reportData.shjy == '4'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>5.心肌4项
						<i class="iconfont xz" v-if="reportData.shjy == '5'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>6.血脂4项
						<i class="iconfont xz" v-if="reportData.shjy == '6'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>7.血脂6项
						<i class="iconfont xz" v-if="reportData.shjy == '7'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>8.电解质4项
						<i class="iconfont xz" v-if="reportData.shjy == '8'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>9.风湿4项
						<i class="iconfont xz" v-if="reportData.shjy == '9'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>10.血沉
						<i class="iconfont xz" v-if="reportData.shjy == '10'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>11.C反应蛋白
						<i class="iconfont xz" v-if="reportData.shjy == '11'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>12.淀粉酶
						<i class="iconfont xz" v-if="reportData.shjy == '12'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>13.胆碱酯酶
						<i class="iconfont xz" v-if="reportData.shjy == '13'">&#xe631;</i>
					</span>
				</td>
				<td colspan="4" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>14.其他
						<i class="iconfont xz" v-if="reportData.shjy == '14'">&#xe631;</i>
						<span class="lineBox">{{reportData.qtshjy}}</span>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="2">常规免疫</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>1.乙肝两对半
						<i class="iconfont xz" v-if="reportData.cgmy == '1'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>2.丙肝抗体
						<i class="iconfont xz" v-if="reportData.cgmy == '2'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>3.梅毒抗体试验
						<i class="iconfont xz" v-if="reportData.cgmy == '3'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>4.梅毒抗体
						<i class="iconfont xz" v-if="reportData.cgmy == '4'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>5.人类免疫病毒抗体筛查
						<i class="iconfont xz" v-if="reportData.cgmy == '5'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>6.结合分枝杆菌检验
						<i class="iconfont xz" v-if="reportData.cgmy == '6'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" rowspan="3">化学发光免疫</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>1.甲状腺功能5项
						<i class="iconfont xz" v-if="reportData.shjy == '1'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy">
						<span class="checkBox" style="margin-right: 15px;"></span>2.肿瘤标志物
						<i class="iconfont xz" v-if="reportData.shjy == '2'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>3.性激素6项
						<i class="iconfont xz" v-if="reportData.shjy == '3'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>4.β-HCG
						<i class="iconfont xz" v-if="reportData.shjy == '4'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>5.胰激素
						<i class="iconfont xz" v-if="reportData.shjy == '5'">&#xe631;</i>
					</span>
				</td>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 15px;"></span>6.心肌标志物
						<i class="iconfont xz" v-if="reportData.shjy == '6'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="border-left: none;border-right: none;">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>7.不孕7项
						<i class="iconfont xz" v-if="reportData.shjy == '7'">&#xe631;</i>
					</span>
				</td>
				<td colspan="4" style="border-left: none;border-right: none;">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 15px;"></span>8.优生5项
						<i class="iconfont xz" v-if="reportData.shjy == '8'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">微生物</td>
				<td colspan="6">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>
						<i class="iconfont xz" v-if="reportData.wsw">&#xe631;</i>
						<span class="lineBox">{{reportData.wsw}}</span>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">其他免疫</td>
				<td colspan="6">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>
						<i class="iconfont xz" v-if="reportData.qtmy">&#xe631;</i>
						<span class="lineBox">{{reportData.qtmy}}</span>
					</span>
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
                lcxy:['1、血常规','2、ABO血型+Rh血型鉴定','3、凝血酶原时间测定','4、凝血4项','5、交叉配血实验'],
                lcty:['1、尿常规11项+镜检','2、尿绒毛膜促性腺激素定性','3、大便常规+隐血','4、白带常规','5、细菌性阴道病检测','6、前列腺液常规','7、精液分析检测','8、沙眼衣原体抗原检测'],
                shjy:['1、肝功能15项','2、肝功能12项','3、肾功能4项','4、血糖','5、心肌4项','6、血脂4项','7、血脂6项','8、电解质4项','9、风湿4项','10、血沉','11、C反应蛋白','12、淀粉酶','13、胆碱酯酶'],
                cgmy:['1、乙肝两对半','2、丙肝抗体','3、梅毒抗体试验','4、梅毒抗体','5、人类免疫病毒抗体筛查','6、结合分枝杆菌检验'],
                hxfgmy:['1、甲状腺功能5项','2、肿瘤标志物','3、性激素6项','4、β-HCG','5、胰激素','6、心肌标志物','7、不孕7项','8、优生5项']
            }
        },
        created(){
            // console.log(this.reportData)
        },
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    /* .report{
        table{
            width: 800px !important;
            tr{
                td{
                    .jy{
                        text-indent: 20px;
                    }
                }
            }
        }
    } */
</style>