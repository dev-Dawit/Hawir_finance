import React, { useState, useEffect } from 'react'
import CashReceiptVoucherPresentation from './cash_receipt_voucher_presentation';



const CashReceiptVoucherContainer = () => {
  const [receipts, setReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [printModalVisible, setPrintModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  
  const handlePrint = (receipt) => {
    setSelectedReceipt(receipt);
    setPrintModalVisible(true);
  };

  const handleDetailClick = (receipt) => {
    setSelectedReceipt(receipt);
    setDetailModalVisible(true);
  };

  const handleSearchChange = (e) => { 
    console.log('Search value:', e.target.value);
    
  };
  

  // Fetch the list of receipts when the component mounts
  // useEffect(() => {
  //   async function fetchreceipts() {
  //     try {
  //       const response = await kdusanAPI.getKdusanList();
  //       if (Array.isArray(response.data)) {
  //         setReceipts(response.data); // Assuming the API response is an array of Kdusans
  //       } else {
  //         setReceipts([]); // Set an empty array if the response is not an array
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Kdusans:', error);
  //       setReceipts([]); // Set an empty array on error
  //     }
  //   }
  
  //   fetchreceipts();
  // }, []);
  
  console.log('receipts:', receipts);
  console.log(typeof(receipts));

// const receiptsTableData = receipts.map((kdus) => ({
//   id: kdus?.saint_id || '', // Use optional chaining (?.) to avoid the error
//   saint_name: kdus?.saint_name || '',
//   saint_description: kdus?.saint_description || '',
// }));

  return (
    <CashReceiptVoucherPresentation
      //receiptsTableData={receiptsTableData}
      setReceipts={setReceipts}
      selectedReceipt={selectedReceipt}
      printModalVisible={printModalVisible}
      setPrintModalVisible={setPrintModalVisible}
      detailModalVisible={detailModalVisible}
      setDetailModalVisible={setDetailModalVisible}
      handleDetailClick={handleDetailClick}
      handlePrint={handlePrint}
      handleSearchChange={handleSearchChange}
    />

  );
};

export default CashReceiptVoucherContainer;
