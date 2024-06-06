import { create } from 'zustand';

const headers = [
  { id: 'no', name: 'NO.' },
  { id: 'ordNo', name: 'CO NO.' },
  { id: 'custEngNm', name: 'Customer' },
  { id: 'ordDt', name: 'Order Date' },
  { id: 'shipTo', name: 'Ship To' },
  { id: 'ordQty', name: 'Order Qty' },
  { id: 'fnQty', name: 'Finish Qty' },
  { id: 'packingQty', name: 'Packing Qty' },
  { id: 'ibQty', name: 'Inbound Qty' },
  { id: 'obQty', name: 'Outbound Qty' },
];

export type CoRowItem = {
  fnQty: number;
  custEngNm: string;
  ibQty: number;
  obQty: number;
  ordDt: any;
  ordNo: string;
  ordQty: number;
  packingQty: number;
  shipTo: string;
};

type CoHeader = {
  id: string;
  name: string;
};

type CoDataStore = {
  data: CoRowItem[] | undefined;
  headers: CoHeader[];
};

type CoDataActionsStore = {
  updateCoDataList: (newData: any[]) => void;
};

export const useCoData = create<CoDataStore & CoDataActionsStore>((set) => ({
  data: [],
  headers: headers,
  updateCoDataList: (newData) => set({ data: newData }),
}));
