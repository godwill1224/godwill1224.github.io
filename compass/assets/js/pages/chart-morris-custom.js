
$(document).ready(function() {
    setTimeout(function() {
    // [ bar-simple ] chart start
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
                y: 'S6',
                a: 25000000,
                b: 3000000
                
            },
            {
                y: 'S5',
                a: 15000000,
                b: 7000000
                
            },
            {
                y: 'S4',
                a: 25000000,
                b: 6000000
                
            },
            {
                y: 'S3',
                a: 28000000,
                b: 4000000
                
            },
            {
                y: 'S2',
                a: 32000000,
                b: 7000000
                
            },
            {
                y: 'S1',
                a: 60000000,
                b: 8000000
                
            }
        ],
        xkey: 'y',
        barSizeRatio: 0.50,
        barGap: 3,
        resize: true,
        responsive:true,
        ykeys: ['a', 'b'],
        labels: ['Fees Collected', 'Fees Balance'],
        barColors: ["green", "red"]
    });
    // [ bar-simple ] chart end
    
    // [ Donut-chart ] Start
    var graph = Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
                value: 220,
                label: 'Senior Six'
            },
            {
                value: 180,
                label: 'Senior Five'
            },
            {
                value: 165,
                label: 'Senior Four'
            },
            {
                value: 135,
                label: 'Senior Three'
            },
            {
                value: 230,
                label: 'Senior Two'
            },
            {
                value: 270,
                label: 'Senior One'
            }
        ],
        colors: [
            'violet',
            'orange',
            'gray',
            'blue',
            'yellow',
            'pink'
        ],
        resize: true,
        formatter: function(x) {
            return x
        }
    });    
    // [ Donut-chart ] end

    // [ bar-stacked ] chart start
    Morris.Bar({
        element: 'morris-bar-stacked-chart',
        data: [{
            y: 'S6',
            a: 130,
            b: 90
            
        },
        {
            y: 'S5',
            a: 100,
            b: 80
            
        },
        {
            y: 'S4',
            a: 95,
            b: 70
            
        },
        {
            y: 'S3',
            a: 65,
            b: 70
            
        },
        {
            y: 'S2',
            a: 100,
            b: 130
            
        },
        {
            y: 'S1',
            a: 160,
            b: 110
            
        }
        ],
        xkey: 'y',
        stacked: true,
        barSizeRatio: 0.40,
        barGap: 2,
        resize: true,
        responsive:true,
        ykeys: ['a', 'b'],
        labels: ['Girls','Boys' ],
        barColors: ["0-#899FD4-#A389D4", "0-#1de9b6-#1dc4e9"]
    });
    // [ bar-stacked ] chart end

    // [ area-angle-chart ] start
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
                y: '2016',
                a: 60,
                b: 68
            },
            {
                y: '2017',
                a: 70,
                b: 65
            },
            {
                y: '2018',
                a: 80,
                b: 90
            },
            {
                y: '2019',
                a: 70,
                b: 76
            },
            {
                y: '2020',
                a: 82,
                b: 70
            },
            {
                y: '2021',
                a: 85,
                b: 90
            },
            {
                y: '2022',
                a: 80,
                b: 75
            }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A-Level', 'O-Level'],
        pointSize: 0,
        fillOpacity: 0.5,
        pointStrokeColors: ['violet', 'blue'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        responsive:true,
        lineColors: ['violet', 'orange'],
        resize: true
    });
    // [ area-angle-chart ] end

    // [ area-smooth-chart ] start
    Morris.Area({
        element: 'morris-area-curved-chart',
        data: [{
            period: '2016',
            iphone: 0,
            ipad: 0,
            itouch: 0
        }, {
            period: '2017',
            iphone: 50,
            ipad: 15,
            itouch: 5
        }, {
            period: '2018',
            iphone: 20,
            ipad: 50,
            itouch: 65
        }, {
            period: '2019',
            iphone: 60,
            ipad: 12,
            itouch: 7
        }, {
            period: '2020',
            iphone: 30,
            ipad: 20,
            itouch: 120
        }, {
            period: '2021',
            iphone: 25,
            ipad: 80,
            itouch: 40
        }, {
            period: '2022',
            iphone: 10,
            ipad: 10,
            itouch: 10
        }],
        lineColors: ['#A389D4', '#1de9b6', '#04a9f5'],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['A-Level Teachers', 'O-Level Teachers', 'Non-teaching Staff'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.9,
        responsive:true,
        behaveLikeLine: true,
        gridLineColor: '#d2d2d2',
        hideHover: 'auto'
    });
    // [ area-smooth-chart ] end

    // [ line-angle-chart ] Start
    Morris.Line({
        element: 'morris-line-chart',
        data: [{
                y: '01,March',
                a: 97.7,
                b: 95.6,
                c: 93.9,
                d: 100,
                e: 91.7,
                f: 87.0
            },
            {
                y: '10,April',
                a: 96.8,
                b: 100,
                c: 99.4,
                d: 100,
                e: 99.1,
                f: 96.3
            },
            {
                y: '20,May',
                a: 100,
                b: 98.9,
                c: 100,
                d: 96.3,
                e: 97.8,
                f: 92.6
            }
        ],
        xkey: 'y',
        redraw: true,
        resize: false,
        smooth: false,
        ykeys: ['a', 'b', 'c','d','e','f'],
        hideHover: 'auto',
        
        responsive:true,
        labels: ['Senior Six', 'Senior Five', 'Senior four','Senior Three','Senior Two','Senior One' ],
        lineColors: ['violet','orange','gray','blue','yellow','pink']
    });
    // [ line-angle-chart ] end

    // // [ line-smooth-chart ] start
    // Morris.Line({
    //     element: 'morris-line-smooth-chart',
    //     data: [{
    //             y: '2006',
    //             a: 100,
    //             b: 90
    //         },
    //         {
    //             y: '2007',
    //             a: 75,
    //             b: 65
    //         },
    //         {
    //             y: '2008',
    //             a: 50,
    //             b: 40
    //         },
    //         {
    //             y: '2009',
    //             a: 75,
    //             b: 65
    //         },
    //         {
    //             y: '2010',
    //             a: 50,
    //             b: 40
    //         },
    //         {
    //             y: '2011',
    //             a: 75,
    //             b: 65
    //         },
    //         {
    //             y: '2012',
    //             a: 100,
    //             b: 90
    //         }
    //     ],
    //     xkey: 'y',
    //     redraw: true,
    //     resize: true,
    //     ykeys: ['a', 'b'],
    //     hideHover: 'auto',
    //     responsive:true,
    //     labels: ['Series A', 'Series B'],
    //     lineColors: ['#1de9b6', '#A389D4']
    // });
    // // [ line-smooth-chart ] end

    
        }, 700);
});
