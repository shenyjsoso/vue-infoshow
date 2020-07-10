<template>
    <div class="report">
        <!-- 国家免疫规划疫苗儿童免疫程序表 -->
        <table>
            <tr>
                <td colspan="18"
                    class="title"
                    style="font-weight: bold;">
                    国家免疫规划疫苗儿童免疫程序表
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
				<td colspan="3" class="alignCenter">疫苗种类</td>
				<td colspan="15" class="alignCenter">接种年（月）龄</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">名称</td>
				<td class="alignCenter">缩写</td>
				<td class="alignCenter">出生时</td>
				<td class="alignCenter">1月</td>
				<td class="alignCenter">2月</td>
				<td class="alignCenter">3月</td>
				<td class="alignCenter">4月</td>
				<td class="alignCenter">5月</td>
				<td class="alignCenter">6月</td>
				<td class="alignCenter">8月</td>
				<td class="alignCenter">9月</td>
				<td class="alignCenter">18月</td>
				<td class="alignCenter">2岁</td>
				<td class="alignCenter">3岁</td>
				<td class="alignCenter">4岁</td>
				<td class="alignCenter">5岁</td>
				<td class="alignCenter">6岁</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">乙肝疫苗</td>
				<td class="alignCenter">HepB</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.tgym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">卡介苗</td>
				<td class="alignCenter">BCG</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.kjm)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">脊灰灭活疫苗</td>
				<td class="alignCenter">IPV</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.jhmhym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">脊灰减毒活疫苗</td>
				<td class="alignCenter">OPV</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.jhjdhym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">百白破疫苗</td>
				<td class="alignCenter">DTaP</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.bbpym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">白破疫苗</td>
				<td class="alignCenter">DT</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.bpym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">麻-风疫苗</td>
				<td class="alignCenter">MR</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.mfym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">麻腮风疫苗</td>
				<td class="alignCenter">MMR</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.msfym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter" rowspan="2">乙脑减毒活疫苗或乙脑灭活疫苗 1</td>
				<td class="alignCenter">JE-L</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.ynjdhyml)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">JE-I</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.ynjdhymi)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">A群流脑多糖疫苗</td>
				<td class="alignCenter">MPSV-A</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.aqlndtym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter">A群 C群流脑多糖疫苗</td>
				<td class="alignCenter">MPSV-AC</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.aqcqlndtym)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td colspan="2" class="alignCenter" rowspan="2">甲肝减毒活疫苗或甲肝灭活疫苗</td>
				<td class="alignCenter">HepA-L</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.jgjdhyml)" :key="index">
					{{item && item == '0' ? '' : item}}
				</td>
			</tr>
			<tr>
				<td class="alignCenter">HepA-I</td>
				<td class="alignCenter mark" v-for="(item,index) in getListByStr(reportData.jgjdhymi)" :key="index">
					{{item && item == '0' ? '' : item}}
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

            }
        },
        created(){

        },
        methods:{
        	getListByStr(str){
        		var list = new Array(15);
        		if(str){
        			list = str.split(',').splice(0,15);
        		}
        		return list
        	}
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
        }
    }
</style>