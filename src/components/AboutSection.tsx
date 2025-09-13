import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Our
              <span className="block text-primary">Company</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're a forward-thinking company dedicated to creating innovative solutions 
              that make a real difference. Our diverse team brings together expertise 
              from various fields to tackle complex challenges.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on principles of collaboration, innovation, and excellence, 
              we've grown from a small startup to a recognized leader in our industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 gradient-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4 gradient-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 gradient-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="shadow-medium hover:shadow-large">
              Learn More About Us
            </Button>
          </div>
          
          {/* Values */}
          <div className="space-y-6 animate-fade-in">
            <div className="gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new technologies to deliver 
                cutting-edge solutions.
              </p>
            </div>
            
            <div className="gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Our strength lies in our diverse perspectives and collaborative approach 
                to problem-solving.
              </p>
            </div>
            
            <div className="gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to delivering the highest quality in everything we do, 
                exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;