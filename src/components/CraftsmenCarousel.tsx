
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type CraftsmanProps = {
  name: string;
  specialty: string;
  experience: string;
  image: string;
};

const craftsmen: CraftsmanProps[] = [
  {
    name: "Michael Chen",
    specialty: "Master Goldsmith",
    experience: "25 years",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sophia Rodriguez",
    specialty: "Diamond Setter",
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    specialty: "Silver Artisan",
    experience: "22 years",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Emma Johnson",
    specialty: "Gemstone Expert",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "Raj Patel",
    specialty: "Design Director",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1824&auto=format&fit=crop"
  }
];

const CraftsmenCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {craftsmen.map((craftsman, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={craftsman.image} 
                    alt={craftsman.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-xl font-semibold">{craftsman.name}</h3>
                  <p className="text-trust-blue font-medium">{craftsman.specialty}</p>
                  <p className="text-trust-slate text-sm">{craftsman.experience} experience</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 bg-trust-blue/10 text-trust-blue hover:bg-trust-blue hover:text-white" />
          <CarouselNext className="relative static ml-2 bg-trust-blue/10 text-trust-blue hover:bg-trust-blue hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default CraftsmenCarousel;
