import { createSlice } from '@reduxjs/toolkit';
import { NewsProps } from '../types';
import { createNews } from './newsThunks';
import { RootState } from '../app/store';

interface NewsState {
  items: NewsProps[];
  fetchLoading: boolean;
}

const initialState: NewsState = {
  items: [],
  fetchLoading: false,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNews.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(createNews.fulfilled, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(createNews.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const newsReducer = newsSlice.reducer;
export const selectFetchLoading = (state: RootState) => state.news.fetchLoading;