

$(function(){

    "use strict";

    //MAX LENGTH
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //input maxlenth
    $('#inputMaxLength').maxlength({
        alwaysShow: true,
        placement: 'top-right-inside'
    });
    //textarea maxlenth
    $('#textareaMaxLength').maxlength({
        alwaysShow: true,
        placement: 'top-right-inside'

    });

    //SEARCHING & TAGS SELECTS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Set bootstrap theme
    $.fn.select2.defaults.set( "theme", "bootstrap" );


    //统计数据页面“统计项”下拉框
    $("#StatisticalItem").select2({
        placeholder: "请选择统计项",
        allowClear: true
    });

    //统计数据页面“统计方式”下拉框
    $("#StatisticalMethod").select2({
        placeholder: "请选择统计方式",
        allowClear: true
    });

    //统计数据、历史数据页面“指标项”下拉框
    $("#indicatorItem").select2({
        placeholder: "请选择指标项",
        allowClear: true
    });

    //统计数据页面“时间轴”下拉框
    $("#timeline").select2({
        placeholder: "请选择时间轴",
        allowClear: true
    });

    //Select2 basic example
    $("#select2-example-basic").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    //第二个选择框
    $("#select2-example-basic2").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    //第二个选择框
    $("#select2-example-basic3").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    //第二个选择框
    $("#select2-example-basic4").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    //Select2 multiple options example
    $("#select2-example-multiple").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    //Select2 tagging example
    $("#select2-example-tags").select2({
        placeholder: "Select a country",
        allowClear: true,
        tags: true,
        tokenSeparators: [',']
    });

    //MASKED INPUT
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Date mask example
    $("#date-mask").inputmask("date");

    //Currency mask example
    $("#currency-mask").inputmask("currency");

    //License car example
    $("#license-mask").inputmask("[9-]AAA-999");

    //Country phone example
    $("#phone-mask").inputmask("phone", {
        onKeyValidation: function () {
            var city = $(this).inputmask("getmetadata")["cd"];
            if(city){
                $('#country-name').html(city);
            }
        }
    });

    //DATE PICKERS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Default datepicker example
    $('#default-datepicker').datepicker();

    //Range datepicker example
    $('#range-datepicker').datepicker({
        format: "dd/mm/yy",
        weekStart: 1,
        todayBtn: "linked",
        todayHighlight: true
    });

    //TIME PICKERS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Default timepicker example
    $('#default-timepicker').timepicker();

    //24 hours timepicker example
    $('#24-timepicker').timepicker({
        "showMeridian": false
    });

    //COLOR PICKERS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //HEX colorpicker example
    $('#hex-colorpicker').colorpicker({
        format: "hex"
    });

    //RGBA colorpicker example
    $('#rgba-colorpicker').colorpicker({
        format: "rgba"
    });

    //All Formats colorpicker example
    $('#all-formats-colorpicker').colorpicker({});

    //Component colorpicker example
    $('#component-colorpicker').colorpicker({});

});


