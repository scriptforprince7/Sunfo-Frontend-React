import React from "react";

function Map() {
  return (
    <>
      <section className="section section-padding">
        <div className="section-container small">
          <div className="block block-contact-map">
            <div className="block-widget-wrap">
              <iframe
                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
                aria-label="London Eye, London, United Kingdom"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Map;
