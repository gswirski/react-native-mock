var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /**
 * https://github.com/facebook/react-native/blob/master/Libraries/Network/NetInfo.js
 */
var _Platform=require('../plugins/Platform');var _Platform2=_interopRequireDefault(_Platform);
var _DeviceEventEmitter=require('../plugins/DeviceEventEmitter');var _DeviceEventEmitter2=_interopRequireDefault(_DeviceEventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

//const RCTNetInfo = NativeModules.NetInfo;

var DEVICE_CONNECTIVITY_EVENT='networkStatusDidChange';
var _isConnectedSubscriptions=new Map();
var _subscriptions=new Map();

var isExpensive=false;
var networkInfo={
connected:true};



var NetInfo={
addEventListener:function addEventListener(eventname,handler){
var listener=_DeviceEventEmitter2.default.addListener(
DEVICE_CONNECTIVITY_EVENT,
function(_ref){var network_info=_ref.network_info;return handler(network_info);});

_subscriptions.set(handler,listener);},


removeEventListener:function removeEventListener(eventName,handler){
var listener=_subscriptions.get(handler);
if(!listener){
return;}

listener.remove();
_subscriptions.delete(handler);},


fetch:function fetch(){
return Promise.resolve(networkInfo);},


isConnected:{
addEventListener:function addEventListener(eventname,handler){},



removeEventListener:function removeEventListener(eventName,handler){},


fetch:function fetch(){
return NetInfo.fetch().then(function(info){return info.connected;});}},



isConnectionExpensive:function isConnectionExpensive(callback){
if(_Platform2.default.OS==='android'){
callback(isExpensive);}else 
{
callback(null,'Unsupported');}},



// TODO(lmr): figure out a good way to expose setters here.
__setNetworkInfo:function __setNetworkInfo(info){
networkInfo=info;},

__setIsConnectionExpensive:function __setIsConnectionExpensive(expensive){
isExpensive=expensive;},

__setIsConnected:function __setIsConnected(connected){
networkInfo=_extends({},networkInfo,{connected:connected});}};



module.exports=NetInfo;