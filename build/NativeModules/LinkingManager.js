var _test=function _test(url){return true;};
var LinkingManger={
openURL:function openURL(url){
return Promise.resolve(true);},

canOpenURL:function canOpenURL(url){
return Promise.resolve(_test(url));},


__setCanOpenURLTest:function __setCanOpenURLTest(test){
_test=test;}};



module.exports=LinkingManger;