import React from 'react'
import ReactDOM from 'react-dom/client'

import CafApp from './CafApp'
import './index.scss';

import { Provider } from './helpers/Provider';
import reducer, {initialState} from './helpers/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider initialState={ initialState } reducer={ reducer }>
            <CafApp />
        </Provider>
    </React.StrictMode>
)
