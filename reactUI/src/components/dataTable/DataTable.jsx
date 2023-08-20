import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const DataTable = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: 'auto' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSizeOptions={[7]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableRowSelectionOnClick
        filterModel={{
          items: [{ columnField: 'university', operatorValue: 'contains', value: '' }],
        }}
      />
    </div>
  );
};

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default DataTable;
