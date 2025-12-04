import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, Tag } from 'lucide-react';
import { beritaTerbaru } from '../data/mockData';

const News = () => {
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan Terbaru
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Update aktivitas dan program PKS DPC Dramaga
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaTerbaru.map((berita) => (
            <Card
              key={berita.id}
              className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center space-x-1 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      <Tag size={12} />
                      <span>{berita.category}</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{berita.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {berita.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {berita.excerpt}
                  </p>
                  <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Baca Selengkapnya →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
