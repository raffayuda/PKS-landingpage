import React from 'react';
import { Card, CardContent } from './ui/card';
import { strukturKepengurusan } from '../data/mockData';

const Profil = () => {
  return (
    <section id="profil" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Struktur Kepengurusan
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tim pengurus DPC Dramaga yang amanah dan profesional
          </p>
        </div>

        {/* Kepengurusan Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strukturKepengurusan.map((pengurus, index) => (
            <Card 
              key={index} 
              className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={pengurus.foto}
                    alt={pengurus.nama}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-sm font-semibold text-orange-600 mb-2">
                    {pengurus.jabatan}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {pengurus.nama}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profil;
