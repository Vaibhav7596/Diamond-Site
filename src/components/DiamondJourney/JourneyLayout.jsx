import React from 'react';

const JourneyLayout = ({ sidebar, children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[304px_1fr] min-h-[calc(100vh-64px)] w-full">
      {/* Sidebar Section */}
      <aside className="hidden lg:block bg-luxury-bg-sec border-r border-luxury-border">
        {sidebar}
      </aside>
      
      {/* Main Content Area */}
      <main className="bg-luxury-bg w-full">
        <div className="w-full mx-auto px-6 lg:px-12 py-6 space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default JourneyLayout;
