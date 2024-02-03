import express from 'express';
import newsRouter from "./routers/news";
import fileDb from "./fileDb";
import cors from 'cors';
import commentsRouter from "./routers/comments";


const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/news', newsRouter);
app.use('/comments', commentsRouter);

const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};
void run();