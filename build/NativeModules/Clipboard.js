/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Clipboard/Clipboard.js
 */
var _content=null;

var Clipboard={
getString:function getString(){
return Promise.resolve(_content);},


setString:function setString(content){
_content=content;}};



module.exports=Clipboard;