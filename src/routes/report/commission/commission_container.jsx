import { useState, useEffect } from "react";
import { Form } from "antd";
import CommissionPresentation from "./commission_presentation";
import axios from "axios";
import { CommissionAPI } from "../../../api/commission";

const CommissionContainer = () => {
  const [selectedCommission, setSelectedCommission] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [commissionData, setCommissionData] = useState([]);
  const [form] = Form.useForm();


  useEffect(() => {
    async function fetchCommissions() {
      try {
        const response = await CommissionAPI.getCommissionList();
        if (Array.isArray(response.data)) {
          setCommissionData(response.data);
          console.log("Api response", response.data);
        } else {
          setCommissionData([]);
        }
      } catch (error) {
        console.error("Error fetching Commissions:", error);
        setCommissionData([]);
      }
    }

    fetchCommissions();
  }, []);

  const handleDetailClick = (commissionData) => {
    console.log("Clicked destination:", commissionData);
    setDetailModalVisible(true);
    setSelectedCommission(commissionData);
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

  console.log("commissionData", commissionData)
  return (
    <CommissionPresentation
      commissionData={commissionData}
      detailModalVisible={detailModalVisible}
      selectedCommission={selectedCommission}
      setCommissionData={setCommissionData}
      form={form}
      handleDetailClick={handleDetailClick}
      handleDetailModalClose={handleDetailModalClose}
      handleSave={handleSave}
    />
  );
};

export default CommissionContainer;
