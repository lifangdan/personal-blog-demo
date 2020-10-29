<template>
    <div>
        <div ref="chart" :style="{'height':winH}" style="width: 100%"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        components: {},
        data() {
            return {
                winH: (window.innerHeight - 150) + 'px',
                chart:null,
            }
        },
        created() {
            this.init()
        },
        mounted() {
            window.addEventListener('resize', () => {
                if (this.chart) {
                    this.chart.resize()
                }
            })
        },
        methods: {
            goTo() {
                this.$router.push({path: '/typeScript/page1'})
            },
            init() {
                let _this=this
                const plantCap = [
                    {
                        name: 'Vue',
                        value: 25,
                        path:'/typeScript/index',
                        id:1,
                    }, {
                        name: 'JavaScript',
                        value: 15,
                        path:'/typeScript/index',
                        id:2,
                    }, {
                        name: 'TypeScript',
                        value: 8,
                        path:'/typeScript/index',
                        id:3,
                    }, {
                        name: 'React',
                        value: 7,
                        path:'/typeScript/index',
                        id:4,
                    }, {
                        name: '其他',
                        value: 15,
                        path:'/typeScript/index',
                        id:5,
                    },{
                        name: '面试题',
                        value: 15,
                        path:'/typeScript/index',
                        id:6,
                    },{
                        name: 'Test',
                        value: 15,
                        path:'/typeScript/index',
                        id:7,
                    }
                ];
                const datalist = [
                    {
                        offset: [50, 53],
                        symbolSize: 120,
                        opacity: .95,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#29c0fb'//'#D45FFB'
                        }, {
                            offset: 1,
                            color: '#2dc5b9'//'#EFBFFB'
                        }]),
                    }, {
                        offset: [35, 70],
                        symbolSize: 95,
                        opacity: .95,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#35d17e'
                        }, {
                            offset: 1,
                            color: '#49ddb2'
                        }]),
                    }, {
                        offset: [23, 40],
                        symbolSize: 90,
                        opacity: .95,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#E58C51'//'#e5d273'
                        }, {
                            offset: 1,
                            color: '#E5B28E'//'#e4a37f'
                        }]),
                    }, {
                        offset: [44, 26],
                        symbolSize: 90,
                        opacity: .95,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#D45FFB'
                        }, {
                            offset: 1,
                            color: '#EFBFFB'
                        }]),
                    }, {
                        offset: [80, 58],
                        symbolSize: 65,
                        opacity: .95,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ff4141'
                        }, {
                            offset: 1,
                            color: '#ff8989'
                        }]),
                    }, {
                        offset: [70, 28],
                        symbolSize: 68,
                        opacity: .7,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#F4CC39'//'#11c46e'
                        }, {
                            offset: 1,
                            color: '#F0DA94'
                        }]),
                    }, {
                        offset: [64, 75],
                        symbolSize: 65,
                        opacity: .68,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#277aec'
                        }, {
                            offset: 1,
                            color: '#57c5ec'
                        }]),
                    }
                ];
                let datas = [];
                for (var i = 0; i < plantCap.length; i++) {
                    var item = plantCap[i];
                    var itemToStyle = datalist[i];
                    datas.push({
                        name: item.name + '\n' + item.value,
                        value: itemToStyle.offset,
                        symbolSize: item.value+90,
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 18,
                                    fontWeight: 800,
                                    lineHeight: 22,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: itemToStyle.color,
                                opacity: itemToStyle.opacity
                            }
                        },
                        count:item.value,
                        path:item.path
                    })
                }
                let option = {
                    backgroundColor: '#12468500',
                    grid: {
                        show: false,
                        top: 10,
                        bottom: 10
                    },
                    xAxis: [{
                        gridIndex: 0,
                        type: 'value',
                        show: false,
                        min: 0,
                        max: 100,
                        nameLocation: 'middle',
                        nameGap: 5
                    }],
                    yAxis: [{
                        gridIndex: 0,
                        min: 0,
                        show: false,
                        max: 100,
                        nameLocation: 'middle',
                        nameGap: 30
                    }],
                    series: [{
                        type: 'effectScatter',
                        // symbol: 'circle',
                        // symbolSize: 120,

                        hoverAnimation: true,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}',
                                color: '#fff',
                                textStyle: {
                                    fontSize: '20'
                                }
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#00acea'
                            }
                        },
                        data: datas
                    }]
                };
                this.$nextTick(() => {
                    this.chart = echarts.init(this.$refs.chart)
                    this.chart.setOption(option, true)
                    this.chart.on('click', function (params) {
                        console.log(params)
                        _this.$router.push({path: params.data.path})
                    });
                })
            }
        }
    }
</script>
