import React from "react";
import LocalDataGrid from "../../../components/shared/data grid/dataGrid";
import { Box, Button, Stack } from "@mui/material";
import OpenInNew from "@mui/icons-material/OpenInNew";
import CommissionDetailModal from "./modal/commission_detail";

const CommissionPresentation = ({
    commissionData,
    selectedCommission,
    handleDetailClick,
    detailModalVisible,
    handleDetailModalClose,
}) => {
  const commissionTableData = commissionData.map((commission) => ({
    commission_id: commission?.commission_id || "",
    commission_amount: commission?.commission_amount || "",
    commission_date: commission?.commission_date.split("T")[0] || "",
    commission_trip_id: commission?.commission_trip_id || "",
    commission_type: commission?.commission_type || ""   
  }));


  
  let columns = [
    {
      field: "commission_id",
      headerName: "ID",
      flex: 0.4,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "commission_amount",
      headerName: "commission Amount",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "commission_date",
      headerName: "commission Date",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "commission_trip_id",
      headerName: "commission trip_id",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "commission_type",
      headerName: "commission Type",
      flex: 0.7,
      headerClassName: "super-app-theme--header",
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
        title={"Commission"}
        columns={columns}
        data={commissionTableData}
        getRowId={(row) => row.commission_id}
      />

      <CommissionDetailModal
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        selectedCommission={selectedCommission}
      />
    </Box>
  );
};
export default CommissionPresentation;
