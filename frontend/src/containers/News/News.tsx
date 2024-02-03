import { useEffect } from 'react';
import { Button, CircularProgress, Grid, Link, Typography } from '@mui/material';
import { selectFetchDeleteLoading, selectFetchLoading, selectNews } from '../../store/newsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteNews, fetchNews } from '../../store/newsThunks';
import NewsItem from '../../components/NewsItem/NewsItem';


const News = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const isLoading = useAppSelector(selectFetchLoading);
  const deleteLoading = useAppSelector(selectFetchDeleteLoading);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const removeNews = async (id: string) => {
    await dispatch(deleteNews(id));
    await dispatch(fetchNews());
  }

  let newsData = (
    isLoading ? <CircularProgress /> : news.map((data) => (
      <NewsItem
        key={data.id}
        data={data}
        deleteLoading={deleteLoading === data.id}
        onDelete={() => removeNews(data.id)}
      />
    ))
  );

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} href="/news/news-post">
            Add new post
          </Button>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {newsData}
      </Grid>
    </Grid>
  );
};

export default News;