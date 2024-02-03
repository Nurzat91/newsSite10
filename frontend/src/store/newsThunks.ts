import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsList, NewsProps, NewsPropsWithoutId } from '../types';
import axiosApi from '../axiosApi';

export const createNews = createAsyncThunk<void, NewsPropsWithoutId>(
  'news/create',
  async (data) =>{
    await axiosApi.post('news', data);
  }
);
export const fetchNews = createAsyncThunk<NewsProps[], undefined>(
  'news/fetchAll',
  async () => {
    const newsResponse = await axiosApi.get<NewsList>('/news');
    const newsData = newsResponse.data;

    let news: NewsProps[] = [];

    if (newsData) {
      news = Object.keys(newsData).map(key => {
        const data = newsData[key];
        return {
          ...data,
          id: key,
        }
      });
    }

    return news;
  }
);

export const deleteNews = createAsyncThunk<void, string>(
  'news/delete',
  async (newsId) => {
    await axiosApi.delete(`/news/${newsId}.json`);
  }
);
