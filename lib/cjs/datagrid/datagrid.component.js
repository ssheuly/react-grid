'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp, _initialiseProps; /* eslint-disable no-lonely-if, prefer-template, react/require-default-props */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _fixedDataTable = require('fixed-data-table-2');

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

var _reactDatetime = require('@opuscapita/react-datetime');

var _reactIcons = require('@opuscapita/react-icons');

var _reactSpinner = require('@opuscapita/react-spinner');

require('fixed-data-table-2/dist/fixed-data-table.css');

var _responsiveFixedDataTable = require('./responsive-fixed-data-table.component');

var _responsiveFixedDataTable2 = _interopRequireDefault(_responsiveFixedDataTable);

var _headerCell = require('./header-cell.component');

var _headerCell2 = _interopRequireDefault(_headerCell);

var _actionBar = require('./action-bar.component');

var _actionBar2 = _interopRequireDefault(_actionBar);

var _inlineEditControls = require('./inline-edit-controls.component');

var _inlineEditControls2 = _interopRequireDefault(_inlineEditControls);

var _filteringControls = require('./filtering-controls.component');

var _filteringControls2 = _interopRequireDefault(_filteringControls);

var _dropdownControls = require('./dropdown-controls.component');

var _dropdownControls2 = _interopRequireDefault(_dropdownControls);

var _datagrid = require('./datagrid.actions');

var datagridActions = _interopRequireWildcard(_datagrid);

var _cellTooltip = require('./cell-tooltip.component');

var _cellTooltip2 = _interopRequireDefault(_cellTooltip);

var _columnSettings = require('./column-settings/column-settings.component');

var _columnSettings2 = _interopRequireDefault(_columnSettings);

var _datagrid2 = require('./datagrid.props');

var _datagrid3 = require('./datagrid.constants');

var _datagrid4 = require('./datagrid.utils');

var _datagrid5 = _interopRequireDefault(_datagrid4);

require('./datagrid.component.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var GRID = ownProps.grid;
  return {
    isBusy: state.datagrid.getIn([GRID.id, 'session', 'isBusy'], true),
    isEditing: state.datagrid.getIn([GRID.id, 'session', 'isEditing'], false),
    isCreating: state.datagrid.getIn([GRID.id, 'session', 'isCreating'], false),
    isFiltering: state.datagrid.getIn([GRID.id, 'config', 'filteringData', 'isFiltering'], false),
    isColumnSettingsModalOpen: state.datagrid.getIn([GRID.id, 'session', 'columnSettingsModal', 'open'], false),
    sortColumn: state.datagrid.getIn([GRID.id, 'config', 'sortingData', 'sortColumn'], null),
    sortOrder: state.datagrid.getIn([GRID.id, 'config', 'sortingData', 'sortOrder'], null),
    visibleColumns: state.datagrid.getIn([GRID.id, 'config', 'visibleColumns'], (0, _immutable.List)()),
    columnWidths: state.datagrid.getIn([GRID.id, 'config', 'columnWidths'], (0, _immutable.Map)()),
    selectedCell: state.datagrid.getIn([GRID.id, 'selectedCell'], (0, _immutable.Map)()),
    selectedItems: state.datagrid.getIn([GRID.id, 'selectedItems'], (0, _immutable.List)()),
    data: state.datagrid.getIn([GRID.id, 'data'], (0, _immutable.List)()),
    editData: state.datagrid.getIn([GRID.id, 'editData'], (0, _immutable.Map)()),
    createData: state.datagrid.getIn([GRID.id, 'createData'], (0, _immutable.List)()),
    filterData: state.datagrid.getIn([GRID.id, 'config', 'filteringData', 'filterData'], (0, _immutable.Map)()),
    cellMessages: state.datagrid.getIn([GRID.id, 'cellMessages'], (0, _immutable.Map)()),
    createCellMessages: state.datagrid.getIn([GRID.id, 'createCellMessages'], (0, _immutable.Map)()),
    allDataSize: state.datagrid.getIn([GRID.id, 'allData'], (0, _immutable.List)()).size,
    language: _datagrid5.default.getLanguage(GRID, state.user),
    dateFormat: _datagrid5.default.getDateFormat(GRID, state.user),
    thousandSeparator: _datagrid5.default.getThousandSeparator(GRID, state.user),
    decimalSeparator: _datagrid5.default.getDecimalSeparator(GRID, state.user)
  };
};

var mapDispatchToProps = datagridActions;

var DataGrid = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactIntl.injectIntl)(_class = _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(DataGrid, _React$PureComponent);

  function DataGrid(props) {
    _classCallCheck(this, DataGrid);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.state = { currentRow: 0, currentColumn: 0 };
    _this.cellRefs = {};
    _this.focusToCreateCell = false;
    _this.focusToEditCell = false; // TODO: Handle focusing when true
    _this.focusToErrorCell = false; // TODO: Handle focusing when true
    return _this;
  }

  DataGrid.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.invalidate(this.props.grid);
  };

  // checker for selectionCheckbox
  DataGrid.prototype.isSelectionCheckbox = function isSelectionCheckbox(cellProps) {
    var expectedColumnKey = 'selectionCheckbox';
    return this.props.rowSelectCheckboxColumn && cellProps.columnKey === expectedColumnKey;
  };

  DataGrid.prototype.render = function render() {
    var gridClassName = (0, _classnames2.default)({
      'oc-datagrid-container': true,
      'with-actionbar': this.props.inlineEdit && !this.props.disableActionBar,
      'is-busy': this.props.isBusy,
      'is-editing': this.props.isEditing,
      'is-creating': this.props.isCreating
    });
    var actionBar = null;
    var actionBarRight = null;
    var actionBarLeft = null;
    if ((this.props.actionBar || this.props.inlineEdit || this.props.filtering || this.props.removing) && !this.props.disableActionBar) {
      actionBarRight = _react2.default.createElement(
        _actionBar2.default,
        { position: 'right' },
        _react2.default.createElement(
          'div',
          { className: 'oc-datagrid-actionbar-right' },
          this.props.actionBar
        ),
        this.props.filtering && this.props.disableDropdown && !this.props.disableFilteringControls && _react2.default.createElement(_filteringControls2.default, this.props),
        this.props.inlineEdit && _react2.default.createElement(_inlineEditControls2.default, _extends({
          afterAddItem: this.handleAfterAddItem,
          afterEditPress: this.handleAfterEditPress,
          afterValidationError: this.handleAfterValidationError
        }, this.props)),
        (this.props.dropdownMenuItems || this.props.removing || this.props.columnSettings || this.props.filtering && !this.props.disableDropdown) && _react2.default.createElement(_dropdownControls2.default, this.props)
      );
    }
    if (this.props.actionBarLeft || this.props.gridHeader) {
      actionBarLeft = _react2.default.createElement(
        _actionBar2.default,
        { position: 'left' },
        _react2.default.createElement(
          'div',
          { className: 'oc-datagrid-gridheader' },
          this.props.gridHeader
        ),
        _react2.default.createElement(
          'div',
          { className: 'oc-datagrid-actionbar-left' },
          this.props.actionBarLeft
        )
      );
    }
    if (actionBarLeft || actionBarRight) {
      actionBar = _react2.default.createElement(
        'div',
        { className: 'oc-datagrid-actionbar-container' },
        actionBarLeft,
        actionBarRight
      );
    }
    var rowsCount = this.props.rowsCount || this.props.rowsCount === 0 ? this.props.rowsCount : this.props.data.size;
    if (this.props.isCreating) rowsCount += this.props.createData.size;
    if (!this.props.visibleColumns.size) rowsCount = 0;
    return _react2.default.createElement(
      'div',
      {
        id: 'oc-datagrid-' + this.props.grid.id,
        className: gridClassName,
        style: this.props.containerStyle
      },
      this.props.isBusy && _react2.default.createElement(_reactSpinner.Spinner, null),
      actionBar,
      _react2.default.createElement(
        _responsiveFixedDataTable2.default,
        {
          id: this.props.grid.id,
          rowsCount: rowsCount,
          headerHeight: this.props.isFiltering ? this.props.headerHeight + this.props.filterRowHeight : this.props.headerHeight,
          rowHeight: this.props.rowHeight,
          onColumnResizeEndCallback: this.onColumnResizeEndCallback,
          isColumnResizing: false,
          onRowClick: this.handleRowClick,
          scrollToColumn: this.props.scrollToColumn || this.state.currentColumn,
          scrollTop: this.props.scrollTop,
          scrollToRow: this.getScrollToRow(),
          onRowDoubleClick: this.props.onRowDoubleClick,
          onRowMouseDown: this.props.onRowMouseDown,
          onRowMouseEnter: this.props.onRowMouseEnter,
          onRowMouseLeave: this.props.onRowMouseLeave,
          onScrollStart: this.props.onScrollStart,
          onScrollEnd: this.props.onScrollEnd,
          rowClassNameGetter: this.getRowClassName,
          rowHeightGetter: this.props.rowHeightGetter,
          onContentHeightChange: this.props.onContentHeightChange
        },
        this.renderColumns()
      ),
      this.props.isColumnSettingsModalOpen && _react2.default.createElement(_columnSettings2.default, {
        grid: this.props.grid,
        columns: this.props.columns,
        visibleColumns: this.props.visibleColumns,
        closeColumnSettingsModal: this.props.closeColumnSettingsModal,
        saveColumnSettings: this.props.saveColumnSettings
      }),
      this.props.children
    );
  };

  return DataGrid;
}(_react2.default.PureComponent), _class2.defaultProps = _datagrid2.defaultProps, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onColumnResizeEndCallback = function (newColumnWidth, columnKey) {
    _this2.props.resizeColumn(_this2.props.grid, columnKey, newColumnWidth);
  };

  this.onCreateCellKeyDown = function (e) {
    if (e.keyCode === _datagrid3.KEY_CODES.ENTER) {
      _this2.props.addNewItem(_this2.props.grid, _datagrid5.default.getColumnDefaultValues(_this2.props.columns));
      _this2.focusToCreateCell = true;
    }
  };

  this.onEditCellKeyDown = function (col, rowIndex) {
    return function (e) {
      if (_this2.props.enableArrowNavigation) {
        var columns = _this2.props.columns;

        var rowsSize = _this2.props.data.size;
        var columnKey = _datagrid5.default.getColumnKey(col);
        switch (e.keyCode) {
          case _datagrid3.KEY_CODES.DOWN:
            {
              if (col.valueType !== 'number') {
                var nextElement = _this2.cellRefs[_this2.props.grid.id + '_' + columnKey + '_' + (rowIndex + 1)];
                _this2.moveCellFocus(nextElement, rowIndex + 1, -1);
              }
              break;
            }
          case _datagrid3.KEY_CODES.UP:
            {
              if (col.valueType !== 'number') {
                var _nextElement = _this2.cellRefs[_this2.props.grid.id + '_' + columnKey + '_' + (rowIndex - 1)];
                _this2.moveCellFocus(_nextElement, rowIndex - 1, -1);
              }
              break;
            }
          case _datagrid3.KEY_CODES.TAB:
          case _datagrid3.KEY_CODES.RIGHT:
          case _datagrid3.KEY_CODES.LEFT:
            {
              e.preventDefault();
              var columnInd = columns.findIndex(function (c) {
                return c.valueKeyPath.join() === columnKey;
              });
              if (columnInd !== -1) {
                var disabled = true;
                var _nextElement2 = null;
                var rowInd = rowIndex;
                while (disabled) {
                  if (e.keyCode === _datagrid3.KEY_CODES.LEFT || e.keyCode === _datagrid3.KEY_CODES.TAB && e.shiftKey) {
                    if (columnInd - 1 >= 0) {
                      columnInd -= 1;
                    } else if (rowInd - 1 >= 0) {
                      columnInd = columns.length - 1;
                      rowInd -= 1;
                    } else {
                      break;
                    }
                  } else {
                    if (columnInd + 1 < columns.length) {
                      columnInd += 1;
                    } else if (rowInd + 1 < rowsSize) {
                      columnInd = 0;
                      rowInd += 1;
                    } else {
                      break;
                    }
                  }
                  var nextColumnKey = _datagrid5.default.getColumnKey(columns[columnInd]);
                  _nextElement2 = _this2.cellRefs[_this2.props.grid.id + '_' + nextColumnKey + '_' + rowInd];
                  disabled = _nextElement2 ? _nextElement2.disabled : false;
                }
                if (!disabled && _nextElement2) {
                  _this2.moveCellFocus(_nextElement2, rowInd, columnInd);
                }
              }
              break;
            }
          default:
            break;
        }
      }
    };
  };

  this.onFilterCellValueChange = function (col, valueParser) {
    return function (eventOrData) {
      var rawValue = void 0;
      // eventOrData can be input onChange event, react-select onChange or react-day-picker onChange
      if (eventOrData) {
        if (eventOrData.target !== undefined) rawValue = eventOrData.target.value;else if (eventOrData.value !== undefined) rawValue = eventOrData.value;else rawValue = eventOrData;
      }
      var value = valueParser(rawValue);
      _this2.props.filterCellValueChange(_this2.props.grid, _this2.props.columns, col, value);
    };
  };

  this.onCreateCellValueChange = function (rowIndex, col, valueParser) {
    return function (eventOrData) {
      var rawValue = void 0;
      // eventOrData can be input onChange event, react-select onChange or react-day-picker onChange
      if (eventOrData) {
        if (eventOrData.target !== undefined) rawValue = eventOrData.target.value;else if (eventOrData.value !== undefined) rawValue = eventOrData.value;else rawValue = eventOrData;
      }
      var value = valueParser(rawValue);
      _this2.props.createCellValueChange(_this2.props.grid, rowIndex, col.valueKeyPath, value);
      if (col.onCreateValueChange) {
        col.onCreateValueChange(value, col.valueKeyPath, rowIndex);
      }
      if (col.onValueMatchChangeValue && value === col.onValueMatchChangeValue.matchValue) {
        // Call special paired value change on other cell if value matches
        _this2.onCreateCellValueChange(rowIndex, { valueKeyPath: col.onValueMatchChangeValue.newValueKeyPath }, function (v) {
          return v;
        })(col.onValueMatchChangeValue.newValue);
      }
      if (col.validators) {
        _this2.props.createCellValueValidate(_this2.props.grid, rowIndex, col.valueKeyPath, value, col.validators);
      }
    };
  };

  this.onEditCellValueChange = function (rowIndex, col, valueParser) {
    return function (eventOrData) {
      var dataId = _this2.getDataIdByRowIndex(rowIndex);
      var rawValue = void 0;
      // eventOrData can be input onChange event, react-select onChange or react-day-picker onChange
      if (eventOrData) {
        if (eventOrData.target !== undefined) rawValue = eventOrData.target.value;else if (eventOrData.value !== undefined) rawValue = eventOrData.value;else rawValue = eventOrData;
      }
      var value = valueParser(rawValue);
      _this2.props.editCellValueChange(_this2.props.grid, dataId, col.valueKeyPath, value);
      if (col.onEditValueChange) {
        col.onEditValueChange(value, col.valueKeyPath, rowIndex, dataId);
      }
      if (col.onValueMatchChangeValue && value === col.onValueMatchChangeValue.matchValue) {
        // Call special paired value change on other cell if value matches
        _this2.onEditCellValueChange(rowIndex, { valueKeyPath: col.onValueMatchChangeValue.newValueKeyPath }, function (v) {
          return v;
        })(col.onValueMatchChangeValue.newValue);
      }
      if (col.validators) {
        _this2.props.editCellValueValidate(_this2.props.grid, dataId, col.valueKeyPath, value, col.validators);
      }
    };
  };

  this.onCreateCellBlur = function (rowIndex, col, valueParser) {
    return function (e) {
      if (col.onCreateBlur) {
        var value = e && e.target && e.target.value !== undefined ? e.target.value : _this2.getEditItemValue(rowIndex, col);
        if (valueParser !== undefined) {
          value = valueParser(value);
        }
        col.onCreateBlur(value, rowIndex);
      }
    };
  };

  this.onEditCellBlur = function (rowIndex, col, valueParser) {
    return function (e) {
      if (col.onEditBlur) {
        var value = e && e.target && e.target.value !== undefined ? e.target.value : _this2.getEditItemValue(rowIndex, col);
        if (valueParser !== undefined) {
          value = valueParser(value);
        }
        var dataId = _this2.getDataIdByRowIndex(rowIndex);
        col.onEditBlur(value, rowIndex, dataId);
      }
    };
  };

  this.onCellFocus = function (cellType, inputType, rowIndex, columnKey) {
    return function (e) {
      if (inputType === 'number') {
        e.target.select();
      }
      if (cellType === 'edit' && _this2.props.cellSelect) {
        _this2.props.cellSelectionChange(_this2.props.grid, (0, _immutable.Map)({ rowIndex: rowIndex, columnKey: columnKey }));
      }
    };
  };

  this.getDataIdByRowIndex = function (rowIndex) {
    return _this2.props.data.getIn([rowIndex].concat(_this2.props.grid.idKeyPath));
  };

  this.getSelectedItemIndex = function (id) {
    if (!id) return undefined;
    var index = _this2.props.data.findIndex(function (v) {
      return v.getIn(_this2.props.grid.idKeyPath) === id;
    });
    return index === -1 ? undefined : index;
  };

  this.getEditItemValue = function (rowIndex, col) {
    // Get the value to display in edit cell
    var id = _this2.getDataIdByRowIndex(rowIndex);
    var editValue = _this2.props.editData.getIn([id].concat(col.valueKeyPath), undefined);
    var originalValue = void 0;
    if (editValue === undefined) {
      originalValue = _this2.props.data.getIn([rowIndex].concat(col.valueKeyPath), '');
    } else if (editValue === null) {
      return '';
    } else {
      return editValue;
    }
    if (originalValue === null || originalValue === undefined || originalValue === '') {
      return '';
    }
    // Special formatting by component type
    if (col.componentType === 'date') {
      if ((0, _moment2.default)(originalValue, _this2.props.dateFormat, true).isValid()) {
        return _moment2.default.utc(originalValue, _this2.props.dateFormat).format(_this2.props.dateFormat);
      }
      if ((0, _moment2.default)(originalValue).isValid()) {
        return _moment2.default.utc(originalValue).format(_this2.props.dateFormat);
      }
      return '';
    } else if (col.componentType === 'float' && String(originalValue).length > 0) {
      return String(originalValue).replace('.', _this2.props.decimalSeparator);
    }
    return originalValue;
  };

  this.getCreateItemValue = function (rowIndex, col) {
    var val = _this2.props.createData.getIn([rowIndex].concat(col.valueKeyPath), '');
    if (val === null) {
      return '';
    }
    return val;
  };

  this.getFilterItemValue = function (col) {
    var val = _this2.props.filterData.get(_datagrid5.default.getColumnKey(col), '');
    if (val === null) {
      return '';
    }
    return val;
  };

  this.getComponentDisabledState = function (rowIndex, col, mode) {
    var componentDisabled = !!col.disableEditing;
    // check if component is disabled by other column data
    if (!componentDisabled && col.disableEditingOnValueMatch) {
      if (mode === 'create') {
        componentDisabled = _this2.getCreateItemValue(rowIndex, { valueKeyPath: col.disableEditingOnValueMatch.matchValueKeyPath }) === col.disableEditingOnValueMatch.matchValue;
      } else {
        componentDisabled = _this2.getEditItemValue(rowIndex, { valueKeyPath: col.disableEditingOnValueMatch.matchValueKeyPath }) === col.disableEditingOnValueMatch.matchValue;
      }
    }
    return componentDisabled;
  };

  this.getRowClassName = function (rowIndex) {
    var _props = _this2.props,
        grid = _props.grid,
        isCreating = _props.isCreating,
        isEditing = _props.isEditing,
        createData = _props.createData,
        selectedItems = _props.selectedItems,
        data = _props.data;

    var rowClassNames = ['oc-datagrid-row'];
    var extraRowCount = 0; // how many rows to ignore from top, new + filter rows
    if (isCreating) extraRowCount = createData.size;
    if (isCreating) {
      if (rowIndex <= extraRowCount - 1) {
        rowClassNames.push('oc-datagrid-row-new');
      }
    } else if (isEditing) {
      rowClassNames.push('oc-datagrid-row-edit');
    }

    // check if row is selected
    if (!isCreating && !isEditing && selectedItems && grid.idKeyPath) {
      if (selectedItems.indexOf(data.getIn([rowIndex - extraRowCount].concat(grid.idKeyPath))) !== -1) {
        rowClassNames.push('is-selected');
      }
    }

    if (_this2.props.rowClassNameGetter) {
      return rowClassNames.join(' ') + ' ' + _this2.props.rowClassNameGetter(rowIndex);
    }
    return rowClassNames.join(' ');
  };

  this.getCellMessages = function (rowIndex, col, cellType) {
    var returnData = {};
    if (!_this2.props.grid.idKeyPath || !col.valueKeyPath) {
      return returnData;
    }
    var infoMessage = void 0;
    var errorMessage = void 0;
    var warningMessage = void 0;
    if (cellType === 'create') {
      infoMessage = _this2.props.createCellMessages.getIn(['info', rowIndex].concat(col.valueKeyPath));
      errorMessage = _this2.props.createCellMessages.getIn(['error', rowIndex].concat(col.valueKeyPath));
      warningMessage = _this2.props.createCellMessages.getIn(['warning', rowIndex].concat(col.valueKeyPath));
    } else {
      var id = _this2.getDataIdByRowIndex(rowIndex);
      infoMessage = _this2.props.cellMessages.getIn(['info', id].concat(col.valueKeyPath));
      errorMessage = _this2.props.cellMessages.getIn(['error', id].concat(col.valueKeyPath));
      warningMessage = _this2.props.cellMessages.getIn(['warning', id].concat(col.valueKeyPath));
    }
    if (infoMessage) {
      returnData.infoMessage = infoMessage;
    }
    if (errorMessage) {
      returnData.errorMessage = errorMessage;
    }
    if (warningMessage) {
      returnData.warningMessage = warningMessage;
    }
    return returnData;
  };

  this.getScrollToRow = function () {
    var scrollToRow = void 0;
    if (_this2.props.isCreating && !_this2.focusToCreateCell) return scrollToRow;
    if (_this2.focusToCreateCell) {
      var scrollNewRow = _this2.props.createData.size - 1;
      if (scrollNewRow >= 0) {
        scrollToRow = scrollNewRow;
      }
    } else {
      if (_this2.props.isEditing) {
        scrollToRow = _this2.state.currentRow;
      } else {
        scrollToRow = _this2.props.scrollToRow; // eslint-disable-line
      }
      if (scrollToRow === undefined && _this2.props.selectedItems.size > 0) {
        scrollToRow = _this2.getSelectedItemIndex(_this2.props.selectedItems.first());
      }
    }
    return scrollToRow;
  };

  this.handleCellSelect = function (cellType, rowIndex, columnKey) {
    return function () {
      if (cellType === 'view' && _this2.props.cellSelect) {
        _this2.props.cellSelectionChange(_this2.props.grid, (0, _immutable.Map)({ rowIndex: rowIndex, columnKey: columnKey }));
      }
    };
  };

  this.handleCreateCellRef = function (rowIndex, col) {
    return function (ref) {
      // Focus to create cell
      if (_this2.props.createData.size && _this2.props.createData.size === rowIndex + 1 && _this2.focusToCreateCell && !_this2.getComponentDisabledState(rowIndex, col, 'create')) {
        ref.focus();
        _this2.focusToCreateCell = false;
      }
    };
  };

  this.handleEditCellRef = function (rowIndex, col) {
    return function (ref) {
      var columnKey = _datagrid5.default.getColumnKey(col);
      if (_this2.focusToEditCell && !_this2.getComponentDisabledState(rowIndex, col, 'edit')) {
        var selectedRowIndex = _this2.getSelectedItemIndex(_this2.props.selectedItems.first());
        var selectedCell = _this2.props.selectedCell;

        if (selectedCell.size > 0) {
          if (selectedCell.get('rowIndex') === rowIndex && selectedCell.get('columnKey') === columnKey) {
            ref.focus();
            _this2.focusToEditCell = false;
          }
        } else if (selectedRowIndex === undefined) {
          _this2.focusToEditCell = false;
        } else if (selectedRowIndex === rowIndex) {
          ref.focus();
          _this2.focusToEditCell = false;
        }
      }
      if (_this2.props.enableArrowNavigation) {
        _this2.cellRefs[_this2.props.grid.id + '_' + columnKey + '_' + rowIndex] = ref;
      }
    };
  };

  this.moveCellFocus = function (nextElement, rowIndex, columnIndex) {
    if (nextElement && (nextElement.type === 'text' || nextElement.type === 'number')) {
      if (rowIndex !== -1) {
        _this2.setState({ currentRow: rowIndex });
      }
      if (columnIndex !== -1) {
        _this2.setState({ currentColumn: columnIndex });
      }
      setTimeout(function () {
        return nextElement.select();
      }, 50);
    }
  };

  this.handleSelectionCheckBoxOnChange = function (rowIndex) {
    return function () {
      _this2.props.itemSelectionChange(_this2.props.grid, rowIndex, true, false);
    };
  };

  this.generateColumns = function () {
    var columns = [];
    var tabIndex = String(_this2.props.tabIndex);
    if (_this2.props.rowSelectCheckboxColumn) {
      columns.push({
        width: 40,
        isResizable: false,
        columnKey: 'selectionCheckbox',
        cell: function cell(rowIndex) {
          var rowItem = _this2.props.data.get(rowIndex);
          var itemId = rowItem.getIn(_this2.props.grid.idKeyPath);
          var selected = _this2.props.selectedItems.includes(itemId);
          return _react2.default.createElement(_reactBootstrap.Checkbox, {
            className: 'oc-row-select-checkbox',
            checked: selected,
            onChange: _this2.handleSelectionCheckBoxOnChange(rowIndex),
            tabIndex: tabIndex
          });
        },
        cellEdit: function cellEdit() {
          return null;
        },
        cellCreate: function cellCreate() {
          return null;
        },
        cellFilter: function cellFilter() {
          return null;
        }
      });
    }

    var visibleColumns = [];
    _this2.props.visibleColumns.forEach(function (visibleColumnKey) {
      _this2.props.columns.forEach(function (orgCol) {
        if (_datagrid5.default.getColumnKey(orgCol) === visibleColumnKey) {
          visibleColumns.push(orgCol);
        }
      });
    });
    visibleColumns.forEach(function (col) {
      var column = {
        header: col.header,
        columnKey: _datagrid5.default.getColumnKey(col),
        width: col.width || col.width === 0 ? col.width : 200,
        minWidth: col.minWidth || col.minWidth === 0 ? col.minWidth : 40,
        maxWidth: col.maxWidth,
        isResizable: !col.disableResizing,
        fixed: !!col.fixed,
        allowCellsRecycling: !!col.allowCellsRecycling,
        disableSorting: !!col.disableSorting,
        isRequired: !!col.isRequired,
        componentType: col.componentType,
        style: _datagrid5.default.getCellStyleByCol(col)
      };
      if (col.valueKeyPath) {
        column.valueKeyPath = col.valueKeyPath;
      }
      if (col.flexGrow) {
        column.flexGrow = col.flexGrow;
      }
      if (col.valueType) {
        column.valueType = col.valueType;
      }
      if (col.sortComparator) {
        column.sortComparator = col.sortComparator;
      }
      if (col.sortValueGetter) {
        column.sortValueGetter = col.sortValueGetter;
      }
      var valueEmptyChecker = _datagrid5.default.getValueEmptyChecker(col);
      // Cell value rendering
      var valueRender = function valueRender(rowIndex, format) {
        var val = _this2.props.data.getIn([rowIndex].concat(col.valueKeyPath));
        if (valueEmptyChecker(val)) {
          return col.isRequired ? _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'GridValueIsMissing' }) : '';
        }
        return format ? format(val) : val;
      };

      if (col.cell) {
        column.cell = col.cell;
      } else if (col.valueRender) {
        column.cell = function (rowIndex) {
          return col.valueRender(_this2.props.data.get(rowIndex));
        };
      } else {
        switch (col.valueType) {
          case 'number':
          case 'float':
            column.cell = function (rowIndex) {
              return valueRender(rowIndex, function (v) {
                return _react2.default.createElement(_reactIntl.FormattedNumber, _extends({ value: v }, col.renderComponentProps));
              });
            };
            break;
          case 'date':
            column.cell = function (rowIndex) {
              return valueRender(rowIndex, function (v) {
                if ((0, _moment2.default)(v, _this2.props.dateFormat, true).isValid()) {
                  return _moment2.default.utc(v, _this2.props.dateFormat).format(_this2.props.dateFormat);
                }
                if ((0, _moment2.default)(v).isValid()) {
                  return _moment2.default.utc(v).format(_this2.props.dateFormat);
                }
                return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'GridInvalidDate' });
              });
            };
            break;
          case 'boolean':
            column.cell = function (rowIndex) {
              return valueRender(rowIndex, function (v) {
                return _react2.default.createElement(_reactIntl.FormattedMessage, _extends({ id: v ? 'Yes' : 'No' }, col.renderComponentProps));
              });
            };
            break;
          default:
            column.cell = function (rowIndex) {
              return valueRender(rowIndex);
            };
        }
      }
      // Cell edit/create/filter component rendering
      if (col.cellEdit) {
        column.cellEdit = col.cellEdit;
      } else if (col.editValueRender) {
        column.cellEdit = function (rowIndex) {
          return col.editValueRender(_this2.props.data.get(rowIndex));
        };
      }
      if (col.cellCreate) {
        column.cellCreate = col.cellCreate;
      } else if (col.createValueRender) {
        column.cellCreate = function (rowIndex) {
          return col.createValueRender(_this2.props.data.get(rowIndex));
        };
      }
      if (col.cellFilter) {
        column.cellFilter = col.cellFilter;
      } else if (col.filterValueRender) {
        column.cellFilter = function (rowIndex) {
          return col.filterValueRender(_this2.props.data.get(rowIndex));
        };
      }
      if (col.componentType) {
        var editValueParser = function editValueParser(val) {
          return val;
        };
        switch (col.componentType) {
          case 'text':
            // TODO REFACTOR TO FUNCTION
            if (_this2.props.inlineEdit) {
              if (!column.cellEdit) {
                column.cellEdit = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getEditItemValue(rowIndex, col),
                    onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onEditCellBlur(rowIndex, col),
                    onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                    onKeyDown: _this2.onEditCellKeyDown(col, rowIndex),
                    inputRef: _this2.handleEditCellRef(rowIndex, col),
                    id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.editComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
              if (!column.cellCreate) {
                column.cellCreate = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getCreateItemValue(rowIndex, col),
                    onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onCreateCellBlur(rowIndex, col),
                    onKeyDown: _this2.onCreateCellKeyDown,
                    inputRef: _this2.handleCreateCellRef(rowIndex, col),
                    id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.createComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'create'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            if (_this2.props.filtering) {
              if (!column.cellFilter) {
                column.cellFilter = function () {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getFilterItemValue(col),
                    onChange: _this2.onFilterCellValueChange(col, editValueParser),
                    id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey
                  }, col.filterComponentProps, {
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            break;
          case 'number':
            if (_this2.props.inlineEdit) {
              if (!column.cellEdit) {
                column.cellEdit = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'number',
                    value: _this2.getEditItemValue(rowIndex, col),
                    onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onEditCellBlur(rowIndex, col),
                    onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                    onKeyDown: _this2.onEditCellKeyDown(col, rowIndex),
                    inputRef: _this2.handleEditCellRef(rowIndex, col),
                    id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.editComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
              if (!column.cellCreate) {
                column.cellCreate = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'number',
                    value: _this2.getCreateItemValue(rowIndex, col),
                    onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onCreateCellBlur(rowIndex, col),
                    onFocus: _this2.onCellFocus('create', 'number', rowIndex, column.columnKey),
                    onKeyDown: _this2.onCreateCellKeyDown,
                    inputRef: _this2.handleCreateCellRef(rowIndex, col),
                    id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.createComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'create'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            if (_this2.props.filtering) {
              if (!column.cellFilter) {
                column.cellFilter = function () {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'number',
                    value: _this2.getFilterItemValue(col),
                    onChange: _this2.onFilterCellValueChange(col, editValueParser),
                    id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey
                  }, col.filterComponentProps, {
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            break;
          case 'float':
            editValueParser = function editValueParser(val) {
              return val.replace(new RegExp('[^\\d' + _this2.props.decimalSeparator + '+-]', 'g'), '');
            };
            if (_this2.props.inlineEdit) {
              if (!column.cellEdit) {
                column.cellEdit = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getEditItemValue(rowIndex, col),
                    onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onEditCellBlur(rowIndex, col, editValueParser),
                    onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                    onKeyDown: _this2.onEditCellKeyDown(col, rowIndex),
                    inputRef: _this2.handleEditCellRef(rowIndex, col),
                    id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.editComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
              if (!column.cellCreate) {
                column.cellCreate = function (rowIndex) {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getCreateItemValue(rowIndex, col),
                    onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                    onBlur: _this2.onCreateCellBlur(rowIndex, col, editValueParser),
                    onKeyDown: _this2.onCreateCellKeyDown,
                    inputRef: _this2.handleCreateCellRef(rowIndex, col),
                    id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                  }, col.createComponentProps, {
                    disabled: _this2.getComponentDisabledState(rowIndex, col, 'create'),
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            if (_this2.props.filtering) {
              if (!column.cellFilter) {
                column.cellFilter = function () {
                  return _react2.default.createElement(_reactBootstrap.FormControl, _extends({
                    type: 'text',
                    value: _this2.getFilterItemValue(col),
                    onChange: _this2.onFilterCellValueChange(col, editValueParser),
                    id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey
                  }, col.filterComponentProps, {
                    style: column.style,
                    tabIndex: tabIndex
                  }));
                };
              }
            }
            break;
          case 'select':
            {
              var selectOptions = col.selectComponentOptions || _this2.props.selectComponentOptions.get(column.columnKey);
              if (_this2.props.inlineEdit) {
                if (!column.cellEdit) {
                  column.cellEdit = function (rowIndex) {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-edit-' + rowIndex,
                      options: col.editSelectOptionsMod && selectOptions ? col.editSelectOptionsMod(selectOptions.slice(), rowIndex, col) : selectOptions,
                      value: _this2.getEditItemValue(rowIndex, col),
                      onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                      onBlur: _this2.onEditCellBlur(rowIndex, col),
                      onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                      searchable: selectOptions && selectOptions.length > 9,
                      clearable: !col.isRequired,
                      backspaceRemoves: false,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      ref: _this2.handleEditCellRef(rowIndex, col),
                      inputProps: {
                        id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                      }
                    }, col.editComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit'),
                      tabIndex: tabIndex
                    }));
                  };
                }
                if (!column.cellCreate) {
                  column.cellCreate = function (rowIndex) {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-create-' + rowIndex,
                      options: col.createSelectOptionsMod && selectOptions ? col.createSelectOptionsMod(selectOptions.slice(), rowIndex, col) : selectOptions,
                      value: _this2.getCreateItemValue(rowIndex, col),
                      onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                      onBlur: _this2.onCreateCellBlur(rowIndex, col),
                      searchable: selectOptions && selectOptions.length > 9,
                      clearable: !col.isRequired,
                      backspaceRemoves: false,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      ref: _this2.handleCreateCellRef(rowIndex, col),
                      inputProps: {
                        id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                      }
                    }, col.createComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'create'),
                      tabIndex: tabIndex
                    }));
                  };
                }
              }
              if (_this2.props.filtering) {
                if (!column.cellFilter) {
                  column.cellFilter = function () {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-filter',
                      options: col.filterSelectOptionsMod && selectOptions ? col.filterSelectOptionsMod(selectOptions.slice(), col) : selectOptions,
                      value: _this2.getFilterItemValue(col),
                      onChange: _this2.onFilterCellValueChange(col, editValueParser),
                      searchable: selectOptions && selectOptions.length > 9,
                      clearable: true,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      inputProps: {
                        id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey
                      }
                    }, col.filterComponentProps, {
                      tabIndex: tabIndex
                    }));
                  };
                }
              }
              break;
            }
          case 'date':
            {
              if (_this2.props.inlineEdit) {
                if (!column.cellEdit) {
                  column.cellEdit = function (rowIndex) {
                    return _react2.default.createElement(_reactDatetime.DateInput, _extends({
                      value: _this2.getEditItemValue(rowIndex, col),
                      onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                      language: _this2.props.language,
                      dateFormat: _this2.props.dateFormat,
                      inputRef: _this2.handleEditCellRef(rowIndex, col),
                      inputProps: {
                        tabIndex: tabIndex,
                        id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex,
                        onKeyDown: _this2.onEditCellKeyDown(col, rowIndex),
                        onBlur: _this2.onEditCellBlur(rowIndex, col),
                        onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                        style: column.style
                      }
                    }, col.editComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit')
                    }));
                  };
                }
                if (!column.cellCreate) {
                  column.cellCreate = function (rowIndex) {
                    return _react2.default.createElement(_reactDatetime.DateInput, _extends({
                      value: _this2.getCreateItemValue(rowIndex, col),
                      onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                      onKeyDown: _this2.onCreateCellKeyDown,
                      language: _this2.props.language,
                      dateFormat: _this2.props.dateFormat,
                      inputRef: _this2.handleCreateCellRef(rowIndex, col),
                      inputProps: {
                        tabIndex: tabIndex,
                        id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex,
                        style: column.style
                      }
                    }, col.createComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'create')
                    }));
                  };
                }
              }
              if (_this2.props.filtering) {
                if (!column.cellFilter) {
                  column.cellFilter = function () {
                    return _react2.default.createElement(_reactDatetime.DateInput, _extends({
                      value: _this2.getFilterItemValue(col),
                      onChange: _this2.onFilterCellValueChange(col, editValueParser),
                      dateFormat: _this2.props.dateFormat,
                      language: _this2.props.language,
                      inputProps: {
                        tabIndex: tabIndex,
                        id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey,
                        style: column.style
                      }
                    }, col.filterComponentProps));
                  };
                }
              }
              break;
            }
          case 'boolean':
            {
              var _selectOptions = [{ value: true, label: _this2.props.intl.formatMessage({ id: 'Yes' }) }, { value: false, label: _this2.props.intl.formatMessage({ id: 'No' }) }];
              if (_this2.props.inlineEdit) {
                if (!column.cellEdit) {
                  column.cellEdit = function (rowIndex) {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-edit-' + rowIndex,
                      options: _selectOptions,
                      value: _this2.getEditItemValue(rowIndex, col),
                      onChange: _this2.onEditCellValueChange(rowIndex, col, editValueParser),
                      onBlur: _this2.onEditCellBlur(rowIndex, col),
                      onFocus: _this2.onCellFocus('edit', col.componentType, rowIndex, column.columnKey),
                      searchable: false,
                      clearable: !col.isRequired,
                      backspaceRemoves: false,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      ref: _this2.handleEditCellRef(rowIndex, col),
                      inputProps: {
                        id: 'ocDatagridEditInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                      }
                    }, col.editComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'edit'),
                      tabIndex: tabIndex
                    }));
                  };
                }
                if (!column.cellCreate) {
                  column.cellCreate = function (rowIndex) {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-create-' + rowIndex,
                      options: _selectOptions,
                      value: _this2.getCreateItemValue(rowIndex, col),
                      onChange: _this2.onCreateCellValueChange(rowIndex, col, editValueParser),
                      onBlur: _this2.onCreateCellBlur(rowIndex, col),
                      searchable: false,
                      clearable: !col.isRequired,
                      backspaceRemoves: false,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      ref: _this2.handleCreateCellRef(rowIndex, col),
                      inputProps: {
                        id: 'ocDatagridCreateInput-' + _this2.props.grid.id + '-' + column.columnKey + '-' + rowIndex
                      }
                    }, col.createComponentProps, {
                      disabled: _this2.getComponentDisabledState(rowIndex, col, 'create'),
                      tabIndex: tabIndex
                    }));
                  };
                }
              }
              if (_this2.props.filtering) {
                if (!column.cellFilter) {
                  column.cellFilter = function () {
                    return _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({
                      name: col.valueKeyPath.join() + '-filter',
                      options: _selectOptions,
                      value: _this2.getFilterItemValue(col),
                      onChange: _this2.onFilterCellValueChange(col, editValueParser),
                      searchable: false,
                      clearable: true,
                      tabSelectsValue: false,
                      openOnFocus: true,
                      inputProps: {
                        id: 'ocDatagridFilterInput-' + _this2.props.grid.id + '-' + column.columnKey
                      }
                    }, col.filterComponentProps, {
                      tabIndex: tabIndex
                    }));
                  };
                }
              }
              break;
            }
          default:
        }
      }
      columns.push(column);
    });

    if (_this2.props.isCreating) {
      columns.push({
        width: 37,
        isResizable: false,
        columnKey: 'removeNewItem',
        cell: function cell() {
          return null;
        },
        cellEdit: function cellEdit() {
          return null;
        },
        cellCreate: function cellCreate(rowIndex) {
          return _react2.default.createElement(_reactIcons.Icon, {
            id: 'oc-datagrid-new-item-remove-' + _this2.props.grid.id + '-' + rowIndex,
            type: 'indicator',
            name: 'delete',
            width: 30,
            height: 30,
            onClick: function onClick() {
              return _this2.props.removeNewItem(_this2.props.grid, rowIndex);
            }
          });
        },
        cellFilter: function cellFilter() {
          return null;
        }
      });
    }
    return columns;
  };

  this.isCellEdited = function (rowIndex, col, cellType) {
    if (cellType !== 'edit') {
      return false;
    }
    var id = _this2.getDataIdByRowIndex(rowIndex);
    if (_this2.props.editData.getIn([id].concat(col.valueKeyPath))) {
      return true;
    }
    return false;
  };

  this.handleAfterAddItem = function () {
    _this2.focusToCreateCell = true;
  };

  this.handleAfterEditPress = function () {
    if (_this2.props.selectedItems.size) {
      _this2.focusToEditCell = true;
      _this2.setState({
        currentRow: undefined
      });
    }
  };

  this.handleAfterValidationError = function () {
    _this2.focusToErrorCell = true;
  };

  this.handleRowClick = function (e, rowIndex) {
    if (_this2.props.rowSelect && !_this2.props.isCreating && !_this2.props.isEditing) {
      if (e.ctrlKey || e.shiftKey) {
        document.getSelection().removeAllRanges();
      }
      // don't trigger selection change on checkbox click
      if (e.target.type !== 'checkbox') {
        _this2.props.itemSelectionChange(_this2.props.grid, rowIndex, _this2.props.multiSelect && e.ctrlKey, _this2.props.multiSelect && e.shiftKey);
      }
    }
    if (_this2.props.onRowClick) {
      _this2.props.onRowClick(e, rowIndex, _this2.props.data.get(rowIndex));
    }
    return true;
  };

  this.renderCell = function (col) {
    return function (cellProps) {
      var _props2 = _this2.props,
          isCreating = _props2.isCreating,
          isEditing = _props2.isEditing,
          createData = _props2.createData,
          selectedCell = _props2.selectedCell;

      var rowIndex = cellProps.rowIndex,
          props = _objectWithoutProperties(cellProps, ['rowIndex']);

      var isCheckbox = _this2.isSelectionCheckbox(cellProps);
      var cell = void 0;
      var cellType = 'view';
      var extraRowCount = 0; // how many rows to ignore from top, new + filter rows
      if (isCreating) extraRowCount = createData.size;
      if (isCreating) {
        if (rowIndex <= extraRowCount - 1) {
          if (col.cellCreate) {
            cell = col.cellCreate(rowIndex);
            cellType = 'create';
          } else {
            cell = null;
            cellType = null;
          }
        } else {
          cell = col.cell(rowIndex - extraRowCount);
        }
      } else if (isEditing && col.cellEdit) {
        cell = col.cellEdit(rowIndex - extraRowCount);
        cellType = 'edit';
      } else {
        cell = col.cell(rowIndex - extraRowCount);
      }
      if ((cellType === 'view' || cellType === 'edit' || cellType === 'create') && !isCheckbox) {
        var getRowIndex = cellType === 'create' ? rowIndex : rowIndex - extraRowCount;
        var messageData = _this2.getCellMessages(getRowIndex, col, cellType);
        var isEdited = _this2.isCellEdited(getRowIndex, col, cellType);
        var className = selectedCell.get('rowIndex') === rowIndex && selectedCell.get('columnKey') === props.columnKey ? 'oc-datagrid-cell is-selected' : 'oc-datagrid-cell';
        return _react2.default.createElement(
          _fixedDataTable.Cell,
          _extends({}, props, {
            className: className,
            style: col.style,
            onClick: _this2.handleCellSelect(cellType, rowIndex, props.columnKey)
          }),
          _react2.default.createElement(
            _cellTooltip2.default,
            {
              id: cellType + col.columnKey + (rowIndex - extraRowCount),
              isEdited: isEdited,
              isError: !!messageData.errorMessage,
              isWarning: !!messageData.warningMessage,
              infoMessage: messageData.infoMessage,
              errorMessage: messageData.errorMessage,
              warningMessage: messageData.warningMessage
            },
            cell
          )
        );
      }
      return _react2.default.createElement(
        _fixedDataTable.Cell,
        _extends({}, props, { className: 'oc-datagrid-cell', style: col.style }),
        cell
      );
    };
  };

  this.renderColumns = function () {
    if (!_this2.props.allDataSize && !_this2.props.isBusy && !_this2.props.isCreating) {
      return _react2.default.createElement(_fixedDataTable.Column, {
        columnKey: 'dataEmptyColumn',
        header: _react2.default.createElement(
          _fixedDataTable.Cell,
          { style: { textAlign: 'center' } },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'GridNoItems' })
        ),
        width: 10,
        isResizable: false,
        flexGrow: 1
      });
    }
    if (!_this2.props.visibleColumns.size) {
      if (_this2.props.isBusy) {
        return _react2.default.createElement(_fixedDataTable.Column, {
          columnKey: 'dataEmptyColumn',
          header: _react2.default.createElement(
            _fixedDataTable.Cell,
            null,
            '\xA0'
          ),
          width: 10,
          isResizable: false,
          flexGrow: 1
        });
      }
      return _react2.default.createElement(_fixedDataTable.Column, {
        columnKey: 'dataEmptyColumn',
        header: _react2.default.createElement(
          _fixedDataTable.Cell,
          { style: { textAlign: 'center' } },
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'GridNoColumns' })
        ),
        width: 10,
        isResizable: false,
        flexGrow: 1
      });
    }
    var columns = _this2.generateColumns();
    if (columns.lenght === 0) return null;
    return columns.map(function (col) {
      return _react2.default.createElement(_fixedDataTable.Column, {
        key: col.columnKey,
        columnKey: col.columnKey,
        header: _react2.default.createElement(
          _headerCell2.default,
          {
            grid: _this2.props.grid,
            columns: _this2.props.columns,
            column: col,
            currentSortColumn: _this2.props.sortColumn,
            currentSortOrder: _this2.props.sortOrder,
            onSortChange: _this2.props.sortChange,
            isBusy: _this2.props.isBusy,
            filtering: _this2.props.isFiltering
          },
          col.header
        ),
        cell: _this2.renderCell(col),
        width: _this2.props.columnWidths.get(col.columnKey, col.width),
        minWidth: col.minWidth,
        maxWidth: col.maxWidth,
        isResizable: col.isResizable,
        flexGrow: col.flexGrow ? col.flexGrow : 0,
        fixed: col.fixed,
        allowCellsRecycling: col.allowCellsRecycling
      });
    });
  };
}, _temp)) || _class) || _class);
exports.default = DataGrid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9kYXRhZ3JpZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImRhdGFncmlkQWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJHUklEIiwiZ3JpZCIsImlzQnVzeSIsImRhdGFncmlkIiwiZ2V0SW4iLCJpZCIsImlzRWRpdGluZyIsImlzQ3JlYXRpbmciLCJpc0ZpbHRlcmluZyIsImlzQ29sdW1uU2V0dGluZ3NNb2RhbE9wZW4iLCJzb3J0Q29sdW1uIiwic29ydE9yZGVyIiwidmlzaWJsZUNvbHVtbnMiLCJjb2x1bW5XaWR0aHMiLCJzZWxlY3RlZENlbGwiLCJzZWxlY3RlZEl0ZW1zIiwiZGF0YSIsImVkaXREYXRhIiwiY3JlYXRlRGF0YSIsImZpbHRlckRhdGEiLCJjZWxsTWVzc2FnZXMiLCJjcmVhdGVDZWxsTWVzc2FnZXMiLCJhbGxEYXRhU2l6ZSIsInNpemUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwidXNlciIsImRhdGVGb3JtYXQiLCJnZXREYXRlRm9ybWF0IiwidGhvdXNhbmRTZXBhcmF0b3IiLCJnZXRUaG91c2FuZFNlcGFyYXRvciIsImRlY2ltYWxTZXBhcmF0b3IiLCJnZXREZWNpbWFsU2VwYXJhdG9yIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiRGF0YUdyaWQiLCJwcm9wcyIsImN1cnJlbnRSb3ciLCJjdXJyZW50Q29sdW1uIiwiY2VsbFJlZnMiLCJmb2N1c1RvQ3JlYXRlQ2VsbCIsImZvY3VzVG9FZGl0Q2VsbCIsImZvY3VzVG9FcnJvckNlbGwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImludmFsaWRhdGUiLCJpc1NlbGVjdGlvbkNoZWNrYm94IiwiY2VsbFByb3BzIiwiZXhwZWN0ZWRDb2x1bW5LZXkiLCJyb3dTZWxlY3RDaGVja2JveENvbHVtbiIsImNvbHVtbktleSIsInJlbmRlciIsImdyaWRDbGFzc05hbWUiLCJpbmxpbmVFZGl0IiwiZGlzYWJsZUFjdGlvbkJhciIsImFjdGlvbkJhciIsImFjdGlvbkJhclJpZ2h0IiwiYWN0aW9uQmFyTGVmdCIsImZpbHRlcmluZyIsInJlbW92aW5nIiwiZGlzYWJsZURyb3Bkb3duIiwiZGlzYWJsZUZpbHRlcmluZ0NvbnRyb2xzIiwiaGFuZGxlQWZ0ZXJBZGRJdGVtIiwiaGFuZGxlQWZ0ZXJFZGl0UHJlc3MiLCJoYW5kbGVBZnRlclZhbGlkYXRpb25FcnJvciIsImRyb3Bkb3duTWVudUl0ZW1zIiwiY29sdW1uU2V0dGluZ3MiLCJncmlkSGVhZGVyIiwicm93c0NvdW50IiwiY29udGFpbmVyU3R5bGUiLCJoZWFkZXJIZWlnaHQiLCJmaWx0ZXJSb3dIZWlnaHQiLCJyb3dIZWlnaHQiLCJvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrIiwiaGFuZGxlUm93Q2xpY2siLCJzY3JvbGxUb0NvbHVtbiIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvUm93Iiwib25Sb3dEb3VibGVDbGljayIsIm9uUm93TW91c2VEb3duIiwib25Sb3dNb3VzZUVudGVyIiwib25Sb3dNb3VzZUxlYXZlIiwib25TY3JvbGxTdGFydCIsIm9uU2Nyb2xsRW5kIiwiZ2V0Um93Q2xhc3NOYW1lIiwicm93SGVpZ2h0R2V0dGVyIiwib25Db250ZW50SGVpZ2h0Q2hhbmdlIiwicmVuZGVyQ29sdW1ucyIsImNvbHVtbnMiLCJjbG9zZUNvbHVtblNldHRpbmdzTW9kYWwiLCJzYXZlQ29sdW1uU2V0dGluZ3MiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJuZXdDb2x1bW5XaWR0aCIsInJlc2l6ZUNvbHVtbiIsIm9uQ3JlYXRlQ2VsbEtleURvd24iLCJlIiwia2V5Q29kZSIsIkVOVEVSIiwiYWRkTmV3SXRlbSIsImdldENvbHVtbkRlZmF1bHRWYWx1ZXMiLCJvbkVkaXRDZWxsS2V5RG93biIsImNvbCIsInJvd0luZGV4IiwiZW5hYmxlQXJyb3dOYXZpZ2F0aW9uIiwicm93c1NpemUiLCJnZXRDb2x1bW5LZXkiLCJET1dOIiwidmFsdWVUeXBlIiwibmV4dEVsZW1lbnQiLCJtb3ZlQ2VsbEZvY3VzIiwiVVAiLCJUQUIiLCJSSUdIVCIsIkxFRlQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbHVtbkluZCIsImZpbmRJbmRleCIsImMiLCJ2YWx1ZUtleVBhdGgiLCJqb2luIiwiZGlzYWJsZWQiLCJyb3dJbmQiLCJzaGlmdEtleSIsImxlbmd0aCIsIm5leHRDb2x1bW5LZXkiLCJvbkZpbHRlckNlbGxWYWx1ZUNoYW5nZSIsInZhbHVlUGFyc2VyIiwiZXZlbnRPckRhdGEiLCJyYXdWYWx1ZSIsInRhcmdldCIsInVuZGVmaW5lZCIsInZhbHVlIiwiZmlsdGVyQ2VsbFZhbHVlQ2hhbmdlIiwib25DcmVhdGVDZWxsVmFsdWVDaGFuZ2UiLCJjcmVhdGVDZWxsVmFsdWVDaGFuZ2UiLCJvbkNyZWF0ZVZhbHVlQ2hhbmdlIiwib25WYWx1ZU1hdGNoQ2hhbmdlVmFsdWUiLCJtYXRjaFZhbHVlIiwibmV3VmFsdWVLZXlQYXRoIiwidiIsIm5ld1ZhbHVlIiwidmFsaWRhdG9ycyIsImNyZWF0ZUNlbGxWYWx1ZVZhbGlkYXRlIiwib25FZGl0Q2VsbFZhbHVlQ2hhbmdlIiwiZGF0YUlkIiwiZ2V0RGF0YUlkQnlSb3dJbmRleCIsImVkaXRDZWxsVmFsdWVDaGFuZ2UiLCJvbkVkaXRWYWx1ZUNoYW5nZSIsImVkaXRDZWxsVmFsdWVWYWxpZGF0ZSIsIm9uQ3JlYXRlQ2VsbEJsdXIiLCJvbkNyZWF0ZUJsdXIiLCJnZXRFZGl0SXRlbVZhbHVlIiwib25FZGl0Q2VsbEJsdXIiLCJvbkVkaXRCbHVyIiwib25DZWxsRm9jdXMiLCJjZWxsVHlwZSIsImlucHV0VHlwZSIsInNlbGVjdCIsImNlbGxTZWxlY3QiLCJjZWxsU2VsZWN0aW9uQ2hhbmdlIiwiaWRLZXlQYXRoIiwiZ2V0U2VsZWN0ZWRJdGVtSW5kZXgiLCJpbmRleCIsImVkaXRWYWx1ZSIsIm9yaWdpbmFsVmFsdWUiLCJjb21wb25lbnRUeXBlIiwiaXNWYWxpZCIsInV0YyIsImZvcm1hdCIsIlN0cmluZyIsInJlcGxhY2UiLCJnZXRDcmVhdGVJdGVtVmFsdWUiLCJ2YWwiLCJnZXRGaWx0ZXJJdGVtVmFsdWUiLCJnZXQiLCJnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlIiwibW9kZSIsImNvbXBvbmVudERpc2FibGVkIiwiZGlzYWJsZUVkaXRpbmciLCJkaXNhYmxlRWRpdGluZ09uVmFsdWVNYXRjaCIsIm1hdGNoVmFsdWVLZXlQYXRoIiwicm93Q2xhc3NOYW1lcyIsImV4dHJhUm93Q291bnQiLCJwdXNoIiwiaW5kZXhPZiIsInJvd0NsYXNzTmFtZUdldHRlciIsImdldENlbGxNZXNzYWdlcyIsInJldHVybkRhdGEiLCJpbmZvTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsIndhcm5pbmdNZXNzYWdlIiwic2Nyb2xsVG9Sb3ciLCJzY3JvbGxOZXdSb3ciLCJmaXJzdCIsImhhbmRsZUNlbGxTZWxlY3QiLCJoYW5kbGVDcmVhdGVDZWxsUmVmIiwicmVmIiwiZm9jdXMiLCJoYW5kbGVFZGl0Q2VsbFJlZiIsInNlbGVjdGVkUm93SW5kZXgiLCJjb2x1bW5JbmRleCIsInR5cGUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVTZWxlY3Rpb25DaGVja0JveE9uQ2hhbmdlIiwiaXRlbVNlbGVjdGlvbkNoYW5nZSIsImdlbmVyYXRlQ29sdW1ucyIsInRhYkluZGV4Iiwid2lkdGgiLCJpc1Jlc2l6YWJsZSIsImNlbGwiLCJyb3dJdGVtIiwiaXRlbUlkIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsImNlbGxFZGl0IiwiY2VsbENyZWF0ZSIsImNlbGxGaWx0ZXIiLCJmb3JFYWNoIiwidmlzaWJsZUNvbHVtbktleSIsIm9yZ0NvbCIsImNvbHVtbiIsImhlYWRlciIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJkaXNhYmxlUmVzaXppbmciLCJmaXhlZCIsImFsbG93Q2VsbHNSZWN5Y2xpbmciLCJkaXNhYmxlU29ydGluZyIsImlzUmVxdWlyZWQiLCJzdHlsZSIsImdldENlbGxTdHlsZUJ5Q29sIiwiZmxleEdyb3ciLCJzb3J0Q29tcGFyYXRvciIsInNvcnRWYWx1ZUdldHRlciIsInZhbHVlRW1wdHlDaGVja2VyIiwiZ2V0VmFsdWVFbXB0eUNoZWNrZXIiLCJ2YWx1ZVJlbmRlciIsInJlbmRlckNvbXBvbmVudFByb3BzIiwiZWRpdFZhbHVlUmVuZGVyIiwiY3JlYXRlVmFsdWVSZW5kZXIiLCJmaWx0ZXJWYWx1ZVJlbmRlciIsImVkaXRWYWx1ZVBhcnNlciIsImVkaXRDb21wb25lbnRQcm9wcyIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiZmlsdGVyQ29tcG9uZW50UHJvcHMiLCJSZWdFeHAiLCJzZWxlY3RPcHRpb25zIiwic2VsZWN0Q29tcG9uZW50T3B0aW9ucyIsImVkaXRTZWxlY3RPcHRpb25zTW9kIiwic2xpY2UiLCJjcmVhdGVTZWxlY3RPcHRpb25zTW9kIiwiZmlsdGVyU2VsZWN0T3B0aW9uc01vZCIsIm9uS2V5RG93biIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImludGwiLCJmb3JtYXRNZXNzYWdlIiwicmVtb3ZlTmV3SXRlbSIsImlzQ2VsbEVkaXRlZCIsInJvd1NlbGVjdCIsImN0cmxLZXkiLCJkb2N1bWVudCIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIm11bHRpU2VsZWN0Iiwib25Sb3dDbGljayIsInJlbmRlckNlbGwiLCJpc0NoZWNrYm94IiwiZ2V0Um93SW5kZXgiLCJtZXNzYWdlRGF0YSIsImlzRWRpdGVkIiwiY2xhc3NOYW1lIiwidGV4dEFsaWduIiwibGVuZ2h0IiwibWFwIiwic29ydENoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztvREFBQTs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLGU7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7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QUFBLGFBQ2pCO0FBQ0UsYUFBSy9LLElBQUlyRCxTQURYO0FBRUUsbUJBQVdxRCxJQUFJckQsU0FGakI7QUFHRSxnQkFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBTSxPQUFLYixLQUFMLENBQVdsQyxJQURuQjtBQUVFLHFCQUFTLE9BQUtrQyxLQUFMLENBQVdtRCxPQUZ0QjtBQUdFLG9CQUFRZSxHQUhWO0FBSUUsK0JBQW1CLE9BQUtsRSxLQUFMLENBQVd6QixVQUpoQztBQUtFLDhCQUFrQixPQUFLeUIsS0FBTCxDQUFXeEIsU0FML0I7QUFNRSwwQkFBYyxPQUFLd0IsS0FBTCxDQUFXa1AsVUFOM0I7QUFPRSxvQkFBUSxPQUFLbFAsS0FBTCxDQUFXakMsTUFQckI7QUFRRSx1QkFBVyxPQUFLaUMsS0FBTCxDQUFXM0I7QUFSeEI7QUFVRzZGLGNBQUl5SDtBQVZQLFNBSko7QUFpQkUsY0FBTSxPQUFLOEMsVUFBTCxDQUFnQnZLLEdBQWhCLENBakJSO0FBa0JFLGVBQU8sT0FBS2xFLEtBQUwsQ0FBV3RCLFlBQVgsQ0FBd0JpSyxHQUF4QixDQUE0QnpFLElBQUlyRCxTQUFoQyxFQUEyQ3FELElBQUkyRyxLQUEvQyxDQWxCVDtBQW1CRSxrQkFBVTNHLElBQUkwSCxRQW5CaEI7QUFvQkUsa0JBQVUxSCxJQUFJMkgsUUFwQmhCO0FBcUJFLHFCQUFhM0gsSUFBSTRHLFdBckJuQjtBQXNCRSxrQkFBVTVHLElBQUltSSxRQUFKLEdBQWVuSSxJQUFJbUksUUFBbkIsR0FBOEIsQ0F0QjFDO0FBdUJFLGVBQU9uSSxJQUFJNkgsS0F2QmI7QUF3QkUsNkJBQXFCN0gsSUFBSThIO0FBeEIzQixRQURpQjtBQUFBLEtBQVosQ0FBUDtBQTJCRCxHOztrQkF0b0NrQmpNLFEiLCJmaWxlIjoiZGF0YWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbG9uZWx5LWlmLCBwcmVmZXItdGVtcGxhdGUsIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCwgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgaW5qZWN0SW50bCxcbiAgRm9ybWF0dGVkTWVzc2FnZSBhcyBNLFxuICBGb3JtYXR0ZWROdW1iZXIgYXMgTixcbn0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBDb2x1bW4sIENlbGwgfSBmcm9tICdmaXhlZC1kYXRhLXRhYmxlLTInO1xuaW1wb3J0IHsgQ2hlY2tib3gsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zcGlubmVyJztcbmltcG9ydCAnZml4ZWQtZGF0YS10YWJsZS0yL2Rpc3QvZml4ZWQtZGF0YS10YWJsZS5jc3MnO1xuXG5pbXBvcnQgUmVzcG9uc2l2ZUZpeGVkRGF0YVRhYmxlIGZyb20gJy4vcmVzcG9uc2l2ZS1maXhlZC1kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4vYWN0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IElubGluZUVkaXRDb250cm9scyBmcm9tICcuL2lubGluZS1lZGl0LWNvbnRyb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyaW5nQ29udHJvbHMgZnJvbSAnLi9maWx0ZXJpbmctY29udHJvbHMuY29tcG9uZW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRyb2xzIGZyb20gJy4vZHJvcGRvd24tY29udHJvbHMuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGRhdGFncmlkQWN0aW9ucyBmcm9tICcuL2RhdGFncmlkLmFjdGlvbnMnO1xuaW1wb3J0IENlbGxUb29sdGlwIGZyb20gJy4vY2VsbC10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uU2V0dGluZ3NNb2RhbCBmcm9tICcuL2NvbHVtbi1zZXR0aW5ncy9jb2x1bW4tc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IHByb3BUeXBlcywgZGVmYXVsdFByb3BzIH0gZnJvbSAnLi9kYXRhZ3JpZC5wcm9wcyc7XG5pbXBvcnQgeyBLRVlfQ09ERVMgfSBmcm9tICcuL2RhdGFncmlkLmNvbnN0YW50cyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgJy4vZGF0YWdyaWQuY29tcG9uZW50LnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IEdSSUQgPSBvd25Qcm9wcy5ncmlkO1xuICByZXR1cm4ge1xuICAgIGlzQnVzeTogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdzZXNzaW9uJywgJ2lzQnVzeSddLCB0cnVlKSxcbiAgICBpc0VkaXRpbmc6IHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnc2Vzc2lvbicsICdpc0VkaXRpbmcnXSwgZmFsc2UpLFxuICAgIGlzQ3JlYXRpbmc6IHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnc2Vzc2lvbicsICdpc0NyZWF0aW5nJ10sIGZhbHNlKSxcbiAgICBpc0ZpbHRlcmluZzpcbiAgICAgIHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnY29uZmlnJywgJ2ZpbHRlcmluZ0RhdGEnLCAnaXNGaWx0ZXJpbmcnXSwgZmFsc2UpLFxuICAgIGlzQ29sdW1uU2V0dGluZ3NNb2RhbE9wZW46XG4gICAgICBzdGF0ZS5kYXRhZ3JpZC5nZXRJbihbR1JJRC5pZCwgJ3Nlc3Npb24nLCAnY29sdW1uU2V0dGluZ3NNb2RhbCcsICdvcGVuJ10sIGZhbHNlKSxcbiAgICBzb3J0Q29sdW1uOiBzdGF0ZS5kYXRhZ3JpZC5nZXRJbihbR1JJRC5pZCwgJ2NvbmZpZycsICdzb3J0aW5nRGF0YScsICdzb3J0Q29sdW1uJ10sIG51bGwpLFxuICAgIHNvcnRPcmRlcjogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdjb25maWcnLCAnc29ydGluZ0RhdGEnLCAnc29ydE9yZGVyJ10sIG51bGwpLFxuICAgIHZpc2libGVDb2x1bW5zOiBzdGF0ZS5kYXRhZ3JpZC5nZXRJbihbR1JJRC5pZCwgJ2NvbmZpZycsICd2aXNpYmxlQ29sdW1ucyddLCBMaXN0KCkpLFxuICAgIGNvbHVtbldpZHRoczogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdjb25maWcnLCAnY29sdW1uV2lkdGhzJ10sIE1hcCgpKSxcbiAgICBzZWxlY3RlZENlbGw6IHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnc2VsZWN0ZWRDZWxsJ10sIE1hcCgpKSxcbiAgICBzZWxlY3RlZEl0ZW1zOiBzdGF0ZS5kYXRhZ3JpZC5nZXRJbihbR1JJRC5pZCwgJ3NlbGVjdGVkSXRlbXMnXSwgTGlzdCgpKSxcbiAgICBkYXRhOiBzdGF0ZS5kYXRhZ3JpZC5nZXRJbihbR1JJRC5pZCwgJ2RhdGEnXSwgTGlzdCgpKSxcbiAgICBlZGl0RGF0YTogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdlZGl0RGF0YSddLCBNYXAoKSksXG4gICAgY3JlYXRlRGF0YTogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdjcmVhdGVEYXRhJ10sIExpc3QoKSksXG4gICAgZmlsdGVyRGF0YTogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdjb25maWcnLCAnZmlsdGVyaW5nRGF0YScsICdmaWx0ZXJEYXRhJ10sIE1hcCgpKSxcbiAgICBjZWxsTWVzc2FnZXM6IHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnY2VsbE1lc3NhZ2VzJ10sIE1hcCgpKSxcbiAgICBjcmVhdGVDZWxsTWVzc2FnZXM6IHN0YXRlLmRhdGFncmlkLmdldEluKFtHUklELmlkLCAnY3JlYXRlQ2VsbE1lc3NhZ2VzJ10sIE1hcCgpKSxcbiAgICBhbGxEYXRhU2l6ZTogc3RhdGUuZGF0YWdyaWQuZ2V0SW4oW0dSSUQuaWQsICdhbGxEYXRhJ10sIExpc3QoKSkuc2l6ZSxcbiAgICBsYW5ndWFnZTogVXRpbHMuZ2V0TGFuZ3VhZ2UoR1JJRCwgc3RhdGUudXNlciksXG4gICAgZGF0ZUZvcm1hdDogVXRpbHMuZ2V0RGF0ZUZvcm1hdChHUklELCBzdGF0ZS51c2VyKSxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogVXRpbHMuZ2V0VGhvdXNhbmRTZXBhcmF0b3IoR1JJRCwgc3RhdGUudXNlciksXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogVXRpbHMuZ2V0RGVjaW1hbFNlcGFyYXRvcihHUklELCBzdGF0ZS51c2VyKSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRhdGFncmlkQWN0aW9ucztcblxuQGluamVjdEludGxcbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUdyaWQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHByb3BUeXBlcztcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBjdXJyZW50Um93OiAwLCBjdXJyZW50Q29sdW1uOiAwIH07XG4gICAgdGhpcy5jZWxsUmVmcyA9IHt9O1xuICAgIHRoaXMuZm9jdXNUb0NyZWF0ZUNlbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzVG9FZGl0Q2VsbCA9IGZhbHNlOyAvLyBUT0RPOiBIYW5kbGUgZm9jdXNpbmcgd2hlbiB0cnVlXG4gICAgdGhpcy5mb2N1c1RvRXJyb3JDZWxsID0gZmFsc2U7IC8vIFRPRE86IEhhbmRsZSBmb2N1c2luZyB3aGVuIHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuaW52YWxpZGF0ZSh0aGlzLnByb3BzLmdyaWQpO1xuICB9XG5cbiAgb25Db2x1bW5SZXNpemVFbmRDYWxsYmFjayA9IChuZXdDb2x1bW5XaWR0aCwgY29sdW1uS2V5KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yZXNpemVDb2x1bW4odGhpcy5wcm9wcy5ncmlkLCBjb2x1bW5LZXksIG5ld0NvbHVtbldpZHRoKTtcbiAgfVxuXG4gIG9uQ3JlYXRlQ2VsbEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTlRFUikge1xuICAgICAgdGhpcy5wcm9wcy5hZGROZXdJdGVtKHRoaXMucHJvcHMuZ3JpZCwgVXRpbHMuZ2V0Q29sdW1uRGVmYXVsdFZhbHVlcyh0aGlzLnByb3BzLmNvbHVtbnMpKTtcbiAgICAgIHRoaXMuZm9jdXNUb0NyZWF0ZUNlbGwgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uRWRpdENlbGxLZXlEb3duID0gKGNvbCwgcm93SW5kZXgpID0+IChlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlQXJyb3dOYXZpZ2F0aW9uKSB7XG4gICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCByb3dzU2l6ZSA9IHRoaXMucHJvcHMuZGF0YS5zaXplO1xuICAgICAgY29uc3QgY29sdW1uS2V5ID0gVXRpbHMuZ2V0Q29sdW1uS2V5KGNvbCk7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOOiB7XG4gICAgICAgICAgaWYgKGNvbC52YWx1ZVR5cGUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHRoaXMuY2VsbFJlZnNbYCR7dGhpcy5wcm9wcy5ncmlkLmlkfV8ke2NvbHVtbktleX1fJHtyb3dJbmRleCArIDF9YF07XG4gICAgICAgICAgICB0aGlzLm1vdmVDZWxsRm9jdXMobmV4dEVsZW1lbnQsIHJvd0luZGV4ICsgMSwgLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIEtFWV9DT0RFUy5VUDoge1xuICAgICAgICAgIGlmIChjb2wudmFsdWVUeXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB0aGlzLmNlbGxSZWZzW2Ake3RoaXMucHJvcHMuZ3JpZC5pZH1fJHtjb2x1bW5LZXl9XyR7cm93SW5kZXggLSAxfWBdO1xuICAgICAgICAgICAgdGhpcy5tb3ZlQ2VsbEZvY3VzKG5leHRFbGVtZW50LCByb3dJbmRleCAtIDEsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuVEFCOlxuICAgICAgICBjYXNlIEtFWV9DT0RFUy5SSUdIVDpcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuTEVGVDoge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgY29sdW1uSW5kID0gY29sdW1ucy5maW5kSW5kZXgoYyA9PiBjLnZhbHVlS2V5UGF0aC5qb2luKCkgPT09IGNvbHVtbktleSk7XG4gICAgICAgICAgaWYgKGNvbHVtbkluZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmV4dEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJvd0luZCA9IHJvd0luZGV4O1xuICAgICAgICAgICAgd2hpbGUgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5MRUZUIHx8IChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5UQUIgJiYgZS5zaGlmdEtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5JbmQgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgY29sdW1uSW5kID0gY29sdW1ucy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgcm93SW5kIC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kICsgMSA8IGNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5JbmQgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZCArIDEgPCByb3dzU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgY29sdW1uSW5kID0gMDtcbiAgICAgICAgICAgICAgICAgIHJvd0luZCArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgbmV4dENvbHVtbktleSA9IFV0aWxzLmdldENvbHVtbktleShjb2x1bW5zW2NvbHVtbkluZF0pO1xuICAgICAgICAgICAgICBuZXh0RWxlbWVudCA9IHRoaXMuY2VsbFJlZnNbYCR7dGhpcy5wcm9wcy5ncmlkLmlkfV8ke25leHRDb2x1bW5LZXl9XyR7cm93SW5kfWBdO1xuICAgICAgICAgICAgICBkaXNhYmxlZCA9IG5leHRFbGVtZW50ID8gbmV4dEVsZW1lbnQuZGlzYWJsZWQgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZGlzYWJsZWQgJiYgbmV4dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2VsbEZvY3VzKG5leHRFbGVtZW50LCByb3dJbmQsIGNvbHVtbkluZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GaWx0ZXJDZWxsVmFsdWVDaGFuZ2UgPSAoY29sLCB2YWx1ZVBhcnNlcikgPT4gKGV2ZW50T3JEYXRhKSA9PiB7XG4gICAgbGV0IHJhd1ZhbHVlO1xuICAgIC8vIGV2ZW50T3JEYXRhIGNhbiBiZSBpbnB1dCBvbkNoYW5nZSBldmVudCwgcmVhY3Qtc2VsZWN0IG9uQ2hhbmdlIG9yIHJlYWN0LWRheS1waWNrZXIgb25DaGFuZ2VcbiAgICBpZiAoZXZlbnRPckRhdGEpIHtcbiAgICAgIGlmIChldmVudE9yRGF0YS50YXJnZXQgIT09IHVuZGVmaW5lZCkgcmF3VmFsdWUgPSBldmVudE9yRGF0YS50YXJnZXQudmFsdWU7XG4gICAgICBlbHNlIGlmIChldmVudE9yRGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSByYXdWYWx1ZSA9IGV2ZW50T3JEYXRhLnZhbHVlO1xuICAgICAgZWxzZSByYXdWYWx1ZSA9IGV2ZW50T3JEYXRhO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFyc2VyKHJhd1ZhbHVlKTtcbiAgICB0aGlzLnByb3BzLmZpbHRlckNlbGxWYWx1ZUNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuZ3JpZCxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1ucyxcbiAgICAgIGNvbCxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBvbkNyZWF0ZUNlbGxWYWx1ZUNoYW5nZSA9IChyb3dJbmRleCwgY29sLCB2YWx1ZVBhcnNlcikgPT4gKGV2ZW50T3JEYXRhKSA9PiB7XG4gICAgbGV0IHJhd1ZhbHVlO1xuICAgIC8vIGV2ZW50T3JEYXRhIGNhbiBiZSBpbnB1dCBvbkNoYW5nZSBldmVudCwgcmVhY3Qtc2VsZWN0IG9uQ2hhbmdlIG9yIHJlYWN0LWRheS1waWNrZXIgb25DaGFuZ2VcbiAgICBpZiAoZXZlbnRPckRhdGEpIHtcbiAgICAgIGlmIChldmVudE9yRGF0YS50YXJnZXQgIT09IHVuZGVmaW5lZCkgcmF3VmFsdWUgPSBldmVudE9yRGF0YS50YXJnZXQudmFsdWU7XG4gICAgICBlbHNlIGlmIChldmVudE9yRGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSByYXdWYWx1ZSA9IGV2ZW50T3JEYXRhLnZhbHVlO1xuICAgICAgZWxzZSByYXdWYWx1ZSA9IGV2ZW50T3JEYXRhO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFyc2VyKHJhd1ZhbHVlKTtcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUNlbGxWYWx1ZUNoYW5nZSh0aGlzLnByb3BzLmdyaWQsIHJvd0luZGV4LCBjb2wudmFsdWVLZXlQYXRoLCB2YWx1ZSk7XG4gICAgaWYgKGNvbC5vbkNyZWF0ZVZhbHVlQ2hhbmdlKSB7XG4gICAgICBjb2wub25DcmVhdGVWYWx1ZUNoYW5nZSh2YWx1ZSwgY29sLnZhbHVlS2V5UGF0aCwgcm93SW5kZXgpO1xuICAgIH1cbiAgICBpZiAoY29sLm9uVmFsdWVNYXRjaENoYW5nZVZhbHVlICYmIHZhbHVlID09PSBjb2wub25WYWx1ZU1hdGNoQ2hhbmdlVmFsdWUubWF0Y2hWYWx1ZSkge1xuICAgICAgLy8gQ2FsbCBzcGVjaWFsIHBhaXJlZCB2YWx1ZSBjaGFuZ2Ugb24gb3RoZXIgY2VsbCBpZiB2YWx1ZSBtYXRjaGVzXG4gICAgICB0aGlzLm9uQ3JlYXRlQ2VsbFZhbHVlQ2hhbmdlKFxuICAgICAgICByb3dJbmRleCxcbiAgICAgICAgeyB2YWx1ZUtleVBhdGg6IGNvbC5vblZhbHVlTWF0Y2hDaGFuZ2VWYWx1ZS5uZXdWYWx1ZUtleVBhdGggfSxcbiAgICAgICAgdiA9PiB2LFxuICAgICAgKShjb2wub25WYWx1ZU1hdGNoQ2hhbmdlVmFsdWUubmV3VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY29sLnZhbGlkYXRvcnMpIHtcbiAgICAgIHRoaXMucHJvcHMuY3JlYXRlQ2VsbFZhbHVlVmFsaWRhdGUoXG4gICAgICAgIHRoaXMucHJvcHMuZ3JpZCxcbiAgICAgICAgcm93SW5kZXgsXG4gICAgICAgIGNvbC52YWx1ZUtleVBhdGgsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb2wudmFsaWRhdG9ycyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25FZGl0Q2VsbFZhbHVlQ2hhbmdlID0gKHJvd0luZGV4LCBjb2wsIHZhbHVlUGFyc2VyKSA9PiAoZXZlbnRPckRhdGEpID0+IHtcbiAgICBjb25zdCBkYXRhSWQgPSB0aGlzLmdldERhdGFJZEJ5Um93SW5kZXgocm93SW5kZXgpO1xuICAgIGxldCByYXdWYWx1ZTtcbiAgICAvLyBldmVudE9yRGF0YSBjYW4gYmUgaW5wdXQgb25DaGFuZ2UgZXZlbnQsIHJlYWN0LXNlbGVjdCBvbkNoYW5nZSBvciByZWFjdC1kYXktcGlja2VyIG9uQ2hhbmdlXG4gICAgaWYgKGV2ZW50T3JEYXRhKSB7XG4gICAgICBpZiAoZXZlbnRPckRhdGEudGFyZ2V0ICE9PSB1bmRlZmluZWQpIHJhd1ZhbHVlID0gZXZlbnRPckRhdGEudGFyZ2V0LnZhbHVlO1xuICAgICAgZWxzZSBpZiAoZXZlbnRPckRhdGEudmFsdWUgIT09IHVuZGVmaW5lZCkgcmF3VmFsdWUgPSBldmVudE9yRGF0YS52YWx1ZTtcbiAgICAgIGVsc2UgcmF3VmFsdWUgPSBldmVudE9yRGF0YTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZVBhcnNlcihyYXdWYWx1ZSk7XG4gICAgdGhpcy5wcm9wcy5lZGl0Q2VsbFZhbHVlQ2hhbmdlKHRoaXMucHJvcHMuZ3JpZCwgZGF0YUlkLCBjb2wudmFsdWVLZXlQYXRoLCB2YWx1ZSk7XG4gICAgaWYgKGNvbC5vbkVkaXRWYWx1ZUNoYW5nZSkge1xuICAgICAgY29sLm9uRWRpdFZhbHVlQ2hhbmdlKHZhbHVlLCBjb2wudmFsdWVLZXlQYXRoLCByb3dJbmRleCwgZGF0YUlkKTtcbiAgICB9XG4gICAgaWYgKGNvbC5vblZhbHVlTWF0Y2hDaGFuZ2VWYWx1ZSAmJiB2YWx1ZSA9PT0gY29sLm9uVmFsdWVNYXRjaENoYW5nZVZhbHVlLm1hdGNoVmFsdWUpIHtcbiAgICAgIC8vIENhbGwgc3BlY2lhbCBwYWlyZWQgdmFsdWUgY2hhbmdlIG9uIG90aGVyIGNlbGwgaWYgdmFsdWUgbWF0Y2hlc1xuICAgICAgdGhpcy5vbkVkaXRDZWxsVmFsdWVDaGFuZ2UoXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICB7IHZhbHVlS2V5UGF0aDogY29sLm9uVmFsdWVNYXRjaENoYW5nZVZhbHVlLm5ld1ZhbHVlS2V5UGF0aCB9LFxuICAgICAgICB2ID0+IHYsXG4gICAgICApKGNvbC5vblZhbHVlTWF0Y2hDaGFuZ2VWYWx1ZS5uZXdWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjb2wudmFsaWRhdG9ycykge1xuICAgICAgdGhpcy5wcm9wcy5lZGl0Q2VsbFZhbHVlVmFsaWRhdGUoXG4gICAgICAgIHRoaXMucHJvcHMuZ3JpZCxcbiAgICAgICAgZGF0YUlkLFxuICAgICAgICBjb2wudmFsdWVLZXlQYXRoLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29sLnZhbGlkYXRvcnMsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uQ3JlYXRlQ2VsbEJsdXIgPSAocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpID0+IChlKSA9PiB7XG4gICAgaWYgKGNvbC5vbkNyZWF0ZUJsdXIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IChlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgZS50YXJnZXQudmFsdWUgOlxuICAgICAgICB0aGlzLmdldEVkaXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCk7XG4gICAgICBpZiAodmFsdWVQYXJzZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlUGFyc2VyKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbC5vbkNyZWF0ZUJsdXIodmFsdWUsIHJvd0luZGV4KTtcbiAgICB9XG4gIH1cblxuICBvbkVkaXRDZWxsQmx1ciA9IChyb3dJbmRleCwgY29sLCB2YWx1ZVBhcnNlcikgPT4gKGUpID0+IHtcbiAgICBpZiAoY29sLm9uRWRpdEJsdXIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IChlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgZS50YXJnZXQudmFsdWUgOlxuICAgICAgICB0aGlzLmdldEVkaXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCk7XG4gICAgICBpZiAodmFsdWVQYXJzZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlUGFyc2VyKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFJZCA9IHRoaXMuZ2V0RGF0YUlkQnlSb3dJbmRleChyb3dJbmRleCk7XG4gICAgICBjb2wub25FZGl0Qmx1cih2YWx1ZSwgcm93SW5kZXgsIGRhdGFJZCk7XG4gICAgfVxuICB9XG5cbiAgb25DZWxsRm9jdXMgPSAoY2VsbFR5cGUsIGlucHV0VHlwZSwgcm93SW5kZXgsIGNvbHVtbktleSkgPT4gKGUpID0+IHtcbiAgICBpZiAoaW5wdXRUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XG4gICAgfVxuICAgIGlmIChjZWxsVHlwZSA9PT0gJ2VkaXQnICYmIHRoaXMucHJvcHMuY2VsbFNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5jZWxsU2VsZWN0aW9uQ2hhbmdlKHRoaXMucHJvcHMuZ3JpZCwgTWFwKHsgcm93SW5kZXgsIGNvbHVtbktleSB9KSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YUlkQnlSb3dJbmRleCA9IHJvd0luZGV4ID0+XG4gICAgdGhpcy5wcm9wcy5kYXRhLmdldEluKFtyb3dJbmRleCwgLi4udGhpcy5wcm9wcy5ncmlkLmlkS2V5UGF0aF0pO1xuXG4gIGdldFNlbGVjdGVkSXRlbUluZGV4ID0gKGlkKSA9PiB7XG4gICAgaWYgKCFpZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvcHMuZGF0YS5maW5kSW5kZXgodiA9PiB2LmdldEluKHRoaXMucHJvcHMuZ3JpZC5pZEtleVBhdGgpID09PSBpZCk7XG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IGluZGV4O1xuICB9XG5cbiAgZ2V0RWRpdEl0ZW1WYWx1ZSA9IChyb3dJbmRleCwgY29sKSA9PiB7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZSB0byBkaXNwbGF5IGluIGVkaXQgY2VsbFxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXREYXRhSWRCeVJvd0luZGV4KHJvd0luZGV4KTtcbiAgICBjb25zdCBlZGl0VmFsdWUgPSB0aGlzLnByb3BzLmVkaXREYXRhLmdldEluKFtpZCwgLi4uY29sLnZhbHVlS2V5UGF0aF0sIHVuZGVmaW5lZCk7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWU7XG4gICAgaWYgKGVkaXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcmlnaW5hbFZhbHVlID0gdGhpcy5wcm9wcy5kYXRhLmdldEluKFtyb3dJbmRleCwgLi4uY29sLnZhbHVlS2V5UGF0aF0sICcnKTtcbiAgICB9IGVsc2UgaWYgKGVkaXRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWRpdFZhbHVlO1xuICAgIH1cbiAgICBpZiAob3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCB8fCBvcmlnaW5hbFZhbHVlID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy8gU3BlY2lhbCBmb3JtYXR0aW5nIGJ5IGNvbXBvbmVudCB0eXBlXG4gICAgaWYgKGNvbC5jb21wb25lbnRUeXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGlmIChtb21lbnQob3JpZ2luYWxWYWx1ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudC51dGMob3JpZ2luYWxWYWx1ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQob3JpZ2luYWxWYWx1ZSkuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKG9yaWdpbmFsVmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjb2wuY29tcG9uZW50VHlwZSA9PT0gJ2Zsb2F0JyAmJlxuICAgICAgU3RyaW5nKG9yaWdpbmFsVmFsdWUpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBTdHJpbmcob3JpZ2luYWxWYWx1ZSkucmVwbGFjZSgnLicsIHRoaXMucHJvcHMuZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgfVxuICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICB9XG5cbiAgZ2V0Q3JlYXRlSXRlbVZhbHVlID0gKHJvd0luZGV4LCBjb2wpID0+IHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnByb3BzLmNyZWF0ZURhdGEuZ2V0SW4oW3Jvd0luZGV4LCAuLi5jb2wudmFsdWVLZXlQYXRoXSwgJycpO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGdldEZpbHRlckl0ZW1WYWx1ZSA9IChjb2wpID0+IHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnByb3BzLmZpbHRlckRhdGEuZ2V0KFV0aWxzLmdldENvbHVtbktleShjb2wpLCAnJyk7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZSA9IChyb3dJbmRleCwgY29sLCBtb2RlKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudERpc2FibGVkID0gISFjb2wuZGlzYWJsZUVkaXRpbmc7XG4gICAgLy8gY2hlY2sgaWYgY29tcG9uZW50IGlzIGRpc2FibGVkIGJ5IG90aGVyIGNvbHVtbiBkYXRhXG4gICAgaWYgKCFjb21wb25lbnREaXNhYmxlZCAmJiBjb2wuZGlzYWJsZUVkaXRpbmdPblZhbHVlTWF0Y2gpIHtcbiAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xuICAgICAgICBjb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZ2V0Q3JlYXRlSXRlbVZhbHVlKFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIHsgdmFsdWVLZXlQYXRoOiBjb2wuZGlzYWJsZUVkaXRpbmdPblZhbHVlTWF0Y2gubWF0Y2hWYWx1ZUtleVBhdGggfSxcbiAgICAgICAgKSA9PT0gY29sLmRpc2FibGVFZGl0aW5nT25WYWx1ZU1hdGNoLm1hdGNoVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZ2V0RWRpdEl0ZW1WYWx1ZShcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICB7IHZhbHVlS2V5UGF0aDogY29sLmRpc2FibGVFZGl0aW5nT25WYWx1ZU1hdGNoLm1hdGNoVmFsdWVLZXlQYXRoIH0sXG4gICAgICAgICkgPT09IGNvbC5kaXNhYmxlRWRpdGluZ09uVmFsdWVNYXRjaC5tYXRjaFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50RGlzYWJsZWQ7XG4gIH1cblxuICBnZXRSb3dDbGFzc05hbWUgPSAocm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBncmlkLFxuICAgICAgaXNDcmVhdGluZyxcbiAgICAgIGlzRWRpdGluZyxcbiAgICAgIGNyZWF0ZURhdGEsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgZGF0YSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gWydvYy1kYXRhZ3JpZC1yb3cnXTtcbiAgICBsZXQgZXh0cmFSb3dDb3VudCA9IDA7IC8vIGhvdyBtYW55IHJvd3MgdG8gaWdub3JlIGZyb20gdG9wLCBuZXcgKyBmaWx0ZXIgcm93c1xuICAgIGlmIChpc0NyZWF0aW5nKSBleHRyYVJvd0NvdW50ID0gY3JlYXRlRGF0YS5zaXplO1xuICAgIGlmIChpc0NyZWF0aW5nKSB7XG4gICAgICBpZiAocm93SW5kZXggPD0gKGV4dHJhUm93Q291bnQgLSAxKSkge1xuICAgICAgICByb3dDbGFzc05hbWVzLnB1c2goJ29jLWRhdGFncmlkLXJvdy1uZXcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRWRpdGluZykge1xuICAgICAgcm93Q2xhc3NOYW1lcy5wdXNoKCdvYy1kYXRhZ3JpZC1yb3ctZWRpdCcpO1xuICAgIH1cblxuXG4gICAgLy8gY2hlY2sgaWYgcm93IGlzIHNlbGVjdGVkXG4gICAgaWYgKCghaXNDcmVhdGluZyAmJiAhaXNFZGl0aW5nKSAmJlxuICAgICAgICAoc2VsZWN0ZWRJdGVtcyAmJiBncmlkLmlkS2V5UGF0aCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGRhdGEuZ2V0SW4oW3Jvd0luZGV4IC0gZXh0cmFSb3dDb3VudCwgLi4uZ3JpZC5pZEtleVBhdGhdKSkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgcm93Q2xhc3NOYW1lcy5wdXNoKCdpcy1zZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnJvd0NsYXNzTmFtZUdldHRlcikge1xuICAgICAgcmV0dXJuIHJvd0NsYXNzTmFtZXMuam9pbignICcpICsgJyAnICsgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWVHZXR0ZXIocm93SW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcm93Q2xhc3NOYW1lcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRDZWxsTWVzc2FnZXMgPSAocm93SW5kZXgsIGNvbCwgY2VsbFR5cGUpID0+IHtcbiAgICBjb25zdCByZXR1cm5EYXRhID0ge307XG4gICAgaWYgKCF0aGlzLnByb3BzLmdyaWQuaWRLZXlQYXRoIHx8ICFjb2wudmFsdWVLZXlQYXRoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICB9XG4gICAgbGV0IGluZm9NZXNzYWdlO1xuICAgIGxldCBlcnJvck1lc3NhZ2U7XG4gICAgbGV0IHdhcm5pbmdNZXNzYWdlO1xuICAgIGlmIChjZWxsVHlwZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIGluZm9NZXNzYWdlID0gdGhpcy5wcm9wcy5jcmVhdGVDZWxsTWVzc2FnZXMuZ2V0SW4oWydpbmZvJywgcm93SW5kZXgsIC4uLmNvbC52YWx1ZUtleVBhdGhdKTtcbiAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMucHJvcHMuY3JlYXRlQ2VsbE1lc3NhZ2VzLmdldEluKFsnZXJyb3InLCByb3dJbmRleCwgLi4uY29sLnZhbHVlS2V5UGF0aF0pO1xuICAgICAgd2FybmluZ01lc3NhZ2UgPSB0aGlzLnByb3BzLmNyZWF0ZUNlbGxNZXNzYWdlcy5nZXRJbihbJ3dhcm5pbmcnLCByb3dJbmRleCwgLi4uY29sLnZhbHVlS2V5UGF0aF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0RGF0YUlkQnlSb3dJbmRleChyb3dJbmRleCk7XG4gICAgICBpbmZvTWVzc2FnZSA9IHRoaXMucHJvcHMuY2VsbE1lc3NhZ2VzLmdldEluKFsnaW5mbycsIGlkLCAuLi5jb2wudmFsdWVLZXlQYXRoXSk7XG4gICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLnByb3BzLmNlbGxNZXNzYWdlcy5nZXRJbihbJ2Vycm9yJywgaWQsIC4uLmNvbC52YWx1ZUtleVBhdGhdKTtcbiAgICAgIHdhcm5pbmdNZXNzYWdlID0gdGhpcy5wcm9wcy5jZWxsTWVzc2FnZXMuZ2V0SW4oWyd3YXJuaW5nJywgaWQsIC4uLmNvbC52YWx1ZUtleVBhdGhdKTtcbiAgICB9XG4gICAgaWYgKGluZm9NZXNzYWdlKSB7XG4gICAgICByZXR1cm5EYXRhLmluZm9NZXNzYWdlID0gaW5mb01lc3NhZ2U7XG4gICAgfVxuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHJldHVybkRhdGEuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cbiAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgIHJldHVybkRhdGEud2FybmluZ01lc3NhZ2UgPSB3YXJuaW5nTWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cblxuICBnZXRTY3JvbGxUb1JvdyA9ICgpID0+IHtcbiAgICBsZXQgc2Nyb2xsVG9Sb3c7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNDcmVhdGluZyAmJiAhdGhpcy5mb2N1c1RvQ3JlYXRlQ2VsbCkgcmV0dXJuIHNjcm9sbFRvUm93O1xuICAgIGlmICh0aGlzLmZvY3VzVG9DcmVhdGVDZWxsKSB7XG4gICAgICBjb25zdCBzY3JvbGxOZXdSb3cgPSB0aGlzLnByb3BzLmNyZWF0ZURhdGEuc2l6ZSAtIDE7XG4gICAgICBpZiAoc2Nyb2xsTmV3Um93ID49IDApIHtcbiAgICAgICAgc2Nyb2xsVG9Sb3cgPSBzY3JvbGxOZXdSb3c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzRWRpdGluZykge1xuICAgICAgICBzY3JvbGxUb1JvdyA9IHRoaXMuc3RhdGUuY3VycmVudFJvdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbFRvUm93ID0gdGhpcy5wcm9wcy5zY3JvbGxUb1JvdzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFRvUm93ID09PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zLnNpemUgPiAwKSB7XG4gICAgICAgIHNjcm9sbFRvUm93ID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JbmRleCh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMuZmlyc3QoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY3JvbGxUb1JvdztcbiAgfVxuXG4gIGhhbmRsZUNlbGxTZWxlY3QgPSAoY2VsbFR5cGUsIHJvd0luZGV4LCBjb2x1bW5LZXkpID0+ICgpID0+IHtcbiAgICBpZiAoY2VsbFR5cGUgPT09ICd2aWV3JyAmJiB0aGlzLnByb3BzLmNlbGxTZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbFNlbGVjdGlvbkNoYW5nZSh0aGlzLnByb3BzLmdyaWQsIE1hcCh7IHJvd0luZGV4LCBjb2x1bW5LZXkgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNyZWF0ZUNlbGxSZWYgPSAocm93SW5kZXgsIGNvbCkgPT4gKHJlZikgPT4ge1xuICAgIC8vIEZvY3VzIHRvIGNyZWF0ZSBjZWxsXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5jcmVhdGVEYXRhLnNpemUgJiZcbiAgICAgIHRoaXMucHJvcHMuY3JlYXRlRGF0YS5zaXplID09PSByb3dJbmRleCArIDEgJiZcbiAgICAgIHRoaXMuZm9jdXNUb0NyZWF0ZUNlbGwgJiZcbiAgICAgICF0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2NyZWF0ZScpXG4gICAgKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIHRoaXMuZm9jdXNUb0NyZWF0ZUNlbGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbFJlZiA9IChyb3dJbmRleCwgY29sKSA9PiAocmVmKSA9PiB7XG4gICAgY29uc3QgY29sdW1uS2V5ID0gVXRpbHMuZ2V0Q29sdW1uS2V5KGNvbCk7XG4gICAgaWYgKHRoaXMuZm9jdXNUb0VkaXRDZWxsICYmICF0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2VkaXQnKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSb3dJbmRleCA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtSW5kZXgodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zLmZpcnN0KCkpO1xuICAgICAgY29uc3QgeyBzZWxlY3RlZENlbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoc2VsZWN0ZWRDZWxsLnNpemUgPiAwKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENlbGwuZ2V0KCdyb3dJbmRleCcpID09PSByb3dJbmRleCAmJiBzZWxlY3RlZENlbGwuZ2V0KCdjb2x1bW5LZXknKSA9PT0gY29sdW1uS2V5KSB7XG4gICAgICAgICAgcmVmLmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5mb2N1c1RvRWRpdENlbGwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFJvd0luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvRWRpdENlbGwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRSb3dJbmRleCA9PT0gcm93SW5kZXgpIHtcbiAgICAgICAgcmVmLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuZm9jdXNUb0VkaXRDZWxsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZUFycm93TmF2aWdhdGlvbikge1xuICAgICAgdGhpcy5jZWxsUmVmc1tgJHt0aGlzLnByb3BzLmdyaWQuaWR9XyR7Y29sdW1uS2V5fV8ke3Jvd0luZGV4fWBdID0gcmVmO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVDZWxsRm9jdXMgPSAobmV4dEVsZW1lbnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCkgPT4ge1xuICAgIGlmIChuZXh0RWxlbWVudCAmJiAobmV4dEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnIHx8IG5leHRFbGVtZW50LnR5cGUgPT09ICdudW1iZXInKSkge1xuICAgICAgaWYgKHJvd0luZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFJvdzogcm93SW5kZXggfSk7XG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50Q29sdW1uOiBjb2x1bW5JbmRleCB9KTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbmV4dEVsZW1lbnQuc2VsZWN0KCksIDUwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3Rpb25DaGVja0JveE9uQ2hhbmdlID0gcm93SW5kZXggPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaXRlbVNlbGVjdGlvbkNoYW5nZSh0aGlzLnByb3BzLmdyaWQsIHJvd0luZGV4LCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICBnZW5lcmF0ZUNvbHVtbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgIGNvbnN0IHRhYkluZGV4ID0gU3RyaW5nKHRoaXMucHJvcHMudGFiSW5kZXgpO1xuICAgIGlmICh0aGlzLnByb3BzLnJvd1NlbGVjdENoZWNrYm94Q29sdW1uKSB7XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgY29sdW1uS2V5OiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICAgICAgICBjZWxsOiAocm93SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3dJdGVtID0gdGhpcy5wcm9wcy5kYXRhLmdldChyb3dJbmRleCk7XG4gICAgICAgICAgY29uc3QgaXRlbUlkID0gcm93SXRlbS5nZXRJbih0aGlzLnByb3BzLmdyaWQuaWRLZXlQYXRoKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtSWQpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtcm93LXNlbGVjdC1jaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3Rpb25DaGVja0JveE9uQ2hhbmdlKHJvd0luZGV4KX1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBjZWxsRWRpdDogKCkgPT4gbnVsbCxcbiAgICAgICAgY2VsbENyZWF0ZTogKCkgPT4gbnVsbCxcbiAgICAgICAgY2VsbEZpbHRlcjogKCkgPT4gbnVsbCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2libGVDb2x1bW5zID0gW107XG4gICAgdGhpcy5wcm9wcy52aXNpYmxlQ29sdW1ucy5mb3JFYWNoKCh2aXNpYmxlQ29sdW1uS2V5KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmNvbHVtbnMuZm9yRWFjaCgob3JnQ29sKSA9PiB7XG4gICAgICAgIGlmIChVdGlscy5nZXRDb2x1bW5LZXkob3JnQ29sKSA9PT0gdmlzaWJsZUNvbHVtbktleSkge1xuICAgICAgICAgIHZpc2libGVDb2x1bW5zLnB1c2gob3JnQ29sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmlzaWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB7XG4gICAgICAgIGhlYWRlcjogY29sLmhlYWRlcixcbiAgICAgICAgY29sdW1uS2V5OiBVdGlscy5nZXRDb2x1bW5LZXkoY29sKSxcbiAgICAgICAgd2lkdGg6IChjb2wud2lkdGggfHwgY29sLndpZHRoID09PSAwID8gY29sLndpZHRoIDogMjAwKSxcbiAgICAgICAgbWluV2lkdGg6IChjb2wubWluV2lkdGggfHwgY29sLm1pbldpZHRoID09PSAwID8gY29sLm1pbldpZHRoIDogNDApLFxuICAgICAgICBtYXhXaWR0aDogY29sLm1heFdpZHRoLFxuICAgICAgICBpc1Jlc2l6YWJsZTogIWNvbC5kaXNhYmxlUmVzaXppbmcsXG4gICAgICAgIGZpeGVkOiAhIWNvbC5maXhlZCxcbiAgICAgICAgYWxsb3dDZWxsc1JlY3ljbGluZzogISFjb2wuYWxsb3dDZWxsc1JlY3ljbGluZyxcbiAgICAgICAgZGlzYWJsZVNvcnRpbmc6ICEhY29sLmRpc2FibGVTb3J0aW5nLFxuICAgICAgICBpc1JlcXVpcmVkOiAhIWNvbC5pc1JlcXVpcmVkLFxuICAgICAgICBjb21wb25lbnRUeXBlOiBjb2wuY29tcG9uZW50VHlwZSxcbiAgICAgICAgc3R5bGU6IFV0aWxzLmdldENlbGxTdHlsZUJ5Q29sKGNvbCksXG4gICAgICB9O1xuICAgICAgaWYgKGNvbC52YWx1ZUtleVBhdGgpIHtcbiAgICAgICAgY29sdW1uLnZhbHVlS2V5UGF0aCA9IGNvbC52YWx1ZUtleVBhdGg7XG4gICAgICB9XG4gICAgICBpZiAoY29sLmZsZXhHcm93KSB7XG4gICAgICAgIGNvbHVtbi5mbGV4R3JvdyA9IGNvbC5mbGV4R3JvdztcbiAgICAgIH1cbiAgICAgIGlmIChjb2wudmFsdWVUeXBlKSB7XG4gICAgICAgIGNvbHVtbi52YWx1ZVR5cGUgPSBjb2wudmFsdWVUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbC5zb3J0Q29tcGFyYXRvcikge1xuICAgICAgICBjb2x1bW4uc29ydENvbXBhcmF0b3IgPSBjb2wuc29ydENvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoY29sLnNvcnRWYWx1ZUdldHRlcikge1xuICAgICAgICBjb2x1bW4uc29ydFZhbHVlR2V0dGVyID0gY29sLnNvcnRWYWx1ZUdldHRlcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlRW1wdHlDaGVja2VyID0gVXRpbHMuZ2V0VmFsdWVFbXB0eUNoZWNrZXIoY29sKTtcbiAgICAgIC8vIENlbGwgdmFsdWUgcmVuZGVyaW5nXG4gICAgICBjb25zdCB2YWx1ZVJlbmRlciA9IChyb3dJbmRleCwgZm9ybWF0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvcHMuZGF0YS5nZXRJbihbcm93SW5kZXgsIC4uLmNvbC52YWx1ZUtleVBhdGhdKTtcbiAgICAgICAgaWYgKHZhbHVlRW1wdHlDaGVja2VyKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlzUmVxdWlyZWQgPyA8TSBpZD1cIkdyaWRWYWx1ZUlzTWlzc2luZ1wiIC8+IDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdCA/IGZvcm1hdCh2YWwpIDogdmFsO1xuICAgICAgfTtcblxuICAgICAgaWYgKGNvbC5jZWxsKSB7XG4gICAgICAgIGNvbHVtbi5jZWxsID0gY29sLmNlbGw7XG4gICAgICB9IGVsc2UgaWYgKGNvbC52YWx1ZVJlbmRlcikge1xuICAgICAgICBjb2x1bW4uY2VsbCA9IHJvd0luZGV4ID0+IGNvbC52YWx1ZVJlbmRlcih0aGlzLnByb3BzLmRhdGEuZ2V0KHJvd0luZGV4KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGNvbC52YWx1ZVR5cGUpIHtcbiAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgICAgIGNvbHVtbi5jZWxsID0gcm93SW5kZXggPT5cbiAgICAgICAgICAgICAgdmFsdWVSZW5kZXIocm93SW5kZXgsIHYgPT4gPE4gdmFsdWU9e3Z9IHsuLi5jb2wucmVuZGVyQ29tcG9uZW50UHJvcHN9IC8+KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgY29sdW1uLmNlbGwgPSByb3dJbmRleCA9PlxuICAgICAgICAgICAgICB2YWx1ZVJlbmRlcihyb3dJbmRleCwgKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobW9tZW50KHYsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh2LCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9tZW50KHYpLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudC51dGModikuZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiA8TSBpZD1cIkdyaWRJbnZhbGlkRGF0ZVwiIC8+O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgY29sdW1uLmNlbGwgPSByb3dJbmRleCA9PlxuICAgICAgICAgICAgICB2YWx1ZVJlbmRlcihyb3dJbmRleCwgdiA9PiA8TSBpZD17diA/ICdZZXMnIDogJ05vJ30gey4uLmNvbC5yZW5kZXJDb21wb25lbnRQcm9wc30gLz4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbHVtbi5jZWxsID0gcm93SW5kZXggPT4gdmFsdWVSZW5kZXIocm93SW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDZWxsIGVkaXQvY3JlYXRlL2ZpbHRlciBjb21wb25lbnQgcmVuZGVyaW5nXG4gICAgICBpZiAoY29sLmNlbGxFZGl0KSB7XG4gICAgICAgIGNvbHVtbi5jZWxsRWRpdCA9IGNvbC5jZWxsRWRpdDtcbiAgICAgIH0gZWxzZSBpZiAoY29sLmVkaXRWYWx1ZVJlbmRlcikge1xuICAgICAgICBjb2x1bW4uY2VsbEVkaXQgPSByb3dJbmRleCA9PiBjb2wuZWRpdFZhbHVlUmVuZGVyKHRoaXMucHJvcHMuZGF0YS5nZXQocm93SW5kZXgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2wuY2VsbENyZWF0ZSkge1xuICAgICAgICBjb2x1bW4uY2VsbENyZWF0ZSA9IGNvbC5jZWxsQ3JlYXRlO1xuICAgICAgfSBlbHNlIGlmIChjb2wuY3JlYXRlVmFsdWVSZW5kZXIpIHtcbiAgICAgICAgY29sdW1uLmNlbGxDcmVhdGUgPSByb3dJbmRleCA9PiBjb2wuY3JlYXRlVmFsdWVSZW5kZXIodGhpcy5wcm9wcy5kYXRhLmdldChyb3dJbmRleCkpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbC5jZWxsRmlsdGVyKSB7XG4gICAgICAgIGNvbHVtbi5jZWxsRmlsdGVyID0gY29sLmNlbGxGaWx0ZXI7XG4gICAgICB9IGVsc2UgaWYgKGNvbC5maWx0ZXJWYWx1ZVJlbmRlcikge1xuICAgICAgICBjb2x1bW4uY2VsbEZpbHRlciA9IHJvd0luZGV4ID0+IGNvbC5maWx0ZXJWYWx1ZVJlbmRlcih0aGlzLnByb3BzLmRhdGEuZ2V0KHJvd0luZGV4KSk7XG4gICAgICB9XG4gICAgICBpZiAoY29sLmNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgbGV0IGVkaXRWYWx1ZVBhcnNlciA9IHZhbCA9PiB2YWw7XG4gICAgICAgIHN3aXRjaCAoY29sLmNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIC8vIFRPRE8gUkVGQUNUT1IgVE8gRlVOQ1RJT05cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlubGluZUVkaXQpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEVkaXQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEVkaXQgPSByb3dJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRFZGl0SXRlbVZhbHVlKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRDZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uRWRpdENlbGxCbHVyKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uQ2VsbEZvY3VzKCdlZGl0JywgY29sLmNvbXBvbmVudFR5cGUsIHJvd0luZGV4LCBjb2x1bW4uY29sdW1uS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uRWRpdENlbGxLZXlEb3duKGNvbCwgcm93SW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17dGhpcy5oYW5kbGVFZGl0Q2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BvY0RhdGFncmlkRWRpdElucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2VkaXQnKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbHVtbi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxDcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbENyZWF0ZSA9IHJvd0luZGV4ID0+IChcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldENyZWF0ZUl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DcmVhdGVDZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQ3JlYXRlQ2VsbEJsdXIocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNyZWF0ZUNlbGxLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17dGhpcy5oYW5kbGVDcmVhdGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBpZD17YG9jRGF0YWdyaWRDcmVhdGVJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fS0ke3Jvd0luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb2wuY3JlYXRlQ29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2NyZWF0ZScpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29sdW1uLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcmluZykge1xuICAgICAgICAgICAgICBpZiAoIWNvbHVtbi5jZWxsRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmNlbGxGaWx0ZXIgPSAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRGaWx0ZXJJdGVtVmFsdWUoY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJDZWxsVmFsdWVDaGFuZ2UoY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBpZD17YG9jRGF0YWdyaWRGaWx0ZXJJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb2wuZmlsdGVyQ29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb2x1bW4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlubGluZUVkaXQpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEVkaXQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEVkaXQgPSByb3dJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldEVkaXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRWRpdENlbGxWYWx1ZUNoYW5nZShyb3dJbmRleCwgY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25FZGl0Q2VsbEJsdXIocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25DZWxsRm9jdXMoJ2VkaXQnLCBjb2wuY29tcG9uZW50VHlwZSwgcm93SW5kZXgsIGNvbHVtbi5jb2x1bW5LZXkpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25FZGl0Q2VsbEtleURvd24oY29sLCByb3dJbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXt0aGlzLmhhbmRsZUVkaXRDZWxsUmVmKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBpZD17YG9jRGF0YWdyaWRFZGl0SW5wdXQtJHt0aGlzLnByb3BzLmdyaWQuaWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmVkaXRDb21wb25lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCAnZWRpdCcpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29sdW1uLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbENyZWF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5jZWxsQ3JlYXRlID0gcm93SW5kZXggPT4gKFxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRDcmVhdGVJdGVtVmFsdWUocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JlYXRlQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkNyZWF0ZUNlbGxCbHVyKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uQ2VsbEZvY3VzKCdjcmVhdGUnLCAnbnVtYmVyJywgcm93SW5kZXgsIGNvbHVtbi5jb2x1bW5LZXkpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25DcmVhdGVDZWxsS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWY9e3RoaXMuaGFuZGxlQ3JlYXRlQ2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHt0aGlzLnByb3BzLmdyaWQuaWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsICdjcmVhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbHVtbi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5jZWxsRmlsdGVyID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRGaWx0ZXJJdGVtVmFsdWUoY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJDZWxsVmFsdWVDaGFuZ2UoY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBpZD17YG9jRGF0YWdyaWRGaWx0ZXJJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fWB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb2wuZmlsdGVyQ29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb2x1bW4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICAgICAgZWRpdFZhbHVlUGFyc2VyID0gdmFsID0+XG4gICAgICAgICAgICAgIHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoYFteXFxcXGQke3RoaXMucHJvcHMuZGVjaW1hbFNlcGFyYXRvcn0rLV1gLCAnZycpLCAnJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmxpbmVFZGl0KSB7XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxFZGl0KSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmNlbGxFZGl0ID0gcm93SW5kZXggPT4gKFxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RWRpdEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FZGl0Q2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkVkaXRDZWxsQmx1cihyb3dJbmRleCwgY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uQ2VsbEZvY3VzKCdlZGl0JywgY29sLmNvbXBvbmVudFR5cGUsIHJvd0luZGV4LCBjb2x1bW4uY29sdW1uS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uRWRpdENlbGxLZXlEb3duKGNvbCwgcm93SW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17dGhpcy5oYW5kbGVFZGl0Q2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BvY0RhdGFncmlkRWRpdElucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2VkaXQnKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbHVtbi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxDcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbENyZWF0ZSA9IHJvd0luZGV4ID0+IChcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldENyZWF0ZUl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DcmVhdGVDZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQ3JlYXRlQ2VsbEJsdXIocm93SW5kZXgsIGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ3JlYXRlQ2VsbEtleURvd259XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXt0aGlzLmhhbmRsZUNyZWF0ZUNlbGxSZWYocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgb2NEYXRhZ3JpZENyZWF0ZUlucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5jcmVhdGVDb21wb25lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCAnY3JlYXRlJyl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb2x1bW4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyaW5nKSB7XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEZpbHRlciA9ICgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldEZpbHRlckl0ZW1WYWx1ZShjb2wpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpbHRlckNlbGxWYWx1ZUNoYW5nZShjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgb2NEYXRhZ3JpZEZpbHRlcklucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9YH1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5maWx0ZXJDb21wb25lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbHVtbi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gY29sLnNlbGVjdENvbXBvbmVudE9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RDb21wb25lbnRPcHRpb25zLmdldChjb2x1bW4uY29sdW1uS2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlubGluZUVkaXQpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEVkaXQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEVkaXQgPSByb3dJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y29sLnZhbHVlS2V5UGF0aC5qb2luKCkgKyAnLWVkaXQtJyArIHJvd0luZGV4fVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICBjb2wuZWRpdFNlbGVjdE9wdGlvbnNNb2QgJiYgc2VsZWN0T3B0aW9ucyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wuZWRpdFNlbGVjdE9wdGlvbnNNb2Qoc2VsZWN0T3B0aW9ucy5zbGljZSgpLCByb3dJbmRleCwgY29sKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RWRpdEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FZGl0Q2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkVkaXRDZWxsQmx1cihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkNlbGxGb2N1cygnZWRpdCcsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e3NlbGVjdE9wdGlvbnMgJiYgKHNlbGVjdE9wdGlvbnMubGVuZ3RoID4gOSl9XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17IWNvbC5pc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3Blbk9uRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmhhbmRsZUVkaXRDZWxsUmVmKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBvY0RhdGFncmlkRWRpdElucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgJ2VkaXQnKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxDcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbENyZWF0ZSA9IHJvd0luZGV4ID0+IChcbiAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjb2wudmFsdWVLZXlQYXRoLmpvaW4oKSArICctY3JlYXRlLScgKyByb3dJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgY29sLmNyZWF0ZVNlbGVjdE9wdGlvbnNNb2QgJiYgc2VsZWN0T3B0aW9ucyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wuY3JlYXRlU2VsZWN0T3B0aW9uc01vZChzZWxlY3RPcHRpb25zLnNsaWNlKCksIHJvd0luZGV4LCBjb2wpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRDcmVhdGVJdGVtVmFsdWUocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JlYXRlQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkNyZWF0ZUNlbGxCbHVyKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtzZWxlY3RPcHRpb25zICYmIChzZWxlY3RPcHRpb25zLmxlbmd0aCA+IDkpfVxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9eyFjb2wuaXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYmFja3NwYWNlUmVtb3Zlcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5PbkZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5oYW5kbGVDcmVhdGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHt0aGlzLnByb3BzLmdyaWQuaWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsICdjcmVhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5jZWxsRmlsdGVyID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2NvbC52YWx1ZUtleVBhdGguam9pbigpICsgJy1maWx0ZXInfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICBjb2wuZmlsdGVyU2VsZWN0T3B0aW9uc01vZCAmJiBzZWxlY3RPcHRpb25zID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5maWx0ZXJTZWxlY3RPcHRpb25zTW9kKHNlbGVjdE9wdGlvbnMuc2xpY2UoKSwgY29sKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRGaWx0ZXJJdGVtVmFsdWUoY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJDZWxsVmFsdWVDaGFuZ2UoY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtzZWxlY3RPcHRpb25zICYmIChzZWxlY3RPcHRpb25zLmxlbmd0aCA+IDkpfVxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3Blbk9uRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgb2NEYXRhZ3JpZEZpbHRlcklucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9YCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmNvbC5maWx0ZXJDb21wb25lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlubGluZUVkaXQpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEVkaXQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEVkaXQgPSByb3dJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldEVkaXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRWRpdENlbGxWYWx1ZUNoYW5nZShyb3dJbmRleCwgY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT17dGhpcy5wcm9wcy5sYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17dGhpcy5wcm9wcy5kYXRlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17dGhpcy5oYW5kbGVFZGl0Q2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgb2NEYXRhZ3JpZEVkaXRJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fS0ke3Jvd0luZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uRWRpdENlbGxLZXlEb3duKGNvbCwgcm93SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkVkaXRDZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uQ2VsbEZvY3VzKCdlZGl0JywgY29sLmNvbXBvbmVudFR5cGUsIHJvd0luZGV4LCBjb2x1bW4uY29sdW1uS2V5KSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmVkaXRDb21wb25lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCAnZWRpdCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxDcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbENyZWF0ZSA9IHJvd0luZGV4ID0+IChcbiAgICAgICAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0Q3JlYXRlSXRlbVZhbHVlKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyZWF0ZUNlbGxWYWx1ZUNoYW5nZShyb3dJbmRleCwgY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25DcmVhdGVDZWxsS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e3RoaXMucHJvcHMubGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e3RoaXMucHJvcHMuZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWY9e3RoaXMuaGFuZGxlQ3JlYXRlQ2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgb2NEYXRhZ3JpZENyZWF0ZUlucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsICdjcmVhdGUnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyaW5nKSB7XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2VsbEZpbHRlciA9ICgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RmlsdGVySXRlbVZhbHVlKGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmlsdGVyQ2VsbFZhbHVlQ2hhbmdlKGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17dGhpcy5wcm9wcy5kYXRlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT17dGhpcy5wcm9wcy5sYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgb2NEYXRhZ3JpZEZpbHRlcklucHV0LSR7dGhpcy5wcm9wcy5ncmlkLmlkfS0ke2NvbHVtbi5jb2x1bW5LZXl9YCxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmZpbHRlckNvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBbXG4gICAgICAgICAgICAgIHsgdmFsdWU6IHRydWUsIGxhYmVsOiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnWWVzJyB9KSB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdObycgfSkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmxpbmVFZGl0KSB7XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmNlbGxFZGl0KSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmNlbGxFZGl0ID0gcm93SW5kZXggPT4gKFxuICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2NvbC52YWx1ZUtleVBhdGguam9pbigpICsgJy1lZGl0LScgKyByb3dJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2VsZWN0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0RWRpdEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FZGl0Q2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlcil9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkVkaXRDZWxsQmx1cihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkNlbGxGb2N1cygnZWRpdCcsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9eyFjb2wuaXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYmFja3NwYWNlUmVtb3Zlcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5PbkZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5oYW5kbGVFZGl0Q2VsbFJlZihyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgb2NEYXRhZ3JpZEVkaXRJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fS0ke3Jvd0luZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb2wuZWRpdENvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsICdlZGl0Jyl9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWNvbHVtbi5jZWxsQ3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmNlbGxDcmVhdGUgPSByb3dJbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y29sLnZhbHVlS2V5UGF0aC5qb2luKCkgKyAnLWNyZWF0ZS0nICsgcm93SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldENyZWF0ZUl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DcmVhdGVDZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgZWRpdFZhbHVlUGFyc2VyKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQ3JlYXRlQ2VsbEJsdXIocm93SW5kZXgsIGNvbCl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9eyFjb2wuaXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYmFja3NwYWNlUmVtb3Zlcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5PbkZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5oYW5kbGVDcmVhdGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHt0aGlzLnByb3BzLmdyaWQuaWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsICdjcmVhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uY2VsbEZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5jZWxsRmlsdGVyID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2NvbC52YWx1ZUtleVBhdGguam9pbigpICsgJy1maWx0ZXInfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRGaWx0ZXJJdGVtVmFsdWUoY29sKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJDZWxsVmFsdWVDaGFuZ2UoY29sLCBlZGl0VmFsdWVQYXJzZXIpfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5PbkZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYG9jRGF0YWdyaWRGaWx0ZXJJbnB1dC0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtjb2x1bW4uY29sdW1uS2V5fWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jb2wuZmlsdGVyQ29tcG9uZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNDcmVhdGluZykge1xuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgd2lkdGg6IDM3LFxuICAgICAgICBpc1Jlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbHVtbktleTogJ3JlbW92ZU5ld0l0ZW0nLFxuICAgICAgICBjZWxsOiAoKSA9PiBudWxsLFxuICAgICAgICBjZWxsRWRpdDogKCkgPT4gbnVsbCxcbiAgICAgICAgY2VsbENyZWF0ZTogcm93SW5kZXggPT4gKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpZD17YG9jLWRhdGFncmlkLW5ldy1pdGVtLXJlbW92ZS0ke3RoaXMucHJvcHMuZ3JpZC5pZH0tJHtyb3dJbmRleH1gfVxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwiZGVsZXRlXCJcbiAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlbW92ZU5ld0l0ZW0odGhpcy5wcm9wcy5ncmlkLCByb3dJbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICAgY2VsbEZpbHRlcjogKCkgPT4gbnVsbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIGlzQ2VsbEVkaXRlZCA9IChyb3dJbmRleCwgY29sLCBjZWxsVHlwZSkgPT4ge1xuICAgIGlmIChjZWxsVHlwZSAhPT0gJ2VkaXQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXREYXRhSWRCeVJvd0luZGV4KHJvd0luZGV4KTtcbiAgICBpZiAodGhpcy5wcm9wcy5lZGl0RGF0YS5nZXRJbihbaWQsIC4uLmNvbC52YWx1ZUtleVBhdGhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNoZWNrZXIgZm9yIHNlbGVjdGlvbkNoZWNrYm94XG4gIGlzU2VsZWN0aW9uQ2hlY2tib3goY2VsbFByb3BzKSB7XG4gICAgY29uc3QgZXhwZWN0ZWRDb2x1bW5LZXkgPSAnc2VsZWN0aW9uQ2hlY2tib3gnO1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5yb3dTZWxlY3RDaGVja2JveENvbHVtbiAmJiBjZWxsUHJvcHMuY29sdW1uS2V5ID09PSBleHBlY3RlZENvbHVtbktleSk7XG4gIH1cblxuICBoYW5kbGVBZnRlckFkZEl0ZW0gPSAoKSA9PiB7XG4gICAgdGhpcy5mb2N1c1RvQ3JlYXRlQ2VsbCA9IHRydWU7XG4gIH1cblxuICBoYW5kbGVBZnRlckVkaXRQcmVzcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zLnNpemUpIHtcbiAgICAgIHRoaXMuZm9jdXNUb0VkaXRDZWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50Um93OiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBZnRlclZhbGlkYXRpb25FcnJvciA9ICgpID0+IHtcbiAgICB0aGlzLmZvY3VzVG9FcnJvckNlbGwgPSB0cnVlO1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSAoZSwgcm93SW5kZXgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3dTZWxlY3QgJiYgIXRoaXMucHJvcHMuaXNDcmVhdGluZyAmJiAhdGhpcy5wcm9wcy5pc0VkaXRpbmcpIHtcbiAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkge1xuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIGRvbid0IHRyaWdnZXIgc2VsZWN0aW9uIGNoYW5nZSBvbiBjaGVja2JveCBjbGlja1xuICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5pdGVtU2VsZWN0aW9uQ2hhbmdlKFxuICAgICAgICAgIHRoaXMucHJvcHMuZ3JpZCxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICB0aGlzLnByb3BzLm11bHRpU2VsZWN0ICYmIGUuY3RybEtleSxcbiAgICAgICAgICB0aGlzLnByb3BzLm11bHRpU2VsZWN0ICYmIGUuc2hpZnRLZXksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dDbGljayhlLCByb3dJbmRleCwgdGhpcy5wcm9wcy5kYXRhLmdldChyb3dJbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlckNlbGwgPSBjb2wgPT4gKGNlbGxQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQ3JlYXRpbmcsXG4gICAgICBpc0VkaXRpbmcsXG4gICAgICBjcmVhdGVEYXRhLFxuICAgICAgc2VsZWN0ZWRDZWxsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcm93SW5kZXgsIC4uLnByb3BzIH0gPSBjZWxsUHJvcHM7XG4gICAgY29uc3QgaXNDaGVja2JveCA9IHRoaXMuaXNTZWxlY3Rpb25DaGVja2JveChjZWxsUHJvcHMpO1xuICAgIGxldCBjZWxsO1xuICAgIGxldCBjZWxsVHlwZSA9ICd2aWV3JztcbiAgICBsZXQgZXh0cmFSb3dDb3VudCA9IDA7IC8vIGhvdyBtYW55IHJvd3MgdG8gaWdub3JlIGZyb20gdG9wLCBuZXcgKyBmaWx0ZXIgcm93c1xuICAgIGlmIChpc0NyZWF0aW5nKSBleHRyYVJvd0NvdW50ID0gY3JlYXRlRGF0YS5zaXplO1xuICAgIGlmIChpc0NyZWF0aW5nKSB7XG4gICAgICBpZiAocm93SW5kZXggPD0gKGV4dHJhUm93Q291bnQgLSAxKSkge1xuICAgICAgICBpZiAoY29sLmNlbGxDcmVhdGUpIHtcbiAgICAgICAgICBjZWxsID0gY29sLmNlbGxDcmVhdGUocm93SW5kZXgpO1xuICAgICAgICAgIGNlbGxUeXBlID0gJ2NyZWF0ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbCA9IG51bGw7XG4gICAgICAgICAgY2VsbFR5cGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsID0gY29sLmNlbGwocm93SW5kZXggLSBleHRyYVJvd0NvdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRWRpdGluZyAmJiBjb2wuY2VsbEVkaXQpIHtcbiAgICAgIGNlbGwgPSBjb2wuY2VsbEVkaXQocm93SW5kZXggLSBleHRyYVJvd0NvdW50KTtcbiAgICAgIGNlbGxUeXBlID0gJ2VkaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsID0gY29sLmNlbGwocm93SW5kZXggLSBleHRyYVJvd0NvdW50KTtcbiAgICB9XG4gICAgaWYgKChjZWxsVHlwZSA9PT0gJ3ZpZXcnIHx8IGNlbGxUeXBlID09PSAnZWRpdCcgfHwgY2VsbFR5cGUgPT09ICdjcmVhdGUnKSAmJiAhaXNDaGVja2JveCkge1xuICAgICAgY29uc3QgZ2V0Um93SW5kZXggPSAoY2VsbFR5cGUgPT09ICdjcmVhdGUnKSA/IHJvd0luZGV4IDogKHJvd0luZGV4IC0gZXh0cmFSb3dDb3VudCk7XG4gICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IHRoaXMuZ2V0Q2VsbE1lc3NhZ2VzKGdldFJvd0luZGV4LCBjb2wsIGNlbGxUeXBlKTtcbiAgICAgIGNvbnN0IGlzRWRpdGVkID0gdGhpcy5pc0NlbGxFZGl0ZWQoZ2V0Um93SW5kZXgsIGNvbCwgY2VsbFR5cGUpO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gKHNlbGVjdGVkQ2VsbC5nZXQoJ3Jvd0luZGV4JykgPT09IHJvd0luZGV4ICYmIHNlbGVjdGVkQ2VsbC5nZXQoJ2NvbHVtbktleScpID09PSBwcm9wcy5jb2x1bW5LZXkpID9cbiAgICAgICAgJ29jLWRhdGFncmlkLWNlbGwgaXMtc2VsZWN0ZWQnIDogJ29jLWRhdGFncmlkLWNlbGwnO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENlbGxcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e2NvbC5zdHlsZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNlbGxTZWxlY3QoY2VsbFR5cGUsIHJvd0luZGV4LCBwcm9wcy5jb2x1bW5LZXkpfVxuICAgICAgICA+XG4gICAgICAgICAgPENlbGxUb29sdGlwXG4gICAgICAgICAgICBpZD17Y2VsbFR5cGUgKyBjb2wuY29sdW1uS2V5ICsgKHJvd0luZGV4IC0gZXh0cmFSb3dDb3VudCl9XG4gICAgICAgICAgICBpc0VkaXRlZD17aXNFZGl0ZWR9XG4gICAgICAgICAgICBpc0Vycm9yPXshIW1lc3NhZ2VEYXRhLmVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIGlzV2FybmluZz17ISFtZXNzYWdlRGF0YS53YXJuaW5nTWVzc2FnZX1cbiAgICAgICAgICAgIGluZm9NZXNzYWdlPXttZXNzYWdlRGF0YS5pbmZvTWVzc2FnZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17bWVzc2FnZURhdGEuZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgd2FybmluZ01lc3NhZ2U9e21lc3NhZ2VEYXRhLndhcm5pbmdNZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgY2VsbCB9XG4gICAgICAgICAgPC9DZWxsVG9vbHRpcD5cbiAgICAgICAgPC9DZWxsPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDZWxsIHsuLi5wcm9wc30gY2xhc3NOYW1lPVwib2MtZGF0YWdyaWQtY2VsbFwiIHN0eWxlPXtjb2wuc3R5bGV9PnsgY2VsbCB9PC9DZWxsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb2x1bW5zID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5hbGxEYXRhU2l6ZSAmJiAhdGhpcy5wcm9wcy5pc0J1c3kgJiYgIXRoaXMucHJvcHMuaXNDcmVhdGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIGNvbHVtbktleT1cImRhdGFFbXB0eUNvbHVtblwiXG4gICAgICAgICAgaGVhZGVyPXs8Q2VsbCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxNIGlkPVwiR3JpZE5vSXRlbXNcIiAvPjwvQ2VsbD59XG4gICAgICAgICAgd2lkdGg9ezEwfVxuICAgICAgICAgIGlzUmVzaXphYmxlPXtmYWxzZX1cbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wcm9wcy52aXNpYmxlQ29sdW1ucy5zaXplKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0J1c3kpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICBjb2x1bW5LZXk9XCJkYXRhRW1wdHlDb2x1bW5cIlxuICAgICAgICAgICAgaGVhZGVyPXs8Q2VsbD4mbmJzcDs8L0NlbGw+fVxuICAgICAgICAgICAgd2lkdGg9ezEwfVxuICAgICAgICAgICAgaXNSZXNpemFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBjb2x1bW5LZXk9XCJkYXRhRW1wdHlDb2x1bW5cIlxuICAgICAgICAgIGhlYWRlcj17PENlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48TSBpZD1cIkdyaWROb0NvbHVtbnNcIiAvPjwvQ2VsbD59XG4gICAgICAgICAgd2lkdGg9ezEwfVxuICAgICAgICAgIGlzUmVzaXphYmxlPXtmYWxzZX1cbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmdlbmVyYXRlQ29sdW1ucygpO1xuICAgIGlmIChjb2x1bW5zLmxlbmdodCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKGNvbCA9PiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGtleT17Y29sLmNvbHVtbktleX1cbiAgICAgICAgY29sdW1uS2V5PXtjb2wuY29sdW1uS2V5fVxuICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgIDxIZWFkZXJDZWxsXG4gICAgICAgICAgICBncmlkPXt0aGlzLnByb3BzLmdyaWR9XG4gICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9XG4gICAgICAgICAgICBjb2x1bW49e2NvbH1cbiAgICAgICAgICAgIGN1cnJlbnRTb3J0Q29sdW1uPXt0aGlzLnByb3BzLnNvcnRDb2x1bW59XG4gICAgICAgICAgICBjdXJyZW50U29ydE9yZGVyPXt0aGlzLnByb3BzLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5wcm9wcy5zb3J0Q2hhbmdlfVxuICAgICAgICAgICAgaXNCdXN5PXt0aGlzLnByb3BzLmlzQnVzeX1cbiAgICAgICAgICAgIGZpbHRlcmluZz17dGhpcy5wcm9wcy5pc0ZpbHRlcmluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29sLmhlYWRlcn1cbiAgICAgICAgICA8L0hlYWRlckNlbGw+XG4gICAgICAgIH1cbiAgICAgICAgY2VsbD17dGhpcy5yZW5kZXJDZWxsKGNvbCl9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmNvbHVtbldpZHRocy5nZXQoY29sLmNvbHVtbktleSwgY29sLndpZHRoKX1cbiAgICAgICAgbWluV2lkdGg9e2NvbC5taW5XaWR0aH1cbiAgICAgICAgbWF4V2lkdGg9e2NvbC5tYXhXaWR0aH1cbiAgICAgICAgaXNSZXNpemFibGU9e2NvbC5pc1Jlc2l6YWJsZX1cbiAgICAgICAgZmxleEdyb3c9e2NvbC5mbGV4R3JvdyA/IGNvbC5mbGV4R3JvdyA6IDB9XG4gICAgICAgIGZpeGVkPXtjb2wuZml4ZWR9XG4gICAgICAgIGFsbG93Q2VsbHNSZWN5Y2xpbmc9e2NvbC5hbGxvd0NlbGxzUmVjeWNsaW5nfVxuICAgICAgLz4pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBncmlkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyh7XG4gICAgICAnb2MtZGF0YWdyaWQtY29udGFpbmVyJzogdHJ1ZSxcbiAgICAgICd3aXRoLWFjdGlvbmJhcic6IHRoaXMucHJvcHMuaW5saW5lRWRpdCAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQmFyLFxuICAgICAgJ2lzLWJ1c3knOiB0aGlzLnByb3BzLmlzQnVzeSxcbiAgICAgICdpcy1lZGl0aW5nJzogdGhpcy5wcm9wcy5pc0VkaXRpbmcsXG4gICAgICAnaXMtY3JlYXRpbmcnOiB0aGlzLnByb3BzLmlzQ3JlYXRpbmcsXG4gICAgfSk7XG4gICAgbGV0IGFjdGlvbkJhciA9IG51bGw7XG4gICAgbGV0IGFjdGlvbkJhclJpZ2h0ID0gbnVsbDtcbiAgICBsZXQgYWN0aW9uQmFyTGVmdCA9IG51bGw7XG4gICAgaWYgKFxuICAgICAgKHRoaXMucHJvcHMuYWN0aW9uQmFyIHx8XG4gICAgICB0aGlzLnByb3BzLmlubGluZUVkaXQgfHxcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVyaW5nIHx8XG4gICAgICB0aGlzLnByb3BzLnJlbW92aW5nKSAmJlxuICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJhclxuICAgICkge1xuICAgICAgYWN0aW9uQmFyUmlnaHQgPSAoXG4gICAgICAgIDxBY3Rpb25CYXIgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZGF0YWdyaWQtYWN0aW9uYmFyLXJpZ2h0XCI+eyB0aGlzLnByb3BzLmFjdGlvbkJhciB9PC9kaXY+XG4gICAgICAgICAgeyAodGhpcy5wcm9wcy5maWx0ZXJpbmcgJiYgdGhpcy5wcm9wcy5kaXNhYmxlRHJvcGRvd25cbiAgICAgICAgICAgICYmICF0aGlzLnByb3BzLmRpc2FibGVGaWx0ZXJpbmdDb250cm9scykgJiZcbiAgICAgICAgICAgIDxGaWx0ZXJpbmdDb250cm9scyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmlubGluZUVkaXQgJiZcbiAgICAgICAgICAgIDxJbmxpbmVFZGl0Q29udHJvbHNcbiAgICAgICAgICAgICAgYWZ0ZXJBZGRJdGVtPXt0aGlzLmhhbmRsZUFmdGVyQWRkSXRlbX1cbiAgICAgICAgICAgICAgYWZ0ZXJFZGl0UHJlc3M9e3RoaXMuaGFuZGxlQWZ0ZXJFZGl0UHJlc3N9XG4gICAgICAgICAgICAgIGFmdGVyVmFsaWRhdGlvbkVycm9yPXt0aGlzLmhhbmRsZUFmdGVyVmFsaWRhdGlvbkVycm9yfVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgKHRoaXMucHJvcHMuZHJvcGRvd25NZW51SXRlbXMgfHxcbiAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92aW5nIHx8XG4gICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2x1bW5TZXR0aW5ncyB8fFxuICAgICAgICAgICAgICh0aGlzLnByb3BzLmZpbHRlcmluZyAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlRHJvcGRvd24pKSAmJlxuICAgICAgICAgICAgIDxEcm9wZG93bkNvbnRyb2xzIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25CYXJMZWZ0IHx8IHRoaXMucHJvcHMuZ3JpZEhlYWRlcikge1xuICAgICAgYWN0aW9uQmFyTGVmdCA9IChcbiAgICAgICAgPEFjdGlvbkJhciBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRhdGFncmlkLWdyaWRoZWFkZXJcIj57IHRoaXMucHJvcHMuZ3JpZEhlYWRlciB9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kYXRhZ3JpZC1hY3Rpb25iYXItbGVmdFwiPnsgdGhpcy5wcm9wcy5hY3Rpb25CYXJMZWZ0IH08L2Rpdj5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uQmFyTGVmdCB8fCBhY3Rpb25CYXJSaWdodCkge1xuICAgICAgYWN0aW9uQmFyID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRhdGFncmlkLWFjdGlvbmJhci1jb250YWluZXJcIj5cbiAgICAgICAgICB7IGFjdGlvbkJhckxlZnQgfVxuICAgICAgICAgIHsgYWN0aW9uQmFyUmlnaHQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGxldCByb3dzQ291bnQgPVxuICAgICAgKHRoaXMucHJvcHMucm93c0NvdW50IHx8IHRoaXMucHJvcHMucm93c0NvdW50ID09PSAwKSA/XG4gICAgICAgIHRoaXMucHJvcHMucm93c0NvdW50IDpcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhLnNpemU7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNDcmVhdGluZykgcm93c0NvdW50ICs9IHRoaXMucHJvcHMuY3JlYXRlRGF0YS5zaXplO1xuICAgIGlmICghdGhpcy5wcm9wcy52aXNpYmxlQ29sdW1ucy5zaXplKSByb3dzQ291bnQgPSAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtgb2MtZGF0YWdyaWQtJHt0aGlzLnByb3BzLmdyaWQuaWR9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtncmlkQ2xhc3NOYW1lfVxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5jb250YWluZXJTdHlsZX1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmlzQnVzeSAmJiA8U3Bpbm5lciAvPiB9XG4gICAgICAgIHsgYWN0aW9uQmFyIH1cbiAgICAgICAgPFJlc3BvbnNpdmVGaXhlZERhdGFUYWJsZVxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmdyaWQuaWR9XG4gICAgICAgICAgcm93c0NvdW50PXtyb3dzQ291bnR9XG4gICAgICAgICAgaGVhZGVySGVpZ2h0PXt0aGlzLnByb3BzLmlzRmlsdGVyaW5nID9cbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZGVySGVpZ2h0ICsgdGhpcy5wcm9wcy5maWx0ZXJSb3dIZWlnaHRcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5oZWFkZXJIZWlnaHR9XG4gICAgICAgICAgcm93SGVpZ2h0PXt0aGlzLnByb3BzLnJvd0hlaWdodH1cbiAgICAgICAgICBvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrPXt0aGlzLm9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2t9XG4gICAgICAgICAgaXNDb2x1bW5SZXNpemluZz17ZmFsc2V9XG4gICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGlja31cbiAgICAgICAgICBzY3JvbGxUb0NvbHVtbj17dGhpcy5wcm9wcy5zY3JvbGxUb0NvbHVtbiB8fCB0aGlzLnN0YXRlLmN1cnJlbnRDb2x1bW59XG4gICAgICAgICAgc2Nyb2xsVG9wPXt0aGlzLnByb3BzLnNjcm9sbFRvcH1cbiAgICAgICAgICBzY3JvbGxUb1Jvdz17dGhpcy5nZXRTY3JvbGxUb1JvdygpfVxuICAgICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e3RoaXMucHJvcHMub25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgICBvblJvd01vdXNlRG93bj17dGhpcy5wcm9wcy5vblJvd01vdXNlRG93bn1cbiAgICAgICAgICBvblJvd01vdXNlRW50ZXI9e3RoaXMucHJvcHMub25Sb3dNb3VzZUVudGVyfVxuICAgICAgICAgIG9uUm93TW91c2VMZWF2ZT17dGhpcy5wcm9wcy5vblJvd01vdXNlTGVhdmV9XG4gICAgICAgICAgb25TY3JvbGxTdGFydD17dGhpcy5wcm9wcy5vblNjcm9sbFN0YXJ0fVxuICAgICAgICAgIG9uU2Nyb2xsRW5kPXt0aGlzLnByb3BzLm9uU2Nyb2xsRW5kfVxuICAgICAgICAgIHJvd0NsYXNzTmFtZUdldHRlcj17dGhpcy5nZXRSb3dDbGFzc05hbWV9XG4gICAgICAgICAgcm93SGVpZ2h0R2V0dGVyPXt0aGlzLnByb3BzLnJvd0hlaWdodEdldHRlcn1cbiAgICAgICAgICBvbkNvbnRlbnRIZWlnaHRDaGFuZ2U9e3RoaXMucHJvcHMub25Db250ZW50SGVpZ2h0Q2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlckNvbHVtbnMoKSB9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUZpeGVkRGF0YVRhYmxlPlxuICAgICAgICB7IHRoaXMucHJvcHMuaXNDb2x1bW5TZXR0aW5nc01vZGFsT3BlbiAmJlxuICAgICAgICAgIDxDb2x1bW5TZXR0aW5nc01vZGFsXG4gICAgICAgICAgICBncmlkPXt0aGlzLnByb3BzLmdyaWR9XG4gICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1ucz17dGhpcy5wcm9wcy52aXNpYmxlQ29sdW1uc31cbiAgICAgICAgICAgIGNsb3NlQ29sdW1uU2V0dGluZ3NNb2RhbD17dGhpcy5wcm9wcy5jbG9zZUNvbHVtblNldHRpbmdzTW9kYWx9XG4gICAgICAgICAgICBzYXZlQ29sdW1uU2V0dGluZ3M9e3RoaXMucHJvcHMuc2F2ZUNvbHVtblNldHRpbmdzfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==