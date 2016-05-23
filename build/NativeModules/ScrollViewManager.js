var 
ScrollViewManager={
getContentSize:function getContentSize(reactTag,callback){
Promise.resolve().then(function(){return callback({
width:20,
height:20});});},


calculateChildFrames:function calculateChildFrames(reactTag,callback){
Promise.resolve().then(function(){return callback({
// TODO(lmr):
});});},

endRefreshing:function endRefreshing(reactTag){},


scrollTo:function scrollTo(reactTag,offset,animated){},


zoomToRect:function zoomToRect(reactTag,rect,animated){},


DecelerationRate:{
normal:0,
fast:1}};



module.exports=ScrollViewManager;