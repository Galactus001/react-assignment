import React, { useEffect, useState } from 'react';
import { getData } from './services';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const cols: GridColDef[] = [
  {
    headerName: 'ID',
    field: 'id',
    flex: 1,
  },
  {
    headerName: 'Company UEN',
    field: 'company_uen',
    flex: 1,
  },
  {
    headerName: 'Company Name',
    field: 'company_name',
    flex: 1,
  },
  {
    headerName: 'Full Name',
    field: 'full_name',
    flex: 1,
  },
  {
    headerName: 'Position in Company',
    field: 'position',
    flex: 1,
  },
  {
    headerName: 'Email',
    field: 'email',
    flex: 1,
  },
  {
    headerName: 'Phone',
    field: 'phone',
    flex: 1,
  },
];

function Companies() {
  const [companies, setCompanies] = useState<any>([]);
  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res);
        setCompanies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: '30px',
          fontSize: '40px',
        }}
      >
        All companies
      </Box>
      <DataGrid
        // autoHeight
        // density='compact'
        columns={cols}
        getRowId={(row) => row.id}
        rows={companies || []}
        // hideFooter
        // disableColumnMenu
        sx={{
          '& .MuiDataGrid-cell': {
            border: '0.5px solid #f3f3f3',
          },
        }}
      />
    </div>
  );
}

export default Companies;
