import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'fixed-data-table-2';
import classNames from 'classnames';
import { gridShape } from './datagrid.props';
import Utils from './datagrid.utils';

export default class HeaderCell extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    grid: gridShape.isRequired,
    columns: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    column: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    currentSortColumn: PropTypes.string,
    currentSortOrder: PropTypes.string,
    onSortChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: '',
    currentSortOrder: null,
    currentSortColumn: null,
  };

  onSortChange = (e) => {
    if (!Utils.isSortable(this.props.column)) return false;
    e.preventDefault();
    const order = (
      this.props.currentSortColumn === Utils.getColumnKey(this.props.column) &&
      this.props.currentSortOrder === 'asc'
    ) ? 'desc' : 'asc';
    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.grid,
        this.props.columns,
        this.props.column,
        order,
      );
    }
    return true;
  }

  render() {
    const {
      children,
      grid,
      currentSortColumn,
      currentSortOrder,
      columns,
      column,
      onSortChange,
      ...props
    } = this.props;
    const cellClassNames = classNames({
      'oc-datagrid-cell-header': true,
      clickable: Utils.isSortable(this.props.column),
    });
    return (
      <Cell className={cellClassNames} onClick={this.onSortChange} {...props}>
        {children}
        { column.isRequired && ' *' }
        {
          currentSortColumn === Utils.getColumnKey(column) &&
          currentSortOrder &&
          (currentSortOrder === 'desc' ? ' ↓' : ' ↑')
        }
      </Cell>
    );
  }
}
