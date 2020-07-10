<template>
    <div class="Track-Service">
        <!-- 医疗服务统计 "$viewText.track.tr1"-->
        <TrackModel title="医疗服务统计" :times="times" :haveChange="true" @change="change" :showChart="showChart">
            <el-select v-model="value" placeholder="请选择" size="small" @change="selectChange">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <div id="Track-Service-Chart" v-loading="loading" v-show="showChart && chartData.length > 0"></div>
            <div class="table-box" v-loading="loading" v-show="!showChart">
                <el-table :data="tableData" stripe border style="width: 100%" size="mini" height="300">
                    <el-table-column label="就诊日期">
                        <template slot-scope="scope">
                            {{$formatDate(scope.row.diagnosisDate)}}
                        </template>
                    </el-table-column>
                    <el-table-column label="就诊类型">
                        <template slot-scope="scope">
                            {{scope.row.eventType == '1'?'门诊':'住院'}}
                        </template>
                    </el-table-column>
                    <el-table-column label="诊断科室">
                        <template slot-scope="scope">
                            {{scope.row.diagnosisDeptName}}
                        </template>
                    </el-table-column>
                    <el-table-column label="诊断名称">
                        <template slot-scope="scope">
                            {{scope.row.diagnosis}}
                        </template>
                    </el-table-column>
                    <el-table-column label="就诊机构">
                        <template slot-scope="scope">
                            {{scope.row.jzjgmc}}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="peitu-box" v-if="showChart && chartData.length == 0" v-loading="loading" >
                <img class="peitu" src="../../../public/imgv2/im/peitu.png">
            </div>
        </TrackModel>
    </div>
</template>
<script>
import TrackModel from './Track-Model.vue';
import {groupBy} from '../../assets/tagpage.js';
export default {
    props: {
        times: {
            type: [String, Number, Array, Object],
            default () {
                return ''
            }
        }
    },
    watch: {
        times: {
            handler() {
                this.getPatientCehrActiveResponse();
            },
            deep: true
        }
    },
    components: {
        TrackModel
    },
    data() {
        return {
            showChart:true,
            loading:false,
            value:'',
            options:[
                {label:'全部',value:''},
                {label:'门诊',value:'1'},
                {label:'住院',value:'3'},
            ],
            tableData:[],
            chartData:[]
        }
    },
    mounted() {
        // this.getPatientCehrActiveResponse();
        // window.addEventListener('resize', () => {
        //     this.init('Track-Service-Chart');
        // }, false)
    },
    methods: {
        change(){//切换显示
            this.showChart = !this.showChart;
            this.$nextTick(() => {
                this.init('Track-Service-Chart');
            })
        },
        selectChange(){
            this.getPatientCehrActiveResponse();
        },
        getPatientCehrActiveResponse(){
            let times = this.times;
            let startDate = '';
            let endDate = '';
            if(times && times.length > 0){
                startDate = times[0];
                endDate = times[1];
            }
            let param = {
                mpi:this.$getMpi(),
                startDate:startDate,
                endDate:endDate,
                eventType:this.value
            }
            this.loading = true;
            this.$store.dispatch('track/getPatientCehrActiveResponse',param).then(res => {
                this.loading = false;
                let data = res.data;
                this.tableData = data;
                // console.log(data)
                let group = groupBy(data,'diagnosis');
                let chartData = group.map(row => {
                    let ch = {
                        name:row.name,
                        num:row.data.length
                    }
                    return ch;
                })

                var compare = function (obj1, obj2) {
                    var val1 = obj1.num;
                    var val2 = obj2.num;
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                // console.log(chartData.sort(compare));
                this.chartData = chartData.sort(compare);
                this.$nextTick(() => {
                    this.init('Track-Service-Chart');
                })
            })
        },
        init(id) {
            let dom = document.getElementById(id);
            let chartData = this.chartData;
            if (dom) {
                let myChart = this.$echarts.init(dom);
                let echarts = this.$echarts;
                let yAxisData = []
                let xAxisData = [];
                var yMax = 0;
                for(var i=0;i<chartData.length;i++){
                    yAxisData.push(chartData[i].name);
                    xAxisData.push(chartData[i].num);
                    if(chartData[i].num > yMax){
                        yMax = chartData[i].num;
                    }
                }
                var dataShadow = [];
                for (let i = 0; i < xAxisData.length; i++) {
                    dataShadow.push(yMax);
                }

                let zoomEnd = 100;
                if(yAxisData.length > 8){
                    let per = 8 / yAxisData.length * 100;
                    zoomEnd = Math.floor(per);
                }

                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: (val) => {
                            return val.name
                        }
                    },
                    grid: {
                        top:'10',
                        left: '10',
                        right: '100',
                        bottom: '20',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        minInterval: 1,
                        splitLine:{
                            show: false
                        },
                        axisLabel:{
                            color:'#525A66',
                            fontFamily:'Microsoft YaHei',
                            fontSize:14,
                            fontWeight:400
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#E6E6E6'
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: yAxisData,
                        axisTick: {
                            show: false
                        },
                        minInterval: 1,
                        axisLabel:{
                            color:'#525A66',
                            fontFamily:'Microsoft YaHei',
                            fontSize:14,
                            fontWeight:400,
                            formatter: (name) => {
                                let length = name.length;
                                let str = '';
                                if (length > 5) {
                                    str = name.substring(0, 5) + '...';
                                } else {
                                    str = name;
                                }
                                return str;
                            }
                        },
                        tooltip: {
                            show: true
                        },
                        splitLine:{
                            show: true,
                            color:'#E6E6E6'
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#E6E6E6'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'slider',
                            yAxisIndex: 0,
                            width:15,
                            top: 10,
                            start:0,
                            end:zoomEnd,
                            right:40,
                            filterMode: 'empty',
                            orient:'vertical',
                            textStyle:{
                                color:'#fff'
                            }
                        },
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            barMaxWidth: 24,
                            itemStyle: {
                                normal: {color: 'rgba(0,0,0,0.05)'}
                            },
                            barGap:'-100%',
                            barCategoryGap:'20%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            data: xAxisData,
                            barMaxWidth: 24,
                            barCategoryGap:'60%',
                            label:{
                                show:true,
                                position:'right',
                                formatter: '{name|{c}次}',
                                rich: {
                                    name: {
                                        color:'#6688CC',
                                        fontWeight:400,
                                        fontSize:15
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius:[0,4,4,0],
                                    color: new echarts.graphic.LinearGradient(
                                        1, 0, 0, 0,
                                        [
                                            {offset: 0, color: 'rgba(92,138,230,1)'},
                                            {offset: 1, color: 'rgba(106,139,236,1)'}
                                        ]
                                    )
                                }
                            },
                        }
                    ]
                };
                myChart.clear();
                myChart.resize();
                myChart.setOption(option);
            }
        },
    }
}
</script>
<style lang="less">
    .Track-Service {
        .el-select{
            .el-input__inner{
                background: #F5F8FF;
            }
        }
    }
</style>
<style lang="less" scoped>
.Track-Service {
    flex:1;
    margin-left: 16px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    box-shadow:0px 2px 7px 0px rgba(208,211,214,1);
border-radius:2px;
    #Track-Service-Chart{
        width: 100%;
        height: 100%;
    }
    .el-select{
        z-index: 99;
        width: 100px;
        position: absolute;
        right: 23px;
        top: -40px;
    }
    .table-box{
        box-sizing: border-box;
        padding: 0px 23px;
    }
    .peitu-box{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .peitu{
            width: 184px;
            height: 171px;
            display: block;
            margin: 0 auto;
        }
    }
}
</style>