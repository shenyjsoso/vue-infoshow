<template>
    <div class="report">
        <!-- 孕妇基本情况信息表 -->
       <!-- <table>
            <tr>
                <td colspan="6" class="title" style="font-weight: bold;">
                    孕妇基本情况信息表（年度：<span class="lineBox">{{year}}</span>）
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
				<th rowspan="2">序号</th>
				<th rowspan="2">家庭档案号</th>
				<th rowspan="2">丈夫姓名</th>
				<th rowspan="2">孕产妇姓名</th>
				<th rowspan="2">年龄</th>
				<th rowspan="2">住址</th>
				<th rowspan="2">联系电话</th>
				<th rowspan="2">管理去向</th>
				<th rowspan="2">责任医生</th>
				<th rowspan="2">末次月经</th>
				<th rowspan="2">预产期</th>
				<th rowspan="2">孕次</th>
				<th rowspan="2">产次</th>
				<th rowspan="2">建卡日期</th>
				<th rowspan="2">血常规监测时间</th>
				<th colspan="2">孕产期中重度贫血</th>
				<th colspan="2">高危筛查</th>
			</tr>
			<tr>
				<th>是</th>
				<th>否</th>
				<th>评分</th>
				<th>高危因素</th>
			</tr>
			<tr v-for="(item,index) in tableData" :key="index">
				<td class="mark alignCenter">{{item.mpi ? index + 1 : ''}}&nbsp;</td>
				<td class="mark alignCenter">{{item.jtdah}}</td>
				<td class="mark alignCenter">{{item.zfxm}}</td>
				<td class="mark alignCenter">{{item.xm}}</td>
				<td class="mark alignCenter">{{item.nl}}</td>
				<td class="mark alignCenter">{{item.zz}}</td>
				<td class="mark alignCenter">{{item.lxdhhm}}</td>
				<td class="mark alignCenter">{{item.glqx}}</td>
				<td class="mark alignCenter">{{item.zrys}}</td>
				<td class="mark alignCenter">{{$formatDate(item.mcyj)}}</td>
				<td class="mark alignCenter">{{$formatDate(item.ycq)}}</td>
				<td class="mark alignCenter">{{item.yc}}</td>
				<td class="mark alignCenter">{{item.cc}}</td>
				<td class="mark alignCenter">{{$formatDate(item.jkrq)}}</td>
				<td class="mark alignCenter">{{item.ycqzcdpx == '是'?'✔':''}}</td>
				<td class="mark alignCenter">{{item.ycqzcdpx == '否'?'✔':''}}</td>
				<td class="mark alignCenter">{{$formatDate(item.xcgjcsj)}}</td>
				<td class="mark alignCenter">{{item.gwscpf}}</td>
				<td class="mark alignCenter">{{item.gwscgwys}}</td>
			</tr>
        </table> -->
		<table>
			<tr>
				<td colspan="8" class="title" style="font-weight: bold;">
					孕妇基本情况信息表
				</td>
			</tr>
			<tr>
				<td colspan="4">
					健康档案号:<span class="mark">{{report.ResidentsHealthFileNo}}</span>
				</td>
				<!-- <td colspan="4" style="text-align: right;">
					建档日期:<span class="mark">{{$formatDate(report.jkrq)}}&nbsp;&nbsp;</span>
				</td> -->
			</tr>
		</table>
		<table border="2">
			<tr>
				<!-- <td class="alignCenter">丈夫姓名</td>
				<td class="alignCenter mark">{{report.zfxm}}</td> -->
				<td class="alignCenter">孕产妇姓名</td>
				<td class="alignCenter mark">{{report.xm}}</td>
				<td class="alignCenter">年龄</td>
				<td class="alignCenter mark">{{getAgeFromBirth(report.csrq)}}</td>
				<td class="alignCenter">联系电话</td>
				<td class="alignCenter mark">{{report.sjhm}}</td>
				<td class="alignCenter">既往疾病史</td>
				<td class="alignCenter mark">{{report.jwjbs}}</td>
			</tr>
			<tr>
				<td class="alignCenter">妇科病史</td>
				<td class="alignCenter mark">{{report.fkbs}}</td>
				<td class="alignCenter">手术史</td>
				<td class="alignCenter mark">{{report.sss}}</td>
				<td class="alignCenter">住址</td>
				<td class="alignCenter mark" colspan="3">
					<span v-if="report.xzdzshen">{{report.xzdzshen}}</span>
					<span v-if="report.xzdzshi">{{report.xzdzshi}}</span>
					<span v-if="report.xzdzqu">{{report.xzdzqu}}</span>
					<span v-if="report.xzdzxiang">{{report.xzdzxiang}}</span>
					<span v-if="report.xzdzcun">{{report.xzdzcun}}</span>
					<span v-if="report.xzdzmphm">{{report.xzdzmphm}}</span>
				</td>
				<!-- <td class="alignCenter">管理去向</td>
				<td class="alignCenter mark">{{report.glqx}}</td>
				<td class="alignCenter">责任医生</td>
				<td class="alignCenter mark">{{report.zrys}}</td> -->
			</tr>
			<tr>
				<!-- <td class="alignCenter">末次月经</td>
				<td class="alignCenter mark">{{$formatDate(report.mcyj)}}</td>
				<td class="alignCenter">预产期</td>
				<td class="alignCenter mark">{{$formatDate(report.ycq)}}</td> -->
				<td class="alignCenter">妇科手术史</td>
				<td class="alignCenter mark">{{report.fksss}}</td>
				<td class="alignCenter">流产总次数</td>
				<td class="alignCenter mark">{{report.lczcs}}</td>
				<td class="alignCenter">孕次</td>
				<td class="alignCenter mark">{{report.yc}}</td>
				<td class="alignCenter">产次</td>
				<td class="alignCenter mark">{{report.cc}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">妊娠高血压</td>
				<td class="alignCenter" colspan="2">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 5px;"></span>是
						<i class="iconfont xz" v-if="report.rcgxy == '是'">&#xe631;</i>
					</span>
					<span class="jy" style="margin-left:50px;">
						<span class="checkBox" style="margin-right: 5px;"></span>否
						<i class="iconfont xz" v-if="report.rcgxy == '否'">&#xe631;</i>
					</span>
				</td>
				<td class="alignCenter" colspan="2">妊娠糖尿病</td>
				<td class="alignCenter" colspan="2">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 5px;"></span>是
						<i class="iconfont xz" v-if="report.rctnb == '是'">&#xe631;</i>
					</span>
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 5px;"></span>否
						<i class="iconfont xz" v-if="report.rctnb == '否'">&#xe631;</i>
					</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">妊娠糖尿病其他合并症</td>
				<td class="alignCenter" colspan="2">
					<span class="jy" >
						<span class="checkBox" style="margin-right: 5px;"></span>是
						<i class="iconfont xz" v-if="report.rctnbqthbz == '是'">&#xe631;</i>
					</span>
					<span class="jy" style="margin-left: 50px;">
						<span class="checkBox" style="margin-right: 5px;"></span>否
						<i class="iconfont xz" v-if="report.rctnbqthbz == '否'">&#xe631;</i>
					</span>
				</td>
				<td class="alignCenter" colspan="2">巨大儿产史</td>
				<td class="alignCenter mark" colspan="2">{{report.jdecs}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="2">末次妊娠终止日期</td>
				<td class="alignCenter mark" colspan="2">{{$formatDate(report.mcrczzrq)}}</td>
				<td class="alignCenter" colspan="2">末次分娩日期</td>
				<td class="alignCenter mark" colspan="2">{{$formatDate(report.mcfmrq)}}</td>
			</tr>
			<!-- <tr>
				<td class="alignCenter">血常规监测时间</td>
				<td class="alignCenter mark">{{$formatDate(report.xcgjcsj)}}</td>
				<td class="alignCenter" colspan="2">孕产期中重度贫血</td>
				<td colspan="4" class="alignCenter">
					<span class="jy" style="margin-left: 20px;">
						<span class="checkBox" style="margin-right: 15px;"></span>是
						<i class="iconfont xz" v-if="report.ycqzcdpx == '是'">&#xe631;</i>
					</span>
					<span class="jy" style="margin-left: 70px;">
						<span class="checkBox" style="margin-right: 15px;"></span>否
						<i class="iconfont xz" v-if="report.ycqzcdpx == '否'">&#xe631;</i>
					</span>
				</td>
			</tr> -->
			<!-- <tr>
				<td rowspan="2">高危筛查</td>
				<td class="alignCenter">评分</td>
				<td colspan="6" class="mark">{{report.gwscpf}}</td>
			</tr>
			<tr>
				<td class="alignCenter">危险因素</td>
				<td colspan="6" class="mark">{{report.gwscgwys}}</td>
			</tr> -->
		</table>
    </div>
</template>
<script>
		import {getAgeBybirth} from '../../assets/utils.js';
    export default{
        props:{
            reportData:{
                type:Object,
                default(){
                    return {
                       /* personalPreWomanBasicInfo:[] */
                    }
                }
            }
        },
        data(){
            return{
				report:{},
                /* tableData:[],
                minLength:10,
                year:'' */
            }
        },
        created(){
			this.report = this.reportData || {};
            // this.tableData = this.reportData.personalWeakChildVisitInfo;
           /* var list = this.reportData.personalPreWomanBasicInfo;
            if(list && list.length > 0){
                var liYear = list[0].nd;
                var scYear = list[list.length - 1].nd;
                if(liYear == scYear){
                    this.year = liYear;
                }else{
                    this.year = liYear + '-' + scYear;
                }

            }else{
                list = [];
            }
            this.setNormalTable(list); */
        },
        mounted(){

        },
        methods:{
            setNormalTable(arr){
                var list = JSON.parse(JSON.stringify(arr));
                var length = list.length;
                if(length > this.minLength){
                    this.tableData = list;
                }else{
                    let gap = this.minLength - length;
                    var param = {};
                    var norList = list;
                    for(var i=0;i<gap;i++){
                        norList.push(param);
                    }
                    this.tableData = norList;
                }
            },
						getAgeFromBirth(birth){
							return getAgeBybirth(birth)
						}
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 1200px;
        }
    }
</style>