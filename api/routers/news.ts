import {Router} from 'express';
import {filesUpload} from "../multer";
import fileDb from "../fileDb";
import {NewsWithoutId} from "../types";

const newsRouter = Router();

newsRouter.get('/', async (req, res) => {
  const news = await fileDb.getItems();
  res.send(news);
});

newsRouter.get('/:id', async (req, res) => {
  const news = await fileDb.getItems();
  const newsId = req.params.id;
  const newData = news.find(p => p.id === newsId);

  if (!newData) {
    return res.status(404).json({ error: `Product with ID ${newsId} not found` });
  }

  res.send(newData);
});

newsRouter.post('/', filesUpload.single('image'), async (req, res) => {
  const news: NewsWithoutId = {
    title: req.body.title,
    description: req.body.description,
    image: req.file ? req.file.filename : null,
    date: req.body.date,
  };

  const newData = await fileDb.addItem(news);
  res.send(newData);
});

newsRouter.delete('/:id', async (req, res) => {
  const newsId = req.params.id;
  await fileDb.deleteItem(newsId);
  res.send(newsId);
});


export default newsRouter;