<template>
    <div class="report">
        <!-- 出生医学证明 -->
        <div class="wrapper">
            <div class="title">出生医学证明</div>
            <div class="little-title">MEDICAL CERTIFICATE OF BIRTH</div>
            <div class="pitem">
                <div class="label_box" style="width: 100px;">
                    新生儿姓名<span class="label_name">Neonatal Name</span>
                </div>
                <div class="line_inner" style="width: 160px;">
                    &nbsp;{{reportData.neonatalName}}
                </div>
                <div class="label_box" style="width: 40px;">
                    性别<span class="label_name">Gender</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{reportData.birthSexName}}
                </div>
                <div class="label_box" style="width: 80px;">
                    出生日期<span class="label_name">Time Of Birth</span>
                </div>
                <div class="line_inner" style="width: 120px;">
                    &nbsp;{{getDateByType(reportData.neonatalbirthDate,'year')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    年<span class="label_name">Year</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.neonatalbirthDate,'month')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    月<span class="label_name">Month</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.neonatalbirthDate,'day')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    日<span class="label_name">Day</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.neonatalbirthDate,'hour')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    时<span class="label_name">Hour</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.neonatalbirthDate,'minute')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    分<span class="label_name">Minute</span>
                </div>
            </div>
            <div class="pitem">
                <div class="label_box" style="width: 76px;">
                    出生孕周<span class="label_name">Gestational Age</span>
                </div>
                <div class="line_inner" style="width: 160px;">
                    &nbsp;{{reportData.birthPregnancyWeeks}}
                </div>
                <div class="label_box" style="width: 30px;">
                    周<span class="label_name">Week</span>
                </div>
                <span class="null_box" style="width: 80px;"></span>
                <div class="label_box" style="width: 76px;">
                    出生体重<span class="label_name">Birth Weight</span>
                </div>
                <div class="line_inner" style="width: 140px;">
                    &nbsp;{{reportData.birthWeight}}
                </div>
                <div class="label_box" style="width: 20px;">
                    克<span class="label_name" style="left: 3px;">g</span>
                </div>
                <span class="null_box" style="width: 80px;"></span>
                <div class="label_box" style="width: 76px;">
                    出生身长<span class="label_name">Birth Length</span>
                </div>
                <div class="line_inner" style="width: 140px;">
                    &nbsp;{{reportData.birthHeight}}
                </div>
                <div class="label_box" style="width: 40px;">
                    厘米<span class="label_name" style="left: 8px;">cm</span>
                </div>
            </div>
            <div class="pitem" style="margin-bottom: 60px;">
                <div class="label_box" style="width: 76px;">
                    出生地点<span class="label_name">Birth Place</span>
                </div>
                <div class="line_inner" style="width: 90px;">
                    &nbsp;{{reportData.birthProvince}}
                </div>
                <div class="label_box" style="width: 60px;">
                    省<span class="label_name">Province</span>
                </div>
                <div class="line_inner" style="width: 90px;">
                    &nbsp;{{reportData.birthCity}}
                </div>
                <div class="label_box" style="width: 40px;">
                    市<span class="label_name">City</span>
                </div>
                <div class="line_inner" style="width: 90px;">
                    &nbsp;{{reportData.birthCounty}}
                </div>
                <div class="label_box" style="width: 60px;">
                    县(区)<span class="label_name">Country</span>
                </div>
                <div class="null_box" style="width: 90px;"></div>
                <span class="null_box" style="width: 40px;"></span>
                <div class="label_box" style="width: 140px;">
                    医疗机构名称<span class="label_name">Medical Institutions</span>
                </div>
                <div class="line_inner" style="width: 200px;">
                    &nbsp;{{reportData.medicalInstitutionName}}
                </div>
            </div>
            <div class="pitem">
                <div class="label_box" style="width: 80px;">
                    母亲姓名<span class="label_name">Mother′s Name</span>
                </div>
                <div class="line_inner" style="width: 160px;">
                    &nbsp;{{reportData.motherName}}
                </div>
                <div class="label_box" style="width: 60px;">
                    年龄<span class="label_name" style="left: 15px;">Age</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{getAgeByBirthday(reportData.motherbirthday)}}
                </div>
                <div class="label_box" style="width: 80px;">
                    国籍<span class="label_name">Nationality</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{reportData.motherNationalityName}}
                </div>
                <div class="label_box" style="width: 80px;">
                    民族<span class="label_name">Ethnic Group</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{reportData.motherNationName}}
                </div>
                <div class="label_box" style="width: 70px;">
                    住址<span class="label_name" style="left: 10px;">Address</span>
                </div>
                <div class="line_inner" style="width: 208px;">
                    &nbsp;{{getStrNotNull(reportData.motheraddressProvince)+getStrNotNull(reportData.motheraddressCity)+getStrNotNull(reportData.motheraddressCounty)+getStrNotNull(reportData.motheraddressTownship)+getStrNotNull(reportData.motheraddressVillage)+getStrNotNull(reportData.motheraddressHouseno)}}
                </div>
            </div>
            <div class="pitem" style="margin-bottom: 60px;">
                <div class="label_box" style="width: 160px;">
                    有效身份证件类别<span class="label_name">Valid Identification</span>
                </div>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 100px;">
                    居民身份证<span class="label_name">Identity Card</span>
                </div>
                <span class="jy">
                    <span class="checkBox"></span>
                    <i class="iconfont xz" v-if="reportData.motherIdentityCategoryCode == '01'">&#xe631;</i>
                </span>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 60px;">
                    护照<span class="label_name">Passport</span>
                </div>
                <span class="jy">
                    <span class="checkBox"></span>
                    <i class="iconfont xz" v-if="reportData.motherIdentityCategoryCode == '99'">&#xe631;</i>
                </span>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 50px;">
                    其他<span class="label_name">Others</span>
                </div>
                <div class="line_inner" style="width: 120px;">
                    &nbsp;{{reportData.motherIdentityCategoryCode == '01' ? '' :
                    reportData.motherIdentityCategoryCode == '99' ? '' : reportData.mqzjlxmc}}
                </div>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 160px;">
                    有效身份证件号码<span class="label_name">Valid Identification No</span>
                </div>
                <div class="line_inner" style="width: 181px;">
                    &nbsp;{{reportData.motherIdentityNo}}
                </div>
            </div>
            <div class="pitem">
                <div class="label_box" style="width: 80px;">
                    父亲姓名<span class="label_name">Father′s Name</span>
                </div>
                <div class="line_inner" style="width: 160px;">
                    &nbsp;{{reportData.fatherName}}
                </div>
                <div class="label_box" style="width: 60px;">
                    年龄<span class="label_name" style="left: 15px;">Age</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{getAgeByBirthday(reportData.fatherbirthday)}}
                </div>
                <div class="label_box" style="width: 80px;">
                    国籍<span class="label_name">Nationality</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{reportData.fatherNationalityName}}
                </div>
                <div class="label_box" style="width: 80px;">
                    民族<span class="label_name">Ethnic Group</span>
                </div>
                <div class="line_inner" style="width: 80px;">
                    &nbsp;{{reportData.fatherNationName}}
                </div>
                <div class="label_box" style="width: 70px;">
                    住址<span class="label_name" style="left: 10px;">Address</span>
                </div>
                <div class="line_inner" style="width: 208px;">
                    &nbsp;{{getStrNotNull(reportData.fatheraddressProvince)+getStrNotNull(reportData.fatheraddressCity)+getStrNotNull(reportData.fatheraddressCounty)+getStrNotNull(reportData.fatheraddressTownship)+getStrNotNull(reportData.fatheraddressVillage)+getStrNotNull(reportData.fatheraddressHouseno)}}
                </div>
            </div>
            <div class="pitem" style="margin-bottom: 54px;">
                <div class="label_box" style="width: 160px;">
                    有效身份证件类别<span class="label_name">Valid Identification</span>
                </div>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 100px;">
                    居民身份证<span class="label_name">Identity Card</span>
                </div>
                <span class="jy">
                    <span class="checkBox"></span>
                    <i class="iconfont xz" v-if="reportData.fatherIdentityCategoryCode == '01'">&#xe631;</i>
                </span>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 60px;">
                    护照<span class="label_name">Passport</span>
                </div>
                <span class="jy">
                    <span class="checkBox"></span>
                    <i class="iconfont xz" v-if="reportData.fatherIdentityCategoryCode == '99'">&#xe631;</i>
                </span>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 50px;">
                    其他<span class="label_name">Others</span>
                </div>
                <div class="line_inner" style="width: 120px;">
                    &nbsp;{{reportData.fatherIdentityCategoryCode == '01' ? '' :
                    reportData.fatherIdentityCategoryCode == '99' ? '' : reportData.fqzjlxmc}}
                </div>
                <span class="null_box" style="width: 30px;"></span>
                <div class="label_box" style="width: 160px;">
                    有效身份证件号码<span class="label_name">Valid Identification No</span>
                </div>
                <div class="line_inner" style="width: 181px;">
                    &nbsp;{{reportData.fatherIdentityNo}}
                </div>
            </div>
            <div class="pitem">
                <div class="label_box" style="width: 180px;">
                    签发机构(盖专用章)<span class="label_name">Issued Authority(Stamp)</span>
                </div>
                <div class="line_inner" style="width: 230px;">
                    &nbsp;{{reportData.IssuingOrganizationName}}
                </div>
            </div>
            <div class="pitem">
                <div class="label_box" style="width: 84px;">
                    签发日期<span class="label_name">Date Issued</span>
                </div>
                <div class="line_inner" style="width: 120px;">
                    &nbsp;{{getDateByType(reportData.issueDate,'year')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    年<span class="label_name">Year</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.issueDate,'month')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    月<span class="label_name">Month</span>
                </div>
                <div class="line_inner" style="width: 60px;">
                    &nbsp;{{getDateByType(reportData.issueDate,'day')}}
                </div>
                <div class="label_box" style="width: 30px;">
                    日<span class="label_name">Day</span>
                </div>
                <span class="null_box" style="width: 310px;"></span>
                <div class="label_box" style="width: 40px;">
                    编号<span class="label_name" style="left: 5px;">No.</span>
                </div>
                <div class="code" style="width: 205px;margin-left: 15px;">
                    {{reportData.birthCertificateNumber}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getDateFormatByType,getAgeBybirth} from '../../assets/utils.js';
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
            getStrNotNull(str){
                if(str){
                    return str;
                }else{
                    return ''
                }
            },
            getAgeByBirthday(date){
                return getAgeBybirth(date);
            },
            getDateByType(date,type){
                return getDateFormatByType(date,type);
            }
        }
    }
</script>
<style lang="less" scoped>
    .report{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        .wrapper{
            box-sizing: border-box;
            width: 1368px;
            margin: 0 auto;
            padding: 135px 184px;
            background-image: url(../../../public/img/birthMI.png);
            background-repeat: no-repeat;
            background-size: 1368px auto;
            background-position: center 0;
            .title{
                width: 420px;
                text-align: center;
                font-family: monospace;
                font-size: 54px;
                font-weight: bold;
                letter-spacing: 12px;
                margin: 0 auto;
                border-bottom: 2px solid #000;
            }
            .little-title{
                width: 100%;
                text-align: center;
                font-size: 23px;
                margin: 0 auto;
                line-height: 30px;
                padding-bottom: 40px;
            }
            .pitem{
                width: 100%;
                margin-bottom: 40px;
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
                .null_box{
                    display: inline-block;
                }
                .label_box{
                    display: inline-block;
                    font-family: monospace;
                    font-weight: bold;
                    font-size: 16px;
                    letter-spacing: 2px;
                    position: relative;
                    text-align: center;
                    .label_name{
                        position: absolute;
                        display: inline-block;
                        left: 0px;
                        top: 20px;
                        font-family: monospace;
                        font-weight: bold;
                        letter-spacing: 0px;
                        font-size: 14px;
                        white-space:nowrap;
                    }
                }
                .line_inner{
                    display: inline-block;
                    font-size: 18px;
                    border-bottom: 1px dashed #000;
                    vertical-align: top;
                    font-size: 14px;
                    line-height: 18px;
                    font-weight: bold;
                    font-family: monospace;
                    color:rgb(25,90,255);
                    height: 20px;
                    text-align: center;
                }
                .checkBox{
                    width: 16px;
                    height: 16px;
                    border: 1px solid #000;
                    display: inline-block;
                    vertical-align: middle;
                    color:rgb(25,90,255);
                    text-align: center;
                }
                .code{
                    display: inline-block;
                    font-size: 18px;
                    border-bottom: 1px dashed #000;
                    vertical-align: top;
                    font-size: 14px;
                    line-height: 18px;
                    font-weight: bold;
                    font-family: monospace;
                    color:rgb(25,90,255);
                    height: 20px;
                    text-align: center;
                }
            }
        }
    }
</style>