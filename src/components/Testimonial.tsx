
import React from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
};

const Testimonial = ({ name, role, content, rating, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-playfair font-bold text-lg text-elegance-navy">{name}</h3>
          <p className="text-elegance-purple text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-elegance-pink" : "text-elegance-purple/30"}`}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-elegance-navy/80 italic font-inter">{content}</p>
    </div>
  );
};

export default Testimonial;
