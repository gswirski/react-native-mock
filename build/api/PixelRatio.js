/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Utilities/PixelRatio.js
 */
var PixelRatio={
get:function get(){
return 2;},

getFontScale:function getFontScale(){
return 2;},

getPixelSizeForLayoutSize:function getPixelSizeForLayoutSize(layoutSize){
return Math.round(layoutSize*PixelRatio.get());},

roundToNearestPixel:function roundToNearestPixel(layoutSize){
var ratio=PixelRatio.get();
return Math.round(layoutSize*ratio)/ratio;},

startDetecting:function startDetecting(){}};




module.exports=PixelRatio;