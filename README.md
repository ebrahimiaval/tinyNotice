# tinyNotice

JQuery Notification or confirm Plugin to use fast and simple.do n't  need special config.


## Getting Started
download and paste tinyNotice file in project.now,copy and past the below codes in head tag.
Congratulations,tinyNotice is ready to use.this jQuery plugin don't need to add html or css code or other option to launch.

```html
<link rel="stylesheet" href="tinyNotice/FlatTheme.css">
<script src="scripts/jquery-1.11.1.min.js"></script>//can use the jQuery CDN: "http://code.jquery.com/jquery-1.11.0.min.js" 
<script src="tinyNotice/tinyNotice.js"></script>
```


## Usage

1)inline conifg and using
use for fast notice.the below codes show all inline otions;

```html
<script>
	$(function () {
		$.tinyNotice( ["statusTitle"] ,"statusText",["status"],[lifeTime]);
	});
</script>
```
option description :

--------------------------------------------------------------------------------
"statusTitle" : title of notice / type:string / default = ""

"statusText" : notice text / type:string / default = ""

"status" : use One of status [note,warning,success,error,info] / type:string / default = "note"

lifeTime : time of life (ms) / type:number / default = 4000

--------------------------------------------------------------------------------

examples : 
```js
$.tinyNotice("this is a satatus text without status title");//show this text with default config [statusTitle:"",lifeTime:4000,status:note]

$.tinyNotice("notice title","this is a satatus text ");//show this text with default config for lifeTime and status

$.tinyNotice("this is a satatus text without status title" , "warning");//show this text in warning view

$.tinyNotice("notice title","this is a satatus text " , "warning" , 6000);//show this text with full custom config
```


2)optional [json object] conifg and using
```html
<script>
	$(function () {
		$.tinyNotice({options}); 
	});
</script>
```
default options is :
```js
{
statusTitle : "",
statusText : "",
status : "note",
lifeTime : 4000,
setConfirm : false,//hide buttons and show close button on top-left of box to close
accept : function(){ //run when click accept button },
cancel :function(){ //run when click cancel button }
}
```
 to set option.setConfirm you can use 2 options:

boolean : when use "true" show buttons by default topics .default is "false" and buttons are hidden.

array : for exampel => ["ok","no,tanks"] //change topics of accept and cancel buttons.

examples : 
```js
//show info custom text in info view
$.tinyNotice({
          	status : "info",
                statusTitle : "info",
                statusText : "this is a info message!"
              });
              
              
//set a confirm. note : lifeTime don't use in confirm mod (close box button is hidden too)
$.tinyNotice({
          	setConfirm:["ok,i'm ready","no,tanks"], //to use default botton topic writing true 
                statusTitle : "Confirm mod",
                statusText : "custom button topic!"
                accept: function(){
			alert("ok");//run when user click on "ok,i'm ready" button
                },
                cancel: function(){
                        alert("cancel");//run when user click on "no,tanks" button
                }
              });
              
```

 
## destroy
destroy tinyNotice [use for unlimited lifeTime or its expiration lifeTime has not yet].
```js
$.tinyNotice("destroy"); //remove tinyNotice
```
