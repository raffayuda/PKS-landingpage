import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { kontakInfo } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const socialIconMap = {
  Facebook,
  Instagram,
  Twitter,
  Youtube
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama harus diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan harus diisi';
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = 'Pesan minimal 10 karakter';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      toast({
        title: "Pesan Terkirim!",
        description: `Terima kasih ${formData.nama}, pesan Anda telah kami terima. Kami akan segera menghubungi Anda.`,
      });
      
      // Reset form
      setFormData({ nama: '', email: '', pesan: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Sampaikan aspirasi dan pertanyaan Anda kepada kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-orange-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="nama"
                    name="nama"
                    type="text"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className={`${errors.nama ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.nama && (
                    <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className={`${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className={`${errors.pesan ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.pesan && (
                    <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-orange-100 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">{kontakInfo.alamat}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">{kontakInfo.telepon}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{kontakInfo.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Media Sosial</h3>
                <div className="flex space-x-4">
                  {kontakInfo.sosialMedia.map((social, index) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-orange-100 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                      >
                        <Icon className="text-orange-600 group-hover:text-white transition-colors" size={24} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
