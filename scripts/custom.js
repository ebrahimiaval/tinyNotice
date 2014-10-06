//Mr.sinoser

(function($){
	$.tinyNotice = function(paramet){
           var option = {};
           if(arguments.length == 1){//have 1 arguments
                   if($.type(arguments[0]) == "string" && arguments[0] == "destroy"){
                       alert("take destroy!!");

                   }else if($.isPlainObject(arguments[0])){
                        option = arguments[0];

                   }else{
                       alert("message : " + arguments[0]);//stop running
                   }
           }else if(arguments.length > 1){//more than one argument
                   if(!$.isPlainObject(arguments[0])){
                       declarationInvalidity();
                   }else{
                       alert("$.tinyNotice plugin configured by invalid arguments!!");
                   }  
           }else{//have 0 argument
               declarationInvalidity();//stop running
           }
           
           //extend options
            option = $.extend({
                statusText : "$.tinyNotice erorr: notice text not set!",
                status : "note",
                lifeTime : 4000,
                setConfirmBtn : ["lngFA"]
            }, option || {});
           
           //use for invalid arguments
           function declarationInvalidity(){
               alert("$.tinyNotice plugin configured by invalid arguments!!");
               return;
           }
           
           //use for destroy notice box
           function destroy(){
               
           }
           
          
	}
}(jQuery));

     $.tinyNotice("destroy");




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