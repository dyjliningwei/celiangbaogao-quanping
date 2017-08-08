/**
 * Created by Li on 2017/2/4.
 */

$(document).ready(function () {


    $(function () {
        $('#fullpage').fullpage({
            scrollingSpeed: 500,
            afterLoad: function (link, index) {
                $(".section").removeClass("current");
                setTimeout(function () {
                    $(".section").eq(index - 1).addClass("current");
                    $(".section").eq(index - 1).addClass("current");
                }, 100);
                console.log(index);
                if(index==1){
                    var colors=['#758fbf'];
                    charts(colors);
                }else {
                    var colors=['#fff'];
                    charts(colors);
                }
                $('.scope-info').css('display','none');
                $('.icon-down-trangle').removeClass('xia-active');
                $('.summarize-table-info').css('display','none');
            },

        });
    });

    // 参考范围

    var scope=$('.scope');
    var scopeInfo=$('.scope-info');
    $.each(scope,function () {
        $(this).on('click',function () {
            $(this).find(scopeInfo).slideToggle(300);
            $(this).find('.icon-down-trangle').toggleClass('xia-active');
        })
    })

    // 建议部分切换

    var table=$('.summarize-table');

    var tableHeader=$('.summarize-table-header');

    var tableInfo=$('.summarize-table-info');

    $.each(table,function () {
        var _this=$(this);
        _this.find(tableHeader).on('click',function () {
            _this.find(tableInfo).slideToggle('fast');
            _this.find('.icon-down-trangle').toggleClass('xia-active');
        })
    })

    // 数据展示／

    function charts(colors) {
        var chart = new Highcharts.Chart('line', {
            title: {
                text: '一周体重数据',
                style:{
                    fontSize:'15px'
                },
                x: 0
            },
            chart: {
                type: 'areaspline',
            },
            subtitle: {
                text: '',
                x: -20
            },
            colors: colors,
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                tickWidth: 0
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                gridLineWidth: 0
            },
            tooltip: {
                valueSuffix: 'kg'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: '#808080',
                        }
                    },
                },
                series: {
                    marker: {
                        enabled: false
                    }
                },
            },
            series: [{
                name: '体重',
                data: [0, 100, 130, 120, 100, 140, 120],
            }]
        });
    }

});

