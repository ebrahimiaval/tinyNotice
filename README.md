# tinyNotice

JQuery Notification Plugin  for tiny notifications with simple configuration

## Getting Started

1)inline conifg and using

```html
<script>
	$(function () {
		$.tinyNotice( ["statusTitle"] ,"statusText",["status"],[lifeTime]);
	});
</script>
```

"statusTitle" : title of notice / string / default = ""

"statusText" : notice text / string / default = ""

"status" : use this [note,warning,success,error,info] / string / default = "note"

lifeTime : time of life (ms) / number / default = 4000


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
```html
 to set option.setConfirm you can use 2 options:
 1- boolean : if "true" show buttons by default topics .default is "false" and buttons are hidden;
 2-array : for exampel : ["ok","no,tanks"] //change topics of accept and cancel buttons 
 ```
 
3)destroy existing box
$.tinyNotice("destroy"); //remove tinyNotice
