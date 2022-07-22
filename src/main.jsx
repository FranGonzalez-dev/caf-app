import React from 'react'
import ReactDOM from 'react-dom/client'

import CafApp from './CafApp'

import { Provider } from './helpers/Provider';
import reducer, {initialState} from './helpers/reducer';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider initialState={ initialState } reducer={ reducer }>
            <CafApp />
        </Provider>
    </React.StrictMode>
)
