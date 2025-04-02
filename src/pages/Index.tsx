import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crown, Star, Users, MapPin, Phone, Mail, Heart } from 'lucide-react';
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
        const randomSpan = Math.floor(Math.random() * 10) + 12; // random number between 12-22, down from 15-30
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
    },
    {
      id: 7,
      title: "Diamond Sets",
      description: "Complete sets for special occasions",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2340&auto=format&fit=crop",
      category: "Sets",
      subcategories: ["Bridal Sets", "Party Wear", "Traditional", "Modern"]
    },
    {
      id: 8,
      title: "Gold Chains",
      description: "Timeless classics in pure gold",
      imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop",
      category: "Chains",
      subcategories: ["Link Chains", "Rope Chains", "Box Chains", "Snake Chains"]
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
      content: "I wanted something special for our 25th anniversary, and Elegance Jewelry delivered perfection. My wife was moved to tears.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sophia Rodriguez",
      role: "Collector",
      content: "As someone who appreciates fine jewelry, I can say that Elegance stands out for their exceptional quality and creative designs.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-elegance-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-elegance-white/80 backdrop-blur-md border-b border-elegance-pink/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8 font-inter">
            <a href="#collections" className="text-elegance-navy/80 hover:text-elegance-pink transition-colors">Collections</a>
            <a href="#about" className="text-elegance-navy/80 hover:text-elegance-pink transition-colors">About</a>
            <a href="#contact" className="text-elegance-navy/80 hover:text-elegance-pink transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2340&auto=format&fit=crop" 
            alt="Luxury jewelry" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        {/* Content overlaid on the image */}
        <div className="container relative z-10 mx-auto text-center px-4 pt-20">
          <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/20 text-white backdrop-blur-sm rounded-full font-inter text-sm">
            Premium Jewelry Crafting
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting Timeless
            <span className="bg-gradient-to-r from-elegance-pink to-elegance-purple bg-clip-text text-transparent animate-shine">
              {" "}Elegance
            </span>
          </h2>
          <p className="font-inter text-white/90 max-w-2xl mx-auto mb-8 text-lg">
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

      {/* Features */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
              Why Choose Us
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-elegance-navy">Our Expertise</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              With decades of experience in gold and silver craftsmanship, we deliver unparalleled quality and service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <ShieldCheck className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Custom Designs</h3>
              <p className="font-inter text-elegance-navy/70">Bring your vision to life with our bespoke jewelry service</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Premium Quality</h3>
              <p className="font-inter text-elegance-navy/70">Finest materials and exceptional craftsmanship</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-md border border-elegance-pink/10"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Heritage</h3>
              <p className="font-inter text-elegance-navy/70">Years of expertise in gold and silver crafting</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Craftsmen Section */}
      <section className="py-20 px-4 bg-elegance-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
              The Team
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-elegance-navy mb-6">Meet Our Craftsmen</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              The skilled artisans behind every masterpiece in our collection.
            </p>
          </div>
          
          <CraftsmenCarousel />
        </div>
      </section>

      {/* Collections Section - Pinterest Style Grid */}
      <section id="collections" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
              Our Showcase
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-elegance-navy mb-6">Collections</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              Explore our carefully curated collections of handcrafted jewelry.
            </p>
          </div>
          
          {/* Mobile Carousel View */}
          {isMobile && (
            <div className="py-8">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {collections.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden border-none shadow-lg">
                          <CardContent className="p-0 relative group">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 collection-overlay flex flex-col justify-end p-6">
                              <h3 className="text-elegance-white text-xl font-playfair font-semibold">{item.title}</h3>
                              <p className="text-elegance-white/90 text-sm mt-1">{item.description}</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {item.subcategories.map((sub, idx) => (
                                  <span key={idx} className="inline-block px-3 py-1 bg-elegance-pink/20 backdrop-blur-sm text-white text-xs rounded-full">
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static h-10 w-10 mr-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
                  <CarouselNext className="relative static h-10 w-10 ml-2 bg-elegance-pink/10 text-elegance-navy hover:bg-elegance-pink hover:text-elegance-white" />
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
      
      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-elegance-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
              Customer Stories
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-elegance-navy mb-6">What Our Clients Say</h2>
            <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto">
              Don't just take our word for it — see what our customers think about their Elegance pieces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-elegance-white to-elegance-pink/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
                Our Story
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-elegance-navy mb-6">About Elegance Jewelry</h2>
              <p className="font-inter text-elegance-navy/80 mb-6 leading-relaxed">
                Founded in 1985, Elegance Jewelry has been crafting exquisite gold and silver pieces for over three decades. Our journey began with a simple vision: to create jewelry that captures moments and preserves memories.
              </p>
              <p className="font-inter text-elegance-navy/80 mb-6 leading-relaxed">
                What sets us apart is our dedication to traditional craftsmanship while embracing modern design principles. Each piece is meticulously handcrafted by our team of experienced artisans, ensuring unparalleled quality and attention to detail.
              </p>
              <p className="font-inter text-elegance-navy/80 mb-8 leading-relaxed">
                We believe that jewelry is more than just an accessory – it's a personal statement, a family heirloom, and a timeless treasure. This philosophy guides our design process and customer service approach.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2340&auto=format&fit=crop" 
                alt="Jewelry crafting" 
                className="rounded-lg shadow-lg h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2574&auto=format&fit=crop" 
                alt="Gold workshop" 
                className="rounded-lg shadow-lg h-48 object-cover mt-16"
              />
              <img 
                src="https://images.unsplash.com/photo-1609798740348-6abc47801170?q=80&w=2670&auto=format&fit=crop" 
                alt="Silver crafting" 
                className="rounded-lg shadow-lg h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2340&auto=format&fit=crop" 
                alt="Finished jewelry" 
                className="rounded-lg shadow-lg h-64 object-cover -mt-16"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-elegance-navy text-elegance-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-elegance-pink/10 text-elegance-pink rounded-full font-inter text-sm">
              Get In Touch
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="font-inter text-elegance-white/70 max-w-2xl mx-auto">
              Have questions about our collections or custom orders? Reach out to us, and our team will be happy to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Visit Us</h3>
              <p className="font-inter text-elegance-white/70">123 Elegance Boulevard, Gold District, 10001</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Call Us</h3>
              <p className="font-inter text-elegance-white/70">+1 (800) ELEGANCE</p>
              <p className="font-inter text-elegance-white/70">Monday - Saturday: 9am - 7pm</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-elegance-navy/50 backdrop-blur border border-elegance-pink/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(223, 195, 194, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-12 h-12 text-elegance-pink mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Email Us</h3>
              <p className="font-inter text-elegance-white/70">info@elegancejewelry.com</p>
              <p className="font-inter text-elegance-white/70">custom@elegancejewelry.com</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer - Simplified */}
      <footer className="py-8 bg-elegance-navy/90 text-elegance-white/80 border-t border-elegance-pink/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <Logo />
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Star className="h-5 w-5" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Crown className="h-5 w-5" />
              </a>
              <a href="#" className="text-elegance-white hover:text-elegance-pink transition-colors">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#" className="hover:text-elegance-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-elegance-pink transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-elegance-pink transition-colors">Shipping Info</a>
            <a href="#" className="hover:text-elegance-pink transition-colors">Returns & Exchanges</a>
          </div>
          <div className="text-center">
            <p className="font-inter text-sm">© 2024 Elegance Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
