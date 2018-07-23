$(document).ready(function () {

    var $all = $('#info, #intel1, #intel2, #intel3, #intel4, #intel5, #intel6, #intel7, #intel8, #intel9, #intel10, #renew1, #renew2, #renew3, #renew4, #renew5, #renew6, #renew7, #renew8, #renew9, #renew10, #renew11, #renew12, #renew13, #renew14, #renew15, #renew16, #renew17');

    var $nav = $('.nav1, .nav2, .nav3, .nav4');

    var $regions = $('.north, .south, .heartland, .rockies, .west, .northpins, .southpins, .heartlandpins, .rockiespins, .westpins, .otherpins');

    $('#mapwrap').animate({
        opacity: "1"
    });
    $('.north, .south, .heartland, .rockies, .west').animate({
        opacity: "1"
    }), 800;
    $('.northpins, .southpins, .heartlandpins, .rockiespins, .westpins').animate({
        opacity: "1"
    }), 1200;

    $("li.current").prev().addClass("precurrent");
    $(".mainbox").css({
        borderColor: "#324a70"
    });

    $nav.not(".nav3").click(function () {
        $(".dropdown").hide();
    });

    $(".mainbox").click(function () {
        $(".dropdown").hide();
    });

    $(".dropdown").mouseover(function () {
        $(this).show();
    }).mouseout(function () {
        $(this).hide();
    });

    $(".ca, .ca2").click(

        function () {
            $('.zoommap').animate({
                opacity: '1'
            }, 400);
            $('.zoommap').addClass('zoomca', 400, 'easeInOutCubic');
            $('.zoommap').css({
                'z-index': '8'
            });
            $('.zoomout').animate({
                opacity: '0.8'
            }, 400).show();
            $('.inpins.california').delay(400).animate({
                opacity: '1'
            }, 400);
        });

    $(".or").click(

        function () {
            $('.zoommap').animate({
                opacity: '1'
            }, 400);
            $('.zoommap').addClass('zoomor', 400, 'easeInOutCubic');
            $('.zoommap').css({
                'z-index': '8'
            });
            $('.zoomout').animate({
                opacity: '0.8'
            }, 400).show();
            $('.inpins.oregon').delay(400).animate({
                opacity: '1'
            }, 400);
        });

    $(".wy").click(

        function () {
            $('.zoommap').animate({
                opacity: '1'
            }, 400);
            $('.zoommap').addClass('zoomwy', 400, 'easeInOutCubic');
            $('.zoommap').css({
                'z-index': '8'
            });
            $('.zoomout').animate({
                opacity: '0.8'
            }, 400).show();
            $('.inpins.wyoming').delay(400).animate({
                opacity: '1'
            }, 400);
        });

    $(".mn2").click(

        function () {
            $('.zoommap').animate({
                opacity: '1'
            }, 400);
            $('.zoommap').addClass('zoommn', 400, 'easeInOutCubic');
            $('.zoommap').css({
                'z-index': '8'
            });
            $('.zoomout').animate({
                opacity: '0.8'
            }, 400).show();
            $('.inpins.minnesota').delay(400).animate({
                opacity: '1'
            }, 400);
        });

    $(".zoomout").click(

        function () {
            $('.zoommap').removeClass('zoomca zoomor zoomwy zoommn', 200, 'easeInOutCubic');
            $('.zoommap, .inpins').animate({
                opacity: '0'
            }, 200);
            $('.zoommap').animate({
                'z-index': '1'
            });
            $('.zoomout').animate({
                opacity: '0'
            }, 400).hide();
        });


    $(".zoomout").mouseover(function () {
        $(this).css({
            opacity: "0.9"
        });
    }).mouseout(function () {
        $(this).css({
            opacity: "0.8"
        });
    });

    $(".nav1").click(function () {
        $(this).addClass("current");
        $nav.not(this).removeClass("current");
        $nav.removeClass("precurrent");
        $(".navbg").css({
            background: "#1F2A46"
        });

        $('#infowrap').css({
            left: '0',
            'z-index': '10'
        });
        $('#info').animate({
            opacity: '1'
        }, 650);
        $all.not('#info').animate({
            opacity: '0'
        }, 650);
    });

    $(".home1").click(function () {
        $('#infowrap').animate({
            left: '0'
        });
        $('#info').animate({
            opacity: '1'
        }, 650);
        $all.not('#info').animate({
            opacity: '0'
        }, 650);
    });

    $(".nav2").click(function () {
        $(this).addClass("current");
        $nav.not(this).removeClass("current");
        $("li.current").prev().addClass("precurrent");
        $nav.not(".nav1").removeClass("precurrent");
        $(".navbg").css({
            background: "#1F2A46"
        });

        $('#infowrap').css({
            left: '-1100%',
            'z-index': '10'
        });
        $('#renew1').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew1').animate({
            opacity: '0'
        }, 650);
    });

    $(".nav3").click(function () {
        $(this).addClass("current");
        $nav.not(this).removeClass("current");
        $("li.current").prev().addClass("precurrent");
        $nav.not(".nav2").removeClass("precurrent");
        $(".navbg").css({
            background: "#1F2A46"
        });
        $(".dropdown").show().animate({
            height: "112px"
        });

    });

    $(".nav4").click(function () {
        $(this).addClass("current");
        $nav.not(this).removeClass("current");
        $("li.current").prev().addClass("precurrent");
        $nav.not(".nav3").removeClass("precurrent");
        $(".navbg").css({
            background: "#1F2A46"
        });
    });

    $(".home2").click(function () {

        $('#infowrap').animate({
            left: '-1100%'
        });
        $('#renew1').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew1').animate({
            opacity: '0'
        }, 650);
    });

    $(".page1").click(function () {

        $('#infowrap').animate({
            left: '-100%'
        }, 650);
        $('#intel1').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel1').animate({
            opacity: '0'
        }, 650);
    });

    $(".page2").click(function () {

        $('#infowrap').animate({
            left: '-200%'
        }, 650);
        $('#intel2').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel2').animate({
            opacity: '0'
        }, 650);
    });

    $(".page3").click(function () {

        $('#infowrap').animate({
            left: '-300%'
        }, 650);
        $('#intel3').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel3').animate({
            opacity: '0'
        }, 650);
    });

    $(".page4").click(function () {

        $('#infowrap').animate({
            left: '-400%'
        }, 650);
        $('#intel4').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel4').animate({
            opacity: '0'
        }, 650);
    });

    $(".page5").click(function () {

        $('#infowrap').animate({
            left: '-500%'
        }, 650);
        $('#intel5').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel5').animate({
            opacity: '0'
        }, 650);
    });

    $(".page6").click(function () {

        $('#infowrap').animate({
            left: '-600%'
        }, 650);
        $('#intel6').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel6').animate({
            opacity: '0'
        }, 650);
    });

    $(".page7").click(function () {

        $('#infowrap').animate({
            left: '-700%'
        }, 650);
        $('#intel7').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel7').animate({
            opacity: '0'
        }, 650);
    });

    $(".page8").click(function () {

        $('#infowrap').animate({
            left: '-800%'
        }, 650);
        $('#intel8').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel8').animate({
            opacity: '0'
        }, 650);
    });

    $(".page9").click(function () {

        $('#infowrap').animate({
            left: '-900%'
        }, 650);
        $('#intel9').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel9').animate({
            opacity: '0'
        }, 650);
    });

    $(".page10").click(function () {

        $('#infowrap').animate({
            left: '-1000%'
        }, 650);
        $('#intel10').animate({
            opacity: '1'
        }, 650);
        $all.not('#intel10').animate({
            opacity: '0'
        }, 650);
    });

    $(".page11").click(function () {

        $('#infowrap').animate({
            left: '-1200%'
        }, 650);
        $('#renew2').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew2').animate({
            opacity: '0'
        }, 650);
    });

    $(".page12").click(function () {

        $('#infowrap').animate({
            left: '-1300%'
        }, 650);
        $('#renew3').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew3').animate({
            opacity: '0'
        }, 650);
    });

    $(".page13").click(function () {

        $('#infowrap').animate({
            left: '-1400%'
        }, 650);
        $('#renew4').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew4').animate({
            opacity: '0'
        }, 650);
    });

    $(".page14").click(function () {

        $('#infowrap').animate({
            left: '-1500%'
        }, 650);
        $('#renew5').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew5').animate({
            opacity: '0'
        }, 650);
    });

    $(".page15").click(function () {

        $('#infowrap').animate({
            left: '-1600%'
        }, 650);
        $('#renew6').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew6').animate({
            opacity: '0'
        }, 650);
    });

    $(".page16").click(function () {

        $('#infowrap').animate({
            left: '-1700%'
        }, 650);
        $('#renew7').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew7').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage1").click(function () {

        $('#infowrap').animate({
            left: '-1700%'
        }, 650);
        $('#renew7').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew7').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage2").click(function () {

        $('#infowrap').animate({
            left: '-1800%'
        }, 650);
        $('#renew8').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew8').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage3").click(function () {

        $('#infowrap').animate({
            left: '-1900%'
        }, 650);
        $('#renew9').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew9').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage4").click(function () {

        $('#infowrap').animate({
            left: '-2000%'
        }, 650);
        $('#renew10').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew10').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage5").click(function () {

        $('#infowrap').animate({
            left: '-2100%'
        }, 650);
        $('#renew11').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew11').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage6").click(function () {

        $('#infowrap').animate({
            left: '-2200%'
        }, 650);
        $('#renew12').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew12').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage7").click(function () {

        $('#infowrap').animate({
            left: '-2300%'
        }, 650);
        $('#renew13').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew13').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage8").click(function () {

        $('#infowrap').animate({
            left: '-2400%'
        }, 650);
        $('#renew14').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew14').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage9").click(function () {

        $('#infowrap').animate({
            left: '-2500%'
        }, 650);
        $('#renew15').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew15').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage10").click(function () {

        $('#infowrap').animate({
            left: '-2600%'
        }, 650);
        $('#renew16').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew16').animate({
            opacity: '0'
        }, 650);
    });

    $(".wpage11").click(function () {

        $('#infowrap').animate({
            left: '-2700%'
        }, 650);
        $('#renew17').animate({
            opacity: '1'
        }, 650);
        $all.not('#renew17').animate({
            opacity: '0'
        }, 650);
    });




    $(".more4").click(function () {

        $('#more2').animate({
            opacity: '1'
        }, 650);
        $('#morewrap2').css({
            'z-index': '12'
        }, 650);
    });

    $(".close, .nav3, .nav4, .topbox").click(function () {
        $all.animate({
            opacity: '0'
        }, 400);
        $('#infowrap').animate({
            'z-index': '-1'
        }, 400);
    });

    $(".close2, .nav1, .nav2, .nav3, .nav4, .topbox, .fadebg").click(function () {
        $('.fadebg').animate({
            opacity: 0,
            'z-index': 0
        }, 400);
        $('#more').animate({
            opacity: '0'
        }, 400);
        $('#morewrap').animate({
            'z-index': '-1'
        }, 400);
    });

    $(".close3, .nav1, .nav2, .nav3, .nav4, .topbox").click(function () {
        $('.fadebg').animate({
            opacity: 0,
            'z-index': 0
        }, 400);
        $('#more2').animate({
            opacity: '0'
        }, 400);
        $('#morewrap2').animate({
            'z-index': '-1'
        }, 400);
    });

    $(".close, .topbox").click(function () {
        $nav.removeClass("current"), 400;
        $nav.removeClass("precurrent"), 400;
        $(".navbg").css({
            background: "#324a70"
        });
    });

    $(".intellink").click(function () {
        $('.nav1').click();
    });

    $(".renewlink").click(function () {
        $('.nav2').click();
    });

    ////
    $("#north").mouseenter(function () {
        $regions.not(".north, .northpins").stop().animate({
            opacity: 0.6
        }, 200);
    });

    $("#north").mouseleave(function () {
        $regions.stop().animate({
            opacity: 1
        }, 200);
    });

    /////
    $("#south").mouseenter(function () {
        $regions.not(".south, .southpins, .heartland, .heartlandpins").stop().animate({
            opacity: 0.5
        }, 200);
        $(".heartland, .heartlandpins").stop().animate({
            opacity: 0.4
        }, 200);
    });

    $("#south").mouseleave(function () {
        $regions.stop().animate({
            opacity: 1
        }, 200);
    });

    /////
    $("#heartland").mouseenter(function () {
        $regions.not(".heartland, .heartlandpins").stop().animate({
            opacity: 0.6
        }, 200);
    });

    $("#heartland").mouseleave(function () {
        $regions.stop().animate({
            opacity: 1
        }, 200);
    });

    /////
    $("#rockies").mouseenter(function () {
        $regions.not(".rockies, .rockiespins").stop().animate({
            opacity: 0.6
        }, 200);
    });

    $("#rockies").mouseleave(function () {
        $regions.stop().animate({
            opacity: 1
        }, 200);
    });

    /////
    $("#west").mouseenter(function () {
        $regions.not(".west, .westpins").stop().animate({
            opacity: 0.6
        }, 200);
    });

    $("#west").mouseleave(function () {
        $regions.stop().animate({
            opacity: 1
        }, 200);
    });


    // Create the tooltips only when document ready
    $(document).ready(function () {
        // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
        $('.click').each(function () {
            $(this).qtip({
                content: {
                    text: $(this).next('.pop')
                },
                show: {
                    event: 'click'
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    classes: 'qtip-bootstrap'
                },
                position: {
                    my: 'center left',
                    // Position my top left...
                    at: 'center right',
                    // at the bottom right of...
                    viewport: $(window)
                }
            });
        });
    });

    // Create the tooltips only when document ready
    $(document).ready(function () {
        // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
        $('.click1').each(function () {
            $(this).qtip({
                content: {
                    text: $(this).next('.pop1')
                },
                show: {
                    event: 'click'
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    classes: 'qtip-bootstrap'
                },
                position: {
                    my: 'center left',
                    // Position my top left...
                    at: 'center right',
                    // at the bottom right of...
                    viewport: $(window)
                }
            });
        });
    });

    // Create the tooltips only when document ready
    $(document).ready(function () {
        // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
        $('.click2').each(function () {
            $(this).qtip({
                content: {
                    text: $(this).next('.pop2')
                },
                show: {
                    event: 'click'
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    classes: 'qtip-bootstrap'
                },
                position: {
                    my: 'center left',
                    // Position my top left...
                    at: 'center right',
                    // at the bottom right of...
                    viewport: $(window)
                }
            });
        });
    });

    // Create the tooltips only when document ready
    $(document).ready(function () {
        // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
        $('.click3').each(function () {
            $(this).qtip({
                content: {
                    text: $(this).next('.pop3')
                },
                show: {
                    event: 'click'
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    classes: 'qtip-bootstrap'
                },
                position: {
                    my: 'center left',
                    // Position my top left...
                    at: 'center right',
                    // at the bottom right of...
                    viewport: $(window)
                }
            });
        });
    });

    // Create the tooltips only when document ready
    $(document).ready(function () {
        // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
        $('.click4').each(function () {
            $(this).qtip({
                content: {
                    text: $(this).next('.pop4')
                },
                show: {
                    event: 'click'
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    classes: 'qtip-bootstrap'
                },
                position: {
                    my: 'center left',
                    // Position my top left...
                    at: 'center right',
                    // at the bottom right of...
                    viewport: $(window)
                }
            });
        });
    });


    // Create the tooltips only when document ready
    $(document).ready(function () {

        // This will automatically grab the 'title' attribute and replace
        // the regular browser tooltips for all <a> elements with a title attribute!
        $('.hover').qtip({
            style: {
                classes: 'qtip-bootstrap2'
            },
            position: {
                my: 'right',
                // Position my top left...
            }

        });
    });



});

$(window).bind("load", function () {
    $('.pop1').load('data/data.ca.html');
    $('.pop2').load('data/data.or.html');
    $('.pop3').load('data/data.wy.html');
    $('.pop4').load('data/data.mn.html');
    $('#bc').load('data/data.popups.html #bc');
    $('#bc2').load('data/data.popups.html #bc2');
    $('#bc3').load('data/data.popups.html #bc3');
    $('#mb').load('data/data.popups.html #mb');
    $('#mb2').load('data/data.popups.html #mb2');
    $('#ak').load('data/data.popups.html #ak');
    $('#wa').load('data/data.popups.html #wa');
    $('#wa2').load('data/data.popups.html #wa2');
    $('#wa3').load('data/data.popups.html #wa3');
    $('#wa4').load('data/data.popups.html #wa4');
    $('#id').load('data/data.popups.html #id');
    $('#az').load('data/data.popups.html #az');
    $('#az2').load('data/data.popups.html #az2');
    $('#ut').load('data/data.popups.html #ut');
    $('#co').load('data/data.popups.html #co');
    $('#co2').load('data/data.popups.html #co2');
    $('#co3').load('data/data.popups.html #co3');
    $('#co4').load('data/data.popups.html #co4');
    $('#mt').load('data/data.popups.html #mt');
    $('#mt2').load('data/data.popups.html #mt2');
    $('#nm').load('data/data.popups.html #nm');
    $('#ks').load('data/data.popups.html #ks');
    $('#ks2').load('data/data.popups.html #ks2');
    $('#nd').load('data/data.popups.html #nd');
    $('#ne').load('data/data.popups.html #ne');
    $('#ne2').load('data/data.popups.html #ne2');
    $('#ne3').load('data/data.popups.html #ne3');
    $('#ne4').load('data/data.popups.html #ne4');
    $('#ne5').load('data/data.popups.html #ne5');
    $('#ne6').load('data/data.popups.html #ne6');
    $('#ne7').load('data/data.popups.html #ne7');
    $('#mn').load('data/data.popups.html #mn');
    $('#mn7').load('data/data.popups.html #mn7');
    $('#or10').load('data/data.popups.html #or10');
    $('#or11').load('data/data.popups.html #or11');
    $('#ok').load('data/data.popups.html #ok');
    $('#ok2').load('data/data.popups.html #ok2');
    $('#ok3').load('data/data.popups.html #ok3');
    $('#ok4').load('data/data.popups.html #ok4');
    $('#ok5').load('data/data.popups.html #ok5');
    $('#ok6').load('data/data.popups.html #ok6');
    $('#ok7').load('data/data.popups.html #ok7');
    $('#ia').load('data/data.popups.html #ia');
    $('#mo').load('data/data.popups.html #mo');
    $('#tx').load('data/data.popups.html #tx');
    $('#tx2').load('data/data.popups.html #tx2');
    $('#tx3').load('data/data.popups.html #tx3');
    $('#tx4').load('data/data.popups.html #tx4');
    $('#ar').load('data/data.popups.html #ar');
    $('#tn').load('data/data.popups.html #tn');
    $('#fl').load('data/data.popups.html #fl');
    $('#fl2').load('data/data.popups.html #fl2');
    $('#fl3').load('data/data.popups.html #fl3');
    $('#ky').load('data/data.popups.html #ky');
    $('#dc').load('data/data.popups.html #dc');
    $('#va').load('data/data.popups.html #va');
    $('#va2').load('data/data.popups.html #va2');
    $('#la').load('data/data.popups.html #la');
    $('#sc').load('data/data.popups.html #sc');
    $('#al').load('data/data.popups.html #al');
    $('#nh').load('data/data.popups.html #nh');
    $('#ma').load('data/data.popups.html #ma');
    $('#nj').load('data/data.popups.html #nj');
    $('#pa').load('data/data.popups.html #pa');
    $('#pa2').load('data/data.popups.html #pa2');
    $('#pa3').load('data/data.popups.html #pa3');
    $('#wi').load('data/data.popups.html #wi');
    $('#il').load('data/data.popups.html #il');
    $('#il2').load('data/data.popups.html #il2');
    $('#il3').load('data/data.popups.html #il3');
    $('#il4').load('data/data.popups.html #il4');
    $('#il5').load('data/data.popups.html #il5');
    $('#in').load('data/data.popups.html #in');
    $('#intel-table-1').load('data/data.intel1.html');
    $('#intel-table-2').load('data/data.intel2.html');
    $('#intel-table-3').load('data/data.intel3.html');
    $('#intel-table-4').load('data/data.intel4.html');
    $('#intel-table-5').load('data/data.intel5.html');
    $('#intel-table-6').load('data/data.intel6.html');
    $('#intel-table-7').load('data/data.intel7.html');
    $('#intel-table-8').load('data/data.intel8.html');
    $('#intel-table-9').load('data/data.intel9.html');
    $('#intel-table-10').load('data/data.intel10.html');
    $('#solar-table').load('data/data.renewable.html #solar-data');
    $('#landfill-table').load('data/data.renewable.html #landfill-data');
    $('#biomass-table1').load('data/data.renewable.html #biomass-data1');
    $('#biomass-table2').load('data/data.renewable.html #biomass-data2');
    $('#hydro-table').load('data/data.renewable.html #hydro-data');
    $('#wind-table1').load('data/data.renewable.html #wind-data1');
    $('#wind-table2').load('data/data.renewable.html #wind-data2');
    $('#wind-table3').load('data/data.renewable.html #wind-data3');
    $('#wind-table4').load('data/data.renewable.html #wind-data4');
    $('#wind-table5').load('data/data.renewable.html #wind-data5');
    $('#wind-table6').load('data/data.renewable.html #wind-data6');
    $('#wind-table7').load('data/data.renewable.html #wind-data7');
    $('#wind-table8').load('data/data.renewable.html #wind-data8');
    $('#wind-table9').load('data/data.renewable.html #wind-data9');
    $('#wind-table10').load('data/data.renewable.html #wind-data10');
    $('#wind-table11').load('data/data.renewable.html #wind-data11');
});