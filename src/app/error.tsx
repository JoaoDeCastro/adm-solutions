"use client";

export default function Error({
	// error,
	reset,
}: {
	error?: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="text-center">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">
					Something went wrong!
				</h2>
				<p className="text-gray-600 mb-8">
					We apologize for the inconvenience. Please try again.
				</p>
				<button
					onClick={() => reset()}
					className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
