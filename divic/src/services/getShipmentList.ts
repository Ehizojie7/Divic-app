import apiClient from "./axios";

const getShipmentList = async () => {
    try {
      const response = await apiClient.get('/frappe.client.get_list', {
        params: {
          doctype: 'AWB',
          fields: '*',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Fetching shipment list failed:', error);
      throw error;
    }
  };
  
  export default getShipmentList;