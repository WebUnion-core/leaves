import React from 'react';
import ReactDOM from 'react-dom';
import Home from './index.tsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeIndex />, div);
    ReactDOM.unmountComponentAtNode(div);
});
