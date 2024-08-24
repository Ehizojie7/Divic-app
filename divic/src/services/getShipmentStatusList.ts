import apiClient from "./axios";

const getShipmentStatusList = async () => {
    try {
      const response = await apiClient.get('/frappe.client.get_list', {
        params: {
          doctype: 'AWB Status',
          fields: JSON.stringify(['*']),
        },
      });
      return response.data;
    } catch (error) {
      console.error('Fetching shipment status list failed:', error);
      throw error;
    }
  };
  

  export default getShipmentStatusList;