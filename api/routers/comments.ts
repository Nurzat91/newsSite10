import {Router} from 'express';
import fileDb from "../fileDb";
import {CommentsWithoutId} from "../types";

const commentsRouter = Router();

commentsRouter.get('/', async (req, res) => {
  const comments = await fileDb.getItems();
  res.send(comments);
});

commentsRouter.get('/:id', async (req, res) => {
  const comments = await fileDb.getItems();
  const commentsId = req.params.id;
  const comment = comments.find(p => p.id === commentsId);

  if (!comment) {
    return res.status(404).json({ error: `Product with ID ${commentsId} not found` });
  }

  res.send(comment);
});

commentsRouter.post('/', async (req, res) => {
  const comments: CommentsWithoutId = {
    news_id: req.body.news_id,
    author: req.body.author || 'Anonymous',
    text: req.body.text,
  };

  const newComments = await fileDb.addItem(comments);
  res.send(newComments);
});

commentsRouter.delete('/:id', async (req, res) => {
  const commentsId = req.params.id;
  await fileDb.deleteItem(commentsId);
  res.send(commentsId);
});


export default commentsRouter;