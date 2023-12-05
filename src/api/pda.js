import axios from 'axios';

export const PassengerDepositeAccountAPI = {
  getPassengerDepositeAccountList: async () => {
    return await axios.get('http://hawir.abruthtech.com:4000/api/passengerDepositAccount/getPassengerDepositAccountList');
  },

  createNewPassengerDepositeAccount: async (data) => {
    try {
      const response = await axios.post(
        'http://hawir.abruthtech.com:4000/api/passengerDepositAccount/createPassengerDepositAccount',
        data 
      );
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating new Passenger Deposite Account:', error);
      throw error;
    }
  },
};