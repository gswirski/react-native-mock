var _keymirror=require('keymirror');var _keymirror2=_interopRequireDefault(_keymirror);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _require=

require('events');var EventEmitter=_require.EventEmitter;

var _emitter=new EventEmitter();

var _nextUpdateHandle=0;
var _inc=0;
var _deadline=-1;

var InteractionManager={
Events:(0,_keymirror2.default)({
interactionStart:true,
interactionComplete:true}),


/**
   * Schedule a function to run after all interactions have completed.
   */
runAfterInteractions:function runAfterInteractions(task){
return new Promise(function(resolve){
// TODO(lmr):
// _scheduleUpdate();
//if (task) {
//  _taskQueue.enqueue(task);
//}
//const name = task && task.name || '?';
//_taskQueue.enqueue({ run: resolve, name: 'resolve ' + name });
});},


/**
   * Notify manager that an interaction has started.
   */
createInteractionHandle:function createInteractionHandle(){
// TODO(lmr):
// _scheduleUpdate();
var handle=++_inc;
//_addInteractionSet.add(handle);
return handle;},


/**
   * Notify manager that an interaction has completed.
   */
clearInteractionHandle:function clearInteractionHandle(handle){
(0,_invariant2.default)(
!!handle,
'Must provide a handle to clear.');

// TODO(lmr):
// _scheduleUpdate();
//_addInteractionSet.delete(handle);
//_deleteInteractionSet.add(handle);
},

addListener:_emitter.addListener.bind(_emitter),

/**
   * A positive number will use setTimeout to schedule any tasks after the
   * eventLoopRunningTime hits the deadline value, otherwise all tasks will be
   * executed in one setImmediate batch (default).
   */
setDeadline:function setDeadline(deadline){
_deadline=deadline;}};