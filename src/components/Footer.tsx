const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-light">TeamHub</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              We're a team of passionate professionals dedicated to creating 
              innovative solutions that drive success and make a positive impact.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300 cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300 cursor-pointer">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300 cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-background/80 hover:text-primary-light transition-colors duration-300">Home</a></li>
              <li><a href="#team" className="text-background/80 hover:text-primary-light transition-colors duration-300">Team</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary-light transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary-light transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-background/80">Web Development</span></li>
              <li><span className="text-background/80">Mobile Apps</span></li>
              <li><span className="text-background/80">Consulting</span></li>
              <li><span className="text-background/80">Support</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 TeamHub. All rights reserved. | Made with ❤️ for the MERN Task Assignment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;