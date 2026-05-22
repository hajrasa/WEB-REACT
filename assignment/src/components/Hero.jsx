import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showcaseData = [
    {
      id: "panel-01",
      heading: "Empowering Next-Gen Devs",
      desc: "Step into an open-source workspace built for efficiency. Unleash seamless workflows with tailored application suites and integrated toolings.",
      ctaLabel: "Explore Features",
      mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "panel-02",
      heading: "Engineered for Performance",
      desc: "Say goodbye to traditional development bottlenecks. Experience blistering speeds optimized for complex environments and lightweight multitasking.",
      ctaLabel: "Read Documentation",
      mediaUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "panel-03",
      heading: "Bridging Creative Spaces",
      desc: "Connect your workspace directly with robust, beautiful software design patterns. Crafted meticulously for developers who demand clean architecture.",
      ctaLabel: "Get Started Free",
      mediaUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseData.length);
    }, 6000); // Slightly adjusted timing to feel different

    return () => clearInterval(slideInterval);
  }, [showcaseData.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseData.length) % showcaseData.length);
  };

  return (
    <div 
      className="w-100 vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{ 
        backgroundColor: '#0f172a', 
        color: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Decorative Subtle Background Gradients */}
      <div 
        className="position-absolute rounded-circle opacity-25 blurs"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #0d6efd 0%, transparent 70%)',
          top: '-10%',
          right: '5%',
          filter: 'blur(60px)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 5 }}>
        <div className="row align-items-center gy-5">
          
          {/* Left Text Column */}
          <div className="col-lg-6 text-start">
            <div className="d-inline-flex align-items-center gap-2 border border-secondary border-opacity-20 bg-dark bg-opacity-20 px-3 py-1 rounded-pill mb-4">
              <span className="spinner-grow spinner-grow-sm text-primary" role="status" />
              <small className="text-secondary tracking-wider fw-semibold text-uppercase" style={{ fontSize: '0.75rem' }}>
                System Live • Panel {activeIndex + 1}
              </small>
            </div>

            <h1 className="display-4 fw-extrabold mb-3 text-white tracking-tight lh-1">
              {showcaseData[activeIndex].heading}
            </h1>
            
            <p className="text-secondary fs-5 mb-5 pe-lg-4" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              {showcaseData[activeIndex].desc}
            </p>
            
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-primary btn-lg px-4 py-3 rounded-3 fw-bold shadow-sm border-0">
                {showcaseData[activeIndex].ctaLabel}
              </button>
              
              {/* Manual Utility Nav toggles */}
              <div className="d-flex gap-2 ms-2">
                <button onClick={handlePrev} className="btn btn-outline-secondary border-opacity-20 text-white rounded-3 px-3 py-2">
                  ←
                </button>
                <button onClick={handleNext} className="btn btn-outline-secondary border-opacity-20 text-white rounded-3 px-3 py-2">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card Column */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div 
              className="position-relative p-2 rounded-4 shadow-2xl w-100"
              style={{ 
                maxWidth: '520px', 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div 
                className="rounded-3 overflow-hidden position-relative"
                style={{ height: '380px' }}
              >
                <img 
                  src={showcaseData[activeIndex].mediaUrl} 
                  alt="Dashboard preview" 
                  className="w-100 h-100 object-fit-cover"
                  style={{
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-dark opacity-10" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Active Bars */}
        <div className="row mt-5 pt-4">
          <div className="col-12 d-flex justify-content-start gap-3">
            {showcaseData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  height: '4px',
                  width: idx === activeIndex ? '60px' : '30px',
                  backgroundColor: idx === activeIndex ? '#0d6efd' : 'rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="rounded-pill"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;