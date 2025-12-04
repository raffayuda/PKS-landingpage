import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { kontakInfo } from '../data/mockData';

const socialIconMap = {
  Facebook,
  Instagram,
  Twitter,
  Youtube
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                PKS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl leading-tight">PKS</span>
                <span className="text-sm text-orange-400 font-semibold">DPC Dramaga</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Partai Keadilan Sejahtera DPC Dramaga berkomitmen untuk membangun masyarakat yang sejahtera dan berakhlak mulia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#visi-misi" className="text-gray-400 hover:text-orange-400 transition-colors">Visi & Misi</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-orange-400 transition-colors">Program</a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-orange-400 transition-colors">Berita</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">{kontakInfo.alamat}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">{kontakInfo.telepon}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">{kontakInfo.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 text-white">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {kontakInfo.sosialMedia.map((social, index) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PKS DPC Dramaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
