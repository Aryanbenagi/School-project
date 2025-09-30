import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SendEmail } from "@/integrations/Core";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Calendar,
  Building,
  Navigation,
  MessageSquare,
  Users,
  Award
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await SendEmail({
        to: "prbschool123@gmail.com",
        subject: `Contact Form Inquiry from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `
      });

      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try calling us directly at 07947417946.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "07947417946",
      secondary: "Available during school hours",
      action: "tel:07947417946",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "prbschool123@gmail.com",
      secondary: "We respond within 24 hours",
      action: "mailto:prbschool123@gmail.com",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Campus",
      primary: "Vasantrao Naik Nagar, Vijapur Rd",
      secondary: "near Jagruti School, Solapur, MH 413003",
      action: "https://maps.google.com/?q=17.639206,75.895096",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const quickActions = [
    { icon: Users, title: "Admissions Inquiry", desc: "Information about enrollment and requirements" },
    { icon: Building, title: "Campus Visit", desc: "Schedule a tour of our facilities" },
    { icon: Award, title: "Academic Programs", desc: "Learn about our Arts, Commerce & Science streams" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')",
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
            <Phone className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold metallic-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              We're here to help with admissions, inquiries, and any questions 
              about our educational programs and campus facilities
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full metallic-gradient border-gray-600 glow-hover animated-border text-center">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="w-9 h-9 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl text-white">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <p className="text-white font-semibold text-lg mb-1">{info.primary}</p>
                      <p className="text-gray-300 text-sm">{info.secondary}</p>
                    </div>
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${info.gradient} hover:scale-105 transition-all duration-300`}
                    >
                      <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined}>
                        {info.title === "Visit Campus" ? (
                          <>
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </>
                        ) : (
                          info.title.split(' ')[0] + " Now"
                        )}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold metallic-text mb-6">How Can We Help?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the type of assistance you need and we'll connect you with the right person
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="metallic-gradient border-gray-600 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <action.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                    <p className="text-gray-300 text-sm">{action.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="metallic-gradient border-gray-600 glow-effect animated-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-white">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-gray-300">
                    Get personalized assistance for your educational needs
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <motion.div
                        animate={{
                          boxShadow: focusedField === "name" 
                            ? "0 0 20px rgba(59, 130, 246, 0.3)" 
                            : "0 0 0px rgba(59, 130, 246, 0)"
                        }}
                        className="rounded-lg"
                      >
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          placeholder="Your full name"
                          required
                          className="h-12 bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                      <motion.div
                        animate={{
                          boxShadow: focusedField === "email" 
                            ? "0 0 20px rgba(59, 130, 246, 0.3)" 
                            : "0 0 0px rgba(59, 130, 246, 0)"
                        }}
                        className="rounded-lg"
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          placeholder="your.email@example.com"
                          required
                          className="h-12 bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <motion.div
                        animate={{
                          boxShadow: focusedField === "message" 
                            ? "0 0 20px rgba(59, 130, 246, 0.3)" 
                            : "0 0 0px rgba(59, 130, 246, 0)"
                        }}
                        className="rounded-lg"
                      >
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          placeholder="Tell us about your inquiry, admission questions, or any other message..."
                          required
                          rows={5}
                          className="bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 transition-all duration-300 resize-none"
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 steel-blue-gradient hover:scale-105 transition-all duration-300 glow-hover text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                    
                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg ${
                          submitMessage.includes('error') || submitMessage.includes('Sorry') 
                            ? 'bg-red-900/30 text-red-300 border border-red-700' 
                            : 'bg-green-900/30 text-green-300 border border-green-700'
                        }`}
                      >
                        {submitMessage}
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* School Information & Map */}
            <div className="space-y-8">
              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="metallic-gradient border-gray-600 glow-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl text-white">
                      <Clock className="w-7 h-7 text-green-400" />
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Monday - Saturday</span>
                      </div>
                      <span className="text-green-300 font-bold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-red-400" />
                        <span className="text-gray-300">Sunday</span>
                      </div>
                      <span className="text-red-300 font-bold">Closed</span>
                    </div>
                    <p className="text-xs text-gray-400 bg-yellow-900/20 p-2 rounded border border-yellow-500/30">
                      <strong>Note:</strong> Hours may vary during examination periods and holidays
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Google Maps */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Card className="metallic-gradient border-gray-600 glow-effect overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl text-white">
                      <Building className="w-7 h-7 text-purple-400" />
                      <span>Find Us on Map</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full h-80">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.234567890123!2d75.895096!3d17.639206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d15a6ca3577f%3A0x6043330e1ddbd9a6!2sPadmashri%20Ramsing%20Bhanawat%20High%20school%20%26Jr.%20College%20of%20Arts%2CCommerce%20and%20Science%2CSolapur.!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Padmashri Ramsing Bhanawat High School Location"
                      ></iframe>
                    </div>
                    <div className="p-4 bg-black/30">
                      <p className="text-gray-300 text-sm text-center">
                        Located within the Jagruti Vidya Mandir Jr. College campus in Solapur
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-16"
        >
          <Card className="steel-blue-gradient glow-effect">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Join Our Community?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Take the first step towards excellence in education. Contact us today 
                  to learn more about our programs and admission process.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:07947417946"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 07947417946
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:prbschool123@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: prbschool123@gmail.com
                  </motion.a>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}