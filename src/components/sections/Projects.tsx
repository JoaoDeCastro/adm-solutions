"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("featured");

	const filters = [
		{ id: "all", name: "All" },
		{ id: "bathroom", name: "Bathroom Renovation" },
		{ id: "before-after", name: "Before & After" },
		{ id: "heated-floors", name: "Heated Floors" },
		{ id: "featured", name: "Featured Projects", highlight: true },
	];

	// Placeholder projects - replace with actual project images
	const projects = [
		{
			id: 1,
			title: "Modern Elegance in Every Detail",
			category: "featured",
			image: "/images/projects/featured/featured-1.jpg",
			description: "",
		},
		{
			id: 2,
			title: "Contemporary Bathroom",
			category: "featured",
			image: "/images/projects/featured/featured-2.jpeg",
			description: "Bold blue geometric tiles",
		},
		{
			id: 3,
			title: "Modern. Warm. Functional",
			category: "featured",
			image: "/images/projects/featured/featured-3.jpg",
			description: "Every bathroom we build is designed for how you live, not just how it looks.",
		},
		{
			id: 4,
			title: "Built With Care",
			category: "featured",
			image: "/images/projects/featured/featured-4.jpg",
			description:
				"Every niche, shelf, and shower is built as if it were our own home. Because we care like that.",
		},
		{
			id: 5,
			title: "Sleek Simplicity in Marble & Matte",
			category: "featured",
			image: "/images/projects/featured/featured-5.png",
			description:
				"A modern floating vanity, glowing LED mirror, and marble textures blend effortlessly in this sharp, minimalist design.",
		},
		{
			id: 6,
			title: "Winter Light & Marble Calm",
			category: "featured",
			image: "/images/projects/featured/featured-6.png",
			description:
				"Flooded with natural light, this bathroom pairs cool gray tones and marble walls with warm minimalism and soft detail.",
		},

		// Bathroom Renovation
		{
			id: 7,
			title: "Modern Bathroom with Marble Countertop",
			category: "bathroom",
			image: "/images/projects/bath-renovation/renovation-1.jpeg",
		},
		{
			id: 8,
			title: "Modern Bathroom with Marble Countertop",
			category: "bathroom",
			image: "/images/projects/bath-renovation/renovation-2.jpg",
		},
		{
			id: 9,
			title: "Modern Bathroom with Marble Countertop",
			category: "bathroom",
			image: "/images/projects/bath-renovation/renovation-3.jpeg",
		},
		{
			id: 10,
			title: "Modern Bathroom with Marble Countertop",
			category: "bathroom",
			image: "/images/projects/bath-renovation/renovation-4.jpeg",
		},
		{
			id: 11,
			title: "Modern Bathroom with Marble Countertop",
			category: "bathroom",
			image: "/images/projects/bath-renovation/renovation-5.png",
		},

		// Before & After
		{
			id: 12,
			title: "Floor-to-Finish Transformation",
			category: "before-after",
			image: "/images/projects/before-after/before-after-1.png",
			description:
				"From raw prep work to polished elegance, this renovation highlights expert tiling and a refined freestanding tub feature.",
		},

		// Heated Floors
		{
			id: 13,
			title: "Heated Floors",
			category: "heated-floors",
			image: "/images/projects/heated-floors/heated-1.jpeg",
			description:
				"Warmth and comfort in every step, with a radiant floor heating system that transforms your space into a cozy haven.",
		},
		{
			id: 14,
			title: "Heated Floors",
			category: "heated-floors",
			image: "/images/projects/heated-floors/heated-2.jpeg",
		},
		{
			id: 15,
			title: "Heated Floors",
			category: "heated-floors",
			image: "/images/projects/heated-floors/heated-3.jpeg",
		},
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Our Projects
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore our portfolio of completed bathroom renovations
						and get inspired for your own project.
					</p>
				</motion.div>

				{/* Filters */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{filters.map((filter) => (
						<button
							key={filter.id}
							onClick={() => setActiveFilter(filter.id)}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
								activeFilter === filter.id
									? filter.highlight
										? "bg-gray-900 text-white ring-2 ring-gray-900 ring-offset-2"
										: "bg-gray-900 text-white"
									: filter.highlight
									? "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100"
									: "bg-white text-gray-600 hover:bg-gray-100"
							}`}
						>
							{filter.name}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
							>
								<div className="relative">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-0 left-0 right-0 p-6">
											<h3 className="text-xl font-semibold text-white mb-2">
												{project.title}
											</h3>
											<p className="text-gray-200">
												{project.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Projects;
