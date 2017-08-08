
$(function () {

    // tab切换

    $('.tab-header ul li').on('click',function () {
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        $('.record-tab-info').eq(index).addClass('info-active').siblings().removeClass('info-active');
    })

    // 返回顶部

    var timer=null;
    var backTop=document.getElementById("backTop");
    window.onscroll=function(){
        backTop.style.display=scroll().top>35?"block":"none";
    };
    backTop.onclick=function(){
        timer=setInterval(function(){
            var target=0;
            var leader=scroll().top;
            var step=(target-leader)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            leader=leader+step;
            window.scrollTo(0,leader);
            if(leader===target){
                clearInterval(timer);
            }
        },15);
    };

    function scroll(){
        return {
            top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
            left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
        };
    }

    // 数据展示

    var chart = new Highcharts.Chart('line1', {
        title: {
            text: '一周体重数据',
            style:{
                fontSize:'15px'
            },
            x: 0
        },
        subtitle: {
            text: '',
            x: -20
        },
        colors: ['#758fbf'],
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
            data: [90, 100, 130, 120, 100, 140, 120],
        }]
    });

})