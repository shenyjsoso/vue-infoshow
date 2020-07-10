<template>
    <div class="Health-File-Cover">
        <!-- 居民健康档案封面 -->
        <div class="wrapper">
            <p class="code" style="font-family:FZSSJW;">编号{{reportData.residentsHealthFileNo}}</p>
            <p class="title">
                居民健康档案
            </p>
            <div class="xt">
                <label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.patientName}}</span>
            </div>
            <div class="xt">
                <label>现&nbsp;&nbsp;住&nbsp;&nbsp;址&nbsp;:&nbsp;</label>
                <span class="text">
                    {{reportData.addressTownship}}&nbsp;
                </span>
            </div>
            <div class="xt">
                <label>户籍地址&nbsp;:&nbsp;</label>
                <span class="text">
                    {{reportData.hjdz}}&nbsp;
                </span>
            </div>
            <div class="xt">
                <label>联系电话&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.telephone}}</span>
            </div>
            <div class="xt">
                <label>乡镇（街道）名称&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.addressTownship}}</span>
            </div>
            <div class="xt">
                <label>村（居）委会名称&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.sqmc}}</span>
            </div>
            <div class="xt">
                <label>建档单位&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.medicalInstitutionName}}</span>
            </div>
            <div class="xt">
                <label>建&nbsp;&nbsp;档&nbsp;&nbsp;人&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.createname}}</span>
            </div>
            <div class="xt">
                <label>责任医生&nbsp;:&nbsp;</label>
                <span class="text">&nbsp;{{reportData.doctorName}}</span>
            </div>
            <div class="xt">
                <label>建档日期&nbsp;:&nbsp;</label>
                <span class="date">
                    <span class="date-text" style="width: 120px;">&nbsp;{{$getDateFormatByType(reportData.writeTime,'year')}}</span>年
                    <span class="date-text" style="width: 80px;">&nbsp;{{$getDateFormatByType(reportData.writeTime,'month')}}</span>月
                    <span class="date-text" style="width: 80px;">&nbsp;{{$getDateFormatByType(reportData.writeTime,'day')}}</span>日
                </span>
            </div>
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

        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    .Health-File-Cover{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 60px 20px ;
        font-size:24px;
        overflow-y: auto;
        background-color: #fff;
        font-family:FZSSJW;
        .wrapper{
            width: 840px;
            border: 2px solid #000000;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 17px 17px 90px 17px;
            font-family:FZSSJW;
            .code{
                width: 100%;
                text-align: right;
                font-size:16px;
                font-family:FZSSJW;
                font-weight:bold;
                color:rgba(77,77,77,1);
            }
            .title{
                width: 100%;
                text-align: center;
                font-size:30px;
                font-family:FZSSJW;
                font-weight:bold;
                color:rgba(0,0,0,1);
                padding: 90px 0px;
            }
            .xt{
                width: 450px;
                margin: 0 auto;
                line-height: 54px;
                display: flex;
                margin-top: 54px;
                font-family:FZSSJW;
                label{
                    font-size: 20px;
                    width: auto;
                    line-height: 24px;
                    vertical-align: top;
                    font-family:FZSSJW;
                }
                .text{
                    flex: 1;
                    font-size: 16px;
                    line-height: 24px;
                    vertical-align: top;
                    border-bottom: 1px solid #000;
                    font-family:FZSSJW;
                }
                .date{
                    font-size: 20px;
                    line-height: 24px;
                    font-family:FZSSJW;
                    .date-text{
                        display: inline-block;
                        font-family:FZSSJW;
                        font-size: 16px;
                        line-height: 24px;
                        vertical-align: top;
                        border-bottom: 1px solid #000;
                    }
                }

            }
        }
    }
</style>