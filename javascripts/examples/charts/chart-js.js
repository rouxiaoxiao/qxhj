"use strict";

var line = document.getElementById("line-chart");
var area = document.getElementById("area-chart");
var pie = document.getElementById("pie-chart");
var polar = document.getElementById("polar-chart");
var radar = document.getElementById("radar-chart");
//环境站数据
var airBar = document.getElementById("air-chart");
//气象站数据
var weather = document.getElementById("weather-chart");
//风向数据
var windDirection = document.getElementById("windDirection");

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

//LINE CHART EXAMPLE
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var dataLine = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Data 1",
            fill: false,
            backgroundColor: "#37d177",
            borderColor: "#37d177",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 66],
            spanGaps: false
        },
        {
            label: "Data 2",
            fill: false,
            backgroundColor: "#FFCE56",
            borderColor: "#FFCE56",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#FFCE56",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [55, 79, 70, 75, 88],
            spanGaps: false
        }
    ]
};
if (line != null) {
    var lineChart = new Chart(line, {
        type: 'line',
        data: dataLine
    });
}


//AREA CHART EXAMPLE
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var dataArea = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Data 1",
            fill: true,
            backgroundColor: "rgba(55, 209, 119, 0.45)",
            borderColor: "rgba(55, 209, 119, 0.45)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            data: [12, 13, 11, 6, 9]
        },
        {
            label: "Data 2",
            fill: true,
            backgroundColor: "rgba(175, 175, 175, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "#343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            data: [14, 6, 9, 13, 12],
        }
    ],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

if (area != null) {
    var areaChart = new Chart(area, {
        type: 'line',
        data: dataArea,
        options: options

    });
}


//BAR CHART EXAMPLE
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var dataAir = {
    labels: ["2019-09-15 06:22:00", "2019-09-15 06:22:15", "2019-09-15 06:22:30", "2019-09-15 06:22:45", "2019-09-15 06:23:00", "2019-09-15 06:23:15", "2019-09-15 06:23:30", "2019-09-15 06:23:45", "2019-09-15 06:24:00", "2019-09-15 06:24:15"],
    datasets: [
        {
            label: "O3",
            fill: true,
            backgroundColor: "rgba(55, 209, 119, 0.45)",
            borderColor: "rgba(55, 209, 119, 0.45)",
            data: [0.12, 0.13, 0.11, 0.13, 0.08, 0.09, 0.06, 0.09, 0.03, 0.02]
        },
        {
            label: "NO",
            fill: true,
            backgroundColor: "rgba(204,255,204,0.45)",
            borderColor: "rgba(55, 209, 119, 0.45)",
            data: [0.02, 0.03, 0.11, 0.06, 0.09, 0.06, 0.09, 0.03, 0.02, 0.09]
        },
        {
            label: "NO2",
            fill: true,
            backgroundColor: "rgba(102,153,204, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.06, 0.009, 0.13, 0.12, 0.09]
        },
        {
            label: "NOX",
            fill: true,
            backgroundColor: "rgba(175, 175, 175, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            data: [0.14, 0.06, 0.009, 0.13, 0.12, 0.09, 0.13, 0.12, 0.06, 0.09]
        },
        {
            label: "SO2",
            fill: true,
            backgroundColor: "rgba(204,204,255, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.06, 0.09, 0.13, 0.12, 0.12]
        },
        {
            label: "PM25",
            fill: true,
            backgroundColor: "rgba(102,102,153, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.12, 0.06, 0.09, 0.04, 0.13]
        },
        {
            label: "PM10",
            fill: true,
            backgroundColor: "rgba(0,153,153, 0.26)",
            borderColor: "rgba(175, 175, 175, 0.26)",
            data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.06, 0.09, 0.04, 0.13, 0.12]
        }
    ],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

if (airBar != null) {
    var barChar = new Chart(airBar, {
        type: 'bar',
        data: dataAir,
        options: options

    });
}

var dataWeather = {
    labels: ["2019-09-15 06:22:00", "2019-09-15 06:22:15", "2019-09-15 06:22:30", "2019-09-15 06:22:45", "2019-09-15 06:23:00", "2019-09-15 06:23:15", "2019-09-15 06:23:30", "2019-09-15 06:23:45", "2019-09-15 06:24:00", "2019-09-15 06:24:15"],
    datasets: [
        {
            label: "空气温度",
            fill: true,
            backgroundColor: "rgba(55, 209, 119, 0.45)",
            borderColor: "rgba(55, 209, 119, 0.45)",
            data: [34, 35, 28, 30, 29, 32, 36, 38, 39, 34]
        }
    ],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

// var dataWeather = {
//     labels: ["2019-09-15 06:22:00", "2019-09-15 06:22:15", "2019-09-15 06:22:30", "2019-09-15 06:22:45", "2019-09-15 06:23:00", "2019-09-15 06:23:15", "2019-09-15 06:23:30", "2019-09-15 06:23:45", "2019-09-15 06:24:00", "2019-09-15 06:24:15"],
//     datasets: [
//         {
//             label: "空气温度",
//             fill: true,
//             backgroundColor: "rgba(55, 209, 119, 0.45)",
//             borderColor: "rgba(55, 209, 119, 0.45)",
//             data: [0.12, 0.13, 0.11, 0.17, 0.08, 0.04, 0.05, 0.13, 0.08, 0.06]
//         },
//         {
//             label: "相对湿度",
//             fill: true,
//             backgroundColor: "rgba(204,255,204,0.45)",
//             borderColor: "rgba(55, 209, 119, 0.45)",
//             data: [0.02, 0.03, 0.11, 0.06, 0.09, 0.04, 0.13, 0.12, 0.09, 0.09]
//         },
//         {
//             label: "降水量",
//             fill: true,
//             backgroundColor: "rgba(102,153,204, 0.26)",
//             borderColor: "rgba(175, 175, 175, 0.26)",
//             data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.06, 0.09, 0.04, 0.13, 0.12]
//         },
//         {
//             label: "总辐射辐照度",
//             fill: true,
//             backgroundColor: "rgba(175, 175, 175, 0.26)",
//             borderColor: "rgba(175, 175, 175, 0.26)",
//             data: [0.14, 0.06, 0.009, 0.13, 0.12, 0.06, 0.09, 0.13, 0.12, 0.06]
//         },
//         {
//             label: "风速",
//             fill: true,
//             backgroundColor: "rgba(204,204,255, 0.26)",
//             borderColor: "rgba(175, 175, 175, 0.26)",
//             data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.09, 0.13, 0.12, 0.13, 0.12]
//         },
//         {
//             label: "本站气压",
//             fill: true,
//             backgroundColor: "rgba(102,102,153, 0.26)",
//             borderColor: "rgba(175, 175, 175, 0.26)",
//             data: [0.14, 0.06, 0.09, 0.13, 0.12, 0.09, 0.13, 0.12, 0.13, 0.12]
//         }
//     ],
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// };

if (weather != null) {
    var weatherChar = new Chart(weather, {
        type: 'bar',
        data: dataWeather,
        options: options

    });
}

//PIE  & POLAR CHART EXAMPLE
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var dataPie = {
    labels: [
        "Data 1",
        "Data 2",
        "Data 3"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "rgba(55, 209, 119, 0.45)",
                "#FFCE56",
                "rgba(175, 175, 175, 0.26)"
            ],
            hoverBackgroundColor: [
                "rgba(55, 209, 119, 0.6)",
                "#FFCE56",
                "rgba(175, 175, 175, 0.4)"
            ]
        }]
};

if (pie != null) {
    var pieChar = new Chart(pie, {
        type: 'pie',
        data: dataPie

    });
}


//RADAR CHART EXAMPLE
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var dataRadar = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "Data 1",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "Data 2",
            backgroundColor: "rgba(55, 209, 119, 0.45)",
            borderColor: "rgba(55, 209, 119, 1)",
            pointBackgroundColor: "rgba(55, 209, 119, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(55, 209, 119, 1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

if (radar != null) {
    var radarChar = new Chart(radar, {
        type: 'radar',
        data: dataRadar

    });
}


var dataWindDirection = {
    labels: ["北", "东北", "东", "东南", "南", "西南", "西", "西北"],
    datasets: [
        {
            label: "Data 1",
            backgroundColor: "rgba(55, 209, 119, 0.45)",
            borderColor: "rgba(55, 209, 119, 1)",
            pointBackgroundColor: "rgba(55, 209, 119, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(55, 209, 119, 1)",
            data: [65, 59, 90, 81, 56, 55, 40, 30]
        }
    ]
};

if (windDirection != null) {
    var radarChar = new Chart(windDirection, {
        type: 'radar',
        data: dataWindDirection,
        //不显示图例
        options: {legend: {display: false}}
    });
}
