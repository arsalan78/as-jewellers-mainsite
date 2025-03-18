
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
        const randomSpan = Math.floor(Math.random() * 20) + 20; // random number between 20-40
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

  return (
    <div className="bg-cream">
      {/* Header */}
      <header className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/80 border-b border-trust-blue/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8 font-inter">
            <a href="#collections" className="text-dark/80 hover:text-trust-blue transition-colors">Collections</a>
            <a href="#about" className="text-dark/80 hover:text-trust-blue transition-colors">About</a>
            <a href="#contact" className="text-dark/80 hover:text-trust-blue transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-trust-blue/10 text-trust-blue rounded-full font-inter text-sm">
            Premium Jewelry Crafting
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
            Crafting Timeless
            <span className="bg-gradient-to-r from-trust-blue to-trust-navy bg-clip-text text-transparent animate-shine">
              {" "}Elegance
            </span>
          </h2>
          <p className="font-inter text-dark/70 max-w-2xl mx-auto mb-8 text-lg">
            Where tradition meets modern design. Each piece tells a unique story, crafted with precision and passion.
          </p>
          <a href="#collections">
            <motion.button 
              className="bg-dark text-cream font-inter px-8 py-3 rounded-full hover:bg-trust-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collections
            </motion.button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="min-h-screen flex items-center py-20 bg-dark text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-trust-blue/10 text-trust-blue rounded-full font-inter text-sm">
              Why Choose Us
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="font-inter text-cream/70 max-w-2xl mx-auto">
              With decades of experience in gold and silver craftsmanship, we deliver unparalleled quality and service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <ShieldCheck className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Custom Designs</h3>
              <p className="font-inter text-cream/70">Bring your vision to life with our bespoke jewelry service</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Premium Quality</h3>
              <p className="font-inter text-cream/70">Finest materials and exceptional craftsmanship</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Heritage</h3>
              <p className="font-inter text-cream/70">Years of expertise in gold and silver crafting</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section - Pinterest Style Grid */}
      <section id="collections" className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-trust-blue/10 text-trust-blue rounded-full font-inter text-sm">
              Our Showcase
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark mb-6">Collections</h2>
            <p className="font-inter text-dark/70 max-w-2xl mx-auto">
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
                              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex flex-col justify-end p-6">
                              <div className="bg-cream/10 backdrop-blur-sm p-4 rounded-lg">
                                <h3 className="text-cream text-xl font-playfair font-semibold">{item.title}</h3>
                                <p className="text-cream/90 text-sm mt-1">{item.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {item.subcategories.map((sub, idx) => (
                                    <span key={idx} className="inline-block px-3 py-1 bg-trust-blue/20 text-trust-blue text-xs rounded-full">
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
                  <CarouselPrevious className="relative static h-10 w-10 mr-2 bg-trust-blue/10 text-trust-blue hover:bg-trust-blue hover:text-cream" />
                  <CarouselNext className="relative static h-10 w-10 ml-2 bg-trust-blue/10 text-trust-blue hover:bg-trust-blue hover:text-cream" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-cream/10 backdrop-blur-sm p-4 rounded-lg">
                      <h3 className="text-cream text-xl font-playfair font-semibold">{item.title}</h3>
                      <p className="text-cream/90 text-sm mt-1">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.subcategories.map((sub, idx) => (
                          <span key={idx} className="inline-block px-3 py-1 bg-trust-blue/20 text-trust-blue text-xs rounded-full">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-cream to-trust-blue/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1 bg-trust-blue/10 text-trust-blue rounded-full font-inter text-sm">
                Our Story
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark mb-6">About Elegance Jewelry</h2>
              <p className="font-inter text-dark/80 mb-6 leading-relaxed">
                Founded in 1985, Elegance Jewelry has been crafting exquisite gold and silver pieces for over three decades. Our journey began with a simple vision: to create jewelry that captures moments and preserves memories.
              </p>
              <p className="font-inter text-dark/80 mb-6 leading-relaxed">
                What sets us apart is our dedication to traditional craftsmanship while embracing modern design principles. Each piece is meticulously handcrafted by our team of experienced artisans, ensuring unparalleled quality and attention to detail.
              </p>
              <p className="font-inter text-dark/80 mb-8 leading-relaxed">
                We believe that jewelry is more than just an accessory – it's a personal statement, a family heirloom, and a timeless treasure. This philosophy guides our design process and customer service approach.
              </p>
              <motion.button 
                className="bg-dark text-cream font-inter px-8 py-3 rounded-full hover:bg-trust-blue transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </motion.button>
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
      <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-dark text-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-trust-blue/10 text-trust-blue rounded-full font-inter text-sm">
              Get In Touch
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="font-inter text-cream/70 max-w-2xl mx-auto">
              Have questions about our collections or custom orders? Reach out to us, and our team will be happy to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Visit Us</h3>
              <p className="font-inter text-cream/70">123 Elegance Boulevard, Gold District, 10001</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Call Us</h3>
              <p className="font-inter text-cream/70">+1 (800) ELEGANCE</p>
              <p className="font-inter text-cream/70">Monday - Saturday: 9am - 7pm</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-dark/50 backdrop-blur border border-trust-blue/20"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-12 h-12 text-trust-blue mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Email Us</h3>
              <p className="font-inter text-cream/70">info@elegancejewelry.com</p>
              <p className="font-inter text-cream/70">custom@elegancejewelry.com</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-dark/90 text-cream/80 border-t border-trust-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="font-inter mt-4 mb-4">Crafting timeless elegance since 1985</p>
              <div className="flex space-x-4">
                <a href="#" className="text-cream hover:text-trust-blue transition-colors">
                  <Heart className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream hover:text-trust-blue transition-colors">
                  <Star className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream hover:text-trust-blue transition-colors">
                  <Crown className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-semibold text-cream mb-4">Collections</h4>
              <ul className="space-y-2">
                {collections.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <a href="#" className="hover:text-trust-blue transition-colors">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-semibold text-cream mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-trust-blue transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-trust-blue transition-colors">Custom Orders</a></li>
                <li><a href="#" className="hover:text-trust-blue transition-colors">Care Guide</a></li>
                <li><a href="#contact" className="hover:text-trust-blue transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-trust-blue/10 mt-12 pt-6 text-center">
            <p className="font-inter text-sm">© 2024 Elegance Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
