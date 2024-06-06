import { create } from 'zustand';

type TrackingList = {
  search?: boolean;
  export?: boolean;
  clear?: boolean;
  createInb?: boolean;
};

type LoadingStateStore = {
  states: TrackingList;
  updateLoadingState: (key: string, value: boolean) => void;
};

export const useBtnLoadingStateData = create<LoadingStateStore>((set) => ({
  states: {
    search: false,
    export: false,
    clear: false,
    createInb: false,
  },
  updateLoadingState: (key, value) =>
    set((state) => ({
      states: {
        ...state.states,
        [key]: value,
      },
    })),
}));
