import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const categories = ['Religius', 'Amanah', 'Profesional', 'Kreatif', 'Peduli'];
  const slides = [
    {
      title: 'Life at the Baltimore',
      desc: 'Shoot with Sony a6000',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Sunset over hill',
      desc: 'Shoot with Sony a6000',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'City by the sea',
      desc: 'Shoot with Sony a6000',
      img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop'
    }
  ];
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 w-full pb-16">
        <div className="space-y-24">
          {/* Title Section */}
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-extralight text-white leading-tight tracking-tight">
              PKS DPC Dramaga
              <br />
              Bersih, Peduli
              <br />
              dan Profesional
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="space-y-10">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  className="px-6 py-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/20 text-sm font-light hover:bg-black/50 hover:border-white/30 transition-all"
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-6">
              <div className="flex items-center gap-5 text-white flex-shrink-0">
                <span className="text-sm font-light tracking-wider">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-80 max-w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-px bg-white rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-light tracking-wider">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              <div className="md:flex-1 flex justify-start md:justify-end">
                <div
                  ref={scrollRef}
                  onMouseDown={(e) => { setDragging(true); setDragStartX(e.pageX - (scrollRef.current?.offsetLeft || 0)); setDragStartScroll(scrollRef.current?.scrollLeft || 0); }}
                  onMouseLeave={() => setDragging(false)}
                  onMouseUp={() => setDragging(false)}
                  onMouseMove={(e) => {
                    if (!dragging || !scrollRef.current) return; const x = e.pageX - (scrollRef.current.offsetLeft || 0); const walk = (x - dragStartX); scrollRef.current.scrollLeft = dragStartScroll - walk;
                  }}
                  onTouchStart={(e) => { const touch = e.touches[0]; setDragging(true); setDragStartX(touch.pageX - (scrollRef.current?.offsetLeft || 0)); setDragStartScroll(scrollRef.current?.scrollLeft || 0); }}
                  onTouchMove={(e) => { if (!dragging || !scrollRef.current) return; const touch = e.touches[0]; const x = touch.pageX - (scrollRef.current.offsetLeft || 0); const walk = (x - dragStartX); scrollRef.current.scrollLeft = dragStartScroll - walk; }}
                  onTouchEnd={() => setDragging(false)}
                  className={`flex gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                >
                  {slides.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`relative flex-shrink-0 min-w-[14rem] w-56 h-32 text-left rounded-2xl overflow-hidden border snap-start ${
                        current === idx ? 'border-white/50' : 'border-white/20'
                      } transition-all hover:border-white/40`}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-lg overflow-hidden border border-white/30 bg-white/10 backdrop-blur-sm">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right">
                        <div className="text-white font-medium text-sm leading-tight mb-1">
                          {s.title}
                        </div>
                        <div className="text-white/50 text-xs font-light">
                          {s.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
