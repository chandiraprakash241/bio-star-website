import React, { useState } from 'react'
import Carousel from './components/Carousel'

// Custom high-fidelity inline SVG Icons to eliminate dependency compile issues
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.555 0-6.44-2.885-6.44-6.44s2.885-6.44 6.44-6.44c1.633 0 3.12.607 4.261 1.73l3.059-3.059C19.167 2.298 15.938 1 12.24 1 5.866 1 .7 6.166.7 12.54s5.166 11.54 11.54 11.54c6.262 0 11.54-5.187 11.54-11.54 0-.785-.098-1.54-.265-2.255H12.24z" />
  </svg>
)

const ExcavatorIcon = ({ className = "w-8 h-8 text-emerald-800" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="32" width="22" height="14" rx="2" />
    <circle cx="16" cy="50" r="5" />
    <circle cx="30" cy="50" r="5" />
    <rect x="10" y="48" width="26" height="4" rx="1" fill="currentColor" />
    <path d="M26 32 L38 16 L48 24 L52 38" />
    <path d="M52 38 L58 44 M52 38 L48 44" />
    <rect x="22" y="35" width="8" height="6" rx="1" />
  </svg>
)

const SepticTankIcon = ({ className = "w-8 h-8 text-emerald-850" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="24" width="48" height="24" rx="12" />
    <line x1="20" y1="24" x2="20" y2="48" />
    <line x1="32" y1="24" x2="32" y2="48" />
    <line x1="44" y1="24" x2="44" y2="48" />
    <path d="M4 30h4M56 30h4" />
    <rect x="16" y="16" width="8" height="8" rx="1" />
    <rect x="40" y="16" width="8" height="8" rx="1" />
  </svg>
)

const PipelineIcon = ({ className = "w-8 h-8 text-emerald-800" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20 h20 v16 h20" />
    <path d="M28 36 v12 h8" />
    <rect x="6" y="16" width="4" height="8" />
    <rect x="24" y="16" width="8" height="4" />
    <rect x="44" y="32" width="8" height="4" />
    <rect x="34" y="44" width="4" height="8" />
  </svg>
)

const SwipeIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-2V6a2 2 0 0 0-4 0v4H9.5a2.5 2.5 0 0 0 0 5h7.32a6 6 0 0 0 5.43-3.48L23 10h-5z" />
    <path d="M12 21h-2a8 8 0 0 1-8-8v-2" />
    <path d="M6 6 L3 3 M6 6 L3 9" />
    <path d="M18 6 L21 3 M18 6 L21 9" />
  </svg>
)

const LeafIcon = ({ className = "w-8 h-8 text-brand-green" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-7 7h-3" />
    <path d="M19 2c-2.06 2-6.06 2.06-8 4" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-8 h-8 text-brand-green" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
)

const WrenchIcon = ({ className = "w-8 h-8 text-brand-green" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const DropletIcon = ({ className = "w-8 h-8 text-brand-green" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
  </svg>
)

const SearchIcon = ({ className = "w-8 h-8 text-emerald-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const HomeIcon = ({ className = "w-8 h-8 text-emerald-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#fafcfb] text-[#2d3a34] antialiased">
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 bg-white shadow-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/bio_septic_logo.png" 
              alt="Bio Star Bio Septic Tank Logo" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {['Home', 'About Us', 'Services', 'How It Works', 'Our Works', 'Contact Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-gray-600 hover:text-brand-green transition-colors duration-200 relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:6381233245" 
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border-2 border-brand-green text-brand-green font-semibold hover:bg-green-50/50 transition-colors duration-200"
            >
              <PhoneIcon className="w-4 h-4 text-brand-green" />
              <span>63812 33245</span>
            </a>
            <a 
              href="https://wa.me/919566902865" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-green text-white font-semibold hover:bg-brand-green-hover transition-colors duration-200 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>95669 02865</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-green focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 shadow-inner py-4 px-6 space-y-3">
            {['Home', 'About Us', 'Services', 'How It Works', 'Our Works', 'Contact Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-gray-700 hover:text-brand-green py-2 border-b border-gray-50 last:border-none"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Quick Action Buttons Row (Just below Navbar) */}
        <div className="lg:hidden bg-gray-50 border-t border-gray-100 py-3 px-4 grid grid-cols-2 gap-3">
          <a 
            href="tel:6381233245" 
            className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-forest-900 text-white text-sm font-semibold hover:bg-forest-950 transition-colors duration-200"
          >
            <PhoneIcon className="w-4 h-4 text-white" />
            <span>63812 33245</span>
          </a>
          <a 
            href="https://wa.me/919566902865" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white border border-brand-green text-brand-green text-sm font-semibold hover:bg-green-50/30 transition-colors duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>95669 02865</span>
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left text column */}
        <div className="text-left space-y-6">
          <div className="space-y-2">
            <span className="block font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-none uppercase">
              Clean Today,
            </span>
            <span className="block font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-green tracking-tight leading-none uppercase">
              Green Tomorrow
            </span>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
            Eco-friendly bio septic tank solutions for a healthier home and a cleaner environment.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/919566902865"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-brand-green text-white font-bold py-3.5 px-6 rounded-xl hover:bg-brand-green-hover transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Get Quote on WhatsApp</span>
            </a>
            <a 
              href="tel:6381233245"
              className="flex items-center justify-center space-x-2 bg-white border-2 border-brand-green text-brand-green font-bold py-3.5 px-6 rounded-xl hover:bg-green-50/50 transition-colors duration-200 cursor-pointer"
            >
              <PhoneIcon className="w-4 h-4 text-brand-green" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Right image column */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-md">
          <img 
            src="/herosection_img.jpg" 
            alt="Bio Star green septic tank installation 3D rendering" 
            className="w-full h-auto min-h-[240px] max-h-[400px] lg:max-h-none object-cover object-center"
          />
        </div>
      </section>

      {/* 3. KEY BENEFITS SECTION */}
      <section className="bg-white border-y border-gray-100 py-10 my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { icon: <LeafIcon className="w-8 h-8 text-brand-green" />, title: "Eco Friendly" },
              { icon: <ShieldCheckIcon className="w-8 h-8 text-brand-green" />, title: "Long Lasting" },
              { icon: <WrenchIcon className="w-8 h-8 text-brand-green" />, title: "Low Maintenance" },
              { icon: <DropletIcon className="w-8 h-8 text-brand-green" />, title: "High Efficiency" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-outfit font-bold text-gray-800 text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED INFO SECTION ("ADVANCED BIO SEPTIC SYSTEMS") */}
      <section id="about-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Image column (Landscape/Square green septic tank) */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-md">
          <img 
            src="/about_section_img.jpg" 
            alt="Advanced green bio septic system model installation in trench" 
            className="w-full h-auto object-cover object-center"
          />
        </div>

        {/* Right Content column */}
        <div className="lg:col-span-6 text-left space-y-5">
          <div className="space-y-1">
            <span className="block font-outfit text-sm font-bold text-brand-green tracking-wider uppercase">
              Advanced
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight uppercase">
              Bio Septic Systems
            </h2>
            <div className="h-1 w-16 bg-brand-green rounded mt-2" />
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            Our bio septic tanks are specially designed to provide maximum waste treatment efficiency with minimal maintenance.
          </p>

          {/* Grid checkmark items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "High Waste Treatment Efficiency",
              "Durable & Long Lasting",
              "Environmentally Safe",
              "Minimal Maintenance"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-start space-x-2.5">
                <div className="mt-0.5 rounded-full bg-brand-green p-0.5 text-white flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 leading-tight">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR RECENT WORKS CAROUSEL SECTION */}
      <section id="our-works" className="bg-[#f3f7f5] py-12 md:py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase">
              Our Recent <span className="text-brand-green">Works</span>
            </h2>
            <div className="h-1 w-16 bg-brand-green rounded mx-auto" />
          </div>

          {/* Carousel */}
          <Carousel />
        </div>
      </section>

      {/* 6. "HOW IT WORKS" FLOWCHART SECTION */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="space-y-2 mb-12">
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase">
            How It <span className="text-brand-green">Works</span>
          </h2>
          <div className="h-1 w-16 bg-brand-green rounded mx-auto" />
        </div>

        {/* Desktop Pipeline (Horizontal flowchart) */}
        <div className="hidden lg:flex items-center justify-between relative max-w-5xl mx-auto py-8">
          {/* Connector Line Background */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 border-t-2 border-dotted border-emerald-300 -translate-y-6 z-0" />

          {/* Step 1 */}
          <div className="flex flex-col items-center relative z-10 w-36">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
              <SearchIcon className="w-8 h-8 text-emerald-800" />
            </div>
            <div className="mt-3">
              <span className="font-outfit font-extrabold text-brand-green text-lg">01</span>
              <p className="font-medium text-gray-800 text-sm mt-1 leading-snug">Site Inspection</p>
            </div>
          </div>

          <div className="text-emerald-500 font-extrabold text-xl z-10 -translate-y-6">&gt;</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative z-10 w-36">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
              <ExcavatorIcon />
            </div>
            <div className="mt-3">
              <span className="font-outfit font-extrabold text-brand-green text-lg">02</span>
              <p className="font-medium text-gray-800 text-sm mt-1 leading-snug">Excavation</p>
            </div>
          </div>

          <div className="text-emerald-500 font-extrabold text-xl z-10 -translate-y-6">&gt;</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative z-10 w-36">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-md -translate-y-2">
              <SepticTankIcon className="w-10 h-10 text-brand-green" />
            </div>
            <div className="mt-1">
              <span className="font-outfit font-extrabold text-brand-green text-lg">03</span>
              <p className="font-medium text-gray-800 text-sm mt-1 leading-snug">Tank Installation</p>
            </div>
          </div>

          <div className="text-emerald-500 font-extrabold text-xl z-10 -translate-y-6">&gt;</div>

          {/* Step 4 */}
          <div className="flex flex-col items-center relative z-10 w-36">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
              <PipelineIcon />
            </div>
            <div className="mt-3">
              <span className="font-outfit font-extrabold text-brand-green text-lg">04</span>
              <p className="font-medium text-gray-800 text-sm mt-1 leading-snug">Pipeline Connection</p>
            </div>
          </div>

          <div className="text-emerald-500 font-extrabold text-xl z-10 -translate-y-6">&gt;</div>

          {/* Step 5 */}
          <div className="flex flex-col items-center relative z-10 w-36">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
              <HomeIcon className="w-8 h-8 text-emerald-800" />
            </div>
            <div className="mt-3">
              <span className="font-outfit font-extrabold text-brand-green text-lg">05</span>
              <p className="font-medium text-gray-800 text-sm mt-1 leading-snug">Ready to Use</p>
            </div>
          </div>
        </div>

        {/* Mobile Pipeline Flowchart (Z-pattern grid map matching the screenshot) */}
        <div className="lg:hidden max-w-sm mx-auto relative px-4 py-6">
          {/* Connecting SVG Path overlay for Z-pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-300 stroke-2" fill="none" style={{ strokeDasharray: '4 4' }}>
            <path d="M 64 64 L 288 64" />
            <path d="M 288 64 L 176 190" />
            <path d="M 176 190 L 64 320" />
            <path d="M 64 320 L 288 320" />
          </svg>

          {/* Row 1: Step 01 & 02 */}
          <div className="flex justify-between mb-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-28 bg-[#fafcfb] relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
                <SearchIcon className="w-6 h-6 text-emerald-800" />
              </div>
              <div className="mt-2 text-center">
                <span className="font-outfit font-extrabold text-brand-green text-sm">01</span>
                <p className="font-medium text-gray-800 text-xs mt-0.5">Site Inspection</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-28 bg-[#fafcfb] relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
                <ExcavatorIcon className="w-6 h-6 text-emerald-800" />
              </div>
              <div className="mt-2 text-center">
                <span className="font-outfit font-extrabold text-brand-green text-sm">02</span>
                <p className="font-medium text-gray-800 text-xs mt-0.5">Excavation</p>
              </div>
            </div>
          </div>

          {/* Row 2: Step 03 Centered */}
          <div className="flex justify-center mb-16">
            {/* Step 3 */}
            <div className="flex flex-col items-center w-32 bg-[#fafcfb] relative z-10">
              <div className="w-18 h-18 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-md">
                <SepticTankIcon className="w-9 h-9 text-brand-green" />
              </div>
              <div className="mt-2 text-center">
                <span className="font-outfit font-extrabold text-brand-green text-sm">03</span>
                <p className="font-medium text-gray-800 text-xs mt-0.5">Tank Installation</p>
              </div>
            </div>
          </div>

          {/* Row 3: Step 04 & 05 */}
          <div className="flex justify-between">
            {/* Step 4 */}
            <div className="flex flex-col items-center w-28 bg-[#fafcfb] relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
                <PipelineIcon className="w-6 h-6 text-emerald-800" />
              </div>
              <div className="mt-2 text-center">
                <span className="font-outfit font-extrabold text-brand-green text-sm">04</span>
                <p className="font-medium text-gray-800 text-xs mt-0.5">Pipeline Connection</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center w-28 bg-[#fafcfb] relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm">
                <HomeIcon className="w-6 h-6 text-emerald-800" />
              </div>
              <div className="mt-2 text-center">
                <span className="font-outfit font-extrabold text-brand-green text-sm">05</span>
                <p className="font-medium text-gray-800 text-xs mt-0.5">Ready to Use</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA BANNER ("READY FOR A CLEANER FUTURE?") */}
      <section className="bg-forest-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left Crop Image Column */}
          <div className="md:col-span-5 relative min-h-[220px] md:min-h-0 bg-forest-950">
            <img 
              src="/cta_image.jpg" 
              alt="Lush green garden house landscape" 
              className="absolute inset-0 w-full h-full object-cover object-left md:object-center opacity-85"
            />
          </div>

          {/* Right Text Column */}
          <div className="md:col-span-7 py-12 px-6 sm:px-12 md:py-16 text-left flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                Ready for a <span className="text-brand-lime">Cleaner Future?</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Get your bio septic tank installed today!
              </p>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:6381233245" 
                className="flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-white text-forest-900 font-bold hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-sm text-center"
              >
                <PhoneIcon className="w-4 h-4 text-forest-900" />
                <span>63812 33245</span>
              </a>
              <a 
                href="https://wa.me/919566902865" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-brand-lime text-forest-950 font-bold hover:bg-brand-lime-hover transition-colors duration-200 cursor-pointer shadow-sm text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-forest-950" />
                <span>95669 02865</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="services" className="bg-[#04160f] text-gray-300 pt-16 pb-24 md:pb-12 border-t border-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Intro */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#" className="flex items-center">
              <img 
                src="/bio_septic_logo.png" 
                alt="Bio Star Logo" 
                className="h-18 w-auto object-contain" 
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Providing advanced and eco-friendly bio septic tank solutions for homes and businesses across Tamil Nadu.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-outfit font-semibold text-white tracking-wider uppercase text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Services', 'How It Works', 'Our Works', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-brand-lime transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-outfit font-semibold text-white tracking-wider uppercase text-sm mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                "Bio Septic Tank Installation",
                "Septic Tank Replacement",
                "Maintenance & Cleaning",
                "Repair & Renovation",
                "Consultation"
              ].map((service) => (
                <li key={service} className="hover:text-brand-lime transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div id="contact-us" className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-outfit font-semibold text-white tracking-wider uppercase text-sm mb-4">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-2.5 text-gray-400">
                <MapPinIcon className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  275, Karanai Main Rd, Sankarapuram, Ottiambakkam, Chennai, Arasankalani, Tamil Nadu 600103
                </span>
              </div>
              <a href="tel:6381233245" className="flex items-center space-x-2.5 text-gray-400 hover:text-brand-lime transition-colors duration-200">
                <PhoneIcon className="w-5 h-5 text-brand-lime" />
                <span className="font-semibold text-white">63812 33245</span>
              </a>
              <a href="https://wa.me/919566902865" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2.5 text-gray-400 hover:text-brand-lime transition-colors duration-200">
                <WhatsAppIcon className="w-5 h-5 text-brand-lime" />
                <span className="font-semibold text-white">95669 02865</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-forest-900 mt-12 pt-6 text-center text-xs text-gray-500">
          <p>© 2025 Bio Star - Bio Septic Tank. All Rights Reserved.</p>
        </div>
      </footer>

      {/* 9. FLOATING BOTTOM BAR (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between pointer-events-none">
        {/* Floating Call Button */}
        <a 
          href="tel:6381233245" 
          className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto border-2 border-white hover:bg-emerald-700 transition-colors duration-200 active:scale-95"
          aria-label="Call Support"
        >
          <PhoneIcon className="w-6 h-6 text-white" />
        </a>

        {/* Center Swipe Info Pill */}
        <div className="flex-1 mx-3 bg-[#0c2f20]/95 backdrop-blur-sm text-white px-3 py-2 rounded-xl flex items-center justify-center space-x-2 shadow-lg border border-[#164430] pointer-events-auto max-w-[240px]">
          <SwipeIcon className="w-5 h-5 text-brand-lime animate-pulse" />
          <div className="text-[10px] leading-tight text-left">
            <p className="font-semibold text-gray-100">Swipe to view more works</p>
            <p className="text-gray-400">Slides change automatically</p>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919566902865" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto border-2 border-white hover:bg-emerald-600 transition-colors duration-200 active:scale-95"
          aria-label="WhatsApp Support"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </a>
      </div>

    </div>
  )
}

export default App
