<template>
    <div class="Track-Dept">
        <!-- 就诊科室统计  $viewText.track.tr4-->
        <TrackModel title="就诊科室统计" :times="times">
            <el-select v-model="form.hos" placeholder="请选择" size="small" class="hos" @change="chengeSelect(1,$event)">
                <el-option v-for="(item,index) in hos" :key="index" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div id="Track-Dept-Chart" v-loading="loading" v-show="chartShow"></div>
            <div class="peitu-box" v-if="!chartShow" v-loading="loading">
                <img class="peitu" src="../../../public/imgv2/im/peitu.png">
            </div>
        </TrackModel>
    </div>
</template>
<script>
import TrackModel from './Track-Model.vue';
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
                this.getCehractiveDeptReportResponse();
            },
            deep: true
        }
    },
    components: {
        TrackModel
    },
    data() {
        return {
            chartShow: true,
            loading: false,
            form: {
                hos: ''
            },
            hos: [],
            chartData: {},
            colors: []
        }
    },
    created() {
        // this.colors = this.$getChartsColors();
        // this.getCehrActiveOrganList();
    },
    mounted() {
        // this.getCehractiveDeptReportResponse();
        // window.addEventListener('resize', () => {
        //     this.init('Track-Dept-Chart');
        // }, false)
    },
    methods: {
        chengeSelect() {
            this.getCehractiveDeptReportResponse();
        },
        getCehrActiveOrganList() { //机构列表
            let times = this.times;
            let startDate = '';
            let endDate = '';
            if (times && times.length > 0) {
                startDate = times[0];
                endDate = times[1];
            }
            let param = {
                mpi: this.$getMpi(),
                startDate: startDate,
                endDate: endDate
            }
            this.$store.dispatch('track/getCehrActiveOrganList', param).then(res => {
                // console.log(res)
                let orgs = res.data.map(row => {
                    let pa = {
                        label: row.jzjgmc,
                        value: row.orgCode
                    }
                    return pa;
                });
                this.hos = orgs;
            })
        },
        getCehractiveDeptReportResponse() { //就诊科室
            let times = this.times;
            let startDate = '';
            let endDate = '';
            if (times && times.length > 0) {
                startDate = times[0];
                endDate = times[1];
            }
            let param = {
                mpi: this.$getMpi(),
                startDate: startDate,
                endDate: endDate,
                orgCode: this.form.hos
            }
            this.loading = true;
            this.$store.dispatch('track/getCehractiveDeptReportResponse', param).then(res => {
                this.loading = false;
                let data = res.data;
                if (data && data.length > 0) {
                    this.chartData = data[0];
                    this.form.hos = this.chartData.orgCode;
                } else {
                    this.chartData = {};
                }
                let dataList = this.chartData.cehractiveDeptCountResponses;
                if (dataList && dataList.length > 0) {
                    this.chartShow = true;
                } else {
                    this.chartShow = false;
                }
                this.$nextTick(() => {
                    this.init('Track-Dept-Chart');
                })
            })
        },
        init(id) {
            let dom = document.getElementById(id);
            if (dom) {
                let myChart = this.$echarts.init(dom, 'macarons');
                let dataList = this.chartData.cehractiveDeptCountResponses;
                // console.log(dataList)
                let legendData = [];
                let data = [];
                let colors = this.colors; //颜色域
                let length = colors.length;
                if (dataList && dataList.length > 0) {
                    for (let i = 0; i < dataList.length; i++) {
                        legendData.push(dataList[i].zdksmc);
                        let pa = {
                            value: dataList[i].deptNum,
                            name: dataList[i].zdksmc,
                            itemStyle: {}
                        }
                        if (i < length) {
                            pa.itemStyle.color = colors[i];
                        }
                        data.push(pa);
                    }
                } else {
                    data = [{
                        name: '无就诊科室',
                        value: 0,
                        itemStyle: {
                            color: '#ccc'
                        }
                    }]
                }
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}:<br/>次数{c} ({d}%)"
                    },
                    legend: {
                        // type: 'scroll',
                        // // orient: 'vertical',
                        // left: 20,
                        // top: 20,
                        // bottom: 20,
                        // padding: 10,
                        // itemWidth: 12,
                        // itemHeight: 8,
                        type: 'scroll',
                        bottom: 0,
                        padding: 10,
                        itemWidth: 12,
                        itemHeight: 8,
                        left: 'center',
                        x: 'left',
                        formatter: function(name) {
                            let length = name.length;
                            let str = '';
                            if (length > 5) {
                                str = name.substring(0, 5) + '...';
                            } else {
                                str = name;
                            }
                            return str;
                        },
                        tooltip: {
                            show: true
                        },
                        data: legendData
                    },
                    series: [{
                        type: 'pie',
                        radius: ['30%', '50%'],
                        center: ['50%', '50%'],
                        // startAngle:120,
                        // avoidLabelOverlap: true,
                        // hoverOffset:0,
                        // selectedOffset:0,
                        // labelLine:{
                        //     normal:{
                        //         length:10,
                        //         length2:10
                        //     }
                        // },
                        // label:{
                        //     normal:{
                        //         show:false,
                        //         formatter:'{name|{b}}\n{per|{d}%}\n',
                        //         rich:{
                        //             name:{
                        //                 fontSize:12,
                        //                 fontFamily:'Microsoft YaHei',
                        //                 fontWeight:400
                        //             },
                        //             per:{
                        //                 color:'#4D4D4D',
                        //                 fontSize:12,
                        //                 fontFamily:'Microsoft YaHei',
                        //                 fontWeight:'bold'
                        //             }
                        //         }
                        //     }
                        // },
                        label: {
                            normal: {
                                formatter: '{name|{b}}\n{per|{d}%}',
                                rich: {
                                    name: {
                                        fontSize: 12,
                                        fontFamily: 'Microsoft YaHei',
                                        fontWeight: 400
                                    },
                                    per: {
                                        color: '#4D4D4D',
                                        fontSize: 12,
                                        fontFamily: 'Microsoft YaHei',
                                        fontWeight: 'bold'
                                    }
                                }
                            }
                        },
                        avoidLabelOverlap: true,
                        hoverOffset: 0,
                        selectedOffset: 0,
                        labelLine: {
                            normal: {
                                show: true,
                                length: 0,
                                length2: 10
                            }
                        },
                        data: data
                    }]
                };
                myChart.clear();
                myChart.resize();
                myChart.setOption(option);
            }
        }
    }
}
</script>
<style lang="less">
.Track-Dept {
    .el-select {
        .el-input__inner {
            background: #F5F8FF;
        }
    }

    .hos {
        top: -40px;
    }
}
</style>
<style lang="less" scoped>
.Track-Dept {
    flex:1;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 16px;
    box-shadow:0px 2px 7px 0px rgba(208,211,214,1);
border-radius:2px;
    #Track-Dept-Chart {
        width: 100%;
        height: 100%;
    }

    .el-select {
        z-index: 99;
        width: 184px;
        position: absolute;
        right: 23px;
    }

    .peitu-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .peitu {
            width: 184px;
            height: 171px;
            display: block;
            margin: 0 auto;
        }
    }
}
</style>