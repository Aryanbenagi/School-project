
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Crown, 
  Phone, 
  ArrowRight,
  Clock,
  MapPin,
  Award,
  Star,
  Target
} from "lucide-react";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Excellence in Education";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    { 
      title: "About Our School", 
      url: createPageUrl("AboutUs"), 
      icon: BookOpen,
      description: "Discover our rich history and educational philosophy"
    },
    { 
      title: "Our Faculty", 
      url: createPageUrl("Teachers"), 
      icon: Users,
      description: "Meet our experienced and dedicated teachers"
    },
    { 
      title: "Leadership", 
      url: createPageUrl("PrincipalTrustees"), 
      icon: Crown,
      description: "Principal and Board of Trustees"
    },
    { 
      title: "Contact Us", 
      url: createPageUrl("Contact"), 
      icon: Phone,
      description: "Get in touch for admissions and inquiries"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Top-tier education in Arts, Commerce & Science",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Qualified teachers with years of experience",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Star,
      title: "Character Building",
      description: "Holistic development with strong values",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Future Ready",
      description: "Preparing students for tomorrow's challenges",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, -20],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-8 mb-8">
              {/* School Logo */}
              <div className="w-32 h-32 bg-white rounded-full p-2 glow-effect">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/d5c831056_ChatGPTImageSep12202512_32_39PM.png" 
                  alt="School Logo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Padmashri Ramsing Bhanawat Photo */}
              <div className="w-32 h-32 bg-white rounded-full p-2 glow-effect">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/2b0536f48_image.png" 
                  alt="Padmashri Ramsing Bhanawat" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="metallic-text">Padmashri Ramsing Bhanawat</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-6">
              High School & Jr. College
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Arts, Commerce and Science • Solapur
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-light text-blue-300 mb-4">
              {typedText}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-400"
              >
                |
              </motion.span>
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              "Nurturing minds, building character, and shaping the leaders of tomorrow 
              through quality education and holistic development"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="steel-blue-gradient hover:scale-105 transition-all duration-300 glow-hover px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("AboutUs")}>
                Explore Our School
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("Contact")}>
                Contact Admissions
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold metallic-text mb-6">
              Discover Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore what makes our institution a beacon of educational excellence and character development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={link.url} className="block group">
                  <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-500 glow-hover animated-border">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 steel-blue-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:glow-effect"
                      >
                        <link.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {link.description}
                      </p>
                      <ArrowRight className="w-5 h-5 text-blue-400 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Padmashri Ramsing Bhanawat Biography Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold metallic-text mb-6">
              पद्मश्री रामसिंग भानावत जी
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              समाज सेवक, स्वतंत्रता सेनानी और शिक्षा के प्रणेता
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Biography Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="metallic-gradient border-gray-600 glow-effect">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-4 text-justify" style={{ fontFamily: 'Noto Sans Devanagari, Inter, sans-serif' }}>
                    <p>
                      पद्मश्री रामसिंग भानावतजी का जन्म दिनांक १५ अगस्त १९०६, को फुलउमरी तालुका मानोरा, जि. वाशिम (महाराष्ट्र) में हुआ. वे एक सच्चे समाज सेवक थे. भारत समाज सेवक (Servents of India Society) के संस्थापक दिवंगत गोपाल कृष्ण गोखले (Gopal Krishna Gokhale) द्वारा स्थापित समाज सेवक संस्था के आजीवन सदस्य बनकर उन्होंने सत्ता, संपती और किर्ती निरपेक्ष तत्त्वों का कठोरता पूर्वक पालन करते हुए समाज की सेवा की.
                    </p>
                    <p>
                      उनकी शिक्षा पांचवी तक ही हो पाई थी और उन्होंने अल्प आयु में जमींनदारो के विरुद्ध किसान आन्दोलन, स्वाधीनता संग्राम और समाज सेवा कार्य में स्वंय को झोक दिया. वे विदर्भ कुल सेवा संस्था, भारतीय आदिम जाती सवाल संघ और अखिल भारतीय बंजारा सेवा संघ (All India Banjara Se Sangh) से जुड़े थे.
                    </p>
                    <p>
                      उन्होंने पुरे भारत में तथा यूरोप के १३ देशों में भ्रमण कर बंजारा तथा रोमा जिप्सियों (Roma Gypsy) को संघटित करके समाज की करीब ७५ साल सेवा की. उनके सामाजिक कार्य के लिए 'दलित मित्र' (Dalit Mitra) एवं 'पद्मश्री' (Padmashree) पुरस्कार देकर सम्मानित किया गया.
                    </p>
                    <p>
                      विदर्भ में किसान आन्दोलन के समय में वे आचार्य दादा धर्माधिकारी और आचार्य विनोबा भावेजी से जुड़े थे. महाराष्ट्र के भूतपूर्व मुख्यमंत्री दिवंगत वसंतरावजी नाईक (Vasantraoji Naik) तथा दिवंगत सुधाकररावजी नाईक उनका अत्यंत आदर करते थे.
                    </p>
                    <p>
                      उनकी समाज के प्रति अपर श्रध्दा और निष्ठा थी. दिवंगत रणजीत नाईक (Ranjeet Naik), कर्नाटक के भूतपूर्व मंत्री दिवंगत के.टी. राठोड़ और सोलापुर के आदरणीय चंद्राम चव्हाण गुरूजी उनके नेतृत्व में समाजकार्य करने में खुद को धन्य एवं भाग्यशाली समजते थे.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Award Ceremony Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="metallic-gradient border-gray-600 glow-effect overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c3c39c4eb1c1d7b226285b/f624931e5_image.png"
                      alt="पद्मश्री पुरस्कार समारोह - भारत के महामहिम राष्ट्रपति द्वारा पुरस्कार प्राप्त करते हुए श्री. रामसिंगजी भानावत"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6 bg-black/40">
                    <p className="text-center text-orange-300 font-semibold text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, Inter, sans-serif' }}>
                      भारत के महामहिम राष्ट्रपति डॉ. आर. व्यंकटरमण द्वारा पद्मश्री पुरस्कार प्राप्त करते हुए श्री. रामसिंगजी भानावत
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8"
              >
                <Card className="steel-blue-gradient glow-hover">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Legacy of Service
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                      <div>
                        <div className="text-3xl font-bold">75+</div>
                        <div className="text-sm text-blue-100">वर्ष सेवा</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">13</div>
                        <div className="text-sm text-blue-100">यूरोपीय देश</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">2</div>
                        <div className="text-sm text-blue-100">राष्ट्रीय पुरस्कार</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold metallic-text mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference that quality education and dedicated faculty make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 glow-hover`}
                >
                  <highlight.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Information */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="metallic-gradient border-gray-600 glow-effect">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Clock className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">School Timings</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Monday - Saturday</span>
                      <span className="text-blue-400 font-bold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-red-400 font-bold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="metallic-gradient border-gray-600 glow-effect">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <MapPin className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">Our Location</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Jagruti Vidya Mandir Jr. College</strong><br />
                      Vasantrao Naik Nagar, Vijapur Rd,<br />
                      near Jagruti School, Solapur,<br />
                      Maharashtra 413003
                    </p>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-lg font-semibold text-blue-400">07947417946</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full mt-6 steel-blue-gradient hover:scale-105 transition-all duration-300"
                  >
                    <Link to={createPageUrl("Contact")}>
                      Get Directions
                      <MapPin className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Shape Your Future With Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Join our community of learners and experience education that goes beyond textbooks. 
            Build character, develop skills, and prepare for a successful future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("AboutUs")}>
                Learn More About Us
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-800 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("Contact")}>
                Contact Admissions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="steel-blue-gradient hover:scale-105 transition-all duration-300 glow-hover px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("Admission")}>
                Admissions Open
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
