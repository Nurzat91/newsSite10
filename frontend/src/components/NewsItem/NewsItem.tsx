// import React from 'react';
// import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import noImageAvailable from '@/assets/images/noImageAvailable.png';
//
//
//
// const ImageCardMedia = styled(CardMedia)({
//   height: 0,
//   paddingTop: '50%',
// });
//
// interface Props {
//   id: string;
//   title: string;
//   date: string;
//   image: string | null;
// }
// const NewsItem: React.FC<Props> = ({id, title, date,image}) => {
//   let cardImage  = noImageAvailable.src;
//
//   if (image) {
//     cardImage = apiURL + '/' + image;
//   }
//
//   return (
//     <Grid item xs={12} sm={12} md={6} lg={4}>
//       <Card sx={{height: '100%'}}>
//         <CardHeader title={title}/>
//         <ImageCardMedia image={cardImage} title={title}/>
//         <CardContent>
//           date={date}
//         </CardContent>
//         <CardActions>
//           <IconButton component={Link} to={'/news/' + id}>
//             <ArrowForwardIcon/>
//           </IconButton>
//         </CardActions>
//       </Card>
//     </Grid>
//   );
// };
//
// export default NewsItem;