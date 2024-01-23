import React from 'react'

import './tablesRow.scss';

const TablesRow = (props) => {
  return (
    <div className="description_table_row">
        <span>{props.name}</span>
        <span className="table_row2">{props.value}</span>
    </div>
  )
}

export default TablesRow