import { Button } from "@/components/ui/button";
import { Award, Users, Camera, Heart } from "lucide-react";
import portraitImage from "@/assets/portfolio-portrait.jpg";

const About = () => {
  const stats = [
    { icon: Camera, number: "500+", label: "Photo Sessions" },
    { icon: Heart, number: "200+", label: "Happy Couples" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Users, number: "1000+", label: "Satisfied Clients" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={portraitImage}
                alt="Alex - Professional Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-lg shadow-elegant p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Alex Thompson
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full mb-6"></div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of professional photography experience, I specialize in 
                  capturing the authentic emotions and beautiful moments that make your story unique. 
                  My approach combines artistic vision with technical expertise to create 
                  timeless images you'll treasure forever.
                </p>
                
                <p>
                  Whether it's your wedding day, a family portrait session, or a special event, 
                  I believe every photograph should tell a story. My goal is to make you feel 
                  comfortable and natural, allowing your genuine personality to shine through 
                  in every shot.
                </p>
                
                <p>
                  Based in the beautiful landscapes of Colorado, I travel worldwide to capture 
                  life's most precious moments. Let's create something beautiful together.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="hero" size="lg" className="group">
                Let's Work Together
                <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-elegant transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-display text-2xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;