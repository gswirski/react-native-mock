var _canRecordVideos=true;
var _canUseCamera=true;

var ImagePickerIOS={
canRecordVideos:function canRecordVideos(callback){
Promise.resolve(_canRecordVideos).then(callback);},

canUseCamera:function canUseCamera(callback){
Promise.resolve(_canUseCamera).then(callback);},

openCameraDialog:function openCameraDialog(config,success,cancel){
// TODO(lmr):
},
openSelectDialog:function openSelectDialog(config,success,cancel){
// TODO(lmr):
}};


module.exports=ImagePickerIOS;