var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function defaultGetRowData(dataBlob,sectionId,rowId){
return dataBlob[sectionId][rowId];}


function defaultGetSectionHeaderData(dataBlob,sectionId){
return dataBlob[sectionId];}var 


ListViewDataSource=function(){
function ListViewDataSource(params){_classCallCheck(this,ListViewDataSource);
this._config={
rowHasChanged:params.rowHasChanged,
getRowData:params.getRowData||defaultGetRowData,
sectionHeaderHasChanged:params.sectionHeaderHasChanged,
getSectionHeaderData:params.getSectionHeaderData||defaultGetSectionHeaderData};

this._dataBlob=null;
this._sectionIds=[];
this._rowIds=[];}_createClass(ListViewDataSource,[{key:'getRowCount',value:function getRowCount()


{}},{key:'cloneWithRows',value:function cloneWithRows(



dataBlob,rowIdentities){
var rowIds=rowIdentities?[rowIdentities]:null;

return this.cloneWithRowsAndSections({s1:dataBlob},['s1'],rowIds);}},{key:'cloneWithRowsAndSections',value:function cloneWithRowsAndSections(


dataBlob,sectionIdentities,rowIdentities){
var newSource=new ListViewDataSource(this._config);
newSource._dataBlob=dataBlob;

if(sectionIdentities){
newSource._sectionIds=sectionIdentities;}else 
{
newSource._sectionIds=Object.keys(dataBlob);}


if(rowIdentities){
newSource._rowIds=rowIdentities;}else 
{
newSource._rowIds=[];
newSource._sectionIds.forEach(function(sectionId){
newSource._rowIds.push(Object.keys(dataBlob[sectionId]));});}



return newSource;}},{key:'getSection',value:function getSection(


sectionId){
return this._config.getSectionHeaderData(this._dataBlob,sectionId);}},{key:'getRow',value:function getRow(


sectionId,rowId){
return this._config.getRowData(this._dataBlob,sectionId,rowId);}},{key:'getRowIds',value:function getRowIds(


sectionId){
return this._rowIds[this._sectionIds.indexOf(sectionId)];}}]);return ListViewDataSource;}();



module.exports=ListViewDataSource;