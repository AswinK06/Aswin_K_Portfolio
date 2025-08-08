
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, and Message).",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        to_email: 'aswinkannan0606@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly at aswinkannan0606@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 light:from-white light:via-purple-50 light:to-indigo-100">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 light:from-white light:via-purple-50 light:to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20 light:from-purple-100/30 light:via-transparent light:to-indigo-100/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 light:bg-purple-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 light:bg-indigo-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-white light:text-gray-800 mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 light:from-purple-600 light:via-violet-600 light:to-indigo-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 light:from-purple-500 light:to-indigo-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white light:text-gray-800 mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 light:from-purple-600 light:to-indigo-600 bg-clip-text text-transparent">Let's Connect</h3>
            <p className="text-gray-300 light:text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 light:from-purple-500 light:to-indigo-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 light:text-gray-500 text-sm">Email</p>
                  <p className="text-white light:text-gray-800">aswinkannan0606@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 light:from-violet-500 light:to-purple-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 light:text-gray-500 text-sm">Phone</p>
                  <p className="text-white light:text-gray-800">+91 9578413638</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 light:from-indigo-500 light:to-blue-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 light:text-gray-500 text-sm">Location</p>
                  <p className="text-white light:text-gray-800">Salem, Tamil Nadu</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/AswinK06" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 light:bg-white light:shadow-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 light:hover:from-purple-500 light:hover:to-indigo-500 transition-all duration-300 hover:scale-110">
                <Github size={20} className="text-white light:text-gray-700 light:hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/aswin-k-6a40ab259" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 light:bg-white light:shadow-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 light:hover:from-violet-500 light:hover:to-purple-500 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} className="text-white light:text-gray-700 light:hover:text-white" />
              </a>
              <a href="https://leetcode.com/u/Aswin_2005/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 light:bg-white light:shadow-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 light:hover:from-orange-500 light:hover:to-red-500 transition-all duration-300 hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white light:text-gray-700 light:hover:text-white">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 light:from-white/80 light:to-purple-50/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 light:border-purple-200/50 light:shadow-xl">
            <h3 className="text-xl font-semibold text-white light:text-gray-800 mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 light:from-purple-600 light:to-indigo-600 bg-clip-text text-transparent">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 light:text-gray-600 text-sm mb-2 block">Name *</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 light:bg-white light:border-purple-200 border-slate-600 text-white light:text-gray-800 focus:border-purple-400 light:focus:border-purple-500 rounded-lg" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-300 light:text-gray-600 text-sm mb-2 block">Email *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 light:bg-white light:border-purple-200 border-slate-600 text-white light:text-gray-800 focus:border-indigo-400 light:focus:border-indigo-500 rounded-lg" 
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-gray-300 light:text-gray-600 text-sm mb-2 block">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 light:bg-white light:border-purple-200 border-slate-600 text-white light:text-gray-800 focus:border-purple-400 light:focus:border-purple-500 rounded-lg" 
                  placeholder="Project discussion" 
                />
              </div>
              
              <div>
                <label className="text-gray-300 light:text-gray-600 text-sm mb-2 block">Message *</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 light:bg-white light:border-purple-200 border-slate-600 text-white light:text-gray-800 min-h-[120px] focus:border-indigo-400 light:focus:border-indigo-500 rounded-lg" 
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 light:from-purple-500 light:to-indigo-500 light:hover:from-purple-600 light:hover:to-indigo-600 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
