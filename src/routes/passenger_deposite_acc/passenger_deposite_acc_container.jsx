import React, { useState, useEffect } from 'react'
import PassengerDepositeAccPresentation from './passenger_deposite_acc_presentation';



const PassengerDepositeAccContainer = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [createNewAccountModalVisible, setCreateNewAccountModalVisible,] = useState(false);
  //const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  // Function to add a new Kdusan to the list
  const addNewAccount = () => {
    setCreateNewAccountModalVisible(true);
  };

  // const handleEditClick = (acc) => {
  //   setSelectedAccount(acc);
  //   setEditModalVisible(true);
  // };

  const handleDetailClick = (acc) => {
    setSelectedAccount(acc);
    setDetailModalVisible(true);
  };

  const handleSearchChange = (e) => { 
    console.log('Search value:', e.target.value);
    
  };
  

  // Fetch the list of accounts when the component mounts
  // useEffect(() => {
  //   async function fetchAccounts() {
  //     try {
  //       const response = await kdusanAPI.getKdusanList();
  //       if (Array.isArray(response.data)) {
  //         setAccounts(response.data); // Assuming the API response is an array of Kdusans
  //       } else {
  //         setAccounts([]); // Set an empty array if the response is not an array
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Kdusans:', error);
  //       setAccounts([]); // Set an empty array on error
  //     }
  //   }
  
  //   fetchAccounts();
  // }, []);
  
  console.log('accounts:', accounts);
  console.log(typeof(accounts));

// const accountsTableData = accounts.map((kdus) => ({
//   id: kdus?.saint_id || '', // Use optional chaining (?.) to avoid the error
//   saint_name: kdus?.saint_name || '',
//   saint_description: kdus?.saint_description || '',
// }));

  return (
    <PassengerDepositeAccPresentation
      //accountsTableData={accountsTableData}
      setAccounts={setAccounts}
      selectedAccount={selectedAccount}
      addNewAccount={addNewAccount}
      createNewAccountModalVisible={createNewAccountModalVisible}
      setCreateNewAccountModalVisible={setCreateNewAccountModalVisible}
      // editModalVisible={editModalVisible}
      // setEditModalVisible={setEditModalVisible}
      detailModalVisible={detailModalVisible}
      setDetailModalVisible={setDetailModalVisible}
      //handleEditClick={handleEditClick}
      handleDetailClick={handleDetailClick}
      handleSearchChange={handleSearchChange}
    />

  );
};

export default PassengerDepositeAccContainer;
