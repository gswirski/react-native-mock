var 
UIManager={
removeSubviewsFromContainerWithID:function removeSubviewsFromContainerWithID(containerId){},


removeRootView:function removeRootView(rootReactTag){},


replaceExistingNonRootView:function replaceExistingNonRootView(reactTag,newReactTag){},


setChildren:function setChildren(containerTag,reactTags){},


manageChildren:function manageChildren(
containerReactTag,
moveFromIndices,
moveToIndices,
addChildReactTags,
addAtIndices,
removeAtIndices)
{},


createView:function createView(reactTag,viewName,rootTag,props){},


updateView:function updateView(reactTag,viewName,props){},


focus:function focus(reactTag){},


blur:function blur(reactTag){},


findSubviewIn:function findSubviewIn(reactTag,atPoint,callback){},


dispatchViewManagerCommand:function dispatchViewManagerCommand(reactTag,commandID,commandArgs){},


measure:function measure(reactTag,callback){},


measureLayout:function measureLayout(reactTag,relativeTo,errorCallback,callback){},


measureLayoutRelativeToParent:function measureLayoutRelativeToParent(reactTag,errorCallback,callback){},


measureViewsInRect:function measureViewsInRect(rect,parentView,errorCallback,callback){},


setJSResponder:function setJSResponder(reactTag,blockNativeResponder){},


clearJSResponder:function clearJSResponder(){},


configureNextLayoutAnimation:function configureNextLayoutAnimation(callback,errorCallback){}};




module.exports=UIManager;