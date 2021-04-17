import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import search from './reducers/search';
import filter from './reducers/filter';
import register from './reducers/register';
import auth from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isLogin', 'token', 'number', 'user'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  search,
  filter,
  register,
});

// const rootReducer = combineReducers({
//   auth,
//   search,
//   register,
// });

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
