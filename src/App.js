import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/Home/HomePage';
import BlogPage from './components/Blog/BlogPage';
import AuthorPage from './components/Author/AuthorPage';
import ScrollToTop from './components/shared/ScorollToTop';


const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/blogs/:slug' element={<BlogPage />} />
       <Route path='/authors/:slug' element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
