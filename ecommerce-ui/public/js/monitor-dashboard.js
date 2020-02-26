
    $(document).ready(function () {


    //CHART THEME - TRANSPARENT

    

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('.sidebar-logo').toggleClass('hide');
        });
    });
    /*
    Highcharts.chart('statusSummary', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Aug 01-07, 2019'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        credits: {
            enabled: false
        }, 
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [{
                name: 'Active',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Idle',
                y: 11.84
            }, {
                name: 'Inactive',
                y: 10.85
            }, {
                name: 'On Break',
                y: 4.67
            }, {
                name: 'Toilet',
                y: 4.18
            }, {
                name: 'Meeting',
                y: 1.64
            }, {
                name: 'On The Phone',
                y: 1.6
            }, {
                name: 'Lunch/Dinner',
                y: 1.2
            }, {
                name: 'Aux',
                y: 2.61
            }]
        }]
    });

    Highcharts.chart('employeeLogin', {

        chart: {
            type: 'column'
        },
    
        title: {
            text: ''
        },
        subtitle: {
            text: 'AUG 01-07, 2019'
        },
        xAxis: {
            categories: ['Chris Lee']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: ''
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Login Hours',
            data: [5],
            stack: 'login'
        }, {
            name: 'Idle Hours',
            data: [3],
            stack: 'login'
        }, {
            name: 'Overtime Hours',
            data: [2],
            stack: 'logout'
        }, {
            name: 'Active Hours',
            data: [3],
            stack: 'logout'
        }]
    });
    */



    });
