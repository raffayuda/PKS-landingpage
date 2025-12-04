import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Eye, Target } from 'lucide-react';
import { visiMisi } from '../data/mockData';

const VisiMisi = () => {
  return (
    <section id="visi-misi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk membangun Dramaga yang lebih baik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi Card */}
          <Card className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                {visiMisi.visi}
              </p>
            </CardContent>
          </Card>

          {/* Misi Card */}
          <Card className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
