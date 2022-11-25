import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/Rockets';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
