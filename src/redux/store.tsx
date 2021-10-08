import React from 'react';
import { createStore } from 'redux';
import rootreducer from './Reducers'; //from the index.tsx of reducers
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootreducer,
    composeWithDevTools()
);

interface Props extends React.HTMLAttributes<Element> {
    props?: any
};

function DataProvider({children}: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider;