import React, { useState } from "react";
import LocalDataGrid from "../../../components/shared/data grid/dataGrid";
import { Box, Button, Chip, Input, InputAdornment, Stack, Tab, Tabs, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import OpenInNew from "@mui/icons-material/OpenInNew";
import SearchIcon from '@mui/icons-material/Search';
// import EditKdusanModal from "./modals/editKdusan.modal";
// import DetailKduasanModal from "./modals/detailKdusan.modal";
// import AddNewKdusanModal from "../../../components/modals/addNewKdus.component";



const CashReceiptVoucherPresentation = ({
    //receiptsTableData,
    setReceipts,
    selectedReceipt,
    addNewAccount,
    createNewAccountModalVisible,
    setCreateNewAccountModalVisible,
    //printModalVisible,
    //setPrintModalVisible,
    detailModalVisible,
    setDetailModalVisible,
    handlePrint,
    handleDetailClick,
    handleSearchChange,
}) => {

    const [tabValue, setTabValue] = useState(0);

    let columns = [
        {
            field: "crv_no",
            headerName: "CRV No",
            flex: 0.4,
            headerClassName: "super-app-theme--header",
        },
        {
            field: tabValue === 0 ? "agent_name" : "agent_trip_name",
            headerName: tabValue === 0 ? "Agent Name" : "Agent-Trip Name",
            flex: 0.8,
            headerClassName: "super-app-theme--header",
        },
        {
            field: tabValue === 0 ? "trip_name" : "fs_number",
            headerName: tabValue === 0 ? "Trip Name" : "FS Number",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "total",
            headerName: "Total Amount (100%)",
            flex: 0.9,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "commission",
            headerName: "Commission (5%)",
            flex: 0.8,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "vat",
            headerName: "VAT (15%)",
            flex: 0.4,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "balance",
            headerName: "Balance (Birr)",
            flex: 0.7,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "date",
            headerName: "Date",
            flex: 0.3,
            headerClassName: "super-app-theme--header",
        },
        {
          field: "actions",
          headerName: "Actions",
          flex: 0.7,
          headerClassName: "super-app-theme--header",
          renderCell: (params) => (
            <Stack spacing={1} direction={"row"}>
              
    
              <Button
                variant="outlined"
                onClick={() => handleDetailClick(params.row)}
                size="small"
              >
                open
              </Button>
              <Button
                //onClick={() => handlePrint(params.row)}
                variant="outlined"
                size="small"
              >
                Print
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
            <Tabs
                value={tabValue}
                onChange={(e, newValue) => setTabValue(newValue)}
                variant="standard"
                textColor="primary"
                indicatorColor="primary"
                style={{ marginBottom: '16px' }}
            >
                <Tab label="Open" style={{ minWidth: 'auto' }}  />
                <Tab label="Closed" style={{ minWidth: 'auto' }} />
            </Tabs>
                
          <LocalDataGrid
            title={"Cash Receipt Voucher"}
            columns={columns}
            //data={receiptsTableData}
            getRowId={(row) => row.id}
            actionButtons={ 
                <div>
                    <Input
                        placeholder="Search Cash Receipt Voucher"
                        onChange={handleSearchChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        style={{ width: '250px', marginRight: '16px' }}
                    />
                </div>
              }
          />
          
          {/*<AddNewAccountModal 
            visible={createNewAccountModalVisible}
            onCancel={() => setCreateNewAccountModalVisible(false)}
        />*/}
          {/*<EditKdusanModal
            visible={printModalVisible}
            onCancel={() => setPrintModalVisible(false)}
            selectedKdus={selectedKdus}
            setKdusans={setKdusans}
            />*/}
          {/*<DetailModal
            visible={detailModalVisible}
            onCancel={() => setDetailModalVisible(false)}
            selectedReceipt={selectedReceipt}
        />*/}
        </Box>
      );
}
  
export default CashReceiptVoucherPresentation;