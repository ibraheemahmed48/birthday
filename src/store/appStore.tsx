import { create } from 'zustand';



interface globalSettings {
    isOpenSound: boolean;
    setIsOpenSound: (redirect: boolean) => void;

    isOpenSecondSound: boolean;
    setIsOpenSecondSound: (redirect: boolean) => void;
}

const useAppStore = create<globalSettings>((set) => ({
    isOpenSound: false,
    setIsOpenSound: (isOpen) => set({ isOpenSound: isOpen }),

    isOpenSecondSound: false,
    setIsOpenSecondSound: (isOpen) => set({ isOpenSecondSound: isOpen }),
}));

export default useAppStore;


