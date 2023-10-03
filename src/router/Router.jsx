import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/notFound/NotFound'
import Navbar from '../navbar/Navbar'
import Blog from '../pages/blog/Blog'
const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="servicios" element={<Products />} />
        <Route path="blog" element={<Blog />} />

        <Route path="contacto" element={<Contact />} />


        <Route path="*" element={<NotFound />} />



    </Routes>
    </BrowserRouter>
  )
}

export default Router