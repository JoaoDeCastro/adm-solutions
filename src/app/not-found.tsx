import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 