import { createSlice } from '@reduxjs/toolkit';
import { NewsProps } from '../types';
import { createNews, deleteNews, fetchNews } from './newsThunks';
import { RootState } from '../app/store';

interface NewsState {
  items: NewsProps[];
  createLoading: boolean;
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: NewsState = {
  items: [],
  createLoading: false,
  fetchLoading: false,
  deleteLoading: false,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNews.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createNews.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createNews.rejected, (state) => {
      state.createLoading = false;
    });

    builder.addCase(fetchNews.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.items = items;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(deleteNews.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteNews.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteNews.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchLoading = false;
    });
  }
});

export const newsReducer = newsSlice.reducer;
export const selectNews = (state: RootState) => state.news.items;
export const selectFetchCreatLoading = (state: RootState) => state.news.createLoading;
export const selectFetchLoading = (state: RootState) => state.news.fetchLoading;
export const selectFetchDeleteLoading = (state: RootState) => state.news.deleteLoading;