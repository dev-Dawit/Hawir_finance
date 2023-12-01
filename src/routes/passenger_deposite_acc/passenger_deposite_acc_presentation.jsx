import React from "react";
import LocalDataGrid from "../../components/shared/data grid/dataGrid";
import { Box, Button, Chip, Input, InputAdornment, Stack, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import OpenInNew from "@mui/icons-material/OpenInNew";
import AddNewAccountModal from "./modals/addNewAccountModal";
import DetailModal from "./modals/detailModal";
import SearchIcon from '@mui/icons-material/Search';
// import EditKdusanModal from "./modals/editKdusan.modal";
// import DetailKduasanModal from "./modals/detailKdusan.modal";
// import AddNewKdusanModal from "../../../components/modals/addNewKdus.component";



const PassengerDepositeAccPresentation = ({
    //accountsTableData,
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
            field: "id",
            headerName: "ID",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "bank_ame",
            headerName: "Bank Name",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "account_number",
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
      
      return (
        <Box>
          <LocalDataGrid
            title={"Bank Accounts"}
            columns={columns}
            //data={accountsTableData}
            getRowId={(row) => row.id}
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
          
          {/*<AddNewAccountModal 
            visible={createNewAccountModalVisible}
            onCancel={() => setCreateNewAccountModalVisible(false)}
        />*/}
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