import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ready to work with us? We'd love to hear from you. Send us a message 
              and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  
                  <div className="space-y-4 text-white/90">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>hello@ourteam.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>123 Innovation Street, Tech City, TC 12345</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                  <div className="space-y-2 text-white/90">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <form className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-soft space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Subject</label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or inquiry..." 
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glass" 
                  size="lg" 
                  className="w-full text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;