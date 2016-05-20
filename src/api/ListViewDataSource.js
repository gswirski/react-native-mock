function defaultGetRowData(dataBlob, sectionId, rowId) {
  return dataBlob[sectionId][rowId];
}

function defaultGetSectionHeaderData(dataBlob, sectionId) {
  return dataBlob[sectionId];
}

class ListViewDataSource {
  constructor(params) {
    this._config = {
      rowHasChanged: params.rowHasChanged,
      getRowData: params.getRowData || defaultGetRowData,
      sectionHeaderHasChanged: params.sectionHeaderHasChanged,
      getSectionHeaderData: params.getSectionHeaderData || defaultGetSectionHeaderData,
    };
    this._dataBlob = null;
    this._sectionIds = [];
    this._rowIds = [];
  }

  getRowCount() {

  }

  cloneWithRows(dataBlob, rowIdentities) {
    let rowIds = (rowIdentities) ? [rowIdentities] : null;

    return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
  }

  cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
    var newSource = new ListViewDataSource(this._config);
    newSource._dataBlob = dataBlob;

    if (sectionIdentities) {
      newSource._sectionIds = sectionIdentities;
    } else {
      newSource._sectionIds = Object.keys(dataBlob);
    }

    if (rowIdentities) {
      newSource._rowIds = rowIdentities;
    } else {
      newSource._rowIds= [];
      newSource._sectionIds.forEach((sectionId) => {
        newSource._rowIds.push(Object.keys(dataBlob[sectionId]));
      });
    }

    return newSource;
  }

  getSection(sectionId) {
    return this._config.getSectionHeaderData(this._dataBlob, sectionId);
  }

  getRow(sectionId, rowId) {
    return this._config.getRowData(this._dataBlob, sectionId, rowId);
  }

  getRowIds(sectionId) {
    return this._rowIds[this._sectionIds.indexOf(sectionId)];
  }
}

module.exports = ListViewDataSource;
