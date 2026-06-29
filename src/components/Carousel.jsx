import React, { useState, useEffect, useRef } from 'react'

const worksData = [
  {
    image: "/bio_septic_images/1.jpg",
    title: "Residential Installation",
    location: "Perumbakkam, Chennai"
  },
  {
    image: "/bio_septic_images/2.jpg",
    title: "Residential Installation",
    location: "Medavakkam, Chennai"
  },
  {
    image: "/bio_septic_images/3.jpg",
    title: "Residential Installation",
    location: "Thoraipakkam, Chennai"
  },
  {
    image: "/bio_septic_images/5.jpg",
    title: "Commercial Installation",
    location: "Sholinganallur, Chennai"
  },
  {
    image: "/bio_septic_images/7.jpg",
    title: "Residential Installation",
    location: "Pallikaranai, Chennai"
  },
  {
    image: "/bio_septic_images/8.jpg",
    title: "Residential Installation",
    location: "Tambaram, Chennai"
  },
  {
    image: "/bio_septic_images/14.jpg",
    title: "Residential Installation",
    location: "Velachery, Chennai"
  }
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayRef = useRef()
  const touchStart = useRef(0)
  const touchEnd = useRef(0)

  // Track window size to determine layout (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate slide limits
  const totalSlides = worksData.length
  // On desktop we show 3 items, so max index is totalSlides - 3
  // On mobile we show 1 item, so max index is totalSlides - 1
  const maxIndex = isMobile ? totalSlides - 1 : totalSlides - 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index)
    }
  }

  // Setup auto-play (rotation every 4 seconds)
  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(play, 4000)
    return () => clearInterval(interval)
  }, [maxIndex]) // Reset timer when layout changes

  // Touch handlers for swipe support
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 75) {
      // swipe left (next)
      nextSlide()
    }
    if (touchStart.current - touchEnd.current < -75) {
      // swipe right (prev)
      prevSlide()
    }
  }

  // Dots indicator helper
  const dotsCount = maxIndex + 1

  return (
    <div className="relative w-full px-4 md:px-12 select-none group">
      {/* Outer Slider Container */}
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
          }}
        >
          {worksData.map((work, idx) => (
            <div 
              key={idx} 
              className={`${
                isMobile ? 'min-w-full px-2' : 'min-w-[33.333%] px-3'
              } box-border`}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left">
                  <h4 className="font-outfit font-semibold text-lg text-gray-900 leading-tight">
                    {work.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {work.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* Previous Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white md:bg-brand-green text-brand-green md:text-white rounded-full flex items-center justify-center shadow-md border border-gray-100 md:border-none hover:bg-green-50 md:hover:bg-brand-green-hover transition-colors duration-200 cursor-pointer z-10"
        aria-label="Previous Slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2.5" 
          stroke="currentColor" 
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-10 h-10 md:w-12 md:h-12 bg-white md:bg-brand-green text-brand-green md:text-white rounded-full flex items-center justify-center shadow-md border border-gray-100 md:border-none hover:bg-green-50 md:hover:bg-brand-green-hover transition-colors duration-200 cursor-pointer z-10"
        aria-label="Next Slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2.5" 
          stroke="currentColor" 
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {Array.from({ length: dotsCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx 
                ? 'w-6 bg-brand-green' 
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
