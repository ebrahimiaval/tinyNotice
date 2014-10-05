(function($){
	$.tinyNotice = function(option,ease,callback){
        option = $.extend({
            width: 700,
            start: 1,
            params: null,
            redirect: true
        }, option || {});
          
            if(option.params == null) $(this).parent('div').hide();
            if($.type(ease) != 'string' && $.isFunction(ease)){
                    callback = ease;
                    ease = 'linear';
            }
            else if($.type(ease) == 'string' && !$.isFunction(callback)){
                    callback = function(){};
            }

            $.each(option.params,function(i,v){
                    $('#pointSelector').before('<div class="pointPart" data="'+option.params[i][0]+'" ><div class="pointText">'+option.params[i][1]+'</div><div class="pointPIC"></div></div>');
            });
	}
}(jQuery));





var notic_setTimeout = null;	
function notic(text,type,time,place){
        $(".com-notification i.com-close").trigger("click");
	if(text != "remove"){
		switch (type){
			case "erorr" : type = "com-noteError"; break;
			case "warning" : type = "com-noteWarning"; break;
			case "success" : type = "com-noteSuccess"; break;	
		}
                if(place == "popup")
                    var $selector = $('.modal-body .com-notification');
                else
                    var $selector = $('.com-notification');
               
                $(window).scrollTop($(".haha").offset().top - 10);
                
		$selector
			.removeAttr("class")
			.addClass('com-notification '+type)
			.show('pulsate',{},300)
			.find("span")
			.html(text);
		
		if(time){
                        window.clearTimeout(notic_setTimeout);
			window.setTimeout(function(){
				$(".com-notification i.com-close").trigger("click");
			},time);
		}
	}
	
}