import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Exporta el tipo RootState basado en el store
export type RootState = ReturnType<typeof store.getState>;

// Exporta el tipo AppDispatch basado en el store
export type AppDispatch = typeof store.dispatch;

export default store;