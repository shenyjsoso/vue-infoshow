<template>
    <div class="report">
        <!-- 住院费用收据 -->
        <table  style="margin-bottom: 20px;">
            <tr>
               <td colspan="8" class="title" style="font-weight: bold;color: #BF3B26;font-size: 26px;">
					{{personalCostRecord.organName}}住院收费票据
               </td>
            </tr>
			<tr>
				<td colspan="2">
					<span class="spanStyle">姓名：</span>
					<span style="font-weight: bold;">{{personalCostRecord.name}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">性&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
					<span style="font-weight: bold;">{{$aadata.sex[personalCostRecord.sex + '']}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
					<span style="font-weight: bold;">{{$getAgeBybirth(personalCostRecord.birthday)}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室：</span>
					<span style="font-weight: bold;">{{personalCostRecord.dptName}}</span>
				</td>
			</tr>
			<tr class="itemTitle">
				<td colspan="2">
					<span class="spanStyle">床号：</span>
					<span style="font-weight: bold;">{{personalCostRecord.ch}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">病历号：</span>
					<span style="font-weight: bold;">{{personalCostRecord.patientId}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">住院日期：</span>
					<span style="font-weight: bold;">{{$formatDate(personalCostRecord.rysj)}}</span>
				</td>
				<td colspan="2">
					<span class="spanStyle">出院日期：</span>
					<span style="font-weight: bold;">{{$formatDate(personalCostRecord.cysj)}}</span>
				</td>
			</tr>
            <!-- <tr>
                <td class="juest">姓名<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{reportData.name}}</td>
                <td class="juest">性别<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{$aadata.sex[reportData.sex + '']}}</td>
                <td class="juest">年龄<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{$getAgeBybirth(reportData.birthday)}}</td>
                <td class="juest">科室<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{reportData.dptName}}</td>
            </tr> -->
           <!-- <tr>
                <td class="juest">住院日期<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{$formatDate(reportData.rysj)}}</td>
                <td class="juest">出院日期<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{$formatDate(reportData.cysj)}}</td>
                <td class="juest">床号<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{reportData.cwh}}</td>
                <td class="juest">病历号<i></i></td>
                <td class="mark" colspan="2" style="vertical-align: top;">{{reportData.blh}}</td>
            </tr> -->
        </table>
		<div style="min-height: 200px;">
			<table>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col />
					<col style="width: 2px;" />
				</colgroup>
				<!-- <tr>
					<td class="alignCenter" style="color:#1A1A1A;font-weight: bold;">费用项目</td>
					<td class="alignCenter" style="color:#1A1A1A;font-weight: bold;">金额(元)</td>
					<td class="alignCenter" style="color:#1A1A1A;font-weight: bold;">费用项目</td>
					<td class="alignCenter" style="color:#1A1A1A;font-weight: bold;">金额(元)</td>
					<td class="alignCenter" style="color:#1A1A1A;font-weight: bold;">费用项目</td>
					<td class="alignCenter" style="border-right: 0px;color:#1A1A1A;font-weight: bold;">金额(元)</td>
					<td class="alignCenter"></td>
				</tr> -->
				<!-- <tr class="noBo">
					<td>特殊仪器费</td>
					<td style="text-align: right;">{{reportData.tsyqf}}</td>
					<td>麻醉费</td>
					<td style="text-align: right;">{{reportData.mzf}}</td>
					<td>住院费(床位费)</td>
					<td style="text-align: right;">{{reportData.zyf}}</td>
					<td rowspan="6">{{reportData.memo}}</td>
				</tr>
				<tr class="noBo">
					<td>住院费</td>
					<td style="text-align: right;">{{reportData.zyf}}</td>
					<td>诊疗费</td>
					<td style="text-align: right;">{{reportData.zlf}}</td>
					<td>治疗费</td>
					<td style="text-align: right;">{{reportData.zhf}}</td>
				</tr>
				<tr class="noBo">
					<td>护理费</td>
					<td style="text-align: right;">{{reportData.hlf}}</td>
					<td>手术材料费</td>
					<td style="text-align: right;">{{reportData.ssclf}}</td>
					<td>检查费</td>
					<td style="text-align: right;">{{reportData.jcf}}</td>
				</tr>
				<tr class="noBo">
					<td>检验费</td>
					<td style="text-align: right;">{{reportData.jyf}}</td>
					<td>材料费</td>
					<td style="text-align: right;">{{reportData.clf}}</td>
					<td>放射费</td>
					<td style="text-align: right;">{{reportData.fsf}}</td>
				</tr>
				<tr class="noBo">
					<td>输血费</td>
					<td style="text-align: right;">{{reportData.sxf}}</td>
					<td>输氧费氧气费</td>
					<td style="text-align: right;">{{reportData.syf}}</td>
					<td>西药费</td>
					<td style="text-align: right;">{{reportData.xyf}}</td>
				</tr>
				<tr class="noBo">
					<td>中成药费</td>
					<td style="text-align: right;">{{reportData.zcyf}}</td>
					<td>中草药费</td>
					<td style="text-align: right;">{{reportData.zcaf}}</td>
					<td>其他费用</td>
					<td style="text-align: right;">{{reportData.qtf}}</td>
				</tr> -->
				<!-- <tr class="noBo" v-for="(item,index) in list" :key="index">
					<td>&nbsp;</td>
					<td style="text-align: right;"></td>
					<td></td>
					<td style="text-align: right;"></td>
					<td></td>
					<td style="text-align: right;"></td>
					<td v-if="index == 0" :rowspan="list.length"></td>
				</tr> -->
				<tr v-for="(item,index) in pageData" :key="index">
					<template v-for="(row,val) in item">
						<td style="text-align: center;">{{row.NAME}}&nbsp;</td>
						<td style="text-align: center;">{{row.MONEY}}</td>
					</template>
					<td :rowspan="pageData.length" v-if="index == 0">{{personalCostRecord.memo}}</td>
				</tr>
			</table>
			<br />
		</div>
		<table>
            <tr class="itemTitle">
                <td colspan="5">
					<span class="spanStyle">合计费用（大写）：</span>
					<span style="font-weight: bold;">{{$bmoney(personalCostRecord.totalFee)}}</span>
                </td>
                <td colspan="2">
                    ￥：{{$fmoney(personalCostRecord.totalFee)}}
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td>
                    收款单位：{{personalCostRecord.organName}}
                </td>
                <td>
                    收款人：{{personalCostRecord.rcdName}}
                </td>
                <td>
                    日期：{{$formatDate(personalCostRecord.rcdDt)}}
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
            list: [{}, {}, {}],
            pageData:[],
						personalCostRecord:{},
				}
    },
    created() {
			var reportData = this.reportData;
			if (reportData) {
				this.personalCostRecord = reportData|| {};
				if(this.reportData.itemList){
					this.formatData(this.reportData.itemList);
				}
				
			}
			//this.formatTable();
			
    },
    methods: {
        formatTable() {
            let list = [
                {
                    code: 'indPay',
                    name: '自费药品'
                },
                // {
                //     code: 'tsyqf',
                //     name: '特殊仪器费'
                // },
                {
                    code: 'sszl',
                    name: '手术治疗'
                },
                // {
                //     code: 'mzf',
                //     name: '麻醉费'
                // },
                {
                    code: 'zyf',
                    name: '住院费(床位费)'
                },
                {
                    code: 'zlf',
                    name: '诊疗费'
                },
                {
                    code: 'zhf',
                    name: '治疗费'
                },
                {
                    code: 'hlf',
                    name: '护理费'
                },
                {
                    code: 'ssclf',
                    name: '手术材料费'
                },
                {
                    code: 'ssf',
                    name: '手术费'
                },
                {
                    code: 'jcf',
                    name: '检查费'
                },
                // {
                //     code: 'jyf',
                //     name: '检验费'
                // },
                // {
                //     code: 'clf',
                //     name: '材料费'
                // },
                // {
                //     code: 'fsf',
                //     name: '放射费'
                // },
                {
                    code: 'sxf',
                    name: '输血费'
                },
                {
                    code: 'syf',
                    name: '输氧费氧气费'
                },
                {
                    code: 'xyf',
                    name: '西药费'
                },
                {
                    code: 'zcyf',
                    name: '中成药费'
                },
                {
                    code: 'zcaf',
                    name: '中草药费'
                },
                {
                    code: 'qtf',
                    name: '其他费用'
                }
            ]

            let data = this.reportData.PersonalCostRecord;
            let tableData = [];
            for(let i=0;i<list.length;i++){
                if(data[list[i].code]){
                    let param = {
                        code:list[i].code,
                        name:list[i].name,
                        value:data[list[i].code]
                    }
                    tableData.push(param)
                }
            }
            let pageData = this.pageList(tableData);
            if(pageData.length > 0){
                this.pageData = pageData;
            }else{
                let array = [
                    [{},{},{}],[{},{},{}]
                ]
                this.pageData = array;
            }
            // console.log(pageData)
        },
        pageList(list){//自定义分页
            var result = [];
            var size = 3;
            for(var i=0;i<list.length;i+=size){
                let arr = list.slice(i,i+size);
                if(arr.length == 1){
                    arr.push({})
                    arr.push({})
                }
                if(arr.length == 2){
                    arr.push({})
                }
                result.push(arr);
            }
            return result;
        },
				formatData(list){
					let pageData = this.pageList(list);
					if(pageData.length > 0){
							this.pageData = pageData;
					}else{
							let array = [
									[{},{},{}],[{},{},{}]
							]
							this.pageData = array;
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
		.spanStyle{
			color:#BF3B26;
			font-size:16px;
		}
		.itemTitle{
			border-top:2px solid rgba(191, 59, 38, 0.7);
			border-bottom:2px solid rgba(191, 59, 38, 0.7);
			font-size: 16px;
			font-weight: bold;
		}
        .noBo {
            td {
                border-top: none;
            }
        }

        tr {
            td {
                font-size: 16px;
            }

            .juest {
                text-align: justify;
                position: relative;
                font-size: 16px;
                line-height: 16px;
                top: 5px;
                &:after {
                    content: '：';
                    position: absolute;
                    top: 5px;
                }

                i {
                    display: inline-block;
                    padding-left: 100%;
                }
            }
        }
    }
}
</style>