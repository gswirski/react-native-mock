var _jsxFileName='src/components/createMockComponent.js';var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function createMockComponent(displayName){
return _react2.default.createClass({
displayName:displayName,
render:function render(){
return _react2.default.createElement('div',{'data-rn-name':displayName,__source:{fileName:_jsxFileName,lineNumber:7}},this.props.children);}});}




module.exports=createMockComponent;