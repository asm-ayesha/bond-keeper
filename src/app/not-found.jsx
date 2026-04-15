import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-base-200 px-4">

            <h1 className="text-7xl font-bold text-error">404</h1>

            <h2 className="text-2xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <Link href="/" className="btn btn-primary mt-6">
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFoundPage;