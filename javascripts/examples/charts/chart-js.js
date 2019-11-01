"use strict";

var line = document.getElementById("line-chart");
var area = document.getElementById("area-chart");
var pie = document.getElementById("pie-chart");
var polar = document.getElementById("polar-chart");
var radar = document.getElementById("radar-chart");
//环境站数据
var air = document.getElementById("air-chart");
//气象站数据
var weather = document.getElementById("weather-chart");
//风向数据
var windDirection = document.getElementById("windDirection-chart");
//风速风向
var windSpeed = document.getElementById("windSpeed-chart");
//降水量
var precipitation = document.getElementById("precipitation-chart");
//空气温度
var temperature = document.getElementById("temperature-chart");

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

// if (airBar != null) {
//     var barChar = new Chart(airBar, {
//         type: 'bar',
//         data: dataAir,
//         options: options
//
//     });
// }

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
            label: "频次",
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


//降水量等级对应颜色
function getPrecipitationColor(data) {
    var colorList = [];
    for (var i = 0; i < data.length; i++) {
        if (0 < data[i] && data[i] <= 1) {
            colorList.push("rgba(210,244,251,1)");
        } else if (1 < data[i] && data[i] <= 2) {
            colorList.push("rgba(143,232,239,1)");
        } else if (2 < data[i] && data[i] <= 4) {
            colorList.push("rgba(104,205,234,1)");
        } else if (4 < data[i] && data[i] <= 6) {
            colorList.push("rgba(69,171,232,1)");
        } else if (6 < data[i] && data[i] <= 8) {
            colorList.push("rgba(78,109,249,1)");
        } else if (8 < data[i] && data[i] <= 10) {
            colorList.push("rgba(148,116,237,1)");
        } else if (10 < data[i] && data[i] <= 20) {
            colorList.push("rgba(102,51,240,1)");
        } else if (20 < data[i] && data[i] <= 50) {
            colorList.push("rgba(78,3,150,1)");
        } else {
            colorList.push("rgba(1,1,1,1)");
        }
    }
    return colorList;
}


//降水量
var precipitationData = [2, 15, 20, 5, 23, 3, 24, 9, 5, 7, 9, 3, 2, 3, 24, 6, 5, 7, 0, 3, 2, 6, 10, 23];
var dataPrecipitation = {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
        {
            label: "降水量",
            fill: true,
            backgroundColor: getPrecipitationColor(precipitationData),
            borderColor: "rgba(55, 209, 119, 0.45)",
            data: precipitationData
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

if (precipitation != null) {
    var barChar = new Chart(precipitation, {
            type: 'bar',
            data: dataPrecipitation,
            //不显示图例
            options: {legend: {display: false}}
            // options: options

        })
    ;
}


//空气温度等级展示颜色
function getTemperatureColor(data) {
    var colorList = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] <= -30) {
            colorList.push("#1b34ff");
        } else if (-30 < data[i] && data[i] <= -25) {
            colorList.push("#3d97ff");
        } else if (-25 < data[i] && data[i] <= -20) {
            colorList.push("#4ebcff");
        } else if (-20 < data[i] && data[i] <= -15) {
            colorList.push("#98feff");
        } else if (-15 < data[i] && data[i] <= -10) {
            colorList.push("#afe3ff");
        } else if (-10 < data[i] && data[i] <= -5) {
            colorList.push("#c9ebff");
        } else if (-5 < data[i] && data[i] <= 0) {
            colorList.push("#dceeff");
        } else if (0 < data[i] && data[i] <= 5) {
            colorList.push("#eaf8ff");
        } else if (5 < data[i] && data[i] <= 10) {
            colorList.push("#fffee2");
        } else if (10 < data[i] && data[i] <= 15) {
            colorList.push("#ffe9c8");
        } else if (15 < data[i] && data[i] <= 20) {
            colorList.push("#ffdbbc");
        } else if (20 < data[i] && data[i] <= 25) {
            colorList.push("#ffb96b");
        } else if (25 < data[i] && data[i] <= 30) {
            colorList.push("#ffa25d");
        } else if (30 < data[i] && data[i] <= 35) {
            colorList.push("#ff8f4d");
        } else if (35 < data[i] && data[i] <= 40) {
            colorList.push("#ff7d4c");
        } else if (40 < data[i] && data[i] <= 45) {
            colorList.push("#ff4925");
        } else if (45 < data[i] && data[i] <= 50) {
            colorList.push("#cc6c2f");
        } else {
            colorList.push("#7f441e");
        }
    }
    return colorList;
}
var temperatureData = [28, 32, 29, 30, 27, 28, 29, 30, 32, 30, 28, 30, 32, 33, 35, 29, 28, 27, 26, 24, 22, 21, 20, 20];
var dataTemperature = {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
        {
            label: "空气温度",
            fill: false,
            backgroundColor: "#ffffff",
            borderColor: "#010101",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: getTemperatureColor(temperatureData),
            pointBackgroundColor: getTemperatureColor(temperatureData),
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            //数据点大小
            pointRadius: 5,
            pointHitRadius: 10,
            data: temperatureData,
            spanGaps: false
        }
    ]
};
if (temperature != null) {
    var lineChart = new Chart(temperature, {
        type: 'line',
        data: dataTemperature,
        //不显示图例
        options: {legend: {display: false}}
    });
}

//环境站数据
var airData1 = [0.12, 0.13, 0.11, 0.17, 0.08, 0.09, 0.06, 0.09, 0.03, 0.02, 0.12, 0.13, 0.11, 0.13, 0.08, 0.09, 0.06, 0.09, 0.03, 0.36, 0.06, 0.09, 0.03, 0.02];
var airData2 = [0.02, 0.13, 0.17, 0.13, 0.26, 0.09, 0.06, 0.31, 0.03, 0.02, 0.15, 0.13, 0.11, 0.18, 0.08, 0.09, 0.06, 0.09, 0.03, 0.02, 0.06, 0.09, 0.03, 0.31];
var airData3 = [0.16, 0.67, 0.11, 0.13, 0.08, 0.25, 0.16, 0.09, 0.26, 0.21, 0.12, 0.42, 0.14, 0.13, 0.18, 0.25, 0.26, 0.27, 0.21, 0.15, 0.06, 0.12, 0.03, 0.02];
var airData4 = [0.12, 0.13, 0.26, 0.15, 0.18, 0.09, 0.31, 0.09, 0.03, 0.02, 0.04, 0.13, 0.11, 0.13, 0.08, 0.09, 0.06, 0.09, 0.03, 0.02, 0.06, 0.15, 0.13, 0.15];
var airData5 = [0.02, 0.34, 0.11, 0.13, 0.08, 0.23, 0.13, 0.36, 0.21, 0.22, 0.12, 0.14, 0.13, 0.14, 0.38, 0.09, 0.16, 0.24, 0.23, 0.36, 0.06, 0.16, 0.11, 0.12];
var airData6 = [0.12, 0.13, 0.31, 0.12, 0.16, 0.09, 0.06, 0.09, 0.03, 0.02, 0.24, 0.13, 0.11, 0.13, 0.08, 0.27, 0.06, 0.09, 0.03, 0.02, 0.06, 0.17, 0.16, 0.22];
var airData7 = [0.22, 0.28, 0.11, 0.13, 0.08, 0.21, 0.26, 0.26, 0.22, 0.09, 0.12, 0.15, 0.18, 0.17, 0.27, 0.23, 0.17, 0.23, 0.22, 0.02, 0.06, 0.09, 0.11, 0.02];
var dataAir = {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
        {
            label: "SO2",
            fill: false,
            backgroundColor: "#8bd1ff",
            borderColor: "#8bd1ff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#8bd1ff",
            pointBackgroundColor: "#8bd1ff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData1,
            spanGaps: false
        },
        {
            label: "NO",
            fill: false,
            backgroundColor: "#d6fffd",
            borderColor: "#d6fffd",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#d6fffd",
            pointBackgroundColor: "#d6fffd",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData2,
            spanGaps: false
        },
        {
            label: "NO2",
            fill: false,
            backgroundColor: "#d6fffd",
            borderColor: "#d6fffd",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#d6fffd",
            pointBackgroundColor: "#d6fffd",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData3,
            spanGaps: false
        },
        {
            label: "O3",
            fill: false,
            backgroundColor: "#a358ff",
            borderColor: "#a358ff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#a358ff",
            pointBackgroundColor: "#a358ff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData4,
            spanGaps: false
        },
        {
            label: "PM2.5",
            fill: false,
            backgroundColor: "#231eff",
            borderColor: "#231eff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#231eff",
            pointBackgroundColor: "#231eff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData5,
            spanGaps: false
        },
        {
            label: "PM10",
            fill: false,
            backgroundColor: "#8addff",
            borderColor: "#8addff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#8addff",
            pointBackgroundColor: "#8addff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData6,
            spanGaps: false
        },
        {
            label: "NOx",
            fill: false,
            backgroundColor: "#83fffe",
            borderColor: "#83fffe",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#83fffe",
            pointBackgroundColor: "#83fffe",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            data: airData7,
            spanGaps: false
        }
    ]
};
if (air != null) {
    var lineChart = new Chart(air, {
        type: 'line',
        data: dataAir
    });
}


//chartjs风速风向图
//箭头小图标
var img=new Image();
img.src="images/arrow.png";
var img_e = new Image();
img_e.src = "images/arrow_east.png";
var img_s = new Image();
img_s.src = "images/arrow_south.png";
var img_w = new Image();
img_w.src = "images/arrow_west.png";
var img_n = new Image();
img_n.src = "images/arrow_north.png";
var img_en = new Image();
img_en.src = "images/arrow_en.png";
var img_es = new Image();
img_es.src = "images/arrow_es.png";
var img_wn = new Image();
img_wn.src = "images/arrow_wn.png";
var img_ws = new Image();
img_ws.src = "images/arrow_ws.png";


function getWindDirectionImages(data) {
    var imgList = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] == "东") {
            imgList.push(img_e);
        } else if (data[i] == "南") {
            imgList.push(img_s);
        } else if (data[i] == "西") {
            imgList.push(img_w);
        } else if (data[i] == "北") {
            imgList.push(img_n);
        } else if (data[i] == "东南") {
            imgList.push(img_es);
        } else if (data[i] == "西南") {
            imgList.push(img_ws);
        } else if (data[i] == "东北") {
            imgList.push(img_en);
        } else if (data[i] == "西北") {
            imgList.push(img_wn);
        } else {
            imgList.push("circle");
        }
    }
    return imgList;
}

var windSpeedData = [28, 32, 29, 30, 27, 28, 29, 30, 32, 30, 28, 30, 32, 33, 35, 29, 28, 27, 26, 24, 22, 21, 20, 20];
var windDirectionData = ['东', '东南', '南', '西北', '东', '东南', '南', '西北', '东', '东南', '南', '西北', '东', '东南', '南', '西北', '东', '东南', '南', '西北', '东', '东南', '南', '西北'];
var dataWindSpeed = {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
        {
            label: "风速",
            fill: false,
            backgroundColor: "#ffffff",
            borderColor: "#010101",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: "#3d97ff",
            pointBackgroundColor: "#3d97ff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "343d3e",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            //数据点大小
            pointRadius: 5,
            pointHitRadius: 10,
            //数据点形状
            pointStyle: getWindDirectionImages(windDirectionData),
            data: windSpeedData,
            spanGaps: false
        }
    ]
};
if (windSpeed != null) {
    var windSpeedChart = new Chart(windSpeed, {
        type: 'line',
        data: dataWindSpeed,
        //不显示图例
        options: {legend: {display: false}}
    });
}
