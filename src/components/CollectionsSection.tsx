
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

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

// Subcategory item examples (images for popup)
const subcategoryItems = {
  "Engagement Rings": [
    { id: 1, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop", name: "Diamond Solitaire", description: "Classic round cut 1.0ct" },
    { id: 2, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1400&auto=format&fit=crop", name: "Emerald Halo", description: "0.8ct with diamond accent" },
    { id: 3, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1400&auto=format&fit=crop", name: "Oval Rose Gold", description: "Modern twist design" },
    { id: 4, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop", name: "Princess Cut", description: "Channel set band" },
    { id: 5, image: "https://images.unsplash.com/photo-1535632066274-1f274baa80cb?q=80&w=1400&auto=format&fit=crop", name: "Vintage Inspired", description: "Intricate filigree work" },
    { id: 6, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop", name: "Cushion Cut", description: "Double halo design" },
  ],
  "Wedding Bands": [
    { id: 1, image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1400&auto=format&fit=crop", name: "Classic Gold Band", description: "5mm comfort fit" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop", name: "Diamond Eternity", description: "Full circle brilliance" },
    { id: 3, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop", name: "Mixed Metal", description: "White and rose gold twist" },
  ]
};

const CollectionsSection = () => {
  const isMobile = useIsMobile();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Calculate random row spans for masonry layout
  useEffect(() => {
    if (!isMobile) {
      const masonryItems = document.querySelectorAll('.masonry-item');
      masonryItems.forEach((item) => {
        const randomSpan = Math.floor(Math.random() * 6) + 10;
        (item as HTMLElement).style.setProperty('--row-span', randomSpan.toString());
      });
    }
  }, [isMobile]);

  // Handle subcategory click to open dialog
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsDialogOpen(true);
  };

  return (
    <section id="collections" className="py-6 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block mb-2 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
            Our Showcase
          </span>
          <h2 className="font-playfair text-2xl font-bold text-elegance-navy mb-2">Collections</h2>
          <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto text-sm">
            Explore our carefully curated collections of handcrafted jewelry.
          </p>
        </div>
        
        {/* Mobile Grid View */}
        {isMobile && (
          <div className="grid grid-cols-2 gap-3">
            {collections.map((item) => (
              <div key={item.id} className="mb-3">
                <div className="relative overflow-hidden rounded-lg shadow-md border border-elegance-pink/20 h-44">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 collection-overlay flex flex-col justify-end p-3">
                    <h3 className="text-white text-sm font-playfair font-semibold">{item.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.subcategories.map((sub, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => handleSubcategoryClick(sub)}
                          className="inline-block px-2 py-0.5 bg-elegance-blue/30 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Desktop Pinterest Masonry Grid View */}
        {!isMobile && (
          <div className="masonry-grid">
            {collections.map((item) => (
              <motion.div 
                key={item.id}
                className="masonry-item relative overflow-hidden rounded-xl shadow-lg border border-elegance-pink/20 hover:border-elegance-blue/30 transition-colors duration-300"
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
                      <button 
                        key={idx} 
                        onClick={() => handleSubcategoryClick(sub)}
                        className="inline-block px-3 py-1 bg-elegance-blue/40 backdrop-blur-sm text-white text-xs rounded-full hover:bg-elegance-pink/60 transition-colors"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Collection Subcategory Dialog - Pinterest Style */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto border border-elegance-pink/30">
          <DialogTitle className="text-center text-elegance-navy font-playfair text-xl border-b border-elegance-blue/20 pb-2">
            {selectedSubcategory}
          </DialogTitle>
          <DialogDescription className="text-center mb-4">
            Browse our collection of {selectedSubcategory?.toLowerCase()}
          </DialogDescription>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedSubcategory && subcategoryItems[selectedSubcategory]?.map((item) => (
              <div key={item.id} className="group border border-elegance-pink/20 rounded-lg overflow-hidden hover:border-elegance-blue/30 transition-colors">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-elegance-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-elegance-pink" />
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-elegance-navy font-playfair text-sm font-medium">{item.name}</h4>
                  <p className="text-elegance-navy/70 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CollectionsSection;

