<template>
    <div class="report">
        <!-- 职业病报告卡 -->
        <!-- <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    职业病报告卡
                </td>
            </tr>
            <tr>
                <td colspan="8" class="alignCenter">（不含尘肺病）</td>
            </tr>
            <tr>
                <td colspan="8" class="alignCenter">
                    <span class="lineBox alignCenter">
                        {{$formatDate(reportData.year,'yyyy')}}
                    </span>年
                </td>
            </tr>
            <tr>
                <td colspan="8">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：
                    <span class="mark">{{reportData.bh}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    制表机关：<span class="mark">{{reportData.zbjg}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    批准机关：<span class="mark">{{reportData.pzjg}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    批准文号：<span class="mark">{{reportData.pzwh}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td colspan="3">
                    有效期至：<span class="mark">{{$formatDate(reportData.yxqz)}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    登记号：<span class="mark">{{reportData.djh}}</span>
                </td>
                <td colspan="4">
                    表号：<span class="mark">
                        {{reportData.bh}}
                    </span>
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td colspan="3" rowspan="3" class="alignCenter">A、编号</td>
                <td colspan="4" class="alignCenter">省、自治区、市</td>
                <td colspan="4" class="alignCenter">地、市</td>
                <td colspan="3" class="alignCenter">县</td>
                <td colspan="10">
                    用人单位：<span class="mark">{{reportData.yrdwmc}}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4" class="mark alignCenter">{{reportData.hjdzZzqzxs}}</td>
                <td colspan="4" class="mark alignCenter">{{reportData.hjdzDqz}}</td>
                <td colspan="3" class="mark alignCenter">{{reportData.hjdzQ}}</td>
                <td colspan="10" class="alignCenter">卡片序号</td>
            </tr>
            <tr>
                <td colspan="2" class="mark alignCenter">{{getBhByCode(reportData.shengbh)}}&nbsp;</td>
                <td colspan="2" class="mark alignCenter">{{getBhByCode(reportData.shengbh,1)}}</td>
                <td colspan="2" class="mark alignCenter">{{getBhByCode(reportData.shibh)}}</td>
                <td colspan="2" class="mark alignCenter">{{getBhByCode(reportData.shibh,1)}}</td>
                <td class="mark alignCenter">{{getBhByCode(reportData.qubh)}}</td>
                <td colspan="2" class="mark alignCenter">{{getBhByCode(reportData.qubh,1)}}</td>
                <td colspan="10" class="mark alignCenter">{{reportData.bianh}}</td>
            </tr>
            <tr>
                <td colspan="3" class="alignCenter" rowspan="2">姓名</td>
                <td colspan="4" class="mark alignCenter" rowspan="2">
                    {{reportData.brxm}}
                </td>
                <td colspan="4" class="alignCenter" rowspan="2">B、性  别</td>
                <td colspan="3" class="alignCenter">
                    1、男
                    <div class="jy">
                        <span class="checkBox"></span>
                        <i class="iconfont xz" v-if="reportData.xbdm == '1'">&#xe631;</i>
                    </div>
                </td>
                <td colspan="4" class="alignCenter" rowspan="2">C、出生年月</td>
                <td colspan="4" class="alignCenter">年</td>
                <td colspan="2" class="alignCenter">月</td>
            </tr>
            <tr>
                <td colspan="3" class="alignCenter">
                    2、女
                    <div class="jy">
                        <span class="checkBox"></span>
                        <i class="iconfont xz" v-if="reportData.xbdm == '2'">&#xe631;</i>
                    </div>
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'yyyy'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'yyyy'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'yyyy'),2)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'yyyy'),3)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'MM'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.csrq,'MM'),1)}}
                </td>
            </tr>
            <tr>
                <td colspan="3" rowspan="2" class="alignCenter">D、行业</td>
                <td colspan="4" rowspan="2" class="mark alignCenter">
                    {{reportData.hy}}
                </td>
                <td colspan="4" rowspan="2" class="alignCenter">E、统计工种</td>
                <td colspan="3" rowspan="2" class="mark alignCenter">
                    {{reportData.tjgz}}
                </td>
                <td colspan="4" rowspan="2" class="alignCenter">F、专业工龄</td>
                <td colspan="4" class="alignCenter">年</td>
                <td colspan="2" class="alignCenter">月、天</td>
            </tr>
            <tr>
                <td colspan="4" class="mark alignCenter">{{reportData.zygln}}&nbsp;</td>
                <td colspan="2" class="mark alignCenter">
                    {{reportData.zyglyt}}
                </td>
            </tr>
            <tr>
                <td colspan="3" rowspan="2" class="alignCenter">G、职业病种类</td>
                <td colspan="4" rowspan="2" class="mark alignCenter">
                    {{reportData.zybzlmc}}
                </td>
                <td colspan="4" rowspan="2" class="alignCenter">H、具体病名</td>
                <td colspan="5" rowspan="2" class="mark alignCenter">
                    {{reportData.jtbm}}
                </td>
                <td colspan="4" class="alignCenter">I、中毒事故编码</td>
                <td colspan="4" class="alignCenter">同时中毒人数</td>
            </tr>
            <tr>
                <td colspan="4" class="mark alignCenter">{{reportData.zdsgbm}}&nbsp;</td>
                <td colspan="4" class="mark alignCenter">{{reportData.tszdrs}}</td>
            </tr>
            <tr>
                <td colspan="4" rowspan="2" class="alignCenter">J、发生日期</td>
                <td colspan="4" class="alignCenter">年</td>
                <td colspan="2" class="alignCenter">月</td>
                <td colspan="2" class="alignCenter">日</td>
                <td colspan="4" rowspan="2" class="alignCenter">K、诊断日期</td>
                <td colspan="4" class="alignCenter">年</td>
                <td colspan="2" class="alignCenter">月</td>
                <td colspan="2" class="alignCenter">日</td>
            </tr>
            <tr>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'yyyy'))}}&nbsp;
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'yyyy'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'yyyy'),2)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'yyyy'),3)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'MM'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'MM'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'dd'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.fsrq,'dd'),1)}}
                </td>

                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'yyyy'))}}&nbsp;
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'yyyy'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'yyyy'),2)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'yyyy'),3)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'MM'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'MM'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'dd'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.zdrqsj,'dd'),1)}}
                </td>
            </tr>
            <tr>
                <td colspan="4" rowspan="2" class="alignCenter">L、死亡日期</td>
                <td colspan="4" class="alignCenter">年</td>
                <td colspan="2" class="alignCenter">月</td>
                <td colspan="2" class="alignCenter">日</td>
                <td colspan="12" rowspan="2" style="vertical-align: text-top;">
                    诊断机构：<span class="mark">
                        {{reportData.zdjgmn}}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'yyyy'))}}&nbsp;
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'yyyy'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'yyyy'),2)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'yyyy'),3)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'MM'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'MM'),1)}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'dd'))}}
                </td>
                <td class="mark alignCenter">
                    {{getBhByCode($formatDate(reportData.swrqsj,'dd'),1)}}
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td colspan="2">
                    报告单位：<span class="mark">
                        {{reportData.bgdw}}
                    </span>
                </td>
                <td colspan="2">
                    单位负责人：<span class="mark">
                        {{reportData.dwfzr}}
                    </span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    报告人：<span class="mark">
                        {{reportData.bgr}}
                    </span>
                </td>
                <td colspan="2">
                    报告日期：
                    <span class="lineBox alignCenter">
                        {{$formatDate(reportData.bgrq,'yyyy')}}
                    </span>年
                    <span class="lineBox alignCenter">
                        {{$formatDate(reportData.bgrq,'MM')}}
                    </span>月
                    <span class="lineBox alignCenter">
                        {{$formatDate(reportData.bgrq,'dd')}}
                    </span>日
                </td>
            </tr>
            <tr>
                <td>
                    制表机关：<span class="mark">{{reportData.zbjg}}</span>
                </td>
                <td>
                    批准机关：<span class="mark">{{reportData.pzjg}}</span>
                </td>
                <td>
                    批准文号：<span class="mark">{{reportData.pzwh}}</span>
                </td>
                <td>
                    有效期至：<span class="mark">{{$formatDate(reportData.yxqz)}}</span>
                </td>
            </tr>
        </table> -->
		<table>
			<tr>
				<td colspan="8" class="title" style="font-weight: bold;">
					职业病报告卡
				</td>
			</tr>
			<tr>
				<td colspan="3">
					登记号：<span class="mark">{{reportData.djh}}</span>
				</td>
				<td colspan="3">
					表号：<span class="mark">{{reportData.bh}}</span>
				</td>
				<td colspan="2" style="text-align: right;">
					卡片序号：<span class="mark">{{reportData.bianh}}</span>
				</td>
			</tr>
		</table>
		
		<table border="2">
			<tr>
				<td rowspan="2" class="alignCenter">编号</td>
				<td colspan="5" class="alignCenter">
					<span class="lineBox">{{reportData.hjdzZzqzxs}}</span>省、自治区、市
					<span class="lineBox">{{reportData.hjdzDqz}}</span>地、市
					<span class="lineBox">{{reportData.hjdzQ}}</span>县
				</td>
			</tr>
			<tr>
				<td colspan="5" class="mark alignCenter">&nbsp;
				<span class="checkBox" v-for="(item,index) in splitListStr(reportData.zybbgkbh)" style="margin-right: 10px;width: 18px;height: 18px;line-height: 18px;">{{item}}</span>
					<!-- {{reportData.zybbgkbh}} -->
				</td>
			</tr>
			<tr>
				<td class="alignCenter">用人单位</td>
				<td colspan="5" class="alignCenter">{{reportData.yrdwmc}}</td>
			</tr>
			<tr>
				<td class="alignCenter">姓名</td>
				<td class="alignCenter mark">{{reportData.brxm}}</td>
				<td class="alignCenter">性别</td>
				<td class="alignCenter">
					<span class="jy" style="margin-right: 20px;">
						<span class="checkBox" style="margin-right: 10px;"></span>1.男
						<i class="iconfont xz" v-if="reportData.xbdm == '1'">&#xe631;</i>
					</span>
					<span class="jy">
						<span class="checkBox" style="margin-right: 10px;"></span>2.女
						<i class="iconfont xz" v-if="reportData.xbdm == '2'">&#xe631;</i>
					</span>
				</td>
				<td class="alignCenter">出生年月</td>
				<td class="alignCenter mark">{{$formatDate(reportData.csrq)}}</td>
			</tr>
			<tr>
				<td class="alignCenter">行业</td>
				<td class="alignCenter mark">{{reportData.hy}}</td>
				<td class="alignCenter">统计工种</td>
				<td class="alignCenter mark">{{reportData.tjgz}}</td>
				<td class="alignCenter">专业工龄</td>
				<td class="alignCenter mark">
					{{reportData.zygln}}<span v-if="reportData.zygln">年</span>
					{{reportData.zyglyt}}<span v-if="reportData.zyglyt">月</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter">职业病种类</td>
				<td class="alignCenter mark">{{reportData.zybzlmc}}</td>
				<td class="alignCenter">具体病名</td>
				<td class="alignCenter mark" colspan="3">{{reportData.jtbm}}</td>
			</tr>
			<tr>
				<td class="alignCenter">中毒事故编码</td>
				<td class="alignCenter mark">{{reportData.zdsgbm}}</td>
				<td class="alignCenter">同时中毒人数</td>
				<td class="alignCenter mark">{{reportData.tszdrs}}</td>
				<td class="alignCenter">发生日期</td>
				<td class="alignCenter mark">{{$formatDate(reportData.fsrq)}}</td>
			</tr>
			<tr>
				<td class="alignCenter">诊断日期</td>
				<td class="alignCenter mark">{{$formatDate(reportData.zdrqsj)}}</td>
				<td class="alignCenter">死亡日期</td>
				<td class="alignCenter mark" colspan="3">{{$formatDate(reportData.swrqsj)}}</td>
			</tr>
			<tr>
				<td class="alignCenter">诊断机构</td>
				<td class="alignCenter mark" colspan="5">{{reportData.zdjgmn}}</td>
			</tr>
		</table>
		<table style="margin-top: 15px;">
			<tr>
				<td colspan="4">报告单位：<span class="mark">{{reportData.bgdw}}</span></td>
				<td colspan="4">单位负责人：<span class="mark">{{reportData.dwfzr}}</span></td>
			</tr>
			<tr>
				<td colspan="4">报告人：<span class="mark">{{reportData.bgr}}</span></td>
				<td colspan="4">报告日期：<span class="mark">{{$formatDate(reportData.bgrq)}}</span></td>
			</tr>
			<tr>
				<td colspan="4">制表机关：<span class="mark">{{reportData.zbjg}}</span></td>
				<td colspan="4">批准机关：<span class="mark">{{reportData.pzjg}}</span></td>
			</tr>
			<tr>
				<td colspan="4">批准文书：<span class="mark">{{reportData.pzwh}}</span></td>
				<td colspan="4">有效期至：<span class="mark">{{$formatDate(reportData.yxqz)}}</span></td>
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
            getBhByCode(code,index = 0){
                var result = '';
                if(code){
                    var list = code.split('');
                    result = list[index];
                }
                return result;
            },
			splitListStr(str) {
				var list = [];
				if (str) {
					list = str.split('');
				}
				return list
			},
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 800px;
            .fontBold{
                font-weight:bold;
            }
            tr{
                td{
                    .jy{
                        position: relative;
                        display: inline-block;
                        .xz{
                            font-size: 24px;
                            font-weight: bold;
                            color:rgb(25,90,255);
                            position: absolute;
                            left: -2px;
                            top: -4px;
                        }
                    }
                }
            }
        }
    }
</style>