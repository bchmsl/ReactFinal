import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import PostDetailsPage from "./pages/BlogDetailsPage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
