import { useState, useEffect } from 'react';
import { BookOpen, Headphones, FileText, Monitor, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: 'eBook Access',
      description: 'Browse and download thousands of eBooks across various genres and topics.'
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600" />,
      title: 'Audiobooks',
      description: 'Listen to your favorite books on the go with our extensive audiobook collection.'
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: 'Study Materials',
      description: 'Access comprehensive study guides, research papers, and academic resources.'
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: 'Online Reading Room',
      description: 'Read digital materials in a distraction-free virtual reading environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg fixed w-full px-4 top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Avyansh Digital Library</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className={`hover:text-blue-200 transition-colors ${
                    activeSection === 'home' ? 'text-blue-200 font-semibold' : ''
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`hover:text-blue-200 transition-colors ${
                    activeSection === 'services' ? 'text-blue-200 font-semibold' : ''
                  }`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`hover:text-blue-200 transition-colors ${
                    activeSection === 'contact' ? 'text-blue-200 font-semibold' : ''
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-blue-700 border-t border-blue-500">
            <ul className="flex flex-col">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-3 hover:bg-blue-800 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-3 hover:bg-blue-800 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 hover:bg-blue-800 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Welcome to Avyansh Digital Library
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your gateway to unlimited knowledge and learning. Access thousands of books, 
              audiobooks, and study materials from anywhere, anytime.
            </p>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className=" bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover a wide range of digital resources tailored to meet your learning needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-100 rounded-xl p-6 text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 9026684050</p>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
              <p className="text-gray-600">avyansh.digital.library@gmail.com</p>
              <p className="text-gray-600">support@digitallibrary.com</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Address</h3>
              <p className="text-gray-600">Patra Bazar Street beside The City med Hospital </p>
              <p className="text-gray-600">Uttar Pradesh Gorakhpur 273001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-xl font-bold">Avyansh Digital Library</h3>
          </div>
          <p className="text-blue-200 mb-2">
            Empowering minds through digital knowledge
          </p>
          <p className="text-blue-300 text-sm">
            © 2026 Avyansh Digital Library. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
