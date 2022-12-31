import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './reducers/home';
import othersReducer from './reducers/others';
import uiReducer from './reducers/ui';

const reducers = combineReducers({
  home: homeReducer,
  others: othersReducer,
  ui: uiReducer,
});

const persistedReducer = persistReducer(
  {
    blacklist: ['home', 'ui'],
    key: 'root',
    storage,
  },
  reducers,
);

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
