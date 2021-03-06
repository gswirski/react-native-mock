var _DeviceEventEmitter=require('../plugins/DeviceEventEmitter');var _DeviceEventEmitter2=_interopRequireDefault(_DeviceEventEmitter);
var _DeviceEventManager=require('../NativeModules/DeviceEventManager');var _DeviceEventManager2=_interopRequireDefault(_DeviceEventManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var DEVICE_BACK_EVENT='hardwareBackPress';

var _backPressSubscriptions=new Set();

_DeviceEventEmitter2.default.addListener(DEVICE_BACK_EVENT,function(){
var invokeDefault=true;
_backPressSubscriptions.forEach(function(subscription){
if(subscription()){
invokeDefault=false;}});


if(invokeDefault){
BackAndroid.exitApp();}});



/**
 * Detect hardware back button presses, and programmatically invoke the default back button
 * functionality to exit the app if there are no listeners or if none of the listeners return true.
 *
 * Example:
 *
 * ```js
 * BackAndroid.addEventListener('hardwareBackPress', function() {
 * 	 if (!this.onMainScreen()) {
 * 	   this.goBack();
 * 	   return true;
 * 	 }
 * 	 return false;
 * });
 * ```
 */
var BackAndroid={

exitApp:function exitApp(){
_DeviceEventManager2.default.invokeDefaultBackPressHandler();},


addEventListener:function addEventListener(eventName,handler){
_backPressSubscriptions.add(handler);
return {
remove:function remove(){return BackAndroid.removeEventListener(eventName,handler);}};},



removeEventListener:function removeEventListener(eventName,handler){
_backPressSubscriptions.delete(handler);}};




module.exports=BackAndroid;