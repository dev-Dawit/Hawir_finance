import React from "react";
import CustomizedTable from "./customizedDataGrid";
import { Button, Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const LocalDataGrid = ({
  x1,
  x2,
  columns,
  data,
  actionButtons,
  title,
  height,
  sx,
  ...otherProps
}) => {
  return (
    <CustomizedTable
      {...otherProps}
      sx={sx}
      height={height}
      components={{
        Toolbar: () => (
          <Toolbar>
            <Box width={"100%"}>
              <Grid container>
                <Grid item xs={x1 ? x1 : 6}>
                  {typeof title === "object" ? title : <h2>{title}</h2>}
                </Grid>
                <Grid item textAlign={"end"} pt={2} xs={x2 ? x2 : 6}>
                  {actionButtons}
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        ),
      }}
      loading={otherProps.loading ? otherProps.loading : !data}
      data={data ? data : []}
      columns={columns}
    />
  );
};

export default LocalDataGrid;
