tinyNotice
==========
JQuery Notification Plugin  for tiny notifications with simple configuration

3 mod are available for use

1> $.tinyNotice("destroy"); //remove tinyNotice

2> $.tinyNotice( ["statusTitle"] ,"statusText",["status"],[lifeTime]);
---------> "statusTitle" : title of notice / string / default = ""
---------> "statusText" : notice text / string / default = ""
---------> "status" : use this [note,warning,success,error,info] / string / default = "note"
---------> lifeTime : time of life (ms) / number / default = 4000

3> $.tinyNotice({options}); 
---------------------------------->default options is :
---------> statusTitle : "",
---------> statusText : "",
---------> status : "note",
---------> lifeTime : 4000,
---------> setConfirm : false,
---------> accept : function(){ //run when click accept button },
---------> cancel :function(){ //run when click cancel button }
