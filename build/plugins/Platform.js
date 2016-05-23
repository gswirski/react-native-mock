/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Utilities/Platform.android.js
 */
var Platform={
OS:'ios',
Version:undefined,

/**
   * Exposed in react-native-mock for testing purposes. Not part of real API.
   */
__setOS:function __setOS(os){
Platform.OS=os;},


/**
   * Exposed in react-native-mock for testing purposes. Not part of real API.
   */
__setVersion:function __setVersion(version){
Platform.Version=version;}};



module.exports=Platform;