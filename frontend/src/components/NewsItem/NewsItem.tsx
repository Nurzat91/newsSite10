import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  styled,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import noImageAvailable from '../../assets/images/noImageAvailable.png';
import { apiURL } from '../../constants';
import { NewsProps } from '../../types';

interface Props {
  data: NewsProps;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '30%',
});

const NewsItem: React.FC<Props> = ({ data, deleteLoading, onDelete }) => {
  const cardImage = data.image ? apiURL + '/' + data.image : noImageAvailable;

  return (
    <Grid item xs={12} sm={12} md={5} lg={10}>
      <Card sx={{ display: 'flex', height: '200px' }}>
        <ImageCardMedia image={cardImage} sx={{ flex: '0 0 30%' }} />
        <Grid container item direction="column" sx={{ flex: '0 0 70%' }}>
          <CardHeader title={data.title} />
          <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
            <Typography component={Link} to={'/news/' + data.id} color="primary" variant="subtitle2" sx={{ marginRight: 'auto' }}>
              Read full post
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Typography>
            <Button onClick={onDelete} disabled={deleteLoading === true}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default NewsItem;