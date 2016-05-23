var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _DeviceEventEmitter=require('../plugins/DeviceEventEmitter');var _DeviceEventEmitter2=_interopRequireDefault(_DeviceEventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var subscriptions=[];

var Settings={
_settings:{},

get:function get(key){
return this._settings[key];},


set:function set(settings){
this._settings=_extends(this._settings,settings);},


watchKeys:function watchKeys(keys,callback){
if(typeof keys==='string'){
keys=[keys];}


(0,_invariant2.default)(
Array.isArray(keys),
'keys should be a string or array of strings');


var sid=subscriptions.length;
subscriptions.push({keys:keys,callback:callback});
return sid;},


clearWatch:function clearWatch(watchId){
if(watchId<subscriptions.length){
subscriptions[watchId]={
keys:[],
callback:null};}},




_sendObservations:function _sendObservations(body){var _this=this;
Object.keys(body).forEach(function(key){
var newValue=body[key];
var didChange=_this._settings[key]!==newValue;
_this._settings[key]=newValue;

if(didChange){
subscriptions.forEach(function(sub){
if(sub.keys.indexOf(key)!==-1&&sub.callback){
sub.callback();}});}});},






__emulateDeviceSettingsChange:function __emulateDeviceSettingsChange(settings){
_DeviceEventEmitter2.default.emit('settingsUpdated',settings);}};



_DeviceEventEmitter2.default.addListener(
'settingsUpdated',
Settings._sendObservations.bind(Settings));


module.exports=Settings;