import * as React from "react";
import { DataGrid, GridRow } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import clsx from "clsx";
import CustomNoRowsOverlay from "./noRowOverlay";

function CustomRow(props) {
  const { className, index, ...other } = props;

  return (
    <GridRow
      index={index}
      className={clsx(className, index % 2 === 0 ? "odd" : "even")}
      {...other}
    />
  );
}

function CustomizedTable({
  columns,
  data,
  height,
  color,
  notCompact,
  ...otherProps
}) {
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangeRowsPerPage = (newPageSize) => {
    setRowsPerPage(newPageSize);
  };

  return (
    <Box
      sx={{
        height: height || "85vh",
        width: 1,
        "& .super-app-theme--header": {
          height: 700,
          color: "white",
          backgroundColor: color ? color : "primary.main",
        },
        ".MuiDataGrid-columnHeaders": {
          backgroundColor: "primary.main",
        },
        ".MuiDataGrid-columnHeaderDraggableContainer .MuiCheckbox-root": {
          color: "white",
          backgroundColor: "primary.main",
          borderRadius: 0,
        },
        "& .odd": {
          bgcolor: "white",
        },
        "& .even": {
          bgcolor: "#e6f6fe",
        },
      }}
    >
      <DataGrid
        {...otherProps}
        components={{
          Row: CustomRow,
          NoRowsOverlay: CustomNoRowsOverlay,
          ...otherProps?.components,
        }}
        rows={data}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
        density={notCompact ? "standard" : "compact"}
        onPageSizeChange={handleChangeRowsPerPage}
        // onSelectionModelChange={(newSelectionModel) => {
        //   alert(newSelectionModel);
        // }}
      />
    </Box>
  );
}

export default CustomizedTable;
