import * as React from "react";

function PageHeader({eyebrow, title, description, className = "",}) {
  return (
    <header className={`text-center mb-10 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <div className="w-12 h-1 bg-gray-900 rounded-full mx-auto mt-4" />
      {description && (
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-4">
          {description}
        </p>
      )}
    </header>
  );
}

export default PageHeader;