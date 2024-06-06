import { statusOptions } from '@/presentation/components/COList/constants';
import { create } from 'zustand';

type Status = {
  id: string;
  value: string;
};

type StatusAction = {
  updateStatus: (newValue: Status) => void;
};

type StatusStore = {
  currentStatus: Status;
};

export const useStatusData = create<StatusStore & StatusAction>((set) => ({
  currentStatus: statusOptions.inProcess,
  updateStatus: (newValue) => set({ currentStatus: newValue }),
}));
