
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crown, Star, Users, MapPin, Phone, Mail, Heart, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Testimonial from '@/components/Testimonial';
import CraftsmenCarousel from '@/components/CraftsmenCarousel';

const Index = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate random row spans for masonry layout
  useEffect(() => {
    if (!isMobile) {
      const masonryItems = document.querySelectorAll('.masonry-item');
      masonryItems.forEach((item) => {
        // Further reduced row span to make images less tall
        const randomSpan = Math.floor(Math.random() * 6) + 10; // random number between 10-16, further reduced height
        (item as HTMLElement).style.setProperty('--row-span', randomSpan.toString());
      });
    }
  }, [isMobile]);

  // Collection items data with subcategories
  const collections = [
    {
      id: 1,
      title: "Wedding Collection",
      description: "Timeless pieces for your special day",
      imageUrl: "https://images.unsplash.com/photo-1535632066274-1f274baa80cb?q=80&w=2340&auto=format&fit=crop",
      category: "Bridal",
      subcategories: ["Engagement Rings", "Wedding Bands", "Bridal Sets"]
    },
    {
      id: 2,
      title: "Royal Necklaces",
      description: "Statement pieces fit for royalty",
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2187&auto=format&fit=crop",
      category: "Necklaces",
      subcategories: ["Chokers", "Pendants", "Chains", "Mangalsutras"]
    },
    {
      id: 3,
      title: "Signature Rings",
      description: "Elegant designs for every occasion",
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2340&auto=format&fit=crop",
      category: "Rings",
      subcategories: ["Solitaire", "Cocktail", "Eternity", "Statement"]
    },
    {
      id: 4,
      title: "Modern Earrings",
      description: "Contemporary styles with classic craftsmanship",
      imageUrl: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=2187&auto=format&fit=crop",
      category: "Earrings",
      subcategories: ["Studs", "Hoops", "Drops", "Chandeliers"]
    },
    {
      id: 5,
      title: "Artisan Bracelets",
      description: "Handcrafted with precision and care",
      imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2340&auto=format&fit=crop",
      category: "Bracelets",
      subcategories: ["Tennis", "Bangles", "Cuffs", "Charm"]
    },
    {
      id: 6,
      title: "Heirloom Pendants",
      description: "Treasures to pass down through generations",
      imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2340&auto=format&fit=crop",
      category: "Pendants",
      subcategories: ["Religious", "Lockets", "Gemstone", "Pearl"]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Bride",
      content: "The engagement ring I purchased exceeded all my expectations. The craftsmanship is exquisite, and the attention to detail is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Robert Chen",
      role: "Anniversary Gift",
      content: "I wanted something special for our 25th anniversary, and A.S Jewellers delivered perfection. My wife was moved to tears.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sophia Rodriguez",
      role: "Collector",
      content: "As someone who appreciates fine jewelry, I can say that A.S Jewellers stands out for their exceptional quality and creative designs.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white">
      {/* Header with hamburger menu for mobile */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-elegance-pink/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-inter">
              <a href="#collections" className="text-elegance-navy hover:text-elegance-pink transition-colors">Collections</a>
              <a href="#about" className="text-elegance-navy hover:text-elegance-pink transition-colors">About</a>
              <a href="#contact" className="text-elegance-navy hover:text-elegance-pink transition-colors">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <button onClick={toggleMobileMenu} className="text-elegance-navy p-1">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div className={`mobile-menu ${mobileMenuOpen ? 'visible' : 'hidden'}`}>
          <button onClick={toggleMobileMenu} className="absolute top-5 right-5 text-white">
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6">
            <a href="#collections" className="mobile-menu-link" onClick={toggleMobileMenu}>Collections</a>
            <a href="#about" className="mobile-menu-link" onClick={toggleMobileMenu}>About</a>
            <a href="#contact" className="mobile-menu-link" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section with Clean White Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="container relative z-10 mx-auto text-center px-4 pt-16 pb-10">
          <span className="inline-block mb-6 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
            Exclusive Jewelry Crafting
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-elegance-navy mb-6 leading-tight">
            Crafting Timeless
            <span className="bg-gradient-to-r from-elegance-pink to-elegance-purple bg-clip-text text-transparent animate-shine">
              {" "}Elegance
            </span>
          </h2>
          <p className="font-inter text-elegance-navy/90 max-w-2xl mx-auto mb-8 text-lg">
            Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
          </p>
          <a href="#collections">
            <motion.button 
              className="bg-elegance-pink text-white font-inter px-8 py-3 rounded-full hover:bg-elegance-purple transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collections
            </motion.button>
          </a>
        </div>
      </section>

      {/* Features - More Compact */}
      <section className="compact-section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
              Why Choose Us
            </span>
            <h2 className="font-playfair text-3xl font-bold mb-3 text-elegance-navy">Our Expertise</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              With decades of experience in gold and silver craftsmanship, we deliver unparalleled quality and service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div 
              className="text-center p-4 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <ShieldCheck className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Custom Designs</h3>
              <p className="font-inter text-elegance-navy/70 text-sm">Bring your vision to life with our bespoke jewelry service</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Premium Quality</h3>
              <p className="font-inter text-elegance-navy/70 text-sm">Finest materials and exceptional craftsmanship</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1 text-elegance-navy">Heritage</h3>
              <p className="font-inter text-elegance-navy/70 text-sm">Years of expertise in gold and silver crafting</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Craftsmen Section - More Compact */}
      <section className="compact-section bg-elegance-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
              The Team
            </span>
            <h2 className="font-playfair text-3xl font-bold text-elegance-navy mb-3">Meet Our Craftsmen</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              The skilled artisans behind every masterpiece in our collection.
            </p>
          </div>
          
          <CraftsmenCarousel />
        </div>
      </section>

      {/* Collections Section - More Compact with Improved Mobile View */}
      <section id="collections" className="compact-section">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
              Our Showcase
            </span>
            <h2 className="font-playfair text-3xl font-bold text-elegance-navy mb-3">Collections</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              Explore our carefully curated collections of handcrafted jewelry.
            </p>
          </div>
          
          {/* Mobile Optimized Carousel View */}
          {isMobile && (
            <div className="py-4">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {collections.map((item) => (
                    <CarouselItem key={item.id} className="basis-full">
                      <div className="p-1">
                        <Card className="overflow-hidden border-none shadow-lg">
                          <CardContent className="p-0 relative">
                            <div className="mobile-collection-card">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-300"
                              />
                              <div className="absolute inset-0 collection-overlay flex flex-col justify-end p-4">
                                <h3 className="text-elegance-white text-xl font-playfair font-semibold">{item.title}</h3>
                                <p className="text-elegance-white/90 text-sm mt-1">{item.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {item.subcategories.slice(0, 2).map((sub, idx) => (
                                    <span key={idx} className="inline-block px-2 py-0.5 bg-elegance-pink/30 backdrop-blur-sm text-white text-xs rounded-full">
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static h-8 w-8 mr-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
                  <CarouselNext className="relative static h-8 w-8 ml-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
                </div>
              </Carousel>
            </div>
          )}
          
          {/* Desktop Pinterest Masonry Grid View */}
          {!isMobile && (
            <div className="masonry-grid">
              {collections.map((item) => (
                <motion.div 
                  key={item.id}
                  className="masonry-item relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 collection-overlay flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-playfair font-semibold">{item.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.subcategories.map((sub, idx) => (
                        <span key={idx} className="inline-block px-3 py-1 bg-elegance-pink/30 backdrop-blur-sm text-white text-xs rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Customer Testimonials Section - Mobile Optimized */}
      <section className="compact-section bg-elegance-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
              Customer Stories
            </span>
            <h2 className="font-playfair text-3xl font-bold text-elegance-navy mb-3">What Our Clients Say</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              Don't just take our word for it — see what our customers think about their jewelry pieces.
            </p>
          </div>
          
          {/* Mobile Testimonial Carousel */}
          {isMobile && (
            <Carousel opts={{ align: "center", loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <Testimonial
                        name={testimonial.name}
                        role={testimonial.role}
                        content={testimonial.content}
                        rating={testimonial.rating}
                        image={testimonial.image}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static h-8 w-8 mr-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
                <CarouselNext className="relative static h-8 w-8 ml-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
              </div>
            </Carousel>
          )}
          
          {/* Desktop Testimonial Grid */}
          {!isMobile && (
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* About Us Section - More Compact */}
      <section id="about" className="compact-section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block mb-3 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
                Our Story
              </span>
              <h2 className="font-playfair text-3xl font-bold text-elegance-navy mb-3">About A.S Jewellers</h2>
              <p className="font-inter text-elegance-navy/80 mb-3 leading-relaxed">
                Founded with a vision to create jewelry that tells stories, A.S Jewellers has been crafting exquisite gold and silver pieces for over three decades. Each piece embodies our dedication to quality craftsmanship and timeless design.
              </p>
              <p className="font-inter text-elegance-navy/80 mb-3 leading-relaxed">
                What sets us apart is our dedication to traditional craftsmanship while embracing modern design principles. Each piece is meticulously handcrafted by our team of experienced artisans.
              </p>
              <p className="font-inter text-elegance-navy/80 leading-relaxed">
                We believe that jewelry is more than just an accessory – it's a personal statement, a family heirloom, and a timeless treasure. This philosophy guides our design process and customer service approach.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2340&auto=format&fit=crop" 
                alt="Jewelry crafting" 
                className="rounded-lg shadow-lg h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop" 
                alt="Gold workshop" 
                className="rounded-lg shadow-lg h-36 object-cover mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1609798740348-6abc47801170?q=80&w=2670&auto=format&fit=crop" 
                alt="Silver crafting" 
                className="rounded-lg shadow-lg h-36 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2340&auto=format&fit=crop" 
                alt="Finished jewelry" 
                className="rounded-lg shadow-lg h-48 object-cover -mt-12"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - More Compact with Mobile Optimization */}
      <section id="contact" className="compact-section bg-elegance-navy text-elegance-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-4 py-1 bg-elegance-pink/20 text-elegance-pink rounded-full font-inter text-sm">
              Get In Touch
            </span>
            <h2 className="font-playfair text-3xl font-bold mb-3">Contact Us</h2>
            <p className="font-inter text-elegance-white/70 max-w-2xl mx-auto">
              Have questions about our collections or custom orders? Reach out to us, and our team will be happy to assist you.
            </p>
          </div>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-3 gap-6'} max-w-4xl mx-auto`}>
            <motion.div 
              className="text-center p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1">Visit Us</h3>
              <p className="font-inter text-elegance-white/70 text-sm">123 Elegance Boulevard, Gold District, 10001</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1">Call Us</h3>
              <p className="font-inter text-elegance-white/70 text-sm">+1 (800) 123-4567</p>
              <p className="font-inter text-elegance-white/70 text-sm">Monday - Saturday: 9am - 7pm</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-8 h-8 text-elegance-pink mx-auto mb-2" />
              <h3 className="font-playfair text-lg mb-1">Email Us</h3>
              <p className="font-inter text-elegance-white/70 text-sm">info@asjewellers.com</p>
              <p className="font-inter text-elegance-white/70 text-sm">custom@asjewellers.com</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer - Reduced Height, Fixed */}
      <footer className="py-2 fixed-footer text-elegance-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2">
            <Logo size="sm" />
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Heart className="h-4 w-4" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Star className="h-4 w-4" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Crown className="h-4 w-4" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Users className="h-4 w-4" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <ShieldCheck className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="hover:text-elegance-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-elegance-pink transition-colors">Terms of Service</a>
            <p className="font-inter text-xs">© 2024 A.S Jewellers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
