# tinyNotice
JQuery alert and confirm plugin.in use like Java Script alert() and confirm() fast and simple and in vision is like new modern template.
tinyNotice V2.0.0 : use SCSS to create theme and change all structures and fix bugs.


## Getting Started
```html
<link rel="stylesheet" href="tinyNotice/tinyNotice-theme.css">
<script src="jquery-1.11.3.min.js"></script>
<script src="tinyNotice/tinyNotice.js"></script>
```


## Usage ##
can config tinyNotice with inline option or object option for alert mod and for config confirm mod use object option.

### 1) inline option ###

- statusTitle : title of notice. type is string. default = ""
- statusText  : notice text. type is string. default = ""
- status : One of these (note , warning , success , error , info). type is string. default = "note"
- ifeTime : time per ms. type is number. default = 4000

structure :
```html
<script>
    $.tinyNotice( [statusTitle] ,statusText,[status],[lifeTime]);
</script>
```

examples :
```js
$.tinyNotice("this is a satatus text without status title");
```
```js
$.tinyNotice("sample title","sample satatus text ");
```
```js
$.tinyNotice("this is a satatus text without status title" , "warning");
```
```js
$.tinyNotice("notice title","this is a satatus text " , "warning" , 6000);
```
--------------------------------------------------------------------------------

### 2) object option ###

structure :
```html
<script>
    //default options
    var option = {
                 statusTitle : "",
                 statusText : "",
                 status : "note",
                 lifeTime : 4000,
                 setConfirm : false,
                 accept : function(){ //run when click accept button },
                 cancel :function(){  //run when click cancel button }
                 callback:function(){ //run when close or expiration lifeTime}
                }
    $.tinyNotice(options);
</script>
```

#### 2-1) confirm mod ####
 if set option.setConfirm true or "en" or "fa" or {ok:"..." , cancel:".."} tinyNotice swith to confrim mod.

examples :
```js
//default english button title
$.tinyNotice({
            setConfirm: "en",
            statusTitle: "Confirm mod",
            statusText: "default button topic!"
        });
```
```js
//default persian button title
 $.tinyNotice({
            setConfirm: "fa",
            statusTitle: "عنوان",
            statusText: "داده های جدید ثبت شوند ؟"
        });
```
```js
//custom button title
$.tinyNotice({
            setConfirm: {ok: "ok,i'm ready", cancel: "no,tanks"},
            statusTitle: "Confirm mod",
            statusText: "custom button topic!"
        });
```

#### 2-1-1) confirm events ####
examples :
```js
//default english button title
$.tinyNotice({
    statusTitle: "Confirm mod",
    statusText: "default button topic!",
    setConfirm: "en",
    accept: function () {
        alert("ok");
    },
    cancel: function () {
        alert("cancel");
    }
});

```

#### 2-2) status ####
examples : 
```js
$.tinyNotice({
          	    status : "info", // note , warning , success , error , info
                statusTitle : "info",
                statusText : "this is a info message!"
              });
```

#### 2-3) callback ####
examples :
```js
//custom button title
$.tinyNotice({
            callback: function () {
                alert("closed!");
            }
            statusTitle: "Confirm mod",
            statusText: "custom button topic!"
        });
```

### 3) close [event] ###
```js
$.tinyNotice("close");
```

## License ##
Copyright (c) 2014 mohammad ebrahimi aval (http://ebrahimiaval.ir)

Licensed under the [MIT license][mit].
[mit]: http://www.opensource.org/licenses/mit-license.php
