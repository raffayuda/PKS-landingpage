import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import { heroData } from '../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Award size={16} />
              <span>Partai Keadilan Sejahtera</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {heroData.title}
              <span className="block text-orange-600 mt-2">{heroData.subtitle}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {heroData.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Gabung Relawan
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Lihat Program
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Anggota Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Tahun Mengabdi</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Decorative Cards */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-2xl shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Bersama Rakyat</div>
                    <div className="text-sm text-gray-500">Untuk Dramaga</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl"></div>
              </div>

              <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-2xl shadow-2xl p-6 transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Target className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Visi Jelas</div>
                    <div className="text-sm text-gray-500">Aksi Nyata</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
