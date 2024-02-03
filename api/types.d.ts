export interface NewsProps {
  id: string,
  title: string,
  description: string,
  image?: string | null,
  date: string,
}
export type NewsWithoutId = Omit<NewsProps, 'id'>;
export interface CommentsProps {
  id: string,
  news_id: string,
  author: string,
  text: string,
}
export type CommentsWithoutId = Omit<CommentsProps, 'id'>;