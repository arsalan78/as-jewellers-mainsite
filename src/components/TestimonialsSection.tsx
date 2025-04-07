
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Star } from 'lucide-react';
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
    content: "The craftsmanship is exquisite, and the attention to detail is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Robert Chen",
    content: "My wife was moved to tears by the anniversary gift from A.S Jewellers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sophia Rodriguez",
    content: "A.S Jewellers stands out for their exceptional quality and creative designs.",
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
            Testimonials
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
                    <SimpleTestimonial
                      name={testimonial.name}
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
              <SimpleTestimonial
                key={index}
                name={testimonial.name}
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

// Simplified testimonial component
const SimpleTestimonial = ({ name, content, rating, image }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-elegance-pink" : "text-elegance-purple/30"}`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        <h3 className="font-playfair font-bold text-sm text-elegance-navy">{name}</h3>
        <p className="text-elegance-navy/80 text-sm font-inter italic">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
