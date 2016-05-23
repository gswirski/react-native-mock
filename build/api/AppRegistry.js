/**
 * https://github.com/facebook/react-native/blob/master/Libraries/AppRegistry/AppRegistry.js
 */
var runnables={};

var AppRegistry={
registerConfig:function registerConfig(configs){},



registerComponent:function registerComponent(appKey,getComponentFunc){
return appKey;},


registerRunnable:function registerRunnable(appKey,func){
runnables[appKey]={run:func};
return appKey;},


getAppKeys:function getAppKeys(){
return Object.keys(runnables);},


runApplication:function runApplication(appKey,appParameters){},



unmountApplicationComponentAtRootTag:function unmountApplicationComponentAtRootTag(rootTag){}};




module.exports=AppRegistry;