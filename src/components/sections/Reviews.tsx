"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
	const [currentReview, setCurrentReview] = useState(0);

	// Real customer testimonials
	const reviews = [
		{
			id: 1,
			name: "Bruce G",
			location: "Brookfield, CT",
			rating: 5,
			text: "ADM installed my walk-in closet. They did an excellent job, and in a very timely manner. It looks fantastic. I highly recommend their work (and their work ethic)!",
		},
		{
			id: 2,
			name: "Robert Sturges",
			location: "White Plains",
			rating: 5,
			text: "Great service and great quality. Attention to details I really recommend ADM Solutions",
		},
		{
			id: 3,
			name: "Christina R",
			location: "Connecticut",
			rating: 5,
			text: "When I came to Yelp for help to find someone to build my custom booth for the bay window in my kitchen, never could I have imagined I would find such reliable, neat, clean, kind, respectful and meticulous workers like the ones at ADM. I couldn't be happier with their work and am so in awe of the value for the price and how exceptionally precise and perfect they are at their skill, that I have already half a dozen other projects I am hiring them for! I even recommended and have them doing work for my parents. Truly an amazing experience and I would recommend them one hundred times over. Thank you for making the dream for my kitchen come true. Can't wait to be working with you guys again in a couple weeks on my basement crown molding!",
		},
		{
			id: 4,
			name: "Junior M",
			location: "CT",
			rating: 5,
			text: "My wife and I had Joao and the ADM Solutions team work on various projects around our home. On the outside they worked on our walkway, driveway and patio. On the inside, they remodeled our laundry room, bathroom, painted and applied flooring to our basement. I would highly recommend Joao and the ADM Solutions team. Joao is extremely responsive and completed our projects in a timely manner.",
		},
		{
			id: 5,
			name: "Ann R",
			location: "White Plains",
			rating: 5,
			text: "As a widow and a senior citizen I so appreciated their concern for my safety as well as their commitment to doing a professional job. They were a pleasure to work with and their workmanship surpassed my expectations.",
		},
		{
			id: 6,
			name: "Joyce R",
			location: "Middlebury, CT",
			rating: 5,
			text: "I've had the ADM Solutions team work on various projects throughout my property. They are just amazing. I did a full bathroom and walk-in closet renovation and I couldn't be happier with the quality of their work. My bathroom looks like it is out of a magazine. I recommend them 110%!",
		},
	];

	// Auto-rotate reviews
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentReview((prev) => (prev + 1) % reviews.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	// Render star rating
	const renderStars = (rating: number) => {
		return [...Array(5)].map((_, index) => (
			<svg
				key={index}
				className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"
					}`}
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<section id="reviews" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						What Our Clients Say
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{`Don't just take our word for it. Here's what our satisfied customers have to say about their experience with ADM Solutions.`}
					</p>
				</motion.div>

				{/* Reviews Carousel */}
				<div className="relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentReview}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="bg-white rounded-xl shadow-lg overflow-hidden p-8"
						>
							<div className="flex flex-col items-center">
								<div className="flex mb-4">
									{renderStars(reviews[currentReview].rating)}
								</div>
								<div className="text-center mb-6">
									<p className="text-gray-600 italic text-lg">
										{`"${reviews[currentReview].text}"`}
									</p>
								</div>
								<div className="text-center">
									<p className="font-semibold text-gray-900 text-lg">
										{reviews[currentReview].name}
									</p>
									<p className="text-gray-500">
										{reviews[currentReview].location}
									</p>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigation Dots */}
					<div className="flex justify-center mt-8 space-x-2">
						{reviews.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentReview(index)}
								className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentReview === index
									? "bg-gray-900"
									: "bg-gray-300"
									}`}
								aria-label={`Go to review ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<p className="text-lg text-gray-600 mb-6">
						Ready to experience the ADM Solutions difference?
					</p>
					<motion.a
						href="https://docs.google.com/forms/d/e/1FAIpQLScG7cTvwlJwmkZQnj_DKMHw4bQ7nugY8Ngd-WDpck65QA3wHw/viewform?usp=header"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						animate={{
							scale: [1, 1.05, 1],
							boxShadow: [
								"0 0 0 0 rgba(0, 0, 0, 0)",
								"0 0 0 10px rgba(0, 0, 0, 0.1)",
								"0 0 0 0 rgba(0, 0, 0, 0)",
							],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						Get Your Free Quote
					</motion.a>

					<div className="mt-6">
						<a
							href="https://g.page/r/CRppHAialBHQEAE/review"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center bg-[#4285F4] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#357ae8] transition-colors duration-200 shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
								className="w-5 h-5 mr-2"
								fill="currentColor"
							>
								<path d="M488 261.8C488 403.3 391.2 512 248 512 110.8 512 0 401.2 0 264S110.8 16 248 16c67 0 122.4 24.6 165.6 64.7l-67.1 64.3C317.6 114.6 285.8 104 248 104 154.2 104 80 180.2 80 264s74.2 160 168 160c84 0 132-47.6 137.2-113H248v-90.2h240C487.3 228.2 488 245.8 488 261.8z" />
							</svg>
							Leave a Google Review
						</a>
					</div>

					<div className="mt-4">
						<a
							href="https://www.yelp.com/biz/adm-solutions-danbury-2"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center bg-[#d32323] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#b21e1e] transition-colors duration-200 shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-5 h-5 mr-2"
								fill="currentColor"
							>
								<path d="M285.5 32.2c-12.6 0-23.3 8.7-26.1 21L233.1 176c-3.5 16.3 8.6 32.1 25.2 32.1h.3l134.7-2.4c23.5-.4 36.1-28.4 18.7-45L300.2 38.7c-4.6-4.5-10.7-6.5-16.7-6.5zm-56.2 178.5c-9.1 0-17.7 5.3-21.6 13.9L133.4 337c-7.4 15.8 2.7 34.7 20.1 37.3l126.3 19.2c16.4 2.5 30.2-12.6 26.9-28.7l-27.3-133.5c-2.2-10.7-11.8-18.6-22.8-18.6zm223.9 36.4c-4.2 0-8.4 1.1-12.3 3.4l-115.3 66.8c-14.3 8.3-17.4 27.7-6.3 39.7l84.4 93.1c10.6 11.7 29.4 9.8 37.1-3.7l62.7-109.7c8.2-14.4 0-33-16.6-36.9l-120.3-26.7c-1.1-.2-2.3-.4-3.4-.4zm-302.3 7.7c-9.8 0-19.1 5.5-23.5 14.8L12.6 369c-7.4 15.4 2.2 34.1 19.3 37.4l131.4 24.3c17 3.2 31.2-13.1 26.6-29.4l-35.4-120.7c-2.9-9.7-11.8-16.5-21.8-16.5zM262 368.4c-11.4 0-21.8 6.5-26.5 16.8l-54.8 118.3c-6.7 14.4 3.3 31.6 19.4 33.8l135.7 19.2c16.9 2.4 31.1-13.2 26.4-29.5L323 384.3c-2.9-10.1-11.8-15.9-21-15.9z" />
							</svg>
							Find Us on Yelp
						</a>
					</div>



					<div className="mt-8">
						<a
							href="https://instagram.com/admsolutionsusa"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
						>
							<svg
								className="w-6 h-6 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="font-medium">
								Follow us on Instagram
							</span>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Reviews;
