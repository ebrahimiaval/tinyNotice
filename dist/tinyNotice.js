/*
 *   About : tinyNotic 2.1.0
 *   Created and published by : mohammad ebrahimi aval
 *   publisher site :http://ebrahimiaval.ir
 */

var tinyNoticeSetTimeOutVar = null;
(function ($) {
    $.tinyNotice = function (paramet) {
        var inputedOption = {};
        var option = {
            statusTitle: "",
            statusText: "",
            status: "note",
            lifeTime: 4000,
            setConfirm: false,
            accept: function () {
            },
            cancel: function () {
            },
            callback: function () {
            },
        };

        if (arguments.length == 1) {//have 1 arguments
            if ($.isPlainObject(arguments[0])) {//if is a object
                inputedOption = arguments[0];//set to extand potions
            } else if ($.type(arguments[0]) == "string" && arguments[0] == "close") {
                return close();
            } else {//use for text
                inputedOption.statusText = arguments[0];
            }
        } else if (arguments.length == 2) {
            if ($.type(arguments[0]) == "string") {
                if ($.type(arguments[1]) == "string") {
                    if (isStatus(arguments[1])) {
                        inputedOption.statusText = arguments[0];
                        inputedOption.status = arguments[1];
                    } else {
                        inputedOption.statusTitle = arguments[0];
                        inputedOption.statusText = arguments[1];
                    }
                } else if ($.type(arguments[1]) == "number") {
                    inputedOption.statusText = arguments[0];
                    inputedOption.lifeTime = arguments[1];
                } else {
                    return isInvalid(0);//stop running
                }
            } else {
                return isInvalid(1);//stop running
            }
        } else if (arguments.length == 3) {
            if ($.type(arguments[0]) == "string") {
                if ($.type(arguments[1]) == "string") {
                    if (isStatus(arguments[1])) {
                        inputedOption.statusText = arguments[0];
                        inputedOption.status = arguments[1];
                    } else {//isStatus($.type(arguments[1]) == false
                        inputedOption.statusTitle = arguments[0];
                        inputedOption.statusText = arguments[1];
                    }
                } else {//$.type(arguments[1])!="string"
                    return isInvalid(2);//stop running
                }

                if ($.type(arguments[2]) == "number") {
                    inputedOption.lifeTime = arguments[2];
                } else if (isStatus(arguments[2])) {
                    inputedOption.status = arguments[2];
                } else {
                    console.log(inputedOption);
                    return isInvalid(3);//stop running
                }
            } else {//$.type(arguments[0])!="string"
                return isInvalid(4);//stop running
            }
        } else if (arguments.length == 4) {
            if ($.type(arguments[0]) == "string" && $.type(arguments[1]) == "string") {
                inputedOption.statusTitle = arguments[0];
                inputedOption.statusText = arguments[1];
            } else {
                return isInvalid(5);//stop running
            }
            if (isStatus(arguments[2]))
                inputedOption.status = arguments[2];
            else
                return isInvalid(5);//stop running

            if ($.type(arguments[3]) == "number")
                inputedOption.lifeTime = arguments[3];
            else
                return isInvalid(7);//stop running
        } else {//have 0 argument
            return isInvalid(8);//stop running
        }

        //extend options
        option = $.extend(option, inputedOption || {});


        //alert for invalid arguments
        function isInvalid(place) {
            //console.log("$.dist plugin configured by invalid arguments!! \n palce:"+place);
            return "invalid";
        }

        //cheching text to be satus
        function isStatus(param) {
            switch (param) {
                case "warning" :
                    return true;
                    break;
                case "success" :
                    return true;
                    break;
                case "error" :
                    return true;
                    break;
                case "note" :
                    return true;
                    break;
                case "info" :
                    return true;
                    break;
                default:
                    return false;
            }
        }

        //build
        function build() {
            var buttonView = "";
            var closeBtnView = "<span></span>";
            var okBtnTopic = "ok";
            var cancelBtnTopic = "cancel";

            if (option.setConfirm) {
                if (option.setConfirm == "fa") {
                    okBtnTopic = 'تایید';
                    cancelBtnTopic = 'رد';
                }
                else if ($.isPlainObject(option.setConfirm)) {
                    okBtnTopic = option.setConfirm.ok;
                    cancelBtnTopic = option.setConfirm.cancel;
                }

                buttonView = '<button data-action="confirm">' + okBtnTopic + '</button><button data-action="cancel">' + cancelBtnTopic + '</button>';

                closeBtnView = "";
                option.lifeTime = 0;
            }

            $("<div></div>")
                .addClass("tinyNoticeWrap")
                .addClass(option.status)
                .append(closeBtnView)
                .append("<strong>" + option.statusTitle + "</strong>")
                .append("<p>" + option.statusText + "</p>")
                .append(buttonView)
                .prependTo("body");

            $(".tinyNoticeWrap:first").show(200);

            if (closeBtnView != "") {//is not confirm mode
                $(".tinyNoticeWrap:first > span").click(function () {
                    close();
                });
            } else {
                $(".tinyNoticeWrap [data-action=confirm]").click(function () {
                    option.accept();
                    close();
                });
                $(".tinyNoticeWrap [data-action=cancel]").click(function () {
                    option.cancel();
                    close();
                });
            }

            if (tinyNoticeSetTimeOutVar)
                window.clearInterval(tinyNoticeSetTimeOutVar);
            if (option.lifeTime)
                tinyNoticeSetTimeOutVar = window.setTimeout(function () {
                    close();
                }, option.lifeTime);
        }

        //close
        function close(closeCallback) {
            $(".tinyNoticeWrap:first")
                .stop()
                .clearQueue()
                .fadeOut(100, function () {
                    $(".tinyNoticeWrap").remove();
                    if ($.isFunction(closeCallback))
                        closeCallback();
                    else
                        option.callback();
                });
        }

        //running
        if ($(".tinyNoticeWrap").is(":visible")) {
            close(build);
        } else {
            build();
        }
    };
}(jQuery));