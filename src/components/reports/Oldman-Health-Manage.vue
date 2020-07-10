<template>
    <div class="report">
        <!-- 老年人中医药健康管理服务记录表 -->
        <table>
        	 <tr>
                <td colspan="10" class="title">老年人中医药健康管理服务记录表</td>
            </tr>
			<tr>
				<td colspan="5">姓名：<span class="mark">{{reportData.xm}}</span></td>
				<td colspan="5" style="text-align: right;">
					编号：<span class="mark">{{reportData.lnrjkglbh}}</span>
				</td>
			</tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td colspan="5" class="fontBold">请根据近一年的体验和感觉，回答以下问题。</td>
				<td class="alignCenter fontBold">没有<br/>(根本不/从来没有)</td>
				<td class="alignCenter fontBold">很少<br/>(有一点/偶尔)</td>
				<td class="alignCenter fontBold">有时<br/>(有些/少数时间)</td>
				<td class="alignCenter fontBold">经常<br/>(相当/多数时间)</td>
				<td class="alignCenter fontBold">总是<br/>(非常/每天)</td>
			</tr>
			<tr>
				<td colspan="5">(1)您精力充沛吗？（指精神头足，乐于做事）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions1=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions1=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions1=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions1=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions1=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(2)您容易疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions2=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions2=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions2=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions2=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions2=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(3)您容易气短，呼吸短促，接不上气吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions3=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions3=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions3=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions3=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions3=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(4)您说话声音低弱无力吗?（指说话没有力气）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions4=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions4=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions4=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions4=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions4=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(5)您感到闷闷不乐、情绪低沉吗?（指心情不愉快，情绪低落）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions5=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions5=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions5=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions5=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions5=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>


			<tr>
				<td colspan="5">(6)您容易精神紧张、焦虑不安吗?（指遇事是否心情紧张）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions6=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions6=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions6=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions6=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions6=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(7)您因为生活状态改变而感到孤独、失落吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions7=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions7=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions7=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions7=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions7=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(8)您容易感到害怕或受到惊吓吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions8=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions8=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions8=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions8=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions8=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(9)您感到身体超重不轻松吗?(感觉身体沉重) [BMI指数=体重（kg）/身高^2（m）]</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions9=='1'">&#xe631;</i>
						</div>
						(BMI＜24)
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions9=='2'">&#xe631;</i>
						</div>
					</div>
					<br/>
					(24≤BMI＜25)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions9=='3'">&#xe631;</i>
						</div>
					</div>
					<br/>(25≤BMI＜26)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions9=='4'">&#xe631;</i>
						</div>
					</div>
					<br/>(26≤BMI＜28)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions9=='5'">&#xe631;</i>
						</div>
					</div>
					<br/>(BMI≥28)
				</td>
			</tr>

			<tr>
				<td colspan="5">(10)您眼睛干涩吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions10=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions10=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions10=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions10=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions10=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(11)您手脚发凉吗?（不包含因周围温度低或穿的少导致的手脚发冷）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions11=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions11=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions11=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions11=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions11=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(12)您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions12=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions12=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions12=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions12=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions12=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(13)您比一般人耐受不了寒冷吗？（指比别人容易害怕冬天或是夏天的冷空调、电扇等）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions13=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions13=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions13=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions13=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions13=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(14)您容易患感冒吗?（指每年感冒的次数）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions14=='1'">&#xe631;</i>
						</div>
					</div>
					<br />一年＜2 次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions14=='2'">&#xe631;</i>
						</div>
					</div>
					<br />一年感冒2-4 次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions14=='3'">&#xe631;</i>
						</div>
					</div>
					<br />一年感冒5-6 次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions14=='4'">&#xe631;</i>
						</div>
					</div>
					<br />一年8次以上
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions14=='5'">&#xe631;</i>
						</div>
					</div>
					<br />几乎每月
				</td>
			</tr>

			<tr>
				<td colspan="5">(15)您没有感冒时也会鼻塞、流鼻涕吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions15=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions15=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions15=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions15=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions15=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(16)您有口粘口腻，或睡眠打鼾吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions16=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions16=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions16=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions16=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions16=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(17)您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时) 吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions17=='1'">&#xe631;</i>
						</div>
					</div>
					<br />从来没有
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions17=='2'">&#xe631;</i>
						</div>
					</div>
					<br />一年1、2次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions17=='3'">&#xe631;</i>
						</div>
					</div>
					<br />一年3、4次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions17=='4'">&#xe631;</i>
						</div>
					</div>
					<br />一年5、6次
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions17=='5'">&#xe631;</i>
						</div>
					</div>
					<br />每次遇到上述原因都过敏
				</td>
			</tr>

			<tr>
				<td colspan="5">(18)您的皮肤容易起荨麻疹吗? (包括风团、风疹块、风疙瘩)</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions18=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions18=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions18=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions18=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions18=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>

			<tr>
				<td colspan="5">(19)您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗?（指皮肤在没有外伤的情况下出现青一块紫一块的情况）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions19=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions19=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions19=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions19=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions19=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(20)您的皮肤一抓就红，并出现抓痕吗?（指被指甲或钝物划过后皮肤的反应）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions20=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions20=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions20=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions20=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions20=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(21)您皮肤或口唇干吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions21=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions21=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions21=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions21=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions21=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(22)您有肢体麻木或固定部位疼痛的感觉吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions22=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions22=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions22=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions22=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions22=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(23)您面部或鼻部有油腻感或者油亮发光吗?（指脸上或鼻子）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions23=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions23=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions23=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions23=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions23=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(24)您面色或目眶晦黯，或出现褐色斑块/斑点吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions24=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions24=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions24=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions24=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions24=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(25)您有皮肤湿疹、疮疖吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions25=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions25=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions25=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions25=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions25=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(26)您感到口干咽燥、总想喝水吗？</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions26=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions26=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions26=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions26=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions26=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(27)您感到口苦或嘴里有异味吗?（指口苦或口臭）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions27=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions27=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions27=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions27=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions27=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(28)您腹部肥大吗?（指腹部脂肪肥厚）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions28=='1'">&#xe631;</i>
						</div>
					</div>
					<br/>(腹围<80cm，相当于2.4尺)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions28=='2'">&#xe631;</i>
						</div>
					</div>
					<br/>(腹围80-85cm，2.4-2.55尺)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions28=='3'">&#xe631;</i>
						</div>
					</div>
					<br/>(腹围86-90cm，2.56-2.7尺)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions28=='4'">&#xe631;</i>
						</div>
					</div>
					<br/>(腹围91-105cm，2.71-3.15尺)
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions28=='5'">&#xe631;</i>
						</div>
					</div>
					<br />(腹围>105cm或3.15尺)
				</td>
			</tr>
			<tr>
				<td colspan="5">(29)您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？（指不喜欢吃凉的食物，或吃了凉的食物后会不舒服）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions29=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions29=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions29=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions29=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions29=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(30)您有大便黏滞不爽、解不尽的感觉吗?(大便容易粘在马桶或便坑壁上)</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions30=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions30=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions30=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions30=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions30=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(31)您容易大便干燥吗?</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions31=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions31=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions31=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions31=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions31=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(32)您舌苔厚腻或有舌苔厚厚的感觉吗?（如果自我感觉不清楚可由调查员观察后填写）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions32=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions32=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions32=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions32=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions32=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="5">(33)您舌下静脉瘀紫或增粗吗？（可由调查员辅助观察后填写）</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1
							<i class="iconfont xz" v-if="reportData.questions33=='1'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2
							<i class="iconfont xz" v-if="reportData.questions33=='2'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3
							<i class="iconfont xz" v-if="reportData.questions33=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4
							<i class="iconfont xz" v-if="reportData.questions33=='4'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td class="alignCenter">
					<div style="display: inline-block;vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5
							<i class="iconfont xz" v-if="reportData.questions33=='5'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter fontBold">体质类型</td>
				<td class="alignCenter fontBold">气虚质</td>
				<td class="alignCenter fontBold">阳虚质</td>
				<td class="alignCenter fontBold">阴虚质</td>
				<td class="alignCenter fontBold">痰湿质</td>
				<td class="alignCenter fontBold">湿热质</td>
				<td class="alignCenter fontBold">血瘀质</td>
				<td class="alignCenter fontBold">气郁质</td>
				<td class="alignCenter fontBold">特禀质</td>
				<td class="alignCenter fontBold">平和质</td>
			</tr>
			<tr>
				<td class="alignCenter fontBold">体质辨识</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbqxz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbqxz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbqxz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbyxz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbyxz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbyxz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbyixz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbyixz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbyixz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbtsz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbtsz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbtsz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbsrz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbsrz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbsrz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbxyz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbxyz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbxyz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbqyz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbqyz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbqyz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbtbz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbtbz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.倾向是
							<i class="iconfont xz" v-if="reportData.tzsbtbz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.得分
							<i class="iconfont xz" v-if="reportData.tzsbphz=='1'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.是
							<i class="iconfont xz" v-if="reportData.tzsbphz=='2'">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.基本是
							<i class="iconfont xz" v-if="reportData.tzsbphz=='3'">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="alignCenter fontBold">中医药保健指导</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdqxzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdqxz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdyxzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdyxz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdyixzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdyixz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdtszqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdtsz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdsrzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdsrz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdxyzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdxyz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdqyzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdqyz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdtbzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdtbz)">&#xe631;</i>
						</div>
					</div>
				</td>
				<td>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							1.情志调摄
							<i class="iconfont xz" v-if="$isChecked('1',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							2.饮食调养
							<i class="iconfont xz" v-if="$isChecked('2',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							3.起居调摄
							<i class="iconfont xz" v-if="$isChecked('3',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							4.运动保健
							<i class="iconfont xz" v-if="$isChecked('4',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							5.穴位保健
							<i class="iconfont xz" v-if="$isChecked('5',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
					<div style="vertical-align: top;">
						<div class="jy">
							<span class="checkBox"></span>
							6.其他：{{reportData.zyybjzdphzqt}}
							<i class="iconfont xz" v-if="$isChecked('6',reportData.zyybjzdphz)">&#xe631;</i>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">填表日期</td>
				<td colspan="3" class="alignCenter">
					<span class="lineBox">{{$formatDate(reportData.tbri,"yyyy")}}</span>年
					<span class="lineBox">{{$formatDate(reportData.tbri,"MM")}}</span>月
					<span class="lineBox">{{$formatDate(reportData.tbri,"dd")}}</span>日
				</td>
				<td colspan="2" class="alignCenter">医生签名</td>
				<td colspan="3" class="alignCenter mark">{{reportData.ysqm}}</td>
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
            width: 1000px;
			.fontBold{
				// font-weight:bold;
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