import React, { useEffect, useState } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === totalSlides) {
          return 1;
        } else {
          return prevSlide + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative overflow-hidden">
      <div className="carousel-inner flex transition-transform duration-1000" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
        <div id="slide1" className="carousel-item w-full h-72 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="slide2" className="carousel-item w-full h-72 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1640160186315-838b53fcabc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="slide3" className="carousel-item w-full h-72 flex-shrink-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="slide4" className="carousel-item w-full h-72 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1644363832001-0876e81f37a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button className="btn btn-circle" onClick={() => setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1)}>❮</button>
        <button className="btn btn-circle" onClick={() => setCurrentSlide(currentSlide === totalSlides ? 1 : currentSlide + 1)}>❯</button>
      </div>
    </div>
  );
};

export default BannerSlider;
