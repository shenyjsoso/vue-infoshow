<template>
    <div class="report">
        <!-- 住院医嘱 -->
        <table>
            <tr>
                <td colspan="13" class="title" style="font-weight: bold;">
                    长期医嘱单
                </td>
            </tr>
            <tr>
            	<td style="text-align: right;">姓名</td>
            	<td class="mark" colspan="2"></td>
            	<td style="text-align: right;">科别</td>
            	<td class="mark" colspan="2"></td>
            	<td style="text-align: right;">病区</td>
            	<td class="mark"></td>
            	<td style="text-align: right;">床号</td>
            	<td class="mark"></td>
            	<td style="text-align: right;">住院号</td>
            	<td class="mark" colspan="2"></td>
            </tr>
        </table>
        <table border="2">
        	<tr>
        		<td colspan="10" class="alignCenter">起始</td>
        		<td colspan="3" class="alignCenter">停止</td>
        	</tr>
        	<tr>
        		<td class="alignCenter">日期</td>
        		<td class="alignCenter">时间</td>
                <td colspan="4" class="alignCenter">医嘱内容</td>
                <td class="alignCenter">医师签名</td>
                <td class="alignCenter">执行时间</td>
                <td class="alignCenter">执行人签名</td>
                <td class="alignCenter">核对人签名</td>
        		<td class="alignCenter">日期</td>
        		<td class="alignCenter">时间</td>
        		<td class="alignCenter">医师签名</td>
        	</tr>
        	<tr>
        		<td v-for="i in 2">&nbsp;</td>
        		<td colspan="4">&nbsp;</td>
        		<td v-for="i in 7">&nbsp;</td>
        	</tr>
        </table>
        <table style="margin-top: 20px;">
            <tr>
                <td colspan="13" class="title" style="font-weight: bold;">
                    临时医嘱单
                </td>
            </tr>
            <tr>
            	<td style="text-align: right;">姓名</td>
            	<td class="mark" colspan="2"></td>
            	<td style="text-align: right;">科别</td>
            	<td class="mark" colspan="2"></td>
            	<td style="text-align: right;">病区</td>
            	<td class="mark"></td>
            	<td style="text-align: right;">床号</td>
            	<td class="mark"></td>
            	<td style="text-align: right;">住院号</td>
            	<td class="mark" colspan="2"></td>
            </tr>
        </table>
        <table border="1">
        	<tr>
        		<td colspan="2" class="alignCenter">起始</td>
        		<td colspan="4" rowspan="2" class="alignCenter">医嘱内容</td>
        		<td rowspan="2" class="alignCenter">医师签名</td>
        		<td rowspan="2" class="alignCenter">执行时间</td>
        		<td rowspan="2" class="alignCenter">执行人签名</td>
        		<td rowspan="2" class="alignCenter">核对人签名</td>
        	</tr>
        	<tr>
        		<td class="alignCenter">日期</td>
        		<td class="alignCenter">时间</td>
        	</tr>
        	<tr>
        		<td v-for="i in 2">&nbsp;</td>
        		<td colspan="4">&nbsp;</td>
        		<td v-for="i in 4">&nbsp;</td>
        	</tr>
        </table>
        <!-- <table border="1">
			<tr>
				<td class="alignCenter" rowspan="2">基本情况</td>
				<td class="alignCenter">姓名</td>
				<td class="mark">{{orderMain.name}}</td>
				<td class="alignCenter">性别</td>
				<td class="mark">{{orderMain.sexname}}</td>
				<td class="alignCenter">年龄</td>
				<td class="mark">{{orderMain.age}}</td>
				<td class="alignCenter">药物过敏史</td>
				<td class="mark">{{orderMain.ywgms}}</td>
				<td class="alignCenter">身高</td>
				<td class="mark">{{orderMain.sg}}</td>
				<td class="alignCenter">体重</td>
				<td class="mark">{{orderMain.tz}}</td>
			</tr>
			<tr>
				<td class="alignCenter">病历号</td>
				<td class="mark">{{orderMain.blh}}</td>
				<td class="alignCenter">入院日期</td>
				<td class="mark">{{$formatDate(orderMain.rysj)}}</td>
				<td class="alignCenter">出院日期</td>
				<td class="mark">{{$formatDate(orderMain.cysj)}}</td>
				<td class="alignCenter">既往病史</td>
				<td class="mark">{{orderMain.jwbs}}</td>
				<td class="alignCenter">体重指数</td>
				<td class="mark" colspan="3">{{orderMain.tzzs}}</td>
			</tr>
			<tr>
				<td class="alignCenter">入院诊断</td>
				<td class="mark" colspan="12">{{orderMain.zdjg}}</td>
			</tr>
			<tr>
				<td class="alignCenter">手术情况</td>
				<td class="mark" colspan="12">{{orderMain.ssqk}}</td>
			</tr>
			<tr>
				<td class="alignCenter">病原学检查情况</td>
				<td colspan="12">
					&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;取
					<span class="lineBox">{{orderMain.bbmc}}</span>标本；
					&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;问根
					<span class="lineBox">{{orderMain.wgmc}}</span>；
					药敏<span class="lineBox">{{orderMain.ym}}</span>；S：<span class="lineBox">{{orderMain.s}}</span>
					R：<span class="lineBox">{{orderMain.r}}</span>
				</td>
			</tr>
			<tr>
				<td class="alignCenter" :rowspan="fyjywList.length+yjywList.length+2">用药情况</td>
				<td class="alignCenter" colspan="3">药品名称</td>
				<td class="alignCenter">溶媒</td>
				<td class="alignCenter">用量</td>
				<td class="alignCenter">用法</td>
				<td class="alignCenter">给药途径</td>
				<td class="alignCenter">开始时间</td>
				<td class="alignCenter">结束时间</td>
				<td class="alignCenter">缺陷代码</td>
				<td class="alignCenter" colspan="2">点评</td>
			</tr>
			<tr>
				<td>1</td>
				<td class="mark" colspan="2">{{fyjywList[0].itemName}}</td>
				<td class="mark">{{fyjywList[0].rm}}</td>
				<td class="mark">{{fyjywList[0].dosageCount}}{{fyjywList[0].dosageUnit}}</td>
				<td class="mark">{{fyjywList[0].yf}}</td>
				<td class="mark">{{fyjywList[0].gytj}}</td>
				<td class="mark">{{$formatDate(fyjywList[0].starttime)}}</td>
				<td class="mark">{{$formatDate(fyjywList[0].endtime)}}</td>
				<td class="mark">{{fyjywList[0].qxdm}}</td>
				<td class="mark" colspan="2">{{fyjywList[0].ypdp}}</td>
			</tr>
			<template v-for="(item,index) in fyjywList">
				<tr v-if="index != 0">
					<td>{{index+1}}</td>
					<td class="mark" colspan="2">{{item.itemName}}</td>
					<td class="mark">{{item.rm}}</td>
					<td class="mark">{{item.dosageCount}}{{item.dosageUnit}}</td>
					<td class="mark">{{item.yf}}</td>
					<td class="mark">{{item.gytj}}</td>
					<td class="mark">{{$formatDate(item.starttime)}}</td>
					<td class="mark">{{$formatDate(item.endtime)}}</td>
					<td class="mark">{{item.qxdm}}</td>
					<td class="mark" colspan="2">{{item.ypdp}}</td>
				</tr>
			</template>
			<tr>
				<td class="alignCenter" colspan="3">抑菌药物名称</td>
				<td class="alignCenter">溶媒</td>
				<td class="alignCenter">用量</td>
				<td class="alignCenter">用法</td>
				<td class="alignCenter">给药途径</td>
				<td class="alignCenter">开始时间</td>
				<td class="alignCenter">结束时间</td>
				<td class="alignCenter">缺陷代码</td>
				<td class="alignCenter" colspan="2"></td>
			</tr>
			<tr>
				<td>1</td>
				<td class="mark" colspan="2">{{yjywList[0].itemName}}</td>
				<td class="mark">{{yjywList[0].rm}}</td>
				<td class="mark">{{yjywList[0].dosageCount}}{{yjywList[0].dosageUnit}}</td>
				<td class="mark">{{yjywList[0].yf}}</td>
				<td class="mark">{{yjywList[0].gytj}}</td>
				<td class="mark">{{$formatDate(yjywList[0].starttime)}}</td>
				<td class="mark">{{$formatDate(yjywList[0].endtime)}}</td>
				<td class="mark">{{yjywList[0].qxdm}}</td>
				<td class="mark" colspan="2">{{yjywList[0].ypdp}}</td>
			</tr>
			<template v-for="(item,index) in yjywList">
				<tr v-if="index != 0">
					<td>{{index+1}}</td>
					<td class="mark" colspan="2">{{item.itemName}}</td>
					<td class="mark">{{item.rm}}</td>
					<td class="mark">{{item.dosageCount}}{{item.dosageUnit}}</td>
					<td class="mark">{{item.yf}}</td>
					<td class="mark">{{item.gytj}}</td>
					<td class="mark">{{$formatDate(item.starttime)}}</td>
					<td class="mark">{{$formatDate(item.endtime)}}</td>
					<td class="mark">{{item.qxdm}}</td>
					<td class="mark" colspan="2">{{item.ypdp}}</td>
				</tr>
			</template>
			<tr>
				<td class="alignCenter">小结</td>
				<td class="mark" colspan="12">{{orderMain.xj}}</td>
			</tr>
        </table> -->
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
				orderMain:{},
				fyjywList:[{},{},{},{}],
				yjywList:[{},{},{},{}],
				listLength:4
            }
        },
        created(){
			var reportData = this.reportData;
			if(reportData){
				this.orderMain = reportData.orderMain || {};
			}
			this.formatList(reportData.fyjyw,'fyjywList');
			this.formatList(reportData.yjyw,'yjywList');
            // console.log(this.reportData)
        },
		methods:{
			formatList(listStr = [],type){
				var list = [];
				var detailList = listStr;
				if(detailList){
					if(detailList.length >= this.listLength){
							list = detailList;
					}else{
						var CL = this.listLength - detailList.length;
						list = detailList;
						for(var i=0;i<CL;i++){
							list.push({});
						}
					}
				}else{
					for(var i=0;i<this.listLength;i++){
						list.push({});
					}
				}
				if(type=='fyjywList'){
					this.fyjywList = list;
				}else if(type=='yjywList'){
					this.yjywList = list;
				}
			}
		}
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
			.fontBold{
				font-weight:bold;
			}
            tr{
                .title{
                    font-family: 宋体;
                }
            }
        }
    }
</style>