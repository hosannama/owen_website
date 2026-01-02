import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { MediaPage } from './MediaPage';
import { PublicationsPage } from './PublicationsPage';
export interface OwenAuPortfolioProps {
  'data-id'?: string;
}
const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-blue-900 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl hover:opacity-80 transition-opacity font-['Inter']">
          Owen Au
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={`text-white transition-opacity font-['Inter'] ${isActive('/') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`}>
            Home
          </Link>
          <Link to="/about" className={`text-white transition-opacity font-['Inter'] ${isActive('/about') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`}>
            About
          </Link>
          <Link to="/publications" className={`text-white transition-opacity font-['Inter'] ${isActive('/publications') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`}>
            Publications
          </Link>
          <Link to="/media" className={`text-white transition-opacity font-['Inter'] ${isActive('/media') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`}>
            Media
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '✖' : '☰'}
        </button>
      </nav>

      {/* Mobile menu links */}
      {menuOpen && <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-4">
          <Link to="/" className={`block text-white transition-opacity font-['Inter'] ${isActive('/') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`block text-white transition-opacity font-['Inter'] ${isActive('/about') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/publications" className={`block text-white transition-opacity font-['Inter'] ${isActive('/publications') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`} onClick={() => setMenuOpen(false)}>
            Publications
          </Link>
          <Link to="/media" className={`block text-white transition-opacity font-['Inter'] ${isActive('/media') ? 'opacity-100 font-semibold' : 'opacity-90 hover:opacity-100'}`} onClick={() => setMenuOpen(false)}>
            Media
          </Link>
        </div>}
    </header>;
};
const Footer = () => {
  return <footer className="border-t border-black/20 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sky-950 text-xs font-['Inter']">chowen.au@gmail.com
        {' '}|{' '}
          <a href="https://www.linkedin.com/in/owen-au-01oa" target="_blank" rel="noopener noreferrer" className="text-sky-950 text-xs font-normal font-['Inter'] leading-5 hover:underline">LinkedIn
          </a>  
      </p>
    </div>
    </footer>;
};
export const OwenAuPortfolio = ({
  'data-id': dataId
}: OwenAuPortfolioProps) => {
  return <div data-id={dataId} className="min-h-screen bg-white w-full">
        <Navigation />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/media" element={<MediaPage />} />
          </Routes>
        </main>

        <Footer />
      </div>;
};