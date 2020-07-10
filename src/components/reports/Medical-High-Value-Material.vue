<template>
    <div class="report">
        <!-- 医用高值耗材使用记录 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    医用高值耗材使用记录
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td class="alignCenter">科室:</td>
                <td class="mark" colspan="2">{{personalConsMaterialRecords.dptName}}</td>
                <td class="alignCenter">患者姓名:</td>
                <td class="mark" colspan="2">{{personalConsMaterialRecords.name}}</td>
                <td class="alignCenter">住院号:</td>
                <td class="mark" colspan="2">{{personalConsMaterialRecords.opEmHpNo}}</td>
                <td class="alignCenter">手术日期:</td>
                <td class="mark" colspan="2">{{$formatDate(personalConsMaterialRecords.useDt)}}</td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <colgroup>
                <col>
                <col>
                <col>

                <col>
                <col>
                <col>

                <col style="width: 40px;">
                <col style="width: 40px;">
                <col style="width: 40px;">

                <col style="width: 30px;">
                <col style="width: 30px;">
                <col style="width: 30px;">

                <col>
                <col>
                <col>
            </colgroup>
            <tr>
            	<td class="alignCenter" colspan="3">耗材名称</td>
				<!-- <td class="alignCenter" colspan="2">品牌</td>
				<td class="alignCenter" colspan="2">型号</td> -->
				<td class="alignCenter" colspan="3">单价(元)</td>
				<td class="alignCenter" colspan="3">数量</td>
                <td class="alignCenter" colspan="3">单位</td>
				<td class="alignCenter" colspan="3">金额(元)</td>
            </tr>
			<!-- <tr>
				<td class="alignCenter mark" colspan="3">&nbsp;{{PersonalConsMaterialDetailses[0].mtrName}}</td>
				<td class="alignCenter mark" colspan="3">{{PersonalConsMaterialDetailses[0].unitPrice}}</td>
				<td class="alignCenter mark" colspan="3">{{PersonalConsMaterialDetailses[0].mtrNumb}}</td>
                <td class="alignCenter mark" colspan="3">{{PersonalConsMaterialDetailses[0].mtrUnit}}</td>
				<td class="alignCenter mark" colspan="3">{{PersonalConsMaterialDetailses[0].totalPrice}}</td>
			</tr> -->
            <template v-if="PersonalConsMaterialDetailses.length > 0">
                <template v-for="(item,index) in PersonalConsMaterialDetailses">
                    <tr>
                        <td class="alignCenter mark" colspan="3">&nbsp;{{item.mtrName}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.unitPrice}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.mtrNumb}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.mtrUnit}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.totalPrice}}</td>
                    </tr>
                </template>
            </template>
			<template v-else>
                <template v-for="(item,index) in KongList">
                    <tr>
                        <td class="alignCenter mark" colspan="3">&nbsp;{{item.mtrName}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.unitPrice}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.mtrNumb}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.mtrUnit}}</td>
                        <td class="alignCenter mark" colspan="3">{{item.totalPrice}}</td>
                    </tr>
                </template>
            </template>
            <tr>
                <td colspan="3" class="alignCenter">手术医生、护士签字(三人以上)</td>
                <td colspan="12" class="alignCenter mark">
                    {{personalConsMaterialRecords.docName}}
                </td>
                <!-- <td colspan="2" class="alignCenter">供货商签字</td>
                <td colspan="4" class="alignCenter mark">
                    {{personalConsMaterialRecords.ghsqm}}
                </td> -->
            </tr>
			<tr>
				<td colspan="15">
					备注：以上签字是确保手术所使用的高值耗材型号、单价、数量、金额与实际手术情况一致，在确保手术所使用耗材
					无误情况下请手术医生、护士、供货商签字确认。
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
				personalConsMaterialRecords:{},
				PersonalConsMaterialDetailses:[],
                KongList:[{},{},{},{}],
				PersonalConsMaterialListLength:4
            }
        },
        created(){
			var reportData = this.reportData;
			if(reportData){
                if(reportData.PersonalConsMaterialRecords && reportData.PersonalConsMaterialRecords.length > 0){
                    this.personalConsMaterialRecords = reportData.PersonalConsMaterialRecords[0];
                }else{
                    this.personalConsMaterialRecords = {};
                }
			}
            this.PersonalConsMaterialDetailses = reportData.PersonalConsMaterialRecords || [];
			// this.formatList(reportData.PersonalConsMaterialRecords);
            // console.log(this.reportData)
        },
		methods:{
			formatList(drugList){
				var list = [];
				var detailList = drugList;
				if(detailList){
					if(detailList.length > this.PersonalConsMaterialListLength){
						list = detailList;
					}else{
						var CL = this.PersonalConsMaterialListLength - detailList.length;
						list = detailList;
						for(var i=0;i<CL;i++){
							list.push({});
						}
					}
				}else{
					for(var i=0;i<this.PersonalConsMaterialListLength;i++){
						list.push({});
					}
				}
				this.PersonalConsMaterialDetailses = list;
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
                .title{
                    font-family: 宋体;
                }
            }
        }
    }
</style>