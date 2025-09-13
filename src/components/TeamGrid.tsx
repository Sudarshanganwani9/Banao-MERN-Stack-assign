import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: teamMember1,
      bio: "Visionary leader with 15+ years in technology and business strategy.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer", 
      image: teamMember2,
      bio: "Expert in software architecture and emerging technologies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: teamMember3,
      bio: "Creative director passionate about user-centered design solutions.",
    },
    {
      name: "David Thompson",
      role: "Head of Operations",
      image: teamMember4,
      bio: "Operations specialist focused on efficiency and team growth.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the passionate individuals who drive our company's vision and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="gradient-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;