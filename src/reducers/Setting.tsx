// src/reducers/Setting.tsx

import { SettingAction } from './../actions/Setting';
import { SettingStore, initSettingStore } from './../types/Setting';
import { SET_THEME } from './../constants/Setting';

export function settingEnthusiasm(state: SettingStore, action: SettingAction): SettingStore {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.theme || initSettingStore.theme,
            };
        default:
            return state;
    }
}
