'use client';

import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Family-Owned',
      description: '30+ years of trusted family business in Connecticut',
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Schluter-certified installations and premium finishes',
    },
    {
      title: 'Personalized Service',
      description: 'Tailored solutions for your unique bathroom vision',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crafting Bathrooms
              <br />
              <span className="text-gray-600">Since 1993</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At ADM Solutions, we transform ordinary bathrooms into extraordinary
              spaces. Our family-owned business brings three decades of expertise
              in high-end bathroom remodeling, combining traditional craftsmanship
              with modern innovation.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/images/projects/others/others-1.png"
                alt="ADM Solutions team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold text-gray-900">30+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 