var _style={};
var _hidden=false;
var _networkActivityIndicatorVisible=true;

var StatusBarIOS={

setStyle:function setStyle(style,animated){
_style=style;},


setHidden:function setHidden(hidden,animation){
_hidden=hidden;},


setNetworkActivityIndicatorVisible:function setNetworkActivityIndicatorVisible(visible){
_networkActivityIndicatorVisible=visible;},


__getStyle:function __getStyle(){
return _style;},


__getHidden:function __getHidden(){
return _hidden;},


__getNetworkActivityIndicatorVisible:function __getNetworkActivityIndicatorVisible(){
return _networkActivityIndicatorVisible;}};



module.exports=StatusBarIOS;