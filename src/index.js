import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ClickCounterClass} from './ClickCounterClass'
import {ClickCounterHook} from './ClickCounterHook'

// ========================================

ReactDOM.render(
    <ClickCounterClass />,
    document.getElementById('root')
);

