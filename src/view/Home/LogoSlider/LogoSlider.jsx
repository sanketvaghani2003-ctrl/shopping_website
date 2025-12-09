import React from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  return (
    <section className="logo-brand">
      <div className="brand-logo-slider">
        <div className="container">
          <div className="logo-slider-content">
            <div className="logo-slider">
              <div className="logo-track">
                {/* Repeat logos for infinite effect */}
                <img src="/logos/logoslider-1.png" className='w-100 img-fulid' alt="Chanel" />
                <img src="/logos/logoslider-2.png" className='w-100 img-fulid' alt="Louis Vuitton" />
                <img src="/logos/logoslider-3.png" className='w-100 img-fulid' alt="Prada" />
                <img src="/logos/logoslider-4.png" className='w-100 img-fulid' alt="Calvin Klein" />
                <img src="/logos/logoslider-5.png" className='w-100 img-fulid' alt="Denim" />

                {/* duplicate for seamless loop */}
                <img src="/logos/logoslider-1.png" className='w-100 img-fulid' alt="Chanel" />
                <img src="/logos/logoslider-2.png" className='w-100 img-fulid' alt="Louis Vuitton" />
                <img src="/logos/logoslider-3.png" className='w-100 img-fulid' alt="Prada" />
                <img src="/logos/logoslider-4.png" className='w-100 img-fulid' alt="Calvin Klein" />
                <img src="/logos/logoslider-5.png" className='w-100 img-fulid' alt="Denim" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default LogoSlider;
