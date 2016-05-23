var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var 
Path=function(){
function Path(path){_classCallCheck(this,Path);
this.path=path||[];}_createClass(Path,[{key:"move",value:function move()

{
return this;}},{key:"moveTo",value:function moveTo()

{
return this;}},{key:"line",value:function line()

{
return this;}},{key:"close",value:function close()

{
return this;}},{key:"toJSON",value:function toJSON()

{
return JSON.stringify(this.path);}}]);return Path;}();



module.exports=Path;