import React from "react";
import LocalDataGrid from "../../../components/shared/data grid/dataGrid";
import { Box, Button, Chip, Stack } from "@mui/material";
import OpenInNew from "@mui/icons-material/OpenInNew";
import DisbursementDetailModal from "./modal/disbursement_detail_modal";

const DisbursementPresentation = ({
    disbursementData,
    selectedDisbursement,
    handleDetailClick,
    detailModalVisible,
    handleDetailModalClose,
}) => {

    console.log("disbursementData", disbursementData)
  const disbursementTableData = disbursementData.map((disbursement) => ({
    disbursement_id: disbursement?.disbursement_id || "",
    disbursement_agent_id: disbursement?.disbursement_agent_id || "",
    disbursement_amount: disbursement?.disbursement_amount || "",
    disbursement_payment_date: disbursement?.disbursement_payment_date || "",
    disbursement_trip_id: disbursement?.disbursement_trip_id || "",
    disbursement_status: disbursement?.disbursement_status || "",
    
  }));


  let columns = [
    {
      field: "disbursement_id",
      headerName: "ID",
      flex: 0.4,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "disbursement_trip_id",
      headerName: "Disbursement Trip ID",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "disbursement_agent_id",
      headerName: "Disbursement Agent ID",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "disbursement_amount",
      headerName: "Disbursement Amount",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "disbursement_payment_date",
      headerName: "Payment Date",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "disbursement_status",
      headerName: "Disbursement status",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
         <Chip label={params.row.disbursement_status} size="small" color="primary" />  
      ),
    },
    
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <Stack spacing={1} direction={"row"}>
          <Button
            variant="outlined"
            onClick={() => handleDetailClick(params.row)}
            startIcon={<OpenInNew />}
            size="small"
          >
            Open
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ backgroundColor: "white", p: 1, ml: -2 }}>
      <LocalDataGrid
        title={"Disbursement"}
        columns={columns}
        data={disbursementTableData}
        getRowId={(row) => row.disbursement_id}
      />

      <DisbursementDetailModal
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        selectedDisbursement={selectedDisbursement}
      />
    </Box>
  );
};
export default DisbursementPresentation;
