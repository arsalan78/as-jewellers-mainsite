
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-6 px-4 bg-elegance-navy text-white">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1 highlight-tag rounded-full font-inter text-sm">
            Our Expertise
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-white mb-2">
              With decades of experience in gold and silver craftsmanship, we deliver unparalleled quality and service.
            </h2>
            <p className="font-inter text-white/80 mb-2 leading-relaxed text-sm">
              Founded with a vision to create jewelry that tells stories, A.S Jewellers has been crafting exquisite gold and silver pieces for over three decades. Each piece embodies our dedication to quality craftsmanship and timeless design.
            </p>
            <p className="font-inter text-white/80 mb-2 leading-relaxed text-sm">
              What sets us apart is our dedication to traditional craftsmanship while embracing modern design principles. Each piece is meticulously handcrafted by our team of experienced artisans.
            </p>
            <p className="font-inter text-white/80 leading-relaxed text-sm">
              We believe that jewelry is more than just an accessory – it's a personal statement, a family heirloom, and a timeless treasure. This philosophy guides our design process and customer service approach.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2340&auto=format&fit=crop" 
              alt="Jewelry crafting" 
              className="rounded-lg shadow-lg h-40 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop" 
              alt="Gold workshop" 
              className="rounded-lg shadow-lg h-32 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1609798740348-6abc47801170?q=80&w=2670&auto=format&fit=crop" 
              alt="Silver crafting" 
              className="rounded-lg shadow-lg h-32 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2340&auto=format&fit=crop" 
              alt="Finished jewelry" 
              className="rounded-lg shadow-lg h-40 object-cover -mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
