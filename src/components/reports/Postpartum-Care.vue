<template>
    <div class="report">
        <!-- 产后保健 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    产后保健登记表
                </td>
            </tr>
			<tr>
				<td colspan="4"></td>
				<td colspan="4" style="text-align: right;">
					孕产妇保健ID：<span class="mark">{{reportData.ap010000500}}</span>
				</td>
			</tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td>姓名</td>
                <td class="mark">
                    {{reportData.de020103900}}
                </td>
                <td>年龄</td>
                <td class="mark">
                    {{reportData.de020103200}}
                </td>
                <td colspan="2">新生儿出生日期时间</td>
                <td class="mark">
                    {{$formatDate(reportData.ap020100501)}}
                </td>
                <td>身份证号</td>
                <td class="mark" colspan="2">
                    {{reportData.ap020103003}}
                </td>
            </tr>
            <tr>
				<td>随访日期</td>
				<td class="mark">
                    {{$formatDate(reportData.de060010900)}}
                </td>
				<td>访视机构名称</td>
				<td class="mark" colspan="3">
                    {{reportData.ap081001318}}
                </td>
				<td>访视人员姓名</td>
				<td class="mark" colspan="3">
                    {{reportData.ap020103910}}
                </td>
			</tr>
			<tr>
				<td rowspan="2">户籍地址</td>
				<td class="mark">
                    {{reportData.de020100901}}
                </td>
				<td colspan="2">省（自治区、直辖市）</td>
				<td class="mark">
                    {{reportData.de020100902}}
                </td>
				<td>市（地区）</td>
				<td colspan="3" class="mark">
                    {{reportData.de020100903}}
                </td>
				<td>区（县）</td>
			</tr>
			<tr>
				<td class="mark">
                    {{reportData.de020100904}}
                </td>
				<td colspan="2">街道（乡、镇）</td>
				<td colspan="2" class="mark">
                    {{reportData.de020100905}}
                </td>
				<td colspan="2">路（村、街、弄）</td>
				<td class="mark">
                    {{reportData.de020100906}}
                </td>
				<td>号</td>
			</tr>
			<tr>
				<td>邮政编码</td>
				<td colspan="9" class="mark">
                    {{reportData.de020104700}}
                </td>
			</tr>
			<tr>
				<td>配偶联系电话</td>
				<td colspan="9" class="mark">
                    {{reportData.de020101000}}
                </td>
			</tr>
			<tr>
				<td>体温（℃）</td>
				<td class="mark">
                    {{reportData.de041018600}}
                </td>
				<td>一般健康情况</td>
				<td class="mark">
                    {{reportData.ap051004600}}
                </td>
				<td>一般心理情况</td>
				<td class="mark">
                    {{reportData.ap051004700}}
                </td>
				<td>特殊情况记录</td>
				<td class="mark" colspan="3">
                    {{reportData.de051007000}}
                </td>
			</tr>
			<tr>
				<td colspan="2">收缩压（mmHg）</td>
				<td class="mark">
                    {{reportData.de041017400}}
                </td>
				<td colspan="2">舒张压（mmHg）</td>
				<td class="mark">
                    {{reportData.de041017600}}
                </td>
				<td>心率（次/分）</td>
				<td class="mark">
                    {{reportData.de041020600}}
                </td>
				<td>体重（KG）</td>
				<td class="mark">
                    {{reportData.de041018800}}
                </td>
			</tr>
			<tr>
				<td colspan="2">乳房检查异常结果描述</td>
				<td class="mark">{{reportData.ap041010300}}</td>
				<td colspan="2">左侧乳腺检查结果</td>
				<td class="mark">{{reportData.ap041007300}}</td>
				<td colspan="2">右侧乳腺检查结果</td>
				<td colspan="2" class="mark">{{reportData.ap041007600}}</td>
			</tr>
			<tr>
				<td colspan="2">恶露状况异常描述</td>
				<td class="mark">{{reportData.ap041011000}}</td>
				<td colspan="2">子宫检查异常描述</td>
				<td colspan="2" class="mark">{{reportData.ap041008100}}</td>
				<td>宫体异常描述</td>
				<td colspan="2" class="mark">{{reportData.de041007300}}</td>
			</tr>
			<tr>
				<td colspan="2">伤口愈合状况</td>
				<td class="mark">{{reportData.ap041002100}}</td>
				<td colspan="2">伤口愈合状况异常描述</td>
				<td colspan="2" class="mark">{{reportData.ap041011100}}</td>
				<td>乳汁量</td>
				<td colspan="2" class="mark">{{reportData.ap040101800}}</td>
			</tr>
			<tr>
				<td colspan="2">其他妇科检查</td>
				<td class="mark">{{reportData.ap041008700}}</td>
				<td colspan="2">检查（测）日期</td>
				<td colspan="2" class="mark">{{$formatDate(reportData.de060004800)}}</td>
				<td>检验日期</td>
				<td colspan="2" class="mark">{{$formatDate(reportData.ap060004802)}}</td>
			</tr>
			<tr>
				<td colspan="2">红细胞计数值(G/L)</td>
				<td class="mark">{{reportData.de045003100}}</td>
				<td colspan="2">血红蛋白值Hb(g/L)</td>
				<td class="mark">{{reportData.de045009100}}</td>
				<td colspan="2" >血小板计数值PLT(G/L)</td>
				<td colspan="2" class="mark">{{reportData.de045010800}}</td>
			</tr>
			<tr>
				<td colspan="2">白细胞分类计数</td>
				<td class="mark">{{reportData.ap045003600}}</td>
				<td colspan="2">白细胞计数值WBC(G/L)</td>
				<td class="mark">{{reportData.de045001500}}</td>
				<td colspan="2" >尿糖定量检测(mmol/L)</td>
				<td colspan="2" class="mark">{{reportData.de045006100}}</td>
			</tr>
			<tr>
				<td colspan="2">尿液酸碱度</td>
				<td class="mark">{{reportData.de045006600}}</td>
				<td>尿比重</td>
				<td class="mark">{{reportData.de045004600}}</td>
				<td colspan="3">尿蛋白定量检测值Scr(mg/24h)</td>
				<td colspan="2" class="mark">{{reportData.de045004900}}</td>
			</tr>
			<tr>
				<td colspan="2">产后天数（d）</td>
				<td class="mark">{{reportData.de040100400}}</td>
				<td colspan="3">孕产妇健康评估异常结果描述</td>
				<td class="mark" colspan="4">{{reportData.de051012700}}</td>
			</tr>
			<tr>
				<td colspan="2">指导日期</td>
				<td class="mark">{{$formatDate(reportData.ap060010903)}}</td>
				<td colspan="2">处理及指导意见</td>
				<td class="mark" colspan="5">{{reportData.de060001800}}</td>
			</tr>
			<tr>
				<td colspan="2">孕产妇健康指导类别名称</td>
				<td class="mark" colspan="2">{{reportData.ap060034200}}</td>
				<td colspan="3">孕产妇健康指导其他描述</td>
				<td class="mark" colspan="3">{{reportData.ap060034300}}</td>
			</tr>
			<tr>
				<td>产妇结论</td>
				<td class="mark" colspan="3">{{reportData.ap060032800}}</td>
				<td>婴儿结论</td>
				<td class="mark" colspan="5">{{reportData.ap060032900}}</td>
			</tr>
			<tr>
				<td>转诊原因</td>
				<td class="mark" colspan="2">{{reportData.ap060017701}}</td>
				<td>转诊医院</td>
				<td class="mark" colspan="2">{{reportData.ap081001308}}</td>
				<td colspan="2">转诊机构科室名称</td>
				<td class="mark" colspan="2">{{reportData.ap081002502}}</td>
			</tr>
			<tr>
				<td>接诊机构</td>
				<td class="mark" colspan="2">{{reportData.ap081001309}}</td>
				<td colspan="2">接诊机构科室名称</td>
				<td class="mark" colspan="5">{{reportData.ap081002604}}</td>
			</tr>
			<tr>
				<td>下次随访日期</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.ap060010901)}}</td>
				<td colspan="2">预约产后42天检查日期</td>
				<td class="mark" colspan="2">{{$formatDate(reportData.ap051008800)}}</td>
				<td >就诊机构名称</td>
				<td class="mark" colspan="2">{{reportData.ap081001304}}</td>
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
            width: 960px;
        }
    }
</style>