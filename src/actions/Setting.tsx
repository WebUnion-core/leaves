// src/actions/Setting.tsx

import * as constants from './../constants/Setting';

export interface SetThemeEnthusiasm {
    type: constants.SET_THEME;
    theme?: string;
}

export type SettingAction = SetThemeEnthusiasm;
