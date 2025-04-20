import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin, Instagram, Github } from 'lucide-react';







export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 relative">
      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out and I'll get back to you soon!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                      placeholder="Enter subject"
                      required
                    />
                  </div> 
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className={`w-full py-3 px-6 flex items-center justify-center font-medium rounded-lg shadow-lg transition-all duration-300 ${
                        formState === 'submitting'
                          ? 'bg-gray-700 cursor-not-allowed'
                          : formState === 'success'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                      }`}
                    >
                      {formState === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : formState === 'success' ? (
                        <span className="flex items-center">
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send size={18} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact information */}
          <div className="animate-on-scroll opacity-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-300">+91 6395691381</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-300">dobhal.sidharth770@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-300">Lane 7 phase 1, Banjarawala</p>
                      <p className="text-gray-300">Dehradun, Uttarakhand</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Social Media
                </h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/siddharthdobhal/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-gray-800 hover:bg-purple-500 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/heysidio/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-gray-800 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://github.com/siddharthdobhal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-gray-800 hover:bg-teal-500 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Ready to start a project?</h3>
                <p className="text-gray-300 mb-4">
                  I'm available for freelance projects. Let's create something amazing together!
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Get started now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

