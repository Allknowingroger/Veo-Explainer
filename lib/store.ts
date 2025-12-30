import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  didInit: boolean;
  setDidInit: (val: boolean) => void;
}

export const useStore = create<AppState>()(
  immer((set) => ({
    didInit: false,
    setDidInit: (val) => set((state) => { state.didInit = val; })
  }))
);
