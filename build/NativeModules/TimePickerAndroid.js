// TODO(lmr): figure out a good way to toggle between timeSetAction and dismissedAction
var _resolver=function _resolver(){return {action:'timeSetAction',hour:2,minute:30};};
var TimePickerAndroid={
open:function open(options){
var result=_resolver(options)||{action:'dismissedAction'};
return Promise.resolve(result);},


__setResolverFunction:function __setResolverFunction(resolver){
_resolver=resolver;}};