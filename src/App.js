import React from "react";
import { Routes , Route} from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs/:slug' element={<BlogPage />} />
        <Route path='/author/:slug' element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
