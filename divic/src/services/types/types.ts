export default interface ShipmentProp  {
    id: string,
    name: string 
    barcode: string; 
    company: string; 
    recipient: string; 
    sender: string; 
    status: string; 
    origin: string; 
    destination: string; 
    pickupDate: Date | string; 
    deliveryDate: Date | string; 
  };
  