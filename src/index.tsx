import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/reset.scss';
import * as serviceWorker from './serviceWorker';

import routes from './all-routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavHeader from './components/NavHeader';

import * as actions from './actions';
import { StoreState, initStore } from './types';
import { enthusiasm } from './reducers';
import { connect, Provider } from 'react-redux';
import { Dispatch, createStore } from 'redux';

const store = createStore<StoreState>(enthusiasm, initStore);

interface Tab {
    label: string;
    pathname: string;
}

// 绑定state
function mapStateToProps(store: StoreState) {
    return { ...store };
}

// 绑定action
function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return { dispatch };
}

// 给导航组件传入store
const NavHeaderInStore = connect(mapStateToProps, mapDispatchToProps)(NavHeader);

class RouterConfig extends React.Component<object, object> {
    state = {
        history: createBrowserHistory(), // 获取浏览器历史记录信息
    }

    // 导航tab
    readonly allTabs = [
        {
            label: 'Home',
            pathname: '/',
        },
        {
            label: 'Setting',
            pathname: '/setting',
        },
    ];

    render() {
        return (
            <Provider store={ store as any }>
                <Router>
                    <React.Fragment>
                        <NavHeaderInStore tabs={ this.allTabs } />
                        <Switch>
                        {
                            routes.map((item, index) =>
                                <Route
                                    key={ index }
                                    path={ item.pathname }
                                    component={ connect(mapStateToProps, mapDispatchToProps)(item.module) }
                                    exact
                                />
                            )
                        }
                        </Switch>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <RouterConfig />,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
