<template>
    <div class="reportPage">
        <div class="paperBox">
            <div class="title">体检结论汇总</div>
            <div class="subTitle">EXAMINATION CONCLUSION</div>
            <div class="tableBox" v-if="conShow">
                <div class="conclBox" v-for="(item,index) in reportList" :key="index">
                    <div class="conclTitle" @click="jump(item)">
                        {{$formatDate(item.tjrq)}}<span class="org">{{item.organName}}</span>
                        <img class="conclIcon" :class="{'conclOpen':item.isOpen}"
                            src="../../../public/imgv2/jiantou.png" @click.stop="openRow(item,index)" />
                    </div>
                    <div class="conclContent" :class="{'conclMinContent':!item.isOpen}" @click="jump(item)">
                        <!-- <ol>
                            <li v-for="(row,val) in item.cons" :key="val">
                                {{row}}
                            </li>
                        </ol> -->
						异常描述：<br/>&nbsp;&nbsp;&nbsp;&nbsp;{{item.checkupexcep}}<br/>
                        结果总述：<br/>&nbsp;&nbsp;&nbsp;&nbsp;{{item.physicaldiagnosis}}
                    </div>
                </div>
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
                conShow:true,
                reportList:[],
                list:[
                    {
                        date:'2019-09-26',
                        orgName:'苏州科技城医院',
                        isOpen:true,
                        cons:[
                            '超重。体重指数BMI值偏高(24.3)。',
                            '血压值偏高。本次体检血压：148/92mmHg。建议定期复查血压。',
                            '血脂异常。甘油三酯值偏高（2.68mmol/L）；高密度脂蛋白胆固醇值偏低（.86mmol/L）；血脂七项提示：血清载脂蛋白AI测定值偏低（0.87g/L）。建议心内科随诊。'
                        ]
                    },
                    {
                        date:'2019-09-26',
                        orgName:'苏州科技城医院',
                        isOpen:false,
                        cons:[
                            '超重。体重指数BMI值偏高(24.3)。',
                            '血压值偏高。本次体检血压：148/92mmHg。建议定期复查血压。',
                            '血脂异常。甘油三酯值偏高（2.68mmol/L）；高密度脂蛋白胆固醇值偏低（.86mmol/L）；血脂七项提示：血清载脂蛋白AI测定值偏低（0.87g/L）。建议心内科随诊。'
                        ]
                    },
                    {
                        date:'2019-09-26',
                        orgName:'苏州科技城医院',
                        isOpen:false,
                        cons:[
                            '超重。体重指数BMI值偏高(24.3)。',
                            '血压值偏高。本次体检血压：148/92mmHg。建议定期复查血压。',
                            '血脂异常。甘油三酯值偏高（2.68mmol/L）；高密度脂蛋白胆固醇值偏低（.86mmol/L）；血脂七项提示：血清载脂蛋白AI测定值偏低（0.87g/L）。建议心内科随诊。'
                        ]
                    }
                ]
            }
        },
        created(){
            let list = this.reportData.conclusionPhysicalResponseList || [];
            this.reportList = list.map((row,index) => {
                /* if(index == 0){
                    row.isOpen = true;
                }else{
                    row.isOpen = false;
                } */
				row.isOpen = true;
                return row
            })
            console.log(this.reportList)
            // console.log(this.reportData.conclusionPhysicalResponseList)
        },
        methods:{
            jump(node){
                var mpi = node.mpi;
                var param = {
                    eventType:node.eventType,
                    eventNo:node.checkupnumber,
                    recordNo:node.recordNo,
                    orgCode:node.organCode,
                    // orgName:node.organName,
                    mpi:mpi,
                    docCode:node.docProjectCode,
                    docDate:node.retrieveDate,
                    docTypeCode:'CRJKTJ'
                }
                var encode = this.$encode(JSON.stringify(param));
                this.$router.push({
                    path:`/Patient/MedicalService/CRJKTJ/${mpi}`,
                    query:{
                        node:encode
                    }
                })
            },
            conShowChange(){
                this.conShow = false;
                this.$nextTick(() => {
                    this.conShow = true;
                })
            },
            openRow(item,index){
                this.reportList[index].isOpen = !this.reportList[index].isOpen;
                this.conShowChange();
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report.less';
    .report{
        table{
            width: 860px !important;
        }

    }
    .reportPage{
        width: 1140px !important;
        margin: 0 auto;
        .paperBox{
            .tableBox{
                .conclBox{
                    .conclTitle{
                        height:46px;
                        background:rgba(216,220,230,1);
                        line-height: 46px;
                        box-sizing: border-box;
                        font-size:22px;
                        font-family: "FZSSJW";
                        font-weight:bold;
                        color:rgba(26,26,26,1);
                        padding: 0px 28px;
                        position: relative;
                        cursor: pointer;
                        margin-top: 8px;
                        .org{
                            padding-left: 22px;
                            font-size:22px;
                            font-family: "FZSSJW";
                            font-weight:bold;
                            color:rgba(26,26,26,1);
                        }
                        .conclIcon{
                            position: absolute;
                            right: 28px;
                            top: 17px;
                            color: #666666;
                            font-weight: 400;
                            width:8px;
                            height:14px;
                            transition: all .4s;
                            cursor: pointer;
                        }
                        .conclOpen{
                            transform: rotateZ(90deg);
                        }
                    }
                    .conclContent{
                        box-sizing: border-box;
                        background:rgba(245,245,245,1);
                        font-size:20px;
                        font-family:"FZSSJW";
                        font-weight:400;
                        color:rgba(0,0,0,1);
                        line-height:38px;
                        padding: 18px 28px 18px 42px;
                        margin-top: 8px;
                        transition: all .4s;
                    }
                    .conclMinContent{
                        height: 0;
                        padding: 0px 28px 0px 42px;
                        opacity: 0;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>