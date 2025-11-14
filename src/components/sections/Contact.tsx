"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		projectType: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			const response = await fetch(
				"https://formspree.io/f/YOUR_FORM_ID",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setIsSubmitted(true);
				setFormData({
					name: "",
					phone: "",
					projectType: "",
					message: "",
				});
			} else {
				throw new Error("Failed to submit form");
			}
		} catch (err) {
			setError(
				"Failed to submit form. Please try again or contact us directly."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section id="contact" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Get in Touch
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Ready to transform your bathroom? Contact us today for a
						free quote.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-gray-50 rounded-lg p-8"
					>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Contact Information
								</h3>
								<div className="space-y-4">
									<p className="flex items-center text-gray-600">
										<svg
											className="w-6 h-6 mr-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										Bethel, CT
									</p>
									<div className="flex flex-col space-y-2">
										<a
											href="tel:+1YOUR_PHONE"
											className="flex items-center text-gray-600 hover:text-gray-900"
										>
											<svg
												className="w-6 h-6 mr-3"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											Call: (203) 628 - 4618
										</a>
										<a
											href="sms:+12036284618"
											className="flex items-center text-gray-600 hover:text-gray-900"
										>
											<svg
												className="w-6 h-6 mr-3"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
												/>
											</svg>
											Text: (203) 628 - 4618
										</a>
									</div>
									<a
										href="mailto:admsolutionsusa@gmail.com"
										className="flex items-center text-gray-600 hover:text-gray-900"
									>
										<svg
											className="w-6 h-6 mr-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										admsolutionsusa@gmail.com
									</a>
								</div>
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


							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Connect With Us
								</h3>
								<div className="flex space-x-4">
									<a
										href="https://instagram.com/admsolutionsusa"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-200"
										title="Follow us on Instagram"
									>
										<svg
											className="w-6 h-6"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</a>
									<a
										href="https://instagram.com/direct/t/admsolutionsusa"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-200"
										title="Send us a DM on Instagram"
									>
										<svg
											className="w-6 h-6"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="bg-gray-50 rounded-lg p-8 text-center">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Send Us a Message
							</h3>
							<p className="text-gray-600 mb-6">
								Click the button below to send us an email
								directly.
							</p>
							<a
								href="mailto:admsolutionsusa@gmail.com?subject=Bathroom%20Remodel%20Inquiry&body=Hello%2C%20I%20am%20interested%20in%20your%20bathroom%20remodeling%20services."
								className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Send Email
							</a>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
};

export default Contact;
