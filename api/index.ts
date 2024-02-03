import cors from 'cors';
import express from 'express';
import newsRouter from "./routers/news";


const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/products', newsRouter);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});