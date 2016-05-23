var _NativeAppEventEmitter=require('../plugins/NativeAppEventEmitter');var _NativeAppEventEmitter2=_interopRequireDefault(_NativeAppEventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TestModule={
verifySnapshot:function verifySnapshot(callback){
Promise.resolve().then(function(){return callback(true);});},

sendAppEvent:function sendAppEvent(name,body){
_NativeAppEventEmitter2.default.emit(name,body);},

shouldResolve:function shouldResolve(){
return Promise.resolve(1);},

shouldReject:function shouldReject(){
return Promise.reject(null);},

markTestCompleted:function markTestCompleted(){},


markTestPassed:function markTestPassed(success){}};




module.exports=TestModule;