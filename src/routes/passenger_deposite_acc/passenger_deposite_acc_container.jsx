import React, { useState, useEffect } from 'react'
import PassengerDepositeAccPresentation from './passenger_deposite_acc_presentation';
import { PassengerDepositeAccountAPI } from '../../api/pda';

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


  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await PassengerDepositeAccountAPI.getPassengerDepositeAccountList();
        if (Array.isArray(response.data)) {
          setAccounts(response.data);
          console.log("pdaAPI return", response.data)
        } else {
          setAccounts([]); 
        }
      } catch (error) {
        console.error('Error fetching Passenger Deposite Account:', error);
        setAccounts([]); 
      }
    }
  
    fetchAccounts();
  }, []);
  console.log('accounts:', accounts);

  return (
    <PassengerDepositeAccPresentation
      //accountsTableData={accountsTableData}
      accounts={accounts}
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
