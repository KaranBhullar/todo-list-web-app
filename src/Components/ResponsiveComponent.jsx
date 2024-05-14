import React from 'react';

function ResponsiveComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        My Responsive React App
      </h1>
      <p className="text-base sm:text-lg md:text-xl">
        This app looks great on all screen sizes!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Your content cards or components here */}
      </div>
    </div>
  );
}

export default ResponsiveComponent;
