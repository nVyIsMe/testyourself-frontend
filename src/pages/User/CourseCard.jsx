import React from "react";
import { Link } from "react-router-dom";

/**
 * Generic course card used on Dashboard / CourseList pages
 * Matches Figma mock‑ups: light‑gray placeholder image, subtle border, rounded corners.
 */
const CourseCard = ({ id, title, subtitle, description }) => (
  <Link
    to={`/courses/${id}`}
    className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-sm transition"
  >
    {/* Placeholder */}
    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
      <img
        src="https://storage.googleapis.com/a1aa/image/aace060a-8668-4978-5ec8-9f1501f8ce39.jpg"
        alt="placeholder"
        className="object-contain h-20 opacity-70"
      />
    </div>

    {/* Text */}
    <div className="p-3 text-xs text-gray-700 flex flex-col flex-grow">
      <p className="font-semibold text-sm mb-0.5 text-gray-900">{title}</p>
      {subtitle && <p className="text-gray-500 mb-1">{subtitle}</p>}
      <p className="leading-tight line-clamp-3 flex-grow text-gray-700">
        {description}
      </p>
    </div>
  </Link>
);

/**
 * Need to update this page later onto the project
 */

export default CourseCard;
