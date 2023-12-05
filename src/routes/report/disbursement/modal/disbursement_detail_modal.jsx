import React, { useEffect, useState } from 'react';
import { Form, Input, Modal, message } from 'antd';
import axios from 'axios';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { CommissionAPI } from '../../../../api/commission';

const DisbursementDetailModal = ({
  visible,
  onCancel,
  selectedDisbursement,
}) => {
  const [form] = Form.useForm();
  const [disbursementDetails, setDisbursementDetails] = useState(null);

  console.log("selectedDisbursement",selectedDisbursement);

  
  useEffect(() => {
    const fetchDisbursementDetails = async () => {
      try {
        const response = await axios.get(`http://hawir.abruthtech.com:4000/api/disbursement/getDisbursementDetail?disbursement_id=${selectedDisbursement.disbursement_id}`);
        console.log("response", response.data)
        setDisbursementDetails(response.data);
      } catch (error) {
        console.error('Error fetching Disbursement details:', error);
        message.error('Error fetching Disbursement details. Please try again.');
      }
    };

    if (selectedDisbursement) {
      fetchDisbursementDetails();
    }
  }, [selectedDisbursement]);


  return (
    <Modal
      visible={visible}
      title="Disbursement Detail"
      onCancel={onCancel}
      footer={null}
    >
      {disbursementDetails ? (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Disbursement Amount</strong>፡  
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {disbursementDetails.disbursement_amount}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Disbursement Date</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {disbursementDetails.disbursement_payment_date}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Disbursement Trip Id</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {disbursementDetails.disbursement_trip_id}
                    </Typography>
                    <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        <strong>Disbursement Status</strong>፡ 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {disbursementDetails.disbursement_status}
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

export default DisbursementDetailModal;
