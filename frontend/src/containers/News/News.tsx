import { Button, Grid, Link, Typography } from '@mui/material';

const News = () => {
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
    </Grid>
  );
};

export default News;