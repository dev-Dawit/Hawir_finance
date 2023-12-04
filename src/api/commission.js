import axios from 'axios';

export const CommissionAPI = {
  getCommissionList: async () => {
    return await axios.get('http://hawir.abruthtech.com:4000/api/commission/getCommissionList');
  },

  getCommissionDetail: async (commission_id) => {
    try {
      const apiUrl = `http://hawir.abruthtech.com:4000/api/commission/getCommissionDetail/${commission_id}`;
      const response = await axios.get(apiUrl);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching commission detail:', error);
      throw error;
    }
  },
};
