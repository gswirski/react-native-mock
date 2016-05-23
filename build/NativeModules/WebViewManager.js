var 
WebViewManager={
goBack:function goBack(reactTag){},


goForward:function goForward(reactTag){},


reload:function reload(reactTag){},


startLoadWithResult:function startLoadWithResult(result,lockIdentifier){},


JSNavigationScheme:'react-js-navigation',
NavigationType:{
LinkClicked:0,
FormSubmitted:1,
BackForward:2,
Reload:3,
FormResubmitted:4,
Other:5}};



module.exports=WebViewManager;