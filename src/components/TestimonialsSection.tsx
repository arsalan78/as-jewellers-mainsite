
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Testimonial from '@/components/Testimonial';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block mb-2 px-4 py-1 highlight-tag rounded-full font-inter text-sm">
            Customer Stories
          </span>
          <h2 className="font-playfair text-2xl font-bold text-elegance-navy mb-2">What Our Clients Say</h2>
          <p className="font-inter text-elegance-navy/70 max-w-2xl mx-auto text-sm">
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
  );
};

export default TestimonialsSection;
