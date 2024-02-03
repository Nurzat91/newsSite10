import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsPropsWithoutId } from '../types';
import axiosApi from '../axiosApi';

export const createNews = createAsyncThunk<void, NewsPropsWithoutId>(
  'news/create',
  async (data) =>{
    await axiosApi.post('news', data);
  }
);