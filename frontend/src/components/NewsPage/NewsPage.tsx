import { Typography } from '@mui/material';
import NewsForm from '../NewsForm/NewsForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetchLoading } from '../../store/newsSlice';
import { createNews } from '../../store/newsThunks';
import { NewsPropsWithoutId } from '../../types';

const NewsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isPending = useAppSelector(selectFetchLoading);
  const onSubmit = async (data: NewsPropsWithoutId) =>{
    dispatch(createNews(data));
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>Add new post</Typography>
      <NewsForm onSubmit={onSubmit} isLoading={isPending}/>
    </>
  );
};

export default NewsPage;