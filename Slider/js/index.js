﻿$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        main: $("#main"),
        aLi: $("#main li"),
        len: $("#main li").size(),
        animate: ["lightSpeedIn", "slideDown", "slideUp", "slideLeft", "slideRight",
                  "slideExpandUp", "expandUp", "fadeIn", "expandOpen", "bigEntrance",
                  "hatch", "bounce", "pulse", "floating", "pullUp", "pullDown",
                  "stretchLeft", "stretchRight", "tada", "flip", "rubberBand", "zoomOutUp"] //22种动画效果。
    }
    setSize(data.iWidth, data.iHeight);
    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
    }

    var iNow = 0;
    data.main.swipe("up", function () {
        iNow++;
        if (iNow >= data.len - 1) {
            iNow = data.len - 1;
        }
        go(iNow, function () {
            data.aLi.eq(iNow).find("img").addClass("flip");
        });
    }).swipe("down", function () {
        iNow--;
        if (iNow <= 0) {
            iNow = 0;
        }
        go(iNow, function () {
            data.aLi.eq(iNow).find("img").addClass("flip");
        });
    });

    function go(i, fn) {
        data.main.css("-webkit-transform", "translate3d(0," + (-i * data.iHeight) + "px,0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            fn && typeof fn === "function" && fn();
        });
        
    }

    //new Slider({ slider: $("#lt_slider") });
    $("#lt_slider").slider(function (t) {
       // document.title = t; //t就相当于当前的scrollTop值。
    });
});
 
 

 