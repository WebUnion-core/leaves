// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';

import { settingEnthusiasm } from './Setting';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    state.settingStore = settingEnthusiasm(state.settingStore, action);
    return Object.assign({}, state);
}
