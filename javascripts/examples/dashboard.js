$(function () {

    "use strict";

    //TOASTR NOTIFICATION
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    toastr.options = {
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "timeOut": 3500,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "fadeOut"
    };

    toastr.info('欢迎您！', '<h5 style="margin-top: 0px; margin-bottom: 5px;"><b>气象环境监测系统</b></h5>');

    //AREA CHART EXAMPLE
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    if (document.getElementById("area-chart")){
        var area = document.getElementById("area-chart");

        var options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        var dataArea = {
            labels: ["January", "February", "March", "April", "May", "June"],
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
                    data: [12, 13, 11, 6, 9, 12]
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
                    data: [14, 6, 9, 13, 12, 16],
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

        var areaChart = new Chart(area, {
            type: 'line',
            data: dataArea,
            options: options

        });
    }


    //PIE  & POLAR CHART EXAMPLE
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    if (document.getElementById("pie-chart")) {
        var pie = document.getElementById("pie-chart");

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


        var pieChar = new Chart(pie, {
            type: 'pie',
            data: dataPie

        });
    }


    //MAGNIFIC POPUP GALLERY
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $('.gallery-wrap').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-no-margins mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300
        }
    });

//    报警信息提示
    Command: toastr["error"]("气象站数据出现异常，请及时查看")

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "rtl": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

});