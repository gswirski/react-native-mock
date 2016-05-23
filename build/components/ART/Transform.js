var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var 
Transform=function(){
function Transform(){_classCallCheck(this,Transform);
this.xx=0;
this.yx=0;
this.xy=0;
this.yy=0;
this.x=0;
this.y=0;}_createClass(Transform,[{key:"transformTo",value:function transformTo()

{
return this;}},{key:"move",value:function move()

{
return this;}},{key:"rotate",value:function rotate()

{
return this;}},{key:"scale",value:function scale()

{
return this;}},{key:"transform",value:function transform()

{
return this;}}]);return Transform;}();



module.exports=Transform;