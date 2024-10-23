import React from 'react';
import '../Styles/Testimonials.css';

const testimonials = [
  {
    name: 'Emily Johnson',
    text: 'The Ylang Ylang oil has transformed my sleep! It smells amazing.',
  },
  {
    name: 'Michael Smith',
    text: 'The Rosemary oil has been fantastic for my focus and productivity!',
  },
  {
    name: 'Sophia Lee',
    text: 'I love the Lemon oil—it keeps my home smelling fresh!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
