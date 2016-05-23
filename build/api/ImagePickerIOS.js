var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
var _ImagePickerIOS=require('../NativeModules/ImagePickerIOS');var _ImagePickerIOS2=_interopRequireDefault(_ImagePickerIOS);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ImagePickerIOS={
canRecordVideos:function canRecordVideos(callback){
return _ImagePickerIOS2.default.canRecordVideos(callback);},

canUseCamera:function canUseCamera(callback){
return _ImagePickerIOS2.default.canUseCamera(callback);},

openCameraDialog:function openCameraDialog(config,successCallback,cancelCallback){
config=_extends({
videoMode:false},
config);

return _ImagePickerIOS2.default.openCameraDialog(config,successCallback,cancelCallback);},

openSelectDialog:function openSelectDialog(config,successCallback,cancelCallback){
config=_extends({
showImages:true,
showVideos:false},
config);

return _ImagePickerIOS2.default.openSelectDialog(config,successCallback,cancelCallback);}};



module.exports=ImagePickerIOS;