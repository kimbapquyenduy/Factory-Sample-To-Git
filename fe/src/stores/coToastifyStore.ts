import { create } from 'zustand';

type ToastifyConfig = {
  status: boolean;
  type: string;
  contain: string;
};

type ToastifyStore = {
  config: ToastifyConfig;
  openToastify: (config: ToastifyConfig) => void;
  closeToastify: () => void;
};

export const toastifyType = {
  success: 'SUCCESS',
  warning: 'WARNING',
  error: 'ERROR',
};

export const useToastifyData = create<ToastifyStore>((set) => ({
  config: {
    contain: '',
    status: false,
    type: toastifyType.success,
  },
  closeToastify: () => {
    set({
      config: {
        status: false,
        contain: '',
        type: '',
      },
    });
  },
  openToastify: (toastConfig) => {
    set({
      config: {
        ...toastConfig,
        status: true,
      },
    });
  },
}));
