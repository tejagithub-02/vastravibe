import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryCarousel from './components/CategoryCarousel';
import PopularProducts from './components/PopularProducts';
import TrendingProducts from './components/TrendingProducts';
import BrandedProducts from './components/BrandedProducts';
import ExploreMore from './components/ExploreMore';
import NewArrivals from './components/NewArrivals';
import AboutUs from './components/AboutUs';
import EnquiryForm from './components/EnquriyForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <CategoryCarousel />
              <PopularProducts />
              <TrendingProducts />
              <BrandedProducts />
              <ExploreMore />
              <NewArrivals />
              <AboutUs />
              <EnquiryForm />
              <Footer />
              <WhatsAppButton />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;