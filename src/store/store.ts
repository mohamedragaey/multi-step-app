import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import { loadFormFromStorage, saveFormToStorage } from '../utils/storage';

const preloadedState = {
  form: loadFormFromStorage(),
};

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState,
});

// Save form slice on every change
store.subscribe(() => {
  const state = store.getState();
  saveFormToStorage(state.form);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
