import { SettingStore, initSettingStore } from './Setting';

export interface StoreState {
    settingStore: SettingStore;
}

export const initStore = {
    settingStore: initSettingStore,
};
