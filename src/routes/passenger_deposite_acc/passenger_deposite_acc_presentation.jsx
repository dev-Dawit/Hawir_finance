import React, { useEffect } from "react";
import LocalDataGrid from "../../components/shared/data grid/dataGrid";
import { Box, Button, Chip, Input, InputAdornment, Stack, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import OpenInNew from "@mui/icons-material/OpenInNew";
import AddNewAccountModal from "./modals/addNewAccountModal";
import DetailModal from "./modals/detailModal";
import SearchIcon from '@mui/icons-material/Search';


const PassengerDepositeAccPresentation = ({
    //accountsTableData,
    accounts,
    setAccounts,
    selectedAccount,
    addNewAccount,
    createNewAccountModalVisible,
    setCreateNewAccountModalVisible,
    //editModalVisible,
    //setEditModalVisible,
    detailModalVisible,
    setDetailModalVisible,
    //handleEditClick,
    handleDetailClick,
    handleSearchChange,
}) => {
  

    let columns = [
        {
            field: "passenger_deposit_account_id",
            headerName: "ID",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "passenger_deposit_account_bank_name",
            headerName: "Bank Name",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "passenger_deposit_account_account_number",
            headerName: "Account Number",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "type",
            headerName: "Account Type",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "date",
            headerName: "Opening Date",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "status",
            headerName: "Status",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "balance",
            headerName: "Balance (Birr)",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
          field: "actions",
          headerName: "Actions",
          flex: 0.7,
          headerClassName: "super-app-theme--header",
          renderCell: (params) => (
            <Stack spacing={1} direction={"row"}>
              {/*<Button
                onClick={() => handleEditClick(params.row)}
                startIcon={<Edit />}
                variant="outlined"
                size="small"
              >
                አስተካክል
          </Button>*/}
    
              <Button
                variant="outlined"
                onClick={() => handleDetailClick(params.row)}
                size="small"
              >
                Open
              </Button>
              {/*<Button
                variant="outlined"
                // onClick={handleDetailClick}
                startIcon={<Delete />}
                size="small"
              >
                አጥፋ
        </Button>*/}
            </Stack>
          ),
        },
      ];
      
// const accountsTableData = accounts.map((kdus) => ({
//   id: kdus?.saint_id || '', // Use optional chaining (?.) to avoid the error
//   saint_name: kdus?.saint_name || '',
//   saint_description: kdus?.saint_description || '',
// }));

const accountsTableData = accounts.map((account) => ({
  passenger_deposit_account_id: account?.passenger_deposit_account_id || '', // Use optional chaining (?.) to avoid the error
  passenger_deposit_account_bank_name: account?.passenger_deposit_account_bank_name || '',
  passenger_deposit_account_account_number: account?.passenger_deposit_account_account_number || '',
}));

      return (
        <Box>
          <LocalDataGrid
            title={"Bank Accounts"}
            columns={columns}
            data={accountsTableData}
            getRowId={(row) => row.passenger_deposit_account_id}
            actionButtons={ 
                <div>
                    <Input
                        placeholder="Search Bank Accounts"
                        onChange={handleSearchChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        style={{ width: '200px', marginRight: '16px' }}
                    />
                    <Button variant="contained" onClick={addNewAccount}>
                        + Add New
                    </Button>
                </div>
              }
          />
          
          <AddNewAccountModal 
            visible={createNewAccountModalVisible}
            onCancel={() => setCreateNewAccountModalVisible(false)}
          />
          {/*<EditKdusanModal
            visible={editModalVisible}
            onCancel={() => setEditModalVisible(false)}
            selectedKdus={selectedKdus}
            setKdusans={setKdusans}
            />*/}
          {/*<DetailModal
            visible={detailModalVisible}
            onCancel={() => setDetailModalVisible(false)}
            selectedAccount={selectedAccount}
        />*/}
          <div style={{ marginTop: '16px' }}>
            <Typography variant="h6">Total Balance: xxx:xx</Typography>
          </div>
        </Box>
      );
}
  
export default PassengerDepositeAccPresentation;