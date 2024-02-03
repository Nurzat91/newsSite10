export interface NewsProps {
  id: string;
  title: string;
  content: string;
  image: string | null;
}

export type NewsPropsWithoutId = Omit<NewsProps, 'id'>;