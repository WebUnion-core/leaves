import React from 'react';
import './style.scss';
import { createBrowserHistory } from "history";
import { Link } from 'react-router-dom';
import { SettingStore } from './../../types/Setting';

interface Tab {
    label: string;
    pathname: string;
}

interface Props {
    settingStore: SettingStore;
    tabs: Array<Tab>;
}

interface State {
    activeIndex: number;
}

class NavHeader extends React.Component<Props, object> {
    readonly state = {
        activeIndex: 0,
    }

    componentDidMount() {
        this.setState({
            activeIndex: this.getCurrentRouteIndex(),
        });
    }

    // 根据路由获取tab index
    getCurrentRouteIndex = () => {
        let index = 0;

        this.props.tabs.forEach((tabItem: Tab, tabIndex: number) => {
            if (tabItem.pathname === createBrowserHistory().location.pathname) {
                index = tabIndex;
            }
        });

        return index;
    }

    // 点击链接
    onClickLink = (index: number) => () => {
        this.setState({
            activeIndex: index,
        });
    }

    render () {
        const {
            tabs,
            settingStore,
        } = this.props;
        const { activeIndex } = this.state;

        return (
            <div className={ `nav-header-container ${settingStore.theme}` }>
            {
                tabs.map((item, index) =>
                    <Link
                        className={ `link ${ activeIndex === index ? 'active' : '' }` }
                        key={ index }
                        to={ item.pathname }
                        onClick={ this.onClickLink(index) }
                    >{ item.label }</Link>
                )
            }
            </div>
        );
    }
};

export default NavHeader;
