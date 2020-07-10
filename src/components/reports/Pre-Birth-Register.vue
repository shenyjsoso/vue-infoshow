<template>
    <div class="report">
        <!-- 产前保健专案登记 -->
        <table>
            <tr>
                <td colspan="8" class="title" style="font-weight: bold;">
                    产前保健专案登记
                </td>
            </tr>
        </table>
        <table border="2" class="stripe">
            <tr>
                <td>姓名</td>
                <td class="mark" colspan="2">{{reportData.de020103900}}</td>
                <td>年龄</td>
                <td class="mark" colspan="2">{{reportData.de020103200}}</td>
                <td>民族</td>
                <td class="mark">{{reportData.ap020102503}}</td>
                <td>文化程度</td>
                <td class="mark" colspan="2">{{reportData.ap020109000}}</td>
            </tr>
            <tr>
            	<td>出生日期</td>
            	<td class="mark" colspan="2">{{reportData.de020100501}}</td>
            	<td>身份证号</td>
            	<td class="mark" colspan="3">{{reportData.ap020103003}}</td>
            	<td colspan="2">职业类别</td>
            	<td class="mark" colspan="2">{{reportData.ap020110300}}</td>
            </tr>
			<tr>
				<td>孕周（W）</td>
				<td class="mark" colspan="2">{{reportData.de041024200}}</td>
				<td colspan="2">孕产妇保健ID</td>
				<td class="mark" colspan="2">{{reportData.ap010000500}}</td>
				<td colspan="2">检查孕周天数</td>
				<td class="mark" colspan="2">{{reportData.ap041001500}}</td>
			</tr>
			<tr>
				<td colspan="2">工作单位名称</td>
				<td class="mark" colspan="9">{{reportData.de081000700}}</td>
			</tr>
			<tr>
				<td>配偶姓名</td>
				<td class="mark" colspan="2">{{reportData.ap020103905}}</td>
				<td>年龄</td>
				<td class="mark" colspan="2">{{reportData.ap020102605}}</td>
				<td>民族</td>
				<td class="mark">{{reportData.ap020102501}}</td>
				<td>文化程度</td>
				<td class="mark" colspan="2">{{reportData.ap020109100}}</td>
			</tr>
			<tr>
				<td>出生日期</td>
				<td class="mark" colspan="2">{{reportData.ap020100503}}</td>
				<td>身份证号</td>
				<td class="mark" colspan="3">{{reportData.ap020103004}}</td>
				<td colspan="2">职业类别</td>
				<td class="mark" colspan="2">{{reportData.ap020110302}}</td>
			</tr>
			<tr>
				<td colspan="2">工作单位名称</td>
				<td class="mark" colspan="4">{{reportData.ap081000704}}</td>
				<td colspan="2">联系电话</td>
				<td colspan="3" class="mark">{{reportData.de020101000}}</td>
			</tr>
			<tr>
				<td rowspan="2">户籍地址</td>
				<td class="mark" colspan="2">{{reportData.de020100901}}</td>
				<td colspan="2">省（自治区、直辖市）</td>
				<td class="mark" colspan="2">{{reportData.de020100902}}</td>
				<td>市（地区）</td>
				<td class="mark" colspan="2">{{reportData.de020100903}}</td>
				<td>区（县）</td>
			</tr>
			<tr>
				<td class="mark" colspan="2">{{reportData.de020100904}}</td>
				<td colspan="2">街道（乡、镇）</td>
				<td colspan="2" class="mark">{{reportData.de020100905}}</td>
				<td colspan="2">路（村、街、弄）</td>
				<td class="mark">{{reportData.de020100906}}</td>
				<td>号</td>
			</tr>
			<tr>
				<td>邮政编码</td>
				<td class="mark" colspan="10">{{reportData.de020104700}}</td>
			</tr>
			<tr>
				<td rowspan="2">现住址</td>
				<td class="mark" colspan="2">{{reportData.ap020100901}}</td>
				<td colspan="2">省（自治区、直辖市）</td>
				<td class="mark" colspan="2">{{reportData.ap020100902}}</td>
				<td>市（地区）</td>
				<td class="mark" colspan="2">{{reportData.ap020100903}}</td>
				<td>区（县）</td>
			</tr>
			<tr>
				<td class="mark" colspan="2">{{reportData.ap020100904}}</td>
				<td colspan="2">街道（乡、镇）</td>
				<td colspan="2" class="mark">{{reportData.ap020100905}}</td>
				<td colspan="2">路（村、街、弄）</td>
				<td class="mark">{{reportData.ap020100906}}</td>
				<td>号</td>
			</tr>
			<tr>
				<td>邮政编码</td>
				<td class="mark" colspan="2">{{reportData.ap020104701}}</td>
				<td>联系电话</td>
				<td class="mark" colspan="7">{{reportData.ap020101103}}</td>
			</tr>
			<tr>
				<td rowspan="2">产后修养地址</td>
				<td class="mark" colspan="2">{{reportData.ap020101901}}</td>
				<td colspan="2">省（自治区、直辖市）</td>
				<td class="mark" colspan="2">{{reportData.ap020101902}}</td>
				<td>市（地区）</td>
				<td class="mark" colspan="2">{{reportData.ap020101903}}</td>
				<td>区（县）</td>
			</tr>
			<tr>
				<td class="mark" colspan="2">{{reportData.ap020101904}}</td>
				<td colspan="2">街道（乡、镇）</td>
				<td colspan="2" class="mark">{{reportData.ap020101905}}</td>
				<td colspan="2">路（村、街、弄）</td>
				<td class="mark">{{reportData.ap020101906}}</td>
				<td>号</td>
			</tr>
			<tr>
				<td>邮政编码</td>
				<td class="mark" colspan="2">{{reportData.ap020104702}}</td>
				<td>联系电话</td>
				<td class="mark" colspan="2">{{reportData.ap020101104}}</td>
				<td>街道名称</td>
				<td class="mark" colspan="4">{{reportData.ap020101908}}</td>
			</tr>
			<tr>
				<td>建册单位</td>
				<td class="mark" colspan="2">{{reportData.ap081001315}}</td>
				<td>建册日期</td>
				<td class="mark" colspan="2">{{reportData.ap090005201}}</td>
				<td>建册孕周</td>
				<td class="mark">{{reportData.ap040107300}}</td>
				<td colspan="2">建档人员姓名</td>
				<td class="mark">{{reportData.ap020103934}}</td>
			</tr>
			<tr>
				<td>孕次</td>
				<td class="mark" colspan="2">{{reportData.de040110800}}</td>
				<td>产次</td>
				<td class="mark" colspan="2">{{reportData.de021000200}}</td>
				<td>剖宫产次数</td>
				<td class="mark">{{reportData.de021005300}}</td>
				<td colspan="2">阴道助产次数</td>
				<td class="mark">{{reportData.de021001000}}</td>
			</tr>
			<tr>
				<td>主诉</td>
				<td class="mark" colspan="2">{{reportData.de040111900}}</td>
				<td>预产期</td>
				<td class="mark">{{reportData.de051009800}}</td>
				<td colspan="2">初潮年龄（岁）</td>
				<td class="mark">{{reportData.de021000700}}</td>
				<td colspan="2">末次月经日期</td>
				<td class="mark">{{reportData.de021005100}}</td>
			</tr>
			<tr>
				<td colspan="2">月经持续时间（d）</td>
				<td class="mark">{{reportData.de021008300}}</td>
				<td colspan="2">月经周期（d）</td>
				<td class="mark" colspan="3">{{reportData.de021008400}}</td>
				<td colspan="2">月经出血量类别</td>
				<td class="mark">{{reportData.ap040101300}}</td>
			</tr>
			<tr>
				<td>痛经程度</td>
				<td class="mark" colspan="2">{{reportData.ap021004300}}</td>
				<td>既往疾病史</td>
				<td class="mark" colspan="2">{{reportData.de021002600}}</td>
				<td colspan="2">其他既往疾病史</td>
				<td class="mark" colspan="3">{{reportData.ap021005800}}</td>
			</tr>
			<tr>
				<td colspan="3">其他家族遗传性疾病史描述</td>
				<td class="mark" colspan="8">{{reportData.ap021005000}}</td>
			</tr>
			<tr>
				<td>个人史名称</td>
				<td class="mark" colspan="2">{{reportData.ap021006600}}</td>
				<td colspan="2">其他个人史描述</td>
				<td class="mark" colspan="6">{{reportData.ap021006700}}</td>
			</tr>
			<tr>
				<td>妇科手术史</td>
				<td class="mark" colspan="2">{{reportData.ap021007400}}</td>
				<td colspan="2">妊娠合并症/并发症史</td>
				<td class="mark" colspan="6">{{reportData.de021005500}}</td>
			</tr>
			<tr>
				<td colspan="2">流产总次数（次）</td>
				<td class="mark">{{reportData.de021004900}}</td>
				<td colspan="2">人工流产次数</td>
				<td class="mark">{{reportData.de021005400}}</td>
				<td colspan="2">自然流产次数</td>
				<td class="mark">{{reportData.de021009300}}</td>
				<td>死胎例数</td>
				<td class="mark">{{reportData.de021006500}}</td>
			</tr>
			<tr>
				<td>死产例数</td>
				<td class="mark" colspan="2">{{reportData.de021006400}}</td>
				<td colspan="2">新生儿死亡例数</td>
				<td class="mark">{{reportData.de021007500}}</td>
				<td colspan="2">出生缺陷儿例数</td>
				<td class="mark" colspan="3">{{reportData.de021000500}}</td>
			</tr>
			<tr>
				<td colspan="3">孕早期接触有害因素-类别</td>
				<td class="mark" colspan="3">{{reportData.ap030001400}}</td>
				<td colspan="3">其他孕早期接触有害因素-类别</td>
				<td class="mark" colspan="2">{{reportData.ap030001600}}</td>
			</tr>
			<tr>
				<td colspan="3">孕早期高危因素</td>
				<td class="mark" colspan="3">{{reportData.ap030005000}}</td>
				<td colspan="3">高危评分值（分）</td>
				<td class="mark" colspan="2">{{reportData.de051010400}}</td>
			</tr>
			<tr>
				<td colspan="2">身高（cm）</td>
				<td class="mark">{{reportData.de041016700}}</td>
				<td colspan="2">体重（KG）</td>
				<td class="mark">{{reportData.de041018800}}</td>
				<td colspan="2">体质指数（BMI）</td>
				<td class="mark" colspan="3">{{reportData.ap051007501}}</td>
			</tr>
			<tr>
				<td colspan="2">舒张压（mmHg）</td>
				<td class="mark">{{reportData.de041017600}}</td>
				<td colspan="2">收缩压（mmHg）</td>
				<td class="mark">{{reportData.de041017400}}</td>
				<td colspan="2">宫底高度（cm）</td>
				<td class="mark">{{reportData.de041006700}}</td>
				<td>腹围（cm）</td>
				<td class="mark">{{reportData.de041005200}}</td>
			</tr>
			<tr>
				<td colspan="2">胎方位</td>
				<td class="mark">{{reportData.ap043005300}}</td>
				<td colspan="2">胎心率（次/分钟）</td>
				<td class="mark">{{reportData.de041018300}}</td>
				<td colspan="2">心率（次/分钟）</td>
				<td class="mark" colspan="3">{{reportData.de041020600}}</td>
			</tr>
			<tr>
				<td colspan="2">心脏检查结果异常描述</td>
				<td class="mark" colspan="4">{{reportData.ap041020702}}</td>
				<td colspan="2">肺部检查结果异常描述</td>
				<td class="mark" colspan="3">{{reportData.ap041003203}}</td>
			</tr>
			<tr>
				<td colspan="2">外阴检查结果异常描述</td>
				<td class="mark" colspan="4">{{reportData.ap041019702}}</td>
				<td colspan="2">阴道检查结果异常描述</td>
				<td class="mark" colspan="3">{{reportData.de041022400}}</td>
			</tr>
			<tr>
				<td colspan="2">宫颈检查结果异常描述</td>
				<td class="mark" colspan="4">{{reportData.de041007100}}</td>
				<td colspan="2">子宫检查异常描述</td>
				<td class="mark" colspan="3">{{reportData.ap041008100}}</td>
			</tr>
			<tr>
				<td colspan="2">附件检查结果异常描述</td>
				<td class="mark" colspan="4">{{reportData.de041004200}}</td>
				<td colspan="2">宫体检查异常描述</td>
				<td class="mark" colspan="3">{{reportData.de041007300}}</td>
			</tr>
			<tr>
				<td colspan="2">检验日期</td>
				<td class="mark" colspan="2">{{reportData.ap060004802}}</td>
				<td colspan="2">红细胞计数值（G/L）</td>
				<td class="mark" colspan="2">{{reportData.de045003100}}</td>
				<td colspan="2">血红蛋白值Hb（g/L）</td>
				<td class="mark" >{{reportData.de045009100}}</td>
			</tr>
			<tr>
				<td colspan="3">血小板计数值PLT（G/L）</td>
				<td class="mark" colspan="3">{{reportData.de045010800}}</td>
				<td colspan="2">白细胞分类计数</td>
				<td class="mark" colspan="3">{{reportData.ap045003600}}</td>
			</tr>
			<tr>
				<td colspan="3">白细胞计数值WBC（G/L）</td>
				<td class="mark">{{reportData.de045001500}}</td>
				<td colspan="2">出血时间（s）</td>
				<td class="mark" colspan="2">{{reportData.de040108300}}</td>
				<td colspan="2">凝血时间（s）</td>
				<td class="mark">{{reportData.de045006700}}</td>
			</tr>
			<tr>
				<td colspan="3">血钾浓度（mmol/L）</td>
				<td class="mark">{{reportData.de045009300}}</td>
				<td colspan="2">血钠浓度（mmol/L）</td>
				<td class="mark" colspan="2">{{reportData.de045009400}}</td>
				<td colspan="2">其他血常规测量</td>
				<td class="mark">{{reportData.ap045004000}}</td>
			</tr>
			<tr>
				<td colspan="3">尿蛋白定性检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004700}}</td>
				<td colspan="2">尿糖定性检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004800}}</td>
			</tr>
			<tr>
				<td colspan="3">尿蛋白定性检测值Scr（mg/24h）</td>
				<td class="mark" colspan="3">{{reportData.de045004900}}</td>
				<td colspan="2">尿糖定量检测（mmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045006100}}</td>
			</tr>
			<tr>
				<td colspan="3">尿酮体检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045001500}}</td>
				<td colspan="2">尿潜血检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045001600}}</td>
			</tr>
			<tr>
				<td >尿比重</td>
				<td class="mark" colspan="2">{{reportData.de045004600}}</td>
				<td>尿液酸碱度</td>
				<td class="mark" colspan="2">{{reportData.de045006600}}</td>
				<td colspan="2">其他尿常规监测</td>
				<td class="mark" colspan="3">{{reportData.ap045002100}}</td>
			</tr>
			<tr>
				<td>ABO血型</td>
				<td class="mark" colspan="2">{{reportData.ap045002200}}</td>
				<td>RH血型</td>
				<td class="mark" colspan="2">{{reportData.ap045002300}}</td>
				<td colspan="2">血糖检测值（mmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045010200}}</td>
			</tr>
			<tr>
				<td colspan="3">血清谷丙转氨酶值（U/L）</td>
				<td class="mark" colspan="3">{{reportData.de045009900}}</td>
				<td colspan="2">血清谷草转氨酶值（U/L）</td>
				<td class="mark" colspan="3">{{reportData.de045012700}}</td>
			</tr>
			<tr>
				<td colspan="3">白蛋白浓度ALB（g/L）</td>
				<td class="mark" colspan="3">{{reportData.de045001300}}</td>
				<td colspan="2">总胆红素值TBIL（μmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045012600}}</td>
			</tr>
			<tr>
				<td colspan="3">结合胆红素值DBIL（μmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045003400}}</td>
				<td colspan="2">血肌酐值（μmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045009200}}</td>
			</tr>
			<tr>
				<td colspan="3">血尿素氮检测BUN值（mmol/L）</td>
				<td class="mark" colspan="3">{{reportData.de045009500}}</td>
				<td colspan="2">阴道分泌物检查结果名称</td>
				<td class="mark" colspan="3">{{reportData.ap045001700}}</td>
			</tr>
			<tr>
				<td colspan="3">阴道分泌物检查结果其他描述</td>
				<td class="mark" colspan="3">{{reportData.ap045001800}}</td>
				<td colspan="2">阴道分泌物清洁度</td>
				<td class="mark" colspan="3">{{reportData.ap045003100}}</td>
			</tr>
			<tr>
				<td colspan="3">乙型肝炎病毒表面抗原（HbsAg）检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045002600}}</td>
				<td colspan="2">乙型肝炎病毒表面抗体（抗-Hbs）检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004400}}</td>
			</tr>
			<tr>
				<td colspan="3">乙型肝炎病毒e抗原（Hbeag）检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004300}}</td>
				<td colspan="2">乙型肝炎病毒e抗体（抗-Hbe）检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004200}}</td>
			</tr>
			<tr>
				<td colspan="3">乙型肝炎病毒核心抗体（抗-Hbc）检测结果</td>
				<td class="mark" colspan="3">{{reportData.ap045004500}}</td>
				<td colspan="2">梅毒血清学试验结果</td>
				<td class="mark" colspan="3">{{reportData.ap045002700}}</td>
			</tr>
			<tr>
				<td colspan="2">HIV抗体检测结果</td>
				<td class="mark">{{reportData.ap045002800}}</td>
				<td>检查日期</td>
				<td class="mark" colspan="2">{{reportData.ap060004803}}</td>
				<td colspan="2">B超检查结果</td>
				<td class="mark" colspan="3">{{reportData.ap043000200}}</td>
			</tr>
			<tr>
				<td colspan="2">其他辅助检查结果</td>
				<td class="mark" colspan="4">{{reportData.ap043000901}}</td>
				<td colspan="2">孕产妇健康评估异常结果描述</td>
				<td class="mark" colspan="3">{{reportData.de051012700}}</td>
			</tr>
			<tr>
				<td colspan="2">指导日期</td>
				<td class="mark" colspan="3">{{reportData.ap060010903}}</td>
				<td colspan="3">处理及指导意见</td>
				<td class="mark" colspan="3">{{reportData.de060001800}}</td>
			</tr>
			<tr>
				<td colspan="2">孕产妇健康指导类别名称</td>
				<td class="mark" colspan="3">{{reportData.ap060034200}}</td>
				<td colspan="3">孕产妇健康指导其他描述</td>
				<td class="mark" colspan="3">{{reportData.ap060034300}}</td>
			</tr>
			<tr>
				<td>转诊原因</td>
				<td class="mark" colspan="2">{{reportData.ap060017701}}</td>
				<td colspan="2">转诊机构科室名称</td>
				<td class="mark" colspan="2">{{reportData.ap081002502}}</td>
				<td>转诊医院</td>
				<td class="mark" colspan="3">{{reportData.ap081001308}}</td>
			</tr>
			<tr>
				<td>接诊机构</td>
				<td class="mark" colspan="2">{{reportData.ap081001309}}</td>
				<td colspan="2">接诊机构科室名称</td>
				<td class="mark" colspan="6">{{reportData.ap081002604}}</td>
			</tr>
			<tr>
				<td>随访日期</td>
				<td class="mark" colspan="2">{{reportData.de060010900}}</td>
				<td colspan="2">随访医师姓名</td>
				<td class="mark" colspan="2">{{reportData.ap020103921}}</td>
				<td colspan="2">就诊机构名称</td>
				<td class="mark" colspan="2">{{reportData.ap081001304}}</td>
			</tr>
			<tr>
				<td colspan="2">下次随访日期</td>
				<td class="mark" colspan="3">{{reportData.ap060010901}}</td>
				<td colspan="2">下次随访地点</td>
				<td class="mark" colspan="4">{{reportData.de020105700}}</td>
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