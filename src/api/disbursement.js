import axios from 'axios';

export const DisbursementAPI = {
  getDisbursementList: async () => {
    return await axios.get('http://hawir.abruthtech.com:4000/api/disbursement/getDisbursementList');
  },

  getDisbursementDetail: async (disbursement_id) => {
    try {
      const apiUrl = `http://hawir.abruthtech.com:4000/api/disbursement/getDisbursementDetail/${disbursement_id}`;
      const response = await axios.get(apiUrl);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching commission detail:', error);
      throw error;
    }
  },
};
