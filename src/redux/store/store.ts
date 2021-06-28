import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['taskreducer']
};

import { 
    taskreducer
 } from '../reducers/taskreducer';

const rootReducer = combineReducers({
    taskreducer: persistReducer(persistConfig, taskreducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);