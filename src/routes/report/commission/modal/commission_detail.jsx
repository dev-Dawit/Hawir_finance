import React, { useEffect, useState } from 'react';
import { Form, Input, Modal, message } from 'antd';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { CommissionAPI } from '../../../../api/commission';
import axios from 'axios';

const CommissionDetailModal = ({
  visible,
  onCancel,
  selectedCommission,
}) => {
  const [form] = Form.useForm();
  const [commissionDetails, setCommissionDetails] = useState(null);

  console.log("selectedCommission",selectedCommission);

  
  useEffect(() => {
    const fetchCommissionDetails = async () => {
      try {
        if (selectedCommission && selectedCommission.commission_id) {
          const response = await axios.get(`http://hawir.abruthtech.com:4000/api/commission/getCommissionDetail?commission_id=${selectedCommission.commission_id}`);
          console.log("CommissionAPI response", response.data);
          setCommissionDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching commission details:', error);
        message.error('Error fetching commission details. Please try again.');
      }
    };
  
    fetchCommissionDetails();
  }, [selectedCommission]);
  
  

console.log("commissionDetails", commissionDetails);
  return (
    <Modal
      visible={visible}
      title="Commission Detail"
      onCancel={onCancel}
      footer={null}
    >
      {commissionDetails ? (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Commission Amount</strong>፡  
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {commissionDetails.commission_amount}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Commission Date</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {commissionDetails.commission_date}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Commission Trip Id</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {commissionDetails.commission_trip_id}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Commission Type</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {commissionDetails.commission_type}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
            </Grid>
        </Box>
      ) : (
        <p>Loading commission details...</p>
      )}
    </Modal>
  );
};

export default CommissionDetailModal;
