import React, { useState } from 'react'
import { Modal, Form, Input, Upload, message } from 'antd';
import axios from 'axios';
import { PassengerDepositeAccountAPI } from '../../../api/pda';

const AddNewAccountModal = ({ visible, onCancel, }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]); // To store the array of uploaded files info
  

  const handleSubmit = (e) => {
    e.preventDefault();

    form.validateFields().then(async (values) => {
      try {
        // Create a new destination with name, description, and image
        const payload = {
          passenger_deposit_account_bank_name: values.passenger_deposit_account_bank_name,
          passenger_deposit_account_account_number: values.passenger_deposit_account_account_number,
        };

        const response = await PassengerDepositeAccountAPI.createNewPassengerDepositeAccount(payload);
        console.log('API Response:', response.data);

        // Handle success (you can also add logic to handle multiple images)
        message.success('Passenger Deposite Account created successfully.');
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error creating new Passenger Deposite Account:', error);
        message.error('Passenger Deposite Account creation failed.');
      }
    });
  };

  return (
    <Modal
      visible={visible}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Form form={form} layout="vertical" name="add_new_destination_form">
        <Form.Item
          name="passenger_deposit_account_bank_name"
          label="Passenger Deposit Account Bank Name"
          rules={[{ required: true, message: 'Please input the name of the destination!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="passenger_deposit_account_account_number"
          label="Passenger Deposit Account Number"
          rules={[{ required: true, message: 'Please input a description of the destination!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewAccountModal;























































