'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Certification = () => {
  return (
    <section id="certification" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schluter System Certified
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to be certified installers of Schluter Systems, ensuring the highest quality waterproofing and tile installation for your projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/RdkTOPNAwKM"
                title="Schluter Systems Installation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-gray-100 rounded-xl p-8 shadow-lg w-full max-w-md">
              <div className="relative aspect-w-3 aspect-h-4 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/certification/certification.png"
                  alt="Schluter Systems Certification"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Schluter Systems Certified Installer
              </h3>
              <p className="text-gray-600">
                Our certification demonstrates our commitment to excellence in tile installation and waterproofing techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certification; 