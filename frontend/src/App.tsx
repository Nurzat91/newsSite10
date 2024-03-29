import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import News from './containers/News/News';
import NewsPage from './components/NewsPage/NewsPage';
import PostPage from './containers/PostPage/PostPage';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<News/>}/>
        <Route path={"/news/:id"} element={<PostPage/>}/>
        <Route path={"/news/news-post"} element={<NewsPage/>}/>
        <Route path="*" element={(<ErrorPage/>)}/>
      </Routes>
    </Layout>
  )
}

export default App
