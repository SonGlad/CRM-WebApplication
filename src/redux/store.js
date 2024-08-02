import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/auth-slice';
import { userReducer } from './User/user-slice';
import { leadReducer } from './Lead/lead-slice';
import { filterReducer } from './Filter/filter-slice';
import { modalReducer } from './Modal/modal-slice';
import { 
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [
    'token',
    'currentLocation',
    'isAdmin'
  ],
};


const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: [
    'officeState',
    'selectedCheckedCheckbox',
  ],
};


const leadPersistConfig = {
  key: 'lead',
  storage,
  whitelist: [
    'officeState'
  ],
};


const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: [],
};


const modalPersistConfig = {
  key: "modal",
  storage,
  whitelist: []
};


const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  lead: persistReducer(leadPersistConfig, leadReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
  modal: persistReducer(modalPersistConfig, modalReducer),
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
