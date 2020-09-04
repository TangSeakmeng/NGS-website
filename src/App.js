import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from '../src/routers/AppRouter';

import 'react-slideshow-image/dist/styles.css'
import './styles/style.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));