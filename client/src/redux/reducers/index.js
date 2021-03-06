import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import post from './post';
import loading from './loading';
import error from './error';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'crud']
};


const rootReducer =  combineReducers({
  user,
  post,
  loading,
  error
});

export default persistReducer(persistConfig, rootReducer);