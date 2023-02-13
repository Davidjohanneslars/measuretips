import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import blogData from './blogData'
import Homepage from './components/Homepage';
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Article from './Views/Article';

const App = () => {

  const blogCards = blogData.map(item => {
    return <Blog
      key={item.id}
      item={item}
    />
  })

  return (
    <Routes>
      <Route path='/' element={
        <>
          <Navbar />
          <Homepage />
          <section className="cards-list">{blogCards}</section>
          <Footer />
        </>
      } />

      <Route path='/about-us' element={
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      } />

      <Route path='/contact' element={
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      } />


      <Route path='/blog' element={
        <>
          <Navbar />
          <Homepage />
          <section className="cards-list">{blogCards}</section>
          <Footer />
        </>
      } />

<Route path='/articles/:id' element={
        <>
          <Navbar />
          <Article/>
          <Footer />
        </>
      } />


    </Routes>

  )
}

export default App;


