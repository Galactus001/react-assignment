import React, { useEffect, useState } from 'react';
import { getData } from './services';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Header from './Header';

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
      <div className='header-bg xs:h-[10vh] h-[21vh] w-full py-[20px] px-[140px] flex justify-center items-center header-bg'>
        <div className='xs:text-[10px] text-[28px] text-white'>
          All Companies
        </div>
      </div>
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
          maxHeight: '500px',
        }}
      />
    </div>
  );
}

export default Companies;
