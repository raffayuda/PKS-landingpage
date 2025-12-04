import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Heart, TrendingUp, Leaf, HandHeart, Building2 } from 'lucide-react';
import { programUnggulan } from '../data/mockData';

const iconMap = {
  GraduationCap,
  Heart,
  TrendingUp,
  Leaf,
  HandHeart,
  Building2
};

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Program Unggulan
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Aksi nyata untuk kesejahteraan masyarakat Dramaga
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programUnggulan.map((program, index) => {
            const Icon = iconMap[program.icon];
            return (
              <Card
                key={index}
                className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
