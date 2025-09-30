import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Heart,
  Star,
  Globe,
  Lightbulb,
  Shield
} from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Pursuing the highest standards in education and character development",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building character with honesty, ethics, and moral values",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Fostering collaboration, respect, and inclusivity",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern methods while preserving traditional wisdom",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Discipline",
      description: "Maintaining order, focus, and dedication to learning",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Preparing students for success in an interconnected world",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const streams = [
    {
      title: "Arts Stream",
      subjects: ["History", "Geography", "Political Science", "Economics", "Literature", "Psychology"],
      icon: BookOpen,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Commerce Stream", 
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Computer Applications"],
      icon: Globe,
      gradient: "from-blue-600 to-green-600"
    },
    {
      title: "Science Stream",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
      icon: Star,
      gradient: "from-green-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold metallic-text mb-6">
              About Our School
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Discover the legacy of excellence, innovation, and character development 
              that defines our educational journey
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* School Story */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold metallic-text mb-8">Our Legacy</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Padmashri Ramsing Bhanawat High School & Jr. College stands as a beacon 
                  of educational excellence in Solapur, Maharashtra. Located within the 
                  esteemed Jagruti Vidya Mandir Jr. College campus, our institution has 
                  been committed to nurturing young minds and shaping future leaders.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Named after the distinguished Padmashri Ramsing Bhanawat, our school 
                  embodies values of excellence, integrity, and service to society. We 
                  have built a reputation for academic achievement while preserving 
                  cultural heritage and moral values.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Our comprehensive curriculum across Arts, Commerce, and Science streams 
                  ensures every student finds their path to success, whether in higher 
                  education, professional careers, or entrepreneurial ventures.
                </motion.p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="metallic-gradient border-gray-600 glow-effect overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
                    alt="School Campus"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Our Campus</h3>
                    <p className="text-gray-300">
                      Modern facilities combined with a nurturing environment 
                      for holistic student development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision and Mission */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold metallic-text mb-6">Vision & Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our guiding principles that drive excellence in education and character development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full metallic-gradient border-gray-600 glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                    <span className="text-white">Our Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To be a leading educational institution that empowers students with 
                    knowledge, skills, and values necessary to become responsible global 
                    citizens and contribute meaningfully to society.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-300 mb-3">Key Aspirations:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Academic excellence across all disciplines</li>
                      <li>• Character development and moral values</li>
                      <li>• Innovation in teaching and learning</li>
                      <li>• Preparing future leaders and thinkers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full metallic-gradient border-gray-600 glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center"
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>
                    <span className="text-white">Our Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To provide quality education in Arts, Commerce, and Science while 
                    fostering critical thinking, creativity, and ethical values in a 
                    supportive and inclusive learning environment.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-3">Our Commitment:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Personalized attention to every student</li>
                      <li>• Modern teaching methodologies</li>
                      <li>• Holistic development opportunities</li>
                      <li>• Strong community partnerships</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold metallic-text mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental principles that guide our educational philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full metallic-gradient border-gray-600 hover:border-blue-500 transition-all duration-500 glow-hover animated-border text-center">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Academic Streams */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold metallic-text mb-6">Academic Excellence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive education across multiple disciplines for diverse career paths
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full bg-gradient-to-br ${stream.gradient} border-gray-600 glow-hover overflow-hidden`}>
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                    >
                      <stream.icon className="w-9 h-9 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl text-white">{stream.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-white/90 mb-4">Key Subjects:</h4>
                    <div className="space-y-2">
                      {stream.subjects.map((subject, idx) => (
                        <motion.div
                          key={subject}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3 text-white/80 bg-white/10 p-2 rounded"
                        >
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span>{subject}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 text-center"
        >
          <Card className="steel-blue-gradient glow-effect">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Legacy of Excellence
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Become part of our educational community where tradition meets innovation, 
                and every student is empowered to achieve greatness.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:07947417946"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300"
                >
                  Call: 07947417946
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:prbschool123@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition-all duration-300"
                >
                  Email: prbschool123@gmail.com
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}