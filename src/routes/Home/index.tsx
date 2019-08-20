import React from 'react';
import { SettingStore } from './../../types/Setting';
import './style.scss';

interface Props {
    settingStore: SettingStore;
}

export default class Home extends React.Component<Props, object> {
    render() {
        const { theme } = this.props.settingStore;

        return (
            <div className={`home-container ${theme}`}>
                <h1 className="title">Thanks for using Leaves. </h1>
            </div>
        );
    }
}
