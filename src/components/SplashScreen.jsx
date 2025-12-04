import React from 'react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center animate-splash-fade">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl animate-pulse delay-300"></div>
      
      {/* Logo container */}
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated logo */}
        <div className="relative">
          {/* Outer ring animation */}
          <div className="absolute inset-0 -m-4">
            <div className="w-32 h-32 border-4 border-orange-200 rounded-2xl animate-spin-slow"></div>
          </div>
          
          {/* Logo box */}
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-logo-bounce">
            <span className="text-white font-bold text-4xl">PKS</span>
          </div>
        </div>
        
        {/* Text */}
        <div className="text-center animate-fade-in-up delay-500">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PKS</h1>
          <p className="text-orange-600 font-semibold text-lg">DPC Dramaga</p>
          <div className="mt-4 flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
