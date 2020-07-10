<template>
	<!-- 转诊（院）信息 -->
	<div class="report">
		<!-- 双向转诊（转出）单 -->
		<div class="divBox">
			<h3>双向转诊单</h3><hr />
			<h3>双向转诊（转出）单</h3>
			<p>
				<span class="borderB">{{reportData.sxzzdzrdw}}&nbsp;</span>（机构名称）：
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现有<span class="borderB">{{reportData.xm}}&nbsp;</span>
				性别<span class="borderB">{{reportData.xb}}&nbsp;</span>
				年龄<span class="borderB">{{reportData.nl}}&nbsp;</span>因病情需要，需转入贵单位，请予以接诊。
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				初步印象：<span class="mark">{{reportData.sxzzzcdcbyx}}</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				主要现病史（转出原因）：<span class="mark">{{reportData.sxzzzcdzcyy}}</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				主要既往史：<span class="mark">{{reportData.sxzzzcdjws}}</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				治疗经过：<span class="mark">{{reportData.sxzzzcdzljg}}</span>
			</p>
			<p style="text-align: right;">
				转诊医生（签字）：<span class="borderB">{{reportData.sxzzzcdqz}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				联系电话：<span class="borderB">{{reportData.sxzzzcdlxdh}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{reportData.jgmc}}&nbsp;</span>（机构名称）
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{$getDateFormatByType(reportData.sxzzzcdqzrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.sxzzzcdqzrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.sxzzzcdqzrq,'day')}}&nbsp;</span>日
			</p>
		</div>
		<!--双向转诊单存根  -->
		<div class="divBox">
			<h3>存根</h3>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				患者姓名<span class="borderB">{{reportData.xm}}&nbsp;</span>
				性别<span class="borderB">{{reportData.xb}}&nbsp;</span>
				年龄<span class="borderB">{{reportData.nl}}&nbsp;</span>
				档案编号<span class="borderB">{{reportData.jkdabh}}&nbsp;</span><br />
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				家庭住址<span class="borderB">{{reportData.sxzzdjtzz}}&nbsp;</span>
				联系电话<span class="borderB">{{reportData.dhhm}}&nbsp;</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				于<span class="borderB">{{$getDateFormatByType(reportData.sxzzdzrrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.sxzzdzrrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.sxzzdzrrq,'day')}}&nbsp;</span>日因病情需要，转入
				<span class="borderB">{{reportData.sxzzdzrdw}}&nbsp;</span>单位
				<span class="borderB">{{reportData.ksmc}}&nbsp;</span>科室
				<span class="borderB">{{reportData.sxzzdjzys}}&nbsp;</span>接诊医生。
			</p>
			<p style="text-align: right;">
				转诊医生（签字）：<span class="borderB">{{reportData.sxzzzcdqz}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{$getDateFormatByType(reportData.cgzzqzrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.cgzzqzrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.cgzzqzrq,'day')}}&nbsp;</span>日
			</p>
		</div>
		<!-- 双向转诊（回转）单-->
		<div class="divBox">
			<h3>双向转诊（回转）单</h3>
			<p>
				<span class="borderB">{{reportData.jgmc}}&nbsp;</span>（机构名称）：
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				现有患者<span class="borderB">{{reportData.xm}}&nbsp;</span>因病情需要，现转回贵单位，请予以接诊。
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				诊断结果<span class="borderB">{{reportData.szzzhzdzdjg}}&nbsp;</span>
				住院病案号<span class="borderB">{{reportData.szzzhzdzybah}}&nbsp;</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				主要检查结果：<span class="borderB">{{reportData.szzzhzdjcjg}}&nbsp;</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				治疗经过、下一步治疗方案及康复建议：<span class="borderB">{{reportData.szzzhzdjy}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				转诊医生（签字）：<span class="borderB">{{reportData.szzzhzdqz}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				联系电话：<span class="borderB">{{reportData.szzzhzdlxdh}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{reportData.sxzzdzrdw}}&nbsp;</span>（机构名称）
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{$getDateFormatByType(reportData.szzzhzdqzrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.szzzhzdqzrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.szzzhzdqzrq,'day')}}&nbsp;</span>日
			</p>
		</div>
		<!-- 存根-->
		<div class="divBox">
			<h3>存根</h3>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				患者姓名<span class="borderB">{{reportData.xm}}&nbsp;</span>
				性别<span class="borderB">{{reportData.xb}}&nbsp;</span>
				年龄<span class="borderB">{{reportData.nl}}&nbsp;</span>
				病案号<span class="borderB">{{reportData.szzzhzdzybah}}&nbsp;</span><br />
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				家庭住址<span class="borderB">{{reportData.sxzzdjtzz}}&nbsp;</span>
				联系电话<span class="borderB">{{reportData.dhhm}}&nbsp;</span>
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				于<span class="borderB">{{$getDateFormatByType(reportData.cgzhrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.cgzhrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.cgzhrq,'day')}}&nbsp;</span>日因病情需要，转回
				<span class="borderB">{{reportData.jgmc}}&nbsp;</span>单位
				<span class="borderB">{{reportData.cgzzjzys}}&nbsp;</span>接诊医生。
			</p>
			<p style="text-align: right;">
				转诊医生（签字）：<span class="borderB">{{reportData.cgqz}}&nbsp;</span>
			</p>
			<p style="text-align: right;">
				<span class="borderB">{{$getDateFormatByType(reportData.cgqzrq,'year')}}&nbsp;</span>年
				<span class="borderB">{{$getDateFormatByType(reportData.cgqzrq,'month')}}&nbsp;</span>月
				<span class="borderB">{{$getDateFormatByType(reportData.cgqzrq,'day')}}&nbsp;</span>日
			</p>
		</div>
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
    	font-family: FZSSJW;
        .divBox{
            width: 700px;
			margin:auto;
			border-bottom:1px dotted black;
			padding-bottom:20px;
			margin-bottom:20px;
			font-family: FZSSJW;
			h3{
				text-align: center;
				line-height: 40px;
				font-family: FZSSJW;
			}
			p{
				line-height: 35px;
				font-family: FZSSJW;
			}
			.borderB{
				border-bottom: 1px solid black;
				display: inline-block;
				min-width: 90px;
				line-height: 20px;
				text-align:center;
				color:#195aff;
				font-family: FZSSJW;
			}
			.mark{
				color:#195aff;
				font-family: FZSSJW;
			}
        }
    }
</style>
