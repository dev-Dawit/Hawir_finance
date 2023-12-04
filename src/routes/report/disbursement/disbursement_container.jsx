import { useState, useEffect } from "react";
import { Form } from "antd";
import axios from "axios";
import DisbursementPresentation from "./disbursement_presentation";
import { DisbursementAPI } from "../../../api/disbursement";

const DisbursementContainer = () => {
  const [selectedDisbursement, setSelectedDisbursement] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [disbursementData, setDisbursementData] = useState([]);
  const [form] = Form.useForm();


  useEffect(() => {
    async function fetchDisbursement() {
      try {
        const response = await DisbursementAPI.getDisbursementList();
        if (Array.isArray(response.data)) {
          setDisbursementData(response.data);
          console.log("Api response", response.data);
        } else {
          setDisbursementData([]);
        }
      } catch (error) {
        console.error("Error fetching Disbursement:", error);
        setDisbursementData([]);
      }
    }

    fetchDisbursement();
  }, []);

  const handleDetailClick = (disbursementData) => {
    console.log("Clicked destination:", disbursementData);
    setDetailModalVisible(true);
    setSelectedDisbursement(disbursementData);
  };

  const handleDetailModalClose = () => {
    setDetailModalVisible(false);
  };

  const handleSave = (onSave) => {
    form.validateFields().then((values) => {
      form.resetFields();
      onSave(values);
    });
  };

  return (
    <DisbursementPresentation
      disbursementData={disbursementData}
      detailModalVisible={detailModalVisible}
      selectedDisbursement={selectedDisbursement}
      setDisbursementData={setDisbursementData}
      form={form}
      handleDetailClick={handleDetailClick}
      handleDetailModalClose={handleDetailModalClose}
      handleSave={handleSave}
    />
  );
};

export default DisbursementContainer;
