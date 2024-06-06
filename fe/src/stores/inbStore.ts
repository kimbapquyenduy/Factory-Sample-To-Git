import { CO_CD } from '@/utils/coCd';
import { create } from 'zustand';

export const headers = [
  { id: 'checkbox', name: 'checkbox' },
  { id: 'no', name: 'NO.' },
  { id: 'ordNo', name: 'CO NO.' },
  { id: 'skuId', name: 'SKU' },
  { id: 'packingQty', name: 'Packing Qty' },
  { id: 'pkgDt', name: 'Packing Date' },
  { id: 'line', name: 'Line' },
  { id: 'ibDt', name: 'Inbound Date' },
  { id: 'ibNo', name: 'Inbound NO' },
  { id: 'ibQty', name: 'Inbound Qty' },
  { id: 'status', name: 'Status' },
];

export const inbStatusOption = {
  notYet: {
    id: 'notYet',
    value: 'Not yet',
  },
  completed: {
    id: 'completed',
    value: 'Completed',
  },
  all: {
    id: 'all',
    value: 'All',
  },
};

export type InbItem = {
  no?: number;
  ibDt?: string | number;
  ibId: number;
  ibNo: string;
  ibQty: number | string;
  lineId: number;
  lineNm: string;
  ordNo: string;
  packingQty: number;
  pkgDt?: any | null;
  prodNm: string;
  skuId: string;
  status: string;
};

export type SearchParams = {
  fmDt: string | null;
  toDt: string | null;
  ordNo: string[] | null;
  skuId: string[] | null;
  status: string | null;
  coCd: string;
};

type InbStore = {
  datasource: InbItem[] | undefined;
  searchParams: SearchParams;
  isShowCreateInbModal: boolean;
  selectedRow: InbItem[];
};

type InbActionStore = {
  updateDatasource: (newData: InbItem[]) => void;
  updateSearchParams: (newValue: SearchParams) => void;
  showCreateInbModal: (newValue: boolean) => void;
  setSelectedRow: (newValue: InbItem[]) => void;
};

export const useInbStore = create<InbStore & InbActionStore>((set) => ({
  datasource: [],
  searchParams: {
    fmDt: null,
    toDt: null,
    ordNo: null,
    skuId: null,
    status: inbStatusOption.notYet.value,
    coCd: CO_CD,
  },
  isShowCreateInbModal: false,
  selectedRow: [],
  updateSearchParams: (newData) => set({ searchParams: newData }),
  updateDatasource: (newData) => set({ datasource: newData }),
  showCreateInbModal: (flag) => set({ isShowCreateInbModal: flag }),
  setSelectedRow: (newData) => set({ selectedRow: newData }),
}));
